const { Rectangle, Color } = require("scenegraph");

function CreateRectangleHandlerFunction(selection) {
    const newElement = new Rectangle();
    newElement.width = 1000;
    newElement.height = 500;
    newElement.fill = new Color("#234FB7");
    newElement.setAllCornerRadii(80);
    selection.insertionParent.addChild(newElement);
    newElement.moveInParentCoordinates(100, 100);
}

module.exports = {
    CreateRectangleHandlerFunction,
}
