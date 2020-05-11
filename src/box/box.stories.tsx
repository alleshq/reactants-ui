import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { Box } from "./box";
import { Input } from "../input";
import { Spacer } from "../spacer";
import { Button } from "../button";

export default {
  title: "Boxes",
  decorators: [withKnobs],
};

export const DefaultBox = () => (
  <div style={{ padding: 25, maxWidth: 500 }}>
    <Box>
      <Box.Header>This is the header text</Box.Header>
      <Box.Content>The quick brown fox jumps over the lazy dog.</Box.Content>
    </Box>
  </div>
);

export const SettingsExample = () => (
  <div style={{ padding: 25, maxWidth: 500 }}>
    <h3>Profile</h3>
    <Box>
      <Box.Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        Edit account information
      </Box.Header>
      <Box.Content>
        <Input fluid label="Name" placeholder="John Doe" />
        <Spacer y={0.5} />
        <Input fluid label="Email" placeholder="john@example.com" />
        <Spacer y={0.5} />
      </Box.Content>
      <Box.Footer
        style={{
          overflow: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        Updates instantly across services
        <Button primary small right>
          Save
        </Button>
      </Box.Footer>
    </Box>
  </div>
);

export const LoginExample = () => (
  <div style={{ padding: 25, maxWidth: 500 }}>
    <h3>Log In</h3>
    <Box>
      <Box.Header>Please enter your credentials to continue</Box.Header>
      <Box.Content>
        <Input fluid label="Email" placeholder="john@example.com" />
        <Spacer y={0.5} />
        <Input.Password fluid label="Password" placeholder="•••••••••••" />
        <Spacer y={0.5} />
      </Box.Content>
      <Box.Footer
        style={{
          overflow: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a href="#" style={{ color: "var(--accents-4)" }}>
          Forgot password?
        </a>
        <Button primary small right loading={boolean("Loading", false)}>
          Log In
        </Button>
      </Box.Footer>
    </Box>
  </div>
);
