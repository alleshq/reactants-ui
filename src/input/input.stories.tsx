import React from "react";
import { Input } from "./input";
import { Box } from "../box";
import { Spacer } from "../spacer";

export default {
  title: "Inputs",
};

export const DefaultInput = () => (
  <div style={{ padding: 25, display: "inline-block" }}>
    <Box>
      <Box.Content>
        <Input placeholder="Placeholder" label="This a label" />
      </Box.Content>
    </Box>
  </div>
);
