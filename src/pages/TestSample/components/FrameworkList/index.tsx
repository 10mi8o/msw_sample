import React from "react";

type Props = {
  frameworks?: {
    id: number;
    item: string;
  }[];
};

export const FrameworkList: React.FC<Props> = (props: Props) => {
  const { frameworks } = props;

  return (
    <div>
      <h2>ListTestSample</h2>
      {!frameworks || !frameworks.length ? (
        <div>no data.</div>
      ) : (
        <ul>
          {frameworks.map((framework) => (
            <li key={framework.id}>{framework.item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
