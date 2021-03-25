import React, { createElement, Children, cloneElement, Component as ReactComponent } from 'react';
import { render, findDOMNode } from 'react-dom';

const EMPTY_ARR = [];

function h() {
  const vnode = createElement.apply(this, arguments);
  vnode.attributes = vnode.props;
  vnode.nodeName = vnode.tag;
  vnode.children = Children.toArray(vnode.children || vnode.props.children || EMPTY_ARR);
  return vnode;
}

class Component extends ReactComponent {
  get base() {
    return findDOMNode(this);
  }
}

export default { render, h, createElement: h, cloneElement, Component };
export { render, h, h as createElement, cloneElement, Component };
