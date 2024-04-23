export default function getFullResponseFromAPI(success) {
  return new Promise((resolve) => {
    if (!success) {
      throw new Error('The fake API is not working currently');
    }
    resolve({ status: 200, body: 'Success' });
  });
}
