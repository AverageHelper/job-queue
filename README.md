# job-queue

A simple queue for processing asynchronous tasks sequentially.

## Dependencies

This project requires [NodeJS](https://nodejs.org/) (version 14 or later). There are no other dependencies.
To make sure you have them available on your machine,
try running the following command:

```sh
$ node -v
v16.6.2
```

## Installation

```sh
$ npm install @averagehelper/job-queue
```

## Usage

```ts
import { useJobQueue } from "@averagehelper/job-queue";

// Define your job type
interface Job {
	id: string;
	property1: string;
	property2: string;
}

async function processJob(job: Job): Promise<void> {
	// Do something with your job
}

const queue = useJobQueue<Job>("thing-queue"); // Create or retrieve a job queue
queue.process(processJob); // Add a processor function

// Handle queue event handlers
queue.on("start", () => {
	logger.debug("thing-queue has started processing jobs.");
});

queue.on("error", (error: unknown, failedJob: Job) => {
	logger.debug(`Job ${failedJob.id} failed with error`, error);
});

queue.on("finish", () => {
	logger.debug("thing-queue has finished processing all jobs.");
});

// Add jobs to process
queue.createJob({ property1, property2 });
queue.createJobs([job1, job2]);
```

## Contributing

We welcome contributions of all sorts!

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

## Built With

- [Visual Studio Code](https://code.visualstudio.com/)
- [Discord.js](https://discord.js.org/)
- Love

## Authors

- **James Robinson** ([AverageHelper](https://github.com/AverageHelper)) - _Initial work_

## License

[GNU General Public License v3.0](LICENSE)
