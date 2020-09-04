/*
    Function:
        Used to create an child html element and connecting to a parent element.

    For Params:
        childElementType = Type of html element 
        parentElement = the parent html element that you would like to append the child element to
        nodeText = The text within the child element 
        className =  classname for child element for styling
*/

export default function createChildAndAppend(
  childElementType,
  parentElement,
  nodeText,
  childAttribute,
  childAttributeValue 
) {
  const childElement = document.createElement(childElementType);
  parentElement.appendChild(childElement);
  let currentTextNode = document.createTextNode(nodeText);
  childElement.appendChild(currentTextNode);
  if (childAttribute) {
    childElement.setAttribute(childAttribute, childAttributeValue);
  }
}
