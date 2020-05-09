define([], function() {
  var games = {
    listAll: function() {
      return [
        {
          title: "Warcraft III",
          image:
            "https://upload.wikimedia.org/wikipedia/en/6/66/WarcraftIII.jpg",
          description:
            "Warcraft III: Reign of Chaos is a high fantasy real-time strategy computer video game developed and published by Blizzard Entertainment released in July 2002."
        },
        {
          title: "Rocket League",
          image:
            "https://upload.wikimedia.org/wikipedia/en/e/e8/Rocket_League.jpg",
          description:
            "Rocket League is a vehicular soccer video game developed and published by Psyonix."
        }
      ];
    }
  };
  return games;
});
