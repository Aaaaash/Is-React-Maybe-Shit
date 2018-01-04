import CompositeComponent from "./CompositeComponent";

class Component {
  props: any;
  state: any;
  _shitCompositeInstance: CompositeComponent;

  constructor(props?: any) {
    this.props = props;
  }
  render() {}
  setState(newState: any) {
    this._shitCompositeInstance.updateComponent(null, newState);
  }
}

export default Component;
