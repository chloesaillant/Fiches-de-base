function byId(elementId) {
  if(typeof elementId != 'string') {
    console.log('Erreur, elementId soit être une string');
    return null;
  }
  return document.getElementById(elementId);
}

function byClass(className, atIndex) {
  var elements = document.getElementsByClassName(className);
  var tElements = Array.prototype.slice.call(elements);
  return atIndex != null ? tElements[atIndex] : tElements;
}

function byTag(elementTag) {
  return document.getElementsByTagName(elementTag);
}

function addClass(newClass) {
  this.class = newClass;
}

function removeClass() {

}
