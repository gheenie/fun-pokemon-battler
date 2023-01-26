const Pokemon = require("./index");

describe("instantiating Pokemon", () => {
  test("all properties are specified", () => {
    const testPokemon = new Pokemon("bob", 50, 33, "fire", "Headbutt");

    expect(testPokemon.hasOwnProperty("name")).toBe(true);
    expect(testPokemon.name).toBe("bob");
    expect(testPokemon.hasOwnProperty("type")).toBe(true);
    expect(testPokemon.type).toBe("fire");
    expect(testPokemon.hasOwnProperty("hitPoints")).toBe(true);
    expect(testPokemon.hitPoints).toBe(50);
    expect(testPokemon.hasOwnProperty("attackDamage")).toBe(true);
    expect(testPokemon.attackDamage).toBe(33);
    expect(testPokemon.hasOwnProperty("move")).toBe(true);
    expect(testPokemon.move).toBe("Headbutt");
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

//fire>grass
//fire<water
//grass>water
//grass<fire
//water>fire
//water<grass
