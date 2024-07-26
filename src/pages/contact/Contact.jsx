const ContactUs = () => {
  return (
    <div className="max-w-7xl mx-auto py-20">
      <div className="strokeme">
        <h1 className="text-black text-center text-5xl font-medium">
          Contact US
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-4">Get in touch with us</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">NICHOLAS T.</h3>
            <p>
              WhatsApp:
              <a href="https://wa.me/+60176661994" className="text-blue-500">
                +60176661994
              </a>
            </p>
            <p>
              Email:
              <a href="mailto:nicholas@huruf.gg" className="text-blue-500">
                nicholas@huruf.gg
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">MAHATHIR K.</h3>
            <p>
              WhatsApp:
              <a href="https://wa.me/+601121743965" className="text-blue-500">
                +601121743965
              </a>
            </p>
            <p>
              Email:
              <a href="mailto:mahathir@huruf.gg" className="text-blue-500">
                mahathir@huruf.gg
              </a>
            </p>
          </div>
        </div>

        <div className="flex-1 px-4">
          <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
          <p className="mb-4">
            Block A-05-08, Oasis Square, 2, Jln PJU 1A/7, <br />
            Oasis Ara Damansara, 47301 Petaling Jaya, <br />
            Selangor
          </p>
          <div className="w-full">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3182.2842084411316!2d101.5716598156044!3d3.1136767977408596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4cb5abcf64f1%3A0x8a8dd3f61b6d7f02!2sOasis%20Square%20Ara%20Damansara!5e0!3m2!1sen!2smy!4v1646884920474!5m2!1sen!2smy"
              width="100%"
              height="500"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;