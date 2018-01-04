class TextComponent {
  currentElement: string;
  _nodeID: number;
  _rootWrapper: HTMLElement;

  constructor(text: string, wrapper: HTMLElement) {
    this.currentElement = text;
    this._rootWrapper = wrapper;
  }

  mount(id: number) {
    this._nodeID = id;
    const textNode = document.createTextNode(this.currentElement);
    return textNode;
  }
}

export default TextComponent;
