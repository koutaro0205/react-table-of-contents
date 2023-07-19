import React from "react";
import ReactMarkdown from "react-markdown";
import { LinkItem } from "./LinkItem";

type Props = {
  markdownContent: string;
};

const TableOfContents: React.FC<Props> = ({ markdownContent }) => {
  return (
    <nav>
      <span>目次</span>
      <ReactMarkdown
        allowedElements={["h1", "h2", "h3"]}
        components={{ h1: LinkItem, h2: LinkItem, h3: LinkItem }}
      >
        {markdownContent}
      </ReactMarkdown>
    </nav>
  );
};

export default TableOfContents;
