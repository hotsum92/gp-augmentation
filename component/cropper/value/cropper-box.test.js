"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
var CropperBox = __importStar(require("./cropper-box"));
describe('cropper box stretch', function () {
    test.each(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    x0    | y0    | w0    | h0    | x1    | y1    | x2    | y2    | w2    | h2\n    ", "  | ", "  | ", "  | ", "  | ", " | ", " | ", "  | ", "  | ", " | ", "\n    ", " | ", " | ", " | ", " | ", " | ", " | ", " | ", " | ", " | ", "\n    ", " | ", " | ", " | ", " | ", "  | ", " | ", "  | ", " | ", "  | ", "\n  "], ["\n    x0    | y0    | w0    | h0    | x1    | y1    | x2    | y2    | w2    | h2\n    ", "  | ", "  | ", "  | ", "  | ", " | ", " | ", "  | ", "  | ", " | ", "\n    ", " | ", " | ", " | ", " | ", " | ", " | ", " | ", " | ", " | ", "\n    ", " | ", " | ", " | ", " | ", "  | ", " | ", "  | ", " | ", "  | ", "\n  "])), 0, 0, 0, 0, 10, 20, 0, 0, 10, 20, 10, 20, 10, 10, 20, 30, 10, 20, 10, 10, 10, 20, 10, 10, 5, 10, 5, 10, 5, 10)('stretch cropper box from from $x0,$y0 to $x1,$y1', function (_a) {
        var x0 = _a.x0, y0 = _a.y0, w0 = _a.w0, h0 = _a.h0, x1 = _a.x1, y1 = _a.y1, x2 = _a.x2, y2 = _a.y2, w2 = _a.w2, h2 = _a.h2;
        var box = CropperBox.newCropperBox({ x: x0, y: y0, w: w0, h: h0 });
        var newBox = CropperBox.stretchTo(box, x1, y1);
        expect(newBox).toEqual({ x: x2, y: y2, w: w2, h: h2 });
    });
});
describe('cropper box shift', function () {
    test.each(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    x0    | y0    | w0    | h0    | x1    | y1    | x2    | y2    | x3    | y3    | w3    | h3\n    ", "  | ", "  | ", "  | ", "  | ", "  | ", "  | ", " | ", " | ", " | ", " | ", "  | ", "\n    ", " | ", " | ", " | ", " | ", " | ", " | ", " | ", " | ", " | ", " | ", " | ", "\n    ", " | ", " | ", " | ", " | ", " | ", " | ", "  | ", " | ", "  | ", " | ", " | ", "\n  "], ["\n    x0    | y0    | w0    | h0    | x1    | y1    | x2    | y2    | x3    | y3    | w3    | h3\n    ", "  | ", "  | ", "  | ", "  | ", "  | ", "  | ", " | ", " | ", " | ", " | ", "  | ", "\n    ", " | ", " | ", " | ", " | ", " | ", " | ", " | ", " | ", " | ", " | ", " | ", "\n    ", " | ", " | ", " | ", " | ", " | ", " | ", "  | ", " | ", "  | ", " | ", " | ", "\n  "])), 0, 0, 0, 0, 0, 0, 10, 20, 10, 20, 0, 0, 10, 20, 10, 10, 10, 20, 20, 30, 20, 30, 10, 10, 10, 20, 10, 10, 10, 20, 5, 10, 5, 10, 10, 10)('stretch cropper box from from $x0,$y0 to $x2,$y2', function (_a) {
        var x0 = _a.x0, y0 = _a.y0, w0 = _a.w0, h0 = _a.h0, x1 = _a.x1, y1 = _a.y1, x2 = _a.x2, y2 = _a.y2, x3 = _a.x3, y3 = _a.y3, w3 = _a.w3, h3 = _a.h3;
        var box = CropperBox.newCropperBox({ x: x0, y: y0, w: w0, h: h0 });
        var newBox = CropperBox.shift(box, x1, y1, x2, y2);
        expect(newBox).toEqual({ x: x3, y: y3, w: w3, h: h3 });
    });
});
describe('cropper box resize left top', function () {
    test('resize cropper box from 0,0 to 20,20', function () {
        var box = CropperBox.newCropperBox({ x: 0, y: 0, w: 10, h: 10 });
        var newBox = CropperBox.leftTopTo(box, 20, 20);
        expect(newBox).toEqual({ x: 10, y: 10, w: 10, h: 10 });
    });
    test('resize cropper box from 10,20 to 20,30', function () {
        var box = CropperBox.newCropperBox({ x: 10, y: 20, w: 10, h: 10 });
        var newBox = CropperBox.leftTopTo(box, 20, 30);
        expect(newBox).toEqual({ x: 20, y: 30, w: 0, h: 0 });
    });
    test('resize cropper box from 10,20 to 0,0', function () {
        var box = CropperBox.newCropperBox({ x: 10, y: 20, w: 10, h: 10 });
        var newBox = CropperBox.leftTopTo(box, 0, 0);
        expect(newBox).toEqual({ x: 0, y: 0, w: 20, h: 30 });
    });
});
describe('cropper box resize right top', function () {
    test('resize cropper box from 0,0 to 20,20', function () {
        var box = CropperBox.newCropperBox({ x: 0, y: 0, w: 10, h: 10 });
        var newBox = CropperBox.rightTopTo(box, 20, 20);
        expect(newBox).toEqual({ x: 0, y: 10, w: 20, h: 10 });
    });
    test('resize cropper box from 10,20 to 20,30', function () {
        var box = CropperBox.newCropperBox({ x: 10, y: 20, w: 10, h: 10 });
        var newBox = CropperBox.rightTopTo(box, 20, 30);
        expect(newBox).toEqual({ x: 10, y: 30, w: 10, h: 0 });
    });
    test('resize cropper box from 10,20 to 0,0', function () {
        var box = CropperBox.newCropperBox({ x: 10, y: 20, w: 10, h: 10 });
        var newBox = CropperBox.rightTopTo(box, 0, 0);
        expect(newBox).toEqual({ x: 0, y: 0, w: 10, h: 30 });
    });
});
describe('cropper box resize right bottom', function () {
    test('resize cropper box from 0,0 to 20,20', function () {
        var box = CropperBox.newCropperBox({ x: 0, y: 0, w: 10, h: 10 });
        var newBox = CropperBox.rightBottomTo(box, 20, 20);
        expect(newBox).toEqual({ x: 0, y: 0, w: 20, h: 20 });
    });
    test('resize cropper box from 10,20 to 20,30', function () {
        var box = CropperBox.newCropperBox({ x: 10, y: 20, w: 10, h: 10 });
        var newBox = CropperBox.rightBottomTo(box, 20, 30);
        expect(newBox).toEqual({ x: 10, y: 20, w: 10, h: 10 });
    });
    test('resize cropper box from 10,20 to 0,0', function () {
        var box = CropperBox.newCropperBox({ x: 10, y: 20, w: 10, h: 10 });
        var newBox = CropperBox.rightBottomTo(box, 0, 0);
        expect(newBox).toEqual({ x: 0, y: 0, w: 10, h: 20 });
    });
});
describe('cropper box resize left bottom', function () {
    test('resize cropper box from 0,0 to 20,20', function () {
        var box = CropperBox.newCropperBox({ x: 0, y: 0, w: 10, h: 10 });
        var newBox = CropperBox.leftBottomTo(box, 20, 20);
        expect(newBox).toEqual({ x: 10, y: 0, w: 10, h: 20 });
    });
    test('resize cropper box from 10,20 to 20,30', function () {
        var box = CropperBox.newCropperBox({ x: 10, y: 20, w: 10, h: 10 });
        var newBox = CropperBox.leftBottomTo(box, 20, 30);
        expect(newBox).toEqual({ x: 20, y: 20, w: 0, h: 10 });
    });
    test('resize cropper box from 10,20 to 0,0', function () {
        var box = CropperBox.newCropperBox({ x: 10, y: 20, w: 10, h: 10 });
        var newBox = CropperBox.leftBottomTo(box, 0, 0);
        expect(newBox).toEqual({ x: 0, y: 0, w: 20, h: 20 });
    });
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=cropper-box.test.js.map