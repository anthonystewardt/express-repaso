import express from "express";
import morgan from "morgan";
import cors from "cors";


class ServerBootstrap {
  public app: express.Application = express();
  private port: number = 3000;

  constructor() {
    this.middleware();
    this.listen();
  }

  middleware() {
    this.app.use(express.json());
    this.app.use(morgan("dev"));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
  }


  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }
}
new ServerBootstrap();