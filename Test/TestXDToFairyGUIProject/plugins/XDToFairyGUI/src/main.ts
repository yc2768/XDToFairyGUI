//FYI: https://github.com/Tencent/puerts/blob/master/doc/unity/manual.md

import { FairyEditor } from 'csharp';

const App = FairyEditor.App;

App.add_onProjectOpened(()=>{
    App.Alert('Hello XDToFairyGUI！');
})
console.log('Hello XDToFairyGUI！');