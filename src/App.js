import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import Notes from "./pages/Notes";
import "./App.css";
import Layout from "./components/Layout";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// const newTheme = createTheme({
// 	palette: {
// 		primary: {
// 			main: "#fefefe",
// 		},
// 		secondary: {
// 			main: "#6c6c6c",
// 		},
// 	},
// });
const App = () => {
	return (
		// <ThemeProvider theme={newTheme}>
		<Layout>
			<Routes>
				<Route path="/" element={<Notes />} />
				<Route path="create" element={<Create />} />
			</Routes>
		</Layout>
		// </ThemeProvider>
	);
};

export default App;
