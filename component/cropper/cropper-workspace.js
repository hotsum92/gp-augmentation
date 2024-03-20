"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CropperWorkspace = void 0;
var react_1 = __importDefault(require("react"));
var Box_1 = __importDefault(require("@mui/system/Box"));
var CropperWorkspace = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(Box_1.default, { sx: {
            backgroundColor: function (theme) { return theme.palette.grey[100]; },
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
            display: 'flex',
        } }, children));
};
exports.CropperWorkspace = CropperWorkspace;
exports.default = exports.CropperWorkspace;
//# sourceMappingURL=cropper-workspace.js.map