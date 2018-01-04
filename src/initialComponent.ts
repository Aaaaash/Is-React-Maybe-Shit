import TextComponent from './TextComponent';
import HTMLNodeComponent from './HTMLNodeComponent';
import CompositeComponent from './CompositeComponent';

export default function initialComponent(node: any, wrapper: HTMLElement): any {
  if (typeof node === 'string') {
    return new TextComponent(node, wrapper);
  }

  if (typeof node === 'object' && typeof node.type === 'string') {
    return new HTMLNodeComponent(node, wrapper);
  }

  if (typeof node === 'object' && typeof node.type === 'function') {
    return new CompositeComponent(node, wrapper);
  }

  return null;
}
