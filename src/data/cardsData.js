const tarotCards = {
    allCards: [
        {
            "id": 1,
            "img": "/img/MajorArcana/the_fool.jpg",
            "suit": "Major Arcana",
            "number": 0,
            "name": "The Fool",
            "position": "Upright",
            "keywords": "Spontaneity, beginnings, the unfamiliar",
            "description": "Open and spontaneous, The Fool is ready to embark on their journey! " + 
                "Drawing The Fool is an excellent sign for you to get going. This is a rare moment, " +
                "for any step you take is the right one- all that matters is that you take it.",
        },
        {
            "id": 2,
            "img": "/img/MajorArcana/the_magician.jpg",
            "suit": "Major Arcana",
            "number": 1,
            "name": "The Magician",
            "position": "Upright",
            "keywords": "Manifestation, wisdom, power",
            "description": "Wise and powerful, The Magician is a symbol of our own talent and abilities. " +
                "They urge us to take charge and reassure us that the path we're currently on is the right one. " +
                "The power is already within you, if you nurture it.",
        },
        {
            "id": 3,
            "img": "/img/MajorArcana/the_high_priestess.jpg",
            "suit": "Major Arcana",
            "number": 2,
            "name": "The High Priestess",
            "position": "Upright",
            "keywords": "Mystery, intuition, unconscious mind",
            "description": "An enigmatic individual, The High Priestess is cloaked in mystery. " +
                "To know without knowing- that is what The High Priestess symbolizes. " +
                "Listen to yourself, your intuition is invaluable, and do not be afraid to be afraid for true fear " +
                "is one of our most powerful tools.",
        },
        {
            "id": 4,
            "img": "/img/MajorArcana/the_empress.jpg",
            "suit": "Major Arcana",
            "number": 3,
            "name": "The Empress",
            "position": "Upright",
            "keywords": "Femininity, nature, nurture",
            "description": "Warm and welcoming, The Empress represents gentleness and love. " +
            "She often appears when we need nurture in our lives, either in receiving it or in giving it to somebody else. " +
            "Maybe it would be a good idea to go outside and clear your head, and to go wandering through nature for a while.",
        },
        {
            "id": 5,
            "img": "/img/MajorArcana/the_emperor.jpg",
            "suit": "Major Arcana",
            "number": 4,
            "name": "The Emperor",
            "position": "Upright",
            "keywords": "Stability, authority, establishment",
            "description": "The Emperor is a no-nonsense individual and shows up when we need stability in our lives. " +
            "The Emperor is authority and rules, and represents the importance in having them- in moderation, of course. " +
            "This is a time to abide by the rules or make them.",
        },
        {
            "id": 6,
            "img": "/img/MajorArcana/the_hierophant.jpg",
            "suit": "Major Arcana",
            "number": 5,
            "name": "The Hierophant",
            "position": "Upright",
            "keywords": "Tradition, community, knowledge",
            "description": "The Hierophant is a teacher and also a community. " +
            "The Hierophant highlights the importance in having our own community and people we can call our own. " +
            "Occasionally the Hierophant can also represent a teacher in our lives, often someone older and in a position of authority, who can guide and help us.",
        },
        {
            "id": 7,
            "img": "/img/MajorArcana/the_lovers.jpg",
            "suit": "Major Arcana",
            "number": 6,
            "name": "The Lovers",
            "position": "Upright",
            "keywords": "Love, unity, balanced duality",
            "description": "In a world often divided by hate, sometimes the boldest choice is choosing love. " +
            "Find room for what you care for and that empowers you, whether that be people or a hobby. " +
            "Remember to bring and keep balance to your life.",
        },
        {
            "id": 8,
            "img": "/img/MajorArcana/the_chariot.jpg",
            "suit": "Major Arcana",
            "number": 7,
            "name": "The Chariot",
            "position": "Upright",
            "keywords": "Direction, determination, willpower",
            "description": "The Chariot card says simply to go forward. " + 
            "If you're unsure about whether or not you should do something, this is your green light to go full steam ahead. " + 
            "Let nothing stand in your way but be mindful to take care for yourself. " + 
            "After all, if even one part of a chariot breaks- the wheels, the horses not moving- you'll go nowhere fast.",
        },
        {
            "id": 9,
            "img": "/img/MajorArcana/strength.jpg",
            "suit": "Major Arcana",
            "number": 8,
            "name": "Strength",
            "position": "Upright",
            "keywords": "Compassion, strength, respect",
            "description": "Strength is not about brawn but about the power of our personal will. " + 
            "The woman, representing the mind, has her hand on the muzzle of the lion, and has earned control over the lion not through fear or intimidation but through peaceful persistence and also the personal courage to overcome her fears and try. " + 
            "The lion, representing the heart, respects the woman and stands fierce as the woman's protector, ready defend her. " + 
            "You possess both of these forces within you. " + 
            "It is through mutual respect and harmony that the true beauty and power of the Strength card comes forward. " + 
            "Be compassionate, kind, and unyielding.",
        },
        {
            "id": 10,
            "img": "/img/MajorArcana/the_hermit.jpg",
            "suit": "Major Arcana",
            "number": 9,
            "name": "The Hermit",
            "position": "Upright",
            "keywords": "Solitude, inner truth, introspection",
            "description": "Alone does not mean lonely. " + 
            "The Hermit stands alone in the dark, holding a lantern that cuts through the night. " + 
            "One might think The Hermit holds the lantern up for themselves, but perhaps they hold it up for you- the traveler searching for answers. " + 
            "There are times where we need to listen to the wisdom of those around us. " + 
            "When The Hermit appears, however, it is a sign that we need to listen to ourselves. " + 
            "Seek the wisdom of your own inner truth, and make sure that your inner light never goes out.",
        },
        {
            "id": 11,
            "img": "/img/MajorArcana/wheel_of_fortune.jpg",
            "suit": "Major Arcana",
            "number": 10,
            "name": "Wheel of Fortune",
            "position": "Upright",
            "keywords": "Change, good luck, cycles",
            "description": "Change is afoot! External forces are at work and good fortune is coming your way, if you've been worried about the outcome of something this is a positive sign. " + 
            "The Wheel of Fortune is always in motion, so enjoy yourself while you stand at the top, for the Wheel keeps going. " + 
            "Eventually you'll find yourself back at the bottom... and eventually back up at the top again. " + 
            "This is natural, just make sure you enjoy the ride.",
        },
        {
            "id": 12,
            "img": "/img/MajorArcana/justice.jpg",
            "suit": "Major Arcana",
            "number": 11,
            "name": "Justice",
            "position": "Upright",
            "keywords": "Karma, cause and effect, clarity",
            "description": "If you've been working hard and taking the right steps, you'll be rewarded for your efforts. " + 
            "If you've been slacking and making the wrong choices, well, that's exactly what you'll be getting back. " + 
            "You also might have a very important decision to make: ensure that whatever choice you make, it is as fair and balanced as possible. " + 
            "Be ethical, moral and honest. And heed this: Justice judges you based on your actions, not your intentions. Do you need this reminder?",
        },
        {
            "id": 13,
            "img": "/img/MajorArcana/the_hanged_man.jpg",
            "suit": "Major Arcana",
            "number": 12,
            "name": "The Hanged Man",
            "position": "Upright",
            "keywords": "New perspective, suspension, letting go",
            "description": "At first glance this is an unpleasant card. After all, who would want to be hoisted upside down, hanging by the ankle? " + 
            "Yet, the person hanging has done so willfully and intentionally. " + 
            "Like Odin they are seeking a special kind of truth and have learned that in order to receive and grow stronger, you must let go. " + 
            "See the world or the thing you're struggling with from a new perspective, just as The Hanged Man has turned themselves upside down to see the world in a way they never have before.",
        },
        {
            "id": 14,
            "img": "/img/MajorArcana/death.jpg",
            "suit": "Major Arcana",
            "number": 13,
            "name": "Death",
            "position": "Upright",
            "keywords": "Ending, beginning, transformation",
            "description": "Easily the most misunderstood tarot card, rarely is it about an actual death, instead it usually represents the ending of something and the inevitability of this ending- no matter who or what we are, Death always comes. " + 
            "Though we might mourn this ending, it is through these endings that new things may be born. " + 
            "Remember: Death is inevitable but life is what you make it. " + 
            "If you embrace these changes, you will find your life transforming in the most beautiful of ways. " + 
            "Enter this new phase with grace and power. Things are different and that is wonderful.",
        },
        {
            "id": 15,
            "img": "/img/MajorArcana/temperance.jpg",
            "suit": "Major Arcana",
            "number": 14,
            "name": "Temperance",
            "position": "Upright",
            "keywords": "Moderation, choices, patience",
            "description": "A calm and composed card, Temperance tells us neither to run nor to stop but to simply continue onward peacefully towards your goal. " + 
            "Do you have a dream or a sense of purpose? This is a sign to keep working towards it. " + 
            "If you've been living your life to one extreme or another, reel yourself back in and achieve balance. " + 
            "Be sure to find some meaning in your life or in the things you do.",
        },
        {
            "id": 16,
            "img": "/img/MajorArcana/the_devil.jpg",
            "suit": "Major Arcana",
            "number": 15,
            "name": "The Devil",
            "position": "Upright",
            "keywords": "Bondage, physicality, materialism",
            "description": "It's possible that you're allowing something in your life to control you, a negative addiction that you keep feeding and must free yourself from. " + 
            "On the other hand, sometimes The Devil can appear to say that you can 'be bad'. " + 
            "What's your guilty pleasure? If you've been working hard then maybe you should treat yourself a little and have that bite of chocolate. " + 
            "So the question here is: do you need to free yourself from fear or do you need to indulge?",
        },
        {
            "id": 17,
            "img": "/img/MajorArcana/the_tower.jpg",
            "suit": "Major Arcana",
            "number": 16,
            "name": "The Tower",
            "position": "Upright",
            "keywords": "Inevitable change, disaster, upheaval",
            "description": "The Tower, though often frightening to experience, is a good thing. " + 
            "Old habits and structures must be broken down in order for something newer and better to be built. " + 
            "Most importantly these changes and events are out of our control, and how we respond and learn from them is key. " + 
            "Sometimes the messiest moments of our lives are the things that make the best stories.",
        },
        {
            "id": 18,
            "img": "/img/MajorArcana/the_star.jpg",
            "suit": "Major Arcana",
            "number": 17,
            "name": "The Star",
            "position": "Upright",
            "keywords": "Hope, purpose, fate",
            "description": "The Star is always good news. It brings with it a sense of comfort, relief and peace. " + 
            "In the quietness of night we often look up at the stars and feel a sense of belonging to something greater than ourselves. " + 
            "If you've been feeling bleak and hopeless, take heed: you are right where you need to be.",
        },
        {
            "id": 19,
            "img": "/img/MajorArcana/the_moon.jpg",
            "suit": "Major Arcana",
            "number": 18,
            "name": "The Moon",
            "position": "Upright",
            "keywords": "Hysteria, fear, illusions",
            "description": "Have you ever looked at yourself in the mirror in the dark and watched your face begin to warp and change? " + 
            "The truth is, it isn't our face that has changed but our perception. " + 
            "The Moon is a card of fear, born from misunderstanding and our anxieties poisoning our minds. " + 
            "Change your perspective and you may find that things are not nearly as bad as you think they are.",
        },
        {
            "id": 20,
            "img": "/img/MajorArcana/the_sun.jpg",
            "suit": "Major Arcana",
            "number": 19,
            "name": "The Sun",
            "position": "Upright",
            "keywords": "Positivity, warmth, fun",
            "description": "This is a time for celebration! " + 
            "Kick back and relax or go out and have fun, either way, The Sun is always a welcome sight. " + 
            "Things are going to turn out okay, you've won the day and the sun is high. " + 
            "The warmth from this card fills us with rejuvenation and courage.",
        },
        {
            "id": 21,
            "img": "/img/MajorArcana/judgement.jpg",
            "suit": "Major Arcana",
            "number": 20,
            "name": "Judgement",
            "position": "Upright",
            "keywords": "Rebirth, calling, higher power",
            "description": "Judgement usually appears when we're on the precipice of changing our lives in meaningful ways. " + 
            "In the art we see an angel blowing a horn, bringing about the end of days and life to the dead who were slumbering peacefully in wait. " + 
            "This card is our own calling, a sign that a horn for your own resurrection has been used. " + 
            "Do you hear it? Find that feeling within you that drives you towards your inner purpose and let it lead you to where you need to be.",
        },
        {
            "id": 22,
            "img": "/img/MajorArcana/the_world.jpg",
            "suit": "Major Arcana",
            "number": 21,
            "name": "The World",
            "position": "Upright",
            "keywords": "Completion, end of a cycle, beginnings",
            "description": "The World is about completion and wholeness. " + 
            "If you aren't yet done with something, know that this is a sign you will find resounding success with whatever it is you're dealing with or doing. " + 
            "It's also possible you're about to travel to someplace new, either literally or metaphorically. " + 
            "Enjoy it. How beautiful is it to start on something new?",
        },
    ]
}

export { tarotCards };