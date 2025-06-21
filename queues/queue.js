import { Queue } from "bullmq";

const QueueMap = {
    VIDEO_PROCEESSING_QUEUE : 'VIDEO_PROCESSING_QUEUE',
}


export const videoProcessingQueue = new Queue(QueueMap['VIDEO_PROCEESSING_QUEUE']);
