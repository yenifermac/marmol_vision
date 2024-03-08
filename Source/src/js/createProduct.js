import {createProduct} from '../../api/addProduct.js';
/* const statusCheckbox = document.getElementById('status');  */
const fromP = document.getElementById('fromP');
/* const productStatusElement = document.getElementById('productStatus'); */



fromP.addEventListener(('submit'), (event)=>{
    event.preventDefault()
    const data = {
        name: event.target.name.value,
        type: event.target.type.value,
        color: event.target.color.value,
        surface: event.target.surface.value,
        /* status: event.target.status.value */
    }

    createProduct(data)
    .then((productCreado) => console.log(productCreado))
    .catch((err) => console.log(err));
})


/* 
statusCheckbox.addEventListener('change', function() {
    if (statusCheckbox.checked) {
        productStatusElement.textContent = 'Estado: Disponible';
    } else {
        productStatusElement.textContent = 'Estado: No disponible';
    }
}); */