import { TAppDispatch } from "@/Configurations/AppStore";
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
  fields: PincodeFieldNames;
  dispatch: TAppDispatch;
  setFieldValue: SetFieldValue;
  onInvalidPincode: () => void;
};

export const normalizePincodeInput = (value: string) =>
  value.replace(/\D/g, "").slice(0, 6);

export async function handlePostalCodeChange({
  value,
  fields,
  dispatch,
  setFieldValue,
  onInvalidPincode,
}: HandlePostalCodeChangeParams) {
  const pincode = normalizePincodeInput(value);
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
