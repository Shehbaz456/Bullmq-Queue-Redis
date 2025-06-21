import { Worker } from "bullmq";
import { QueueMap } from "./queue.js";
import { redisConnection } from "../connection.js";


const wait = (s) => new Promise((res)=>setTimeout(res, s*1000))


export const videoProcessingworker = new Worker(
  QueueMap["VIDEO_PROCEESSING_QUEUE"],
  async (job) => {
    console.log(`Processing Job`, job.id);
    console.log(`Transcoding Job`, { url: job.data });
    
    await wait(10);
    console.log(`Transcoding Job Done....`, { url: job.data });

    return true;
  },
  { autorun: false, connection: redisConnection }
);
