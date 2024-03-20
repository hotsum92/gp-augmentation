"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarSpacer = void 0;
var react_1 = __importDefault(require("react"));
var Box_1 = __importDefault(require("@mui/system/Box"));
var SidebarSpacer = function (_a) {
    var width = _a.width;
    return (react_1.default.createElement(Box_1.default, { sx: {
            height: '100%',
            width: width + 'px',
            marginRight: 0,
        } }));
};
exports.SidebarSpacer = SidebarSpacer;
exports.default = exports.SidebarSpacer;
//# sourceMappingURL=sidebar-spacer.js.map