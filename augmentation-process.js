"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newCrop = exports.AugmentationProcessType = void 0;
var AugmentationProcessType;
(function (AugmentationProcessType) {
    AugmentationProcessType["Crop"] = "Crop";
})(AugmentationProcessType || (exports.AugmentationProcessType = AugmentationProcessType = {}));
var newCrop = function (x, y, w, h) {
    return {
        type: AugmentationProcessType.Crop,
        x: x,
        y: y,
        w: w,
        h: h,
    };
};
exports.newCrop = newCrop;
//# sourceMappingURL=augmentation-process.js.map