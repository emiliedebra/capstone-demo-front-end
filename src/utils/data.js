export function getUsers() {
  const users = [
    {
      id: 1,
      name: 'Emilie Wood',
      email: 'emilie@anotherway.co.za',
      password: '1234',
      accessLevel: 2,
    },
    {
      id: 2,
      name: 'Clinton Wood',
      email: 'clint@anotherway.co.za',
      password: '12345',
      accessLevel: 1,
    },
    {
      id: 3,
      name: 'Caitlin Wood',
      email: 'cait@anotherway.co.za',
      password: '123',
      accessLevel: 0,
    },
  ];
  return users;
}

export function getDetailedResearchOutputs() {
  return [
    {
      id: 0,
      title: 'Hello This is a Long Journal Entry Name for Testing Purposes That Goes over the Edge Perhaps',
      type: 'Journal',
      publication_year: '2017',
      author: 'Emilie Wood',
      additional_info: 'Just some hard-coded data that needs to probably be removed soon',
      proof_link: 'www.proof.com',
      proof_verified: 1,
    },
    {
      id: 1,
      title: 'Hello',
      type: 'Book',
      publication_year: '2017',
      author: 'Clinton Wood',
      additional_info: 'Just some hard-coded data that needs to probably be removed soon',
      proof_link: null,
      proof_verified: 0,
    },
  ];
}

export function getReport(id) {
  const reports = getDetailedResearchOutputs();
  for (const report of reports) {
    if (report.id === id) {
      return report;
    }
  }
}

export function getPublicationTypes() {
  return [
    {
      id: 0,
      name: 'Book',
    },
    {
      id: 1,
      name: 'Journal',
    },
    {
      id: 2,
      name: 'Book Chapter',
    },
  ];
}

export function login(data) { // data is email and password
  const users = getUsers();
  for (const user of users) {
    if (user.email === data.email && user.password === data.password) {
      return user;
    }
  }
  return 0;
}
