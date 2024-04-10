import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoData, userData]) => {
      console.log(`${photoData.body} ${userData.firstName} ${userData.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
export default handleProfileSignup;
