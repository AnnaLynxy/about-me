import { FC, ReactNode, useState } from "react";
import styled from "@emotion/styled";

/**
 * Components
 */
import FileDownloader from "./FileDownloader";

/**
 * Context
 */
import { useIsBroken } from "./IsBrokenContext";

const List = styled.ul({
  display: "flex",
  flexDirection: "column",
  gap: 10,

  "@media (min-width: 1200px)": {
    flexDirection: "row",
    gap: 40,
  },

  "& > li": {
    display: "flex",
    gap: 7,
    alignItems: "center",
  },
});

const Container = styled.header({
  marginBottom: 40,
  display: "flex",
  alignItems: "flex-start",

  flexDirection: "column",
  gap: 10,

  "@media (min-width: 1200px)": {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export const Header: FC = () => {
  const { isBroken } = useIsBroken();

  return (
    <Container
      style={{
        ...(isBroken && {
          gap: 0,
          flexDirection: "column",
        }),
      }}
    >
      <address>
        <List
          style={{
            ...(isBroken && {
              gap: 0,
              flexDirection: "column",
            }),
          }}
        >
          <li>
            👩‍💻
            <a href="https://github.com/AnnaLynxy" target="_blank">
              github.com/AnnaLynxy
            </a>
          </li>

          <li>
            ✉️
            <a href="mailto:anna.lynxy@gmail.com" target="_blank">
              anna.lynxy@gmail.com
            </a>
          </li>

          <li>
            👤
            <a
              href="https://www.linkedin.com/in/anna-grigorieva-wa/"
              target="_blank"
            >
              linkedin.com/in/anna-grigorieva-wa/
            </a>
          </li>

          <li>
            📱 <a href="tel:+12068042611">(206)-804-2611</a>
          </li>

          <li>📍 Seattle, WA</li>
        </List>
      </address>

      <FileDownloader
        fileName="GrigorievResume.pdf"
        filePath="/about-me/GrigorievResume.pdf"
        buttonTitle="Resume"
      />
    </Container>
  );
};
