function getPath(htmlElem) {
  if (!htmlElem) {
    return "Element not found";
  };

  const getElemProps = (elem) => {
    let result = elem.tagName.toLowerCase();
  
    if (elem.id !== "") {
      result = `${result}#${elem.id}`;
    };
  
    if (elem.className !== "") {
      result = `${result}.${elem.className.trim().split(/\s+/).join(".")}`;
    };
  
    return result;
  };

  const getElemPosition = (elem) => {
    let prevElem = elem.previousElementSibling;
    let count = 1;
    let result = "";
  
    while (prevElem) {
      count++;
      prevElem = prevElem.previousElementSibling;
    };
  
    result = `:nth-child(${count})`;
  
    return result;
  };

  let elemPathParts = [];

  const getElemDOM = (elem) => {
    if (elem === document.body) {
      elemPathParts = [...elemPathParts, 'body'];

      return elemPathParts.reverse();
    };

    elemPathParts = [...elemPathParts, getElemProps(elem) + getElemPosition(elem)];

    return getElemDOM(elem.parentElement);
  };

  let fullElemPath = getElemDOM(htmlElem).join(' ');

  return fullElemPath;
};

module.exports = getPath;