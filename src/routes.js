import express from "express";

const routes = express.Router();

routes.get("/health", (request, response) => {
	response.status(200).json({ message: "API em funcionamento" });
});

export default routes;
