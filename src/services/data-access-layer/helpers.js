import { getUsers } from './users';

export function login(data) { // data is email and password
  // checks login details and return user or 0
  return getUsers()
    .then((result) => {
      for (const user of result) {
        if (user.email === data.email && user.password === data.password) {
          return user;
        }
      }
    });
}

export function getVerificationDetails(report) {
  if (report.proof_verified === false) {
    return 'Not Verified';
  }
  return 'Verified';
}
