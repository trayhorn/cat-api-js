import Swal from 'sweetalert2';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


export const notifications = {
  error(event) {
    return Swal.fire({
      title: 'Error!',
      text: event.message,
      icon: 'error',
      confirmButtonText: 'Ok',
      didClose: () => {
        location.reload();
      }
    }) 
  },
  addedToFavorites() {
    return iziToast.success({
      message: "Added to favorites!",
      position: "topRight",
      closeOnEscape: true,
      timeout: 3000
    });
  },
  removedFromFavorites() {
    return iziToast.info({
      message: "Removed from favorites!",
      position: "topRight",
      closeOnEscape: true,
      timeout: 3000,
    });
  }
}

