import React from "react";

const projects = [
  {
    title: "Modern House",
    image: "/images/FILM8.jpg",
    description: "A modern residential project focused on sustainability and open spaces."
  },
  {
    title: "Urban Park",
    image: "/images/urban-park.jpg",
    description: "A revitalized green space in the city center."
  }
  // Add more projects here
];

function Portfolio() {
  return (
    <section style={{ padding: "4rem 2vw" }}>
      <h2>Portfolio</h2>
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        {projects.map((project, i) => (
          <div key={i} style={{ width: "300px", border: "1px solid #eee", padding: "1rem", borderRadius: "8px" }}>
            <img src={project.image} alt={project.title} style={{ width: "100%", borderRadius: "4px" }} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;