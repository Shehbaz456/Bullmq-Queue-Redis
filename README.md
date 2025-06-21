# 🎯 BullMQ Queue with Redis

This project is a hands-on learning implementation of **background job processing** using [BullMQ](https://docs.bullmq.io/) and **Redis** in Node.js. It demonstrates a **video processing queue** and a **notification queue** workflow with rate-limited notification dispatch.

---

## 📂 Features

- 🚀 Video processing with simulated delay
- 🔔 Notification queue after video job completes
- ✅ Zod-based input validation
- 📊 Redis-based job queueing with BullMQ
- ⏳ Rate limiting & concurrency handling for notifications

---

## 📦 Tech Stack

- Node.js
- Express.js
- BullMQ
- Redis
- Zod (input validation)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Shehbaz456/Bullmq-Queue-Redis.git
cd Bullmq-Queue-Redis
```

## 🧵 How Queues Work

- POST /video-process receives a videoURL and enqueues a video processing job.
- The video worker simulates transcoding (waits 4 seconds), then pushes a notification job.
- The notification worker sends a message saying the video has been processed.
- Notification dispatch is rate-limited (5 notifications per 10 seconds).


## 🏃‍♂️ Running Workers

Start video processing worker:
```bash
node worker.js
```

Start notification worker:
```bash
node notification.worker.js
```

## 📬 Sample API Request
```bash
curl -X POST http://localhost:8000/video-process \
  -H "Content-Type: application/json" \
  -d '{"videoURL": "http://example.com/video.mp4"}'
```

## 📁 Project Structure

```bash
bullmq-queue-redis/
├── api.js
├── connection.js
├── queues
│   ├── queue.js
│   └── worker.js
├── worker.js
└── notification.worker.js
```

## ✅ Todo (Learning Goals)
 - Setup basic queue using BullMQ
 - Chain notification job after video job
 - Add concurrency and rate limits
 - Add persistence and monitoring via Bull Board

###🧠 Author
Shehbaz Khan
- Currently learning advanced backend concepts using queues and Redis.

### 📜 License

--- Let me know if you'd like me to also generate a `package.json`, `.gitignore`, or Docker setup for this repo!


