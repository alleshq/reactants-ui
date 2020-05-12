module.exports = function (plop) {
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
        templateFile: ".plop/component.hbs",
      },
      {
        type: "add",
        path: "src/{{name}}/index.ts",
        template: "export * from \"./{{name}}\";",
      },
      {
        type: "append",
        path: "src/index.ts",
        separator: "",
        template: "export * from \"./{{name}}\";",
      },
    ],
  });
};
