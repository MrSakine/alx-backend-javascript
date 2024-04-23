export default function handleResponseFromAPI(promise) {
  promise.then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error('The fake API is not working currently'))
    .finally(() => console.log('Got a response from the API'));
}
