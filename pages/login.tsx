import React, { useState } from "react";
import Layout from "../lib/layout";
import { Row, Box, Input, Spacer, Button } from "../components";

export default () => {
  const [errored, setErrored] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();

    setTimeout(() => {
      setErrored(true);
      setLoading(false);
    }, 500);
  };

  return (
    <Layout style={{ height: "inherit" }}>
      <Row align="middle" justify="center" style={{ height: "inherit" }}>
        <div style={{ width: "100%", maxWidth: "375px" }}>
          <h2 style={{ textAlign: "center" }}>Log In</h2>

          <Box>
            <Box.Header>Enter your credentials to continue</Box.Header>
            <Box.Content as="form" onSubmit={handleSubmit} padding="20px 25px">
              <Input
                label="Email"
                placeholder="gilfoyle@piedpiper.com"
                errored={errored}
                error="Invalid email address"
                fluid
                onChange={() => setErrored(false)}
              />

              <Spacer y={0.5} />

              <Input.Password
                label="Password"
                placeholder="•••••••••••"
                errored={errored}
                error="Invalid password"
                fluid
                onChange={() => setErrored(false)}
              />

              <Spacer y={1} />

              <Button loading={loading} fluid primary>
                Log In
              </Button>

              <Spacer y={0.5} />
            </Box.Content>
          </Box>
        </div>
      </Row>
    </Layout>
  );
};
