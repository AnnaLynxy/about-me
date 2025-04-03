import React from "react";
import { Global } from "@emotion/react";

/**
 * Styles
 */
import { resetStylesCss } from "./resetStylesCss";
import { globalStylesCss } from "./globalStylesCss";

/**
 * Context
 */
import { useIsBroken } from "../components/IsBrokenContext";

export const GlobalStyles = () => {
  const { isBroken } = useIsBroken();

  if (!isBroken) {
    return (
      <>
        <Global styles={resetStylesCss} />
        <Global styles={globalStylesCss} />
      </>
    );
  }
};
