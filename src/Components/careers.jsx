
import '../style/home.css';
import { useNavigate } from "react-router";





import Example from "./navbar.jsx"


function App() {





    const navigate = useNavigate()
    return (


        <div className='main' >




            <Example payload={navigate} />









            <div className="main2">




                <div className="content">One of the most important constituents of our success is great people. We are dedicated to attracting and retaining extraordinary contributors. A variety of initiatives and programs offer our associates the opportunity to grow and develop their careers, be rewarded and recognized for their efforts.

                    ICTG Canada offers an excellent benefit program to our employees, which includs medical, dental, and life insurance, a retirement plan, tuition reimbursement opportunities for continuing education and paid vacations. Full details are available from our personnel department.</div>

            </div>








        </div >


    )
}

export default App;
