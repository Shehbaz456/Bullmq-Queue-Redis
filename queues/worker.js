import { Worker } from 'bullmq';
import { QueueMap } from './queue.js';
import { redisConnection } from '../connection.js';

export const videoProcessingworker = new Worker(QueueMap["VIDEO_PROCEESSING_QUEUE"],
    async (job) => {
        console.log(`Processing Job`,job.id);
        console.log(`Transcoding Job`,{url:job.data});

        return true;
    },
    { autorun:false,connection:redisConnection }
);
