class Pokemon {
  constructor(name, hitPoints, attackDamage, type = "normal", move = "tackle") {
    this.name = name;
    this.type = type;
    this.hitPoints = hitPoints;
    this.attackDamage = attackDamage;
    this.move = move;
  }

  isEffectiveAgainst(pokemon) {
    if (this.type === "normal") {
      return true;
    }
    return false;
  }

  isWeakto(pokemon) {
    if (this.type === "normal") {
      return false;
    }
    return true;
  }

  takeDamage(num) {
    this.hitPoints -= num;
  }

  useMove() {
    console.log(
      `Pokemon${this.name} used ${this.attackDamage} Pokemon${this.name}'s moves`
    );
    return this.attackDamage;
  }

  hasFainted() {
    if (this.hitPoints <= 0) {
      return true;
    }
    return false;
  }
}

class FirePokemon extends Pokemon {
  constructor(name, hitPoints, attackDamage, move = "tackle") {
    super(name, hitPoints, attackDamage, "fire", move);
  }
  isEffectiveAgainst(pokemon) {
    if (pokemon.type === "grass") {
      return true;
    }
    return false;
  }

  isWeakto(pokemon) {
    if (pokemon.type === "water") {
      return true;
    }
    return false;
  }
}

class WaterPokemon extends Pokemon {
  constructor(name, hitPoints, attackDamage, move = "tackle") {
    super(name, hitPoints, attackDamage, "water", move);
  }
  isEffectiveAgainst(pokemon) {
    if (pokemon.type === "fire") {
      return true;
    }
    return false;
  }

  isWeakto(pokemon) {
    if (pokemon.type === "grass") {
      return true;
    }
    return false;
  }
}

class GrassPokemon extends Pokemon {
  constructor(name, hitPoints, attackDamage, move = "tackle") {
    super(name, hitPoints, attackDamage, "grass", move);
  }
  isEffectiveAgainst(pokemon) {
    if (pokemon.type === "water") {
      return true;
    }
    return false;
  }

  isWeakto(pokemon) {
    if (pokemon.type === "fire") {
      return true;
    }
    return false;
  }
}

class Charmander extends FirePokemon {
  constructor(name, hitPoints, attackDamage) {
    super(name, hitPoints, attackDamage, "ember");
  }
}

class Squirtle extends WaterPokemon {
  constructor(name, hitPoints, attackDamage) {
    super(name, hitPoints, attackDamage, "water gun");
  }
}

class Bulbasaur extends GrassPokemon {
  constructor(name, hitPoints, attackDamage) {
    super(name, hitPoints, attackDamage, "vine whip");
  }
}

class Rattata extends Pokemon {}

class Pokeball {
  constructor() {
    this.storage = "";
  }

  isEmpty() {
    return this.storage === "";
  }

  contains() {
    if (this.isEmpty()) return "empty ...";

    return this.storage.name;
  }

  throw(pokemon) {
    if (pokemon === undefined) {
      if (!this.isEmpty()) {
        console.log(`GO ${this.storage.name} !!!`);

        return this.storage;
      }

      console.log("there is no pokemon to release");
    } else {
      if (this.isEmpty()) {
        this.storage = pokemon;

        console.log(`you caught ${this.storage.name}`);
      } else {
        console.log("there is a pokemon in this ball");
      }
    }
  }
}

class Trainer {
  constructor() {
    const ball1 = new Pokeball();
    const ball2 = new Pokeball();
    const ball3 = new Pokeball();
    const ball4 = new Pokeball();
    const ball5 = new Pokeball();
    const ball6 = new Pokeball();

    this.belt = [ball1, ball2, ball3, ball4, ball5, ball6];
  }
  catch(pokemon) {
    this.belt.forEach((ball) => {
      console.log(this.belt);
      console.log(ball);
      if (ball.isEmpty()) {
        ball.throw(pokemon);
      }
    });
  }

  getPokemon(name) {
    this.belt.forEach((ball) => {
      if (ball.contains() === "name") {
        ball.throw();
      }
    });
  }
}

module.exports = [
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
];
