"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSidebarSpacer = exports.FileSidebar = exports.FILE_SIDEBAR_WIDTH = void 0;
var react_1 = __importDefault(require("react"));
var Box_1 = __importDefault(require("@mui/system/Box"));
exports.FILE_SIDEBAR_WIDTH = 110;
var FileSidebar = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(Box_1.default, { sx: {
            backgroundColor: function (theme) { return theme.palette.grey[50]; },
            width: exports.FILE_SIDEBAR_WIDTH + 'px',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
        } }, children));
};
exports.FileSidebar = FileSidebar;
var FileSidebarSpacer = function () {
    return (react_1.default.createElement(Box_1.default, { sx: {
            width: exports.FILE_SIDEBAR_WIDTH + 'px',
            marginRight: 0,
        } }));
};
exports.FileSidebarSpacer = FileSidebarSpacer;
exports.default = exports.FileSidebar;
//# sourceMappingURL=file-sidebar.js.map