import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const p0 = createUser();
  const p1 = uploadPhoto();
  Promise.all([p1, p0])
    .then((data) => {
      const { body } = data[0];
      const { firstName } = data[1];
      const { lastName } = data[1];
      const output = `${body} ${firstName} ${lastName}`;
      console.log(output);
    })
    .catch(() => console.log('Signup system offline'));
}
