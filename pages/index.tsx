import { Trash2 } from "react-feather";
import { useTheme, Button, Input, Card } from "../components";

export default () => {
  const theme = useTheme();

  return (
    <main>
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
        <Button width={100}>Width: 100px</Button>
        <Button width="50%">Width: 50%</Button>
        <Button width="100%">Width: 100%</Button>
      </Card>

      <Card header="Icon">
        <Button type="danger" icon={<Trash2 />} size="large">
          Delete
        </Button>

        <Button type="danger" icon={<Trash2 />} size="large" iconSide="right">
          Delete
        </Button>
      </Card>

      <h3>Inputs</h3>

      <Card header="Colors">
        <Input placeholder="Default" />
        <Input type="danger" placeholder="Danger" />
      </Card>

      <Card header="Custom Width">
        <Input placeholder="Width: 100px" width={100} />
        <Input placeholder="Width: 50%" width="50%" />
        <Input placeholder="Width: 100%" width="100%" />
      </Card>

      <style jsx>{`
        h3 {
          margin: 45px 0 25px;
        }

        main {
          padding: 0 10px 50px;
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
    </main>
  );
};
