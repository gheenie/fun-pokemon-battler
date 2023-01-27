const [
  Pokemon,
  FirePokemon,
  WaterPokemon,
  GrassPokemon,
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata,
  Pokeball,
  Trainer,
  Battle,
] = require("./index");

describe("instantiating Pokemon", () => {
  test("all properties are specified", () => {
    const testPokemon = new Pokemon("bob", 50, 33, "fire", "headbutt");

    expect(testPokemon.hasOwnProperty("name")).toBe(true);
    expect(testPokemon.name).toBe("bob");
    expect(testPokemon.hasOwnProperty("type")).toBe(true);
    expect(testPokemon.type).toBe("fire");
    expect(testPokemon.hasOwnProperty("hitPoints")).toBe(true);
    expect(testPokemon.hitPoints).toBe(50);
    expect(testPokemon.hasOwnProperty("attackDamage")).toBe(true);
    expect(testPokemon.attackDamage).toBe(33);
    expect(testPokemon.hasOwnProperty("move")).toBe(true);
    expect(testPokemon.move).toBe("headbutt");
  });

  test("both type and move uses default values", () => {
    const testPokemon = new Pokemon("bob", 50, 33);

    expect(testPokemon.hasOwnProperty("name")).toBe(true);
    expect(testPokemon.name).toBe("bob");
    expect(testPokemon.hasOwnProperty("type")).toBe(true);
    expect(testPokemon.type).toBe("normal");
    expect(testPokemon.hasOwnProperty("hitPoints")).toBe(true);
    expect(testPokemon.hitPoints).toBe(50);
    expect(testPokemon.hasOwnProperty("attackDamage")).toBe(true);
    expect(testPokemon.attackDamage).toBe(33);
    expect(testPokemon.hasOwnProperty("move")).toBe(true);
    expect(testPokemon.move).toBe("tackle");
  });
});

describe("testing Pokemon methods", () => {
  const new1 = new Pokemon("test", 100, 10);
  const new2 = new Pokemon("test2", 4, 6, "fire");

  test("isEffectiveAgainst method works", () => {
    expect(new1.isEffectiveAgainst(new2)).toBe(true);
    expect(new2.isEffectiveAgainst(new1)).toBe(false);
  });

  test("isWeakto method works", () => {
    expect(new1.isWeakto(new2)).toBe(false);
  });

  test("takeDamage method works", () => {
    new1.takeDamage(10);
    expect(new1.hitPoints).toBe(90);
  });

  test("useMove method works", () => {
    const logSpy = jest.spyOn(global.console, "log");
    expect(new1.useMove()).toBe(10);
    expect(logSpy).toHaveBeenCalledWith(
      "Pokemontest used 10 Pokemontest's moves"
    );
  });

  test("hasFainted method works", () => {
    new1.takeDamage(89);
    expect(new1.hasFainted()).toBe(false);
    new1.takeDamage(1);
    expect(new1.hasFainted()).toBe(true);
  });
});

describe("instantiating Pokemon subclasses", () => {
  test("all properties are specified", () => {
    const firePokemon = new FirePokemon("fifire", 50, 33, "headbutt");
    const waterPokemon = new WaterPokemon("wawater", 50, 33, "headbutt");
    const grassPokemon = new GrassPokemon(
      "grgrass",
      50,
      33,

      "headbutt"
    );

    expect(firePokemon.name).toBe("fifire");
    expect(firePokemon.type).toBe("fire");
    expect(firePokemon.hitPoints).toBe(50);
    expect(firePokemon.attackDamage).toBe(33);
    expect(firePokemon.move).toBe("headbutt");

    expect(waterPokemon.name).toBe("wawater");
    expect(grassPokemon.name).toBe("grgrass");
  });
});

