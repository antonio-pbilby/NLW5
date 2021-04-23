import { io } from "../http";
import { ConnectionsRepository } from "../repositories/ConnectionsRepository";
import { ConnectionsService } from "../services/ConnectionsService"

io.on("connect", (socket) => {
  const connectionsService = new ConnectionsService()
  const allConnectionsWithoutAdmin = 
})