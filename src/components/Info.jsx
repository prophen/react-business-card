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
          <button class="email">
            <FaEnvelope size={16} color={"#1E1F26"} />
            Email
          </button>
          <button class="linkedIn">
            <FaLinkedin size={16} color={"white"} />
            LinkedIn
          </button>
        </div>
      </section>
    </>
  );
}