describe("testing overriding methods of Pokemon subclasses", () => {
  const firePokemon = new FirePokemon("fifire", 50, 33, "headbutt");
  const waterPokemon = new WaterPokemon("wawater", 50, 33, "headbutt");
  const grassPokemon = new GrassPokemon("grgrass", 50, 33, "headbutt");

  test("fire pokemon effective against grass", () => {
    expect(firePokemon.isEffectiveAgainst(grassPokemon)).toBe(true);
  });

  test("fire pokemon effective against others", () => {
    expect(firePokemon.isEffectiveAgainst(waterPokemon)).toBe(false);
  });

  test("water pokemon effective against fire", () => {
    expect(waterPokemon.isEffectiveAgainst(firePokemon)).toBe(true);
  });

  test("water pokemon effective against others", () => {
    expect(waterPokemon.isEffectiveAgainst(grassPokemon)).toBe(false);
  });

  test("grass pokemon effective against water", () => {
    expect(grassPokemon.isEffectiveAgainst(waterPokemon)).toBe(true);
  });

  test("grass pokemon effective against others", () => {
    expect(grassPokemon.isEffectiveAgainst(firePokemon)).toBe(false);
  });

  test("fire pokemon weak against grass", () => {
    expect(firePokemon.isWeakto(waterPokemon)).toBe(true);
  });

  test("fire pokemon weak against others", () => {
    expect(firePokemon.isWeakto(grassPokemon)).toBe(false);
  });

  test("water pokemon weak against fire", () => {
    expect(waterPokemon.isWeakto(grassPokemon)).toBe(true);
  });

  test("water pokemon weak against others", () => {
    expect(waterPokemon.isWeakto(firePokemon)).toBe(false);
  });

  test("grass pokemon weak against water", () => {
    expect(grassPokemon.isWeakto(firePokemon)).toBe(true);
  });

  test("grass pokemon weak against others", () => {
    expect(grassPokemon.isWeakto(waterPokemon)).toBe(false);
  });
});

describe("extending classes from sub classes", () => {
  test("Charmander should contain 5 properties", () => {
    const charmander = new Charmander("Charmander", 1, 2);

    expect(charmander.hasOwnProperty("name")).toBe(true);
    expect(charmander.name).toBe("Charmander");
    expect(charmander.hasOwnProperty("type")).toBe(true);
    expect(charmander.type).toBe("fire");
    expect(charmander.hasOwnProperty("hitPoints")).toBe(true);
    expect(charmander.hitPoints).toBe(1);
    expect(charmander.hasOwnProperty("attackDamage")).toBe(true);
    expect(charmander.attackDamage).toBe(2);
    expect(charmander.hasOwnProperty("move")).toBe(true);
    expect(charmander.move).toBe("ember");
  });
  test("Squirtle should contain 5 properties", () => {
    const squirtle = new Squirtle("Squirtle", 1, 2);
    expect(squirtle.hasOwnProperty("name")).toBe(true);
    expect(squirtle.name).toBe("Squirtle");
    expect(squirtle.hasOwnProperty("type")).toBe(true);
    expect(squirtle.type).toBe("water");
    expect(squirtle.hasOwnProperty("hitPoints")).toBe(true);
    expect(squirtle.hitPoints).toBe(1);
    expect(squirtle.hasOwnProperty("attackDamage")).toBe(true);
    expect(squirtle.attackDamage).toBe(2);
    expect(squirtle.hasOwnProperty("move")).toBe(true);
    expect(squirtle.move).toBe("water gun");
  });
  test("Bulbasaur should contain 5 properties", () => {
    const bulbasaur = new Bulbasaur("Bulbasaur", 1, 2);
    expect(bulbasaur.hasOwnProperty("name")).toBe(true);
    expect(bulbasaur.name).toBe("Bulbasaur");
    expect(bulbasaur.hasOwnProperty("type")).toBe(true);
    expect(bulbasaur.type).toBe("grass");
    expect(bulbasaur.hasOwnProperty("hitPoints")).toBe(true);
    expect(bulbasaur.hitPoints).toBe(1);
    expect(bulbasaur.hasOwnProperty("attackDamage")).toBe(true);
    expect(bulbasaur.attackDamage).toBe(2);
    expect(bulbasaur.hasOwnProperty("move")).toBe(true);
    expect(bulbasaur.move).toBe("vine whip");
  });
  test("Rattata should contain 5 properties", () => {
    const rattata = new Rattata("Rattata", 1, 2);
    expect(rattata.hasOwnProperty("name")).toBe(true);
    expect(rattata.name).toBe("Rattata");
    expect(rattata.hasOwnProperty("type")).toBe(true);
    expect(rattata.type).toBe("normal");
    expect(rattata.hasOwnProperty("hitPoints")).toBe(true);
    expect(rattata.hitPoints).toBe(1);
    expect(rattata.hasOwnProperty("attackDamage")).toBe(true);
    expect(rattata.attackDamage).toBe(2);
    expect(rattata.hasOwnProperty("move")).toBe(true);
    expect(rattata.move).toBe("tackle");
  });
});

