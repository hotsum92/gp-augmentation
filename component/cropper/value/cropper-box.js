"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bottomTo = exports.topTo = exports.rightTo = exports.leftTo = exports.leftBottomTo = exports.rightBottomTo = exports.rightTopTo = exports.leftTopTo = exports.shift = exports.stretchTo = exports.newPoint = exports.newCropperBox = exports.CropperState = void 0;
var CropperState;
(function (CropperState) {
    CropperState["NONE"] = "NONE";
    CropperState["STRETCHING"] = "STRETCHING";
    CropperState["MOVING"] = "MOVING";
    CropperState["MOVE_LEFT_TOP"] = "MOVE_LEFT_TOP";
    CropperState["MOVE_RIGHT_TOP"] = "MOVE_RIGHT_TOP";
    CropperState["MOVE_RIGHT_BOTTOM"] = "MOVE_RIGHT_BOTTOM";
    CropperState["MOVE_LEFT_BOTTOM"] = "MOVE_LEFT_BOTTOM";
    CropperState["MOVE_TOP"] = "MOVE_TOP";
    CropperState["MOVE_RIGHT"] = "MOVE_RIGHT";
    CropperState["MOVE_BOTTOM"] = "MOVE_BOTTOM";
    CropperState["MOVE_LEFT"] = "MOVE_LEFT";
})(CropperState || (exports.CropperState = CropperState = {}));
var newCropperBox = function (_a) {
    var _b = _a === void 0 ? {} : _a, x = _b.x, y = _b.y, w = _b.w, h = _b.h;
    return {
        x: x !== null && x !== void 0 ? x : 0,
        y: y !== null && y !== void 0 ? y : 0,
        w: w !== null && w !== void 0 ? w : 0,
        h: h !== null && h !== void 0 ? h : 0,
    };
};
exports.newCropperBox = newCropperBox;
var newPoint = function (_a) {
    var _b = _a === void 0 ? {} : _a, x = _b.x, y = _b.y;
    return {
        x: x !== null && x !== void 0 ? x : 0,
        y: y !== null && y !== void 0 ? y : 0,
    };
};
exports.newPoint = newPoint;
var stretchTo = function (box, x, y) {
    return __assign(__assign({}, box), { x: x < box.x ? x : box.x, y: y < box.y ? y : box.y, w: Math.abs(x - box.x), h: Math.abs(y - box.y) });
};
exports.stretchTo = stretchTo;
var shift = function (box, x0, y0, x1, y1) {
    return __assign(__assign({}, box), { x: box.x + (x1 - x0), y: box.y + (y1 - y0) });
};
exports.shift = shift;
var leftTopTo = function (box, x, y) {
    return __assign(__assign({}, box), { x: x < box.x + box.w ? x : box.x + box.w, y: y < box.y + box.h ? y : box.y + box.h, w: Math.abs(x - (box.x + box.w)), h: Math.abs(y - (box.y + box.h)) });
};
exports.leftTopTo = leftTopTo;
var rightTopTo = function (box, x, y) {
    return __assign(__assign({}, box), { x: x < box.x ? x : box.x, y: y < box.y + box.h ? y : box.y + box.h, w: Math.abs(x - box.x), h: Math.abs(y - (box.y + box.h)) });
};
exports.rightTopTo = rightTopTo;
var rightBottomTo = function (box, x, y) {
    return __assign(__assign({}, box), { x: x < box.x ? x : box.x, y: y < box.y ? y : box.y, w: Math.abs(x - box.x), h: Math.abs(y - box.y) });
};
exports.rightBottomTo = rightBottomTo;
var leftBottomTo = function (box, x, y) {
    return __assign(__assign({}, box), { x: x < box.x + box.w ? x : box.x + box.w, y: y < box.y ? y : box.y, w: Math.abs(x - (box.x + box.w)), h: Math.abs(y - box.y) });
};
exports.leftBottomTo = leftBottomTo;
var leftTo = function (box, x) {
    return __assign(__assign({}, box), { x: x < box.x + box.w ? x : box.x + box.w, w: Math.abs(x - (box.x + box.w)) });
};
exports.leftTo = leftTo;
var rightTo = function (box, x) {
    return __assign(__assign({}, box), { x: x < box.x ? x : box.x, w: Math.abs(x - box.x) });
};
exports.rightTo = rightTo;
var topTo = function (box, y) {
    return __assign(__assign({}, box), { y: y < box.y + box.h ? y : box.y + box.h, h: Math.abs(y - (box.y + box.h)) });
};
exports.topTo = topTo;
var bottomTo = function (box, y) {
    return __assign(__assign({}, box), { y: y < box.y ? y : box.y, h: Math.abs(y - box.y) });
};
exports.bottomTo = bottomTo;
//# sourceMappingURL=cropper-box.js.map