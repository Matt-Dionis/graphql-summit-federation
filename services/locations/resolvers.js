module.exports = {
  Query: {
    location: async (_, { place }, { dataSources }) =>
      await dataSources.locationAPI.getLocation(place)
  },
  Location: {
    weather: ({ coords }) => {
      return { __typename: "Weather", coords };
    }
  }
};
