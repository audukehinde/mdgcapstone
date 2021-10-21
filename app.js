const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const close = document.querySelector('.close');
const open = document.querySelector('.menu');
const navLink = document.querySelectorAll('.nav-link');
const speakers = document.querySelector('.speaker-desktop');

const speakerInfo = [
  {
    name: 'Alex Kenny',
    info: 'Full-stack Developer',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imageSrc: 'img/person1.png',
  },
  {
    name: 'Philip Aje',
    info: 'UI/UX Expert',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imageSrc: 'img/person2.png',
  },
  {
    name: 'Adenike Mi',
    info: 'Data Science Expert',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imageSrc: 'img/person3.png',
  },
  {
    name: 'Taiwo Audu',
    info: 'Dota Player, Streamer and Content Creator',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imageSrc: 'img/person4.png',
  },
  {
    name: 'Ademola Izzy',
    info: 'IT Support Expert',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imageSrc: 'img/person5.png',
  },
  {
    name: 'Taofeek Tkay',
    info: 'Androld Developer',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imageSrc: 'img/person6.png',
  },
];

hamburger.addEventListener('click', () => {
  navMenu.classList.add('nav-menu-active');
  close.classList.add('close-appear');
  hamburger.classList.add('hamburger-disappear')
});

close.addEventListener('click', () => {
  navMenu.classList.remove('nav-menu-active');
  close.classList.remove('close-appear');
  hamburger.classList.remove('hamburger-disappear');
});

for (let i = 0; i < navLink.length; i += 1) {
  navLink[i].addEventListener('click', () => {
    navMenu.classList.remove('nav-menu-active');
    close.classList.remove('close-appear');
    hamburger.classList.remove('hamburger-disappear');
  });
}


function render(n) {
  speakers.innerHTML += `
    <div class="speakers-description">
      <img src="${speakerInfo[n].imageSrc}" alt="First Speaker" class="person">
      <div class="speaker-details">
        <h3 class="speaker-name">${speakerInfo[n].name}</h3>
        <p class="des-1">${speakerInfo[n].info}</p>
        <p class="des-2">${speakerInfo[n].paragraph}</p>
      </div>
    </div>`;
}

for (let i = 0; i < speakerInfo.length; i += 1) {
  render(i);
}
