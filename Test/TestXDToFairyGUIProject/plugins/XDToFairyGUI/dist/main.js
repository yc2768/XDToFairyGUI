"use strict";
//FYI: https://github.com/Tencent/puerts/blob/master/doc/unity/manual.md
Object.defineProperty(exports, "__esModule", { value: true });
const csharp_1 = require("csharp");
const App = csharp_1.FairyEditor.App;
App.add_onProjectOpened(() => {
    App.Alert('Hello XDToFairyGUI！');
});
console.log('Hello XDToFairyGUI！');
