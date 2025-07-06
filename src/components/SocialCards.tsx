"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const SocialCards = () => {
  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/mrehanamjad/" },
    { name: "Github", href: "https://github.com/mrehanamjad/" },
    { name: "X", href: "" },
  ];

  return (
    <section className="w-full py-20 container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-sm:mx-2">
        {socialLinks.map((sl, index) => (
          <motion.div
            key={sl.name}
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.2,
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <Link
              href={sl.href}
              target="_blank"
              className="group cursor-pointer"
            >
              <div className="bg-gray-900/50 hover:border-green-700 backdrop-blur-sm border-2 border-gray-800 rounded-3xl p-4 md:p-10 h-28 md:h-36 flex justify-between items-center hover:bg-gray-800/50 transition-colors">
                <div className="text-gray-300 text-2xl font-medium group-hover:text-green-500 group-hover:underline underline-offset-4">
                  {sl.name}
                </div>

                <div className="text-gray-400 group-hover:text-green-600  group-hover:-translate-y-3 group-hover:translate-x-4 transition-all duration-200">
                  <ArrowUpRight size={70} strokeWidth={1} />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SocialCards;
