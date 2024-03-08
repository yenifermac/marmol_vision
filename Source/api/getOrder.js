const apiFetchOrder = async () => {
    const apiResult = await fetch('http://localhost:3000/api/v1/orders');
  
    const getDataFromFetchAPI = await apiResult.json();
    return getDataFromFetchAPI;
  }


  export {
    apiFetchOrder
  }
  