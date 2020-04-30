import { Coffee } from "react-feather";
import { useTheme, Button, Input, Card, Avatar } from "../components";
import Layout from "../lib/layout";

export default () => {
  const theme = useTheme();
  const avatar = "https://github.com/identicons/danteissaias.png";

  return (
    <Layout>
      <h3>Buttons</h3>

      <Card header="Colors">
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="danger">Danger</Button>
      </Card>

      <Card header="States">
        <Button disabled>Disabled</Button>
        <Button disabled type="primary">
          Disabled Primary
        </Button>
      </Card>

      <Card header="Sizes">
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </Card>

      <Card header="Custom Width">
        <Button width={200}>Width: 200px</Button>
        <Button width="50%">Width: 50%</Button>
        <Button width="100%">Width: 100%</Button>
      </Card>

      <Card header="Icon">
        <Button icon={<Coffee />} size="large">
          Icon
        </Button>

        <Button icon={<Coffee />} size="large" iconRight>
          Icon
        </Button>
      </Card>

      <h3>Inputs</h3>

      <Card header="States">
        <Input placeholder="Default" />
        <Input disabled placeholder="Disabled" />
        <Input errored placeholder="Danger" />
      </Card>

      <Card header="Custom Width">
        <Input placeholder="Width: 200px" width={200} />
        <Input placeholder="Width: 50%" width="50%" />
        <Input placeholder="Width: 100%" width="100%" />
      </Card>

      <Card header="Labels">
        <Input placeholder="Placeholder" label="Label" />
      </Card>

      <h3>Avatar</h3>

      <Card header="Sizes">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <Avatar src={avatar} />
          <Avatar src={avatar} size={60} />
          <Avatar src={avatar} size={40} />
          <Avatar src={avatar} size={20} />
        </div>
      </Card>

      <style jsx>{`
        h3 {
          margin: 45px 0 25px;
        }

        main {
          padding: 0 25px 50px;
          max-width: 800px;
          margin: 0 auto;
        }

        :global(.card) {
          margin: 10px 0;
          width: 100%;
        }

        :global(.card) > :global(.content) {
          display: inline-grid;
          gap: 15px;
          justify-items: start;
        }
      `}</style>
    </Layout>
  );
};
