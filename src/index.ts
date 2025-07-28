import { buildServer } from './server';
import dotenv from 'dotenv';

dotenv.config();

const app = buildServer();

app.listen({ port: Number(process.env.PORT || 3000) }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  console.log(`🚀 Server listening at ${address}`);
});
