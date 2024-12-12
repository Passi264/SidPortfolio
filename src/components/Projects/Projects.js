import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.jpeg";
import chatify from "../../Assets/Projects/chatify.jpeg";
import suicide from "../../Assets/Projects/suicide.jpeg";
import bitsOfCode from "../../Assets/Projects/blog.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects that I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Banagalore House Predictor"
              description="Bangalore House Price Predictor is a machine learning web app that estimates property prices in Bangalore based on features like location, square footage, bedrooms, and bathrooms. Trained on real estate data, it offers insights across different localities and property types. Key features include a user-friendly Streamlit interface, accurate predictions, and flexible input options to customize property details."
              ghLink="https://github.com/sidd7200/price_predictor?tab=readme-ov-file"
              demoLink="https://pricepredictor-2w9q8k3xaizff9rzar5bd2.streamlit.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Movie Recommender System"
              description="The Movie Recommender System is a web app built with Streamlit that suggests similar movies based on user selection, using a precomputed similarity matrix. Users can select a movie to receive five recommendations, each displayed with its poster fetched from TMDb. Built with Python, Pandas, Pickle, and Requests, this app provides an intuitive way to discover movies"
              ghLink="https://github.com/sidd7200/Moviesystem"
              demoLink="https://moviesystem-th5fsbr89efipszsghgzte.streamlit.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Netflix Data Analysis Dashboard"
              description="This Netflix Data Dashboard offers an analytical view of Netflix's content library, highlighting trends and distributions across various metrics. It visualizes the total movies and TV shows by country, ratings distribution, and the top 10 genres, with genres like Documentaries and Dramas leading. The dashboard includes a pie chart for the distribution of movies versus TV shows and a line chart tracking the growth of Netflix’s content over the years. Users can filter by genre, rating, release year, and more to gain detailed insights into the evolution and reach of Netflix’s catalog."
              ghLink="https://github.com/sidd7200/Netflix-Data-Analysis?tab=readme-ov-file"
              demoLink="https://github.com/sidd7200/Netflix-Data-Analysis/blob/main/NETFLIX_2.pptx"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Cricket Analysis Dashboard"
              description="This cricket analytics project leverages ESPN data to create interactive Power BI dashboards analyzing player performance in the 2024 World Cup. Key dashboards include Player Analysis for roles like Power Hitters and Finishers, Player Profile for detailed stats like strike rate and boundary percentage, and the Final 12 Selection to choose a team based on batting and bowling metrics. Built with Python for data scraping and Power BI for visualizations, this project offers a comprehensive view of player performance."
              ghLink="https://github.com/sidd7200/cricketdashboard"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
