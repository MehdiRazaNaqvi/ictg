
import '../style/home.css';
import { useNavigate } from "react-router";





import Example from "./navbar.jsx"


function App() {





    const navigate = useNavigate()
    return (


        <div className='main' >




            <Example payload={navigate} />









            <div className="main2">




                <div className="content">We are a consulting and human development services provider whose purpose is to develop, produce, and promote courses in professional training, personal development, empowerment, educational programs, and related product lines. We strive to support organizations and individuals by making their visions, dreams, and goals become a reality. We can help you facilitate organizational change, empower, enliven and enlighten individuals and organizations, align employees towards the same goal and train individuals to become professional coaches.</div>

            </div>








        </div >


    )
}

export default App;
