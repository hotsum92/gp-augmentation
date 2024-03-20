"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sidebar = void 0;
var react_1 = __importDefault(require("react"));
var Box_1 = __importDefault(require("@mui/system/Box"));
var Sidebar = function (_a) {
    var children = _a.children, width = _a.width, left = _a.left, right = _a.right;
    return (react_1.default.createElement(Box_1.default, { sx: {
            overflow: 'auto',
            backgroundColor: function (theme) { return theme.palette.grey[50]; },
            width: width + 'px',
            position: 'absolute',
            top: 0,
            left: left ? 0 : undefined,
            right: right ? 0 : undefined,
            bottom: 0,
        } }, children));
};
exports.Sidebar = Sidebar;
exports.default = exports.Sidebar;
//# sourceMappingURL=sidebar.js.map