/* eslint no-undef: 0 */

import 'print.js/dist/print.min';

export function printJSON(json, ...props) {
  // transform into require json
  printJS({
    printable: json,
    properties: props,
    type: 'json',
  });
}

function printBasic(data) {
  printJS({
    printable: data,
    properties: ['title', 'Author_First_Name', 'Author_Last_Name', 'publication_year', 'type'],
    type: 'json',
  });
}

function printDetailed(data) {
  printJS({
    printable: data,
    properties: ['title', 'Author_First_Name', 'Author_Last_Name', 'publication_year', 'peerReview'],
    type: 'json',
  });
}

export function printOutputs(data) {
  // transform into require json

  // TODO: get from store
  const access = 10;

  if (access > 1) {
    printBasic(data);
  } else {
    printDetailed(data);
  }
}
