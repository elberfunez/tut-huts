'use client';

import { useState } from 'react';

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    checkInDate: '',
    lengthOfStay: 'Monthly',
    _honey: '', // Honeypot field
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    checkInDate: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = { name: '', phone: '', checkInDate: '' };
    let valid = true;

    if (!form.name.trim()) {
      newErrors.name = 'Name is required.';
      valid = false;
    }
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
      valid = false;
    }
    if (!form.checkInDate.trim()) {
      newErrors.checkInDate = 'Check-in date is required.';
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
        <h1 className="text-3xl font-semibold text-gray-900 mb-2 text-center">
          Book Your Stay
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Submit your info below and we&apos;ll reach out to confirm your
          reservation.
        </p>
        <form
          action="https://formsubmit.co/tuthutsrvpark@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-6"
          noValidate
        >
          {/* Hidden FormSubmit configurations */}
          <input type="hidden" name="_subject" value="New Booking Request" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for your booking request at Tut Huts RV Park! We'll be in touch shortly to confirm."
          />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="true" />
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

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.name
                  ? 'border-red-500 focus:ring-red-400'
                  : 'border-gray-200 focus:ring-[#31b0b4]'
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.phone
                  ? 'border-red-500 focus:ring-red-400'
                  : 'border-gray-200 focus:ring-[#31b0b4]'
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Check-in Date
            </label>
            <input
              type="date"
              name="checkInDate"
              value={form.checkInDate}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.checkInDate
                  ? 'border-red-500 focus:ring-red-400'
                  : 'border-gray-200 focus:ring-[#31b0b4]'
              }`}
            />
            {errors.checkInDate && (
              <p className="text-red-500 text-sm mt-1">
                {errors.checkInDate}
              </p>
            )}
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Length of Stay
            </label>
            <select
              name="lengthOfStay"
              value={form.lengthOfStay}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#31b0b4]"
            >
              <option value="Monthly">Monthly</option>
              <option value="Weekly">Weekly</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#31b0b4] text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-[#2a9ba0] active:bg-[#288e93] focus:outline-none focus:ring-2 focus:ring-[#31b0b4] transition-all duration-300 transform hover:scale-105"
          >
            Submit Request
          </button>
        </form>
      </div>
    </main>
  );
}
