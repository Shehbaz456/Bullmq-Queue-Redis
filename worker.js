import { videoProcessingworker } from "./queues/worker.js";


async function init() {
    await videoProcessingworker.run();
}

init();