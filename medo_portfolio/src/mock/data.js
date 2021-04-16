import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Mohamed Idaghdour | Junior Full stack Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description:
    'Welcome to my portfolio website. If you like my work and you find what you are looking for? Contact me.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Mohamed Idaghdour ',
  subtitle: 'Junior Full Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Hi, I am Junior Full Stack Web Developer adept at building web applications, front/back end. Passionate about computer science and learning new technologies about this field, also working with teams and bringing new ideas to building efficient applications, with a view to satisfy users and meet their needs.',
  paragraphTwo:
    'Two years of studying web development in school and also self learning. In this time a build a lot of projects some of them below down with source code... enjoy :)',
  paragraphThree: 'This is my resume',
  resume: 'https://drive.google.com/file/d/1qfDerdMwLHhkmttM3ipz0to8x-3qNHx8/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'dev_answer.jpg',
    title: 'DEV_ANSWER - FLASK',
    info:
      'Website for the developer community they can share their experiences, help novice developers to improve their knowledge and skills about their domain. generally you ask questions about the domain, then you wait for experts to answer or find you the solution for your problem.',
    info2:
      'I built the front end for this web site with html and css and the back end with python - flask.',
    url: '',
    repo: 'https://github.com/Medo-ID/dev_ans', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'calculator_js.jpg',
    title: 'Calculator - JavaScript',
    info: 'Simple website containing a simple calculator with modern design.',
    info2: 'this website was built using HTML, CSS and Javascript.',
    url: '',
    repo: 'https://github.com/Medo-ID/Simple-Calculator-with-JS', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'tic_tac_toe.png',
    title: 'TIC TAC TOE -  TKINTER',
    info:
      'We all know tic tac toe game or "XO". I created two versions, the first one with only python, without interface, and the second with Tkinter, with user interface for better experience.',
    info2: 'The source code contain the two versions.',
    url: '',
    repo: 'https://github.com/Medo-ID/Tic_Tac_Toe_game', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'calculator_tkinter.png',
    title: 'Calculator - Tkinter',
    info: 'Simple software of calculator.',
    info2: 'This software was built using python,Tkinter library.',
    url: '',
    repo: 'https://github.com/Medo-ID/calculator-Tkinter', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Midaghdour',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/medo_idaghdour7/',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/Medo_ID',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/mohamed-idaghdour-a77a44188/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Medo-ID',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
