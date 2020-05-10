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
  GenericAvatar,
} from "../components";
import Layout from "../lib/layout";
import ExampleBlock from "../lib/example-block";
import Link from "next/link";

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
      <Spacer y={1} />

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

      <Spacer y={1} />

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

      <Spacer y={1} />

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

      <Spacer y={1} />

      <h3>Buttons</h3>

      <Spacer y={1} />

      <Box>
        <Box.Header>Colors</Box.Header>
        <Box.Content>
          <Button>Default</Button>
          <Spacer y={0.5} />
          <Button secondary>Secondary</Button>
          <Spacer y={0.5} />
          <Button primary>Primary</Button>
          <Spacer y={0.5} />
          <Button danger>Danger</Button>
        </Box.Content>
      </Box>

      <Spacer y={1} />

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

      <Spacer y={1} />

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

      <Spacer y={1} />

      <Box>
        <Box.Header>Fluid</Box.Header>
        <Box.Content>
          <Button fluid>Width: 100%</Button>
        </Box.Content>
      </Box>

      <Spacer y={1} />

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

      <Spacer y={1} />

      <h3>Inputs</h3>

      <Spacer y={1} />

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

      <Spacer y={1} />

      <Box>
        <Box.Header>Fluid</Box.Header>
        <Box.Content>
          <Input placeholder="Width: 100%" fluid />
        </Box.Content>
      </Box>

      <Spacer y={1} />

      <Box>
        <Box.Header>Label</Box.Header>
        <Box.Content>
          <Input placeholder="Placeholder" label="Label" />
        </Box.Content>
      </Box>

      <Spacer y={1} />

      <Box>
        <Box.Header>Icon</Box.Header>
        <Box.Content>
          <Input icon={<Coffee />} placeholder="Left Icon" />
          <Spacer y={0.5} />
          <Input iconRight={<Coffee />} placeholder="Right Icon" />
        </Box.Content>
      </Box>

      <Spacer y={1} />

      <h3>Avatar</h3>

      <Spacer y={1} />

      <Box>
        <Box.Header>Sizes</Box.Header>
        <Box.Content>
          <Row align="bottom">
            <GenericAvatar src={avatar} />
            <GenericAvatar src={avatar} size={60} />
            <GenericAvatar src={avatar} size={40} />
            <GenericAvatar src={avatar} size={20} />
          </Row>
        </Box.Content>
      </Box>

      <Spacer y={1} />

      <h3>Breadcrumb</h3>

      <Box>
        <Box.Header>Default</Box.Header>
        <Box.Content>
          <Breadcrumb>
            <Link href="/" passHref>
              <Breadcrumb.Item as="h4" text="Reactants" />
            </Link>

            <Link href="/" passHref>
              <Breadcrumb.Item>
                <Avatar username={"dante"} size={25} />
              </Breadcrumb.Item>
            </Link>

            <Breadcrumb.Item text="Announcing Reactants 2.0" />
          </Breadcrumb>
        </Box.Content>
      </Box>

      <style jsx>{`
        h3 {
          margin: 45px 0 25px;
        }
      `}</style>
    </Layout>
  );
};
