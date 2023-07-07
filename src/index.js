import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./api";
import { AuthProvider } from "./contexts/AuthContext";
import { Provider } from "react-redux";
import store from "./redux/store";

import { ReactQueryDevtools } from "react-query/devtools";

ReactDOM.render(
	<>
		<React.StrictMode>
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<AuthProvider>
						<Provider store={store}>
							<App />
						</Provider>
					</AuthProvider>
					<ReactQueryDevtools initialIsOpen={false} />
				</QueryClientProvider>
			</BrowserRouter>
		</React.StrictMode>
	</>,
	document.getElementById("root")
);
