import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        form.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setStatusMessage('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          setStatusMessage('Failed to send message. Please try again later.');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setStatusMessage(''), 5000);
      });
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Contact Us</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4 bg-blue-50 p-6 rounded-lg shadow-md">
          <div>
            <label className="block text-sm font-medium text-blue-700">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-700">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-700">Phone Number</label>
            <input
              type="tel"
              name="user_phone"
              required
              className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-700">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="mt-1 block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {statusMessage && (
            <p className="text-center text-sm text-green-600 mt-2">{statusMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
