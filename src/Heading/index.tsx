import React from "react";

type Props = {
  level: number;
  children: React.ReactNode & React.ReactNode[];
};

// 見出しにIDを付与するためのMarkdownコンポーネント

export const Heading: React.FC<Props> = ({ level, children }) => {
  const id = children.toString();
  switch (level) {
    case 1: {
      return <h1 id={id}>{children}</h1>;
    }
    case 2: {
      return <h2 id={id}>{children}</h2>;
    }
    case 3: {
      return <h3 id={id}>{children}</h3>;
    }
  }
  return <h1 id={id}>{children}</h1>;
};
