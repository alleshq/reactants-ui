import React, { useMemo, memo } from "react";

interface Props {
  plain?: number | boolean;
}

const getBackground = (plain: number | boolean) => {
  if (typeof plain !== "number") return "--primary";

  const colors = [
    "--accents-1",
    "--accents-2",
    "--accents-3",
    "--accents-4",
    "--accents-5",
    "--accents-6",
  ];
  return colors[plain - 1] || "--primary";
};

const ExampleBlock: React.FC<Props> = memo<Props>(
  ({ plain = false, children, ...props }) => {
    const bg = useMemo(() => getBackground(plain), [plain]);

    return (
      <div className="block" {...props}>
        {children}
        <style jsx>{`
          .block {
            width: 100%;
            background: var(${bg});
            padding: var(--gap-half);
            border-radius: var(--radius);
            color: var(--background);
            font-size: 0.75rem;
          }
        `}</style>
      </div>
    );
  }
);

export default ExampleBlock;
