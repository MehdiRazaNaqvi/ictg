
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Home from "./home.jsx";

const App = () => {
    return(
        <div>
            <Router>
                <Routes>
                    <Route exact path="/ictg" element={<Home/>} />
                </Routes>
            </Router>
        </div>
    )


}


export default App