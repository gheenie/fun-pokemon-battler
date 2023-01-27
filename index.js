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
      `${this.name} used ${this.move}. Attack Damage is ${this.attackDamage}`
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
    for (let i = 0; i < this.belt.length; i++) {
      const ball = this.belt[i];

      if (ball.isEmpty()) {
        ball.throw(pokemon);
        break;
      }
    }
  }

  getPokemon(name) {
    for (let i = 0; i < this.belt.length; i++) {
      const ball = this.belt[i];

      if (ball.contains() === name) {
        return ball.throw();
      }
    }
  }
}

class Battle {
  constructor(
    trainer1,
    pokemon1,
    trainer2,
    pokemon2,
    attackingPokemon,
    defendingPokemon
  ) {
    this.trainer1 = trainer1;
    this.pokemon1 = pokemon1;
    this.trainer2 = trainer2;
    this.pokemon2 = pokemon2;
    this.pokemon1Current = 0;
    this.pokemon2Current = 0;
    this.turn = this.trainer1;
    this.attackingPokemon =
      attackingPokemon || this.trainer1.getPokemon(pokemon1[0]);
    this.defendingPokemon =
      defendingPokemon || this.trainer2.getPokemon(pokemon2[0]);
  }
  fight() {
    let attack = this.attackingPokemon.useMove();
    if (this.defendingPokemon.isEffectiveAgainst(this.attackingPokemon)) {
      attack *= 0.75;
      console.log(
        `defending pokemon is stronger. Attack score is now ${attack}`
      );
    } else if (this.defendingPokemon.isWeakto(this.attackingPokemon)) {
      attack *= 1.25;
      console.log(`defending pokemon is weaker. Attack score is now ${attack}`);
    } else console.log(`Good try!`);

    this.defendingPokemon.takeDamage(this.attackingPokemon);
    if (this.defendingPokemon.hasFainted()) {
      console.log(`${this.defendingPokemon} has died`);
      if (
        this.turn === this.trainer1 &&
        this.pokemon1Current === this.pokemon1.length - 1
      ) {
        console.log(`Trainer 2 has won!`);
      } else if (
        this.turn === this.trainer2 &&
        this.pokemon2Current === this.pokemon2.length - 1
      ) {
        console.log(`Trainer 1 has won!`);
      }
    }
    if (this.turn === this.trainer1) {
      this.turn = this.trainer2;
    } else {
      this.turn = this.trainer1;
    }
    const tempPokemon = this.attackingPokemon;
    this.attackingPokemon = this.defendingPokemon;
    this.defendingPokemon = tempPokemon;
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
  Battle,
];
