import "./AboutUs.css";
import React from "react";
import { Button } from '@react-email/button';

export default function template() {
  return (
    <div className = "AboutUs">
        <header className="auTitleContainer">
            <div className="auTitleText">
              <h1 className="auTitleTextFontSize1">
                  <strong><em>Our</em></strong>
              </h1>
              <h1 className="auTitleTextFontSize2">
                  <strong>STORY</strong>
              </h1>
            </div>
        </header>
        <div className="auContentContainer">
          <div className="auContentText">
            <h2 className="auContentTextFont1">
              Empowering memebers through inspiration and competition
            </h2>
          
            <hr style={{marginTop:"-0.5%"}}/>
          
            <p className = "auContentTextFont2">
              Founded in 2013, the Polytechnic University of Puerto Rico's (PUPR) American Society of Civil Engineers (ASCE) Student Chapter
              is a branch of the American Society of Civil Engineers (ASCE). We believe in the power of new experiences to
              awaken our senses, ignite our passions, and expand our horizons. Our goal is to create an enviroment where our
              members can grow, learn, and succeed in a culture of support, collaboration and sound competition. We also believe
              that by pushing ourselves beyond our comfort zone, we can unlock our true potential and achieve greatness.
            </p>
            <p className = "auContentTextFont2">
              Furthermore, our community is built on a foundation of love, respect, and empathy, where members can feel safe to
              themselves, express their ideas, and connect with like-minded individuals. As such, we are passionate about helping
              our members discover their purpose and path to attainment.
            </p>
          
            <h2 className="auContentTextFont1">
              Our Vision
            </h2>
          
            <hr style={{marginTop:"-0.5%"}}/>
          
            <p className = "auContentTextFont2">
              At the Polytechnic University of Puerto Rico's (PUPR) American Society of Civil Engineers (ASCE) Student Chapter, we
              strive to guide our members towards a brighter future by curating meaningful opportunities that would provide them with
              the necesary tools to prepare them better for the real world.
            </p>
          
            <div className="auContentImagesBox">
              <div className="auContentImagesRow">
                <div className="auContentImagesColumn">
                  <div className ="auContentImageBox auContentImageTextV2">
                  <h2 className = "auContentTextFont1" style={{marginTop: "-20px"}}>
                      PUPR ASCE
                    </h2>
                    <p className="auContentTextFont2">
                      As one of the student chapters of the American Society of Civil Engineers (ASCE), we have participated in various
                      professional events and competitions. By being part of the organization, our memebers are able to gain insight and
                      proficiency in the necesary skills of the civil engineering field, such as: surveying, developing handmade and
                      computer generated projects' blueprint solutions, managing budgets and other project resources or contraints; as well as
                      working on-site under all weather conditions, with the support of both professional events and student competitions. 
                    </p>
                  </div>
                  <div className="auContentImageBox">
                    <img src={require("./img/AU_P1.jpg")} alt="Test"/>
                    <p className="auContentImageTextV1">Concrete Bridge Team (2022)</p>
                  </div>
                  <div className ="auContentImageBox auContentImageTextV4">
                    <h2 className = "auContentTextFont1" style={{marginTop: "-20px"}}>
                      ASCE Events
                    </h2>
                    <p className="auContentTextFont2">
                      As part of the professional events the organization takes part in, our mamembers are able to participate in:
                    </p>
                    <ul>
                      <li className="auContentTextFont2">Educational Seminars and Webcasts</li>
                      <li className="auContentTextFont2">Professional Conferences</li>
                      <li className="auContentTextFont2">Sponsorships</li>
                      <li className="auContentTextFont2">Engagement Opportunities</li>
                    </ul>
                    <p className="auContentTextFont2" style={{marginBottom: "-10px"}}>
                      For further information regarding competitions and events, please follow this <a href="/Competitions">URL link</a>.
                    </p>
                  </div>
                </div>
                <div className="auContentImagesColumn">
                  <div className="auContentImageBox">
                    <img src={require("./img/AU_P3.jpg")} alt="Test"/>
                    <p className="auContentImageTextV1">ASCE Competitions at UNF (2023)</p>
                  </div>
                  <div className ="auContentImageBox auContentImageTextV3">
                    <h2 className = "auContentTextFont1" style={{textAlign: "left", marginTop: "-20px"}}>
                      ASCE Competitions
                    </h2>
                    <p className="auContentTextFont2">
                      With ASCE Competions, memebers of our student chapter organization are able to identify areas of interest related to
                      the civil engineering profession. Examples of the competitions that our members participate in, include:  
                    </p>
                    <ul>
                      <li className="auContentTextFont2">Concrete Canoe</li>
                      <li className="auContentTextFont2">Steel Bridge</li>
                      <li className="auContentTextFont2">Sustainable Solutions</li>
                      <li className="auContentTextFont2">Sonstruction Institute</li>
                      <li className="auContentTextFont2" style={{marginBottom: "-40px"}}>Surveying</li>
                    </ul>
                  </div>
                  <div className="auContentImageBox">
                    <img src={require("./img/AU_P5.jpg")} alt="Test"/>
                    <p className="auContentImageTextV1"></p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="auContentTextFont1">
              Leading the Way in Civil Engineering - The ASCE
            </h2>
            
            <hr style={{marginTop:"-0.5%"}}/>
          
            <p className = "auContentTextFont2">
              The American Society of Civil Engineers (ASCE), founded in Novemeber 5, 1852, is an engineering organization
              created to represent members of the civil engineering profession around the world. Headquartered in Reston, Virginia,
              it is the oldest national engineering society in the United States. 
            </p>
            <p className = "auContentTextFont2">
              The ASCE advocates to the advancements of the sciences related with civil engineering; as well as
              to those associated with humanitarian aid. It acts as the forefront of a profession that plans, designs and implements
              societies' built infrastructure while protecting the natural enviroment. As such, it currently represents more than 150,000
              members in 177 countries through various sections, branches, groups, student chapters, younger member groups and institues.
              Moreover, the ASCE supports each of its memebers by:
            </p>
            <ul>
              <li className="auContentTextFont2" >Advancing civil engineering technology,</li>
              <li className="auContentTextFont2" >Providing the tools for lifelong learning and career growth,</li>
              <li className="auContentTextFont2" >Developing and supporting civil engineering leaders, and</li>
              <li className="auContentTextFont2" >Advocating for the suppervision of both the infrastructure and the enviroment.</li>
            </ul>
            <p className="auContentTextFont2">
              For further information related with the American Society of Civil Engineers (ASCE), pleae follow the following <a href="https://www.asce.org/">link</a>.
            </p>
          </div>
        </div>
        <h2 className = "auContentTextFont1" style={{textAlign: "center"}}>
              Meet Our Team!
            </h2>
            <div id="row">
                <div id="card">
                  <img src={require("./img/MariaRosado.jpg")} alt="CP" />
                  <div className="container">
                    <h2>Maria Rosado</h2>
                    <p className="title">Chapter President</p>
                    <p>Phone: 787-220-375#</p>
                    <p>Email: rosado_105467@students.pupr.edu</p>
                    <p><Button className="button" href="mailto:rosado_105467@students.pupr.edu">Send Email</Button></p>
                  </div>
                </div>
                <div id="card">
                  <img src={require("./img/AU_P7.jpg")} alt="CVP" />
                  <div id="container">
                    <h2>Leonardo Perez </h2>
                    <p className="title">Chapter Vice President</p>
                    <p>Phone: 787-360-8361</p>
                    <p>Email: perez_121465@students.pupr.edu</p>
                    <p><Button className="button" href="mailto:perez_121465@students.pupr.edu">Send Email</Button></p>
                  </div>
                </div>
                <div id="card">
                  <img src={require("./img/GonzaloValentin.jpg")} alt="CS" />
                  <div id="container">
                    <h2>Gonzalo Valentin</h2>
                    <p className="title">Chapter Secretary</p>
                    <p>Phone: 787-552-5508</p>
                    <p>Email: valentin_120106@students.pupr.edu</p>
                    <p><Button className="button" href="mailto:valentin_120106@students.pupr.edu ">Send Email</Button></p>
                  </div>
                </div>
                <div id="card">
                  <img src={require("./img/KarianysRodriguez.jpg")} alt="CTS" />
                  <div id="container">
                    <h2>Kariannys Rodriguez</h2>
                    <p className="title">Chapter Treasurer Supervisor</p>
                    <p>Phone: 787-360-8361</p>
                    <p>Email: rodriguez_104373@students.pupr.edu</p>
                    <p><Button className="button" href="mailto:rodriguez_104373@students.pupr.edu">Send Email</Button></p>
                  </div>
                </div>
                <div id="card">
                  <img src={require("./img/AU_P8.jpg")} alt="CT1" />
                  <div id="container">
                    <h2>Elian Santana</h2>
                    <p className="title">Chapter Treasurer</p>
                    <p>Phone: 939-332-8808</p>
                    <p>Email: santana_116552@students.pupr.edu</p>
                    <p><Button className="button" href="mailto:santana_116552@students.pupr.edu">Send Email</Button></p>
                  </div>
                </div>
                <div id="card">
                  <img src={require("./img/JoseYamil.jpg")} alt="CT2" />
                  <div id="container">
                    <h2>Jose Yamil Serrano</h2>
                    <p className="title">Chapter Treasurer</p>
                    <p>Phone: 787-217-8361</p>
                    <p>Email: serrano_127256@students.pupr.edu</p>
                    <p><Button className="button" href="mailto:serrano_127256@students.pupr.edu">Send Email</Button></p>
                  </div>
                </div>
                <div id="card">
                  <img src={require("./img/LuisRodriguez.jpg")} alt="CSP" />
                  <div id="container">
                    <h2>Luis Rodriguez</h2>
                    <p className="title">Chapter Spokeperson</p>
                    <p>Phone: 787-243-5232</p>
                    <p>Email: rodriguez_127354@students.pupr.edu</p>
                    <p><Button className="button" href="mailto:rodriguez_127354@students.pupr.edu">Send Email</Button></p>
                  </div>
                </div>
                <div id="card">
                  <img src={require("./img/GingerRossy.jpg")} alt="Jane" />
                  <div id="container">
                    <h2>Prof. Ginger Rossy</h2>
                    <p className="title">Chapter Mentor</p>
                    <p>Phone: 787-669-5618</p>
                    <p>Email: grossy@.pupr.edu</p>
                    <p><Button className="button" href="mailto:NULL">Send Email</Button></p>
                  </div>
                </div>
            </div>
    </div>
  );
};