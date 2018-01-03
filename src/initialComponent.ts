import TextComponent from './TextComponent';
import HTMLNodeComponent from './HTMLNodeComponent';

export default function initialComponent(node: any) {
  if (typeof node === 'string') {
    return new TextComponent(node);
  }

  if (typeof node === 'object' && typeof node.type === 'string') {
    return new HTMLNodeComponent(node);
  }
}
