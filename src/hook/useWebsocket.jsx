import {useContext} from "react";
import { WebsocketContext } from "../contexts/websocket/websocketContext";

export const useWebsocket = () => {
    const { websocket, addToken} = useContext(WebsocketContext);

    return {websocket, addToken};
}