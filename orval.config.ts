import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: "http://localhost:3333/docs/json", // link da doc da api
    output: {
      target: "./src/http/api.ts", // local e nome do arquivo que será gerado
      client: "fetch", // o client que será utilizado para fazer as requisições, pode ser o fetch, axios ou as outras opções
      httpClient: "fetch", // client http que pode ser o fetch ou axios
      clean: true, // determina se sempre que o arquivo for gerado ele irá sobrescrever o antigo
      baseUrl: "http://localhost:3333", // baseUrl da api
      override: {
        fetch: {
          includeHttpResponseReturnType: false, // faz com que não retorne o número do status code da requisição, mas sim apenas os dados
        },
      },
    },
  },
});
