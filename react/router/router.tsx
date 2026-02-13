import { createContext } from "react";
import type { ReactNode } from "react";
import type { ReactRouterContextType, Router } from "./types";
import NotFounded from "./NotFounded";
const routerContext = createContext<ReactRouterContextType | null>(null);

export function RouterProvider({
  router,
  children,
}: {
  router: Router[];
  children: ReactNode;
}) {
  let { pathname } = location;
  pathname = pathname === "/" ? "" : pathname;
  const notFound: Router = {
    element: <NotFounded />,
    path: "404",
  };

  let renderRoute = router.find(({ path }) => path === pathname);
  if (!renderRoute) {
    renderRoute = notFound;
  }
  return (
    <routerContext.Provider value={{ router }}>
      {children}
      {renderRoute?.element}
    </routerContext.Provider>
  );
}
