const scriptUrl = 'https://script.google.com/macros/s/AKfycbz1gkIZ2zOwQYnTtj2RClDgDyLRCJUk4eWLTybTli-ZYHBJusgEjr7iPX0vd8DMixG-/exec';
const form = document.forms['asistenciaform'];

form.addEventListener('submit', e => {
  e.preventDefault();

  Swal.fire({
    title: 'Enviando...',
    text: 'Por favor, esperá un momento',
    allowOutsideClick: false,
    allowEscapeKey: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });

  fetch(scriptUrl, { method: 'POST', body: new FormData(form) })
    .then(response => {
      Swal.fire({
        title: "¡MUCHAS GRACIAS!",
        text: "Formulario Enviado",
        icon: "success"
      });
    })
    .then(() => {
      setTimeout(() => {
        window.location.reload();
      }, 1500); // da tiempo a leer el mensaje
    })
    .catch(error => {
      Swal.fire("Error", "Ups!, No se pudo enviar el formulario. Intentá de nuevo.", "error");
      console.error('Error', error.message);
    });
});
