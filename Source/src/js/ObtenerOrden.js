import { apiFetchOrder} from '../../api/getOrder.js'
const containerOrder = document.getElementById('containerOrder');

apiFetchOrder()
    .then((dataOrder) => {
        let allOrder = '';
        dataOrder.forEach(product => {
            console.log(product)
            allOrder += Order(product);
        });
        containerOrder.innerHTML = allOrder;
    }).catch((err) => console.log(err));




    
    function Order(order) {
        return `
            <table>
                <tr>
                    <th>Dirección</th>
                    <td>${order.address}</td>
                </tr>
                <tr>
                    <th>Teléfono</th>
                    <td>${order.telephone}</td>
                </tr>
                <tr>
                    <th>Fecha</th>
                    <td>${order.date}</td>
                </tr>
                <tr>
                    <th>Diseño</th>
                    <td>${order.design}</td>
                </tr>
                <tr>
                    <th>Material</th>
                    <td>${order.material}</td>
                </tr>
                <tr>
                    <th>Imagen</th>
                    <td><img src="${order.image}" alt="Imagen del producto" style="width: 100px;"></td>
                </tr>
            </table>
        `
    }
    