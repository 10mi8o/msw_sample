export const endpoint =
  process.env.REACT_APP_USE_MOCK_SERVER === "true"
    ? process.env.REACT_APP_MOCK_API_ENDPOINT
    : process.env.REACT_APP_API_ENDPOINT;
