import { setupWorker } from "msw";
import { handlers } from "./handlers";

//これにより、指定された要求ハンドラーを使用してServiceWorkerが構成されます。
export const worker = setupWorker(...handlers);
