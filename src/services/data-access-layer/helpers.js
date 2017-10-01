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

export function getAccessLevel(accessLevel) {
  const level = (typeof accessLevel !== 'number') ? parseInt(String(accessLevel), 10) : accessLevel;
  if (level === 0) {
    return 'Author';
  } else if (level === 1) {
    return 'CAIR Member';
  } else if (level === 2) {
    return 'Node Administrator';
  } else if (level === 3) {
    return 'Global Administrator';
  }
}

