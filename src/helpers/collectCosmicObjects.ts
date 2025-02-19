const collectCosmicObjects = (data: any) => {
  const planets = data.planets || [];
  const moons = data.moons || [];
  const asteroids = data.asteroids || [];

  return [...planets, ...moons, ...asteroids];
};

export default collectCosmicObjects;
