import { appRouter } from "@/server";
import { createCallerFactory } from "@trpc/server";

const createCaller = createCallerFactory()
export const serverClient = createCaller(appRouter)
