
import '../style/home.css';
import { useNavigate } from "react-router";





import Example from "./navbar.jsx"


function App() {





    const navigate = useNavigate()
    return (


        <div className='main' >




            <Example payload={navigate} />









            <div className="main2">




                <div className="content">Meet our team of professional coaches   <br />
                    <br />
                    John Doe
                    <br />
                    John has worked with executives, individuals, teams, and companies to achieve sustained, accountable success for more than twenty years.
                    <br />
                    <br />
                    Jane Smith
                    <br />

                    Jane is a certified coach with a special affinity for mentoring high technology professionals and leaders who want more from their careers.

                </div>

            </div>








        </div >


    )
}

export default App;
