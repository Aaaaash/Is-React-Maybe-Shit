import Shit from './src/Shit';

const wrapper = document.querySelector('#app');
const element = Shit.createElement(
  'p',
  {
    content: 'this is div',
    style: {
      width: '500px',
      height: '400px',
      backgroundColor: '#ff004f',
      fontSize: '40px',
      color: '#000',
    }
  },
);

Shit.render(element, (wrapper as HTMLElement));
