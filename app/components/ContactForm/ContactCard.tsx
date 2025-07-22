import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, X } from "lucide-react";

interface ContactCardProps {
  onClose: () => void;
}

export default function ContactCard({ onClose }: ContactCardProps) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      //submitting the form data
      const response = await fetch("/api/telegram-connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          message,
        }),
      });
      if (response.ok) {
        setIsSending(false);
        setIsSent(true);

        //reset form after successful submit
        setTimeout(() => {
          setEmail("");
          setMessage("");
          setIsSent(false);
        }, 2000);
      } else {
        console.error("form submission failed");
        setIsSending(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSending(false);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-[90%] max-w-md rounded-xl bg-zinc-800 text-white p-6 shadow-xl"
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 p-1 rounded-full hover:bg-zinc-700 transition-colors "
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-bold mb-4">Contact</h2>
        {isSent ? (
          <motion.div
            className="flex flex-col items-center justify-center py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-zinc-600 mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 10, stiffness: 100 }}
            >
              <Send className="w-8 h-8" />
            </motion.div>
            <p className="text-center font-medium">Message Send successfully</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-zinc-700 rounded-md border border-zinc-400 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-zinc-300"
                placeholder="your@email.com"
                required
              />
            </div>

            {/* form message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 bg-zinc-700 rounded-md border border-zinc-400 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-zinc-300 min-h-[100px] resize-none"
                placeholder="Type your message here ..."
                required
              />
              <input type="hidden" name="_next" value="https://devdaman.com" />
              <input type="hidden" name="_captcha" value="false" />
            </div>
            {/* submit button and action */}
            <motion.button
              type="submit"
              className="w-full py-2 px-4 bg-white text-zinc-600 font-medium rounded-md hover:bg-blue-50 transition-colors flex items-center justify-center"
              whileTap={{ scale: 0.95 }}
              disabled={isSending}
            >
              {isSending ? (
                <motion.div
                  className="w-5 h-5 border-2 border-zinc-600 border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
              ) : (
                "Send Message"
              )}
            </motion.button>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}

