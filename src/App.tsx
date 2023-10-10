import { useState } from 'react'

import { createBrowserHistory } from "history";
import {
	BrowserRouter as Router,
	Route,
	useLocation,
	Routes,
	useParams,
} from "react-router-dom";
import {
	Landingpage, ContentPlayer
} from "./components/pages/index";
export const history = createBrowserHistory();

function AppWrapper() {
	return (
		<Router history={history}>
				<App />
        
		</Router>
	);
}
function App() {

	return (
		
			<div className="App">
       
				<Routes>
          <Route path="/content" element={<ContentPlayer/>} />
          <Route path="/" element={<Landingpage/>} />
				</Routes>
			</div>
		
	);
}

export default AppWrapper;
