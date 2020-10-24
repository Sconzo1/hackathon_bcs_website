import React, {Fragment, lazy, Suspense} from "react";
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import * as serviceWorker from "./serviceWorker";
import Pace from "./shared/components/Pace";

const Cabinet = lazy(() => import("./cabinet/components/Main"));

const LandingPage = lazy(() => import("./landing/components/Main"));

function App() {
    return (
        <BrowserRouter>
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                <GlobalStyles/>
                <Pace color={theme.palette.primary.main}/>
                <Suspense fallback={<Fragment/>}>
                    <Switch>
                        <Route path="/c">
                            <Cabinet/>
                        </Route>
                        <Route>
                            <LandingPage/>
                        </Route>
                    </Switch>
                </Suspense>
            </MuiThemeProvider>
        </BrowserRouter>
    );
}

serviceWorker.register();

export default App;
