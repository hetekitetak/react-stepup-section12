import { VFC, memo } from "react";
import { Switch, Route } from "react-router-dom";

import { Login } from "../pages/Login";
import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "../pages/Page404";
import { HeaderLayout } from "../template/HeaderLayout";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route
        path="/home"
        render={({ match: { url } }) => (
          <Switch>
            {homeRoutes.map((route) => (
              <Route
                key={route.path}
                path={`${url}${route.path}`}
                exact={route.exact}
              >
                <HeaderLayout>{route.children}</HeaderLayout>
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});
