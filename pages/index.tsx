import { useTheme, Button } from "../components";

export default () => {
  const theme = useTheme();

  return (
    <main>
      <article>
        <h3>Buttons</h3>
        <div>
          <Button
            style={{ marginTop: 15, marginBottom: 15 }}
            onClick={() => console.log("Clicked")}
          >
            Primary
          </Button>

          <Button
            style={{ marginTop: 15, marginBottom: 15 }}
            type="secondary"
            onClick={() => console.log("Clicked")}
          >
            Secondary
          </Button>

          <Button
            style={{ marginTop: 15, marginBottom: 15 }}
            type="danger"
            onClick={() => console.log("Clicked")}
          >
            Danger
          </Button>
        </div>
      </article>

      <style jsx>{`
        h3 {
          margin-top: 15px;
          margin-bottom: 0;
        }

        main {
          padding: 50px;
          max-width: 800px;
          margin: 0 auto;
        }

        article {
          border: 1px solid ${theme.type == "dark" ? "#333" : "#eee"};
          padding: 20px 35px;
          border-radius: 5px;
        }
      `}</style>
    </main>
  );
};
