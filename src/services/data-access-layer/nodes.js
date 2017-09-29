import { cloneObject } from '../../utils/data-utils';

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
        return 'None';
      });
  }
}

let lastNodeId = 0;
export const nodes = [
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
