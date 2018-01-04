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

class Demo extends Component {
  state: any;
  props: any;
  constructor(props: any) {
    super(props);
    this.state = {
      text: 'demo',
    }
  }

  render() {
    const { text } = this.state;
    const { value } = this.props;
    return Shit.createElement(
      'div',
      {
        content: `i am ${text}, ${value}`,
      }
    );
  }
}


const element = Shit.createElement(
  'div',
  {
    content: 'this is div child',
    style: {
      backgroundColor: '#000',
      fontSize: '40px',
      color: '#fff',
    },
    children: [
      Shit.createElement(Demo, { value: 10 }),
      'shit'
    ]
  },
);

Shit.render(element, (wrapper as HTMLElement));
