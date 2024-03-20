"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@mui/material/styles");
var CssBaseline_1 = __importDefault(require("@mui/material/CssBaseline"));
//import Main from '~/page/main'
var edit_1 = __importDefault(require("~/page/edit"));
var defaultTheme = (0, styles_1.createTheme)();
var App = function () {
    return (react_1.default.createElement(styles_1.ThemeProvider, { theme: defaultTheme },
        react_1.default.createElement(CssBaseline_1.default, null),
        react_1.default.createElement(edit_1.default, null)));
};
exports.default = App;
//# sourceMappingURL=app.js.map