import { FC } from "react";
import styled from "@emotion/styled";

/**
 * Comnponents
 */
import { List } from "./List";
import { Section } from "./Section";
import { ExperienceType, Exerience } from "./Experience";

const Container = styled.section({
  gap: 20,
  display: "flex",
  flexDirection: "column",
});

const EXPERIENCES: ExperienceType[] = [
  {
    jobTitle: "FRONT-END ENGINEER",
    company: "AstrumU",
    startDate: "06/2020",
    endDate: "03/2025",
    description: (
      <List
        listItems={[
          "Creating and supporting the UIs of the mid-sized projects using ReactJS and TypeScript",
          "Using styled components (@emotion)",
          "Integration with the backend using GraphQL/Apollo",
          "Bundle configuration using Vite and Webpack",
          "Maintaining the library of UI components used across the projects",
          "Writing and maintaining the integration/e2e (Cypress) and Unit (Jest) tests",
          "Maintaining Storybook",
          "Making the UIs accessible, responsive, consistent, and highly performant",
          "Creating tickets, reviewing PRs",
          "Interviewing",
        ]}
      />
    ),
  },
  {
    jobTitle: "FRONT-END DEVELOPER",
    company: "BuyerQuest",
    startDate: "03/2017",
    endDate: "06/2020",
    description: (
      <List
        listItems={[
          "Designing front-end solutions and features for b2b e-commerce platform based on Magento",
          "Creating front-end tickets and reviewing PRs",
          "Creating new and improving existing features using ReactJS, Redux, Vanilla JavaScript, HTML, and CSS(SASS)",
        ]}
      />
    ),
  },
  {
    jobTitle: "MAGENTO DEVELOPER",
    company: "BuyerQuest",
    startDate: "01/2016",
    endDate: "09/2016",
  },
  {
    jobTitle: "WEB DEVELOPER",
    company: "Astronim*",
    startDate: "02/2014",
    endDate: "05/2015",
  },
];

export const Experiences: FC = () => (
  <Section title="Experience">
    <Container>
      {EXPERIENCES.map((experience, index) => (
        <Exerience key={`experience-${index}`} {...experience} />
      ))}
    </Container>
  </Section>
);
