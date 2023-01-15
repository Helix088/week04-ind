const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "My API",
    description: "Description",
  },
  host: "localhost:3000",
  schemes: ["http"],
};

const outputFile = "./path/swagger-output.json";
const endpointsFiles = ["./path/endpointsUser.js", "./path/endpointsBook.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
