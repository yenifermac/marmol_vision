
const apiFetchOrder = "http://localhost:3000/api/v1";


async function createOrder(order){

    const response = await fetch(`${apiFetchOrder}/orders/create`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(order),
    });

    if(!response.ok){

        throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    return data;


}

export {
    createOrder,
}