import React from "react";
import "../styles/Contact.css";
import linkedInLogo from "../assets/linkedInLogo.png";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        We envision the website as a dynamic and ever-advancing tool that will
        provide people with up-to-date information in crucial areas. Moreover,
        our site will guide them in understanding specific issues and assist in
        removing their knowledge deficits in these areas; some examples of
        critical questions and brief explanations of their relevance can be
        found in this online resource for students to study on their own and for
        general understanding, of course, we are faced with the fact that the
        game will be challenging from time to time, but all the process will
        stay in memory this contact page serves as a bridge fostering a
        collaborative environment where you can connect with us for various
        purposes from our understanding this page would become what binds us
        together to point out the reasons why you decided to stay on our team
        for all that you have been through.
      </p>
      <ul id = "firstbullet">
        <li>
          Hello
        </li>
        <li>
          hi
        </li>
      </ul>
      <p>
        Email: <a href="mailto:pentaprobe1@gmail.com">pentaprobe1@gmail.com</a>
      </p>
      <p>
        LinkedIn:{" "}
        <a href="https://www.linkedin.com/in/penta-probe">
          <img
            src={linkedInLogo}
            alt="LinkedIn"
            style={{ width: "25px", marginRight: "5px" }}
          />
          LinkedIn Page
        </a>
      </p>
    </div>
  );
}

export default Contact;
