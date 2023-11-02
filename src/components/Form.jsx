import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const keys = import.meta.env;
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(keys.VITE_SERVICE_ID, keys.VITE_TEMPLATE_ID, form.current, keys.VITE_USERKEY_ID)
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          setFormData({
            user_name: '',
            user_email: '',
            message: '',
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const closeSuccessMessage = () => {
    setIsSent(false);
  };

  return (
    <div id='ContactUs' className="max-w-[1240px] m-auto md:pl-8 p-4 py-4 bg-blue-50">
      <h1 className='py-4 text-4xl font-bold text-center text-black-800 uppercase'>
       Get <span className='text-[#327FC3]'>in touch</span>
      </h1>
      <div className="flex text-center justify-center">
        <p>
          I am always interested in hearing about new projects, so if you would like to chat please get in touch.
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="w-full  rounded p-4 mb-2">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            className=" appearance-none border rounded w-full py-2 px-3 text-black-700 leading-tight focus:outline-none"
            type="text"
            name="user_name"
            placeholder="Name"
            value={formData.user_name}
            onChange={handleInputChange}
            required
            maxLength="30"
          />
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-black-700 leading-tight focus:outline-none"
            type="email"
            name="user_email"
            placeholder="Email"
            value={formData.user_email}
            onChange={handleInputChange}
            required
          />
        </div>
        <textarea
          className="mt-4 shadow appearance-none border rounded w-full py-2 px-3 bg-[#] leading-tight focus:outline-none focus:shadow-outline"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleInputChange}
          required
          maxLength="500"
        ></textarea>
        <div className="flex items-center justify-between">
          <button
            className="bg-gray-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
      {isSent && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white shadow-md rounded p-4 text-center">
            <p className="text-green-500 font-semibold mb-4">
              Form submitted successfully. Thank you!
            </p>
            <button
              className="bg-gray-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={closeSuccessMessage}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;

