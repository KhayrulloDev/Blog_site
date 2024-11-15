"use client";
import { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser } from 'react-icons/fa';


const Contact = () => {
    const [form, setForm] = useState({
        phone: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic
        console.log('Form submitted:', form);
        setIsSubmitted(true);
        // Clear form
        setForm({ phone: '', message: '' });
        // Hide message after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white p-4 overflow-hidden">
            {/* Background animation for falling binary digits */}

            {/* Your Information */}
            <div className="relative bg-gray-800 p-8 rounded shadow-md w-full max-w-md mb-8 text-center transform transition-transform duration-500 hover:scale-105 z-20">
                <h1 className="text-3xl font-bold mb-4">Contact</h1>
                <div className="flex flex-col items-start space-y-2">
                    <div className="flex items-center">
                        <FaUser className="mr-2" />
                        <span>Xayrullo Madaminov</span>
                    </div>
                    <div className="flex items-center">
                        <FaEnvelope className="mr-2" />
                        <span>khayrullo.devs@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                        <FaPhone className="mr-2" />
                        <span>+998 94 863 66 665</span>
                    </div>
                    <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-2" />
                        <span>Fergana, Uzbekistan</span>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="relative bg-gray-800 p-8 rounded shadow-md w-full max-w-md z-10">
                <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-300 font-bold mb-2">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
                            placeholder="Your phone number"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-300 font-bold mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
                            placeholder="Your message"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200">Send Message</button>
                </form>
                {isSubmitted && (
                    <div className="mt-4 p-2 bg-green-500 text-white text-center rounded">
                        Send Successfully!
                    </div>
                )}
            </div>
        </div>
    );
};

export default Contact;
