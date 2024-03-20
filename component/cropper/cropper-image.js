"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CropperImage = void 0;
var react_1 = __importDefault(require("react"));
exports.CropperImage = react_1.default.forwardRef(function (_a, ref) {
    var src = _a.src, onLoad = _a.onLoad;
    var _onLoad = function (e) {
        if (onLoad) {
            onLoad(e.currentTarget);
        }
    };
    return (react_1.default.createElement("img", { ref: ref, style: {
            verticalAlign: 'middle',
            maxWidth: '800px',
        }, src: src, onLoad: _onLoad }));
});
exports.default = exports.CropperImage;
//# sourceMappingURL=cropper-image.js.map