import {createOrder} from '../../api/addOrder.js';

document.getElementById('design').addEventListener('change', function() {
  const material = document.getElementById('material');
  material.value = ""; // Restablece el valor del menú desplegable de "Material"
  const materialOptions = material.options;
  for (let i = 0; i < materialOptions.length; i++) {
    if (materialOptions[i].classList.contains(this.value)) {
      materialOptions[i].style.display = "block";
    } else {
      materialOptions[i].style.display = "none";
    }
  }
});

document.getElementById('material').addEventListener('change', function() {
  const imagen = document.getElementById('imagen');
  imagen.innerHTML = '<img src="' + this.value + '" alt="Imagen">';
});

document.getElementById('form_Order').addEventListener('submit', function(event){
    event.preventDefault()
    const data = {
        address: event.target.address.value,
        telephone: event.target.telephone.value,
        date: document.getElementById('post-form-2').value,
        design: event.target.design.value,
        material: event.target.material.value,
        image: document.getElementById('imagen').firstChild.src
    }

    createOrder(data)
    .then((OrderCreated) => {
        console.log(OrderCreated);
        // Muestra el mensaje de éxito
        const successMessage = document.getElementById('success-message');
        successMessage.classList.remove('hidden');
        // Limpia los campos del formulario
        event.target.reset();
        document.getElementById('imagen').innerHTML = '';
        // Oculta el mensaje de éxito después de 3 segundos
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 6000);
    })
    .catch((err) => console.log(err));
});

document.getElementById('logout-link').addEventListener('click', function(event) {
  event.preventDefault(); // Evita que el enlace realice su acción por defecto
  // Borra la información del usuario
  // Esto dependerá de cómo estés manejando la autenticación
  // Por ejemplo, si estás guardando la información del usuario en localStorage, podrías hacer algo como esto:
  localStorage.removeItem('user');

  // Redirige al usuario a la página de inicio de sesión
  window.location.pathname = '/login';
});
