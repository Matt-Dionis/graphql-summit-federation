const { gql } = require("apollo-server");

module.exports = gql`
  extend type Query {
    location(place: String!): Location
  }

  type Location @key(fields: "coords") {
    city: String
    coords: [Float!]!
    country: String
    mapLink: String
    place: String!
  }
`;
