"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Box_1 = __importDefault(require("@mui/system/Box"));
var ModalDrop = function (_a) {
    var _onDrop = _a.onDrop;
    var onDrop = function (e) {
        e.preventDefault();
        if (e.dataTransfer.files !== null && e.dataTransfer.files.length > 0) {
            _onDrop(e.dataTransfer.files);
            e.dataTransfer.clearData();
        }
    };
    return (react_1.default.createElement(Box_1.default, { sx: {
            backdropFilter: 'grayscale(.75)',
            backgroundColor: 'rgba(0, 0, 0, .6)',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }, onDragOver: function (e) { return e.preventDefault(); }, onDrop: onDrop },
        react_1.default.createElement(Box_1.default, { sx: {
                color: function (theme) { return theme.palette.common.white; },
                fontSize: '40px',
            } }, "\u30D5\u30A1\u30A4\u30EB\u3092\u30C9\u30ED\u30C3\u30D7\u3057\u3066\u958B\u304F")));
};
exports.default = ModalDrop;
//# sourceMappingURL=modal-drop.js.map