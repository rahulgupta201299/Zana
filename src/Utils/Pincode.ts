import { TAppDispatch } from "@/Configurations/AppStore";
import { COUNTRY_INDIA } from "@/Constants/AppConstant";
import pinCodeServiceAction from "@/Redux/Cart/Services/Pincode";
import { PincodeResType } from "@/Redux/Cart/Types";


type SetFieldValue = (
  field: string,
  value: string,
  shouldValidate?: boolean,
) => void;

type PincodeFieldNames = {
  pincode: string;
  city: string;
  state: string;
  country: string;
};

type HandlePostalCodeChangeParams = {
  value: string;
  country: string;
  fields: PincodeFieldNames;
  dispatch: TAppDispatch;
  setFieldValue: SetFieldValue;
  onInvalidPincode: () => void;
};

export const normalizePincodeInput = (value: string) =>
  value.replace(/\D/g, "");

export const normalizePostalCodeInput = (value: string) =>
  value.replace(/[^a-zA-Z0-9-]/g, "");

function isIndia(country: string) {
  return country?.toLowerCase() === COUNTRY_INDIA.toLowerCase();
}

export async function handlePostalCodeChange({
  value,
  country,
  fields,
  dispatch,
  setFieldValue,
  onInvalidPincode,
}: HandlePostalCodeChangeParams) {
  if (!isIndia(country)) {
    const postalCode = normalizePostalCodeInput(value);
    const hyphenCount = postalCode.split("").filter((ch) => ch === "-").length;

    if (postalCode.length > 9 || hyphenCount > 1) return;
    setFieldValue(fields.pincode, postalCode, true);
    return;
  }

  const pincode = normalizePincodeInput(value);
  if (pincode.length > 6) return;

  if (pincode[0] === "0") {
    setFieldValue(fields.pincode, "", true);
    return;
  }

  setFieldValue(fields.pincode, pincode, true);

  if (pincode.length !== 6) return;

  try {
    const details = (await dispatch(
      pinCodeServiceAction({ pincode }),
    )) as PincodeResType;

    if (!details) {
      onInvalidPincode();
      return;
    }

    setFieldValue(fields.city, details.district, true);
    setFieldValue(fields.state, details.state, true);
    setFieldValue(fields.country, details.country, true);
  } catch {
    onInvalidPincode();
  }
}
