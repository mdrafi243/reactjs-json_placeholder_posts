import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import PostSearchPage from "./components/postSearchPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import * as serviceWorker from "./serviceWorker";
import Post from "./components/post";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <App>
          <Switch>
            <Route exact path="/" component={PostSearchPage} />
            <Route exact path="/post/view/:id" component={Post} />
            <Route
              render={() => {
                return (
                  <span>
                    {" "}
                    <h1>NOT FOUND </h1>{" "}
                    <h2>The requested Page does not exist</h2>
                  </span>
                );
              }}
            />
          </Switch>
        </App>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
