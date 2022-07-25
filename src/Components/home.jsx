import Logo from "../style/logo.png"
import '../style/home.css';
import '../style/tablet.css';
import { useNavigate } from "react-router";



import Undraw1 from "../style/undraw1.svg"
import About from "../style/about.svg"
import News from "../style/news.svg"
import Personal from "../style/personal.svg"
import Coach from "../style/coach.svg"
import Contact from "../style/contact.svg"


import Example from "./navbar.jsx"


function App() {





  const navigate = useNavigate()
  return (


    <div className='main' >
















      <Example payload={navigate} />









      <div className="main3 one" id="home">



        <div className="part ani">

          <h4>
            Welcome to <span className="orange" >  ICTG Canada </span>! We hope you will enjoy browsing through our website, and find a lot of useful information here. We pay great attention to the quality of our consulting and training services. You can find detailed information about our services online or contact our customer service team for help.


            Stay up to date with the latest news on our website and find out about all our special offers.
          </h4>
        </div>



        <img src={Undraw1} className="part img" />



      </div>









      <div className="main2 two" >



        <div className="card">

          <img src="https://previews.123rf.com/images/chagin/chagin1305/chagin130500491/19730000-group-of-happy-business-people-in-a-meeting-at-office.jpg" className="card_img" />
          <p className="card_text" >Marquee selectus </p>

        </div>

        <div className="card">

          <img src="http://t0.gstatic.com/images?q=tbn:ANd9GcSRvIdU7FXyuwyGvjmtefnSEu9dqitGI-iNJ-WRJIv6TM5WD25f" className="card_img" />
          <p className="card_text" >Sic tempus fugit </p>

        </div>

        <div className="card">

          <img src="https://borgenproject.org/wp-content/uploads/investing-in-developing-countries.jpg" className="card_img" />
          <p className="card_text" >Marquee selectus </p>

        </div>

        <div className="card">

          <img src="https://borgenproject.org/wp-content/uploads/investing-in-developing-countries.jpg" className="card_img" />
          <p className="card_text" >Marquee selectus </p>

        </div>





      </div>





      <div className="main3 three" id="services">

        <img src="https://cdn-icons-png.flaticon.com/512/4796/4796751.png" className="part img round" />


        <div className="part">

          <h4>
            We offer Consulting & Training Services to improve your Employ-ability. Our Professional Training Connect the People & Jobs
          </h4>
        </div>

      </div>







      <div className="main3 about four" id="about">




        <div className="part">

          <h4>
            We are a consulting and human development services provider whose purpose is to develop, produce, and promote courses in professional training, personal development, empowerment, educational programs, and related product lines. We strive to support organizations and individuals by making their visions, dreams, and goals become a reality. We can help you facilitate organizational change, empower, enliven and enlighten individuals and organizations, align employees towards the same goal and train individuals to become professional coaches.
          </h4>
        </div>

        <img src={About} className="part img" />


      </div>





      <div className="main4 five" >




        <div className="part vert" id="team">

          <h4>
            Our Team

          </h4>

          <p>
            Meet our team of professional coaches.
            <br /> <br />
            John Doe
            <br />
            John has worked with executives, individuals, teams, and companies to achieve sustained, accountable success for more than twenty years.
            <br /> <br />
            Jane Smith
            <br />
            Jane is a certified coach with a special affinity for mentoring high technology professionals and leaders who want more from their careers.
          </p>
        </div>




        <div className="part vert" id="careers">

          <h4>

            Careers

          </h4>

          <p>
            One of the most important constituents of our success is great people. We are dedicated to attracting and retaining extraordinary contributors. A variety of initiatives and programs offer our associates the opportunity to grow and develop their careers, be rewarded and recognized for their efforts.

            ICTG Canada offers an excellent benefit program to our employees, which includs medical, dental, and life insurance, a retirement plan, tuition reimbursement opportunities for continuing education and paid vacations. Full details are available from our personnel department.
          </p>
        </div>



      </div>





      <div className="main3 six" id="news">


        <img src={News} className="part img" />



        <div className="part">

          <h6 className="discount">
            New Coach Training Program <br />
            <span className="grey" >Posted on 10 July 2011</span>
          </h6>
          <p className="discount">


            We are very happy to announce a new program that is starting this month. We have always provided our experienced coaches for your corporate and personal training. If you want to find out how to support others with the challenges they encounter in life, we can help you learn how to do it.
          </p>


          <h6 className="discount">
            Great discounts <br />
            <span className="grey" >Posted on 10 July 2011</span>
          </h6>
          <p className="discount" >

            We offer bulk discounts - the more courses you sign up for, the more you can save! Please check out our bulk discount as follows: <br />

            <span> 2-3 courses: 5% off course price. </span>
            <span> 4 or more courses: 10% off course price.</span>
          </p>


        </div>



      </div>




      <div className="main3 seven" id="corporate_training">




        <div className="part">

          <h4>Corporate Training</h4>
          <p>
            Whether you have a problem to solve, or want to revise policies and procedures, create new materials and tools, a better work environment, or a specific training program, contact us and we will begin working together to achieve your goal. </p>
        </div>

        <img src={About} className="part img" />


      </div>






      <div className="main4 eight" >




        <div className="part vert" id="organization">

          <h4>
            Organization and team assesment

          </h4>

          <p>
            Organizational and team assessments are an in-depth look at your organization or team via individual interviews. You help create the questions we ask in a confidential interview. We then survey your participants regarding critical organizational and leadership issues. A summary report delineates strengths, weaknesses and recommendations. The organizational assessment helps by getting a clear representation of existing strengths and development areas, developing trust regarding the program from participants and establishing the accurate, current reality to customize the training and measure its success.
          </p>
        </div>






        <div className="part vert" id="conflict">

          <h4>

            Conflict Resolution

          </h4>

          <p>
            Internal team conflicts are making you less productive and are degrading customer relations and profitability. Using our proprietary conflict resolution techniques, we foster executive team building by cultivating more relaxed, confident and effective leaders, an increasingly ordered, responsive and ethical management style, and better relations between managers, employees and customers.  </p>
        </div>



      </div>






      <div className="main3 nine" id="personal_training">


        <img src={Personal} className="part img" />

        <div className="part">

          <h4>Personal Training</h4>
          <p>
            When you are ready to grow, to take responsibility for your circumstances, to fulfil your life's mission, then you are ready for the personal development program.</p>
        </div>




      </div>






      <div className="main4 ten" >




        <div className="part vert" id="self">

          <h4>
            Self Managment

          </h4>

          <p>
            In the self management training, we will work on making choices about how you spend your time and energy, putting yourself in the center of your life and enjoying your life, living your life according to what seems right for you rather than what anyone else thinks you should do, and feeling revitalized and excited rather than drained and discouraged.
          </p>
        </div>






        <div className="part vert" id="inner">

          <h4>
            Inner Growth Training
          </h4>

          <p>
            The inner growth training is designed as a process that is intended to help you master your inner self, improve inner strength and inner motivation. Each participant has objectives which will constitute their individual experience. The inner growth training is your opportunity to define your vision and set clear, measurable goals, address any obstacles, heal and complete past incidents, and launch the rest of your life. </p>
        </div>



      </div>







      <div className="main3 eleven" id="coach">



        <div className="part">

          <h4>Coach Training</h4>
          <p>
            Some people are natural helpers, and people gravitate to them to discuss their challenges and concerns. If you are one of those people, if you always want to improve your interpersonal skills to be as helpful as possible to others, then you have the potential of becoming a coach. A coach is a safe, non-judgmental, empathetic professional who helps his clients sort out their options and determine their best course of action in challenging and complicated circumstances. Come to us, become a coach and support others in the challenges they encounter in their lives.</p>
        </div>


        <img src={Coach} className="part img" />


      </div>






      <div className="main3 twelve" id="quote">


        <img src={Contact} className="part img" />


        <div className="part contact ">

          <h4>Get a quote</h4>
          <p>
            We provide outstanding rates and unsurpassed customer service for any type of consulting services and training you need. To get a quote, please call our customer service team. They will advise you on the best package for your needs and will provide individual prices.

            You can fill in the form below and we will contact you shortly with the free quote and best solution offer:</p>

          <input type="text" className="form-control" placeholder="Your Name" />
          <input type="text" className="form-control" placeholder="Your Contact no" />
          <input type="text" className="form-control" placeholder="Your Email" />
          <textarea cols="0" rows="1" className="form-control" placeholder="Consulting service request description" ></textarea>

          <button className="btn btn-outline-warning">Submit</button>
        </div>




      </div>








      <div className="main3 thirteen" id="contact">



        <div className="part">

          <h4>Contact Us</h4>
          <p>
            Contact us for more information about our products and services. Our experienced customer service team can help you find just what you need and can advise you on the details. Our customer service team is available Monday to Friday from 10 am to 7 pm. For security and training purposes, telephone calls to and from the customer service team may be recorded and monitored.</p>
          <span className="contact_list" >


            <span className="line" > <img referrerPolicy="no-referrer" className="icons" src="https://img.icons8.com/ios/50/000000/marker--v1.png" /> <p>3130 Bentley Drive, Mississauga, Canada</p>
            </span>

            <span className="line">

              <img src="https://img.icons8.com/ios/50/000000/phone.png" className="icons" /> <p>416-473-5786</p>
            </span>

            <span className="line" >

              <img className="icons" src="https://img.icons8.com/ios/50/000000/new-post.png" />
              <p>nasirsheikh@yahoo.com</p>
            </span>
          </span>


        </div>


        <iframe className="part img" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.2098389683915!2d-79.74276768499715!3d43.560510466438316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b6a007ae15555%3A0x1f40c08884ddd800!2sICTG%20Canada!5e0!3m2!1sen!2s!4v1658745049889!5m2!1sen!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


      </div>










    </div >


  )
}

export default App;
