"use client";
import { API_URL } from "@/constant";
import axios from "axios";
import React, { useState } from "react";
import { PiEnvelopeThin } from "react-icons/pi";
import { toast } from "react-toastify";

const Subscriber = () => {
  const [email, setEmail] = useState<string>("");
  const handleSubscribe = async (e: any) => {
    e.preventDefault();
    if (email.trim() !== "") {
      try {
        const response = await axios.post(`${API_URL}/subscribes`, {
          email: email,
        });
        if (response?.status === 201) {
          setEmail("");
          toast.success("Subscribed Successfully!");
        }
      } catch (error) {
        console.log(error);
        toast.error("Subscribtion Error!");
      }
    }
  };
  return (
    <div className="flex items-end">
      <form
        className="relative inline-block subscribe-form"
        onSubmit={handleSubscribe}
      >
        <input
          type="email"
          className="px-3 py-2 border-b-2  focus:ring-0 focus:border-blue-500 outline-none placeholder:font-gotham  placeholder:font-light placeholder:text-sm"
          placeholder="Enter your email..."
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">
          <span className=" absolute top-[50%] translate-y-[-50%] right-0">
            <PiEnvelopeThin className="subscribe-icon w-5 h-5" />
          </span>
        </button>
      </form>
    </div>
  );
};

export default Subscriber;
