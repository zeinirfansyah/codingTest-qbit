const fruits = [
  {
    id: 1,
    title: "Fruit 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    img: "assets/Developer activity-amico.svg",
  },
  {
    id: 2,
    title: "Fruit 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    img: "assets/Developer activity-amico.svg",
  },
  {
    id: 3,
    title: "Fruit 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    img: "assets/Developer activity-amico.svg",
  },
  {
    id: 4,
    title: "Fruit 4",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    img: "assets/Developer activity-amico.svg",
  },
  {
    id: 5,
    title: "Fruit 5",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    img: "assets/Developer activity-amico.svg",
  },
  {
    id: 6,
    title: "Fruit 6",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    img: "assets/Developer activity-amico.svg",
  },
];

const fruitContainer = document.querySelector(".fruits");
let displayFruit = fruits.map(function (fruit) {
  return `<div class="col-md-4">
  <div class="card">
    <img src="${fruit.img}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${fruit.title}</h5>
      <p class="card-text">
        ${fruit.desc}
      </p>
      <a href="#" class="btn btn-klik">Go somewhere</a>
    </div>
  </div>
</div>`;
});
displayFruit = displayFruit.join("");
projectContainer.innerHTML = displayFruit;