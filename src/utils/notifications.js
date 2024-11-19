import Swal from 'sweetalert2';

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
    });
  }
}