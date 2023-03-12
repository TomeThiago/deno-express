// @deno-types="npm:@types/express@4"
import express, { Request, Response, NextFunction } from 'npm:express';

const app = express();
const port: number = Number(Deno.env.get('APP_PORT')) || 3333;

const logger = function (request: Request, response: Response, next: NextFunction) {
  console.info(`${request.method} request to "${request.url}" by ${request.hostname}`)
  next()
}

app.use(logger)

app.get('/', (request: Request, response: Response) => {
  return response.json({ hello: 'world' });
})

app.listen(port, () => console.log(`listening on port ${port}`));