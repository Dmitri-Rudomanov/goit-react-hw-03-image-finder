const API_KEY = '25037516-2b063c6f0e72bb55016baf1cc';
const BASE_URL = 'https://pixabay.com/api/';

function fetchGallery(name) {
  return fetch(
    `${BASE_URL}?q=${name}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    //return Promise.reject(new Error(`Нет покемона с именем ${name}`));
  });
}

const api = {
  fetchGallery,
};

export default api;
