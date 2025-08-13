"use client";
import React, { useState } from "react";
import { BiCode, BiGlobe } from "react-icons/bi";
import { CgSmartphone } from "react-icons/cg";
import projects from "@/data/projects.json";
import ProjectPgCard from "@/components/ProjectPgCard";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { key: "all", label: "All Projects", icon: BiGlobe },
    { key: "full-stack", label: "Full Stack", icon: BiCode },
    { key: "frontend", label: "Frontend", icon: CgSmartphone },
    // { key: "backend", label: "Backend", icon: BiServer },
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
             <ProjectPgCard key={idx} {...project} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Portfolio;
