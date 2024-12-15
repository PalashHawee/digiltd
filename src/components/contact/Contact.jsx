import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Form submitted successfully!");
  };

  return (
    <div className=" text-white flex justify-center items-center p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Contact</h2>
          <h3 className="text-4xl font-semibold">I Want to Hear from You</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <p>20, Somewhere in the world</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <i className="fas fa-envelope"></i>
              </div>
              <p>hello@dodo.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <i className="fas fa-phone-alt"></i>
              </div>
              <p>+123 456 7890</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white text-gray-800 p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full p-3 border border-gray-300 rounded"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full p-3 border border-gray-300 rounded"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Your Phone"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10,15}$/,
                    message: "Invalid phone number",
                  },
                })}
                className="w-full p-3 border border-gray-300 rounded"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                {...register("subject", { required: "Subject is required" })}
                className="w-full p-3 border border-gray-300 rounded"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>
            <div>
              <textarea
                placeholder="Write your message here"
                {...register("message", { required: "Message is required" })}
                className="w-full p-3 border border-gray-300 rounded"
                rows="4"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded font-semibold hover:bg-blue-700 transition"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
