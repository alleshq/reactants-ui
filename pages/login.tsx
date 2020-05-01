import { useState } from "react";
import Layout from "../lib/layout";
import {
  Row,
  Box,
  Input,
  Spacer,
  Button,
  BoxHeader,
  BoxContent,
} from "../components";

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
            <BoxHeader>Enter your credentials to continue</BoxHeader>
            <BoxContent as="form" onSubmit={handleSubmit}>
              <Input
                label="Email"
                placeholder="gilfoyle@piedpiper.com"
                errored={errored}
              />

              <Spacer y={1} />

              <Input
                label="Password"
                placeholder="********"
                errored={errored}
              />

              <Spacer y={1} />

              <Button width="100%" type="primary">
                Log in
              </Button>
            </BoxContent>
          </Box>
        </div>
      </Row>
    </Layout>
  );
};
