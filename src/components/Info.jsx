import avatar from "../assets/nikema-avatar.png";
import { FaEnvelope, FaLinkedin } from "react-icons/fa6";

export default function Info() {
  return (
    <>
      <img src={avatar} alt="cartoon avatar of Nikema" className="headshot" />
      <section className="info">
        <h1>Nikema Prophet</h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="http://nikema.dev">nikema.dev</a>
        </span>
        <div className="button-group">
          <a class="btn linkedIn" href="https://linkedin.com/in/nikemaprophet">
            <FaLinkedin size={16} color={"white"} />
            LinkedIn
          </a>
        </div>
      </section>
    </>
  );
}
