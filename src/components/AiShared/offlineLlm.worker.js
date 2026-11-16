// Офлайн-ШІ працює в окремому потоці, щоб сайт не підвисав під час генерації.
import { WebWorkerMLCEngineHandler } from "@mlc-ai/web-llm";

const handler = new WebWorkerMLCEngineHandler();
self.onmessage = (msg) => handler.onmessage(msg);
