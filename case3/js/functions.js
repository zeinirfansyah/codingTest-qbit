const projects = [
  {
    id: 1,
    title: "Project 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    img: "assets/Developer activity-amico.svg",
  },
  {
    id: 2,
    title: "Project 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    img: "assets/Developer activity-amico.svg",
  },
  {
    id: 3,
    title: "Project 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    img: "assets/Developer activity-amico.svg",
  },
  {
    id: 4,
    title: "Project 4",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    img: "assets/Developer activity-amico.svg",
  },
  {
    id: 5,
    title: "Project 5",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    img: "assets/Developer activity-amico.svg",
  },
  {
    id: 6,
    title: "Project 6",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    img: "assets/Developer activity-amico.svg",
  },
];
const projectContainer = document.querySelector(".projects");
let displayProject = projects.map(function (project) {
  return `<div class="col-md-4">
  <div class="card">
    <img src="${project.img}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${project.title}</h5>
      <p class="card-text">
        ${project.desc}
      </p>
      <a href="#" class="btn btn-klik">Go somewhere</a>
    </div>
  </div>
</div>`;
});
displayProject = displayProject.join("");
projectContainer.innerHTML = displayProject;