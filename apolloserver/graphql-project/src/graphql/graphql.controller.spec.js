"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const graphql_controller_1 = require("./graphql.controller");
describe('GraphqlController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [graphql_controller_1.GraphqlController],
        }).compile();
        controller = module.get(graphql_controller_1.GraphqlController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
