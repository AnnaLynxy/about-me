import { FC } from "react";
import styled from "@emotion/styled";

/**
 * Context
 */
import { useIsBroken } from "./IsBrokenContext";

interface Props {
  children: string;
}

const Container = styled.span({
  whiteSpace: "pre",
  background: "linear-gradient(to right,rgb(114, 37, 203), #1EAE98)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  display: "inline-block",
});

export const RainbowText: FC<Props> = ({ children }) => {
  const { isBroken } = useIsBroken();

  if (!isBroken) {
    return <Container aria-label={children}>{children}</Container>;
  }

  return <>{children}</>;
};
