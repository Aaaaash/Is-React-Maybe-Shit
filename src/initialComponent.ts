import TextComponent from './TextComponent';
import HTMLNodeComponent from './HTMLNodeComponent';
import CompositeComponent from './CompositeComponent';

export default function initialComponent(node: any): any {
  if (typeof node === 'string') {
    return new TextComponent(node);
  }

  if (typeof node === 'object' && typeof node.type === 'string') {
    return new HTMLNodeComponent(node);
  }

  if (typeof node === 'object' && typeof node.type === 'function') {
    return new CompositeComponent(node);
  }

  return null;
}
