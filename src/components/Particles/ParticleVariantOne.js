import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 150,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          shape: {
            type: "circle", // Shape of the particles (can be "circle", "edge", "polygon", etc.)
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
            random: false, // Whether opacity should be random
            anim: {
              enable: true,
              speed: 0.2,
              opacity_min: 0.05,
            },
          },
          size: {
            value: 2, // Base size of particles
            random: true, // Whether size should be random
            anim: {
              enable: true, // Whether to animate the size of particles
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right", // Direction of movement (e.g., "top", "bottom", "none")
            speed: 1, // Speed of movement
            enable: true, // Whether particles can move
            out_mode: "out", // Behavior when particles leave the canvas (e.g., "out", "bounce")
          },
        },
        interactivity: {
          detect_on: "canvas", // Where to detect interactions (canvas or window)
          events: {
            onClick: {
              enable: true, // Enables interaction on click
              mode: "push", // Action on click (can be "push", "remove", etc.)
            },
            onHover: {
              enable: true, // Enables interaction on hover
              mode: "repulse", // Action on hover (can be "grab", "bubble", "repulse")
            },
            resize: true, // Whether to resize particles on window resize
          },
          modes: {
            grab: {
              distance: 400, // Distance at which particles can be "grabbed"
              line_linked: {
                opacity: 1, // Opacity of the line that appears when grabbing
              },
            },
            bubble: {
              distance: 400, // Distance for bubble effect
              size: 40, // Size of bubbles when interacting
              duration: 2, // Duration of the bubble effect
              opacity: 8, // Final opacity of the bubble
              speed: 3, // Speed of the bubble effect
            },
            repulse: {
              distance: 200, // Distance for repulsion effect
              duration: 0.4, // Duration of the repulsion
            },
            push: {
              particles_nb: 1, // Number of particles to push on click
            },
            remove: {
              particles_nb: 2, // Number of particles to remove on click
            },
          },
        },
        retina_detect: true, // Enables detection for high-DPI screens (ensures particles render well on retina displays)
      }}
    />
  );
}

export default Particle;
