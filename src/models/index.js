import Author from "./authors/authorsModel.js";
import News from "./news/newsModel.js";

Author.hasMany(News);

News.belongsTo(Author, {
	onDelete: "CASCADE",
	foreignKey: {
		name: "author_id",
		allowNull: false,
	},
});

export { Author, News };
