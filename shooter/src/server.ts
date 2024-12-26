import { createGameRunner, onClose, onMessage } from "./game";
import * as consts from "./game/consts";
import { getConfig } from "./cli";
import { getLogger, initLogger } from "./logger";
import { getWriter } from "./game/data-writer";

import * as uws from "uWebSockets.js"

const args = getConfig();
consts.initFromEnv();
consts.initFromCLI(args);
initLogger(args);
getWriter(args);

const runner = createGameRunner();

getLogger().info(args, "starting server");

uws.App().ws('/*', {

})

/* One app per thread; spawn as many as you have CPU-cores and let uWS share the listening port */
uws.App().ws('/*', {
    close: (ws) => {
        onClose(ws)
    },
    open: (ws) => {
        runner(ws)
    },
    message: (ws, message) => {
        onMessage(ws, Buffer.from(message).toString())
    }

}).listen(args.port, (listenSocket) => {
    if (listenSocket) {
        getLogger().info("listening on", args.port)
        console.log("listenig on", args.port)
    } else {
        getLogger().error("cannot start server")
        console.log("cannot start server")
    }
})

