const titles = [
  'Awesome Books',
  'To Do',
  'Profesional Art Printing Data',
  'Profesional Art Printing Data',
  'Profesional Art Printing Data',
  'Profesional Art Printing Data',
];
const descriptions = [
  'This project is a simple website that displays a list of books and allows you to add and remove books from that list.',
  'This is a TodoList web application, where users can add, remove, edit, mark completed, and remove completed todo.',
  "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
  "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
  "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
  "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
];
const skills = ['HTML', 'CSS', 'Javascript'];
const ids = [
  'projects-2',
  'projects-3',
  'projects-4',
  'projects-5',
  'projects-6',
  'projects-7',
];

ids.forEach((e, i) => {
  const hoverContent = document.createElement('div');
  hoverContent.classList.add('hover-content', 'cards', 'rel-pos');

  const imgHover = document.createElement('div');
  imgHover.classList.add('img-hover', 'img', `img-${i + 1}`, 'rel-pos');
  hoverContent.appendChild(imgHover);

  const h3 = document.createElement('h3');
  h3.textContent = titles[i];
  imgHover.appendChild(h3);

  const p = document.createElement('p');
  p.textContent = descriptions[i];
  imgHover.appendChild(p);

  const ul = document.createElement('ul');
  ul.classList.add('skills-details');
  imgHover.appendChild(ul);

  skills.forEach((skill) => {
    const li = document.createElement('li');
    li.textContent = skill;
    ul.appendChild(li);
  });

  const darkHover = document.createElement('div');
  darkHover.classList.add('dark-hover');
  hoverContent.appendChild(darkHover);

  const button = document.createElement('button');
  button.id = e;
  button.classList.add('project-details', 'btn-pos');
  button.type = 'button';
  button.textContent = 'See project';
  darkHover.appendChild(button);

  const cardSection = document.querySelector('#card-section');
  cardSection.appendChild(hoverContent);
});
