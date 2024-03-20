"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CropperImageFace = void 0;
var react_1 = __importDefault(require("react"));
var Box_1 = __importDefault(require("@mui/material/Box"));
var CropperImageFace = function (_a) {
    var onMouseDown = _a.onMouseDown;
    return (react_1.default.createElement(Box_1.default, { sx: {
            cursor: "crosshair",
            background: "#000",
            opacity: '.5',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            top: 0,
        }, onMouseDown: function (e) { e.preventDefault(); onMouseDown(e.pageX, e.pageY); } }));
};
exports.CropperImageFace = CropperImageFace;
exports.default = exports.CropperImageFace;
//# sourceMappingURL=cropper-image-face.js.map