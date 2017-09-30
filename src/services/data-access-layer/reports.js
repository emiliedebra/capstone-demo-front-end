import { cloneObject } from '../../utils/data-utils';
import { getAuthorName } from './users';
import { getNodeName } from './nodes';
import { getVerificationDetails } from './helpers';
import { getPublicationType } from './publication-types';

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
            getVerificationDetails(output),
          ])
            .then(([author, type, node, verificationDetails]) => {
              output.author = author;
              output.type = type;
              output.node = node;
              output.proof_verified = verificationDetails;
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

export function getNormalizedReport(id) {
  // returns report given id
  return Promise.resolve(researchOutputs)
    .then((reports) => {
      for (const report of reports) {
        if (report.id === id) {
          return report;
        }
      }
    });
}

let lastId = 0;
export const researchOutputs = [
  {
    id: lastId++,
    title: 'Hello This is a Long Journal Entry Name for Testing Purposes That Goes over the Edge Perhaps',
    type: 0,
    publication_year: '2017',
    author: 1,
    coauthors: [],
    additional_info: 'Just some hard-coded data that needs to probably be removed soon',
    proof_link: 'www.proof.com',
    proof_verified: true,
    pdf: '/home/emilie/ITDev/projects/CBIB-Front-end/src/assets/pdfs/Ruttkamp-Bloem-ea.pdf',
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
    proof_verified: false,
    pdf: '/home/emilie/ITDev/projects/CBIB-Front-end/src/assets/pdfs/Ruttkamp-Bloem-ea.pdf',
  },
];
