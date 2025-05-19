import express from 'express';
import { Queue, Worker } from 'bullmq';
import IORedis from 'ioredis';





// Redis connection
const connection = new IORedis({ maxRetriesPerRequest: null });
// const connection = new Redis(process.env.REDIS_URL);

// BullMQ Queue
const worker = new Worker(
  'foo',
  async job => {
    // Will print { foo: 'bar'} for the first job
    // and { qux: 'baz' } for the second.
    console.log(job.data);
  },
  { connection },
);
// const myQueue = new Queue('myQueue', { connection });

// Express middleware
app.use(express.json());

// API endpoint to start a session
app.post('/api/sessions/start', async (req, res) => {
  const { input } = req.body;
  const job = await myQueue.add('startSession', { input });
  res.status(200).json({ message: 'Session started', jobId: job.id });
});

// Worker to process jobs
const worker = new Worker('myQueue', async job => {
  console.log(`Processing job ${job.id} with input: ${job.data.input}`);
  // Simulate Gemini, ChatGPT, Copilot processing
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log(`Job ${job.id} completed`);
}, { connection });

worker.on('completed', job => {
  console.log(`Job ${job.id} has been completed`);
});

worker.on('failed', (job, err) => {
  console.error(`Job ${job.id} has failed with error: ${err.message}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
