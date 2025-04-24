import { cleanEnv, port, str } from "envalid";

export default cleanEnv (process.env, {
    Mongo_url: str(),
    PORT: port(),
})