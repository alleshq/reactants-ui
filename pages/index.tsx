import { Trash2 } from "react-feather";
import { useTheme, Button, Input, Card } from "../components";

export default () => {
  const theme = useTheme();

  return (
    <main>
      <h3>Buttons</h3>

      <h4>Colors</h4>
      <Card>
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="danger">Danger</Button>
      </Card>

      <h4>States</h4>

      <Card>
        <Button disabled>Disabled</Button>
      </Card>

      <h4>Sizes</h4>
      <Card>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </Card>

      <h4>Custom Width</h4>
      <Card>
        <Button width={100}>Width: 100px</Button>
        <Button width="50%">Width: 50%</Button>
        <Button width="100%">Width: 100%</Button>
      </Card>

      <h4>Icon</h4>
      <Card>
        <Button icon={<Trash2 />} size="large">
          Delete
        </Button>

        <Button icon={<Trash2 />} size="large" iconSide="right">
          Delete
        </Button>
      </Card>

      <h3>Inputs</h3>

      <h4>Colors</h4>
      <Card>
        <Input placeholder="Default" />
        <Input type="danger" placeholder="Danger" />
      </Card>

      <h4>Custom Width</h4>
      <Card>
        <Input placeholder="Width: 100px" width={100} />
        <Input placeholder="Width: 50%" width="50%" />
        <Input placeholder="Width: 100%" width="100%" />
      </Card>

      <style jsx>{`
        h3 {
          margin: 15px 0 30px;
        }

        h4 {
          margin: 20px 0 5px;
          font-weight: 500;
        }

        main {
          padding: 25px 50px 50px;
          max-width: 800px;
          margin: 0 auto;
        }

        :global(.card) {
          padding: 40px;
          margin: 10px 0;
          width: 100%;
          display: inline-grid;
          gap: 15px;
          justify-items: start;
        }
      `}</style>
    </main>
  );
};
