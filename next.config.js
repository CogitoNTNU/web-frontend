module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    endpoint: "https://cogito-backend.net",
    endpointMarketingAI: "http://16.171.88.123:8001",
    google_api_key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  },
};
