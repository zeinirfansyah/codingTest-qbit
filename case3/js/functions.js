const products = [
  {
    fruitId: 1,
    fruitName: 'Apel',
    fruitType: 'IMPORT',
    stock: 10,
    description: 'Apel adalah buah yang memiliki rasa manis dan segar. Apel juga memiliki kandungan vitamin yang baik untuk kesehatan tubuh.',
    foto: '../assets/kurma.jpg'
  },
  {
    fruitId: 2,
    fruitName: 'Kurma',
    fruitType: 'IMPORT',
    stock: 20,
    description: 'Kurma adalah buah yang memiliki rasa manis dan segar. Kurma juga memiliki kandungan vitamin yang baik untuk kesehatan tubuh.',
    foto: '../assets/kurma.jpg'
  },
  {
    fruitId: 3,
    fruitName: 'apel',
    fruitType: 'IMPORT',
    stock: 50,
    description: 'Apel adalah buah yang memiliki rasa manis dan segar. Apel juga memiliki kandungan vitamin yang baik untuk kesehatan tubuh.',
    foto: '../assets/kurma.jpg'
  },
  {
    fruitId: 4,
    fruitName: 'Manggis',
    fruitType: 'LOCAL',
    stock: 100,
    description: 'Manggis adalah buah yang memiliki rasa manis dan segar. Manggis juga memiliki kandungan vitamin yang baik untuk kesehatan tubuh.',
    foto: '../assets/kurma.jpg'
  },
  {
    fruitId: 5,
    fruitName: 'Jeruk Bali',
    fruitType: 'LOCAL',
    stock: 10,
    description: 'Jeruk Bali adalah buah yang memiliki rasa manis dan segar. Jeruk Bali juga memiliki kandungan vitamin yang baik untuk kesehatan tubuh.',
    foto: '../assets/kurma.jpg'
  },
  {
    fruitId: 5,
    fruitName: 'KURMA',
    fruitType: 'IMPORT',
    stock: 20,
    description: 'Kurma adalah buah yang memiliki rasa manis dan segar. Kurma juga memiliki kandungan vitamin yang baik untuk kesehatan tubuh.',
    foto: '../assets/kurma.jpg'
  },
  {
    fruitId: 5,
    fruitName: 'Salak',
    fruitType: 'LOCAL',
    stock: 150,
    description: 'Salak adalah buah yang memiliki rasa manis dan segar. Salak juga memiliki kandungan vitamin yang baik untuk kesehatan tubuh.',
    foto: '../assets/kurma.jpg'
  }
];

// const productContainer = document.querySelector(".products");
// let displayProduct = products.map(function (product) {
//   return `<div class="buah card mb-3 mx-auto">
//   <img src="${product.foto}" class="card-img-top"/>
//   <div class="card-body">
//     <div class="tipeBuah">${product.fruitType}</div>
//     <br>
//     <h5 class="card-title">${product.fruitName}</h5>
//     <p class="card-text">
//       Stok: ${product.stock} <br>
//       <div class="fruit-description ">${product.description}</div>
//     </p>
//   </div>
// </div>`;
// });

// displayProduct = displayProduct.join("");
// productContainer.innerHTML = displayProduct;

const productsPerPage = 4;
let currentPage = 1;

function displayProducts(products) {
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = products.slice(startIndex, endIndex);
  const productContainer = document.querySelector(".products");
  let displayProduct = displayedProducts.map(function (product) {
    return `<div class="buah card mb-3 mx-auto">
    <img src="${product.foto}" class="card-img-top"/>
    <div class="card-body">
      <div class="tipeBuah">${product.fruitType}</div>
      <br>
      <h5 class="card-title">${product.fruitName}</h5>
      <p class="card-text">
        Stok: ${product.stock} <br>
        <div class="fruit-description ">${product.description}</div>
      </p>
    </div>
  </div>`;
  });
  displayProduct = displayProduct.join("");
  productContainer.innerHTML = displayProduct;
}

function renderPagination(products) {
  const totalPages = Math.ceil(products.length / productsPerPage);
  const paginationContainer = document.querySelector(".pagination");
  let paginationButtons = "";
  for (let i = 1; i <= totalPages; i++) {
    paginationButtons += `<button class="pagination-btn mx-1 ${
      i === currentPage ? "active" : ""
    }" data-page="${i}">${i}</button>`;
  }
  paginationContainer.innerHTML = paginationButtons;
}

// inisialisasi tampilan 
displayProducts(products);
renderPagination(products);

// Event listener for pagination buttons
const paginationContainer = document.querySelector(".pagination");
paginationContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("pagination-btn")) {
    currentPage = parseInt(event.target.dataset.page);
    displayProducts(products);
    renderPagination(products);
  }
});



