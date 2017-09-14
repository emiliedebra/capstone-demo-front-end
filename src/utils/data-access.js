import axios from 'axios';

export function getResearchOutputs() {
  // hard-coded error data
  const post = {
    outputs: [
      {
        id: 0,
        title: 'Hello This is a Long Journal Entry Name for Testing Purposes That Goes over the Edge Perhaps',
        type: 'Journal',
        publication_year: '2017',
        Author_First_Name: 'Emilie',
        Author_Last_Name: 'Wood',
        additional_info: 'Just some hard-coded data that needs to probably be removed soon',
      },
      {
        id: 1,
        title: 'Hello',
        type: 'Journal',
        publication_year: '2017',
        Author_First_Name: 'Emilie',
        Author_Last_Name: 'Wood',
        additional_info: 'Just some hard-coded data that needs to probably be removed soon',
      },
    ],
  };
  return axios
    .get('http://localhost:3000/basic-research-outputs')
    .then(response => response.data)
    .catch(() => post);
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
  console.log('DEBUG: ', data);
  return axios
    .post('http://localhost:3000/create-account', {
      first_name: data.first,
      last_name: data.last,
      email: data.email,
      access_level: 0,
    })
    .then(response => console.log(response.status))
    .catch(response => console.log(response, 'Post User Function Reached - Not Yet Implemented'));
}

export function getReport(id) {
  const post = [
    {
      id: 0,
      title: 'Hello',
      type: 'Journal',
      publication_year: '2017',
      Author_First_Name: 'Emilie',
      Author_Last_Name: 'Wood',
      additional_info: 'Just some hard-coded data that needs to probably be removed soon',
    },
  ];
  return axios
    .get(`http://localhost:3000/detailed_view/${id}`)
    .then(response => response.data)
    .catch(() => post);
}

export function postNode(data) {
  return axios
    .post('http://localhost:3000/create-node', {
      name: data.name,
      location: data.location,
      description: data.description,
      admin_id: 1,
    })
    .then(response => console.log(response.status))
    .catch(response => console.log(response, 'Post Node Function Reached - Not Yet Implemented'));
}
