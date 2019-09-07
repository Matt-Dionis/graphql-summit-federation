const { gql } = require("apollo-server");

module.exports = gql`
  extend type Query {
    weather(coords: [Float!]!): Weather
  }

  type Weather {
    coords: [Float!]!
    summary: String
    temperature: Float
  }

  extend type Location @key(fields: "coords") {
    coords: [Float!]! @external
    weather: Weather
  }
`;
