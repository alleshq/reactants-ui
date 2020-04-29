import { useTheme, Button, Input } from "../components";

export default () => {
  const theme = useTheme();

  return (
    <main>
      <article>
        <h3>Buttons</h3>
        <div>
          <Button onClick={() => console.log("Clicked")}>Default</Button>

          <Button type="primary" onClick={() => console.log("Clicked")}>
            Primary
          </Button>

          <Button type="danger" onClick={() => console.log("Clicked")}>
            Danger
          </Button>

          <Button disabled onClick={() => console.log("Clicked")}>
            Disabled
          </Button>

          <Button
            disabled
            type="primary"
            onClick={() => console.log("Clicked")}
          >
            Disabled Primary
          </Button>

          <Button disabled type="danger" onClick={() => console.log("Clicked")}>
            Disabled Danger
          </Button>
        </div>
      </article>

      <article>
        <h3>Inputs</h3>
        <div>
          <Input placeholder="Default" />
          <Input type="danger" placeholder="Danger" />
        </div>
      </article>

      <style jsx>{`
        h3 {
          margin: 15px 0 30px;
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
          display: inline-grid;
          gap: 15px;
          justify-items: start;
        }
      `}</style>
    </main>
  );
};
