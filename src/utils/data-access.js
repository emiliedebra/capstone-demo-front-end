import axios from 'axios';

export function getResearchOutputs() {
  return axios
    .get('http://localhost:3000/basic-research-outputs')
    .then(response => response.data);
}

export function postResearchOutput(data) {
  return axios
    .post('http://localhost:3000/outputs', {
      title: data.title,
      type: data.pubType, // needs to be an id
      publication_year: data.year, // needs to be an int
      additional_info: data.abstract,
      Author_First_Name: data.authorFirst,
      Author_Last_Name: data.authorLast,
      text: data.text,
    })
    .then(response => console.log(response.status))
    .catch(response => console.log(response));
}

export function postUser(data) {
  return axios
    .post('http://localhost:3000/create-account', {
      first_name: data.first,
      last_name: data.last,
      email: data.email,
    })
    .then(response => console.log(response.status))
    .catch(response => console.log(response));
}

export function getReport(id) {
  return axios
    .get(`http://localhost:3000/detailed_view/${id}`)
    .then(response => response.data);
}
