import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const firstData = uploadPhoto();
  const secondData = createUser();
  return Promise.all([firstData, secondData])
    .then((results) => {
      console.log(`${results[0].body} ${results[1].firstName} ${results[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