describe("Pokeball instantiation and methods", () => {
  test("isEmpty()", () => {
    const ball1 = new Pokeball();

    expect(ball1.isEmpty()).toBe(true);

    ball1.storage = new Charmander("charchar", 1, 2);

    expect(ball1.isEmpty()).toBe(false);
  });

  test("contains()", () => {
    const ball1 = new Pokeball();

    expect(ball1.contains()).toBe("empty ...");

    ball1.storage = new Charmander("charchar", 1, 2);

    expect(ball1.contains()).toBe("charchar");
  });

  test("throw()", () => {
    const logSpy = jest.spyOn(global.console, "log");
    const ball1 = new Pokeball();
    const charchar = new Charmander("charchar", 1, 2);
    ball1.throw(charchar);

    // Throw called with an argument, ball currently empty.
    expect(ball1.contains()).toBe("charchar");
    expect(logSpy).toHaveBeenCalledWith("you caught charchar");

    const turtle = new Squirtle("turtle", 1, 2);
    ball1.throw(turtle);

    // Throw called with an argument, ball currently occupied.
    expect(ball1.contains()).toBe("charchar");
    expect(logSpy).toHaveBeenCalledWith("there is a pokemon in this ball");

    const releasedPokemon = ball1.throw();

    // Throw called without argument, ball currently occupied.
    expect(releasedPokemon.name).toBe("charchar");
    expect(logSpy).toHaveBeenCalledWith("GO charchar !!!");

    ball1.storage = "";
    const noPokemon = ball1.throw();

    // Throw called without argument, ball currently empty.
    expect(logSpy).toHaveBeenCalledWith("there is no pokemon to release");
  });
});

describe("Trainer class", () => {
  test("constructor works correctly", () => {
    const new1 = new Trainer();

    expect(new1.belt.length).toBe(6);
    expect(new1.belt[5].isEmpty()).toBe(true);
    expect(new1.belt[0]).not.toBe(new1.belt[1]);
  });

  test("catch() correctly fills belt", () => {
    const new1 = new Trainer();
    const new2 = new Charmander("test2", 1, 2);
    const new3 = new Rattata("test3", 1, 2);
    const new4 = new Squirtle("test4", 1, 2);
    const new5 = new Bulbasaur("test5", 1, 2);
    const new6 = new GrassPokemon("test6", 1, 2, "tackle");
    const new7 = new Charmander("test7", 1, 2);
    new1.catch(new2);
    new1.catch(new3);
    new1.catch(new4);
    new1.catch(new5);
    new1.catch(new6);
    new1.catch(new7);

    expect(new1.belt[0].contains()).toBe("test2");
    expect(new1.belt[5].contains()).toBe("test7");
    expect(new1.belt[4].contains()).toBe("test6");
  });
  describe("Trainer - getPokemon method", () => {
    test("check for the the Pokemon with that name in the belt + return specific pokemon ", () => {
      const new1 = new Trainer();
      const new2 = new Charmander("test2", 1, 2);
      const new3 = new Rattata("test3", 1, 2);
      const new4 = new Squirtle("test4", 1, 2);
      const new5 = new Bulbasaur("test5", 1, 2);
      const new6 = new GrassPokemon("test6", 1, 2, "tackle");
      const new7 = new Charmander("test7", 1, 2);
      new1.catch(new2);
      new1.catch(new3);
      new1.catch(new4);
      new1.catch(new5);
      new1.catch(new6);
      new1.catch(new7);
      expect(new1.getPokemon("test2").name).toBe("test2");
      expect(new1.getPokemon("test5")).toEqual(new5);
    });
  });
});

describe.only("Battle class/method", () => {
  test("should ", () => {
    const trainer1 = new Trainer();
    const pokemon1 = new Pokemon("pokemon1", 10, 2);
    const trainer2 = new Trainer();
    const pokemon2 = new Pokemon("pokemon2", 10, 2);
    trainer1.catch(pokemon1);
    trainer2.catch(pokemon2);
    const battle = new Battle(trainer1, [pokemon1.name], trainer2, [
      pokemon2.name,
    ]);
    battle.fight();
    battle.fight();
    battle.fight();
    battle.fight();
  });
});
