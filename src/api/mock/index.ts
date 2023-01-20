import { createServer, Model, Registry, Server } from "miragejs";

export type MockedServer = Server<Registry<any, any>>;

declare global {
  interface Window {
    server: MockedServer;
  }
}

export const initalizateServer = () => {
  if (window.server) {
    window.server.shutdown();
  }

  window.server = createServer({
    models: {
      todos: Model,
    },

    routes() {
      this.namespace = "/api";

      this.get("/todos", (schema, request) => {
        return schema.todos.all();
      });

      this.post("/todos", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);

        return schema.todos.create(attrs);
      });

      this.patch("todos/:id", (schema, request) => {
        let newAttrs = JSON.parse(request.requestBody);
        let id = request.params.id;
        let todo = schema.todos.find(id);

        return todo.update(newAttrs);
      });

      this.delete("/todos/:id", (schema, request) => {
        let id = request.params.id;

        return schema.todos.find(id).destroy();
      })

      this.passthrough();
    },

    seeds(server) {
      server.create("todo", {
        id: `1674230250327`,
        description: "Joga o lixo fora",
        cheked: false,
      });

      server.create("todo", {
        id: `1674230265902`,
        description: "Trocar a água do cachorro",
        checked: false,
      });

      server.create("todo", {
        id: `1674230275927`,
        description: "Dunkirk",
        checked: false,
      });
    },
  });
};
