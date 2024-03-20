"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CropperContainer = void 0;
var react_1 = __importDefault(require("react"));
var Box_1 = __importDefault(require("@mui/material/Box"));
var CropperContainer = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(Box_1.default, { sx: {
            position: 'relative',
            boxShadow: '0 4px 8px 0 rgba(0,0,0,.3)',
            display: 'inline-block',
            margin: 'auto',
        } }, children));
};
exports.CropperContainer = CropperContainer;
exports.default = exports.CropperContainer;
//# sourceMappingURL=cropper-container.js.map