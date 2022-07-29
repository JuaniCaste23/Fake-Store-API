window.addEventListener('load', async()=>{

/*variables*/
let products;
const url = 'https://fakestoreapi.com/products';
const all = document.getElementById('all');
const menorPrecio = document.getElementById('menor-precio');
const mayorPrecio = document.getElementById('mayor-precio');
const rating = document.getElementById('rating');
const prodContainer = document.getElementById('products-container');

//
    // const getProductById = (array, id) => array.find( el => el.id === id);
    // const getProductByPrice = (array, price) => array.filter( el => el.price === price);
//

/*definir eventos*/
    all.addEventListener('click', (e)=>{
        console.log('se hizo click en all');
        removeProductos();
        pintarProductos();
    });

    menorPrecio.addEventListener('click',(e)=>{
        removeProductos();
        pintarProdMenorPrecio();
    });

    mayorPrecio.addEventListener('click',(e)=>{
        removeProductos();
        pintarProdMayorPrecio();
    });

    rating.addEventListener('click',(e)=>{
        removeProductos();
        pintarProdRating();
    });



/* Tarea */

//Crear una función que recorra el array de productos y filtre por id  (usar .find())
// productFound = getProductById( products, 5 )
//✅

//getProductById tiene que ser una función que devuelva el objeto producto correspondiente al id 5;

// fetch(url)
//     .then( resp => resp.json() )//parsea a objeto literal .json()
//     .then( data => {
//         products = data;
//         console.log(products);
//         let functionId = getProductById(products,5);
//         products.forEach( el => {
//             if(el.id === functionId.id){
//                 let cardProd = document.createElement('div');
//                 cardProd.classList.add('bg-white','w-72','h-96','shadow-md','rounded','m-3');
//                 cardProd.innerHTML = `
//                     <div class="h-3/4 w-full">
//                         <img class="w-full h-full object-cover rounded-t" src="${el.image}" alt="piña">
//                     </div>
//                     <div class="w-full h-1/4 p-3">
//                         <a href="#" class=" hover:text-yellow-600 text-gray-700">
//                             <span class="text-lg font-semibold uppercase tracking-wide">${ el.category }</span>
//                         </a>
//                         <p class="text-gray-600 text-sm leading-5 mt-1">${el.title}</p>
//                     </div>
//                 `;
//                 prodContainer.appendChild(cardProd);
//             };
//         });

//         /*ejecutes la tarea*/ 
//     })
//     .catch( error => console.warn(error));


//Crear una función que recorrar el array de productos y filtre por precio  (usar .filter())

//   productsFiltrados = getProductsByPrice( products, 20 )
//

//getProductsByPrice tiene que ser una función que devuelva un array de objetos producto cuyo valor es menor o igual al número pasado por parámetro;



/*

_Para instalar tailwindcss_

npm install -D tailwindcss

npx tailwindcss init

npm run compile:tailwind //TODO HACER ESTO EN CADA OPERACION DE TAILWIND!

*/
/*funcion async/await*/     
    async function getProducts(){
        try{
            const response = await fetch(url); //fetch devuelve una promesa
            const data = await response.json(); //convierte el json que viene de la API en objeto literal
            products=data;
            console.log(data);
        } catch(error){
            console.warn(error);
        }    
    }


    function pintarProductos(){

        products.forEach( el => {
            let cardProd = document.createElement('div');
            cardProd.classList.add('bg-white','w-72','h-96','shadow-md','rounded','m-3');
            cardProd.innerHTML = `
                <div class="h-3/4 w-full">
                    <img class="w-full h-full object-cover rounded-t" src="${el.image}" alt="piña">
                </div>
                <div class="w-full h-1/4 p-3">
                    <a href="#" class=" hover:text-yellow-600 text-gray-700">
                        <span class="text-lg font-semibold uppercase tracking-wide">${ el.category }</span>
                    </a>
                    <p class="text-gray-600 text-sm leading-5 mt-1">${el.title}</p>
                </div>
            `;
            prodContainer.appendChild(cardProd);
        });
    }


    function pintarProdMenorPrecio(){
   
        products.sort(function (a, b) {
            if (a.price > b.price) {
              return 1;
            }
            if (a.price < b.price) {
              return -1;
            }
            // a must be equal to b
            return 0;
          });
          console.log(products);
          pintarProductos();
    }

    function pintarProdMayorPrecio(){
   
        products.sort(function (a, b) {
            if (a.price < b.price) {
              return 1;
            }
            if (a.price > b.price) {
              return -1;
            }
            // a must be equal to b
            return 0;
          });
          console.log(products);
          pintarProductos();
    }

    function pintarProdRating(){
   
        products.sort(function (a, b) {
            if (a.rating.rate < b.rating.rate) {
              return 1;
            }
            if (a.rating.rate > b.rating.rate) {
              return -1;
            }
            // a must be equal to b
            return 0;
          });
          console.log(products);
          pintarProductos();
    }


    function removeProductos(){
        while(prodContainer.firstChild){
            prodContainer.firstChild.remove();
    }
}

/*ejecuciones inmediatas*/
    await getProducts();
    // pintarProductos();

})