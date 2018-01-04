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

  constructor(node: CurrentElement) {
    this.currentElement = node;
  }

  mount(id: number) {
    this._nodeID = id;
    const ShitComponent: Component = this.currentElement.type;
    const props = this.currentElement.props;
    this._instance = new ShitComponent(props);
    const domElement = initialComponent(this._instance.render());
    return domElement.mount(this._nodeID ++);
  }
}

export default CompositeComponent;
