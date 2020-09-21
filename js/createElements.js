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

  if(nodeText != 'NOTTEXT'){
    let currentTextNode = document.createTextNode(nodeText);
    childElement.appendChild(currentTextNode);
  }

  if(childAttribute){
    if (childAttribute.length === childAttributeValue.length) {
      for (var i = 0; i < childAttribute.length; i++) {
        childElement.setAttribute(childAttribute[i], childAttributeValue[i]);
      }
    } else if (childAttribute.length > childAttributeValue.length) {
      console.error("Attribute must included equal length of values");
    } else if (childAttribute.length < childAttributeValue.length) {
      console.error("Values Array must included equal length of Attribute Array")
    } else if (typeof childAttribute !== "object") {
      console.error( "Attribute must be an array")
    } else{
      console.error('values must be an array');
    }
  }

}
