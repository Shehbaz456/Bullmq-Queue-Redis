import { Queue } from "bullmq";
import { redisConnection } from "../connection.js";

export const QueueMap = {
  VIDEO_PROCEESSING_QUEUE: "VIDEO_PROCESSING_QUEUE",
};

export const videoProcessingQueue = new Queue(
  QueueMap["VIDEO_PROCEESSING_QUEUE"],
  { connection: redisConnection }
);
