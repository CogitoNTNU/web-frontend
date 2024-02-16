module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    endpoint: "https://cogito-backend.net",
    google_api_key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  },
};
