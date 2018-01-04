import Shit from './src/Shit';
import Component from './src/Component';

const wrapper = document.querySelector('#app');
const child = Shit.createElement(
  'p',
  {
    content: 'i am p',
    children: [
      'this is my child',
    ]
  },
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

class App extends Component {
  props: any;

  constructor(props: any) {
    super(props);
  }

  render() {
    const { name } = this.props;
    return Shit.createElement(
      'div',
      {
        content: `I am ${name}`,
      }
    )
  }
}

const AppContainer = Shit.createElement(
  App,
  {
    name: 'sakura',
  }
);

Shit.render(AppContainer, (wrapper as HTMLElement));
