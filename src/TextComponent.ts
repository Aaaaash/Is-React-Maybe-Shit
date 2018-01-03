class TextComponent {
  currentElement: string;
  _nodeID: number;
  constructor(text: string) {
    this.currentElement = text;
  }

  mount(id: number) {
    this._nodeID = id;
    const textNode = document.createTextNode(this.currentElement);
    return textNode;
  }
}

export default TextComponent;
