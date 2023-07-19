import React from "react";

type Props = {
  level: number;
  children: React.ReactNode & React.ReactNode[];
};

const getHeadingLevel = (level: number) => {
  switch (level) {
    case 1: {
      return 0;
    }
    case 2: {
      return 12;
    }
    case 3: {
      return 24;
    }
  }
};

export const LinkItem: React.FC<Props> = ({ level, children }) => {
  const leftSpacing = getHeadingLevel(level);
  return (
    <div style={{ paddingLeft: leftSpacing }}>
      <a href={`#${children.toString()}`}>{children}</a>
    </div>
  );
};
