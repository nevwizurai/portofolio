import React, { useState } from "react";

const Contact = () => {
  const [subject, setSubject] = useState("Mail from portfolio");
  const [body, setBody] = useState("");

  return (
    <section className="mb-10 px-2 md:px-7">
      <div className="xl:w-3/4 xl:mx-auto">
        <div className="mb-3">
          <h2 className="font-medium text-lg lg:text-2xl leading-4">Contact Me</h2>
          <small className="italic text-gray-500 lg:text-lg">Send me an email to get in touch...</small>
        </div>

        <div className="w-full sm:w-5/6 lg:w-1/2 mx-auto">
          <label className="block" htmlFor="subject">
            Subject
          </label>
          <input
            onChange={({ target }) => setSubject(target.value)}
            className="w-full rounded border-gray-400 focus:border-blue-500 mb-3"
            type="text"
            name="subject"
            id="subject"
          />
          <label className="block" htmlFor="body">
            Body
          </label>
          <textarea
            onChange={({ target }) => setBody(target.value)}
            className="w-full rounded border-gray-400 resize-none mb-3"
            name="body"
            id="body"
            rows="5"
          ></textarea>
          <MailLink subject={subject} body={body} />
        </div>
      </div>
    </section>
  );
};

const MailLink = ({ subject = "Email from portfolio", body = "" }) => {
  return (
    <a
      className="px-4 py-2 rounded text-white bg-blue-500 hover:bg-blue-700"
      target="_blank"
      href={`mailto:nevwizurai@gmail.com?subject=${subject}&body=${body}`}
    >
      Send Email
    </a>
  );
};

export default Contact;
