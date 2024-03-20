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
exports.SidebarSeparator = void 0;
var react_1 = __importDefault(require("react"));
var Box_1 = __importDefault(require("@mui/system/Box"));
var Style = __importStar(require("~/style"));
var SidebarSeparator = function () {
    return (react_1.default.createElement(Box_1.default, { sx: {
            height: '100%',
            width: Style.SEPARATOR_WIDTH + 'px',
            backgroundColor: function (theme) { return theme.palette.grey[300]; },
        } }));
};
exports.SidebarSeparator = SidebarSeparator;
exports.default = exports.SidebarSeparator;
//# sourceMappingURL=sidebar-separator.js.map