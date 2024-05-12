import { appRouter } from "@/server";
import { httpBatchLink } from "@trpc/client";
import { createCallerFactory } from "@trpc/server";

const createCaller = createCallerFactory()
export const serverClient = createCaller(appRouter)
