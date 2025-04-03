import styled from "@emotion/styled";
import { CSSProperties, FC } from "react";

interface Props {
  flexDirection?: CSSProperties["flexDirection"];
  listItems: string[];
  listItemsView?: "initial" | "tags";
}

const Container = styled.ul<Pick<Props, "flexDirection">>(
  ({ flexDirection = "column" }) => ({
    flexDirection,
    gap: 5,
    fontSize: "1.6rem",
    display: "flex",
    flexWrap: flexDirection === "row" ? "wrap" : "initial",
  })
);

const ListItem = styled.li<Pick<Props, "listItemsView">>(
  ({ listItemsView }) =>
    listItemsView === "tags" && {
      border: "1px solid #ddd",
      borderRadius: 20,
      padding: "5px 15px 3px",
    }
);

export const List: FC<Props> = ({
  listItems,
  flexDirection,
  listItemsView,
}) => (
  <Container flexDirection={flexDirection}>
    {listItems.map((listItem, index) => (
      <ListItem key={`list-item-${index}`} listItemsView={listItemsView}>
        {listItem}
      </ListItem>
    ))}
  </Container>
);
