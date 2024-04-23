import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const p0 = signUpUser(firstName, lastName);
  const p1 = uploadPhoto(fileName);
  return Promise.all([p1, p0]);
}
