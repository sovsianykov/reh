import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/styles';
import theme from "./constants/theme";
import {Provider} from "react-redux";
import {store} from "./redux/store";



ReactDOM.render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Provider>,
    document.getElementById("root")
);


