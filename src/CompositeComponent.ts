import Component from "./Component";
import initialComponent from "./initialComponent";

interface ComponentProps {
  children?: any;
  [propName: string]: any;
}

interface CurrentElement {
  type: Component;
  props: ComponentProps;
  [propName: string]: any;
}
class CompositeComponent {
  currentElement: CurrentElement;
  _nodeID: number;
  _instance: Component;
  _renderedComponent: any;
  _renderedHTMLNode: HTMLElement;
  _rootWrapper: HTMLElement;

  constructor(node: CurrentElement, wrapper: HTMLElement) {
    this.currentElement = node;
    this._rootWrapper = wrapper;
  }

  mount(id: number) {
    this._nodeID = id;
    const ShitComponent: Component = this.currentElement.type;
    const props = this.currentElement.props;
    const { children } = props;

    this._instance = new ShitComponent(props);
    this._instance._shitCompositeInstance = this;
    this._renderedComponent = initialComponent(this._instance.render(), this._rootWrapper);
    this._renderedHTMLNode = this._renderedComponent.mount(this._nodeID++);

    if (children && children.length > 0) {
      children.forEach((child: any) => {
        const childInstance = initialComponent(child, this._rootWrapper);
        const childElement = childInstance.mount(this._nodeID++);
        this._renderedHTMLNode.appendChild(childElement);
      });
    }

    return this._renderedHTMLNode;
  }

  updateComponent(newElement: any, newState: any) {
    this.currentElement = newElement || this.currentElement;
    const { state } = this._instance;
    const nextState = { ...state, ...newState };
    this._instance.state = nextState;

    const prevRenderComponent = this._renderedComponent.currentElement;
    const nextRenderComponent = this._instance.render();
    const prevRenderedWrapper = this._renderedComponent._wrapper;

    if (_shouldUpdateReactComponent(prevRenderComponent, nextRenderComponent)) {
      this._renderedComponent = initialComponent(nextRenderComponent, this._rootWrapper);
      const result = this._renderedComponent.mount(this._nodeID);
      this._rootWrapper.replaceChild(result, prevRenderedWrapper)
      this._renderedHTMLNode = result;
    }
  }
}

function _shouldUpdateReactComponent (prevElement: any, nextElement: any) {
  if (prevElement != null && nextElement != null) {
    const prevType = typeof prevElement;
    const nextType = typeof nextElement;
    if (prevType === 'string' || prevType === 'number') {
      return nextType === 'string' || nextType === 'number';
    } else {
      return nextType === 'object' && prevElement.type === nextElement.type && prevElement.key === nextElement.key;
    }
  }

  return false;
}

export default CompositeComponent;
