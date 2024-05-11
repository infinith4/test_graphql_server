"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    overwrite: true,
    schema: "http://localhost:3001/api/graphql",
    documents: "src/graphql/**/*.graphql",
    generates: {
        "src/graphql/generated.ts": {
            plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
        },
    },
};
exports.default = config;
