import Shit from './src/Shit';

const wrapper = document.querySelector('#app');
const child = Shit.createElement(
  'p',
  {content: 'i am p'},
);

const element = Shit.createElement(
  'div',
  {
    content: 'this is div',
    style: {
      width: '500px',
      height: '400px',
      backgroundColor: '#000',
      fontSize: '40px',
      color: '#fff',
    },
    children: [
      'text',
      child,
    ],
  },
);

Shit.render(element, (wrapper as HTMLElement));
