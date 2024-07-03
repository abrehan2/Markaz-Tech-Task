export const config = {
  IS_PRODUCTION: process.env.NODE_ENV === "production",
  API_ENDPOINT: "https://dummyjson.com",
  TOKEN_EXPIRE_MS: 60 * 60 * 1000,
};
