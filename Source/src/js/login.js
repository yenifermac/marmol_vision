const form = document.getElementById('form');
const alertElement = document.getElementById('alerta');
const alertElement2 = document.getElementById('alerta2');

import {
  apiFetchUser,
  datosValidos,
  apiFetchOneUser
} from '../../api/getUser.js';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = {
    email: event.target.email.value,
    password: event.target.password.value,
  };

  //TODO: Change
  apiFetchUser()
    .then((listaDeUsuarios) => {
      let user = listaDeUsuarios.find(userEmail => {
        if (userEmail.cadaUsuario.email === data.email) {
          return userEmail.cadaUsuario;
        }
      })
      console.log(user);

      if (user === undefined) {
        alertElement.classList.add('text-black', 'p-2', 'w-80', 'text-center', 'ml-6');
        alertElement.innerHTML = '¡Correo no registrado!';
      } else {
      datosValidos(user.id, data.password)
        .then((response) => {
          const {
            message,
            error
          } = response;
          if (message) return window.location.pathname = '/';
          if (error) {

            alertElement2.classList.add( 'text-black', 'p-2', 'w-80', 'text-center', 'ml-6');
            alertElement2.innerHTML = '¡Correo o contraseña inválido!';


          }
        })
        .catch(err => console.log(err));
    }

  })
    .catch(err => console.error(err));

  



  // const dataGetLocalStorage = window.localStorage.getItem('user');

  // const convertDataGetLocalStorage = JSON.parse(dataGetLocalStorage);

  // if (convertDataGetLocalStorage.email === data.email && convertDataGetLocalStorage.password === data.password) {
  //   window.location.pathname = '/';
  // } else {
  //   alert('Email or password is incorrect');
  // }


})