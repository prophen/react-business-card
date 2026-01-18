import {
  FaSquareXTwitter,
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareGithub,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer>
      <a
        href="https://x.com/NikemaCodes"
        title="NikemaCodes on X"
        target="_blank"
        rel="noreferrer"
      >
        <FaSquareXTwitter size={32} color="#918E9B" />
      </a>
      <a
        href="https://instagram.com/nikema"
        title="Nikema on Instagram"
        target="_blank"
        rel="noreferrer"
      >
        <FaSquareInstagram size={32} color="#918E9B" />
      </a>
      <a
        href="https://github.com/prophen"
        title="prophen on GitHub"
        target="_blank"
        rel="noreferrer"
      >
        <FaSquareGithub size={32} color="#918E9B" />
      </a>
    </footer>
  );
}
