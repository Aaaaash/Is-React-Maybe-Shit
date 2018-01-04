class Component {
  props: any;

  constructor(props?: any) {
    this.props = props;
  }
  render() {}
  setState(newState: any) {
    console.log(newState);
    // todo: 实现setState方法
  }
}

export default Component;
