"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
function up(utils) {
    return __awaiter(this, void 0, void 0, function* () {
        {
            yield utils.queryInterface.renameColumn('videoFile', 'extname', 'extname_old');
        }
        {
            const data = {
                type: Sequelize.STRING,
                defaultValue: null,
                allowNull: true
            };
            yield utils.queryInterface.addColumn('videoFile', 'extname', data);
        }
        {
            const query = 'UPDATE "videoFile" SET "extname" = "extname_old"::text';
            yield utils.sequelize.query(query);
        }
        {
            const data = {
                type: Sequelize.STRING,
                defaultValue: null,
                allowNull: false
            };
            yield utils.queryInterface.changeColumn('videoFile', 'extname', data);
        }
        {
            yield utils.queryInterface.removeColumn('videoFile', 'extname_old');
        }
    });
}
exports.up = up;
function down(options) {
    throw new Error('Not implemented.');
}
exports.down = down;
