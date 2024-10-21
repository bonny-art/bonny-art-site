import Instagram from '@/../public/images/icons/instagram.svg';
import Facebook from '@/../public/images/icons/facebook.svg';
import Mail from '@/../public/images/icons/mail.svg';

export interface SocialProps {
  section: 'contact' | 'footer' | 'mobile';
}

export const iconMap = {
  instagram: Instagram as React.FC<React.SVGProps<SVGSVGElement>>,
  facebook: Facebook as React.FC<React.SVGProps<SVGSVGElement>>,
  mail: Mail as React.FC<React.SVGProps<SVGSVGElement>>,
};
