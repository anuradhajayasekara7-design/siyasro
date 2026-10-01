import Image from 'next/image';
import logo from '../assets/logo.png';

export default function BrandLogo({ priority = false }) {
  return <Image className="brand-logo" src={logo} alt="Siyasro Advertising — Our creations begin with your thoughts" priority={priority} sizes="180px" />;
}
