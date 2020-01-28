import { start } from './start';

start()
  .catch((err) => {
    console.error(`Error starting the server: ${err.message}`, err);
    process.exit(-1);
  });
