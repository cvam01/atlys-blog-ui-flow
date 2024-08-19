import Loader from "@/components/loader";
import { ComponentType, ReactElement, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export interface RouteType<Props = object> {
  path: string;
  Element: ComponentType<Props>;
  children?: RouteType[];
  props?: object;
  isProtected?: boolean;
  isPublic?: boolean;
}

function renderRoutes(routes: RouteType[]): ReactElement[] {
  return routes.map((route) => {
    if (!route.children?.length) {
      const Element = (
        <Suspense fallback={<Loader />}>
          <route.Element {...route.props} />
        </Suspense>
      );
      if (route.isProtected) {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<PrivateRoute element={Element} />}
          />
        );
      } else if (route.isPublic) {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<PublicRoute element={Element} />}
          />
        );
      } else {
        return <Route key={route.path} path={route.path} element={Element} />;
      }
    } else {
      return (
        <Route key={route.path} element={<route.Element />}>
          {renderRoutes(route.children)}
        </Route>
      );
    }
  });
}

function Router() {
  return <Routes>{renderRoutes(routes)}</Routes>;
}

export default Router;
