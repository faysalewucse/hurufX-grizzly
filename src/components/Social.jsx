import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react";

const Social = () => {
  return (
    <div className="text-white flex flex-col gap-6">
      <XLogo className="social-icon" weight="fill" />
      <FacebookLogo className="social-icon" weight="fill" />
      <InstagramLogo className="social-icon" />
      <LinkedinLogo className="social-icon" weight="fill" />
    </div>
  );
};

export default Social;
