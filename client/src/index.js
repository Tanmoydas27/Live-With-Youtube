import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import Store from "./Redux/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <ConfigProvider
      theme={{
        components:{
          Button:{
            colorPrimary:'#f5f5f5',
            borderRadius:'2px'
          }
        },
        token:{
          borderRadius: "2px"
        }
      }}
    >
      <App />
    </ConfigProvider>
  </Provider>
);
