import Swal from 'sweetalert2';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

iziToast.settings({
  position: "topRight",
  closeOnEscape: true,
  timeout: 3000,
});


export const notifications = {
  error(event) {
    return Swal.fire({
      title: "Error!",
      text: event.message,
      icon: "error",
      confirmButtonText: "Ok",
      didClose: () => {
        location.reload();
      },
    });
  },
  addedToFavorites: () => iziToast.success({
      message: "Added to favorites!",
    }),
  removedFromFavorites: () => iziToast.info({
      message: "Removed from favorites!",
    }),
  alreadyInFavariotes: () => iziToast.error({
      message: "Already added to favorites",
    }),
};

