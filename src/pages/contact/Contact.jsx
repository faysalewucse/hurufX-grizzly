import { Envelope, WhatsappLogo } from "@phosphor-icons/react";
import contact from "../../assets/contact/contact.jpg";

const ContactUs = () => {
  return (
    <div className="relative">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3182.2842084411316!2d101.5716598156044!3d3.1136767977408596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4cb5abcf64f1%3A0x8a8dd3f61b6d7f02!2sOasis%20Square%20Ara%20Damansara!5e0!3m2!1sen!2smy!4v1646884920474!5m2!1sen!2smy"
        width="100%"
        height="700"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      <div className="absolute top-0 h-full w-full bg-gradient-to-b to-transparent via-transparent from-black"></div>
      <div className="flex gap-10 bg-white items-center">
        <img src={contact} alt="contact-image" className="w-1/2 flex-1" />
        <div className="w-1/2 flex flex-col">
          {/* <div className="w-full px-4">
            <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
            <p className="mb-4">
              Block A-05-08, Oasis Square, 2, Jln PJU 1A/7, <br />
              Oasis Ara Damansara, 47301 Petaling Jaya, <br />
              Selangor
            </p>
            <div className="w-full"></div>
          </div> */}
          <div className="">
            <h2 className="text-3xl font-bold mb-4">Get in touch with us</h2>
            <div className="flex flex-col gap-5">
              <div className="mb-6">
                <h3 className="text-xl font-semibold">NICHOLAS T.</h3>
                <p className="flex gap-1 items-center">
                  <WhatsappLogo weight="fill" className="" />
                  <a href="https://wa.me/+60176661994" className="">
                    +60176661994
                  </a>
                </p>
                <p className="flex gap-1 items-center">
                  <Envelope weight="fill" className="" />
                  <a href="mailto:nicholas@huruf.gg" className="">
                    nicholas@huruf.gg
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">MAHATHIR K.</h3>
                <p className="flex gap-1 items-center">
                  <WhatsappLogo weight="fill" className="" />
                  <a href="https://wa.me/+601121743965" className="">
                    +601121743965
                  </a>
                </p>
                <p className="flex gap-1 items-center">
                  <Envelope weight="fill" className="" />
                  <a href="mailto:mahathir@huruf.gg" className="">
                    mahathir@huruf.gg
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
