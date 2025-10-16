"use client"
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        fullName: "",
        mobile: "",
        email: "",
        interest: "",
        remark: "",
        query: ""
    });

    const [isVisible, setIsVisible] = useState(false);
    const [loading, setloading] = useState(false);
    const sectionRef = useRef(null);

    // Detect when component is in viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.3 }
        );
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle form submit
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("Form Data:", formData);
    //     alert("Form submitted!");
    // };

    // Inside handleSubmit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true)

        try {
            console.log('api called')
            const res = await fetch("/api/sendEmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            console.log('res', res)
            if (res.ok) {
                alert("Form submitted! Please check your email.");
                setFormData({
                    fullName: "",
                    mobile: "",
                    email: "",
                    interest: "",
                    remark: "",
                    query: ""
                });
            } else {
                alert("Failed to Submit Details.");
            }
        } catch (err) {
            console.error(err);
            alert("Something went wrong!");
        } finally {
            setloading(false)
        }
    };


    return (
        <div ref={sectionRef} className="w-full flex flex-col items-center px-4 py-10 bg-gray-50">
            {/* Map Section */}
            <div className="w-full max-w-5xl mb-10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2857.439691958261!2d75.24895599999999!3d19.911529500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb971d90d7932b%3A0x127677349058b0b5!2sInfiniaero%20space%20research%20and%20development!5e1!3m2!1sen!2sin!4v1756022845738!5m2!1sen!2sin"
                    className="w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                {/* <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>

            {/* Animated Form */}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full max-w-4xl bg-white rounded-lg shadow p-6 md:p-10"
                    >
                        <h2 className="text-xl font-semibold mb-6 text-center">Contact Us</h2>
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Full Name */}
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Full Name<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Enter value here"
                                    className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Mobile Number */}
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Mobile Number<span className="text-red-500">*</span>
                                </label>
                                <div className="flex">
                                    <span className="px-3 py-3 bg-gray-100 border border-r-0 rounded-l-md">
                                        +91
                                    </span>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        placeholder="Enter your mobile number"
                                        className="w-full border rounded-r-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            {/* Email Address */}
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Email Address<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email address"
                                    className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Interested In */}
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Interested in<span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="interest"
                                    value={formData.interest}
                                    onChange={handleChange}
                                    className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select value</option>
                                    <option>Career </option>
                                    <option>Investment  </option>
                                    <option>Technology Collaboration  </option>
                                    <option>Buy</option>
                                    <option>Service </option>
                                </select>
                            </div>

                            {/* Remark */}
                            {/* <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Remark</label>
                <input
                  type="text"
                  name="remark"
                  value={formData.remark}
                  onChange={handleChange}
                  placeholder="Enter your remark"
                  className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div> */}

                            {/* Query */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium mb-1">Query</label>
                                <textarea
                                    name="query"
                                    value={formData.query}
                                    onChange={handleChange}
                                    placeholder="Type your query here..."
                                    className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="md:col-span-2">
                                <motion.button
                                    disabled={loading}
                                    type="submit"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
                                >
                                    {loading ? 'Submitting...' : 'Submit your interest'}
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
