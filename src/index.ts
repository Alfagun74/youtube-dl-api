import express from "express";
import youtubedl from "youtube-dl";
import helmet from "helmet";
import util from "util";
import morgan from "morgan";
import { Logger } from "tslog";

const port = process.env.SERVER_PORT || 80;
const app = express();
const log = new Logger();
app.use(helmet());
app.use(morgan("dev"));

app.get("/api/v1/info", async (req: express.Request, res: express.Response) => {
    const url = req.query.url as string;
    if (!url) {
        res.sendStatus(400);
        return;
    }
    try {
        log.info(`requested ${url}`);
        const youtubedlPromise = util.promisify(youtubedl.getInfo);
        const info = await youtubedlPromise(url);
        res.send(info);
    } catch (error) {
        log.error(`error fetching ${url}: ${error}`);
        res.sendStatus(500);
    }
});

app.listen(port, () => {
    log.info(`youtube-dl-api server started at http://localhost:${port}`);
});
