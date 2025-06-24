"use client";
import { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  MessageSquare,
} from "lucide-react";

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mjkreyag", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitResult({
          success: true,
          message:
            "Thank you! Your message has been received. We'll get back to you shortly.",
        });

        // Clear form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        const data = await response.json();
        setSubmitResult({
          success: false,
          message:
            data?.errors?.[0]?.message ||
            "Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitResult(null);
      }, 5000);
    }
  };

  return (
    <div className="pt-16 md:pt-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6" />
          <p className="text-xl max-w-3xl mx-auto">
            Have questions about our products or need assistance? Get in touch
            with our team today.
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 bg-white">
        <div
          className={`max-w-7xl mx-auto px-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Our Location
                    </h3>
                    <p className="text-gray-700">
                      Budhanilkantha-12, Kathmandu, Nepal
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Phone Number
                    </h3>
                    <p className="text-gray-700">+977-9801009929</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Email Address
                    </h3>
                    <p className="text-gray-700">info@autoforcenepal.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Business Hours
                    </h3>
                    <p className="text-gray-700">
                      Sunday–Friday, 10:00 AM – 5:00 PM
                    </p>
                    <p className="text-gray-700">Saturday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>

              {submitResult && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    submitResult.success
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {submitResult.message}
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Full Name"
                      className="pl-10 py-3 w-full border rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="pl-10 py-3 w-full border rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-1 font-medium">
                    Subject
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400" />
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="pl-10 py-3 w-full border rounded-md"
                    >
                      <option value="">Select a subject</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Technical Support">
                        Technical Support
                      </option>
                      <option value="Dealership Inquiry">
                        Dealership Inquiry
                      </option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    placeholder="How can we help you?"
                    className="w-full border rounded-md p-3"
                  ></textarea>
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-6 py-3 rounded-md text-white font-medium bg-red-600 hover:bg-red-700 transition-colors duration-200 ${
                    isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
