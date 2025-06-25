import { WebSocket } from "ws";

export function handleRoom(socket : WebSocket, msg : any) {

    const { roomId, user } = msg.payload

    if(msg.type === 'join_room') {

    }

}