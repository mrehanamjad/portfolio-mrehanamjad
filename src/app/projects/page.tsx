"use client";
import React, { useState } from "react";
import { BiCode, BiGlobe, BiServer } from "react-icons/bi";
import { CgSmartphone } from "react-icons/cg";
import { FaChevronRight, FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import projects from "@/data/projects.json";
import Image from "next/image";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { key: "all", label: "All Projects", icon: BiGlobe },
    { key: "full-stack", label: "Full Stack", icon: BiCode },
    { key: "frontend", label: "Frontend", icon: CgSmartphone },
    { key: "backend", label: "Backend", icon: BiServer },
    // { key: "mobile", label: "Mobile", icon: FiZap },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(
          (project) => project.category.toLowerCase() === activeFilter
        );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className=" overflow-hidden py-20 px-4 md:p-20">
        <div className="text-center ">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            <span className="text-sm text-gray-300">
              Available for new projects
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            PROJECTS
          </h1>
          <p className="md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing full-stack applications, innovative solutions, and
            cutting-edge technologies that solve real-world problems with
            elegant code.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <section className="py-8 ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`flex items-center px-6 py-3 w- rounded-full border transition-all duration-300 ${
                    activeFilter === filter.key
                      ? "bg-green-800 border-green-600 text-white drop-shadow-2xl shadow-blue-600/25"
                      : "bg-gray-800 border-gray-700 text-gray-300 hover:border-gray-600 hover:bg-gray-700"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    width={1000}
                    height={1000}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-800 text-sm rounded-full border border-gray-700 hover:border-blue-500/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group/btn"
                    >
                      <FaGithub className="w-4 h-4 mr-2" />
                      <span>Code</span>
                      <FaChevronRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        className="flex items-center px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors group/btn"
                      >
                        <FiExternalLink className="w-4 h-4 mr-2" />
                        <span>Live Demo</span>
                        <FaChevronRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Ready to turn your ideas into reality? I'm always excited to work on
            innovative projects that push the boundaries of what's possible with
            modern technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              Start a Project
            </button>
            <button className="px-8 py-4 border border-gray-600 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300">
              Download Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
