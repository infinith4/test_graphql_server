"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphqlController = exports.resolvers = exports.typeDefs = void 0;
const fs_1 = require("fs");
const common_1 = require("@nestjs/common");
const server_1 = require("@apollo/server");
const nest_apollo_server_1 = require("@node-libraries/nest-apollo-server");
exports.typeDefs = `
  # Return date
  scalar Date
  type Query {
    date: Date!
  }

  # Return file information
  type File {
    name: String!
    type: String!
    value: String!
  }
  scalar Upload
  type Mutation {
    upload(file: Upload!): File!
  }
`;
exports.resolvers = {
    Query: {
        date: async () => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            return new Date();
        },
    },
    Mutation: {
        upload: async (_context, { file }) => {
            return {
                name: file.originalFilename,
                type: file.mimetype,
                value: await fs_1.promises.readFile(file.filepath, { encoding: "utf8" }),
            };
        },
    },
};
let GraphqlController = (() => {
    let _classDecorators = [(0, common_1.Controller)("/graphql")];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _graphql_decorators;
    var GraphqlController = _classThis = class {
        constructor() {
            this.apolloServer = __runInitializers(this, _instanceExtraInitializers);
        }
        onModuleInit() {
            console.log("init");
            this.apolloServer = new server_1.ApolloServer({
                typeDefs: exports.typeDefs,
                resolvers: exports.resolvers,
            });
            return this.apolloServer.start();
        }
        onModuleDestroy() {
            this.apolloServer.stop();
        }
        async graphql(req, res) {
            await (0, nest_apollo_server_1.executeHTTPGraphQLRequest)({
                req,
                res,
                apolloServer: this.apolloServer,
                context: async () => ({ req: (0, nest_apollo_server_1.Raw)(req), res: (0, nest_apollo_server_1.Raw)(res) }),
                options: {
                    //Maximum upload file size set at 10 MB
                    maxFileSize: 10 * 1024 * 1024,
                },
            });
        }
    };
    __setFunctionName(_classThis, "GraphqlController");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _graphql_decorators = [(0, common_1.All)()];
        __esDecorate(_classThis, null, _graphql_decorators, { kind: "method", name: "graphql", static: false, private: false, access: { has: obj => "graphql" in obj, get: obj => obj.graphql }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        GraphqlController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GraphqlController = _classThis;
})();
exports.GraphqlController = GraphqlController;
