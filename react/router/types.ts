import type { ReactElement } from "react";

export type Router = {
  element: ReactElement;
  path: string;
};

export type ReactRouterContextType = {
  router: Router[];
};
