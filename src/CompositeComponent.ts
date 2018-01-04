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
    this._instance = new ShitComponent(props);
    this._instance._shitCompositeInstance = this;
    this._renderedComponent = initialComponent(this._instance.render(), this._rootWrapper);
    this._renderedHTMLNode = this._renderedComponent.mount(this._nodeID++);
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

    if (prevRenderComponent !== nextRenderComponent) {
      this._renderedComponent = initialComponent(nextRenderComponent, this._rootWrapper);
      const result = this._renderedComponent.mount(this._nodeID);
      this._rootWrapper.replaceChild(result, prevRenderedWrapper)
      this._renderedHTMLNode = result;
    }
  }
}

export default CompositeComponent;
