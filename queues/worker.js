import { Worker } from "bullmq";
import { QueueMap, notificationQueue } from "./queue.js";
import { redisConnection } from "../connection.js";

const wait = (s) => new Promise((res) => setTimeout(res, s * 1000));

export const videoProcessingworker = new Worker(
  QueueMap["VIDEO_PROCEESSING_QUEUE"],
  async (job) => {
    console.log(`Processing Job`, job.id);
    console.log(`Transcoding Job`, { url: job.data });

    await wait(4);
    console.log(`Transcoding Job Done...........`);

    await notificationQueue.add(`notification-${job.data.videoURL}`, {
      notification: `video has been processed for ${job.data.videoURL}`,
    });

    return true;
  },
  { autorun: false, connection: redisConnection }
);

export const notificationWorker = new Worker(
  QueueMap["NOTIFICATION_QUEUE"],
  async (job) => {
    console.log(`Sending Notification: ${job.data.notification}`);
  },
  {
    connection: redisConnection,
    autorun: false,
    concurrency: 1,
    limiter: {
      max: 5,
      duration: 10 * 1000,
    },
  }
);
