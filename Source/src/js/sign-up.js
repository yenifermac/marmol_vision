import { createUser } from '../../api/index.js';

const form = document.getElementById("form")

    form.addEventListener("submit", (event)=> {
        event.preventDefault() 
        const data = {
            fullname: event.target.fullname.value,
            username: event.target.username.value,
            email: event.target.email.value,
            password: event.target.password.value
        }
        createUser(data)
        .then((usuarioCreado)=>{console.log(usuarioCreado);})
        .catch((err) => console.log(err))
        
    })
