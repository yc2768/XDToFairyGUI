/*
 * Sample plugin scaffolding for Adobe XD.
 *
 * Visit http://adobexdplatform.com/ for API docs and more sample code.
 */


const { CreateRectangleHandlerFunction } = require("./Test/Note/src/test.js")

function ExportFairyGUIHandlerFunction(selection) {
    CreateRectangleHandlerFunction(selection);

}

module.exports = {
    commands: {
        ExportFairyGUI: ExportFairyGUIHandlerFunction
    }
};
