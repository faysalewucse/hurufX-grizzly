import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react";

const Social = ({ flex = "flex-col text-white" }) => {
  return (
    <div className={`flex ${flex} gap-6`}>
      <XLogo className="social-icon" weight="fill" />
      <FacebookLogo className="social-icon" weight="fill" />
      <InstagramLogo className="social-icon" />
      <LinkedinLogo className="social-icon" weight="fill" />
    </div>
  );
};

export default Social;
