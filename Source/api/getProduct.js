const apiFetProduct = async () => {
    const apiResult = await fetch('http://localhost:3000/api/v1/products');
  
    const getDataFromFetchAPI = await apiResult.json();
    return getDataFromFetchAPI;
  }


  export {
    apiFetProduct
  }
  