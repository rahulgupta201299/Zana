import { TAppDispatch } from "@/Configurations/AppStore";
import { COUNTRY_INDIA } from "@/Constants/AppConstant";
import pinCodeServiceAction from "@/Redux/Cart/Services/Pincode";
import { PincodeResType } from "@/Redux/Cart/Types";


type SetFieldValue = (
  field: string,
  value: string,
  shouldValidate?: boolean,
) => Promise<unknown> | void;

type SetFormValues = (
  updates: Record<string, string>,
  shouldValidate?: boolean,
) => Promise<unknown> | void;

type SetFieldError = (
  field: string,
  message?: string,
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
  invalidPincode?: string;
  fields: PincodeFieldNames;
  dispatch: TAppDispatch;
  setFieldValue: SetFieldValue;
  setFormValues?: SetFormValues;
  setFieldError?: SetFieldError;
  onInvalidPincode: (pincode: string) => void;
  onValidPincode?: () => void;
};

export const normalizePincodeInput = (value: string) =>
  value.replace(/\D/g, "");

export const normalizePostalCodeInput = (value: string) =>
  value.replace(/[^a-zA-Z0-9-]/g, "");

function isIndia(country: string) {
  return country?.toLowerCase() === COUNTRY_INDIA.toLowerCase();
}

const pendingPincodeRequests = new Set<string>();

export async function handlePostalCodeChange({
  value,
  country,
  invalidPincode,
  fields,
  dispatch,
  setFieldValue,
  setFormValues,
  setFieldError,
  onInvalidPincode,
  onValidPincode,
}: HandlePostalCodeChangeParams) {
  const applyFieldValues = async (
    updates: Record<string, string>,
    shouldValidate = true,
  ) => {
    if (setFormValues) {
      await setFormValues(updates, shouldValidate);
      return;
    }

    await Promise.all(
      Object.entries(updates).map(([field, fieldValue]) =>
        setFieldValue(field, fieldValue, shouldValidate),
      ),
    );
  };

  if (!isIndia(country)) {
    const postalCode = normalizePostalCodeInput(value);
    const hyphenCount = postalCode.split("").filter((ch) => ch === "-").length;

    if (postalCode.length > 9 || hyphenCount > 1) return;
    await applyFieldValues({ [fields.pincode]: postalCode });
    onValidPincode?.();
    return;
  }

  const pincode = normalizePincodeInput(value);

  // extra code start - remove later
  if (pincode[0] === "0" || pincode.length > 6) return;

  await applyFieldValues({ [fields.pincode]: pincode });

  return;
  // extra code end

  if (pincode[0] === "0") {
    await applyFieldValues(
      {
        [fields.pincode]: "",
        [fields.city]: "",
        [fields.state]: "",
      },
      false,
    );
    onValidPincode?.();
    return;
  }

  if (pincode.length !== 6) {
    await applyFieldValues(
      {
        [fields.pincode]: pincode,
        [fields.city]: "",
        [fields.state]: "",
      },
      false,
    );
    onValidPincode?.();
    return;
  }

  await applyFieldValues({ [fields.pincode]: pincode });

  if (pincode === invalidPincode || pendingPincodeRequests.has(pincode)) return;

  try {
    pendingPincodeRequests.add(pincode);
    const details = (await dispatch(
      pinCodeServiceAction({ pincode }),
    )) as PincodeResType;

    if (!details) {
      onInvalidPincode(pincode);
      return;
    }

    await applyFieldValues({
      [fields.pincode]: pincode,
      [fields.city]: details.district || "",
      [fields.state]: details.state || "",
      [fields.country]: details.country || "",
    });
    setFieldError?.(fields.city, undefined);
    setFieldError?.(fields.state, undefined);
    onValidPincode?.();
  } catch {
    onInvalidPincode(pincode);
  } finally {
    pendingPincodeRequests.delete(pincode);
  }
}
