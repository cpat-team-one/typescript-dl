import { start } from './start';

start()
  .catch((err) => {
    console.error(`Error start the server: ${err.message}`, err);
    process.exit(-1);
  });
