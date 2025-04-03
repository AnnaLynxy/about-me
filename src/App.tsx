import { FC } from "react";
import styled from "@emotion/styled";

/**
 * Styles
 */
import { GlobalStyles } from "./styles/GlobalStyles";

/**
 * Components
 */
import { List } from "./components/List";
import { Modal } from "./components/Modal";
import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { Exerience } from "./components/Experience";
import { FixItModal } from "./components/FixItModal";
import { Experiences } from "./components/Experiences";
import { RainbowText } from "./components/RainbowText";

/**
 * Context
 */
import { IsBrokenProvider } from "./components/IsBrokenContext";

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 40,

  "& > section:not(:last-child)": {
    paddingBottom: 40,
    borderBottom: "1px solid #eee",
  },
});

const App: FC = () => (
  <IsBrokenProvider>
    <GlobalStyles />

    <FixItModal />

    <main>
      <Header />
      <h1>
        Hi there! 👋
        <br />
        My name is Anna Grigoriev and I'm a{" "}
        <RainbowText>Front-end Engineer</RainbowText>
      </h1>

      <Container>
        <Section title="Main skills">
          <List
            listItemsView="tags"
            flexDirection="row"
            listItems={[
              "JavaScript: ES6+",
              "TypeScript",
              "React.js",
              "HTML5/CSS3",
              "Emotion CSS",
              "Tailwind CSS",
              "Responsive Design",
              "Web Accessibility (a11y)",
              "Storybook",
              "Apollo Client",
              "API Context",
              "Redux",
              "GraphQL/Apollo",
              "REST",
              "Vite",
              "Webpack",
              "Cypress",
              "Jest",
              "React Testing Library",
              "MongoDB",
              "PostgreSQL",
            ]}
          />
        </Section>

        <Experiences />

        <Section title="Education">
          <Exerience
            jobTitle="BACHELOR, Computer Science | Information systems and technologies (in economics)"
            company="Belarusian State University of
Informatics and Radioelectronics"
            startDate="2011"
            endDate="2017"
          />
        </Section>

        <Section title="3 things I'd like to highlight about myself:">
          <List
            listItems={[
              "💫 Front-end engineering is my dream job because it lets me blend creativity, a passion for programming, and a tendency for structure things.",
              " 📈 I create UIs that are accessible, responsive, consistent, and highly performant.",
              " 🙋‍♀️ I take full ownership of my work and always strive to be reliable, hardworking, and committed to delivering top-quality results.",
            ]}
          />
        </Section>
      </Container>
    </main>
  </IsBrokenProvider>
);

export default App;
