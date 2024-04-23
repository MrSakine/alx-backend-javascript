export default function handleResponseFromAPI(promise) {
  promise.then(() => {
    console.log('Got a response from the API');
    return ({ status: 200, body: 'success' });
  })
    .catch(() => {
      throw new Error('The fake API is not working currently');
    });
}
