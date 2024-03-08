const store = require('./store.js');

function addOrder(order){

    return new Promise((resolve,reject)=>{
        
        if(!order){
            return reject("Campo vacioo");
        }
        if(order){

            const newOrder = {

                address: order.address,
                telephone: order.telephone,
                date: order.date,
                design: order.design,
                material: order.material,
                image: order.image,

                
            }
            store.addOrder(newOrder);
            resolve(newOrder);
        }
    })

}




function listOrder() {
    return new Promise((resolve, reject) => {
      resolve(store.getOrder());
    })
  }


module.exports ={

    addOrder,
    listOrder
}