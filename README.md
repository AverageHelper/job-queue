# job-queue

A simple queue for processing asynchronous tasks sequentially.

## Dependencies

This project requires [NodeJS](https://nodejs.org/) (version 16 or later).
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

This project lives primarily at [git.average.name](https://git.average.name/AverageHelper/job-queue). A read-only mirror also exists on [GitHub](https://github.com/AverageHelper/job-queue). Issues or pull requests should be filed at [git.average.name](https://git.average.name/AverageHelper/job-queue). You may sign in or create an account directly, or use one of several OAuth 2.0 providers.

## Authors

- [**AverageHelper**](https://git.average.name/AverageHelper) - _Initial work_

## License

[MIT](LICENSE)
