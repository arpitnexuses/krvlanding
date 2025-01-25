'use client';
import { useState } from 'react';

export default function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Thank you! We will contact you soon.');
        setFormData({ firstName: '', lastName: '', email: '', companyName: '' });
      } else {
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage(`Something went wrong: ${error instanceof Error ? error.message : 'Please try again.'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-[#344054] text-sm font-medium mb-1.5">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-3 md:px-3.5 py-2 md:py-2.5 bg-white border border-[#D0D5DD] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0052CC] focus:border-[#0052CC] text-sm md:text-base"
          />
        </div>
        <div className="flex-1">
          <label className="block text-[#344054] text-sm font-medium mb-1.5">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-3 md:px-3.5 py-2 md:py-2.5 bg-white border border-[#D0D5DD] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0052CC] focus:border-[#0052CC] text-sm md:text-base"
          />
        </div>
      </div>
      <div>
        <label className="block text-[#344054] text-sm font-medium mb-1.5">
          Company Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="you@company.com"
          className="w-full px-3 md:px-3.5 py-2 md:py-2.5 bg-white border border-[#D0D5DD] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0052CC] focus:border-[#0052CC] placeholder:text-[#667085] text-sm md:text-base"
        />
      </div>
      <div>
        <label className="block text-[#344054] text-sm font-medium mb-1.5">
          Company Name
        </label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
          className="w-full px-3 md:px-3.5 py-2 md:py-2.5 bg-white border border-[#D0D5DD] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0052CC] focus:border-[#0052CC] text-sm md:text-base"
        />
      </div>
      {message && (
        <div className="rounded-lg p-4 bg-emerald-50 border border-emerald-200 animate-fade-in">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg 
                className="h-5 w-5 text-emerald-500" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                  clipRule="evenodd" 
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-emerald-800">
                {message}
              </p>
            </div>
          </div>
        </div>
      )}
      <button 
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#0052CC] text-white py-3 px-5 rounded-lg font-semibold text-base hover:bg-[#003D99] transition-colors mt-8 disabled:opacity-50"
      >
        {isSubmitting ? 'Submitting...' : 'Book a Consultation'}
      </button>
    </form>
  );
} 