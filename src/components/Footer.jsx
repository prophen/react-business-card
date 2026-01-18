import {
  FaSquareXTwitter,
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareGithub,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer>
      <a href="https://x.com/NikemaCodes" title="NikemaCodes on X">
        <FaSquareXTwitter size={25} color="#918E9B" />
      </a>
      <a href="https://instagram.com/nikema" title="Nikema on Instagram">
        <FaSquareInstagram size={25} color="#918E9B" />
      </a>
      <a href="https://github.com/prophen" title="prophen on GitHub">
        <FaSquareGithub size={25} color="#918E9B" />
      </a>
    </footer>
  );
}
