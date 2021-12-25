"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const radash_1 = __importDefault(require("radash"));
const lambda_1 = require("@exobase/lambda");
// @ts-ignore
async function pingEndpoint(props) {
    return {
        message: 'pong'
    };
}
exports.default = radash_1.default.compose((0, lambda_1.useLambda)(), pingEndpoint);
