"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCropper = void 0;
var react_1 = require("react");
var cropper_box_1 = require("./value/cropper-box");
var useCropper = function () {
    var _a = (0, react_1.useState)((0, cropper_box_1.newCropperBox)()), box = _a[0], setBox = _a[1];
    var boxRef = (0, react_1.useRef)((0, cropper_box_1.newCropperBox)());
    var pointRef = (0, react_1.useRef)((0, cropper_box_1.newPoint)());
    var status = (0, react_1.useRef)(cropper_box_1.CropperState.NONE);
    var reset = function () {
        var newBox = (0, cropper_box_1.newCropperBox)({ w: 0, h: 0 });
        setBox(newBox);
        boxRef.current = newBox;
    };
    var startStrech = function (rect, pageX, pageY) {
        if (status.current !== cropper_box_1.CropperState.NONE)
            return;
        var x = pageX - rect.left;
        var y = pageY - rect.top;
        status.current = cropper_box_1.CropperState.STRETCHING;
        setBox((0, cropper_box_1.newCropperBox)({ x: x, y: y }));
        boxRef.current = (0, cropper_box_1.newCropperBox)({ x: x, y: y });
    };
    var onStreching = function (x, y) {
        if (status.current !== cropper_box_1.CropperState.STRETCHING)
            return;
        setBox((0, cropper_box_1.stretchTo)(boxRef.current, x, y));
    };
    var endStrech = function (x, y) {
        if (status.current !== cropper_box_1.CropperState.STRETCHING)
            return;
        status.current = cropper_box_1.CropperState.NONE;
        var newBox = (0, cropper_box_1.stretchTo)(boxRef.current, x, y);
        setBox(newBox);
        boxRef.current = newBox;
    };
    var startMove = function (rect, pageX, pageY) {
        if (status.current !== cropper_box_1.CropperState.NONE)
            return;
        var x = pageX - rect.left;
        var y = pageY - rect.top;
        status.current = cropper_box_1.CropperState.MOVING;
        pointRef.current = (0, cropper_box_1.newPoint)({ x: x, y: y });
    };
    var onMoving = function (x, y) {
        if (status.current !== cropper_box_1.CropperState.MOVING)
            return;
        var newBox = (0, cropper_box_1.shift)(boxRef.current, pointRef.current.x, pointRef.current.y, x, y);
        setBox(newBox);
    };
    var endMove = function (x, y) {
        if (status.current !== cropper_box_1.CropperState.MOVING)
            return;
        status.current = cropper_box_1.CropperState.NONE;
        var newBox = (0, cropper_box_1.shift)(boxRef.current, pointRef.current.x, pointRef.current.y, x, y);
        setBox(newBox);
        boxRef.current = newBox;
    };
    var startMoveLeftTop = function () {
        status.current = cropper_box_1.CropperState.MOVE_LEFT_TOP;
    };
    var onMovingLeftTop = function (x, y) {
        if (status.current !== cropper_box_1.CropperState.MOVE_LEFT_TOP)
            return;
        var newBox = (0, cropper_box_1.leftTopTo)(boxRef.current, x, y);
        setBox(newBox);
    };
    var endMoveLeftTop = function (x, y) {
        if (status.current !== cropper_box_1.CropperState.MOVE_LEFT_TOP)
            return;
        status.current = cropper_box_1.CropperState.NONE;
        var newBox = (0, cropper_box_1.leftTopTo)(boxRef.current, x, y);
        setBox(newBox);
        boxRef.current = newBox;
    };
    var startMoveRightTop = function () {
        status.current = cropper_box_1.CropperState.MOVE_RIGHT_TOP;
    };
    var onMovingRightTop = function (x, y) {
        if (status.current !== cropper_box_1.CropperState.MOVE_RIGHT_TOP)
            return;
        var newBox = (0, cropper_box_1.rightTopTo)(boxRef.current, x, y);
        setBox(newBox);
    };
    var endMoveRightTop = function (x, y) {
        if (status.current !== cropper_box_1.CropperState.MOVE_RIGHT_TOP)
            return;
        status.current = cropper_box_1.CropperState.NONE;
        var newBox = (0, cropper_box_1.rightTopTo)(boxRef.current, x, y);
        setBox(newBox);
        boxRef.current = newBox;
    };
    var startMoveRightBottom = function () {
        status.current = cropper_box_1.CropperState.MOVE_RIGHT_BOTTOM;
    };
    var onMovingRightBottom = function (x, y) {
        if (status.current !== cropper_box_1.CropperState.MOVE_RIGHT_BOTTOM)
            return;
        var newBox = (0, cropper_box_1.rightBottomTo)(boxRef.current, x, y);
        setBox(newBox);
    };
    var endMoveRightBottom = function (x, y) {
        if (status.current !== cropper_box_1.CropperState.MOVE_RIGHT_BOTTOM)
            return;
        status.current = cropper_box_1.CropperState.NONE;
        var newBox = (0, cropper_box_1.rightBottomTo)(boxRef.current, x, y);
        setBox(newBox);
        boxRef.current = newBox;
    };
    var startMoveLeftBottom = function () {
        status.current = cropper_box_1.CropperState.MOVE_LEFT_BOTTOM;
    };
    var onMovingLeftBottom = function (x, y) {
        if (status.current !== cropper_box_1.CropperState.MOVE_LEFT_BOTTOM)
            return;
        var newBox = (0, cropper_box_1.leftBottomTo)(boxRef.current, x, y);
        setBox(newBox);
    };
    var endMoveLeftBottom = function (x, y) {
        if (status.current !== cropper_box_1.CropperState.MOVE_LEFT_BOTTOM)
            return;
        status.current = cropper_box_1.CropperState.NONE;
        var newBox = (0, cropper_box_1.leftBottomTo)(boxRef.current, x, y);
        setBox(newBox);
        boxRef.current = newBox;
    };
    var startMoveTop = function () {
        status.current = cropper_box_1.CropperState.MOVE_TOP;
    };
    var onMovingTop = function (y) {
        if (status.current !== cropper_box_1.CropperState.MOVE_TOP)
            return;
        var newBox = (0, cropper_box_1.topTo)(boxRef.current, y);
        setBox(newBox);
    };
    var endMoveTop = function (y) {
        if (status.current !== cropper_box_1.CropperState.MOVE_TOP)
            return;
        status.current = cropper_box_1.CropperState.NONE;
        var newBox = (0, cropper_box_1.topTo)(boxRef.current, y);
        setBox(newBox);
        boxRef.current = newBox;
    };
    var startMoveRight = function () {
        status.current = cropper_box_1.CropperState.MOVE_RIGHT;
    };
    var onMovingRight = function (x) {
        if (status.current !== cropper_box_1.CropperState.MOVE_RIGHT)
            return;
        var newBox = (0, cropper_box_1.rightTo)(boxRef.current, x);
        setBox(newBox);
    };
    var endMoveRight = function (x) {
        if (status.current !== cropper_box_1.CropperState.MOVE_RIGHT)
            return;
        status.current = cropper_box_1.CropperState.NONE;
        var newBox = (0, cropper_box_1.rightTo)(boxRef.current, x);
        setBox(newBox);
        boxRef.current = newBox;
    };
    var startMoveBottom = function () {
        status.current = cropper_box_1.CropperState.MOVE_BOTTOM;
    };
    var onMovingBottom = function (y) {
        if (status.current !== cropper_box_1.CropperState.MOVE_BOTTOM)
            return;
        var newBox = (0, cropper_box_1.bottomTo)(boxRef.current, y);
        setBox(newBox);
    };
    var endMoveBottom = function (y) {
        if (status.current !== cropper_box_1.CropperState.MOVE_BOTTOM)
            return;
        status.current = cropper_box_1.CropperState.NONE;
        var newBox = (0, cropper_box_1.bottomTo)(boxRef.current, y);
        setBox(newBox);
        boxRef.current = newBox;
    };
    var startMoveLeft = function () {
        status.current = cropper_box_1.CropperState.MOVE_LEFT;
    };
    var onMovingLeft = function (x) {
        if (status.current !== cropper_box_1.CropperState.MOVE_LEFT)
            return;
        var newBox = (0, cropper_box_1.leftTo)(boxRef.current, x);
        setBox(newBox);
    };
    var endMoveLeft = function (x) {
        if (status.current !== cropper_box_1.CropperState.MOVE_LEFT)
            return;
        status.current = cropper_box_1.CropperState.NONE;
        var newBox = (0, cropper_box_1.leftTo)(boxRef.current, x);
        setBox(newBox);
        boxRef.current = newBox;
    };
    var onMouseMove = function (rect, pageX, pageY) {
        var x = pageX - rect.left;
        var y = pageY - rect.top;
        onStreching(x, y);
        onMoving(x, y);
        onMovingLeftTop(x, y);
        onMovingRightTop(x, y);
        onMovingRightBottom(x, y);
        onMovingLeftBottom(x, y);
        onMovingTop(y);
        onMovingRight(x);
        onMovingBottom(y);
        onMovingLeft(x);
    };
    var onMouseUp = function (rect, pageX, pageY) {
        var x = pageX - rect.left;
        var y = pageY - rect.top;
        endStrech(x, y);
        endMove(x, y);
        endMoveLeftTop(x, y);
        endMoveRightTop(x, y);
        endMoveRightBottom(x, y);
        endMoveLeftBottom(x, y);
        endMoveTop(y);
        endMoveRight(x);
        endMoveBottom(y);
        endMoveLeft(x);
    };
    return {
        box: box,
        boxRef: boxRef,
        reset: reset,
        startStrech: startStrech,
        startMove: startMove,
        startMoveLeftTop: startMoveLeftTop,
        startMoveRightTop: startMoveRightTop,
        startMoveRightBottom: startMoveRightBottom,
        startMoveLeftBottom: startMoveLeftBottom,
        startMoveTop: startMoveTop,
        startMoveRight: startMoveRight,
        startMoveBottom: startMoveBottom,
        startMoveLeft: startMoveLeft,
        onMouseMove: onMouseMove,
        onMouseUp: onMouseUp,
    };
};
exports.useCropper = useCropper;
exports.default = exports.useCropper;
//# sourceMappingURL=use-cropper.js.map