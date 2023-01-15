const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: "Chase's Contact API",
    description: "Contact API",
  },
  host: "https://chase-week04-ind.onrender.com",
  schemes: ["http"],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./index.js');
// });