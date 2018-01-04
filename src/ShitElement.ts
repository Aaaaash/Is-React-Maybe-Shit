// vNode
class ShitElement {
  type: string | Function;
  key: any;
  props: object;
  constructor(type: string | Function, props: object, key: any) {
    this.type = type;
    this.props = props;
    this.key = key;
  }
}

export default ShitElement;
