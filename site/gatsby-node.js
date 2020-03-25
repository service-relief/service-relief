exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    schema.buildObjectType({
      name: "AirtableData",
      fields: {
        FundraiserUrl: {
          type: `String!`,
          resolve: source => source.Url
        },
        FundraiserDescription: {
          type: `String`,
          resolve: source => source.Description
        },
        BusinessName: {
          type: `String`,
          resolve: source => source.Name
        }
      },
      interfaces: ["Node"],
    }),
  ]
  createTypes(typeDefs)
}