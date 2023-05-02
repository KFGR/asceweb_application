import "./AboutUs.css";
import React from "react";


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
                  <div className ="auContentImageBox auContentImageTextV2">
                    <h2 className = "auContentTextFont1" style={{marginTop: "-20px"}}>
                      PUPR ASCE Events
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
                  <div className ="auContentImageBox auContentImageTextV2">
                    <h2 className = "auContentTextFont1" style={{textAlign: "right", marginTop: "-20px"}}>
                      PUPR ASCE Competitions
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

            <h2 className = "auContentTextFont1" style={{textAlign: "center"}}>
              Meet Our Team!
            </h2>
            <div className="row">
              <div className="column">
                <div className="card">
                  <img src={require("./img/AU_P1.jpg")} alt="Jane" style={{width: "100%"}}/>
                  <div className="container">
                    <h2>Jane Doe</h2>
                    <p className="title">Chapter President</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>example@example.com</p>
                    <p><button className="button">Contact</button></p>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <img src={require("./img/AU_P1.jpg")} alt="Jane" style={{width: "100%"}}/>
                  <div className="container">
                    <h2>Jane Doe</h2>
                    <p className="title">Chapter Vicepresident</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>example@example.com</p>
                    <p><button className="button">Contact</button></p>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <img src={require("./img/AU_P1.jpg")} alt="Jane" style={{width: "100%"}}/>
                  <div className="container">
                    <h2>Jane Doe</h2>
                    <p className="title">Grunt #1</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>example@example.com</p>
                    <p><button className="button">Contact</button></p>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <img src={require("./img/AU_P1.jpg")} alt="Jane" style={{width: "100%"}}/>
                  <div className="container">
                    <h2>Jane Doe</h2>
                    <p className="title">Grunt #2</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>example@example.com</p>
                    <p><button className="button">Contact</button></p>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <img src={require("./img/AU_P1.jpg")} alt="Jane" style={{width: "100%"}}/>
                  <div className="container">
                    <h2>Jane Doe</h2>
                    <p className="title">Grunt #3</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>example@example.com</p>
                    <p><button className="button">Contact</button></p>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <img src={require("./img/AU_P1.jpg")} alt="Jane" style={{width: "100%"}}/>
                  <div className="container">
                    <h2>Jane Doe</h2>
                    <p className="title">Chapter Mentor</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>example@example.com</p>
                    <p><button className="button">Contact</button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};