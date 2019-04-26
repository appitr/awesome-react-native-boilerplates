import React, { Component } from "react";
import { Provider } from "@ant-design/react-native";
import enUS from "@ant-design/react-native/es/locale-provider/en_US";
import Home from "./screens/Home";

class App extends Component {
    render() {
        return (
            <Provider locale={enUS}>
                <Home />
            </Provider>
        );
    }
}

export default App;
