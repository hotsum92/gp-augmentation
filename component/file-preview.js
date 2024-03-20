"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilePreview = void 0;
var react_1 = __importStar(require("react"));
var Box_1 = __importDefault(require("@mui/system/Box"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var Clear_1 = __importDefault(require("@mui/icons-material/Clear"));
var FilePreview = function (_a) {
    var src = _a.src, _b = _a.selected, selected = _b === void 0 ? false : _b, onClick = _a.onClick, onDelete = _a.onDelete;
    var _c = (0, react_1.useState)(false), mouseOver = _c[0], setMouseOver = _c[1];
    var _d = (0, react_1.useState)(false), mouseOverDelete = _d[0], setMouseOverDelete = _d[1];
    return (react_1.default.createElement(Box_1.default, { sx: {
            position: 'relative',
            border: function (theme) { return "2px solid ".concat(selected ? theme.palette.primary.main : mouseOver ? theme.palette.grey[500] : theme.palette.grey[300]); },
            padding: '2px',
            width: '88px',
            height: '65px',
            transition: 'border .15s linear',
        }, onClick: onClick, onMouseEnter: function () { return setMouseOver(true); }, onMouseLeave: function () { return setMouseOver(false); } },
        react_1.default.createElement("img", { src: src, width: 80, height: 57, style: {
                objectFit: 'contain',
                verticalAlign: 'middle',
            } }),
        onDelete ? (react_1.default.createElement(Button_1.default, { onClick: function (e) { e.stopPropagation(); onDelete && onDelete(); }, color: 'error', variant: 'contained', sx: {
                opacity: mouseOverDelete || selected ? 1 : 0,
                transition: '.15s linear',
                padding: 0,
                minWidth: 0,
                position: 'absolute',
                right: 2,
                bottom: 2
            }, onMouseEnter: function () { return setMouseOverDelete(true); }, onMouseLeave: function () { return setMouseOverDelete(false); } },
            react_1.default.createElement(Clear_1.default, null))) : null));
};
exports.FilePreview = FilePreview;
exports.default = exports.FilePreview;
//# sourceMappingURL=file-preview.js.map