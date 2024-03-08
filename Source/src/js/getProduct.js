import { apiFetProduct} from '../../api/getProduct.js'
const containerListProduct = document.getElementById('container-list-product');



apiFetProduct()
    .then((dataProduct) => {
        let allProducts = '';
        dataProduct.forEach(product => {
            allProducts += gridProducts(product);
        });
        containerListProduct.innerHTML = allProducts;
    }).catch((err) => console.log(err));

function gridProducts(product) {
    return `

  
    <div class="box">
        <div class="p-5">
            <div class="h-40 2xl:h-56 image-fit rounded-md overflow-hidden before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:bg-gradient-to-t before:bg-gradient-to-t before:from-black before:to-black/10">
                <img alt="Midone - HTML Admin Template" class="rounded-md" src="https://previews.123rf.com/images/bussarink/bussarink2303/bussarink230300002/201795752-fondo-de-textura-de-m%C3%A1rmol-blanco-y-dorado-con-alta-resoluci%C3%B3n-patr%C3%B3n-de-m%C3%A1rmol-con-vetas.jpg">
                <span class="absolute top-0 bg-pending/80 text-white text-xs m-5 px-2 py-1 rounded z-10"></span> 
                <div class="absolute bottom-0 text-white px-5 pb-6 z-10"> <a href="" class="block font-medium text-base">${product.name}</a> <span class="text-white text-xs mt-3">${product.color}</span> </div>
            </div>
            <div class="text-slate-600 dark:text-slate-500 mt-5">
                <div class="flex items-center"> <i data-lucide="link" class="w-4 h-4 mr-2"></i> Pecio: $168 </div>
                <div class="flex items-center mt-2"> <i data-lucide="layers" class="w-4 h-4 mr-2"></i> cantidad: 5</div>
                <div class="flex items-center mt-2"> <i data-lucide="check-square" class="w-4 h-4 mr-2"></i> Estado: Activo </div>
            </div>
        </div>
        <div class="flex justify-center lg:justify-end items-center p-5 border-t border-slate-200/60 dark:border-darkmode-400">
            <a class="flex items-center text-primary mr-auto" href="javascript:;"> <i data-lucide="eye" class="w-4 h-4 mr-1"></i>Ver</a>
            <a class="flex items-center mr-3" href="javascript:;"> <i data-lucide="check-square" class="w-4 h-4 mr-1"></i> Editar </a>
            <a class="flex items-center text-danger" href="javascript:;" data-tw-toggle="modal" data-tw-target="#delete-confirmation-modal"> <i data-lucide="trash-2" class="w-4 h-4 mr-1"></i>Eliminar</a>
        </div>
    </div>


`;
}
