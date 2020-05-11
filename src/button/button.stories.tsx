import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "./button";

export default {
  title: "Buttons",
};

const Gap: React.FC = ({ children }) => {
  return (
    <div style={{ padding: 25 }}>
      {React.Children.map(children, (child, i) => {
        return (
          <div key={i} style={{ margin: "10px 0" }}>
            {child}
          </div>
        );
      })}
    </div>
  );
};

export const DefaultButton = () => (
  <Gap>
    <Button large onClick={action("clicked")}>
      Large
    </Button>

    <Button onClick={action("clicked")}>Default</Button>

    <Button medium onClick={action("clicked")}>
      Medium
    </Button>

    <Button small onClick={action("clicked")}>
      Small
    </Button>
  </Gap>
);

export const PrimaryButton = () => (
  <Gap>
    <Button primary large onClick={action("clicked")}>
      Large
    </Button>

    <Button primary onClick={action("clicked")}>
      Default
    </Button>

    <Button primary medium onClick={action("clicked")}>
      Medium
    </Button>

    <Button primary small onClick={action("clicked")}>
      Small
    </Button>
  </Gap>
);

export const SecondaryButton = () => (
  <Gap>
    <Button secondary large onClick={action("clicked")}>
      Large
    </Button>

    <Button secondary onClick={action("clicked")}>
      Default
    </Button>

    <Button secondary medium onClick={action("clicked")}>
      Medium
    </Button>

    <Button secondary small onClick={action("clicked")}>
      Small
    </Button>
  </Gap>
);

export const DangerButton = () => (
  <Gap>
    <Button danger large onClick={action("clicked")}>
      Large
    </Button>

    <Button danger onClick={action("clicked")}>
      Default
    </Button>

    <Button danger medium onClick={action("clicked")}>
      Medium
    </Button>

    <Button danger small onClick={action("clicked")}>
      Small
    </Button>
  </Gap>
);

export const DisabledState = () => (
  <Gap>
    <Button disabled large onClick={action("clicked")}>
      Large
    </Button>

    <Button disabled onClick={action("clicked")}>
      Default
    </Button>

    <Button disabled medium onClick={action("clicked")}>
      Medium
    </Button>

    <Button disabled small onClick={action("clicked")}>
      Small
    </Button>
  </Gap>
);
