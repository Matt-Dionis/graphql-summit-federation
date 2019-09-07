module.exports = {
  Query: {
    weather: async (_, { coords }, { dataSources }) =>
      await dataSources.weatherAPI.getWeather(coords)
  },
  Weather: {
    __resolveReference: ({ coords }, { dataSources }) =>
      dataSources.weatherAPI.getWeather(coords)
  }
};
