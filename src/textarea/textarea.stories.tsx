import React from "react";
import { Textarea } from ".";
import { Box } from "../box";

export default {
  title: "Textareas",
};

export const DefaultTextarea = () => (
  <div style={{ padding: 25, maxWidth: 500 }}>
    <Box>
      <Box.Content>
        <Textarea label="Label" placeholder="Placeholder" />
      </Box.Content>
    </Box>
  </div>
);

export const ResizableTextarea = () => (
  <div style={{ padding: 25, maxWidth: 500 }}>
    <Box>
      <Box.Content>
        <Textarea label="Label" resizable placeholder="Placeholder" />
      </Box.Content>
    </Box>
  </div>
);
