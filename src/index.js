/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./store/reducers";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const Main = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>
);

ReactDOM.render(<Main />, document.querySelector("#root"));
