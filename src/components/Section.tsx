import { FC, ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export const Section: FC<Props> = ({ title, children }) => (
  <section>
    <h2>{title}</h2>

    {children}
  </section>
);
