import { useTheme, Button, Input } from "../components";

export default () => {
  const theme = useTheme();

  return (
    <main>
      <article>
        <h3>Buttons</h3>
        <div>
          <Button onClick={() => console.log("Clicked")}>Default</Button>

          <h4>Colors</h4>

          <Button type="primary" onClick={() => console.log("Clicked")}>
            Primary
          </Button>

          <Button type="danger" onClick={() => console.log("Clicked")}>
            Danger
          </Button>

          <h4>States</h4>

          <Button disabled onClick={() => console.log("Clicked")}>
            Disabled
          </Button>

          <h4>Sizes</h4>

          <Button size="small" onClick={() => console.log("Clicked")}>
            Small
          </Button>

          <Button size="medium" onClick={() => console.log("Clicked")}>
            Medium
          </Button>

          <Button size="large" onClick={() => console.log("Clicked")}>
            Large
          </Button>

          <h4>Custom Width</h4>

          <Button width="25%" onClick={() => console.log("Clicked")}>
            Width: 25%
          </Button>

          <Button width="50%" onClick={() => console.log("Clicked")}>
            Width: 50%
          </Button>

          <Button width="100%" onClick={() => console.log("Clicked")}>
            Width: 100%
          </Button>
        </div>
      </article>

      <article>
        <h3>Inputs</h3>
        <div>
          <Input placeholder="Default" />

          <h4>States</h4>
          <Input type="danger" placeholder="Danger" />

          <h4>Custom Width</h4>
          <Input placeholder="Width: 25%" width="25%" />
          <Input placeholder="Width: 50%" width="50%" />
          <Input placeholder="Width: 100%" width="100%" />
        </div>
      </article>

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

        article {
          border: 1px solid ${theme.type == "dark" ? "#333" : "#eee"};
          padding: 20px 45px 40px;
          border-radius: 5px;
          margin: 30px 0;
        }

        article > div {
          width: 100%;
          display: inline-grid;
          gap: 15px;
          justify-items: start;
        }
      `}</style>
    </main>
  );
};
