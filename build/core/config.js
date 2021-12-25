"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get = (name, defaultValue = null, cast = (v) => v) => {
    const val = process.env[name];
    if (!val)
        return defaultValue;
    return cast(val);
};
const config = {
    env: get('EXO_ENV'),
    logLevel: get('LOG_LEVEL')
};
exports.default = config;
