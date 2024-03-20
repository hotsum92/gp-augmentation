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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Box_1 = __importDefault(require("@mui/system/Box"));
var Container_1 = __importDefault(require("@mui/material/Container"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var drop_zone_1 = __importDefault(require("~/component/drop-zone"));
var ImageConverter = __importStar(require("~/image-converter"));
var Main = function () {
    var canvasRef = (0, react_1.useRef)(null);
    var imageRef = (0, react_1.useRef)(null);
    var rubberbandRef = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)(''), imageUrl = _a[0], setImageUrl = _a[1];
    var _b = (0, react_1.useState)(false), hovering = _b[0], setHovering = _b[1];
    var onDrop = function (file) { return __awaiter(void 0, void 0, void 0, function () {
        var canvas, image, ctx, blobUrl, url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    canvas = canvasRef.current;
                    image = imageRef.current;
                    if (!canvas || !image)
                        return [2 /*return*/];
                    ctx = canvas.getContext("2d");
                    if (!ctx)
                        return [2 /*return*/];
                    blobUrl = window.URL.createObjectURL(file);
                    return [4 /*yield*/, ImageConverter.loadImage(ctx, image, blobUrl)
                        //ImageConverter.shift(ctx, image, -10, 30)
                    ];
                case 1:
                    _a.sent();
                    url = canvas.toDataURL("image/jpeg");
                    setImageUrl(url);
                    return [2 /*return*/];
            }
        });
    }); };
    var _c = useRubberband(), rubberband = _c.rubberband, startRubberband = _c.startRubberband, stretchRubberband = _c.stretchRubberband, endRubberband = _c.endRubberband;
    (0, react_1.useEffect)(function () {
        if (canvasRef.current == null)
            return;
        var canvas = canvasRef.current;
        var onmousedownCanvas = function (e) {
            e.preventDefault();
            //const x = e.pageX
            //const y = e.pageY
            var clientRect = canvasRef.current.getBoundingClientRect();
            var positionX = clientRect.left + window.pageXOffset;
            var positionY = clientRect.top + window.pageYOffset;
            console.log(clientRect.left);
            console.log(clientRect.top);
            startRubberband(positionX, positionY);
        };
        var onmousemoveWindow = function (e) {
            e.preventDefault();
            var x = e.pageX;
            var y = e.pageY;
            //var clientRect = imageRef.current!.getBoundingClientRect() ;
            //var positionX = clientRect.left + window.pageXOffset ;
            //var positionY = clientRect.top + window.pageYOffset ;
            stretchRubberband(x, y);
        };
        var onmouseupWindow = function (e) {
            e.preventDefault();
            endRubberband();
        };
        canvas.addEventListener('mousedown', onmousedownCanvas);
        window.addEventListener('mousemove', onmousemoveWindow);
        window.addEventListener('mouseup', onmouseupWindow);
        return function () {
            canvas.removeEventListener('mousedown', onmousedownCanvas);
            window.removeEventListener('mousemove', onmousemoveWindow);
            window.removeEventListener('mouseup', onmouseupWindow);
        };
    }, []);
    var onDragEnter = function () {
        setHovering(true);
    };
    var onDragLeave = function () {
        setHovering(false);
    };
    return (react_1.default.createElement(Box_1.default, { component: 'main', sx: {
            backgroundColor: function (theme) { return theme.palette.grey[100]; },
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
        } },
        react_1.default.createElement(Container_1.default, { fixed: true },
            react_1.default.createElement(Box_1.default, { mb: 3 }),
            react_1.default.createElement(Box_1.default, { sx: { display: 'flex', width: '100%', height: '1000px' } }, imageUrl ? (react_1.default.createElement("img", { height: '1000px', src: imageUrl })) : (react_1.default.createElement(drop_zone_1.default, { onDrop: onDrop, onDragEnter: onDragEnter, onDragLeave: onDragLeave },
                react_1.default.createElement(Box_1.default, { sx: {
                        display: 'flex',
                        height: '1000px',
                        background: hovering ? 'rgba(0, 0, 0, 0.04)' : '',
                        justifyContent: 'center',
                        alignItems: 'center',
                    } },
                    react_1.default.createElement("div", null, "Drop file to upload"))))),
            react_1.default.createElement(Box_1.default, { sx: { position: 'relative' } },
                react_1.default.createElement(Box_1.default, { ref: rubberbandRef, sx: {
                        display: 'inline',
                        position: 'absolute',
                        border: '3px solid yellow',
                        left: rubberband.position.x + 'px',
                        top: rubberband.position.y + 'px',
                        width: rubberband.size.width + 'px',
                        height: rubberband.size.height + 'px',
                    } }),
                react_1.default.createElement("canvas", { ref: canvasRef })),
            react_1.default.createElement("img", { ref: imageRef, style: { display: 'none' } }),
            react_1.default.createElement(Box_1.default, { mb: 3 }),
            react_1.default.createElement(Button_1.default, { variant: 'contained', href: imageUrl, download: 'img.jpeg' }, "Download"))));
};
var useRubberband = function () {
    var _a = (0, react_1.useState)({ x: 0, y: 0 }), position = _a[0], setPosition = _a[1];
    var _b = (0, react_1.useState)({ width: 0, height: 0 }), size = _b[0], setSize = _b[1];
    var _c = (0, react_1.useState)(false), show = _c[0], setShow = _c[1];
    var positionRef = (0, react_1.useRef)({ x: 0, y: 0 });
    var sizeRef = (0, react_1.useRef)({ width: 0, height: 0 });
    var initialPostion = (0, react_1.useRef)({ x: 0, y: 0 });
    var dragging = (0, react_1.useRef)(false);
    var startRubberband = function (x, y) {
        setShow(true);
        setPosition({ x: x, y: y });
        positionRef.current = { x: x, y: y };
        initialPostion.current = { x: x, y: y };
        dragging.current = true;
    };
    var stretchRubberband = function (x, y) {
        if (!dragging.current)
            return;
        var newPosition = {
            x: x < initialPostion.current.x ? x : initialPostion.current.x,
            y: y < initialPostion.current.y ? y : initialPostion.current.y,
        };
        var newSize = {
            width: Math.abs(x - initialPostion.current.x),
            height: Math.abs(y - initialPostion.current.y),
        };
        setPosition(newPosition);
        positionRef.current = newPosition;
        setSize(newSize);
        sizeRef.current = newSize;
    };
    var endRubberband = function () {
        setPosition({ x: 0, y: 0 });
        positionRef.current = { x: 0, y: 0 };
        setSize({ width: 0, height: 0 });
        sizeRef.current = { width: 0, height: 0 };
        setShow(false);
        dragging.current = false;
    };
    return {
        rubberband: {
            position: position,
            size: size,
            show: show,
        },
        startRubberband: startRubberband,
        stretchRubberband: stretchRubberband,
        endRubberband: endRubberband,
    };
};
exports.default = Main;
//# sourceMappingURL=main.js.map