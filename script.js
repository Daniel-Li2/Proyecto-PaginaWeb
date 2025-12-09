// --- BASE DE DATOS DE JUEGOS (50 TÍTULOS TOP) ---
const games = [
    {
        "id": 1,
        "name": "Minecraft",
        "genre": "Sandbox",
        "price": 29.99,
        "difficulty": 3,
        "difficultyText": "Baja",
        "rating": 4.8,
        "graphics": 6,
        "replayability": 10,
        "platforms": ["Todo"],
        "storyText": "Crea y sobrevive en un mundo infinito de bloques.",
        "experienceText": "Libertad creativa total.",
        "communityOpinion": "El juego más vendido de la historia."
    },
    {
        "id": 2,
        "name": "Grand Theft Auto V",
        "genre": "Acción / Mundo Abierto",
        "price": 14.99,
        "difficulty": 5,
        "difficultyText": "Media",
        "rating": 4.8,
        "graphics": 8,
        "replayability": 9,
        "platforms": ["PC", "PS", "Xbox"],
        "storyText": "Tres criminales arriesgan todo en Los Santos.",
        "experienceText": "Sátira, crimen y libertad absoluta.",
        "communityOpinion": "Incombustible gracias a GTA Online."
    },
    {
        "id": 3,
        "name": "The Witcher 3: Wild Hunt",
        "genre": "RPG",
        "price": 29.99,
        "difficulty": 6,
        "difficultyText": "Media-Alta",
        "rating": 4.9,
        "graphics": 8,
        "replayability": 8,
        "platforms": ["PC", "PS", "Xbox", "Switch"],
        "storyText": "Geralt busca a Ciri en un mundo en guerra.",
        "experienceText": "La mejor narrativa en un RPG moderno.",
        "communityOpinion": "Una obra maestra indiscutible."
    },
    {
        "id": 4,
        "name": "Elden Ring",
        "genre": "Soulslike",
        "price": 59.99,
        "difficulty": 10,
        "difficultyText": "Muy Alta",
        "rating": 4.9,
        "graphics": 9,
        "replayability": 9,
        "platforms": ["PC", "PS", "Xbox"],
        "storyText": "Conviértete en el Señor del Círculo.",
        "experienceText": "Exploración orgánica y combates épicos.",
        "communityOpinion": "Difícil, vasto y gratificante."
    },
    {
        "id": 5,
        "name": "Hollow Knight",
        "genre": "Metroidvania",
        "price": 14.99,
        "difficulty": 8,
        "difficultyText": "Alta",
        "rating": 4.9,
        "graphics": 8,
        "replayability": 8,
        "platforms": ["PC", "Consolas"],
        "storyText": "Un caballero explora un reino de insectos caído.",
        "experienceText": "Arte dibujado a mano y control perfecto.",
        "communityOpinion": "El rey de los juegos indie."
    },
    {
        "id": 6,
        "name": "Cyberpunk 2077",
        "genre": "RPG / FPS",
        "price": 59.99,
        "difficulty": 6,
        "difficultyText": "Media",
        "rating": 4.2,
        "graphics": 10,
        "replayability": 7,
        "platforms": ["PC", "PS5", "Xbox Series"],
        "storyText": "Un mercenario busca la inmortalidad en el futuro.",
        "experienceText": "Gráficos next-gen y ciudad inmersiva.",
        "communityOpinion": "Redimido tras sus actualizaciones."
    },
    {
        "id": 7,
        "name": "Stardew Valley",
        "genre": "Simulación",
        "price": 13.99,
        "difficulty": 2,
        "difficultyText": "Muy Baja",
        "rating": 4.9,
        "graphics": 5,
        "replayability": 10,
        "platforms": ["Todo"],
        "storyText": "Hereda una granja y conecta con el pueblo.",
        "experienceText": "Relajante, profundo y adictivo.",
        "communityOpinion": "Hecho con amor por una sola persona."
    },
    {
        "id": 8,
        "name": "Red Dead Redemption 2",
        "genre": "Western / Aventura",
        "price": 59.99,
        "difficulty": 5,
        "difficultyText": "Media",
        "rating": 4.9,
        "graphics": 10,
        "replayability": 7,
        "platforms": ["PC", "PS", "Xbox"],
        "storyText": "El fin de la era de los forajidos.",
        "experienceText": "Detalles obsesivos y realismo puro.",
        "communityOpinion": "Narrativa que te hará llorar."
    },
    {
        "id": 9,
        "name": "Fortnite",
        "genre": "Battle Royale",
        "price": 0,
        "difficulty": 7,
        "difficultyText": "Alta (Online)",
        "rating": 4.2,
        "graphics": 7,
        "replayability": 10,
        "platforms": ["Todo"],
        "storyText": "Sobrevive en una isla que cambia constantemente.",
        "experienceText": "Construcción, disparos y cultura pop.",
        "communityOpinion": "El metaverso de los videojuegos."
    },
    {
        "id": 10,
        "name": "God of War Ragnarök",
        "genre": "Acción",
        "price": 69.99,
        "difficulty": 6,
        "difficultyText": "Media-Alta",
        "rating": 4.9,
        "graphics": 10,
        "replayability": 6,
        "platforms": ["PS4", "PS5", "PC"],
        "storyText": "Kratos y Atreus contra los dioses nórdicos.",
        "experienceText": "Combate brutal y plano secuencia continuo.",
        "communityOpinion": "Cierre épico de la saga."
    },
    {
        "id": 11,
        "name": "League of Legends",
        "genre": "MOBA",
        "price": 0,
        "difficulty": 9,
        "difficultyText": "Muy Alta",
        "rating": 3.8,
        "graphics": 5,
        "replayability": 10,
        "platforms": ["PC"],
        "storyText": "Batalla estratégica 5v5 por el nexo.",
        "experienceText": "Profundo, competitivo y exigente.",
        "communityOpinion": "Juego increíble, chat difícil."
    },
    {
        "id": 12,
        "name": "EA Sports FC 24",
        "genre": "Deportes",
        "price": 69.99,
        "difficulty": 5,
        "difficultyText": "Ajustable",
        "rating": 3.5,
        "graphics": 9,
        "replayability": 9,
        "platforms": ["PC", "Consolas"],
        "storyText": "Simulador de fútbol líder.",
        "experienceText": "Fútbol realista y cartas coleccionables.",
        "communityOpinion": "El rey del fútbol, pese a las críticas."
    },
    {
        "id": 13,
        "name": "Zelda: Breath of the Wild",
        "genre": "Aventura",
        "price": 59.99,
        "difficulty": 6,
        "difficultyText": "Media",
        "rating": 5.0,
        "graphics": 8,
        "replayability": 9,
        "platforms": ["Switch"],
        "storyText": "Despierta para salvar Hyrule tras 100 años.",
        "experienceText": "Física y química en un mundo abierto real.",
        "communityOpinion": "Redefinió el género de mundo abierto."
    },
    {
        "id": 14,
        "name": "Among Us",
        "genre": "Social",
        "price": 3.99,
        "difficulty": 3,
        "difficultyText": "Baja",
        "rating": 4.3,
        "graphics": 3,
        "replayability": 8,
        "platforms": ["Todo"],
        "storyText": "Descubre al impostor antes de morir.",
        "experienceText": "Deducción social y mentiras.",
        "communityOpinion": "Risas aseguradas con amigos."
    },
    {
        "id": 15,
        "name": "Dark Souls 3",
        "genre": "RPG / Action",
        "price": 39.99,
        "difficulty": 9,
        "difficultyText": "Muy Alta",
        "rating": 4.8,
        "graphics": 8,
        "replayability": 8,
        "platforms": ["PC", "PS", "Xbox"],
        "storyText": "El fin de la edad del fuego.",
        "experienceText": "Jefes inolvidables y diseño gótico.",
        "communityOpinion": "Para muchos, el mejor Souls."
    },
    {
        "id": 16,
        "name": "Terraria",
        "genre": "Sandbox",
        "price": 9.99,
        "difficulty": 6,
        "difficultyText": "Media-Alta",
        "rating": 4.8,
        "graphics": 4,
        "replayability": 9,
        "platforms": ["Todo"],
        "storyText": "Explora y lucha en 2D.",
        "experienceText": "Mucho más combate y jefes que Minecraft.",
        "communityOpinion": "Contenido infinito y barato."
    },
    {
        "id": 17,
        "name": "Resident Evil 4 Remake",
        "genre": "Terror / Acción",
        "price": 59.99,
        "difficulty": 7,
        "difficultyText": "Alta",
        "rating": 4.9,
        "graphics": 9,
        "replayability": 7,
        "platforms": ["PC", "PS", "Xbox"],
        "storyText": "Salva a la hija del presidente en España.",
        "experienceText": "Acción tensa y gestión de recursos.",
        "communityOpinion": "Un remake perfecto."
    },
    {
        "id": 18,
        "name": "Baldur's Gate 3",
        "genre": "RPG Táctico",
        "price": 59.99,
        "difficulty": 7,
        "difficultyText": "Alta",
        "rating": 5.0,
        "graphics": 9,
        "replayability": 10,
        "platforms": ["PC", "PS5", "Xbox"],
        "storyText": "Rol puro basado en Dungeons & Dragons.",
        "experienceText": "Libertad de elección sin precedentes.",
        "communityOpinion": "El nuevo estándar del RPG."
    },
    {
        "id": 19,
        "name": "Super Mario Odyssey",
        "genre": "Plataformas",
        "price": 49.99,
        "difficulty": 4,
        "difficultyText": "Baja-Media",
        "rating": 4.9,
        "graphics": 8,
        "replayability": 7,
        "platforms": ["Switch"],
        "storyText": "Viaja por el mundo para rescatar a Peach.",
        "experienceText": "Diversión pura e imaginación.",
        "communityOpinion": "Mario en su mejor momento."
    },
    {
        "id": 20,
        "name": "Valorant",
        "genre": "Shooter Táctico",
        "price": 0,
        "difficulty": 9,
        "difficultyText": "Muy Alta",
        "rating": 4.1,
        "graphics": 6,
        "replayability": 10,
        "platforms": ["PC", "Consolas"],
        "storyText": "Agentes con poderes en un 5v5 táctico.",
        "experienceText": "Precisión milimétrica y estrategia.",
        "communityOpinion": "El rey actual de los eSports."
    },
    {
        "id": 21,
        "name": "The Last of Us Part I",
        "genre": "Acción / Aventura",
        "price": 69.99,
        "difficulty": 6,
        "difficultyText": "Media-Alta",
        "rating": 4.9,
        "graphics": 10,
        "replayability": 5,
        "platforms": ["PS5", "PC"],
        "storyText": "Joel y Ellie cruzan un EE.UU. postapocalíptico.",
        "experienceText": "Narrativa emotiva y supervivencia brutal.",
        "communityOpinion": "Posiblemente la mejor historia en un juego."
    },
    {
        "id": 22,
        "name": "Ghost of Tsushima",
        "genre": "Acción / Aventura",
        "price": 59.99,
        "difficulty": 6,
        "difficultyText": "Media",
        "rating": 4.7,
        "graphics": 10,
        "replayability": 6,
        "platforms": ["PS4", "PS5", "PC"],
        "storyText": "Un samurái defiende Japón de los mongoles.",
        "experienceText": "Combate de katana y paisajes hermosos.",
        "communityOpinion": "Visualmente es una obra de arte."
    },
    {
        "id": 23,
        "name": "Marvel's Spider-Man 2",
        "genre": "Acción",
        "price": 69.99,
        "difficulty": 4,
        "difficultyText": "Media",
        "rating": 4.6,
        "graphics": 9,
        "replayability": 6,
        "platforms": ["PS5"],
        "storyText": "Peter y Miles luchan contra Venom y Kraven.",
        "experienceText": "Balancearse por Nueva York es increíble.",
        "communityOpinion": "El mejor juego de superhéroes."
    },
    {
        "id": 24,
        "name": "Mario Kart 8 Deluxe",
        "genre": "Carreras",
        "price": 49.99,
        "difficulty": 3,
        "difficultyText": "Baja (Fácil de aprender)",
        "rating": 4.8,
        "graphics": 8,
        "replayability": 10,
        "platforms": ["Switch"],
        "storyText": "Carreras alocadas con objetos.",
        "experienceText": "Diversión familiar y rompe-amistades.",
        "communityOpinion": "Esencial si tienes una Switch."
    },
    {
        "id": 25,
        "name": "Super Smash Bros. Ultimate",
        "genre": "Lucha",
        "price": 59.99,
        "difficulty": 7,
        "difficultyText": "Alta (Competitivo)",
        "rating": 4.8,
        "graphics": 8,
        "replayability": 10,
        "platforms": ["Switch"],
        "storyText": "Todos los personajes de videojuegos se pegan.",
        "experienceText": "Caos divertido o técnico competitivo.",
        "communityOpinion": "El mayor crossover de la historia."
    },
    {
        "id": 26,
        "name": "Overwatch 2",
        "genre": "Hero Shooter",
        "price": 0,
        "difficulty": 7,
        "difficultyText": "Alta",
        "rating": 3.5,
        "graphics": 7,
        "replayability": 9,
        "platforms": ["Todo"],
        "storyText": "Héroes luchan por objetivos en equipo.",
        "experienceText": "Sinergia de habilidades y roles.",
        "communityOpinion": "Jugabilidad divertida, monetización criticada."
    },
    {
        "id": 27,
        "name": "Counter-Strike 2",
        "genre": "Shooter Táctico",
        "price": 0,
        "difficulty": 9,
        "difficultyText": "Muy Alta",
        "rating": 4.4,
        "graphics": 8,
        "replayability": 10,
        "platforms": ["PC"],
        "storyText": "Terroristas vs Anti-Terroristas.",
        "experienceText": "El shooter competitivo por excelencia.",
        "communityOpinion": "Eterno y exigente."
    },
    {
        "id": 28,
        "name": "Roblox",
        "genre": "Plataforma / Sandbox",
        "price": 0,
        "difficulty": 2,
        "difficultyText": "Variable",
        "rating": 4.0,
        "graphics": 4,
        "replayability": 10,
        "platforms": ["Todo"],
        "storyText": "Millones de juegos creados por usuarios.",
        "experienceText": "Desde terror hasta simulación de vida.",
        "communityOpinion": "El favorito de los más jóvenes."
    },
    {
        "id": 29,
        "name": "Rocket League",
        "genre": "Deportes / Coches",
        "price": 0,
        "difficulty": 8,
        "difficultyText": "Alta (Difícil de dominar)",
        "rating": 4.5,
        "graphics": 7,
        "replayability": 10,
        "platforms": ["Todo"],
        "storyText": "Fútbol con coches propulsados.",
        "experienceText": "Físicas únicas y partidos rápidos.",
        "communityOpinion": "Fácil de jugar, imposible de dominar."
    },
    {
        "id": 30,
        "name": "Genshin Impact",
        "genre": "RPG / Gacha",
        "price": 0,
        "difficulty": 5,
        "difficultyText": "Media",
        "rating": 4.4,
        "graphics": 9,
        "replayability": 9,
        "platforms": ["PC", "PS", "Móvil"],
        "storyText": "Viaja por Teyvat buscando a tu hermano.",
        "experienceText": "Mundo abierto precioso y combate elemental.",
        "communityOpinion": "Calidad AAA gratis, pero cuidado con el gacha."
    },
    {
        "id": 31,
        "name": "Final Fantasy VII Remake",
        "genre": "RPG Acción",
        "price": 39.99,
        "difficulty": 6,
        "difficultyText": "Media",
        "rating": 4.7,
        "graphics": 9,
        "replayability": 6,
        "platforms": ["PS4", "PS5", "PC"],
        "storyText": "Cloud lucha contra Shinra y Sefirot.",
        "experienceText": "Mezcla perfecta de acción y turnos.",
        "communityOpinion": "Nostalgia renovada magistralmente."
    },
    {
        "id": 32,
        "name": "Resident Evil 2 Remake",
        "genre": "Terror",
        "price": 39.99,
        "difficulty": 6,
        "difficultyText": "Media-Alta",
        "rating": 4.8,
        "graphics": 9,
        "replayability": 7,
        "platforms": ["Todo"],
        "storyText": "Leon y Claire sobreviven en Raccoon City.",
        "experienceText": "Zombies aterradores y puzles.",
        "communityOpinion": "El ejemplo de cómo hacer un remake."
    },
    {
        "id": 33,
        "name": "Sekiro: Shadows Die Twice",
        "genre": "Acción / Soulslike",
        "price": 59.99,
        "difficulty": 10,
        "difficultyText": "Muy Alta",
        "rating": 4.9,
        "graphics": 9,
        "replayability": 7,
        "platforms": ["PC", "PS", "Xbox"],
        "storyText": "Un ninja busca rescatar a su amo.",
        "experienceText": "Combate rítmico basado en parries.",
        "communityOpinion": "El combate más satisfactorio jamás hecho."
    },
    {
        "id": 34,
        "name": "Bloodborne",
        "genre": "Soulslike",
        "price": 19.99,
        "difficulty": 9,
        "difficultyText": "Muy Alta",
        "rating": 4.9,
        "graphics": 8,
        "replayability": 8,
        "platforms": ["PS4", "PS5"],
        "storyText": "Caza bestias en una noche de pesadilla.",
        "experienceText": "Rápido, agresivo y Lovecraftiano.",
        "communityOpinion": "Joya de culto de PlayStation."
    },
    {
        "id": 35,
        "name": "Horizon Forbidden West",
        "genre": "Acción / Aventura",
        "price": 49.99,
        "difficulty": 5,
        "difficultyText": "Media",
        "rating": 4.6,
        "graphics": 10,
        "replayability": 6,
        "platforms": ["PS4", "PS5", "PC"],
        "storyText": "Aloy viaja al oeste para salvar la biosfera.",
        "experienceText": "Combate contra dinosaurios robot.",
        "communityOpinion": "Gráficamente insuperable."
    },
    {
        "id": 36,
        "name": "Uncharted 4",
        "genre": "Aventura",
        "price": 19.99,
        "difficulty": 4,
        "difficultyText": "Media",
        "rating": 4.8,
        "graphics": 9,
        "replayability": 5,
        "platforms": ["PS4", "PS5", "PC"],
        "storyText": "El retiro de Nathan Drake se interrumpe.",
        "experienceText": "Como jugar una película de Indiana Jones.",
        "communityOpinion": "Un final perfecto para la saga."
    },
    {
        "id": 37,
        "name": "Doom Eternal",
        "genre": "FPS",
        "price": 39.99,
        "difficulty": 8,
        "difficultyText": "Alta",
        "rating": 4.8,
        "graphics": 9,
        "replayability": 7,
        "platforms": ["Todo"],
        "storyText": "El Doom Slayer mata demonios en la Tierra.",
        "experienceText": "Frenético, brutal y metalero.",
        "communityOpinion": "El mejor FPS para un jugador."
    },
    {
        "id": 38,
        "name": "Hades",
        "genre": "Roguelike",
        "price": 24.99,
        "difficulty": 7,
        "difficultyText": "Alta",
        "rating": 4.9,
        "graphics": 8,
        "replayability": 10,
        "platforms": ["Todo"],
        "storyText": "Escapa del infierno griego una y otra vez.",
        "experienceText": "Combate fluido y narrativa que avanza al morir.",
        "communityOpinion": "Adictivo y con estilo."
    },
    {
        "id": 39,
        "name": "Celeste",
        "genre": "Plataformas",
        "price": 19.99,
        "difficulty": 8,
        "difficultyText": "Alta",
        "rating": 4.9,
        "graphics": 7,
        "replayability": 6,
        "platforms": ["Todo"],
        "storyText": "Escala una montaña y supera la ansiedad.",
        "experienceText": "Desafiante pero con un mensaje precioso.",
        "communityOpinion": "Obra maestra indie."
    },
    {
        "id": 40,
        "name": "Cuphead",
        "genre": "Run and Gun",
        "price": 19.99,
        "difficulty": 9,
        "difficultyText": "Muy Alta",
        "rating": 4.7,
        "graphics": 9,
        "replayability": 7,
        "platforms": ["Todo"],
        "storyText": "Paga tu deuda con el diablo.",
        "experienceText": "Jefes difíciles con estética años 30.",
        "communityOpinion": "Visualmente único, jugablemente castigador."
    },
    {
        "id": 41,
        "name": "Undertale",
        "genre": "RPG",
        "price": 9.99,
        "difficulty": 5,
        "difficultyText": "Media",
        "rating": 4.9,
        "graphics": 4,
        "replayability": 8,
        "platforms": ["Todo"],
        "storyText": "Un niño cae al subsuelo de los monstruos.",
        "experienceText": "El RPG donde no tienes que matar a nadie.",
        "communityOpinion": "Una historia que te cambia la vida."
    },
    {
        "id": 42,
        "name": "Animal Crossing: New Horizons",
        "genre": "Simulación",
        "price": 59.99,
        "difficulty": 1,
        "difficultyText": "Muy Baja",
        "rating": 4.7,
        "graphics": 7,
        "replayability": 10,
        "platforms": ["Switch"],
        "storyText": "Crea tu paraíso en una isla desierta.",
        "experienceText": "Decoración, pesca y vecinos animales.",
        "communityOpinion": "El juego más relajante del mundo."
    },
    {
        "id": 43,
        "name": "The Sims 4",
        "genre": "Simulación",
        "price": 0,
        "difficulty": 2,
        "difficultyText": "Baja",
        "rating": 4.0,
        "graphics": 6,
        "replayability": 10,
        "platforms": ["Todo"],
        "storyText": "Controla la vida de gente virtual.",
        "experienceText": "Construye casas y crea dramas.",
        "communityOpinion": "Base gratis, pero muchos DLCs caros."
    },
    {
        "id": 44,
        "name": "Civilization VI",
        "genre": "Estrategia",
        "price": 59.99,
        "difficulty": 7,
        "difficultyText": "Alta (Mental)",
        "rating": 4.6,
        "graphics": 6,
        "replayability": 10,
        "platforms": ["Todo"],
        "storyText": "Lleva una civilización de la edad de piedra al futuro.",
        "experienceText": "Sólo un turno más...",
        "communityOpinion": "Profundo y adictivo."
    },
    {
        "id": 45,
        "name": "Dead by Daylight",
        "genre": "Terror Asimétrico",
        "price": 19.99,
        "difficulty": 6,
        "difficultyText": "Media-Alta",
        "rating": 4.0,
        "graphics": 6,
        "replayability": 10,
        "platforms": ["Todo"],
        "storyText": "4 supervivientes contra 1 asesino.",
        "experienceText": "El escondite pero con asesinos de películas.",
        "communityOpinion": "Divertido con amigos, tenso solo."
    },
    {
        "id": 46,
        "name": "Phasmophobia",
        "genre": "Terror",
        "price": 13.99,
        "difficulty": 6,
        "difficultyText": "Media",
        "rating": 4.7,
        "graphics": 5,
        "replayability": 9,
        "platforms": ["PC", "Consolas"],
        "storyText": "Investiga casas embrujadas con amigos.",
        "experienceText": "Usa tu voz real para hablar con fantasmas.",
        "communityOpinion": "Terrorífico y genial en cooperativo."
    },
    {
        "id": 47,
        "name": "Sea of Thieves",
        "genre": "Aventura / Piratas",
        "price": 39.99,
        "difficulty": 5,
        "difficultyText": "Media",
        "rating": 4.3,
        "graphics": 8,
        "replayability": 9,
        "platforms": ["PC", "Xbox", "PS5"],
        "storyText": "Sé el pirata que quieras ser.",
        "experienceText": "Navegación realista y caos con amigos.",
        "communityOpinion": "Mejor con tripulación conocida."
    },
    {
        "id": 48,
        "name": "Fallout 4",
        "genre": "RPG / Shooter",
        "price": 19.99,
        "difficulty": 5,
        "difficultyText": "Media",
        "rating": 4.4,
        "graphics": 7,
        "replayability": 8,
        "platforms": ["PC", "PS", "Xbox"],
        "storyText": "Busca a tu hijo en el yermo nuclear de Boston.",
        "experienceText": "Exploración, disparos y construcción de bases.",
        "communityOpinion": "Gran mundo, rol simplificado."
    },
    {
        "id": 49,
        "name": "The Elder Scrolls V: Skyrim",
        "genre": "RPG",
        "price": 39.99,
        "difficulty": 4,
        "difficultyText": "Media",
        "rating": 4.8,
        "graphics": 6,
        "replayability": 10,
        "platforms": ["Todo"],
        "storyText": "Eres el Sangre de Dragón.",
        "experienceText": "Libertad absoluta en un mundo nórdico.",
        "communityOpinion": "Eterno gracias a los mods."
    },
    {
        "id": 50,
        "name": "Palworld",
        "genre": "Supervivencia",
        "price": 29.99,
        "difficulty": 5,
        "difficultyText": "Media",
        "rating": 4.5,
        "graphics": 7,
        "replayability": 8,
        "platforms": ["PC", "Xbox"],
        "storyText": "Captura criaturas y construye una base.",
        "experienceText": "Como Pokémon pero con armas y supervivencia.",
        "communityOpinion": "El fenómeno viral más reciente."
    }
  ];
  
  // VARIABLES GLOBALES
  let selectedGame1 = null;
  let selectedGame2 = null;
  let isAscending = true; // Controla el orden (ascendente/descendente)
  
  // FUNCIONES DE ORDENACIÓN Y FILTRADO
  function toggleSortOrder() {
    isAscending = !isAscending;
    const btn = document.getElementById('sortOrderBtn');
    
    if(isAscending) {
        btn.innerText = "⬆️ Ascendente"; // Menor a mayor
    } else {
        btn.innerText = "⬇️ Descendente"; // Mayor a menor
    }
    
    applyFilters();
  }
  
  function applyFilters() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const sortField = document.getElementById('sortField').value;
    
    // 1. FILTRADO
    let filteredData = games.filter(game => {
        // Creamos una cadena gigante con toda la info del juego para buscar ahí
        const searchableText = `
            ${game.name} 
            ${game.genre} 
            ${game.platforms.join(" ")} 
            ${game.storyText}
        `.toLowerCase();
        
        return searchableText.includes(searchText);
    });
  
    // 2. ORDENACIÓN
    filteredData.sort((a, b) => {
        let valA = a[sortField];
        let valB = b[sortField];
  
        // Si es texto, lo pasamos a minusculas para evitar errores
        if (typeof valA === 'string') valA = valA.toLowerCase();
        if (typeof valB === 'string') valB = valB.toLowerCase();
  
        if (valA < valB) return isAscending ? -1 : 1;
        if (valA > valB) return isAscending ? 1 : -1;
        return 0;
    });
  
    // Actualizar el contador de resultados
    const countText = filteredData.length === games.length 
        ? "Mostrando todos los juegos" 
        : `Encontrados: ${filteredData.length} juegos`;
    document.getElementById('resultsCount').innerText = countText;
  
    renderGames(filteredData);
  }
  
  // RENDERIZADO (DIBUJAR LAS TARJETAS)
  function renderGames(dataToRender) {
    const grid = document.getElementById('gamesGrid');
    
    if (dataToRender.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #666;">
                <h3>😢 No se encontraron juegos</h3>
                <p>Prueba con otro nombre o categoría.</p>
            </div>`;
        return;
    }
  
    grid.innerHTML = dataToRender.map(game => `
        <div class="game-card" onclick="selectGame(${game.id})">
            <div class="game-card-header">
                <h3>${game.name}</h3>
                <p class="game-genre">${game.genre}</p>
            </div>
            <div class="game-card-body">
                <div class="quick-stats">
                    <span class="stat-item">💰 ${game.price === 0 ? 'Gratis' : game.price + '€'}</span>
                    <span class="stat-item">⭐ ${game.rating}</span>
                </div>
                <div class="quick-stats">
                    <span class="stat-item">⚔️ ${game.difficultyText}</span>
                </div>
                <div class="platforms-mini">
                    ${game.platforms.slice(0, 3).join(' • ')}
                </div>
            </div>
        </div>
    `).join('');
  }
  
  // LÓGICA DE SELECCIÓN Y COMPARACIÓN
  function selectGame(gameId) {
    const game = games.find(g => g.id === gameId);
    
    // Si no hay ninguno seleccionado, llena el hueco 1
    if (!selectedGame1) {
        selectedGame1 = game;
        updateSelectedDisplay(1, game);
    } 
    // Si hay uno, y el clicado no es el mismo, llena el hueco 2
    else if (!selectedGame2 && gameId !== selectedGame1.id) {
        selectedGame2 = game;
        updateSelectedDisplay(2, game);
    } 
    // Si ya hay dos, resetea y pone el nuevo en el hueco 1
    else if (selectedGame1 && selectedGame2) {
        selectedGame1 = game;
        selectedGame2 = null;
        updateSelectedDisplay(1, game);
        updateSelectedDisplay(2, null);
        document.getElementById('comparisonResult').style.display = 'none';
    }
    
    // Habilitar o deshabilitar botón comparar
    document.getElementById('compareBtn').disabled = !(selectedGame1 && selectedGame2);
  }
  
  function updateSelectedDisplay(slot, game) {
    const display = document.getElementById(`selected${slot}`);
    
    if (game) {
        display.innerHTML = `
            <div class="selected-game-content">
                <h3>${game.name}</h3>
                <p>${game.genre}</p>
                <div class="selected-stats">
                    <span>${game.price === 0 ? 'Gratis' : game.price + '€'}</span>
                    <span>⭐ ${game.rating}</span>
                </div>
            </div>
        `;
        display.classList.add('has-game');
    } else {
        display.innerHTML = '<p class="placeholder">Haz clic en una tarjeta para seleccionar</p>';
        display.classList.remove('has-game');
    }
  }
  
  function compareGames() {
    if (!selectedGame1 || !selectedGame2) return;
    
    const resultDiv = document.getElementById('comparisonResult');
    const contentDiv = document.getElementById('comparisonContent');
    
    contentDiv.innerHTML = `
        <div class="comparison-grid">
            ${renderColumn(selectedGame1, selectedGame2)}
            <div class="vs-divider">
                <div class="vs-circle">VS</div>
            </div>
            ${renderColumn(selectedGame2, selectedGame1)}
        </div>
    `;
    
    resultDiv.style.display = 'block';
    resultDiv.scrollIntoView({ behavior: 'smooth' });
  }
  
  function renderColumn(game, opponent) {
    // Determinar ganadores (verde)
    const winPrice = game.price < opponent.price ? 'winner' : '';
    const winRate = game.rating > opponent.rating ? 'winner' : '';
    const winGraph = game.graphics > opponent.graphics ? 'winner' : '';
    const winRep = game.replayability > opponent.replayability ? 'winner' : '';
    
    return `
    <div class="game-column">
        <h3>${game.name}</h3>
        
        <div class="stat-row">
            <span class="label">💰 Precio</span>
            <span class="value ${winPrice}">${game.price === 0 ? 'Gratis' : game.price + '€'}</span>
        </div>
  
        <div class="stat-row">
            <span class="label">⚔️ Dificultad</span>
            <span class="value">${game.difficultyText} (${game.difficulty}/10)</span>
            <div class="bar-container"><div class="bar-fill" style="width: ${game.difficulty * 10}%"></div></div>
        </div>
  
        <div class="stat-row">
            <span class="label">⭐ Valoración</span>
            <span class="value ${winRate}">${game.rating}/5</span>
        </div>
  
        <div class="stat-row">
            <span class="label">🎨 Gráficos</span>
            <span class="value ${winGraph}">${game.graphics}/10</span>
            <div class="bar-container"><div class="bar-fill" style="width: ${game.graphics * 10}%"></div></div>
        </div>
  
        <div class="stat-row">
            <span class="label">🔄 Rejugabilidad</span>
            <span class="value ${winRep}">${game.replayability}/10</span>
            <div class="bar-container"><div class="bar-fill" style="width: ${game.replayability * 10}%"></div></div>
        </div>
  
        <div class="detail-box">
            <p><strong>📖 Historia:</strong> ${game.storyText}</p>
            <p><strong>🎮 Experiencia:</strong> ${game.experienceText}</p>
            <p><strong>💬 Opinión:</strong> ${game.communityOpinion}</p>
        </div>
    </div>`;
  }
  
  function resetComparison() {
    selectedGame1 = null;
    selectedGame2 = null;
    updateSelectedDisplay(1, null);
    updateSelectedDisplay(2, null);
    document.getElementById('compareBtn').disabled = true;
    document.getElementById('comparisonResult').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Inicializar la app mostrando todos los juegos al principio
  applyFilters();