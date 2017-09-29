import { cloneObject } from '../utils/data-utils';

let lastUserId = 0;
const users = [
  {
    id: lastUserId++,
    name: 'Sean Wood',
    email: '1',
    password: '1',
    accessLevel: 2,
    node: 1,
  },
  {
    id: lastUserId++,
    name: 'Emilie Wood',
    email: 'emilie@anotherway.co.za',
    password: '1234',
    accessLevel: 2,
    node: null,
  },
  {
    id: lastUserId++,
    name: 'Clinton Wood',
    email: 'clint@anotherway.co.za',
    password: '12345',
    accessLevel: 1,
    node: null,
  },
  {
    id: lastUserId++,
    name: 'Caitlin Wood',
    email: 'cait@anotherway.co.za',
    password: '123',
    accessLevel: 0,
    node: null,
  },
];

let lastNodeId = 0;
const nodes = [
  {
    id: lastNodeId++,
    name: 'UCT',
    description: 'Center for AI.',
    location: 'Cape Town',
    nodeAdmin: 2,
  },
  {
    id: lastNodeId++,
    name: 'Wits',
    description: 'Center for AI in Human Robotics',
    location: 'Pretoria',
    nodeAdmin: 2,
  },
  {
    id: lastNodeId++,
    name: 'Stellenbosch',
    description: 'Research Institute of AI',
    location: 'Western Cape',
    nodeAdmin: 1,
  },
  {
    id: lastNodeId++,
    name: 'UJ',
    description: 'Partners of Stellenbosch Node',
    location: 'Johannesburg',
    nodeAdmin: 0,
  },
];

const publicationTypes = [
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

let lastId = 0;
const researchOutputs = [
  {
    id: lastId++,
    title: 'Hello This is a Long Journal Entry Name for Testing Purposes That Goes over the Edge Perhaps',
    type: 0,
    publication_year: '2017',
    author: 1,
    coauthors: [],
    additional_info: 'Just some hard-coded data that needs to probably be removed soon',
    proof_link: 'www.proof.com',
    proof_verified: 1,
  },
  {
    id: lastId++,
    title: 'Hello',
    type: 1,
    publication_year: '2017',
    author: 2,
    coauthors: [],
    additional_info: 'Just some hard-coded data that needs to probably be removed soon',
    proof_link: null,
    proof_verified: 0,
  },
];

export function getUsers() {
  // returns an array of user objects
  return Promise.resolve(users);
}

export function getAuthorName(id) {
  // returns an array of user objects
  return getUsers()
    .then((result) => {
      for (const user of result) {
        if (user.id === id) {
          return user.name;
        }
      }
    });
}

export function getDetailedResearchOutputs() {
  // return and array of research outpus objects with details
  return Promise
    .resolve(cloneObject(researchOutputs))
    .then(outputs => Promise.all(
      outputs
        .map(output =>
          Promise.all([
            getAuthorName(output.author),
            getPublicationType(output.type),
            getNodeName(output.node),
          ])
            .then(([author, type, node]) => {
              output.author = author;
              output.type = type;
              output.node = node;
              return output;
            })
        ))
    );
}

export function getBasicResearchOutputs() {
  return getDetailedResearchOutputs()
    .then(outputs => outputs
      .map((output) => {
        delete output.proof_link;
        delete output.proof_verified;
        return output;
      })
    );
}

// export function nameReports() {
//   const data = JSON.parse(JSON.stringify(researchOutputs));
//   for (const item of data) {
//     getNodeName(item.node)
//       .then((node) => { item.node = node; });
//     getPublicationType(item.type)
//       .then((type) => { item.type = type; });
//     getAuthorName(item.author)
//       .then((name) => { item.author = name; });
//   }
//   return Promise.resolve(data);
// }

export function postResearchOutput(data) {
  const _data = cloneObject(data);
  lastId++;
  _data.id = lastId;
  researchOutputs.push(_data);
  return Promise.resolve();
}

export function deleteResearchOutput(data) {
  const _data = cloneObject(data);
  const index = researchOutputs.findIndex(x => x.id === _data);
  // const index = researchOutputs.indexOf(data);
  if (index > -1) {
    researchOutputs.splice(index, 1);
  }
  // researchOutputs.push(_data);
  return Promise.resolve();
}

export function updateResearchOutput(data) {
  const _data = cloneObject(data);
  const index = researchOutputs.findIndex(x => x.id === _data.id);
  // const index = researchOutputs.indexOf(data);
  if (index > -1) {
    researchOutputs[index] = _data;
  }
  // researchOutputs.push(_data);
  return Promise.resolve();
}

export function getResearchOutputsSearch(search) {
  // returns a list of research outputs based on search
  // NB: Doesn't work yet
  return getDetailedResearchOutputs()
    .then((reports) => {
      const result = [];
      for (const report of reports) {
        for (const key of Object.keys(report)) {
          if (report[key] === search) {
            result.push(report);
          }
        }
      }
      if (result.length > 0) {
        return result;
      }
      return [];
    });
}

export function newReport() {
  return {
    // dialog: false,
    title: '',
    type: null,
    publication_year: null,
    author: null,
    coauthors: [],
    additional_info: '',
    proof_verified: false,
    proof_link: '',
  };
}

export function getReport(id) {
  // returns report given id
  return getDetailedResearchOutputs()
    .then((reports) => {
      for (const report of reports) {
        if (report.id === id) {
          return report;
        }
      }
    });
}

export function getPublicationTypes() {
  // returns a list of type objects
  return Promise.resolve(publicationTypes);
}

export function getPublicationType(id) {
  // returns a list of type objects
  return getPublicationTypes()
    .then((result) => {
      for (const pub of result) {
        if (pub.id === id) {
          return pub.name;
        }
      }
    });
}

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

export function postUser(data) {
  const _data = cloneObject(data);
  lastUserId++;
  _data.id = lastUserId;
  users.push(_data);
  return Promise.resolve();
}

export function postNode(data) {
  const _data = cloneObject(data);
  lastNodeId++;
  _data.id = lastNodeId;
  nodes.push(_data);
  return Promise.resolve();
}

export function getNodes() {
  // returns an array of user objects
  return Promise.resolve(nodes);
}

export function getNodeName(id) {
  // returns an array of user objects
  if (id !== 0 && id !== null) {
    return getNodes()
      .then((result) => {
        for (const node of result) {
          if (node.id === id) {
            return node.name;
          }
        }
      });
  }
  return 'None';
}
