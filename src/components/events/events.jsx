import React, { useEffect } from "react";
import "./events.css";
import ReactGA from "react-ga";

const events = () => {
  const handleAbstract = () => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: `Abstract Reference Download`,
    });
    window.open("/docs/Abstract_Reference_Hackathon.pdf");
  };
  useEffect(() => {
    document.title = "Stages";
  });
  const handleStage = (stage) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: `Events Stage-${stage}`,
    });
    if (stage == "1") {
      document.querySelector("#line-progress").style.width = "0%";
      document
        .querySelectorAll(".section-content")
        .forEach((stage) => stage.classList.remove("active"));
      document.querySelector(".stage1-content").classList.add("active");
    }
    if (stage == "2") {
      document.querySelector("#line-progress").style.width = "25%";
      document
        .querySelectorAll(".section-content")
        .forEach((stage) => stage.classList.remove("active"));
      document.querySelector(".stage2-content").classList.add("active");
    }
    if (stage == "3") {
      document.querySelector("#line-progress").style.width = "50%";
      document
        .querySelectorAll(".section-content")
        .forEach((stage) => stage.classList.remove("active"));
      document.querySelector(".stage3-content").classList.add("active");
    }
    if (stage == "4") {
      document.querySelector("#line-progress").style.width = "75%";
      document
        .querySelectorAll(".section-content")
        .forEach((stage) => stage.classList.remove("active"));
      document.querySelector(".stage4-content").classList.add("active");
    }
  };
  return (
    <React.Fragment>
      <div className="parent-events">
        <div className="events-progress-bar">
          <ul>
            <li onClick={() => handleStage("1")}>Stage 1</li>
            <li onClick={() => handleStage("2")}>Stage 2</li>
            <li onClick={() => handleStage("3")}>Stage 3</li>
            <li onClick={() => handleStage("4")}>Stage 4</li>
          </ul>
          <div id="line">
            <div id="line-progress"></div>
          </div>
        </div>

        <div className="events-container">
          <div className="section-content stage1-content active">
            <div className="section-format">
              {" "}
              <h1>Registration</h1>
              <p>
                🔗 Scan the QR in the poster or search <a href="">www.hackatank.tech</a> and
                register for the event.
                <br /> <br />
                1️⃣ It will redirect you to the respective Google forms. Kindly
                fill in the requested details.
                <br /> <br />
                2️⃣Our registration team will contact you further upon
                registration.
                <br /> <br />
                3️⃣For any queries/issues, kindly check the contacts column for
                Point of Contact (POC).
                <br /> <br />
                4️⃣Last date for registration is on or before the 28th of April
                2025.
                <br /> <br />
                5️⃣The first round costs ₹300 per member for all the teams that register for
                the event.
              </p>
              <img src="/images/qr-code.png" alt="" />
            </div>
          </div>
          <div className="section-content stage2-content">
            <div className="section-format">
              <h1>
                Abstract Submission
                <span className="stage2-reference" onClick={handleAbstract}>
                  <span>click here to downlaod -</span>
                  ABSTRACT SUBMISSION REFERENCE
                </span>
              </h1>
              <p>
                📋 The problem statements are available on the home page, and it
                is provided at the bottom of this page as a PDF for downloading.
                <br /> <br />
                📥 Kindly submit it as an abstract and the registration
                team will contact you.
                <br /> <br />
                📝 The abstract format is given at the top right of this page as
                a PDF for downloading. Kindly download and use it for reference.
                <br /> <br />
                📄 Abstract of the project must be submitted only in PDF file
                format.
                <br /> <br />⏰ The last date for abstract submission is on or
                before the 28th of April 2025.
              </p>
            </div>
          </div>
          <div className="section-content stage3-content">
            <div className="section-format">
              <h1>Scrutinization</h1>
              <p>
                🔍 The teams will be shortlisted by the judging panel on various
                criteria which includes the scope of the project, execution
                ideology, etc.
                <br /> <br />
                📢 The scrutinized/shortlisted teams for the final round of
                "TechVerse 2025" will be announced on the 30th of April 2025.
                <br /> <br />
                💰 The Shortlisted team should proceed with their registration
                by completing the payment of ₹750/- per team on or before 3rd
                May 2025.
                <br /> <br />
                🔄 After the completion of payment, the registration team will
                assess you for the further procedures of the final round.
              </p>
            </div>
          </div>
          <div className="section-content stage4-content">
            <div className="section-format">
              <h1>The Grand Finale</h1>
              <p>
                🎉 The commencement of the inaugural function is scheduled at
                10:00 am on the 8th of May 2025.
                <br /> <br />
                ⏱️ The "TechVerse 2025" event will begin at 1:00 pm on the 8th of
                May 2025 and will wrap up at 1:00 pm on the 9th of
                May 2025.
                <br /> <br />
                🍔🍕 The lunch and dinner for the 8th of May will be
                provided by the organizing committee to the participants.
                <br /> <br />
                🍳🍔 The breakfast and lunch for the 9th of May will be
                provided by the organizing committee to the participants.
                <br /> <br />
                🍪 Refreshments will be provided to all the participating teams
                at all feasible times by the organizing committee.
                <br /> <br />
                🏆 The event will be concluded with the announcement of the cash
                prize winners of the "TechVerse 2025" event on the 9th of May
                2025 by 4:00 pm.
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default events;
