import { IoLogoGithub, IoLogoLinkedin, IoLogoFacebook } from 'react-icons/io';

export default function Social() {
  return (
    <div>
      <h3 className="font-italic text-center">Get social with me</h3>
      <div className="d-flex justify-content-around">
        <a
          href={process.env.NEXT_PUBLIC_URL_GITHUB}
          className="github text-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoGithub size={40} />
          <br />
          Github
        </a>

        <a
          href={process.env.NEXT_PUBLIC_URL_LINKEDIN}
          className="linkedIn text-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoLinkedin size={40} />
          <br />
          LinkedIn
        </a>

        <a
          href={process.env.NEXT_PUBLIC_URL_FACEBOOK}
          className="facebook text-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoFacebook size={40} />
          <br />
          Facebook
        </a>
      </div>
    </div>
  );
}
