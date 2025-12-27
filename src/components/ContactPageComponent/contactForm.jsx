import { useState } from "react";

export default function ContactForm() {


  // Form fields state
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        subject: "",
        message: "",
    });

    // Status message
    const [status, setStatus] = useState("");

  // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();

    // Simple validation
        if (!formData.fullName || !formData.email || !formData.message) {
        setStatus("Please fill in all required fields.");
        return;
        }

    // Simulate sending message
    console.log("Contact Form Data:", formData);

    setStatus("Thank you! Your message has been sent.");

    
        setFormData({
            fullName: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
            <div
            className="w-full max-w-md bg-transparent
                        backdrop-blur-xs p-3 md:p-8 rounded-2xl 
                        shadow-xl border border-gray-200 
                        transition-opacity duration-500 
                        opacity-100" >
            <h2 className="text-xl md:text-3xl font-semibold text-white mb-4 md:mb-6 text-center">
                Get in Touch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-5">
                {/* Full Name */}
                <div>
                <label className="block text-sm font-medium text-white">
                    Full Name *
                </label>
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="text-white mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-transparent"
                />
                </div>

                {/* Email */}
                <div>
                <label className="block text-sm font-medium text-white">
                    Email Address *
                </label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className="text-white mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-transparent"
                />
                </div>

                {/* Subject */}
                <div>
                <label className="block text-sm font-medium text-white">
                    Subject
                </label>
                <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="text-white mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-transparent"
                />
                </div>

                {/* Message */}
                <div>
                <label className="block text-sm font-medium text-white">
                    Message *
                </label>
                <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="text-white mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-transparent resize-none"
                />
                </div>

                {/* Submit Button */}
                <button
                type="submit"
                className="w-full py-3 bg-blue-700 hover:bg-blue-400 text-white font-semibold rounded-lg shadow-md transition-all"
                >
                Send Message
                </button>

                {/* Status Message */}
                {status && (
                <p className="text-center text-sm text-white mt-2">
                    {status}
                </p>
                )}
            </form>
            </div>
    );
}
