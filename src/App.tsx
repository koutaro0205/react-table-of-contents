import "./App.css";
import TableOfContents from "./TableOfContents";
import ReactMarkdown from "react-markdown";
import { MARKDOWN_CONTENT } from "./markdownContents";
import { Heading } from "./Heading";

function App() {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <div style={{ width: 180 }}>
        {/* 作成したTableOfContentsコンポーネント */}
        <TableOfContents markdownContent={MARKDOWN_CONTENT} />
      </div>
      <div>
        <span>記事本文</span>
        {/* IDを持ったHeadingコンポーネントを割り当てる */}
        <ReactMarkdown components={{ h1: Heading, h2: Heading, h3: Heading }}>
          {MARKDOWN_CONTENT}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
