"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crop = exports.shift = exports.flipHorizontal = exports.flipVertical = exports.rotate = exports.reset = exports.loadImage = exports.image2jpg = void 0;
var image2jpg = function (url) {
    var image = new Image();
    image.src = url;
    var canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    var ctx = canvas.getContext("2d");
    return new Promise(function (resolve) {
        image.onload = function () {
            canvas.width = image.width;
            canvas.height = image.height;
            ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(image, 0, 0);
            resolve(canvas.toDataURL());
        };
    });
};
exports.image2jpg = image2jpg;
var loadImage = function (ctx, image, url) {
    image.src = url;
    return new Promise(function (resolve) {
        image.onload = function () {
            ctx.canvas.width = image.width;
            ctx.canvas.height = image.height;
            ctx.drawImage(image, 0, 0);
            resolve();
        };
    });
};
exports.loadImage = loadImage;
var reset = function (ctx, image) {
    ctx.save();
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, image.width, image.height);
    ctx.restore();
};
exports.reset = reset;
var rotate = function (ctx, image, angle) {
    ctx.save();
    ctx.translate(image.width / 2, image.height / 2);
    ctx.rotate(angle * Math.PI / 180);
    ctx.drawImage(image, -image.width / 2, -image.height / 2, image.width, image.height);
    ctx.translate(-image.width / 2, -image.height / 2);
    ctx.restore();
};
exports.rotate = rotate;
var flipVertical = function (ctx, image) {
    ctx.save();
    ctx.translate(image.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(image, 0, 0);
    ctx.restore();
};
exports.flipVertical = flipVertical;
var flipHorizontal = function (ctx, image) {
    ctx.save();
    ctx.translate(0, image.height);
    ctx.scale(1, -1);
    ctx.drawImage(image, 0, 0);
    ctx.restore();
};
exports.flipHorizontal = flipHorizontal;
var shift = function (ctx, image, x, y) {
    ctx.drawImage(image, x, y, x + image.width, y + image.height);
};
exports.shift = shift;
var crop = function (ctx, image, x, y, w, h) {
    ctx.canvas.width = w;
    ctx.canvas.height = h;
    ctx.drawImage(image, x, y, w, h, 0, 0, w, h);
};
exports.crop = crop;
//# sourceMappingURL=image-converter.js.map