import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((data) => (
      data.map((res) => (
        {
          status: res.status,
          value: res.status === 'fulfilled' ? res.value : res.reason,
        }
      ))
    ));
}
export default handleProfileSignup;
