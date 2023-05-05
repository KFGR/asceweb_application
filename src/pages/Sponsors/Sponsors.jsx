import "./Sponsors.css";
import React from "react";
import checkmark from '../../assets/img/checkmark.svg';
//import Calendar from  '../../components/Calendar';
// import FormCompetitions from  '../../components/FormCompetition';
function template() {
  return (

    <div className="sponsors">
      <div className="section-hero">
        <h1>Help Us Reach Our Goals!</h1>
      </div>
      <div className="section-information">
        <h2>
          About Donations:
        </h2>
        <p>
          The ASCE Student Chapter of the Polytechnic University of Puerto Rico appreciates any and all donations to for our participation
          in the yearly ASCE competitions. Below you'll find a detailed tier based table which outlines the perks of donating. In the case 
          that you woul wish to donate, we also have a space where you can contact our directive.
        </p>
      </div>

      <div className="section-rewards">
      <h2>Reward Tiers</h2>
        <table>
        <tfoot><tr><td colSpan="5">*Note: We sincerely appreciate all donations below $500, although they do not qualify for our rewards program.</td></tr></tfoot>
          <tr>
            <th>Brand Logo Representation</th>
            <th><p>Bronze Tier</p>$250 - $499</th>
            <th><p>Silver Tier</p>$500 - $999</th>
            <th><p>Gold Tier</p>$1000 - $1999</th>
            <th><p>Diamond Tier</p>$2000 or more</th>
          </tr>
          <tr>
            <td>Presentation board</td>
            <td></td>
            <td></td>
            <td></td>
            <td><img src={checkmark} alt="Checkmark"/></td>
          </tr>
          <tr>
            <td>Safety Helmet</td>
            <td></td>
            <td></td>
            <td></td>
            <td><img src={checkmark} alt="Checkmark"/></td>
          </tr>
          <tr>
            <td>End-of-Year Student Banquet Invitation and Recognition</td>
            <td></td>
            <td></td>
            <td><img src={checkmark} alt="Checkmark"/></td>
            <td><img src={checkmark} alt="Checkmark"/></td>
          </tr>
          <tr>
            <td>*Website Recognition</td>
            <td></td>
            <td></td>
            <td><img src={checkmark} alt="Checkmark"/></td>
            <td><img src={checkmark} alt="Checkmark"/></td>
          </tr>
          <tr>
            <td>*Social Media Recognition</td>
            <td></td>
            <td><img src={checkmark} alt="Checkmark"/></td>
            <td><img src={checkmark} alt="Checkmark"/></td>
            <td><img src={checkmark} alt="Checkmark"/></td>
          </tr>
          <tr>
            <td>Fundraising Activities</td>
            <td></td>
            <td><img src={checkmark} alt="Checkmark"/></td>
            <td><img src={checkmark} alt="Checkmark"/></td>
            <td><img src={checkmark} alt="Checkmark"/></td>
          </tr>
          <tr>
            <td>Social Events</td>
            <td><img src={checkmark} alt="Checkmark"/></td>
            <td><img src={checkmark} alt="Checkmark"/></td>
            <td><img src={checkmark} alt="Checkmark"/></td>
            <td><img src={checkmark} alt="Checkmark"/></td>
          </tr>
          <tr>
            <td>Official Student Chapter T-Shirt</td>
            <td><img src={checkmark} alt="Checkmark"/></td>
            <td><img src={checkmark} alt="Checkmark"/></td>
            <td><img src={checkmark} alt="Checkmark"/></td>
            <td><img src={checkmark} alt="Checkmark"/></td>
          </tr>
          <tr>
            <td>Event Flyers</td>
            <td><img src={checkmark} alt="Checkmark"/></td>
            <td><img src={checkmark} alt="Checkmark"/></td>
            <td><img src={checkmark} alt="Checkmark"/></td>
            <td><img src={checkmark} alt="Checkmark"/></td>
          </tr>
          <tr>
            <td>Seminars or Workshops</td>
            <td></td>
            <td><img src={checkmark} alt="Checkmark"/></td>
            <td><img src={checkmark} alt="Checkmark"/></td>
            <td><img src={checkmark} alt="Checkmark"/></td>
          </tr>
          <tr>
            <td>Engineering Conventions</td>
            <td></td>
            <td></td>
            <td></td>
            <td><img src={checkmark} alt="Checkmark"/></td>
          </tr>
        </table>
      </div>

      <div className="section-contact">
        <h2>Connect With Us</h2>
        <p>
          If you wish to donate to our student chapter, please fill out the form below to get into contact with us.
        </p>
        <div className="contact-box">
          <div className="contact-left">
            <h3>Send us a message</h3>
            <form action="https://formsubmit.co/johnrodricres@gmail.com" method="POST">
              <div className="input-row">
                <div className="input-group">
                  <label>Name</label>
                  <input type="text" placeholder="John Done" name="name"/>
                </div>
                <div className="input-group">
                  <label>Subject</label>
                  <input type="text" placeholder="Subject" name="subject"/>
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label>Email</label>
                  <input type="text" placeholder="your@email.com" name="email"/>
                </div>
                <div className="input-group">
                  <label>Phone</label>
                  <input type="text" placeholder="123 456 7890" name="phone" />
                </div>
              </div>

              <label>Message</label>
              <textarea name="message" rows="5" placeholder="Your Message"></textarea>

              <button type="submit">Send</button>
            </form>
          </div>

          <div className="contact-right">
            <h3>Reach Us</h3>
                
          </div>
        </div>
      </div>
      {/*<Calendar/>*/}
      {/* <FormCompetitions/> */}
    </div>
  );
};

export default template;
