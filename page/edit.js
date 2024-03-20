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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Box_1 = __importDefault(require("@mui/system/Box"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var Style = __importStar(require("~/style"));
var cropper_workspace_1 = __importDefault(require("~/component/cropper/cropper-workspace"));
var cropper_container_1 = __importDefault(require("~/component/cropper/cropper-container"));
var cropper_image_1 = __importDefault(require("~/component/cropper/cropper-image"));
var cropper_image_face_1 = __importDefault(require("~/component/cropper/cropper-image-face"));
var cropper_box_1 = require("~/component/cropper/cropper-box");
var file_preview_1 = __importDefault(require("~/component/file-preview"));
var sidebar_1 = __importDefault(require("~/component/sidebar"));
var sidebar_separator_1 = __importDefault(require("~/component/sidebar-separator"));
var sidebar_spacer_1 = __importDefault(require("~/component/sidebar-spacer"));
var bottom_bar_1 = __importDefault(require("~/component/bottom-bar"));
var ImageConverter = __importStar(require("~/image-converter"));
var augmentation_process_1 = require("~/augmentation-process");
var use_cropper_1 = __importDefault(require("~/component/cropper/use-cropper"));
var modal_drop_1 = __importDefault(require("~/modal-drop"));
var image_1 = require("~/sample/image");
var EditPage = function () {
    var cropperBoxRef = (0, react_1.useRef)(null);
    var imageRef = (0, react_1.useRef)(null);
    var cropper = (0, use_cropper_1.default)();
    var augmentationProcess = useAugmentationProcess();
    var _a = (0, react_1.useState)(false), dropping = _a[0], setDropping = _a[1];
    var _b = (0, react_1.useState)([image_1.image1, image_1.image2]), blobUrls = _b[0], setBlobUrls = _b[1];
    var _c = (0, react_1.useState)(image_1.image1), selected = _c[0], setSelected = _c[1];
    (0, react_1.useEffect)(function () {
        var onmousemoveWindow = function (e) {
            e.preventDefault();
            cropper.onMouseMove(imageRef.current.getBoundingClientRect(), e.pageX, e.pageY);
        };
        var onmouseupWindow = function (e) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                e.preventDefault();
                cropper.onMouseUp(imageRef.current.getBoundingClientRect(), e.pageX, e.pageY);
                return [2 /*return*/];
            });
        }); };
        window.addEventListener('mousemove', onmousemoveWindow);
        window.addEventListener('mouseup', onmouseupWindow);
        return function () {
            window.removeEventListener('mousemove', onmousemoveWindow);
            window.removeEventListener('mouseup', onmouseupWindow);
        };
    }, []);
    var onMouseDownImageFace = function (pageX, pageY) {
        cropper.startStrech(imageRef.current.getBoundingClientRect(), pageX, pageY);
    };
    var onMouseDownCropperBox = function (pageX, pageY) {
        cropper.startMove(imageRef.current.getBoundingClientRect(), pageX, pageY);
    };
    var onMouseDownLeftTop = function (e) {
        e.preventDefault();
        cropper.startMoveLeftTop();
    };
    var onMouseDownRightTop = function (e) {
        e.preventDefault();
        cropper.startMoveRightTop();
    };
    var onMouseDownRightBottom = function (e) {
        e.preventDefault();
        cropper.startMoveRightBottom();
    };
    var onMouseDownLeftBottom = function (e) {
        e.preventDefault();
        cropper.startMoveLeftBottom();
    };
    var onMouseDownTop = function (e) {
        e.preventDefault();
        cropper.startMoveTop();
    };
    var onMouseDownRight = function (e) {
        e.preventDefault();
        cropper.startMoveRight();
    };
    var onMouseDownBotton = function (e) {
        e.preventDefault();
        cropper.startMoveBottom();
    };
    var onMouseDownLeft = function (e) {
        e.preventDefault();
        cropper.startMoveLeft();
    };
    var onDragEnter = function (e) {
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            setDropping(true);
        }
    };
    var onDragLeave = function (e) {
        if (e.relatedTarget == null) {
            setDropping(false);
        }
    };
    var onDrop = function (files) {
        setDropping(false);
        var urls = [];
        for (var i = 0; i < files.length; i++) {
            urls.push(window.URL.createObjectURL(files[i]));
        }
        setBlobUrls(__spreadArray(__spreadArray([], blobUrls, true), urls, true));
    };
    var onClickPreview = function (url) {
        setSelected(url);
    };
    var onClickDeletePreview = function (url) {
        window.URL.revokeObjectURL(url);
        setBlobUrls(blobUrls.filter(function (u) { return u !== url; }));
    };
    var onClickCrop = function () { return __awaiter(void 0, void 0, void 0, function () {
        var box;
        return __generator(this, function (_a) {
            box = cropper.boxRef.current;
            augmentationProcess.addProcess(selected, (0, augmentation_process_1.newCrop)(box.x, box.y, box.w, box.h));
            return [2 /*return*/];
        });
    }); };
    var onClickSave = function () {
        var link = document.createElement('a');
        for (var _i = 0, _a = augmentationProcess.processed; _i < _a.length; _i++) {
            var url = _a[_i];
            link.href = url;
            link.download = 'img.png';
            link.click();
        }
    };
    var onLoadCropperImage = function () {
        cropper.reset();
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Box_1.default, { sx: { display: 'flex' }, onDragEnter: onDragEnter, onDragLeave: onDragLeave },
            react_1.default.createElement(cropper_workspace_1.default, null,
                react_1.default.createElement(cropper_container_1.default, null,
                    react_1.default.createElement(cropper_image_1.default, { ref: imageRef, src: selected, onLoad: onLoadCropperImage }),
                    react_1.default.createElement(cropper_image_face_1.default, { onMouseDown: onMouseDownImageFace }),
                    react_1.default.createElement(cropper_box_1.CropperBox, { ref: cropperBoxRef, x: cropper.box.x, y: cropper.box.y, width: cropper.box.w, height: cropper.box.h, onMouseDown: onMouseDownCropperBox },
                        react_1.default.createElement(cropper_box_1.CropperBoxImage, { x: cropper.box.x, y: cropper.box.y, src: selected }),
                        react_1.default.createElement(cropper_box_1.CropperDashX, null),
                        react_1.default.createElement(cropper_box_1.CropperDashY, null),
                        react_1.default.createElement(cropper_box_1.CropperCenter, null),
                        react_1.default.createElement(cropper_box_1.LeftPoint, { onMouseDown: onMouseDownLeft }),
                        react_1.default.createElement(cropper_box_1.LeftArea, { onMouseDown: onMouseDownLeft }),
                        react_1.default.createElement(cropper_box_1.LeftTopPoint, { onMouseDown: onMouseDownLeftTop }),
                        react_1.default.createElement(cropper_box_1.LeftTopArea, { onMouseDown: onMouseDownLeftTop }),
                        react_1.default.createElement(cropper_box_1.LeftBottomPoint, { onMouseDown: onMouseDownLeftBottom }),
                        react_1.default.createElement(cropper_box_1.LeftBottomArea, { onMouseDown: onMouseDownLeftBottom }),
                        react_1.default.createElement(cropper_box_1.RightPoint, { onMouseDown: onMouseDownRight }),
                        react_1.default.createElement(cropper_box_1.RightArea, { onMouseDown: onMouseDownRight }),
                        react_1.default.createElement(cropper_box_1.RightTopPoint, { onMouseDown: onMouseDownRightTop }),
                        react_1.default.createElement(cropper_box_1.RightTopArea, { onMouseDown: onMouseDownRightTop }),
                        react_1.default.createElement(cropper_box_1.RightBottomPoint, { onMouseDown: onMouseDownRightBottom }),
                        react_1.default.createElement(cropper_box_1.RightBottomArea, { onMouseDown: onMouseDownRightBottom }),
                        react_1.default.createElement(cropper_box_1.TopPoint, { onMouseDown: onMouseDownTop }),
                        react_1.default.createElement(cropper_box_1.TopArea, { onMouseDown: onMouseDownTop }),
                        react_1.default.createElement(cropper_box_1.BottomPoint, { onMouseDown: onMouseDownBotton }),
                        react_1.default.createElement(cropper_box_1.BottomArea, { onMouseDown: onMouseDownBotton })))),
            react_1.default.createElement(sidebar_1.default, { right: true, width: Style.SECOND_FILE_SIDEBAR_WIDTH },
                react_1.default.createElement(Box_1.default, { sx: { height: '100%', display: 'flex' } },
                    react_1.default.createElement(Box_1.default, { sx: { height: '100%', flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' } },
                        augmentationProcess.processed.map(function (url) {
                            return react_1.default.createElement(Box_1.default, { key: url, mt: 1 },
                                react_1.default.createElement(file_preview_1.default, { src: url, selected: selected === url, onClick: function () { return onClickPreview(url); } }));
                        }),
                        react_1.default.createElement(Box_1.default, { mt: 2 })),
                    react_1.default.createElement(sidebar_spacer_1.default, { width: Style.FILE_SIDEBAR_WIDTH + Style.SEPARATOR_WIDTH }))),
            react_1.default.createElement(bottom_bar_1.default, null,
                react_1.default.createElement(Box_1.default, { px: 2, sx: { height: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' } },
                    react_1.default.createElement(Button_1.default, { variant: "contained", color: "primary", onClick: onClickCrop }, "Crop"),
                    react_1.default.createElement(Box_1.default, { pr: 1 }),
                    react_1.default.createElement(Button_1.default, { variant: "contained", color: "primary", onClick: onClickSave }, "Save"),
                    react_1.default.createElement(sidebar_spacer_1.default, { width: Style.SECOND_FILE_SIDEBAR_WIDTH }))),
            react_1.default.createElement(sidebar_1.default, { right: true, width: Style.FILE_SIDEBAR_WIDTH + Style.SEPARATOR_WIDTH },
                react_1.default.createElement(sidebar_separator_1.default, null)),
            react_1.default.createElement(sidebar_1.default, { right: true, width: Style.FILE_SIDEBAR_WIDTH },
                react_1.default.createElement(Box_1.default, { sx: { display: 'flex', flexDirection: 'column', alignItems: 'center' } },
                    blobUrls.map(function (url) {
                        return react_1.default.createElement(Box_1.default, { key: url, mt: 1 },
                            react_1.default.createElement(file_preview_1.default, { src: url, selected: selected === url, onClick: function () { return onClickPreview(url); }, onDelete: function () { return onClickDeletePreview(url); } }));
                    }),
                    react_1.default.createElement(Box_1.default, { mt: 2 })))),
        dropping ? react_1.default.createElement(modal_drop_1.default, { onDrop: onDrop }) : null));
};
var useAugmentationProcess = function () {
    var processRef = (0, react_1.useRef)({});
    var _a = (0, react_1.useState)([]), processed = _a[0], setProcessed = _a[1];
    var addProcess = function (url, process) { return __awaiter(void 0, void 0, void 0, function () {
        var canvas, image, ctx;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (processRef.current[url] == null) {
                        processRef.current[url] = [];
                    }
                    processRef.current[url].push(process);
                    canvas = document.createElement("canvas");
                    image = new Image();
                    ctx = canvas.getContext("2d");
                    return [4 /*yield*/, ImageConverter.loadImage(ctx, image, url)];
                case 1:
                    _a.sent();
                    setProcessed(processRef.current[url].map(function (process) {
                        ImageConverter.crop(ctx, image, process.x, process.y, process.w, process.h);
                        return canvas.toDataURL();
                    }));
                    return [2 /*return*/];
            }
        });
    }); };
    return {
        processRef: processRef,
        processed: processed,
        addProcess: addProcess,
    };
};
exports.default = EditPage;
//# sourceMappingURL=edit.js.map