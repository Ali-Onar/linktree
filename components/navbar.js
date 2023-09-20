import styles from './navbar.module.css';
import Link from 'next/link';
import data from '../data.json';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArticleIcon from '@mui/icons-material/Article';
import WebAssetIcon from '@mui/icons-material/WebAsset';

const iconMap = {
    Twitter: <TwitterIcon style={{ verticalAlign: "middle" }} />,
    Linkedin: <LinkedInIcon style={{ verticalAlign: "middle" }} />,
    Youtube: <YouTubeIcon style={{ verticalAlign: "middle" }} />,
    Medium: <ArticleIcon style={{ verticalAlign: "middle" }} />,
    Instagram: <InstagramIcon style={{ verticalAlign: "middle" }} />,
    Website: <WebAssetIcon style={{ verticalAlign: "middle" }} />,
  }

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.links}>
        {data.socials.map((social, index) => (
            <Link
                className={styles.link}
                href={social.url}
                target="_blank"
                key={index}
                title={social.title}>
                {iconMap[social.title]}
            </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
