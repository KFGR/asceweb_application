import "./Sponsors.css";
import React from "react";
import checkmark from '../../assets/img/checkmark.svg';


function template() {
  return (
    <>
      <div className="section-rewards">
        <table>
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
    </>
  );
};

export default template;
