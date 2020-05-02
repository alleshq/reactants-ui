import { Coffee } from "react-feather";
import React from "react";
import { Button, Input, Box, Avatar, Row, Col, Spacer } from "../components";
import Layout from "../lib/layout";
import ExampleBlock from "../lib/example-block";

export default () => {
  const avatar = "https://github.com/identicons/danteissaias.png";

  return (
    <Layout
      style={{
        padding: "0 25px 50px",
        maxWidth: "800px",
        margin: "80px auto 0",
      }}
    >
      <h3>Layout</h3>

      <Box>
        <Box.Header>Rows</Box.Header>
        <Box.Content>
          <Row style={{ marginBottom: 10 }}>
            <ExampleBlock />
          </Row>
          <Row>
            <ExampleBlock />
          </Row>
        </Box.Content>
      </Box>

      <Box>
        <Box.Header>Columns</Box.Header>
        <Box.Content>
          <Row style={{ marginBottom: "15px" }}>
            <Col>
              <ExampleBlock plain={2} />
            </Col>
            <Col>
              <ExampleBlock plain={4} />
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <ExampleBlock plain={2} />
            </Col>
            <Col>
              <ExampleBlock plain={4} />
            </Col>
          </Row>
        </Box.Content>
      </Box>

      <Box>
        <Box.Header>Gaps</Box.Header>
        <Box.Content>
          <Row gap={0.8} style={{ marginBottom: "15px" }}>
            <Col>
              <ExampleBlock />
            </Col>
            <Col>
              <ExampleBlock />
            </Col>
            <Col>
              <ExampleBlock />
            </Col>
          </Row>
          <Row gap={0.8}>
            <Col>
              <ExampleBlock />
            </Col>
            <Col>
              <ExampleBlock />
            </Col>
          </Row>
        </Box.Content>
      </Box>

      <h3>Buttons</h3>

      <Box>
        <Box.Header>Colors</Box.Header>
        <Box.Content>
          <Button>Default</Button>
          <Spacer y={0.5} />
          <Button type="primary">Primary</Button>
          <Spacer y={0.5} />
          <Button type="danger">Danger</Button>
        </Box.Content>
      </Box>

      <Box>
        <Box.Header>States</Box.Header>
        <Box.Content>
          <Button disabled>Disabled</Button>
          <Spacer y={0.5} />
          <Button loading>Log in</Button>
        </Box.Content>
      </Box>

      <Box>
        <Box.Header>Sizes</Box.Header>
        <Box.Content>
          <Button size="small">Small</Button>
          <Spacer y={0.5} />
          <Button size="medium">Medium</Button>
          <Spacer y={0.5} />
          <Button size="large">Large</Button>
        </Box.Content>
      </Box>

      <Box>
        <Box.Header>Widths</Box.Header>
        <Box.Content>
          <Button width={200}>Width: 200px</Button>
          <Spacer y={0.5} />
          <Button width="50%">Width: 50%</Button>
          <Spacer y={0.5} />
          <Button width="100%">Width: 100%</Button>
        </Box.Content>
      </Box>

      <Box>
        <Box.Header>Icons</Box.Header>
        <Box.Content>
          <Button icon={<Coffee />} size="large">
            Icon
          </Button>
          <Spacer y={0.5} />
          <Button icon={<Coffee />} size="large" iconRight>
            Icon
          </Button>
        </Box.Content>
      </Box>

      <h3>Inputs</h3>

      <Box>
        <Box.Header>States</Box.Header>
        <Box.Content>
          <Input placeholder="Default" />
          <Spacer y={0.5} />
          <Input disabled placeholder="Disabled" />
          <Spacer y={0.5} />
          <Input errored placeholder="Danger" />
          <Spacer y={0.5} />
          <Input readOnly placeholder="Read Only" initialValue="Read Only" />
        </Box.Content>
      </Box>

      <Box>
        <Box.Header>Widths</Box.Header>
        <Box.Content>
          <Input placeholder="Width: 200px" width={200} />
          <Spacer y={0.5} />
          <Input placeholder="Width: 50%" width="50%" />
          <Spacer y={0.5} />
          <Input placeholder="Width: 100%" width="100%" />
        </Box.Content>
      </Box>

      <Box>
        <Box.Header>Label</Box.Header>
        <Box.Content>
          <Input placeholder="Placeholder" label="Label" />
        </Box.Content>
      </Box>

      <h3>Avatar</h3>

      <Box>
        <Box.Header>Sizes</Box.Header>
        <Box.Content>
          <Row align="bottom">
            <Avatar src={avatar} />
            <Avatar src={avatar} size={60} />
            <Avatar src={avatar} size={40} />
            <Avatar src={avatar} size={20} />
          </Row>
        </Box.Content>
      </Box>

      <style jsx>{`
        h3 {
          margin: 45px 0 25px;
        }

        :global(.box) {
          margin: 10px 0;
          width: 100%;
        }
      `}</style>
    </Layout>
  );
};
