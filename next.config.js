module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  env: {
    endpoint: "https://backend.cogito-ntnu.no",
    endpointMarketingAI: "https://marketingai.cogito-ntnu.no",
    google_api_key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  },
};
