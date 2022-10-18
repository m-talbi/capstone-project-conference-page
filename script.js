const speakersContainerEl = document.getElementById('speakers-container');
const mobileMenuOpenIcon = document.getElementById('mobile-menu-open-icon');
const mobileMenuCloseIcon = document.getElementById('mobile-menu-close-icon');
const topMenu = document.getElementById('top-menu');
const mobileMenuEl = document.getElementById('mobile-menu');
const body = document.querySelector('body');
const nav = document.querySelector('nav');
const brandLogos = document.querySelectorAll('.logo');
const navLinksContainerEl = document.querySelectorAll('#nav-links-container li');

const speakersData = [
  {
    name: 'Amin Nasser',
    occupation: 'President and chief executive officer of Saudi Aramco',
    description: "Nasser holds a Bachelor's degree in petroleum engineering from the King Fahd University of Petroleum and Minerals.",
    image: 'assets/speakers/amin-nasser.jpg',
  },
  {
    name: 'Dr. Sebastian Thrun',
    occupation: 'Founder, CEO, Udacity, Kitty Hawk',
    description: 'German-American entrepreneur and computer scientist. he was a Professor of Computer Science at Stanford University',
    image: 'assets/speakers/sebastian-thrun.jpg',
  },
  {
    name: 'Eng. Lim Goh',
    occupation: 'PhD, SVP and CTO, AI HPE',
    description: 'Awarded NASA’s Exceptional Technology Achievement Medal. His other work includes co-inventing blockchain-based swarm learning applications',
    image: 'assets/speakers/eng-lim-goh.jpg',
  },
  {
    name: 'Prof. Dr. Jürgen Schmidhuber',
    occupation: 'Professor of AI, USI, Chief Scientist',
    description: 'Most noted for his work in the field of AI, deep learning and artificial neural networks.',
    image: 'assets/speakers/jurgen-schmidhuber.jpg',
  },
  {
    name: 'Dr. Seth Dobrin',
    occupation: 'Chief AI Officer, President, Founder, Qantm AI',
    description: 'One of the most preeminent business leaders in AI, Seth Dobrin has ideated some of the most innovative AI strategies.',
    image: 'assets/speakers/seth-dobrin.jpg',
  },
  {
    name: 'Anna Patterson',
    occupation: 'Vice president of engineering - Google',
    description: 'Accomplished leader in the field of Artificial Intelligence. She co-founded Xift and later Cuil, two clustering-based search engines',
    image: 'assets/speakers/anna-patterson.jpg',
  },
];

const GenerateSpeakerEl = (speaker) => `
  <article class="col-lg-5 p-3">
    <div class="speaker_image_container float-start">
      <img src=${speaker.image} alt="${speaker.name} picture">
    </div>
    <div>
      <h4>${speaker.name}</h4>
      <p class="text-light-orange">${speaker.occupation}</p>
      <p class="">${speaker.description}</p>
    </div>
  </article>
`;

speakersData.forEach((speaker) => {
  const speakerEl = GenerateSpeakerEl(speaker);
  if (speakersContainerEl) {
    speakersContainerEl.insertAdjacentHTML('beforeend', speakerEl);
  }
});

brandLogos.forEach((logo) => {
  logo.addEventListener('click', () => {
    mobileMenuEl.style.display = 'none';
    body.style.overflowY = 'scroll';
  });
});

window.addEventListener('scroll', () => {
  const topMenuHeight = topMenu.offsetHeight;

  if (window.scrollY > topMenuHeight) {
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');
  }
});

mobileMenuOpenIcon.addEventListener('click', () => {
  mobileMenuEl.style.display = 'block';
  body.style.overflowY = 'hidden';

  mobileMenuCloseIcon.addEventListener('click', () => {
    mobileMenuEl.style.display = 'none';
    body.style.overflowY = 'scroll';
  });

  navLinksContainerEl.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenuEl.style.display = 'none';
      body.style.overflowY = 'scroll';
    });
  });
});