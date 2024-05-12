import { procedure, router } from './trpc';

export const appRouter = router({
  hello: procedure.query((opts) => {
      return 'Hello World!';
    }),
});

export type AppRouter = typeof appRouter;
