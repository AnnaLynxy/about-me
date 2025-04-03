import styled from "@emotion/styled";
import { FC, ReactNode } from "react";

export interface ExperienceType {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  description?: ReactNode;
}

interface Props extends ExperienceType {}

const Container = styled.section({
  display: "flex",
  flexDirection: "column",
});

const Responsibilities = styled.div({
  paddingLeft: 20,
  borderLeft: "1px solid #eee",
  marginLeft: 20,
  marginTop: 10,
});

const Dates = styled.p({
  fontSize: "1.4rem",
});

export const Exerience: FC<Props> = ({
  jobTitle,
  company,
  startDate,
  endDate,
  description,
}) => (
  <Container>
    <Dates>
      {startDate} - {endDate}
    </Dates>

    <h3>{jobTitle}</h3>
    <h4>{company}</h4>

    {description && (
      <>
        <p>Responsibilities:</p>

        <Responsibilities>{description}</Responsibilities>
      </>
    )}
  </Container>
);
