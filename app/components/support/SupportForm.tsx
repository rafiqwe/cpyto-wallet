"use client";

import { useState } from "react";

export default function SupportFormLight() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Add form submissio logic here or api call

    setTimeout(() => {
      setLoading(false);
      setFormData({
        fullName: "",
        email: "",
        message: "",
      });
    }, 1500);
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="flex w-full items-center justify-center pt-10 pb-24 px-4">
      <div className="md:w-4xl w-full max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto rounded-2xl border border-slate-200 bg-white shadow-xl">
        <form className="px-8 w-full  py-8 space-y-5" onSubmit={handleSubmit}>
          <div className="flex md:flex-row flex-col justify-between items-center w-full gap-5">
            <div className="w-full">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Full name
              </label>
              <input
                type="text"
                required
                placeholder="John Doe"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="w-full">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email address
              </label>
              <input
                type="email"
                required
                placeholder="you@gmail.com"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Describe your use case
            </label>
            <textarea
              required
              rows={6}
              placeholder="Tell us how we can help you..."
              className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500"
              name="message"
              onChange={handleChange}
              value={formData.message}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-500 transition py-3 text-sm font-semibold text-white shadow-md shadow-indigo-500/30 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Submit Request"}
          </button>
        </form>
      </div>
    </section>
  );
}
