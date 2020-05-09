import { Coffee } from "react-feather";
import React from "react";
import {
  Button,
  Input,
  Box,
  Avatar,
  Row,
  Col,
  Spacer,
  Breadcrumb,
} from "../components";
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
          <Button primary>Primary</Button>
          <Spacer y={0.5} />
          <Button danger>Danger</Button>
        </Box.Content>
      </Box>

      <Box>
        <Box.Header>Variants</Box.Header>
        <Box.Content>
          <Button primary flat>
            Flat
          </Button>
          <Spacer y={0.5} />
          <Button rounded primary>
            Rounded
          </Button>
          <Spacer y={0.5} />
          <Button disabled>Disabled</Button>
          <Spacer y={0.5} />
          <Button loading>Log in</Button>
        </Box.Content>
      </Box>

      <Box>
        <Box.Header>Sizes</Box.Header>
        <Box.Content>
          <Button small>Small</Button>
          <Spacer y={0.5} />
          <Button medium>Medium</Button>
          <Spacer y={0.5} />
          <Button large>Large</Button>
        </Box.Content>
      </Box>

      <Box>
        <Box.Header>Fluid</Box.Header>
        <Box.Content>
          <Button fluid>Width: 100%</Button>
        </Box.Content>
      </Box>

      <Box>
        <Box.Header>Icons</Box.Header>
        <Box.Content>
          <Button icon={<Coffee />} flat large primary>
            Icon
          </Button>
          <Spacer y={0.5} />
          <Button icon={<Coffee />} flat primary large iconRight>
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

      <h3>Breadcrumb</h3>

      <Box>
        <Box.Header>Default</Box.Header>
        <Box.Content>
          <Breadcrumb>
            <Breadcrumb.Item href="/">
              <h4 style={{ display: "inline" }}>Reactants</h4>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Is</Breadcrumb.Item>
            <Breadcrumb.Item>Cool</Breadcrumb.Item>
          </Breadcrumb>
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
