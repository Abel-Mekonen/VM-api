import { Express } from "express";
import * as bodyParser from "body-parser";
import { testRoute } from "@routes/test.route";
import { ErrorHandler } from "@middlewares/error.handler.middleware";
import * as cors from "cors";

export class ExpressConfig {
  private app: Express;
  private port = Number(process.env.PORT) || 3000;

  constructor(express: Express) {
    this.app = express;
  }

  public async init(): Promise<void> {
    try {
      this.app.use(bodyParser.json());
      this.app.use(bodyParser.urlencoded({ extended: false }));
      this.app.use(cors());
      this.app.use(testRoute);
      this.app.use(ErrorHandler);
      this.app.listen(this.port, () => {
        console.log("⚡️[bootup]: Server running on port 3000")
      });
    } catch (error) {
      console.error(error);
    }
  }
}
