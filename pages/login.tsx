import { useState } from "react";
import Layout from "../lib/layout";
import { Row, Box, Input, Spacer, Button } from "../components";

export default () => {
  const [errored, setErrored] = useState<boolean>(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrored(true);
  };

  return (
    <Layout style={{ height: "inherit" }}>
      <Row align="middle" justify="center" style={{ height: "inherit" }}>
        <div style={{ width: "100%", maxWidth: "450px" }}>
          <h2 style={{ textAlign: "center" }}>Log In</h2>

          <Box>
            <Box.Header>Enter your credentials to continue</Box.Header>
            <Box.Content as="form" onSubmit={handleSubmit} padding="20px 25px">
              <Input
                label="Email"
                placeholder="gilfoyle@piedpiper.com"
                errored={errored}
                error="Invalid email address"
              />

              <Spacer y={0.5} />

              <Input
                type="password"
                label="Password"
                placeholder="********"
                errored={errored}
                error="Invalid password"
              />

              <Spacer y={1} />

              <Button width="100%" type="primary">
                Log in
              </Button>

              <Spacer y={0.5} />
            </Box.Content>
          </Box>
        </div>
      </Row>
    </Layout>
  );
};
