"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const minimist_1 = __importDefault(require("minimist"));
const config_1 = __importDefault(require("../core/config"));
const auth_1 = require("@exobase/auth");
const main = async (args) => {
    const token = (0, auth_1.createToken)({
        sub: args.sub,
        aud: args.aud,
        scopes: args.scopes.split(';'),
        type: 'access',
        iss: 'exo.api',
        ttl: 120000000,
        tokenSignatureSecret: config_1.default.tokenSignatureSecret
    });
    console.log(token);
};
main((0, minimist_1.default)(process.argv)).catch(err => {
    console.error(err);
    process.exit(1);
});
