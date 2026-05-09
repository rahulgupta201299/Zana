const ADMIN_AUTH_STORAGE_KEY = "zana_admin_email";

export function getAdminEmail() {
  return localStorage.getItem(ADMIN_AUTH_STORAGE_KEY);
}

export function isAdminAuthenticated() {
  return Boolean(getAdminEmail());
}

export function setAdminSession(email: string) {
  localStorage.setItem(ADMIN_AUTH_STORAGE_KEY, email);
}

export function clearAdminSession() {
  localStorage.removeItem(ADMIN_AUTH_STORAGE_KEY);
}
