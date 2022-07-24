
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Home from "./home.jsx"
import About from "./about.jsx"


const App = () => {
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    
                </Routes>
            </Router>
        </div>
    )


}


export default App