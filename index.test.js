const Pokemon = require('./index');

describe('instantiating Pokemon', () => {
    test('all properties are specified', () => {
        const testPokemon = new Pokemon('bob', 50, 33, 'fire', 'Headbutt');

        expect( testPokemon.hasOwnProperty('name') ).toBe(true);
        expect( testPokemon.name ).toBe('bob');
        expect( testPokemon.hasOwnProperty('type') ).toBe(true);
        expect( testPokemon.type ).toBe('fire');
        expect( testPokemon.hasOwnProperty('hitPoints') ).toBe(true);
        expect( testPokemon.hitPoints ).toBe(50);
        expect( testPokemon.hasOwnProperty('attackDamage') ).toBe(true);
        expect( testPokemon.attackDamage ).toBe(33);
        expect( testPokemon.hasOwnProperty('move') ).toBe(true);
        expect( testPokemon.move ).toBe('Headbutt');
    });

    test('both type and move uses default values', () => {
        const testPokemon = new Pokemon('bob', 50, 33);

        expect( testPokemon.hasOwnProperty('name') ).toBe(true);
        expect( testPokemon.name ).toBe('bob');
        expect( testPokemon.hasOwnProperty('type') ).toBe(true);
        expect( testPokemon.type ).toBe('normal');
        expect( testPokemon.hasOwnProperty('hitPoints') ).toBe(true);
        expect( testPokemon.hitPoints ).toBe(50);
        expect( testPokemon.hasOwnProperty('attackDamage') ).toBe(true);
        expect( testPokemon.attackDamage ).toBe(33);
        expect( testPokemon.hasOwnProperty('move') ).toBe(true);
        expect( testPokemon.move ).toBe('tackle');
    });
});
