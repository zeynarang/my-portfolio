import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      options={{
        particles: {
          number: {
            value: 150,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          shape: {
            type: "circle", // Shape of the particles
            stroke: {
              width: 0, // Width of the particle's stroke
              color: "#000", // Color of the stroke
            },
            polygon: {
              nb_sides: 5, // Number of sides if the shape is a polygon
            },
          },
          opacity: {
            value: 0.5, // Base opacity of particles
            random: false,
            anim: {
              enable: true,
              speed: 0.2,
              opacity_min: 0.05,
              sync: false, // Whether to sync animations
            },
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: true,
              speed: 40, // Speed of the size animation
              size_min: 0.1, // Minimum size
              sync: false,
            },
          },
          line_linked: {
            enable: false, // Disable linking lines
            opacity: 0.03,
          },
          move: {
            direction: "right", // Movement direction
            speed: 1, // Movement speed
            enable: true,
            out_mode: "out",
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
            onhover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 1,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
