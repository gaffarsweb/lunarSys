"use client";
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    projectDescription: '',
    technologies: '',
    timeline: '',
    budget: '',
    remark: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          mobile: formData.mobile,
          email: formData.email,
          interest: formData.technologies,
          remark: formData.remark,
          query: `Project Description: ${formData.projectDescription}\nTimeline: ${formData.timeline}\nBudget: ${formData.budget}`
        }),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage('Thank you for your submission! We will get back to you soon.');
        setFormData({
          fullName: '',
          mobile: '',
          email: '',
          projectDescription: '',
          technologies: '',
          timeline: '',
          budget: '',
          remark: ''
        });
      } else {
        setMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Start Your Project with Us
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            Fill out the form below to share your project idea. Our hourly rates are $8 - $15 depending on complexity. Let's build something amazing together!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">Mobile</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mt-6">
            <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-2">Project Description *</label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe your project idea, goals, and requirements..."
            ></textarea>
          </div>

          <div className="mt-6">
            <label htmlFor="technologies" className="block text-sm font-medium text-gray-700 mb-2">Preferred Technologies</label>
            <input
              type="text"
              id="technologies"
              name="technologies"
              value={formData.technologies}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., MERN Stack, Next.js, TypeScript, Blockchain"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
              <input
                type="text"
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 2-3 months"
              />
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
              <input
                type="text"
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., $5000 - $10000"
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="remark" className="block text-sm font-medium text-gray-700 mb-2">Additional Remarks</label>
            <textarea
              id="remark"
              name="remark"
              value={formData.remark}
              onChange={handleChange}
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Any additional information or questions..."
            ></textarea>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Project Idea'}
            </button>
          </div>

          {message && (
            <div className={`mt-4 p-4 rounded-md ${message.includes('Thank you') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
