import Shit from './src/Shit';
import Component from './src/Component';

const wrapper = document.querySelector('#app');
const child = Shit.createElement(
  'p',
  {
    content: 'i am p child',
    children: [
      'this is my child',
    ]
  },
);

const element = Shit.createElement(
  'div',
  {
    content: 'this is div child',
    style: {
      width: '500px',
      height: '400px',
      backgroundColor: '#000',
      fontSize: '40px',
      color: '#fff',
    },
  },
);

class App extends Component {
  props: any;

  constructor(props: any) {
    super(props);
    this.state = {
      age: 20,
    }
  }

  handleClick = () => {
    const { age } = this.state;
    this.setState({
      age: age + 1,
    });
  }

  render() {
    const { name } = this.props;
    const { age } = this.state;
    return Shit.createElement(
      'div',
      {
        content: `I am ${name}, ${age} year old`,
        onClick: this.handleClick,
        children: [
          element,
          child
        ]
      }
    );
  }
}

const AppContainer = Shit.createElement(
  App,
  {
    name: 'sakura',
  }
);

Shit.render(AppContainer, (wrapper as HTMLElement));
