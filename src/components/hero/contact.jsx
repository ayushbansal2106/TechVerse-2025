import React from "react";
import PhoneBluetoothSpeakerIcon from "@mui/icons-material/PhoneBluetoothSpeaker";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { CiLinkedin } from "react-icons/ci";
import "./contact.css";
import { ReactComponent as DiscordContact } from "../../assets/discord.svg";
import ReactGA from "react-ga";

const contact = () => {
  const handlecontactOptions = (card) => {
    document.querySelector(card).classList.toggle("contact-card-flip");
  };

  const handleLaunch = (target) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "Contact Option",
    });
    const rocket = document.querySelector(`#${target}`);
    rocket.classList.toggle("contact-card-launch");
  };
  return (
    <React.Fragment>
      <div id="contact" className="parent-contact">
        <div className="contact-title">
          <img src="/images/rrr.webp" alt="arrow-logo" />
          Contacts
        </div>
        <div className="parent-container contact-grid">
          {/* Contact Card 1 */}
          <div className="contact-container">
            <div className="contact-card">
              <div className="contact-card-front">
                <img
                  src="/images/Ayush Bansal.jpg"
                  alt="shree - president CSI"
                />
                <div className="contact-card-details">
                  <h1 className="contact-card-name">Ayush Bansal</h1>
                  <h2 className="contact-card-description">
                    Student Lead Convener
                  </h2>
                  <h3
                    className="contact-card-options"
                    onClick={() => handlecontactOptions(".contact-card")}
                  >
                    Contact Options{" "}
                    <KeyboardDoubleArrowRightIcon
                      style={{ width: "20px", height: "20px" }}
                    />
                  </h3>
                </div>
              </div>
              <div className="contact-card-back">
                <div className="contact-card-details">
                  <h1 className="contact-card-name">Ayush Bansal</h1>
                  <h2 className="contact-card-description">
                    <span
                      className="contact-card-phone"
                      onClick={() => {
                        handleLaunch("contact-card-launch1");
                        setTimeout(() => {
                          window.open(
                            "https://api.whatsapp.com/send?phone=9996696235"
                          );
                        }, 2000);
                      }}
                    >
                      <PhoneBluetoothSpeakerIcon
                        className="phone"
                        style={{ width: "35px", height: "35px" }}
                      />
                      Whatsapp
                      <span id="contact-card-launch1">
                        <RocketLaunchIcon
                          className="rocketLaunch"
                          style={{ width: "20px", height: "20px" }}
                        />
                      </span>
                    </span>
                    <span
                      className="contact-card-email"
                      onClick={() => {
                        handleLaunch("contact-card-launch2");
                        setTimeout(() => {
                          window.open("mailto:pk3535745@gmail.com");
                        }, 2000);
                      }}
                    >
                      <EmailRoundedIcon
                        className="email"
                        style={{ width: "35px", height: "35px" }}
                      />
                      Mail
                      <span id="contact-card-launch2">
                        <RocketLaunchIcon
                          className="rocketLaunch"
                          style={{ width: "20px", height: "20px" }}
                        />
                      </span>
                    </span>
                    <span
                      className="contact-card-instagram"
                      onClick={() => {
                        handleLaunch("contact-card-launch3");
                        setTimeout(() => {
                          window.open(
                            "https://www.instagram.com/ayush_bansal.1929"
                          );
                        }, 2000);
                      }}
                    >
                      <InstagramIcon
                        className="instagram"
                        style={{ width: "35px", height: "35px" }}
                      />
                      Instagram
                      <span id="contact-card-launch3">
                        <RocketLaunchIcon
                          className="rocketLaunch"
                          style={{ width: "20px", height: "20px" }}
                        />
                      </span>
                    </span>
                    <span
                      className="contact-card-discord"
                      onClick={() => {
                        handleLaunch("contact-card-launch4");
                        setTimeout(() => {
                          window.open("https://www.linkedin.com/in/ayush-bansal2106");
                        }, 2000);
                      }}
                    >
                      <CiLinkedin
                        className="discord"
                        style={{ width: "35px", height: "35px" }}
                      />
                      LinkedIn
                      <span id="contact-card-launch4">
                        <RocketLaunchIcon
                          className="rocketLaunch"
                          style={{ width: "20px", height: "20px" }}
                        />
                      </span>
                    </span>
                  </h2>
                  <h3
                    className="contact-card-options"
                    onClick={() => handlecontactOptions(".contact-card")}
                  >
                    {" "}
                    <KeyboardDoubleArrowLeftIcon
                      style={{ width: "20px", height: "20px" }}
                    />{" "}
                    Back
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Card 2 */}
          <div className="contact-container">
            <div className="contact-card1">
              <div className="contact-card-front">
                <img
                  src="/images/Mayank Pandey.jpg"
                  alt="Mayank pandey"
                />
                <div className="contact-card-details">
                  <h1 className="contact-card-name">Mayank</h1>
                  <h2 className="contact-card-description">
                    Student Co-Convener
                  </h2>
                  <h3
                    className="contact-card-options"
                    onClick={() => handlecontactOptions(".contact-card1")}
                  >
                    Contact Options{" "}
                    <KeyboardDoubleArrowRightIcon
                      style={{ width: "20px", height: "20px" }}
                    />
                  </h3>
                </div>
              </div>
              <div className="contact-card-back1">
                <div className="contact-card-details">
                  <h1 className="contact-card-name">Mayank Pandey</h1>
                  <h2 className="contact-card-description">
                    <span
                      className="contact-card-phone"
                      onClick={() => {
                        handleLaunch("contact-card-launch11");
                        setTimeout(() => {
                          window.open(
                            "https://api.whatsapp.com/send?phone=7508022579"
                          );
                        }, 2000);
                      }}
                    >
                      <PhoneBluetoothSpeakerIcon
                        className="phone"
                        style={{ width: "35px", height: "35px" }}
                      />
                      Whatsapp
                      <span id="contact-card-launch11">
                        <RocketLaunchIcon
                          className="rocketLaunch"
                          style={{ width: "20px", height: "20px" }}
                        />
                      </span>
                    </span>
                    <span
                      className="contact-card-email"
                      onClick={() => {
                        handleLaunch("contact-card-launch12");
                        setTimeout(() => {
                          window.open("mailto:pandeyjiofficial0@gmail.com");
                        }, 2000);
                      }}
                    >
                      <EmailRoundedIcon
                        className="email"
                        style={{ width: "35px", height: "35px" }}
                      />
                      Mail
                      <span id="contact-card-launch12">
                        <RocketLaunchIcon
                          className="rocketLaunch"
                          style={{ width: "20px", height: "20px" }}
                        />
                      </span>
                    </span>
                    <span
                      className="contact-card-instagram"
                      onClick={() => {
                        handleLaunch("contact-card-launch13");
                        setTimeout(() => {
                          window.open(
                            "https://www.instagram.com/pan_deymayank"
                          );
                        }, 2000);
                      }}
                    >
                      <InstagramIcon
                        className="instagram"
                        style={{ width: "35px", height: "35px" }}
                      />
                      Instagram
                      <span id="contact-card-launch13">
                        <RocketLaunchIcon
                          className="rocketLaunch"
                          style={{ width: "20px", height: "20px" }}
                        />
                      </span>
                    </span>
                    <span
                      className="contact-card-discord"
                      onClick={() => {
                        handleLaunch("contact-card-launch14");
                        setTimeout(() => {
                          window.open("https://www.linkedin.com/in/mayank-pnd");
                        }, 2000);
                      }}
                    >
                      <CiLinkedin
                        className="discord"
                        style={{ width: "35px", height: "35px" }}
                      />
                      LinkedIn
                      <span id="contact-card-launch14">
                        <RocketLaunchIcon
                          className="rocketLaunch"
                          style={{ width: "20px", height: "20px" }}
                        />
                      </span>
                    </span>
                  </h2>
                  <h3
                    className="contact-card-options"
                    onClick={() => handlecontactOptions(".contact-card1")}
                  >
                    {" "}
                    <KeyboardDoubleArrowLeftIcon
                      style={{ width: "20px", height: "20px" }}
                    />{" "}
                    Back
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Card 3 */}
          <div className="contact-container">
            <div className="contact-card2">
              <div className="contact-card-front">
                <img
                  src="/images/Harsh Dev.jpg"
                  alt="Harsh dev"
                />
                <div className="contact-card-details">
                  <h1 className="contact-card-name">Harsh Dev</h1>
                  <h2 className="contact-card-description">Student Chairperson</h2>
                  <h3
                    className="contact-card-options"
                    onClick={() => handlecontactOptions(".contact-card2")}
                  >
                    Contact Options{" "}
                    <KeyboardDoubleArrowRightIcon
                      style={{ width: "20px", height: "20px" }}
                    />
                  </h3>
                </div>
              </div>
              <div className="contact-card-back2">
                <div className="contact-card-details">
                  <h1 className="contact-card-name">Harsh dev</h1>
                  <h2 className="contact-card-description">
                    <span
                      className="contact-card-phone"
                      onClick={() => {
                        handleLaunch("contact-card-launch21");
                        setTimeout(() => {
                          window.open(
                            "https://api.whatsapp.com/send?phone=9138534789"
                          );
                        }, 2000);
                      }}
                    >
                      <PhoneBluetoothSpeakerIcon
                        className="phone"
                        style={{ width: "35px", height: "35px" }}
                      />
                      Whatsapp
                      <span id="contact-card-launch21">
                        <RocketLaunchIcon
                          className="rocketLaunch"
                          style={{ width: "20px", height: "20px" }}
                        />
                      </span>
                    </span>
                    <span
                      className="contact-card-email"
                      onClick={() => {
                        handleLaunch("contact-card-launch22");
                        setTimeout(() => {
                          window.open("mailto:harsharora45642@gmail.com");
                        }, 2000);
                      }}
                    >
                      <EmailRoundedIcon
                        className="email"
                        style={{ width: "35px", height: "35px" }}
                      />
                      Mail
                      <span id="contact-card-launch22">
                        <RocketLaunchIcon
                          className="rocketLaunch"
                          style={{ width: "20px", height: "20px" }}
                        />
                      </span>
                    </span>
                    <span
                      className="contact-card-instagram"
                      onClick={() => {
                        handleLaunch("contact-card-launch23");
                        setTimeout(() => {
                          window.open("https://www.instagram.com/hahaa.harsh");
                        }, 2000);
                      }}
                    >
                      <InstagramIcon
                        className="instagram"
                        style={{ width: "35px", height: "35px" }}
                      />
                      Instagram
                      <span id="contact-card-launch23">
                        <RocketLaunchIcon
                          className="rocketLaunch"
                          style={{ width: "20px", height: "20px" }}
                        />
                      </span>
                    </span>
                    <span
                      className="contact-card-discord"
                      onClick={() => {
                        handleLaunch("contact-card-launch24");
                        setTimeout(() => {
                          window.open("https://www.linkedin.com/in/harsh-dev-51495b24a/");
                        }, 2000);
                      }}
                    >
                      <CiLinkedin
                        className="discord"
                        style={{ width: "35px", height: "35px" }}
                      />
                      LinkedIn
                      <span id="contact-card-launch24">
                        <RocketLaunchIcon
                          className="rocketLaunch"
                          style={{ width: "20px", height: "20px" }}
                        />
                      </span>
                    </span>
                  </h2>
                  <h3
                    className="contact-card-options"
                    onClick={() => handlecontactOptions(".contact-card2")}
                  >
                    {" "}
                    <KeyboardDoubleArrowLeftIcon
                      style={{ width: "20px", height: "20px" }}
                    />{" "}
                    Back
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Card 4 */}
          <div className="contact-container">
            <div className="contact-card3">
              <div className="contact-card-front">
                <img
                  src="/images/Suhani.jpg"
                  alt="Suhani"
                />
                <div className="contact-card-details">
                  <h1 className="contact-card-name">Suhani</h1>
                  <h2 className="contact-card-description">
                    Student Convener (Girls)
                  </h2>
                  <h3
                    className="contact-card-options"
                    onClick={() => handlecontactOptions(".contact-card3")}
                  >
                    Contact Options{" "}
                    <KeyboardDoubleArrowRightIcon
                      style={{ width: "20px", height: "20px" }}
                    />
                  </h3>
                </div>
              </div>
              <div className="contact-card-back3">
                <div className="contact-card-details">
                  <h1 className="contact-card-name">Suhani</h1>
                  <h2 className="contact-card-description">
                    <span
                      className="contact-card-phone"
                      onClick={() => {
                        handleLaunch("contact-card-launch31");
                        setTimeout(() => {
                          window.open(
                            "https://api.whatsapp.com/send?phone=7082372897"
                          );
                        }, 2000);
                      }}
                    >
                      <PhoneBluetoothSpeakerIcon
                        className="phone"
                        style={{ width: "35px", height: "35px" }}
                      />
                      Whatsapp
                      <span id="contact-card-launch31">
                        <RocketLaunchIcon
                          className="rocketLaunch"
                          style={{ width: "20px", height: "20px" }}
                        />
                      </span>
                    </span>
                    <span
                      className="contact-card-email"
                      onClick={() => {
                        handleLaunch("contact-card-launch32");
                        setTimeout(() => {
                          window.open("mailto:suhanig8910@gmail.com");
                        }, 2000);
                      }}
                    >
                      <EmailRoundedIcon
                        className="email"
                        style={{ width: "35px", height: "35px" }}
                      />
                      Mail
                      <span id="contact-card-launch32">
                        <RocketLaunchIcon
                          className="rocketLaunch"
                          style={{ width: "20px", height: "20px" }}
                        />
                      </span>
                    </span>
                    <span
                      className="contact-card-instagram"
                      onClick={() => {
                        handleLaunch("contact-card-launch33");
                        setTimeout(() => {
                          window.open("https://www.instagram.com/suhani_9614");
                        }, 2000);
                      }}
                    >
                      <InstagramIcon
                        className="instagram"
                        style={{ width: "35px", height: "35px" }}
                      />
                      Instagram
                      <span id="contact-card-launch33">
                        <RocketLaunchIcon
                          className="rocketLaunch"
                          style={{ width: "20px", height: "20px" }}
                        />
                      </span>
                    </span>
                    <span
                      className="contact-card-discord"
                      onClick={() => {
                        handleLaunch("contact-card-launch34");
                        setTimeout(() => {
                          window.open("https://www.linkedin.com/in/suhani-gupta-48161b316/");
                        }, 2000);
                      }}
                    >
                      <CiLinkedin
                        className="discord"
                        style={{ width: "35px", height: "35px" }}
                      />
                      LinkedIn
                      <span id="contact-card-launch34">
                        <RocketLaunchIcon
                          className="rocketLaunch"
                          style={{ width: "20px", height: "20px" }}
                        />
                      </span>
                    </span>
                  </h2>
                  <h3
                    className="contact-card-options"
                    onClick={() => handlecontactOptions(".contact-card3")}
                  >
                    {" "}
                    <KeyboardDoubleArrowLeftIcon
                      style={{ width: "20px", height: "20px" }}
                    />{" "}
                    Back
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Card 5 */}
          <div className="contact-container">
            <div className="contact-card4">
              <div className="contact-card-front">
                <img
                  src="/images/Disha Mangla.jpeg"
                  alt="Disha Mangla"
                />
                <div className="contact-card-details">
                  <h1 className="contact-card-name">Disha Mangla</h1>
                  <h2 className="contact-card-description">
                    Student Co-Convener (Girls)
                  </h2>
                  <h3
                    className="contact-card-options"
                    onClick={() => handlecontactOptions(".contact-card4")}
                  >
                    Contact Options{" "}
                    <KeyboardDoubleArrowRightIcon
                      style={{ width: "20px", height: "20px" }}
                    />
                  </h3>
                </div>
              </div>
              <div className="contact-card-back4">
                <div className="contact-card-details">
                  <h1 className="contact-card-name">Disha Mangla</h1>
                  <h2 className="contact-card-description">
                    <span
                      className="contact-card-phone"
                      onClick={() => {
                        handleLaunch("contact-card-launch41");
                        setTimeout(() => {
                          window.open(
                            "https://api.whatsapp.com/send?phone=9991380359"
                          );
                        }, 2000);
                      }}
                    >
                      <PhoneBluetoothSpeakerIcon
                        className="phone"
                        style={{ width: "35px", height: "35px" }}
                      />
                      Whatsapp
                      <span id="contact-card-launch41">
                        <RocketLaunchIcon
                          className="rocketLaunch"
                          style={{ width: "20px", height: "20px" }}
                        />
                      </span>
                    </span>
                    <span
                      className="contact-card-email"
                      onClick={() => {
                        handleLaunch("contact-card-launch42");
                        setTimeout(() => {
                          window.open("mailto:disha10mangla@gmail.com");
                        }, 2000);
                      }}
                    >
                      <EmailRoundedIcon
                        className="email"
                        style={{ width: "35px", height: "35px" }}
                      />
                      Mail
                      <span id="contact-card-launch42">
                        <RocketLaunchIcon
                          className="rocketLaunch"
                          style={{ width: "20px", height: "20px" }}
                        />
                      </span>
                    </span>
                    <span
                      className="contact-card-instagram"
                      onClick={() => {
                        handleLaunch("contact-card-launch43");
                        setTimeout(() => {
                          window.open("https://www.instagram.com/dishamangla_1510");
                        }, 2000);
                      }}
                    >
                      <InstagramIcon
                        className="instagram"
                        style={{ width: "35px", height: "35px" }}
                      />
                      Instagram
                      <span id="contact-card-launch43">
                        <RocketLaunchIcon
                          className="rocketLaunch"
                          style={{ width: "20px", height: "20px" }}
                        />
                      </span>
                    </span>
                    <span
                      className="contact-card-discord"
                      onClick={() => {
                        handleLaunch("contact-card-launch44");
                        setTimeout(() => {
                          window.open("https://www.linkedin.com/in/disha-mangla-4b8a9b319/");
                        }, 2000);
                      }}
                    >
                      <CiLinkedin
                        className="discord"
                        style={{ width: "35px", height: "35px" }}
                      />
                      LinkedIn
                      <span id="contact-card-launch44">
                        <RocketLaunchIcon
                          className="rocketLaunch"
                          style={{ width: "20px", height: "20px" }}
                        />
                      </span>
                    </span>
                  </h2>
                  <h3
                    className="contact-card-options"
                    onClick={() => handlecontactOptions(".contact-card4")}
                  >
                    {" "}
                    <KeyboardDoubleArrowLeftIcon
                      style={{ width: "20px", height: "20px" }}
                    />{" "}
                    Back
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Card 6 */}
          <div className="contact-container">
            <div className="contact-card5">
              <div className="contact-card-front">
                <img
                  src="/images/Bandana Thakur.jpg"
                  alt="Bandna Thakur"
                />
                <div className="contact-card-details">
                  <h1 className="contact-card-name">Bandna</h1>
                  <h2 className="contact-card-description">
                  Student Chairperson (Girls)
                  </h2>
                  <h3
                    className="contact-card-options"
                    onClick={() => handlecontactOptions(".contact-card5")}
                  >
                    Contact Options{" "}
                    <KeyboardDoubleArrowRightIcon
                      style={{ width: "20px", height: "20px" }}
                    />
                  </h3>
                </div>
              </div>
              <div className="contact-card-back5">
                <div className="contact-card-details">
                  <h1 className="contact-card-name">Bandna Thakur</h1>
                  <h2 className="contact-card-description">
                    <span
                      className="contact-card-phone"
                      onClick={() => {
                        handleLaunch("contact-card-launch51");
                        setTimeout(() => {
                          window.open(
                            "https://api.whatsapp.com/send?phone=7876850813"
                          );
                        }, 2000);
                      }}
                    >
                      <PhoneBluetoothSpeakerIcon
                        className="phone"
                        style={{ width: "35px", height: "35px" }}
                      />
                      Whatsapp
                      <span id="contact-card-launch51">
                        <RocketLaunchIcon
                          className="rocketLaunch"
                          style={{ width: "20px", height: "20px" }}
                        />
                      </span>
                    </span>
                    <span
                      className="contact-card-email"
                      onClick={() => {
                        handleLaunch("contact-card-launch52");
                        setTimeout(() => {
                          window.open("mailto:tbandna772@gmail.com");
                        }, 2000);
                      }}
                    >
                      <EmailRoundedIcon
                        className="email"
                        style={{ width: "35px", height: "35px" }}
                      />
                      Mail
                      <span id="contact-card-launch52">
                        <RocketLaunchIcon
                          className="rocketLaunch"
                          style={{ width: "20px", height: "20px" }}
                        />
                      </span>
                    </span>
                    <span
                      className="contact-card-instagram"
                      onClick={() => {
                        handleLaunch("contact-card-launch53");
                        setTimeout(() => {
                          window.open("https://www.instagram.com/bandna_07");
                        }, 2000);
                      }}
                    >
                      <InstagramIcon
                        className="instagram"
                        style={{ width: "35px", height: "35px" }}
                      />
                      Instagram
                      <span id="contact-card-launch53">
                        <RocketLaunchIcon
                          className="rocketLaunch"
                          style={{ width: "20px", height: "20px" }}
                        />
                      </span>
                    </span>
                    <span
                      className="contact-card-discord"
                      onClick={() => {
                        handleLaunch("contact-card-launch54");
                        setTimeout(() => {
                          window.open("https://www.linkedin.com/in/bandna-thakur-006a4728b/");
                        }, 2000);
                      }}
                    >
                      <CiLinkedin
                        className="discord"
                        style={{ width: "35px", height: "35px" }}
                      />
                      LinkedIn
                      <span id="contact-card-launch54">
                        <RocketLaunchIcon
                          className="rocketLaunch"
                          style={{ width: "20px", height: "20px" }}
                        />
                      </span>
                    </span>
                  </h2>
                  <h3
                    className="contact-card-options"
                    onClick={() => handlecontactOptions(".contact-card5")}
                  >
                    {" "}
                    <KeyboardDoubleArrowLeftIcon
                      style={{ width: "20px", height: "20px" }}
                    />{" "}
                    Back
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default contact;
