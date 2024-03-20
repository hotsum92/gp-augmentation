"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CropperCenter = exports.CropperDashY = exports.CropperDashX = exports.LeftBottomArea = exports.BottomArea = exports.RightBottomArea = exports.LeftArea = exports.RightArea = exports.RightTopArea = exports.TopArea = exports.LeftTopArea = exports.BottomPoint = exports.TopPoint = exports.LeftPoint = exports.RightPoint = exports.LeftBottomPoint = exports.RightBottomPoint = exports.RightTopPoint = exports.LeftTopPoint = exports.CropperBoxImage = exports.CropperBox = exports.CROPPER_POINT_AREA_SIZE = void 0;
var react_1 = __importDefault(require("react"));
var Box_1 = __importDefault(require("@mui/system/Box"));
exports.CROPPER_POINT_AREA_SIZE = 20;
exports.CropperBox = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children, onMouseDown = _a.onMouseDown, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    if (width <= 0 || height <= 0)
        return null;
    return (react_1.default.createElement(Box_1.default, { ref: ref, sx: {
            cursor: 'move',
            display: 'block',
            position: 'absolute',
            border: function (theme) { return "1px solid ".concat(theme.palette.primary.main); },
            left: x + 'px',
            top: y + 'px',
            width: width + 'px',
            height: height + 'px',
        }, onMouseDown: function (e) { e.preventDefault(); onMouseDown(e.pageX, e.pageY); } }, children));
});
var CropperBoxImage = function (_a) {
    var x = _a.x, y = _a.y, src = _a.src;
    return (react_1.default.createElement(Box_1.default, { sx: {
            width: '100%',
            height: '100%',
            overflow: 'hidden',
        } },
        react_1.default.createElement("img", { style: {
                verticalAlign: 'middle',
                maxWidth: '800px',
                transform: "translateX(-".concat(x, "px) translateY(-").concat(y, "px)"),
            }, src: src })));
};
exports.CropperBoxImage = CropperBoxImage;
var LeftTopPoint = function (_a) {
    var onMouseDown = _a.onMouseDown;
    return (react_1.default.createElement(Box_1.default, { sx: {
            background: function (theme) { return theme.palette.primary.main; },
            position: 'absolute',
            height: '5px',
            width: '5px',
            cursor: 'nw-resize',
            left: '-3px',
            top: '-3px',
        }, onMouseDown: onMouseDown }));
};
exports.LeftTopPoint = LeftTopPoint;
var RightTopPoint = function (_a) {
    var onMouseDown = _a.onMouseDown;
    return (react_1.default.createElement(Box_1.default, { sx: {
            background: function (theme) { return theme.palette.primary.main; },
            position: 'absolute',
            height: '5px',
            width: '5px',
            cursor: 'ne-resize',
            right: '-3px',
            top: '-3px',
        }, onMouseDown: onMouseDown }));
};
exports.RightTopPoint = RightTopPoint;
var RightBottomPoint = function (_a) {
    var onMouseDown = _a.onMouseDown;
    return (react_1.default.createElement(Box_1.default, { sx: {
            background: function (theme) { return theme.palette.primary.main; },
            position: 'absolute',
            height: '5px',
            width: '5px',
            cursor: 'se-resize',
            right: '-3px',
            bottom: '-3px',
        }, onMouseDown: onMouseDown }));
};
exports.RightBottomPoint = RightBottomPoint;
var LeftBottomPoint = function (_a) {
    var onMouseDown = _a.onMouseDown;
    return (react_1.default.createElement(Box_1.default, { sx: {
            background: function (theme) { return theme.palette.primary.main; },
            position: 'absolute',
            height: '5px',
            width: '5px',
            cursor: 'sw-resize',
            left: '-3px',
            bottom: '-3px',
        }, onMouseDown: onMouseDown }));
};
exports.LeftBottomPoint = LeftBottomPoint;
var RightPoint = function (_a) {
    var onMouseDown = _a.onMouseDown;
    return (react_1.default.createElement(Box_1.default, { sx: {
            background: function (theme) { return theme.palette.primary.main; },
            position: 'absolute',
            height: '5px',
            width: '5px',
            cursor: 'e-resize',
            right: '-3px',
            top: '50%',
        }, onMouseDown: onMouseDown }));
};
exports.RightPoint = RightPoint;
var LeftPoint = function (_a) {
    var onMouseDown = _a.onMouseDown;
    return (react_1.default.createElement(Box_1.default, { sx: {
            background: function (theme) { return theme.palette.primary.main; },
            position: 'absolute',
            height: '5px',
            width: '5px',
            cursor: 'e-resize',
            left: '-3px',
            top: '50%',
        }, onMouseDown: onMouseDown }));
};
exports.LeftPoint = LeftPoint;
var TopPoint = function (_a) {
    var onMouseDown = _a.onMouseDown;
    return (react_1.default.createElement(Box_1.default, { sx: {
            background: function (theme) { return theme.palette.primary.main; },
            position: 'absolute',
            height: '5px',
            width: '5px',
            cursor: 'n-resize',
            left: '50%',
            top: '-3px',
        }, onMouseDown: onMouseDown }));
};
exports.TopPoint = TopPoint;
var BottomPoint = function (_a) {
    var onMouseDown = _a.onMouseDown;
    return (react_1.default.createElement(Box_1.default, { sx: {
            background: function (theme) { return theme.palette.primary.main; },
            position: 'absolute',
            height: '5px',
            width: '5px',
            cursor: 'n-resize',
            left: '50%',
            bottom: '-3px',
        }, onMouseDown: onMouseDown }));
};
exports.BottomPoint = BottomPoint;
var LeftTopArea = function (_a) {
    var onMouseDown = _a.onMouseDown;
    return (react_1.default.createElement(Box_1.default, { sx: {
            cursor: 'nw-resize',
            height: "".concat(exports.CROPPER_POINT_AREA_SIZE, "px"),
            width: "".concat(exports.CROPPER_POINT_AREA_SIZE, "px"),
            position: 'absolute',
            left: 0,
            top: 0,
        }, onMouseDown: onMouseDown }));
};
exports.LeftTopArea = LeftTopArea;
var TopArea = function (_a) {
    var onMouseDown = _a.onMouseDown;
    return (react_1.default.createElement(Box_1.default, { sx: {
            cursor: 'n-resize',
            height: "".concat(exports.CROPPER_POINT_AREA_SIZE, "px"),
            width: "calc(100% - ".concat(exports.CROPPER_POINT_AREA_SIZE * 2, "px)"),
            position: 'absolute',
            left: "".concat(exports.CROPPER_POINT_AREA_SIZE, "px"),
            top: 0,
        }, onMouseDown: onMouseDown }));
};
exports.TopArea = TopArea;
var RightTopArea = function (_a) {
    var onMouseDown = _a.onMouseDown;
    return (react_1.default.createElement(Box_1.default, { sx: {
            cursor: 'ne-resize',
            height: "".concat(exports.CROPPER_POINT_AREA_SIZE, "px"),
            width: "".concat(exports.CROPPER_POINT_AREA_SIZE, "px"),
            position: 'absolute',
            right: 0,
            top: 0,
        }, onMouseDown: onMouseDown }));
};
exports.RightTopArea = RightTopArea;
var RightArea = function (_a) {
    var onMouseDown = _a.onMouseDown;
    return (react_1.default.createElement(Box_1.default, { sx: {
            cursor: 'e-resize',
            height: "calc(100% - ".concat(exports.CROPPER_POINT_AREA_SIZE * 2, "px)"),
            width: "".concat(exports.CROPPER_POINT_AREA_SIZE, "px"),
            position: 'absolute',
            right: '-3px',
            top: "".concat(exports.CROPPER_POINT_AREA_SIZE, "px"),
        }, onMouseDown: onMouseDown }));
};
exports.RightArea = RightArea;
var LeftArea = function (_a) {
    var onMouseDown = _a.onMouseDown;
    return (react_1.default.createElement(Box_1.default, { sx: {
            cursor: 'e-resize',
            height: "calc(100% - ".concat(exports.CROPPER_POINT_AREA_SIZE * 2, "px)"),
            width: "".concat(exports.CROPPER_POINT_AREA_SIZE, "px"),
            position: 'absolute',
            left: 0,
            top: "".concat(exports.CROPPER_POINT_AREA_SIZE, "px"),
        }, onMouseDown: onMouseDown }));
};
exports.LeftArea = LeftArea;
var RightBottomArea = function (_a) {
    var onMouseDown = _a.onMouseDown;
    return (react_1.default.createElement(Box_1.default, { sx: {
            cursor: 'se-resize',
            height: "".concat(exports.CROPPER_POINT_AREA_SIZE, "px"),
            width: "".concat(exports.CROPPER_POINT_AREA_SIZE, "px"),
            position: 'absolute',
            right: 0,
            bottom: 0,
        }, onMouseDown: onMouseDown }));
};
exports.RightBottomArea = RightBottomArea;
var BottomArea = function (_a) {
    var onMouseDown = _a.onMouseDown;
    return (react_1.default.createElement(Box_1.default, { sx: {
            cursor: 'n-resize',
            height: "".concat(exports.CROPPER_POINT_AREA_SIZE, "px"),
            width: "calc(100% - ".concat(exports.CROPPER_POINT_AREA_SIZE * 2, "px)"),
            position: 'absolute',
            right: "".concat(exports.CROPPER_POINT_AREA_SIZE, "px"),
            bottom: 0,
        }, onMouseDown: onMouseDown }));
};
exports.BottomArea = BottomArea;
var LeftBottomArea = function (_a) {
    var onMouseDown = _a.onMouseDown;
    return (react_1.default.createElement(Box_1.default, { sx: {
            cursor: 'sw-resize',
            height: "".concat(exports.CROPPER_POINT_AREA_SIZE, "px"),
            width: "".concat(exports.CROPPER_POINT_AREA_SIZE, "px"),
            position: 'absolute',
            left: 0,
            bottom: 0,
        }, onMouseDown: onMouseDown }));
};
exports.LeftBottomArea = LeftBottomArea;
var CropperDashX = function () {
    return (react_1.default.createElement(Box_1.default, { sx: {
            position: 'absolute',
            left: 0,
            top: '33.33333%',
            height: '33.33333%',
            width: '100%',
            opacity: .5,
            border: 'dashed #eee',
            borderWidth: '1px 0'
        } }));
};
exports.CropperDashX = CropperDashX;
var CropperDashY = function () {
    return (react_1.default.createElement(Box_1.default, { sx: {
            position: 'absolute',
            top: 0,
            left: '33.33333%',
            width: '33.33333%',
            height: '100%',
            opacity: .5,
            border: 'dashed #eee',
            borderWidth: '0 1px'
        } }));
};
exports.CropperDashY = CropperDashY;
var CropperCenter = function () {
    return (react_1.default.createElement(Box_1.default, { sx: {
            height: 0,
            width: 0,
            position: 'absolute',
            left: '50%',
            top: '50%',
        } },
        react_1.default.createElement(Box_1.default, { sx: {
                position: 'absolute',
                height: '1px',
                width: '7px',
                left: '-3px',
                top: 0,
                backgroundColor: '#eee',
                opacity: .75,
            } }),
        react_1.default.createElement(Box_1.default, { sx: {
                position: 'absolute',
                height: '7px',
                width: '1px',
                top: '-3px',
                left: 0,
                backgroundColor: '#eee',
                opacity: .75,
            } })));
};
exports.CropperCenter = CropperCenter;
exports.default = exports.CropperBox;
//# sourceMappingURL=cropper-box.js.map