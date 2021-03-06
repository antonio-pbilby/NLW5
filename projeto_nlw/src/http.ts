import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";

import "./database";
import { routes } from "./routes";
//colocar só o diretório já indica
//que queremos selecionar o index.js
//daquele diretório

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
  return response.render("html/client.html");
});

app.get("/pages/admin", (request, response) => {
  return response.render("html/admin.html");
});

const http = createServer(app); //criando o protocolo http
const io = new Server(http); //criando o websocket com o protocolo

io.on("connection", (socket: Socket) => {
  console.log("Se conectou", socket.id);
});
/**
 *  GET = Buscas
 *  POST = Criação
 *  PUT = Alteração
 *  DELETE = Deletar
 *  PATCH = Alterar uma informação específica
 */
app.use(express.json());

app.use(routes);

export { http, io };
