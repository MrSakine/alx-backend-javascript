function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  }
  // Do nothing (return undefined)
}

module.exports = getPaymentTokenFromAPI;
