export type T_AUTH_REDUCER = {
  login: {
    phoneNumber: string;
    verified: boolean;
    firstName?: string;
    lastName?: string;
    address?: string;
    notifyOffers?: false;
  };
};
