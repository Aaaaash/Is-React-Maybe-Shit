import initialComponent from './initialComponent';
import { ShitComponent } from './types';

interface NodeProps {
  children?: object[];
  [propName: string]: any;
}

interface CurrentElement {
  type: string;
  props: NodeProps;
  [propName: string]: any;
}

class HTMLNodeComponent {
  currentElement: CurrentElement;
  _nodeID: number;
  _wrapper: HTMLElement;
  _rootWrapper: HTMLElement;

  constructor(node: CurrentElement, wrapper: HTMLElement) {
    this.currentElement = node;
    this._rootWrapper = wrapper;
  }

  mount(id: number) {
    this._nodeID = id;
    const { props, type } = this.currentElement;
    const { children } = props;
    const wrapper = document.createElement(type);
    this._wrapper = wrapper;
    for (let prop in props) {
      if (prop === 'content') {
        const text = document.createTextNode(props[prop]);
        wrapper.appendChild(text);
      }

      if (prop === 'style' && typeof props[prop] === 'object') {
        const styles = props[prop];
        for (let attr in styles) {
          wrapper.style[attr] = styles[attr];
        }
      }

      if (/^on[A-Za-z]/.test(prop)) {
        const eventType = prop.replace('on', '').toLowerCase();
        wrapper.addEventListener(eventType, props[prop]);
      }
    }

    if (children && children.length > 0) {
      children.forEach((child: any) => {
        const childInstance = initialComponent(child, this._rootWrapper);
        const childElement = (childInstance as ShitComponent).mount(this._nodeID++);
        wrapper.appendChild(childElement);
      });
    }
    return wrapper;
  }
}

export default HTMLNodeComponent;
