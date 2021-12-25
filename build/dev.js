"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const local_1 = require("@exobase/local");
const run = () => (0, local_1.start)({
    port: '7700',
    functions: (0, local_1.getFunctionMap)(process.cwd()).map((f) => ({
        ...f,
        func: require(f.paths.import).default
    }))
}, (port) => {
    console.log(`API running at http://localhost:${port}`);
});
run().catch((err) => {
    console.error(err);
    process.exit(1);
});
