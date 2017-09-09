import axios from 'axios';

export function getResearchOutputs() {
  return axios
    .get('http://localhost:3000/')
    .then(response => response.data);
}

export function postResearchOutput(data) {
  return axios
    .post('http://localhost:3000/outputs', {
      title: data.title,
      type: data.pubType,
      publication_year: data.year,
      additional_info: data.text,
      author: data.author,
    })
    .then(response => console.log(response.status))
    .catch(response => console.log(response));
}
