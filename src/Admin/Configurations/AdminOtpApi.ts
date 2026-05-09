import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import Network from "@/Configurations/Network";

const network = new Network();

type AdminOtpResponseData = {
  message: string;
  email: string;
  expiresIn?: string;
  verified?: boolean;
};

type AdminOtpResponse = {
  success: boolean;
  data: AdminOtpResponseData;
  message?: string;
};

function assertSuccessfulResponse(response: AdminOtpResponse) {
  if (!response?.success) {
    throw new Error(response?.message || "Admin OTP request failed.");
  }
}

function isNotFoundError(error: unknown) {
  return (
    typeof error === "object" &&
    error !== null &&
    "response" in error &&
    (error as { response?: { status?: number } }).response?.status === 404
  );
}

async function requestAdminOtp(
  urls: string[],
  data: Record<string, string>,
) {
  let lastError: unknown;

  for (const url of urls) {
    try {
      return await network.request({
        url,
        method: API_METHOD_ENUM.POST,
        data,
      });
    } catch (error) {
      lastError = error;
      if (!isNotFoundError(error)) throw error;
    }
  }

  throw lastError;
}

export async function generateAdminEmailOtp(email: string) {
  const response: AdminOtpResponse = await requestAdminOtp(
    [
      "api/v1/otp/generate-admin-email-otp",
      
    ],
    { email },
  );

  assertSuccessfulResponse(response);
  return response.data;
}

export async function verifyAdminEmailOtp(email: string, otp: string) {
  const response: AdminOtpResponse = await requestAdminOtp(
    [
      "api/v1/otp/verify-admin-email-otp",
     ,
    ],
    { email, otp },
  );

  assertSuccessfulResponse(response);
  return response.data;
}
