import { fetchBreeds } from './api';
import Swal from 'sweetalert2';

const selectEl = document.querySelector('.breed-form_select');

fetchBreeds()
  .then(({ data }) => renderSelectOptions(data))
  .catch(e => {
    Swal.fire({
      title: 'Error!',
      text: e.message,
      icon: 'error',
      confirmButtonText: 'Ok',
    });
  })
  .finally(() => {
    selectEl.classList.remove('is-hidden');
  });

function renderSelectOptions(arr) {
  const markup = arr
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');

  selectEl.innerHTML = markup;
}