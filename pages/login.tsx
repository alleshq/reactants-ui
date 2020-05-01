import Layout from "../lib/layout";
import { Row, Card, Input, Spacer, Button } from "../components";

export default () => {
  return (
    <Layout style={{ height: "inherit" }}>
      <Row align="middle" justify="center" style={{ height: "inherit" }}>
        <div style={{ width: "100%", maxWidth: "450px" }}>
          <h2 style={{ textAlign: "center" }}>Log In</h2>

          <Card header="Enter your credentials to continue">
            <Input label="Email" placeholder="gilfoyle@piedpiper.com" />

            <Spacer y={1} />

            <Input label="Password" placeholder="********" />

            <Spacer y={1} />

            <Button width="100%" type="primary">
              Log in
            </Button>
          </Card>
        </div>
      </Row>
    </Layout>
  );
};
