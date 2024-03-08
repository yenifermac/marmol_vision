
const apiFetchProduct = "http://localhost:3000/api/v1";

async function createProduct(product){

    const response = await fetch(`${apiFetchProduct}/products/create`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(product),
    });

    if(!response.ok){

        throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    return data;


}

export {
    createProduct
}