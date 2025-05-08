import { useRef, useState } from "react";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

const Contact = ({ darkMode }) => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formsubmit.co/rishikadhote99@gmail.com", {
      method: "POST",
      body: new FormData(form.current),
    });

    if (response.ok) {
      setMessageSent(true);
      form.current.reset();
      setTimeout(() => setMessageSent(false), 10000);
    } else {
      console.error("Email failed to send");
    }
  };

  return (
    <section
      id="contact"
      className={`w-full py-20 transition-all duration-300 ${
        darkMode ? "bg-[#000000] text-[#E0E0E0]" : "bg-[#F8F9FA] text-[#e7357f]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Contact Title */}
        <h2
          className={`text-5xl font-extrabold ${
            darkMode ? "text-[#56A8F5]" : "text-[#e7357f]"
          }`}
        >
          Get in Touch
        </h2>
        <p className="mt-4 text-lg">
          Have questions or just want to connect? Reach out to me through the form below!
        </p>

        {/* Contact Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left - Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center space-x-3">
              <FaEnvelope className={`text-2xl ${darkMode ? "text-[#56A8F5]" : "text-[#e7357f]"}`} />
              <a href="mailto:rishikadhote@gmail.com" className="hover:underline">
                rishikadhote99@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaGithub className={`text-2xl ${darkMode ? "text-[#56A8F5]" : "text-[#e7357f]"}`} />
              <a href="https://github.com/Rishikadhote" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Rishikadhote
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaLinkedin className={`text-2xl ${darkMode ? "text-[#56A8F5]" : "text-[#e7357f]"}`} />
              <a href="https://www.linkedin.com/in/rishikadhote/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Rishika Dhote
              </a>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div
            className={`p-8 rounded-lg shadow-lg border transition-all duration-300 ${
              darkMode
                ? "bg-[#121212] border-[#56A8F5] hover:border-[#8AC9FF]"
                : "bg-white border-[#E58AB2] hover:border-[#03338d]"
            }`}
          >
            <h3
              className={`text-3xl font-semibold mb-6 ${
                darkMode ? "text-[#8AC9FF]" : "text-[#e7357f]"
              }`}
            >
              Send a Message
            </h3>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className={`w-full p-3 rounded-lg border focus:outline-none shadow-md
                  ${darkMode? "text-black" :"text-black" }`}
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className={`w-full p-3 rounded-lg border focus:outline-none shadow-md
                  ${darkMode? "text-black" :"text-black" }`}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className={`w-full p-3 rounded-lg border focus:outline-none shadow-md
                  ${darkMode? "text-black" :"text-black" }`}
              ></textarea>

              <button
                type="submit"
                className={`w-full py-3 font-bold rounded-lg transition transform hover:scale-105 shadow-md hover:shadow-lg ${
                  darkMode
                    ? "bg-[#56A8F5] text-black hover:bg-[#8AC9FF]"
                    : "bg-[#E58AB2] text-white hover:bg-[#03338d]"
                }`}
              >
                Send Message
              </button>
            </form>

            {/* Success Message */}
            {messageSent && (
              <p
                className={`mt-4 text-center font-semibold transition-all duration-300 ${
                  darkMode ? "text-[#56A8F5]" : "text-[#E58AB2]"
                }`}
              >
                ✅ Message Sent Successfully!
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;