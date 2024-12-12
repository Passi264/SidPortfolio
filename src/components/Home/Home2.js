// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
// import Tilt from "react-parallax-tilt";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

// function Home2() {
//   return (
//     <Container fluid className="home-about-section" id="about">
//       <Container>
//         <Row>
//           <Col md={8} className="home-about-description">
//             <h1 style={{ fontSize: "2.6em" }}>
//               LET ME <span className="purple"> INTRODUCE </span> MYSELF
//             </h1>
//             <p className="home-about-body">
//               I fell in love with programming and I have at least learnt
//               something, I think… 🤷‍♂️
//               <br />
//               <br />I am fluent in classics like
//               <i>
//                 <b className="purple"> C++, Javascript and Go. </b>
//               </i>
//               <br />
//               <br />
//               My field of Interest's are building new &nbsp;
//               <i>
//                 <b className="purple">Web Technologies and Products </b> and
//                 also in areas related to{" "}
//                 <b className="purple">
//                   Blockchain.
//                 </b>
//               </i>
//               <br />
//               <br />
//               Whenever possible, I also apply my passion for developing products
//               with <b className="purple">Node.js</b> and
//               <i>
//                 <b className="purple">
//                   {" "}
//                   Modern Javascript Library and Frameworks
//                 </b>
//               </i>
//               &nbsp; like
//               <i>
//                 <b className="purple"> React.js and Next.js</b>
//               </i>
//             </p>
//           </Col>
//           <Col md={4} className="myAvtar">
//             <Tilt>
//               <img src={myImg} className="img-fluid" alt="avatar" />
//             </Tilt>
//           </Col>
//         </Row>
//         <Row>
//           <Col md={12} className="home-about-social">
//             <h1>FIND ME ON</h1>
//             <p>
//               Feel free to <span className="purple">connect </span>with me
//             </p>
//             <ul className="home-about-social-links">
//               <li className="social-icons">
//                 <a
//                   href="https://github.com/soumyajit4419"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour  home-social-icons"
//                 >
//                   <AiFillGithub />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="https://twitter.com/Soumyajit4419"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour  home-social-icons"
//                 >
//                   <AiOutlineTwitter />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="https://www.linkedin.com/in/soumyajit4419/"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour  home-social-icons"
//                 >
//                   <FaLinkedinIn />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="https://www.instagram.com/soumyajit4419"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour home-social-icons"
//                 >
//                   <AiFillInstagram />
//                 </a>
//               </li>
//             </ul>
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// }
// export default Home2;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m Siddhant Somvanshi, a data analyst passionate about turning raw data into meaningful stories that drive impactful decisions. With expertise in <i><b className="purple">SQL, Python, and Power BI</b></i>, I enjoy creating dashboards, uncovering insights, and solving real-world challenges. I believe that good analysis not only answers questions but also sparks new ideas and opportunities.   📊      
              <br />
              <br />
              My core interests lie in <i><b className="purple">data visualization, business intelligence, and healthcare analytics.</b></i> I enjoy experimenting with tools like <i><b className="purple">Streamlit</b></i> to build interactive data applications, combining creativity with technical skills to make analytics more engaging and accessible. By transforming complex data into actionable insights, I aim to support smarter decision-making and deliver value.  
              <br />
              <br />
              Outside of work, I love analyzing financial markets, learning about emerging technologies, and exploring new places with my camera. These interests fuel my curiosity and creativity, inspiring me to approach every challenge with fresh perspectives and innovative solutions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sidd7200?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://ca.linkedin.com/in/siddhant-somvanshi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-tagline">
            <h2>
              <span className="purple">Data Analyst</span> |{" "}
              <span className="purple">Business Analyst</span> |{" "}
              <span className="purple">Learner</span>
            </h2>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
