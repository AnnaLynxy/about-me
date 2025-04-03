import { FC } from "react";

/**
 * Context
 */
import { useIsBroken } from "./IsBrokenContext";

interface Props {
  children: string;
}

export const RainbowText: FC<Props> = ({ children }) => {
  const { isBroken } = useIsBroken();

  if (!isBroken) {
    return (
      <span
        aria-label={children}
        css={{
          whiteSpace: "pre",
          background: "linear-gradient(to right,rgb(114, 37, 203), #1EAE98)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
        }}
      >
        {children}
      </span>
    );
  }

  return <>{children}</>;
};
