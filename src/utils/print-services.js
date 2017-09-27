/* eslint no-undef: 0 */
/* Print Services for Generating Reports */
import 'print.js/dist/print.min';
import { nameReports } from '../services/data';
import store from '../store';

export function printJSON(json, ...props) {
  // transform into require json
  printJS({
    printable: json,
    properties: props,
    type: 'json',
  });
}

function printBasic() {
  nameReports()
    .then((result) => {
      printJS({
        printable: result,
        properties: ['title', 'author', 'publication_year', 'type'],
        type: 'json',
      });
    });
}

function printDetailed() {
  nameReports()
    .then((result) => {
      printJS({
        printable: result,
        properties: ['title', 'author', 'publication_year', 'node', 'type'],
        type: 'json',
      });
    });
}

export function printOutputs() {
  // transform into require json

  if (store.accessLevel > 1) {
    printDetailed();
  } else {
    printBasic();
  }
}
