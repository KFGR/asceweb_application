import "./Sponsors.css";
import React from "react";
import checkmark from '../../assets/img/checkmark.svg';


function template() {
  return (
    <>
      <div className="section-hero">
        <h1>Help Us Reach Our Goals!</h1>
      </div>
      <div className="section-information">
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque magni eos fugiat maxime eum, 
          porro nostrum deserunt ab! Error alias eum reprehenderit doloremque nam aliquid blanditiis fugit qui eveniet.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque magni eos fugiat maxime eum, 
          porro nostrum deserunt ab! Error alias eum reprehenderit doloremque nam aliquid blanditiis fugit qui eveniet.
        </p>
      </div>

      <div className="section-rewards">
      <h2>Reward Tiers</h2>
        <table>
        <tfoot><tr><td colspan="5">*Note: We sincerely appreciate all donations below $500, although they do not qualify for our rewards program.</td></tr></tfoot>
          <tr>
            <th>Brand Logo Representation</th>
            <th><p>Bronze Tier</p>$500 - $1499</th>
            <th><p>Silver Tier</p>$1500 - $2499</th>
            <th><p>Gold Tier</p>$2500 - $4999</th>
            <th><p>Diamond Tier</p>$5000 or more</th>
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
            <td></td>
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
            <td></td>
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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, 
          doloribus nisi? Tenetur ut a officia repudiandae eius, explicabo reprehenderit eos delectus.</p>
        <div className="contact-box">
          <div className="contact-left">
            <h3>Send us a message</h3>
            <form action="https://formsubmit.co/johnrodricres@gmail.com" method="POST">
              <div className="input-row">
                <div className="input-group">
                  <label>Name</label>
                  <input type="text" placeholder="John Rodriguez" name="name"/>
                </div>
                <div className="input-group">
                  <label>Subject</label>
                  <input type="text" placeholder="What" name="subject"/>
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label>Email</label>
                  <input type="text" placeholder="example132@gmail.com" name="email"/>
                </div>
                <div className="input-group">
                  <label>Phone</label>
                  <input type="text" placeholder="787 345 2341" name="phone" />
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
    </>
  );
};

export default template;
