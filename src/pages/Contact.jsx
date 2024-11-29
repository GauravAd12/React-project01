import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

const Contact = () => {
  return (
    <section className="py-10 px-5">
      <div className="container mx-auto">
        <h1 className="text-5xl font-semibold">Contact Us</h1>

        <ul className="mt-8">
          <li className="flex items-center py-2 text-xl">
            <BiMap className="text-3xl text-blue-500" />
            <a href="https://maps.app.goo.gl/GYQLUubYbyMbUW8T6" className="px-2 hover:text-blue-600 hover:underline" target="_blank">
              Prithvi Path, The XYZ University, 56700
            </a>
          </li>
          <li className="flex items-center py-2 text-xl">
            <BiPhone className="text-3xl text-blue-500" />
            <a href="tel:9862130505" className="px-2 hover:text-blue-600 hover:underline">9862130505</a>
          </li>
          <li className="flex items-center py-2 text-xl">
            <BiEnvelope className="text-3xl text-blue-500" />
            <a href="adhikarygaurav99@gmail.com" className="px-2 hover:text-blue-600 hover:underline">codeit@gmail.com</a>
          </li>
        </ul>

        <div className="py-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.6621214710553!2d87.28371841101522!3d26.818885076606108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef4175e4f26a95%3A0x9b8526c7c4c7bc1c!2sCode%20IT!5e0!3m2!1sen!2snp!4v1723561988241!5m2!1sen!2snp"
            width="100%"
            height="600"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
