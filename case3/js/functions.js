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
  },
];


const itemsPerPage = 6;
const numberOfPages = Math.ceil(products.length / itemsPerPage);
const pagination = document.querySelector(".pagination");
let currentPage = 1;

const productContainer = document.querySelector(".products");
let displayProduct = products.map(function (product) {
  return `<div class="buah card mb-3 mx-auto">
  <img src="${product.foto}" class="card-img-top"/>
  <div class="card-body">
    <h5 class="card-title">${product.fruitName}</h5>
    <p class="card-text">
      Stok: ${product.stock} <br>
      <div class="fruit-description d-none d-lg-block">${product.description}</div>
      <br>
      <div class="tipeBuah">${product.fruitType}</div>
    </p>
  </div>
</div>`;
});

displayProduct = displayProduct.join("");
productContainer.innerHTML = displayProduct;