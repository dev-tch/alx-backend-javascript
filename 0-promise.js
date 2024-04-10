function getResponseFromAPI() {
  return Promise.resolve((resolve) => {
    const response = {
      status: 200,
      data: 'example API response',
    };
    resolve(response);
  });
}
export default getResponseFromAPI;
