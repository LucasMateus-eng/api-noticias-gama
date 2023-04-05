import { Sequelize } from "sequelize";
import db from "../../db/db.js";

const Author = db.define("author", {
	id: {
		type: Sequelize.INTEGER.UNSIGNED,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	name: {
		type: Sequelize.STRING(200),
		allowNull: false,
	},
	bio: {
		type: Sequelize.STRING,
	},
	independent: {
		type: Sequelize.BOOLEAN,
	},
});

export default Author;
