// 是否定义
export function isDef(val) {
  return !isUnDef(val);
}

// 是否没定义
export function isUnDef(val) {
  return val === null || val === undefined;
}

// 判断是否为函数
export function isFunction(val) {
  return typeof val === 'function';
}

// 判断类型
export function is(val, type) {
  const typeArr = Array.isArray(type) ? type : [type];
  const valType = Object.prototype.toString.call(val);
  return typeArr.some(type => `[object ${type}]` === valType);
}

// 判断是否为生产环境
export function isProd() {
  return process.env.NODE_ENV === 'production';
}

// 获取 display: none 的节点宽度和高度
export function getSize(elem) {
  const noneNodes = [];
  const nodeStyle = [];

  getNoneNode(elem); // 获取多层display：none;的元素
  setNodeStyle();
  const width = elem.clientWidth;
  const height = elem.clientHeight;
  resumeNodeStyle();

  return {
    width,
    height,
  };

  function getNoneNode(node) {
    const display = getStyles(node).getPropertyValue('display');
    const tagName = node.nodeName.toLowerCase();
    if (display !== 'none' && tagName !== 'body') {
      getNoneNode(node.parentNode);
    } else {
      noneNodes.push(node);
      if (tagName !== 'body') getNoneNode(node.parentNode);
    }
  }

  // 这方法才能获取最终是否有display属性设置，不能style.display。
  function getStyles(elem) {
    // Support: IE<=11+, Firefox<=30+ (#15098, #14150)
    // IE throws on elements created in popups
    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    let view = elem.ownerDocument.defaultView;

    if (!view || !view.opener) {
      view = window;
    }
    return view.getComputedStyle(elem);
  }

  function setNodeStyle() {
    let i = 0;
    for (; i < noneNodes.length; i++) {
      const { visibility } = noneNodes[i].style;
      const { display } = noneNodes[i].style;
      const style = noneNodes[i].getAttribute('style');
      // 覆盖其他display样式
      noneNodes[i].setAttribute(
        'style',
        `visibility:hidden;display:block !important;${style}`,
      );
      nodeStyle[i] = {
        visibility,
        display,
      };
    }
  }

  function resumeNodeStyle() {
    let i = 0;
    for (; i < noneNodes.length; i++) {
      noneNodes[i].style.visibility = nodeStyle[i].visibility;
      noneNodes[i].style.display = nodeStyle[i].display;
    }
  }
}

// 如果 value 不是数组, 那么强制转为数组
// 空转为空数组 undefined | null | '' => []
// 1 => [1], false => [false], {} => [{}]
export function castArray(value) {
  if (Array.isArray(value)) {
    return value;
  } if (value === undefined || value === null || value === '') {
    return [];
  }
  return [value];
}

// 判断是否为空
// 空数组 / null / undefined / 空字符串
export function isEmpty(val) {
  if (Array.isArray(val) && val.length === 0) {
    return true;
  } if (isUnDef(val)) {
    return true;
  } if (typeof val === 'string' && val === '') {
    return true;
  }
  return false;
}
