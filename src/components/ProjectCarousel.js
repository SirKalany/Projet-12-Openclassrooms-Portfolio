"use client";

import Slider from "react-slick";
import projects from "../data/projects.json";
import Image from "next/image";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function ProjectCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <div className="w-full py-8">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center px-4"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={project.picture}
                alt={project.name}
                width={600}
                height={350}
                className="rounded-lg mb-4 object-cover mx-auto shadow-lg"
              />
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                {project.name}
              </h3>
              <p className="text-sm md:text-base mb-2">{project.description}</p>
              <div className="flex justify-center space-x-2 mt-2">
                {project.skills.map((logo, idx) => (
                  <Image
                    key={idx}
                    src={logo}
                    alt="Skill logo"
                    width={32}
                    height={32}
                  />
                ))}
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}
