const db = require('./connection');
const { User, Pokemon, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'gen1_species' },
        { name: 'gen2_species' },
        { name: 'gen3_species' },
        { name: 'gen4_species' },
        { name: 'gen5_species' },
    ]);

    console.log('categories seeds inserted!');

    await Pokemon.deleteMany();

    const pokemon = await Pokemon.insertMany([
        //inserts every pokemon in alphabetical order
        {
            name: 'abomasnow',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png',
            description: 'It whips up blizzards in mountains that are always buried in snow. It is the abominable snowman.',
            donation: 0.99,
            category: categories[3]._id
        },
        {
            name: 'abomasnow-mega',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10095.png',
            description: 'It blankets wide areas in snow by whipping up blizzards. It is also known as "The Ice Monster."',
            donation: 0.99,
            category: categories[3]._id
        },
        {
            name: 'abra',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png',
            description: 'Using its ability to read minds, it will identify impending danger and TELEPORT to safety.',
            donation: 0.99,
            category: categories[0]._id
        },
        {
            name: 'absol',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png',
            description: 'It senses coming disasters and appears before people only to warn them of impending danger.',
            donation: 0.99,
            category: categories[3]._id
        },
        {
            name: 'absol-mega',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10084.png',
            description: 'It appears when it senses an impending natural disaster. As a result, it was mistaken as a doom bringer.',
            donation: 0.99,
            category: categories[3]._id
        },
        {
            name: 'accelgor',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/617.png',
            description: 'When its body dries out, it weakens. So, to prevent dehydration, it wraps itself in many layers of thin membrane.',
            donation: 0.99,
            category: categories[4]._id
        },
        {
            name: 'aegislash-blade',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10082.png',
            description: 'Generations ago, it was smelted into a sword. Its blade can deflect attacks when it is in blade form, and can cleave rock formations when it is in shield form.',
            donation: 0.99,
            category: categories[3]._id
        },
        {
            name: 'aegislash-shield',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10083.png',
            description: 'In this defensive stance, Aegislash uses its steel body and a force field of spectral power to reduce the damage of any attack.',
            donation: 0.99,
            category: categories[3]._id
        },
        {
            name: 'aerodactyl',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png',
            description: 'A ferocious, prehistoric POKéMON that goes for the enemy\'s throat with its serrated saw-like fangs.',
            donation: 0.99,
            category: categories[0]._id
        },
        {
            name: 'aerodactyl-mega',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10001.png',
            description: 'It was regenerated from a dinosaur\'s genetic matter that was found in amber. It flies with high-pitched cries.',
            donation: 0.99,
            category: categories[0]._id
        },
        {
            name: 'aggron',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png',
            description: 'While seeking iron for food, it digs tunnels by breaking through bedrock with its steel horns.',
            donation: 0.99,
            category: categories[3]._id
        },
        {
            name: 'aggron-mega',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10002.png',
            description: 'Its iron horns grow longer a little at a time. They are used to determine the AGGRON\'s age.',
            donation: 0.99,
            category: categories[3]._id
        },
        {
            name: 'aipom',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png',
            description: 'It lives atop tall trees. When leaping from branch to branch, it deftly uses its tail for balance.',
            donation: 0.99,
            category: categories[0]._id
        },
        {
            name: 'alakazam',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png',
            description: 'Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5,000.',
            donation: 0.99,
            category: categories[0]._id
        },
        {
            name: 'alakazam-mega',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10003.png',
            description: 'It has an incredibly high level of intelligence. Some say that Alakazam remembers everything that ever happens to it, from birth till death.',
            donation: 0.99,
            category: categories[0]._id
        },
        {
            name: 'alomomola',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/594.png',
            description: 'The special membrane enveloping Alomomola has the ability to heal wounds.',
            donation: 0.99,
            category: categories[4]._id
        },
        {
            name: 'altaria',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png',
            description: 'It hums in a beautiful soprano voice. It flies among white clouds in the blue sky.',
            donation: 0.99,
            category: categories[3]._id
        },
        {
            name: 'altaria-mega',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10004.png',
            description: 'It hums in a beautiful soprano voice. It flies among white clouds in the blue sky.',
            donation: 0.99,
            category: categories[3]._id
        },
        {
            name: 'amaura',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/698.png',
            description: 'This ancient Pokémon was restored from part of its body that had been frozen in ice for over 100 million years.',
            donation: 0.99,
            category: categories[3]._id
        },
        {
            name: 'ambipom',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/424.png',
            description: 'To eat, it deftly shucks nuts with its two tails. It rarely uses its arms now.',
            donation: 0.99,
            category: categories[3]._id
        },
        {
            name: 'amoonguss',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png',
            description: 'It lures prey close by dancing and waving its arm caps, which resemble Poké Balls, in a swaying motion.',
            donation: 0.99,
            category: categories[4]._id
        },
        {
            name: 'ampharos',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png',
            description: 'The tail\'s tip shines brightly and can be seen from far away. It acts as a beacon for lost people.',
            donation: 0.99,
            category: categories[3]._id
        },
        {
            name: 'ampharos-mega',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10005.png',
            description: 'The tail\'s tip shines brightly and can be seen from far away. It acts as a beacon for lost people.',
            donation: 0.99,
            category: categories[3]._id
        },
        {
            name: 'anorith',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png',
            description: 'Anorith was regenerated from a prehistoric fossil. This primitive Pokémon once lived in warm seas.',
            donation: 0.99,
            category: categories[3]._id
        },
        {
            name: 'araquanid',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/752.png',
            description: 'It delivers headbutts with the water bubble on its head. Small Pokémon get sucked into the bubble, where they drown.',
            donation: 0.99,
            category: categories[4]._id
        },
        {
            name: 'arbok',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png',
            description: 'The pattern on its belly appears to be a frightening face. Weak foes will flee just at the sight of the pattern.',
            donation: 0.99,
            category: categories[0]._id
        },
        {
            name: 'arcanine',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png',
            description: 'A POKéMON that has been admired since the past for its beauty. It runs agilely as if on wings.',
            donation: 0.99,
            category: categories[0]._id
        },
        {
            name: 'arceus',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png',
            description: 'It is said to have emerged from an egg in a place where there was nothing, then shaped the world.',
            donation: 0.99,
            category: categories[0]._id
        },
        {
            name: 'archen',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/566.png',
            description: 'It was revived from an ancient fossil. Not able to fly, it lived in treetops and hopped from one branch to another.',
            donation: 0.99,
            category: categories[3]._id
        },
        {
            name: 'archeops',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/567.png',
            description: 'They are intelligent and will cooperate to catch prey. From the ground, they use a running start to take flight.',
            donation: 0.99,
            category: categories[3]._id
        },
        {
            name: 'ariados',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png',
            description: 'It spins string not only from its rear but also from its mouth. It is hard to tell which end is which.',
            donation: 0.99,
            category: categories[0]._id
        },
        {
            name: 'armaldo',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/348.png',
            description: 'It went ashore after evolving. Its entire body is clad in a sturdy armor.',
            donation: 0.99,
            category: categories[3]._id
        },
        {
            name: 'aromatisse',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/683.png',
            description: 'It devises various scents, pleasant and unpleasant, and emits scents that its enemies dislike in order to gain an edge in battle.',
            donation: 0.99,
            category: categories[4]._id
        },
        {
            name: 'bagon',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/371.png',
            description: 'Dreaming of one day flying, it practices by leaping off cliffs every day.',
            donation: 0.99,
            category: categories[3]._id
        },
        {
            name: 'baltoy',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/343.png',
            description: 'It moves while spinning around on its single foot. Some BALTOY have been seen spinning on their heads.',
            donation: 0.99,
            category: categories[3]._id
        },
        {
            name: 'banette',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png',
            description: 'An abandoned plush doll became this Pokémon. They are said to live in garbage dumps and wander about in search of the children that threw them away.',
            donation: 0.99,
            category: categories[3]._id
        },
        {
            name: 'banette-mega',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10006.png',
            description: 'A doll that became a Pokémon over its grudge from being junked. It seeks the child that disowned it.',
            donation: 0.99,
            category: categories[3]._id
        },
        {
            name: 'barbaracle',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/689.png',
            description: 'When they evolve, two Binacle multiply into seven. They fight with the power of seven Binacle.',
            donation: 0.99,
            category: categories[4]._id
        },
        {
            name: 'barboach',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/339.png',
            description: 'It probes muddy riverbeds with its two long whiskers. A slimy film protects its body.',
            donation: 0.99,
            category: categories[3]._id
        },
        {
            name: 'basculin-blue-striped',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/550.png',
            description: 'Red and blue Basculin get along so poorly, they\'ll start fighting instantly. These Pokémon are very hostile.',
            donation: 0.99,
            category: categories[4]._id
        },
        {
            name: 'basculin-red-striped',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/550.png',
            description: 'Red and blue Basculin get along so poorly, they\'ll start fighting instantly. These Pokémon are very hostile.',
            donation: 0.99,
            category: categories[4]._id
        },
        {
            name: 'celebi',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png',
            description: 'This Pokémon came from the future by crossing over time. It is thought that so long as Celebi appears, a bright and shining future awaits us.',
            donation: 0.99,
            category: categories[0]._id
        },
        {
            name: 'chikorita',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png',
            description: 'A sweet aroma gently wafts from the leaf on its head. It is docile and loves to soak up the sun\'s rays.',
            donation: 0.99,
            category: categories[0]._id
        },
        {
            name: 'chimchar',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png',
            description: 'It agilely scales sheer cliffs to live atop craggy mountains. Its fire is put out when it sleeps.',
            donation: 0.99,
            category: categories[0]._id
        },
        {
            name: 'chinchou',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png',
            description: 'It shoots positive and negative electricity between the tips of its two antennae and zaps its enemies.',
            donation: 0.99,
            category: categories[0]._id
        },
        {
            name: 'chingling',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/433.png',
            description: 'Each time it hops, it makes a ringing sound. It deafens foes by emitting high-frequency cries.',
            donation: 0.99,
            category: categories[3]._id
        },
        {
            name: 'cinccino',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/573.png',
            description: 'Their white fur feels amazing to touch. Their fur repels dust and prevents static electricity from building up.',
            donation: 0.99,
            category: categories[4]._id
        },
        {
            name: 'clawitzer',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/693.png',
            description: 'It compresses the water it has sucked up and then projects it with enough power to punch a hole right through a thick sheet of iron.',
            donation: 0.99,
            category: categories[4]._id
        },
        {
            name: 'clefable',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png',
            description: 'A timid fairy POKéMON that is rarely seen. It will run and hide the moment it senses people.',
            donation: 0.99,
            category: categories[0]._id
        },
        {
            name: 'dialga',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png',
            description: 'A Pokémon spoken of in legend. It is said that time began moving when DIALGA was born.',
            donation: 0.99,
            category: categories[0]._id
        },
        {
            name: 'pickachu',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
            description: 'When several of these POKéMON gather, their electricity could build and cause lightning storms.',
            donation: 0.99,
            category: categories[0]._id
        },
    ]);

    console.log('pokemon seeds inserted!');
    await User.deleteMany();

    await User.create({
        username: 'pokiefan123',
        email: 'pokiefan@gmail.com',
        password: 'pokiepass1',
        savedpokemons: [
            {
                pokemon: [pokemon[0]._id, pokemon[1]._id, pokemon[2]._id, pokemon[4]._id]
            }
        ]
    });

    await User.create({
        username: 'bestpokie4',
        email: 'pokiebest@gmail.com',
        password: 'pokebest4',
    });

    console.log('please seed');
    process.exit();
});