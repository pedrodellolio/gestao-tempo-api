import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions: swaggerJSDoc.Options = {
  swaggerDefinition: {
    openapi: '3.0.0', // Specify the OpenAPI version
    info: {
      title: 'TareFAST - Gestão do Tempo',
      version: '1.0.0',
      description: '',
    },
  },
  apis: ['src/controllers/*.ts'], // Specify the path to your API routes
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;
