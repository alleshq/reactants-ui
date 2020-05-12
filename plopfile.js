module.exports = function (plop) {
  plop.setHelper("styleClass", function (text) {
    return `{styles.${text}}`;
  });

  plop.setGenerator("component", {
    description: "reusable design component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/{{name}}/{{name}}.tsx",
        templateFile: "templates/component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/{{name}}/{{name}}.module.css",
        template: ".{{name}} { }",
      },
      {
        type: "add",
        path: "src/{{name}}/index.ts",
        template: 'export * from "./{{name}}";',
      },
      {
        type: "append",
        path: "src/index.ts",
        separator: "",
        template: 'export * from "./{{name}}";',
      },
    ],
  });
};
