import express from "express";
import routes from "./routes.js";
import db from "./db/db.js";

const app = express();

app.use(express.json());
app.use(routes);

try {
	await db.sync({ alter: true });
	console.log("A conexão com o banco de dados foi bem sucedida!");

	app.listen(3333, () => {
		console.log("Servidor iniciado na porta 3333");
	});
} catch (error) {
	console.log("Não foi possível se conectar com o banco de dados:", error);
	process.exit(1);
}
