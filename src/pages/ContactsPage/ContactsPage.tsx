import React from "react";
import "./ContactsPage.scss";

const ContactsPage: React.FC = () => {
  return (
    <div className="contact-page">
      <div>CONTACTS</div>
      <div className="user">
        <a
          href="https://viktoriakondrashova1.github.io/rsschool-cv/"
          target="_blank"
          rel="noreferrer"
          className="user__link"
        >
          <div className="user__one">Вика</div>
        </a>
        <a
          href="https://mitjasha.github.io/rsschool-cv/"
          target="_blank"
          rel="noreferrer"
          className="user__link"
        >
          <div className="user__two">Дима</div>
        </a>
      </div>
    </div>
  );
};

export default ContactsPage;
