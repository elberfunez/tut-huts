'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    _honey: '', // Honeypot field
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors: typeof errors = { firstName: '', lastName: '', email: '', message: '' };
    let valid = true;

    if (!form.firstName.trim()) {
      newErrors.firstName = 'First name is required.';
      valid = false;
    }
    if (!form.lastName.trim()) {
      newErrors.lastName = 'Last name is required.';
      valid = false;
    }
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid.';
      valid = false;
    }
    if (!form.message.trim()) {
      newErrors.message = 'Message is required.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  if (!validate()) {
    e.preventDefault();
  }
};

  return (
    <main className="min-h-screen bg-[#f9fafb] flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
          Get in Touch
        </h1>
        <form
          action="https://formsubmit.co/88940ae549c7c6473129171b35734681"
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-6"
          noValidate
        >
          {/* Hidden FormSubmit configurations */}
          <input
            type="hidden"
            name="_subject"
            value="New Contact Form Submission"
          />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for contacting Tut Huts RV Park! We'll get back to you soon."
          />
          <input
            type="hidden"
            name="_template"
            value="table"
          />
          <input
            type="hidden"
            name="_captcha"
            value="true"
          />
          {/* Honeypot field */}
          <input
            type="text"
            name="_honey"
            value={form._honey}
            onChange={handleChange}
            className="hidden"
            style={{ display: 'none' }}
            aria-hidden="true"
          />

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block font-medium text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.firstName
                    ? 'border-red-500 focus:ring-red-400'
                    : 'border-gray-200 focus:ring-[#31b0b4]'
                }`}
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>

            <div className="w-1/2">
              <label className="block font-medium text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.lastName
                    ? 'border-red-500 focus:ring-red-400'
                    : 'border-gray-200 focus:ring-[#31b0b4]'
                }`}
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.email
                  ? 'border-red-500 focus:ring-red-400'
                  : 'border-gray-200 focus:ring-[#31b0b4]'
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 ${
                errors.message
                  ? 'border-red-500 focus:ring-red-400'
                  : 'border-gray-200 focus:ring-[#31b0b4]'
              }`}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="bg-[#31b0b4] text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-[#2a9ba0] active:bg-[#288e93] focus:outline-none focus:ring-2 focus:ring-[#31b0b4] transition-all duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}