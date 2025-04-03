import { FC } from "react";
import styled from "@emotion/styled";

interface Props {
  buttonTitle: string;
  filePath: string;
  fileName?: string;
}

const Button = styled.button({
  border: "1px solid",
  color: "initial",
  background: "none",
  borderRadius: 5,
  padding: "13px 15px 10px",
  fontSize: "2.4rem",
  cursor: "pointer",

  "&:hover": {
    background: "#eee",
  },
});

const FileDownloader: FC<Props> = ({ buttonTitle, filePath, fileName }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName || filePath.split("/").pop() || "download";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button aria-label={buttonTitle} onClick={handleDownload}>
      {buttonTitle}
    </Button>
  );
};

export default FileDownloader;
