import { Trash2 } from "react-feather";
import { useTheme, Button, Input, Card } from "../components";

export default () => {
  const theme = useTheme();

  return (
    <main>
      <Card className="section">
        <h3>Buttons</h3>
        <div>
          <Button>Default</Button>

          <h4>Colors</h4>

          <Button type="primary">Primary</Button>
          <Button type="danger">Danger</Button>

          <h4>States</h4>

          <Button disabled>Disabled</Button>

          <h4>Sizes</h4>

          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>

          <h4>Custom Width</h4>

          <Button width={100}>Width: 100px</Button>
          <Button width="50%">Width: 50%</Button>
          <Button width="100%">Width: 100%</Button>

          <h4>Icon</h4>

          <Button icon={<Trash2 />} size="large">
            Delete
          </Button>

          <Button icon={<Trash2 />} size="large" iconSide="right">
            Delete
          </Button>
        </div>
      </Card>

      <Card className="section">
        <h3>Inputs</h3>
        <div>
          <Input placeholder="Default" />

          <h4>States</h4>
          <Input type="danger" placeholder="Danger" />

          <h4>Custom Width</h4>
          <Input placeholder="Width: 100px" width={100} />
          <Input placeholder="Width: 50%" width="50%" />
          <Input placeholder="Width: 100%" width="100%" />
        </div>
      </Card>

      <style jsx>{`
        h3 {
          margin: 15px 0 30px;
          font-weight: 600;
        }

        h4 {
          margin: 20px 0 5px;
          padding: 0;
          font-weight: 500;
        }

        main {
          padding: 0 50px;
          max-width: 800px;
          margin: 0 auto;
        }

        :global(.section) {
          padding: 20px 45px 40px;
          margin: 30px 0;
        }

        :global(.section) > div {
          width: 100%;
          display: inline-grid;
          gap: 15px;
          justify-items: start;
        }
      `}</style>
    </main>
  );
};
