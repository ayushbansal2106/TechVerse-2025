import React, { useEffect } from "react";
import "./guidelines.css";

const guildelines = () => {
  useEffect(() => {
    document.title = "Guidelines";
  });
  return (
    <React.Fragment>
      <div className="parent-guidelines">
        <div className="guidelines-title">Guidelines</div>
        <div className="guidelines-container">
          <div className="guidelines-content">
            <div className="guidelines-1">
              1. The teams can have a minimum of 2 members and a maximum of 3
              members in case 1 member is girl. 🤝👥
              <br /> <br />
              2. The last date for team registration is 1st September 2025. ⏰🗓️{" "}
              <br />
              <br />
              3. The last date for abstract submission is 1st September 2025. 📝🗓️{" "}
              <br />
              <br />
              4. The project should be unique and shouldn't have ever been
              published in any other journals or competitions. 🚀🔍 <br />
              <br />
              5. The event will have three phases of judge review. Projects will
              be evaluated every 8 hours from the beginning of the finale. 👁️‍🗨️🕒{" "}
              <br />
              <br />
              6. The project's work should sustain the whole 24 hours; if it
              fails to do so, the team will be disqualified immediately. 🏆🕒❌{" "}
              <br />
              <br />
              7. Code of conduct is strictly monitored, and any case of
              uncivilized behavior will result in the whole team's
              disqualification. 🚫👮‍♂️❌ <br />
              <br />
            </div>
            <div className="guidelines-2">
              8. The abstract submission round costs ₹100 per member for all the teams 
              that register for the event. Registrations after the deadline will also
              have to pay the late fine. 💵📅{" "}
              <br />
              <br />
              9. The scrutinized/shortlisted teams for the final round of 
              "Sunstone Hackathon 2025" will be announced on the 5th of September 2025.
              🏁🕙🏁
              <br />
              <br /> 11. The finale round will be offline and held at our Rayat Bahra University
              Kharar, Punjab - 140103. 🏛️📍 <br />
              <br />
              12. Power outlets and worksheets will be provided to all teams
              prior to the commencement of the event. 🔌📑 <br />
              <br />
              13. All technical and physical requirements for the projects
              should be brought by the team only (including power extensions), and no assistance will be
              provided in this case. ⚙️🛠️🚫
              <br /> <br />
              14. Teams must present their projects in a clear and organized
              manner during the finale, ensuring effective communication of
              their ideas. 🗣️📊
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default guildelines;
