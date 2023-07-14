const botonBuscar = document.getElementById("buscar");
const inputFiltro = document.getElementById("filtro");
const brand = document.getElementById("brand");
const category = document.getElementById("category");
const discount = document.getElementById("discount");
const titulo = document.getElementById("titulo");
const pSkin = document.getElementById("pSkin");
const pGro = document.getElementById("pGro");
const pHome = document.getElementById("pHome");
const pSmart = document.getElementById("pSmart");
const pLap = document.getElementById("pLap");
const pFra = document.getElementById("pFra");
const rating = document.getElementById("rating");
const tablaFiltro = document.getElementById("tablaFiltro");
const divTablas = document.getElementById("tablas");
const modalBody = document.getElementById("cuerpoModal");
const itemCarousel = document.getElementById("itemCar");
const thumbnail = document.createElement("img");

traer();

function traer() {
  axios.get('https://dummyjson.com/products')
    .then(response => {
      console.log(response);
      response.data.products.forEach(element => {
        const ListaSmartphones = document.getElementById("smartphones");
        const ListaLaptop = document.getElementById("laptop");
        const ListaGroceries = document.getElementById("groceries");
        const ListaFragrances = document.getElementById("fragrances");
        const ListaHomeDecor = document.getElementById("homeDecor");
        const ListaSkincare = document.getElementById("skincare");
        const unTd = document.createElement("td");
        card = `<div class="card alinear" style="width: 18rem;">
        <img class="efectoCard" src="${element.thumbnail}">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text"> ⭐${element.rating} <br>${element.description}<br> $${element.price}</p>
          <a href="#" class="btn btn-primary" onclick="mostrarModal('${element.id}')">More Details</a>
        </div>
      </div>`;

        unTd.innerHTML = `<td> ${card}</td>`;
        switch (element.category) {
          case "smartphones":
            ListaSmartphones.appendChild(unTd);
            break;
          case "laptops":
            ListaLaptop.appendChild(unTd);
            break;
          case "groceries":
            ListaGroceries.appendChild(unTd);
            break;
          case "skincare":
            ListaSkincare.appendChild(unTd);
            break;
          case "home-decoration":
            ListaHomeDecor.appendChild(unTd);
            break;
          case "fragrances":
            ListaFragrances.appendChild(unTd);
            break;
        }

      });
    })
    .catch(error => {
      // handle error
      console.log(error);
    })
    .finally(() => {
      // always executed
    })
}

botonBuscar.onclick = (e) => {
  tablaFiltro.innerHTML = "";
  //divTablas.innerHTML = "";
  axios.get('https://dummyjson.com/products/search?q=' + inputFiltro.value)
    .then(res => {
      console.log(res);
      res.data.products.forEach(element => {
        card = `<div class="card" style="width: 18rem;">
        <img class="efectoCard" src="${element.thumbnail}">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text"> ⭐${element.rating} <br>${element.description}<br> ${element.price}</p>
          <a href="#" class="btn btn-primary" onclick="mostrarModal('${element.id}')">More Details</a>
        </div>
      </div>`;

        const unTd = document.createElement("td");
        unTd.innerHTML = `<td> ${card}</td>`;
        tablaFiltro.appendChild(unTd);
        titulo.innerHTML = `${element.title}`;
        rating.innerHTML = `Rating: ${element.rating}`;
        category.innerHTML = `Category: ${element.category}`;
        brand.innerHTML = `Brand: ${element.brand}`;
        discount.innerHTML = `Discount: ${element.discountPercentage}%`;

      });

      /*const unTr = document.createElement("tr");
      unTr.innerHTML = `<tr><button type="button" class="btn btn-secondary" onclick="traer()">Volver al menú</button></tr>`;
      tablaFiltro.appendChild(unTr);*/

    })
    .catch(error => {
      // handle error
      console.log(error);
    })
    .finally(() => {
    })
}

function mostrarModal(id) {
  axios.get('https://dummyjson.com/products/' + id)
    .then((response) => {
      titulo.innerHTML = `${response.data.title}`;
      rating.innerHTML = `Rating: ${response.data.rating}`;
      category.innerHTML = `Category: ${response.data.category}`;
      brand.innerHTML = `Brand: ${response.data.brand}`;
      discount.innerHTML = `Discount: ${response.data.discountPercentage}%`;
      response.data.images.forEach(item => {
        itemCarousel.innerHTML = `<img src="${item}">`
      })
    })
  const myModal = new bootstrap.Modal('#modalDetalle');
  myModal.show(true);
}