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
var react_1 = __importStar(require("react"));
var Box_1 = __importDefault(require("@mui/system/Box"));
var DropZone = function (_a) {
    var children = _a.children, _onDrop = _a.onDrop, _onDragEnter = _a.onDragEnter, _onDragLeave = _a.onDragLeave;
    var ref = (0, react_1.useRef)(null);
    var onDragEnter = function (e) {
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            _onDragEnter && _onDragEnter();
        }
    };
    var onDragLeave = function (e) {
        if (e.relatedTarget &&
            !e.currentTarget.contains(e.relatedTarget)) {
            _onDragLeave && _onDragLeave();
        }
    };
    var onDrop = function (e) {
        e.preventDefault();
        if (e.dataTransfer.files !== null && e.dataTransfer.files.length > 0) {
            _onDragLeave && _onDragLeave();
            if (e.dataTransfer.files.length === 1) {
                _onDrop(e.dataTransfer.files[0]);
            }
            else {
                alert("1 file only accepted");
            }
            e.dataTransfer.clearData();
        }
    };
    return (react_1.default.createElement(Box_1.default, { sx: { width: '100%' }, ref: ref, onDragEnter: onDragEnter, onDragLeave: onDragLeave, onDragOver: function (e) { return e.preventDefault(); }, onDrop: onDrop }, children));
};
exports.default = DropZone;
//# sourceMappingURL=drop-zone.js.map