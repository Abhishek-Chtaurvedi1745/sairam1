import React, { useState } from "react";
import { X } from "lucide-react";
import { useCounselling } from "./CounsellingContext";

function CounsellingPopup() {
  const { open, closePopup } = useCounselling();

  const [formData, setFormData] = useState({
    fullName: "",
    number: "",
    city: "",
    course: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
    setSuccess("");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.fullName)) {
      newErrors.fullName = "Only alphabets allowed";
    }

    if (!formData.number.trim()) {
      newErrors.number = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.number)) {
      newErrors.number = "Phone number must be 10 digits";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.city)) {
      newErrors.city = "City must contain only alphabets";
    }

    if (!formData.course) {
      newErrors.course = "Please select a course";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);
      const response = await fetch(
        "https://sairambackend-fzn3.onrender.com/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      setSuccess(data.message || "Submitted successfully!");
      setFormData({
        fullName: "",
        number: "",
        city: "",
        course: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setSuccess("");
      setErrors({ submit: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
        onClick={closePopup}
      />

      <div className="relative w-full max-w-[480px] max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl z-10 animate-popup-in">
        <button
          type="button"
          onClick={closePopup}
          className="absolute top-3 right-3 p-1.5 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition z-20"
          aria-label="Close"
        >
          <X size={22} />
        </button>

        <div className="bg-gradient-to-r from-[#49BBBD] to-[#2F8A8C] px-6 pt-7 pb-5 rounded-t-2xl text-center">
          <h2 className="text-white text-[22px] sm:text-[24px] font-bold leading-snug pr-6">
            Get Free MBBS & B-Tech Counselling
          </h2>
          <p className="text-white/90 text-sm mt-2 leading-relaxed">
            Fill out the form below and our admission expert will contact you
            shortly.
          </p>
        </div>

        <div className="p-6">
          {success && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg border border-green-300 text-sm">
              {success}
            </div>
          )}
          {errors.submit && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg border border-red-300 text-sm">
              {errors.submit}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                } focus:border-[#49BBBD] outline-none`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="number"
                placeholder="Number"
                value={formData.number}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.number ? "border-red-500" : "border-gray-300"
                } focus:border-[#49BBBD] outline-none`}
              />
              {errors.number && (
                <p className="text-red-500 text-sm mt-1">{errors.number}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.city ? "border-red-500" : "border-gray-300"
                } focus:border-[#49BBBD] outline-none`}
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">{errors.city}</p>
              )}
            </div>

            <div>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.course ? "border-red-500" : "border-gray-300"
                } ${formData.course === "" ? "text-gray-400" : "text-black"}
                focus:border-[#49BBBD] outline-none bg-white`}
              >
                <option value="" disabled>
                  Select Course
                </option>
                <option value="Engineering">Engineering</option>
                <option value="Medical">Medical</option>
                <option value="Management">Management</option>
                <option value="Humanities">Humanities</option>
                <option value="Law">Law</option>
              </select>
              {errors.course && (
                <p className="text-red-500 text-sm mt-1">{errors.course}</p>
              )}
            </div>

            <textarea
              rows="3"
              name="message"
              placeholder="Message (Optional)"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#49BBBD] outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-[#49BBBD] hover:bg-[#38a5a7] text-white font-semibold py-3 rounded-lg shadow-md transition disabled:opacity-70"
            >
              {loading ? "Sending..." : "Submit Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CounsellingPopup;
