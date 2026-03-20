// Extracted static content from App.tsx for maintainability

import type { AppContent } from '../domain/content/types'

export const dungeonGuides = [
  {
    id: 'steamers',
    name: { fr: 'Donjon Steamers', en: 'Foggernaut Dungeon', es: 'Mazmorra Steamers' },
    subtitle: { fr: 'Boss: Sir Comte Flex', en: 'Boss: Sir Comte Flex', es: 'Jefe: Sir Comte Flex' },
    levelRange: { fr: 'Niv. 216-230', en: 'Lvl. Niv. 216-230', es: 'Niv. Niv. 216-230' },
    summary: [
      {
        fr: "Restez attentif au passif Reserve de Stasis qui augmente les resistances elementaires et debloque l'Ultime.",
        en: "Watch out for the Stasis Reserve passive which increases elemental resistances and unlocks the Ultimate.",
        es: "Ten cuidado con el pasivo Reserva de Estasis que aumenta resistencias elementales y desbloquea la Habilidad Definitiva.",
      },
      {
        fr: 'Evitez de monter la reserve de stasis des monstres au niveau 5 ou plus.',
        en: 'Avoid raising monster Stasis Reserve to level 5 or higher.',
        es: 'Evita subir la Reserva de Estasis de los monstruos al nivel 5 o superior.',
      },
      {
        fr: "Evitez d'etre proche (3 cases) d'un allie pour limiter les zones des artilleurs.",
        en: "Avoid being close (3 cells) to an ally to limit Gunner zones.",
        es: "Evita estar cerca (3 celdas) de un aliado para limitar las zonas de los Artilleros.",
      },
      {
        fr: "Empechez les mekanos de lancer Remontage sur leurs allies.",
        en: "Prevent Mekanos from casting Overhaul on their allies.",
        es: "Impide que los Mekanos lancen Retoque sobre sus aliados.",
      },
      {
        fr: 'Limitez vos degats directs sur les unites stasificatrices.',
        en: 'Limit direct damage on Stasis Units.',
        es: 'Limita el daño directo sobre las Unidades Estasificadoras.',
      },
      {
        fr: 'Passif rouge: ne pas rester en melee.',
        en: 'Red passive: do not stay in melee.',
        es: 'Pasivo rojo: no permanezcas en combate cuerpo a cuerpo.',
      },
      {
        fr: 'Passif vert: ne pas infliger de degats directs.',
        en: 'Green passive: do not deal direct damage.',
        es: 'Pasivo verde: no inflige daño directo.',
      },
      {
        fr: "Passif violet: ne pas etre proche (3 cases) d'un allie.",
        en: "Purple passive: do not be close (3 cells) to an ally.",
        es: "Pasivo púrpura: no estés cerca (3 celdas) de un aliado.",
      },
    ],
    monsters: [
      {
        name: { fr: "Artilleur d'elite", en: "Elite Gunner", es: "Artillero de élite" },
        level: { fr: 'Niv. 224 (Stasis 2)', en: 'Lvl. 224 (Stasis 2)', es: 'Niv. 224 (Estasis 2)' },
        bonus: { fr: 'Bonus de Velocite: 50% Dommages infliges', en: 'Speed Bonus: 50% Increased Damage', es: 'Bonificación de Velocidad: 50% Daño Aumentado' },
        description: { fr: "Il possede 2 sorts, 1 passif et il n'a pas de faiblesse specifique.", en: "Has 2 spells, 1 passive and no specific weakness.", es: "Tiene 2 hechizos, 1 pasivo y no tiene debilidad específica." },
        spells: [
          {
            name: { fr: 'Explosis', en: 'Explosis', es: 'Explosis' },
            effect: { fr: 'Sort de zone. Inflige des degats Stasis et rebondit X fois a 3 cases des cibles.', en: 'AoE spell. Deals Stasis damage and bounces X times to targets within 3 cells.', es: 'Hechizo de área. Inflige daño Estasis y rebota X veces a objetivos a 3 celdas.' },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            range: { fr: '2-10 PO, en ligne', en: '2-10 Range, line', es: '2-10 PO, en línea' },
            limit: { fr: '1/cible, 3/tour', en: '1/target, 3/turn', es: '1/objetivo, 3/turno' },
          },
          {
            name: { fr: 'Bombardement Stasis', en: 'Stasis Bombardment', es: 'Bombardeo Estasis' },
            tag: { fr: 'Ultime', en: 'Ultimate', es: 'Definitiva' },
            effect: { fr: 'Sort de zone en cercle de taille 2 autour de chaque cible. Cible aleatoirement X ennemis.', en: 'AoE spell in size-2 circle around each target. Randomly targets X enemies.', es: 'Hechizo de área en círculo tamaño 2 alrededor de cada objetivo. Apunta aleatoriamente a X enemigos.' },
            cost: { fr: '0 PA', en: '0 AP', es: '0 PA' },
            limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
          },
        ],
        passive: { fr: "A chaque rebond effectue, +1 reserve de stasis. A la mort, inflige des degats stasis en cercle de taille 2.", en: "Each bounce gives +1 Stasis Reserve. On death, deals Stasis damage in size-2 circle.", es: "Cada rebote da +1 Reserva de Estasis. Al morir, inflige daño Estasis en círculo tamaño 2." },
        notes: [],
        stats: [
          { fr: 'PV 22.172', en: 'HP 22,172', es: 'PV 22.172' },
          { fr: 'PA 14', en: 'AP 14', es: 'PA 14' },
          { fr: 'PM 6', en: 'MP 6', es: 'PM 6' },
          { fr: 'PW 0', en: 'WP 0', es: 'PW 0' },
          { fr: 'Initiative 400', en: 'Initiative 400', es: 'Iniciativa 400' },
          { fr: 'Tacle 350', en: 'Lock 350', es: 'Placaje 350' },
          { fr: 'Esquive 1600', en: 'Dodge 1,600', es: 'Esquiva 1600' },
          { fr: 'Parade 10%', en: 'Block 10%', es: 'Parada 10%' },
          { fr: 'Critique 35%', en: 'Critical 35%', es: 'Crítico 35%' },
          { fr: 'Volonte 20', en: 'Willpower 20', es: 'Voluntad 20' },
          { fr: 'Resist 74% (610)', en: 'Resist 74% (610)', es: 'Resist 74% (610)' },
        ],
      },
      {
        name: { fr: 'Mekano', en: 'Mekano', es: 'Mekano' },
        level: { fr: 'Niv. 218 (Stasis 2)', en: 'Lvl. 218 (Stasis 2)', es: 'Niv. 218 (Estasis 2)' },
        bonus: { fr: 'Bonus de Velocite: 2 PM', en: 'Speed Bonus: 2 MP', es: 'Bonificación de Velocidad: 2 PM' },
        description: { fr: "Il possede 3 sorts, 1 passif et il n'a pas de faiblesse specifique.", en: "Has 3 spells, 1 passive and no specific weakness.", es: "Tiene 3 hechizos, 1 pasivo y no tiene debilidad específica." },
        spells: [
          {
            name: { fr: 'Remontage', en: 'Wind-up', es: 'Remonte' },
            effect: { fr: "Soigne et donne de l'armure a un allie (20 % PdV max du Mekano).", en: "Heals and gives armor to an ally (20% of Mekano's max HP).", es: "Cura y da armadura a un aliado (20% de PV máx. del Mekano)." },
            cost: { fr: '3 PA', en: '3 AP', es: '3 PA' },
            range: { fr: '1-2 PO', en: '1-2 Range', es: '1-2 PO' },
            limit: { fr: '1/cible, 3/tour', en: '1/target, 3/turn', es: '1/objetivo, 3/turno' },
          },
          {
            name: { fr: 'Coup de clef', en: 'Wrench Strike', es: 'Golpe de llave' },
            effect: { fr: 'Inflige des degats Stasis.', en: 'Deals Stasis damage.', es: 'Inflige daño Estasis.' },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            range: { fr: '1 PO', en: '1 Range', es: '1 PO' },
            limit: { fr: '1/cible, 3/tour', en: '1/target, 3/turn', es: '1/objetivo, 3/turno' },
          },
          {
            name: { fr: 'Transmission', en: 'Transmission', es: 'Transmisión' },
            tag: { fr: 'Ultime', en: 'Ultimate', es: 'Definitiva' },
            effect: { fr: "Maximise la reserve de stasis d'un allie (boss compris) et donne un bonus de X fois 10 % Di (1 tour).", en: "Maximizes an ally's Stasis Reserve (boss included) and gives a bonus of X times 10% increased damage (1 turn).", es: "Maximiza la Reserva de Estasis de un aliado (jefe incluido) y da una bonificación de X veces 10% daño aumentado (1 turno)." },
            cost: { fr: '0 PA', en: '0 AP', es: '0 PA' },
          },
        ],
        passive: { fr: "A chaque don d'armure a un allie, +1 reserve de stasis. En fin de tour, pose X mines de stasis. A la mort, degats stasis autour de chaque mine.", en: "Each armor given to an ally gives +1 Stasis Reserve. End of turn, places X Stasis mines. On death, Stasis damage around each mine.", es: "Cada armadura dada a un aliado da +1 Reserva de Estasis. Fin de turno, coloca X minas de Estasis. Al morir, daño Estasis alrededor de cada mina." },
        notes: [
          { fr: "Attention: le Mekano peut utiliser son Ultime le tour meme ou il passe a 5 reserve de stasis.", en: "Warning: Mekano can use its Ultimate the same turn it reaches 5 Stasis Reserve.", es: "Advertencia: El Mekano puede usar su Definitiva el mismo turno en que alcanza 5 Reserva de Estasis." },
        ],
        stats: [
          { fr: 'PV 19.491', en: 'HP 19,491', es: 'PV 19.491' },
          { fr: 'PA 14', en: 'AP 14', es: 'PA 14' },
          { fr: 'PM 6', en: 'MP 6', es: 'PM 6' },
          { fr: 'PW 0', en: 'WP 0', es: 'PW 0' },
          { fr: 'Initiative 400', en: 'Initiative 400', es: 'Iniciativa 400' },
          { fr: 'Tacle 700', en: 'Lock 700', es: 'Placaje 700' },
          { fr: 'Esquive 700', en: 'Dodge 700', es: 'Esquiva 700' },
          { fr: 'Parade 35%', en: 'Block 35%', es: 'Parada 35%' },
          { fr: 'Critique 15%', en: 'Critical 15%', es: 'Crítico 15%' },
          { fr: 'Volonte 35', en: 'Willpower 35', es: 'Voluntad 35' },
          { fr: 'Resist 76% (650)', en: 'Resist 76% (650)', es: 'Resist 76% (650)' },
        ],
      },
      {
        name: { fr: 'Unite stasificatrice', en: 'Stasis Unit', es: 'Unidad estasificadora' },
        level: { fr: 'Niv. 220 (Stasis 2)', en: 'Lvl. 220 (Stasis 2)', es: 'Niv. 220 (Estasis 2)' },
        bonus: { fr: 'Bonus de Velocite: 50 Resistance Elementaire', en: 'Speed Bonus: 50 Elemental Resistance', es: 'Bonificación de Velocidad: 50 Resistencia Elemental' },
        description: { fr: "Il possede 2 sorts, 1 passif et il n'a pas de faiblesse specifique.", en: "Has 2 spells, 1 passive and no specific weakness.", es: "Tiene 2 hechizos, 1 pasivo y no tiene debilidad específica." },
        spells: [
          {
            name: { fr: 'Deplacement tactique', en: 'Tactical Displacement', es: 'Desplazamiento táctico' },
            effect: { fr: 'Passe derriere la cible et inflige des degats Stasis.', en: 'Moves behind the target and deals Stasis damage.', es: 'Pasa detrás del objetivo e inflige daño Estasis.' },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            range: { fr: '3-5 PO, en ligne, sans ligne de vue', en: '3-5 Range, line, no LoS', es: '3-5 PO, en línea, sin línea de visión' },
            limit: { fr: '1/cible, 2/tour', en: '1/target, 2/turn', es: '1/objetivo, 2/turno' },
          },
          {
            name: { fr: 'Decharge Stasis', en: 'Stasis Discharge', es: 'Descarga Estasis' },
            effect: { fr: 'Inflige des degats Stasis et retire 4 PM.', en: 'Deals Stasis damage and removes 4 MP.', es: 'Inflige daño Estasis y quita 4 PM.' },
            cost: { fr: '3 PA', en: '3 AP', es: '3 PA' },
            range: { fr: '0 PO, cercle taille 1+X', en: '0 Range, circle size 1+X', es: '0 PO, círculo tamaño 1+X' },
            limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
          },
          {
            name: { fr: 'Dechainement Stasis', en: 'Stasis Unleashing', es: 'Desencadenamiento Estasis' },
            tag: { fr: 'Ultime', en: 'Ultimate', es: 'Definitiva' },
            effect: { fr: 'Repousse de X cases et stabilise tous les ennemis.', en: 'Pushes X cells and stabilizes all enemies.', es: 'Empuja X celdas y estabiliza a todos los enemigos.' },
            cost: { fr: '0 PA', en: '0 AP', es: '0 PA' },
            limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
          },
        ],
        passive: { fr: "A chaque degat direct subi, +1 reserve de stasis. A la mort, retire 100 PM a l'attaquant.", en: "Each direct damage taken gives +1 Stasis Reserve. On death, removes 100 MP from attacker.", es: "Cada daño directo recibido da +1 Reserva de Estasis. Al morir, quita 100 PM al atacante." },
        notes: [],
        stats: [
          { fr: 'PV 16.707', en: 'HP 16,707', es: 'PV 16.707' },
          { fr: 'PA 13', en: 'AP 13', es: 'PA 13' },
          { fr: 'PM 7', en: 'MP 7', es: 'PM 7' },
          { fr: 'PW 0', en: 'WP 0', es: 'PW 0' },
          { fr: 'Initiative 400', en: 'Initiative 400', es: 'Iniciativa 400' },
          { fr: 'Tacle 1600', en: 'Lock 1,600', es: 'Placaje 1600' },
          { fr: 'Esquive 600', en: 'Dodge 600', es: 'Esquiva 600' },
          { fr: 'Parade 45%', en: 'Block 45%', es: 'Parada 45%' },
          { fr: 'Critique 15%', en: 'Critical 15%', es: 'Crítico 15%' },
          { fr: 'Volonte 35', en: 'Willpower 35', es: 'Voluntad 35' },
          { fr: 'Resist 81% (750)', en: 'Resist 81% (750)', es: 'Resist 81% (750)' },
        ],
      },
    ],
    boss: {
      name: { fr: 'Sir Comte Flex', en: 'Sir Count Flex', es: 'Sir Conde Flex' },
      level: { fr: 'Niv. 233 (Stasis 2)', en: 'Lvl. 233 (Stasis 2)', es: 'Niv. 233 (Estasis 2)' },
      description: { fr: "Il possede 6 sorts et 1 passif d'artillerie aleatoire qui change tous les 2 tours.", en: "Has 6 spells and 1 random artillery passive that changes every 2 turns.", es: "Tiene 6 hechizos y 1 pasivo de artillería aleatorio que cambia cada 2 turnos." },
      spells: [
        {
          name: { fr: 'Tir automatique', en: 'Automatic Fire', es: 'Disparo automático' },
          effect: { fr: 'Inflige des degats Stasis.', en: 'Deals Stasis damage.', es: 'Inflige daño Estasis.' },
          cost: { fr: '3 PA', en: '3 AP', es: '3 PA' },
          range: { fr: '5-∞ PO', en: '5-∞ Range', es: '5-∞ PO' },
          limit: { fr: '1/cible, 2/tour', en: '1/target, 2/turn', es: '1/objetivo, 2/turno' },
        },
        {
          name: { fr: 'Attaque blindee', en: 'Armored Attack', es: 'Ataque blindado' },
          effect: { fr: 'Inflige des degats Stasis et pousse de 2 cases.', en: 'Deals Stasis damage and pushes 2 cells.', es: 'Inflige daño Estasis y empuja 2 celdas.' },
          cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
          range: { fr: '2-3 PO', en: '2-3 Range', es: '2-3 PO' },
          limit: { fr: '1/cible, 2/tour', en: '1/target, 2/turn', es: '1/objetivo, 2/turno' },
        },
        {
          name: { fr: 'Perforation', en: 'Perforation', es: 'Perforación' },
          effect: { fr: 'Inflige des degats Stasis, retire 4 PM et stabilise la cible.', en: 'Deals Stasis damage, removes 4 MP and stabilizes the target.', es: 'Inflige daño Estasis, quita 4 PM y estabiliza al objetivo.' },
          cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
          range: { fr: '2 PO', en: '2 Range', es: '2 PO' },
          limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
        },
        {
          name: { fr: 'Deploiement', en: 'Deployment', es: 'Despliegue' },
          effect: { fr: "Se teleporte sur la cible la plus eloignee et inflige des degats Stasis. Recharge 2 tours.", en: "Teleports to the furthest target and deals Stasis damage. 2-turn cooldown.", es: "Se teletransporta al objetivo más lejano e inflige daño Estasis. Recarga 2 turnos." },
          cost: { fr: '0 PA', en: '0 AP', es: '0 PA' },
          range: { fr: 'Cercle taille 3', en: 'Circle size 3', es: 'Círculo tamaño 3' },
        },
        {
          name: { fr: "Canon d'assaut", en: 'Assault Cannon', es: 'Cañón de asalto' },
          effect: { fr: 'Inflige de lourds degats Stasis en ligne epaisse de 3 cases.', en: 'Deals heavy Stasis damage in a 3-cell-wide line.', es: 'Inflige daño Estasis intenso en línea gruesa de 3 celdas.' },
          cost: { fr: '0 PA', en: '0 AP', es: '0 PA' },
          limit: { fr: 'Lance au debut de chaque tour', en: 'Casts at start of each turn', es: 'Lanza al inicio de cada turno' },
        },
        {
          name: { fr: 'Le compte est bon', en: 'Perfect Aim', es: 'Cuenta exacta' },
          tag: { fr: 'Ultime', en: 'Ultimate', es: 'Definitiva' },
          effect: { fr: "Sort de zone variable dependant du passif d'artillerie. Inflige des degats Stasis aux adversaires et autour d'eux.", en: "Variable AoE spell depending on artillery passive. Deals Stasis damage to opponents and around them.", es: "Hechizo de área variable según pasivo de artillería. Inflige daño Estasis a los adversarios y alrededor de ellos." },
          cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
        },
      ],
      passives: [
        {
          name: { fr: 'Artillerie de demolition', en: 'Demolition Artillery', es: 'Artillería de Demolición' },
          effect: { fr: "En debut de tour, +1 reserve de stasis par ennemi a 3 cases. Pose X mines. 'Le compte est bon' devient une croix infinie.", en: "At start of turn, +1 Stasis Reserve per enemy within 3 cells. Places X mines. 'Perfect Aim' becomes an infinite cross.", es: "Al inicio del turno, +1 Reserva de Estasis por enemigo a 3 celdas. Coloca X minas. 'Cuenta Exacta' se convierte en cruz infinita." },
          notes: [{ fr: 'Bug actuel: le boss gagne 2 reserves de stasis par ennemi.', en: 'Current bug: boss gains 2 Stasis Reserves per enemy.', es: 'Bug actual: el jefe gana 2 Reservas de Estasis por enemigo.' }],
        },
        {
          name: { fr: 'Artillerie perforante', en: 'Piercing Artillery', es: 'Artillería Perforante' },
          effect: { fr: "A chaque rebond, +1 reserve de stasis. Degats rebondissent X fois. 'Le compte est bon' devient un anneau 3-5.", en: "Each bounce gives +1 Stasis Reserve. Damage bounces X times. 'Perfect Aim' becomes a 3-5 ring.", es: "Cada rebote da +1 Reserva de Estasis. El daño rebota X veces. 'Cuenta Exacta' se convierte en anillo 3-5." },
          notes: [],
        },
        {
          name: { fr: 'Artillerie lourde', en: 'Heavy Artillery', es: 'Artillería Pesada' },
          effect: { fr: "A chaque degat direct subi, +1 reserve de stasis. Retire 1+X PM. 'Le compte est bon' devient un cercle taille 3.", en: "Each direct damage taken gives +1 Stasis Reserve. Removes 1+X MP. 'Perfect Aim' becomes a size-3 circle.", es: "Cada daño directo recibido da +1 Reserva de Estasis. Quita 1+X PM. 'Cuenta Exacta' se convierte en círculo tamaño 3." },
          notes: [],
        },
      ],
      stats: [
        { fr: 'PV 278.848', en: 'HP 278,848', es: 'PV 278.848' },
        { fr: 'PA 16', en: 'AP 16', es: 'PA 16' },
        { fr: 'PM 6', en: 'MP 6', es: 'PM 6' },
        { fr: 'PW 0', en: 'WP 0', es: 'PW 0' },
        { fr: 'Initiative 800', en: 'Initiative 800', es: 'Iniciativa 800' },
        { fr: 'Tacle 1500', en: 'Lock 1,500', es: 'Placaje 1500' },
        { fr: 'Esquive 2000', en: 'Dodge 2,000', es: 'Esquiva 2000' },
        { fr: 'Parade 40%', en: 'Block 40%', es: 'Parada 40%' },
        { fr: 'Critique 35%', en: 'Critical 35%', es: 'Crítico 35%' },
        { fr: 'Volonte 30', en: 'Willpower 30', es: 'Voluntad 30' },
        { fr: 'Resist 77% (660)', en: 'Resist 77% (660)', es: 'Resist 77% (660)' },
      ],
    },
    mechanics: [
      {
        title: { fr: 'La famille', en: 'The Family', es: 'La familia' },
        paragraphs: [
          {
            fr: "Chaque monstre et le boss possedent le passif Reserve de Stasis. Il augmente a la mort d'un monstre ou via actions specifiques.",
            en: "Each monster and the boss have the Stasis Reserve passive. It increases on monster death or via specific actions.",
            es: "Cada monstruo y el jefe tienen el pasivo Reserva de Estasis. Aumenta a la muerte de un monstruo o por acciones específicas.",
          },
          {
            fr: "A partir du niveau 5, le porteur gagne 400 Resistance elementaire et debloque l'Ultime.",
            en: "From level 5 onwards, the bearer gains 400 Elemental Resistance and unlocks the Ultimate.",
            es: "A partir del nivel 5, el portador gana 400 Resistencia Elemental y desbloquea la Habilidad Definitiva.",
          },
        ],
      },
      {
        title: { fr: 'Le Boss', en: 'The Boss', es: 'El Jefe' },
        paragraphs: [
          {
            fr: "Le boss commence chaque tour par 'Canon d'assaut' puis son Ultime s'il l'a.",
            en: "The boss starts each turn with 'Assault Cannon' then its Ultimate if available.",
            es: "El jefe comienza cada turno con 'Cañón de Asalto' luego su Habilidad Definitiva si la tiene.",
          },
          {
            fr: "Votre objectif est de limiter le nombre d'Ultimes en tuant un maximum d'ennemis le meme tour en respectant son passif.",
            en: "Your goal is to limit Ultimates by killing max enemies in one turn while respecting its passive.",
            es: "Tu objetivo es limitar las Habilidades Definitivas matando máximo enemigos en un turno respetando su pasivo.",
          },
          {
            fr: "Attention au positionnement: l'Ultime fait de gros degats sur la zone autour des cibles.",
            en: "Watch positioning: the Ultimate deals heavy damage on the area around targets.",
            es: "Cuidado con el posicionamiento: la Habilidad Definitiva inflige daño severo en el área alrededor de los objetivos.",
          },
          {
            fr: "Tous les 2 tours a partir du tour 4, il utilise 'Deploiement' et se teleporte sur la cible la plus loin.",
            en: "Every 2 turns from turn 4, it uses 'Deployment' and teleports to the furthest target.",
            es: "Cada 2 turnos a partir del turno 4, usa 'Despliegue' y se teletransporta al objetivo más lejano.",
          },
        ],
      },
    ],
    plan: { fr: 'Cliquer ici pour derouler le plan du donjon.', en: 'Click here to unfold the dungeon plan.', es: 'Haz clic aquí para desplegar el plan de la mazmorra.' },
    steles: {
      lead: { 
        fr: 'Ce donjon possede 4 steles, une par salle. Chaque stele ajoute un proto-boss a la salle et au combat final.',
        en: 'This dungeon has 4 steles, one per room. Each stele adds a proto-boss to the room and final fight.',
        es: 'Esta mazmorra tiene 4 estelas, una por sala. Cada estela añade un proto-jefe a la sala y al combate final.',
      },
      notes: [
        {
          fr: 'Si une stele est activee, le boss final invoque le proto-boss (jusqua 5 boss).',
          en: 'If a stele is activated, the final boss summons the proto-boss (up to 5 bosses).',
          es: 'Si una estela está activada, el jefe final invoca el proto-jefe (hasta 5 jefes).',
        },
        {
          fr: "Pour ouvrir les steles: 8 ressources d'Ereboria (Masque du forban, Substance de mort-brules, Poil roux).",
          en: "To open steles: 8 Ereboria resources (Rogue Mask, Deathburn Substance, Red Hair).",
          es: "Para abrir estelas: 8 recursos de Ereboria (Máscara de Pícaro, Sustancia de Quemadura Mortal, Pelo Rojo).",
        },
        {
          fr: 'Chaque proto-boss ajoute 2 equipements a la table de loot et 10 Sioupere-Glou infernale.',
          en: 'Each proto-boss adds 2 equipment to the loot table and 10 Infernal Sioupere-Glou.',
          es: 'Cada proto-jefe añade 2 equipamientos a la tabla de botín y 10 Sioupere-Glou Infernal.',
        },
        {
          fr: "Au combat final: 1 Bout d'armure de garde steamer par personne si 1 proto-boss, 3 si 2, 6 si 3.",
          en: "In final fight: 1 Steamer Guard Armor Piece per person if 1 proto-boss, 3 if 2, 6 if 3.",
          es: "En combate final: 1 Pieza de Armadura de Guardia Steamer por persona si 1 proto-jefe, 3 si 2, 6 si 3.",
        },
      ],
      protoBosses: [
        {
          name: { fr: 'Protopoulpe', en: 'Proto-Octopus', es: 'Protopulpo' },
          description: { fr: "Il possede 2 sorts, 1 passif et il n'a pas de faiblesse specifique.", en: "Has 2 spells, 1 passive and no specific weakness.", es: "Tiene 2 hechizos, 1 pasivo y no tiene debilidad específica." },
          spells: [
            {
              name: { fr: 'Deflagration stasifiee', en: 'Stasified Deflagration', es: 'Deflagración estasificada' },
              effect: { fr: 'Inflige de lourds degats Stasis en ligne epaisse de 3 cases.', en: 'Deals heavy Stasis damage in a 3-cell-wide line.', es: 'Inflige daño Estasis intenso en línea gruesa de 3 celdas.' },
              cost: { fr: '0 PA', en: '0 AP', es: '0 PA' },
              limit: { fr: 'Lance au debut de chaque tour', en: 'Casts at start of each turn', es: 'Lanza al inicio de cada turno' },
            },
            {
              name: { fr: "Jet d'encre stasifie", en: 'Stasified Ink Jet', es: 'Chorro de tinta estasificado' },
              effect: { fr: 'Inflige des degats Stasis et retire 3 PM et 2 PO.', en: 'Deals Stasis damage and removes 3 MP and 2 Range.', es: 'Inflige daño Estasis y quita 3 PM y 2 Rango.' },
              cost: { fr: '2 PA', en: '2 AP', es: '2 PA' },
              range: { fr: 'Croix taille 1, ∞ PO', en: 'Cross size 1, ∞ Range', es: 'Cruz tamaño 1, ∞ PO' },
              limit: { fr: '1/cible, 3/tour', en: '1/target, 3/turn', es: '1/objetivo, 3/turno' },
            },
          ],
          passive: { fr: "Immunise si l'attaquant n'est pas aligne avec la case centrale. En fin de tour, se teleporte sur une case d'eau aleatoire.", en: "Immune if attacker is not aligned with central cell. End of turn, teleports to a random water cell.", es: "Inmune si el atacante no está alineado con la celda central. Fin de turno, se teletransporta a una celda de agua aleatoria." },
          notes: [],
          stats: [
            { fr: 'PV 191.546', en: 'HP 191,546', es: 'PV 191.546' },
            { fr: 'PA 12', en: 'AP 12', es: 'PA 12' },
            { fr: 'PM 0', en: 'MP 0', es: 'PM 0' },
            { fr: 'PW 0', en: 'WP 0', es: 'PW 0' },
            { fr: 'Initiative 600', en: 'Initiative 600', es: 'Iniciativa 600' },
            { fr: 'Tacle 300', en: 'Lock 300', es: 'Placaje 300' },
            { fr: 'Esquive 0', en: 'Dodge 0', es: 'Esquiva 0' },
            { fr: 'Parade 33%', en: 'Block 33%', es: 'Parada 33%' },
            { fr: 'Critique 25%', en: 'Critical 25%', es: 'Crítico 25%' },
            { fr: 'Volonte 30', en: 'Willpower 30', es: 'Voluntad 30' },
            { fr: 'Resist 75% (625)', en: 'Resist 75% (625)', es: 'Resist 75% (625)' },
          ],
        },
        {
          name: { fr: 'Protosquelette', en: 'Proto-Skeleton', es: 'Protoesqueleto' },
          description: { fr: "Il possede 2 sorts et il n'a pas de faiblesse specifique.", en: "Has 2 spells and no specific weakness.", es: "Tiene 2 hechizos y no tiene debilidad específica." },
          spells: [
            {
              name: { fr: 'Courroux des anciens stasifie', en: 'Stasified Ancient Wrath', es: 'Cólera de los antiguos estasificada' },
              effect: { fr: 'Inflige de lourds degats Stasis en cercle taille 4.', en: 'Deals heavy Stasis damage in size-4 circle.', es: 'Inflige daño Estasis intenso en círculo tamaño 4.' },
              cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
              range: { fr: '0 PO', en: '0 Range', es: '0 PO' },
              limit: { fr: 'Lance au debut de chaque tour', en: 'Casts at start of each turn', es: 'Lanza al inicio de cada turno' },
            },
            {
              name: { fr: 'Jet de flammes stasifie', en: 'Stasified Flame Jet', es: 'Chorro de llamas estasificado' },
              effect: { fr: 'Inflige des degats Stasis en croix de taille 1.', en: 'Deals Stasis damage in size-1 cross.', es: 'Inflige daño Estasis en cruz tamaño 1.' },
              cost: { fr: '3 PA', en: '3 AP', es: '3 PA' },
              range: { fr: '∞ PO', en: '∞ Range', es: '∞ PO' },
              limit: { fr: '1/cible, 3/tour', en: '1/target, 3/turn', es: '1/objetivo, 3/turno' },
            },
          ],
          passive: '',
          notes: [
            { fr: "Dans la chambre d'experimentation, deux lasers bloquant la ligne de vue changent tous les 2 tours.", en: "In the experimentation chamber, two line-of-sight blocking lasers change every 2 turns.", es: "En la cámara de experimentación, dos láseres que bloquean línea de visión cambian cada 2 turnos." },
          ],
          stats: [
            { fr: 'PV 175.347', en: 'HP 175,347', es: 'PV 175.347' },
            { fr: 'PA 14', en: 'AP 14', es: 'PA 14' },
            { fr: 'PM 0', en: 'MP 0', es: 'PM 0' },
            { fr: 'PW 0', en: 'WP 0', es: 'PW 0' },
            { fr: 'Initiative 600', en: 'Initiative 600', es: 'Iniciativa 600' },
            { fr: 'Tacle 1200', en: 'Lock 1,200', es: 'Placaje 1200' },
            { fr: 'Esquive 0', en: 'Dodge 0', es: 'Esquiva 0' },
            { fr: 'Parade 25%', en: 'Block 25%', es: 'Parada 25%' },
            { fr: 'Critique 33%', en: 'Critical 33%', es: 'Crítico 33%' },
            { fr: 'Volonte 10', en: 'Willpower 10', es: 'Voluntad 10' },
            { fr: 'Resist 73% (595)', en: 'Resist 73% (595)', es: 'Resist 73% (595)' },
          ],
        },
        {
          name: { fr: 'Protogolem', en: 'Proto-Golem', es: 'Protogolem' },
          description: { fr: "Il possede 3 sorts, 1 passif et il n'a pas de faiblesse specifique.", en: "Has 3 spells, 1 passive and no specific weakness.", es: "Tiene 3 hechizos, 1 pasivo y no tiene debilidad específica." },
          spells: [
            {
              name: { fr: 'Tremblement mecanique stasifie', en: 'Stasified Mechanical Quake', es: 'Temblor mecánico estasificado' },
              effect: { fr: 'Inflige des degats Stasis en ligne de taille 7.', en: 'Deals Stasis damage in a size-7 line.', es: 'Inflige daño Estasis en línea de tamaño 7.' },
              cost: { fr: '3 PA', en: '3 AP', es: '3 PA' },
              range: { fr: '2 PO', en: '2 Range', es: '2 PO' },
              limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
            },
            {
              name: { fr: 'Vent de liberte stasifie', en: 'Stasified Freedom Wind', es: 'Viento de libertad estasificado' },
              effect: { fr: 'Inflige des degats Stasis et repousse de 3 cases.', en: 'Deals Stasis damage and pushes 3 cells.', es: 'Inflige daño Estasis y empuja 3 celdas.' },
              cost: { fr: '0 PA', en: '0 AP', es: '0 PA' },
              range: { fr: 'Cercle taille 4', en: 'Circle size 4', es: 'Círculo tamaño 4' },
              limit: { fr: "1/tour, lance uniquement s'il ne peut pas se deplacer", en: "1/turn, casts only if can't move", es: "1/turno, lanza solo si no puede moverse" },
            },
            {
              name: { fr: 'Broyage stasifie', en: 'Stasified Crushing', es: 'Triturado estasificado' },
              effect: { fr: 'Inflige des degats Stasis.', en: 'Deals Stasis damage.', es: 'Inflige daño Estasis.' },
              cost: { fr: '3 PA', en: '3 AP', es: '3 PA' },
              range: { fr: '2-3 PO', en: '2-3 Range', es: '2-3 PO' },
              limit: { fr: '1/cible, 2/tour', en: '1/target, 2/turn', es: '1/objetivo, 2/turno' },
            },
          ],
          passive: { fr: 'Invoque 4 Cristal de Stasis. Chaque cristal actif donne 100 Resistance elementaire aux monstres.', en: 'Summons 4 Stasis Crystals. Each active crystal gives 100 Elemental Resistance to monsters.', es: 'Invoca 4 Cristales de Estasis. Cada cristal activo da 100 Resistencia Elemental a los monstruos.' },
          notes: [
            { fr: "Au debut de chaque tour, s'il y a un cristal inactif, il en reactive un.", en: "At start of each turn, if there's an inactive crystal, it reactivates one.", es: "Al inicio de cada turno, si hay un cristal inactivo, reactiva uno." },
          ],
          stats: [
            { fr: 'PV 165.596', en: 'HP 165,596', es: 'PV 165.596' },
            { fr: 'PA 14', en: 'AP 14', es: 'PA 14' },
            { fr: 'PM 6', en: 'MP 6', es: 'PM 6' },
            { fr: 'PW 0', en: 'WP 0', es: 'PW 0' },
            { fr: 'Initiative 600', en: 'Initiative 600', es: 'Iniciativa 600' },
            { fr: 'Tacle 1200', en: 'Lock 1,200', es: 'Placaje 1200' },
            { fr: 'Esquive 800', en: 'Dodge 800', es: 'Esquiva 800' },
            { fr: 'Parade 28%', en: 'Block 28%', es: 'Parada 28%' },
            { fr: 'Critique 22%', en: 'Critical 22%', es: 'Crítico 22%' },
            { fr: 'Volonte 20', en: 'Willpower 20', es: 'Voluntad 20' },
            { fr: 'Resist 71% (560)', en: 'Resist 71% (560)', es: 'Resist 71% (560)' },
          ],
        },
      ],
      crystals: {
        types: [
          { fr: 'Cristal de melee: Immunise aux degats a distance.', en: 'Melee Crystal: Immune to ranged damage.', es: 'Cristal de cuerpo a cuerpo: Inmune al daño a distancia.' },
          { fr: 'Cristal de distance: Immunise aux degats en melee.', en: 'Ranged Crystal: Immune to melee damage.', es: 'Cristal de distancia: Inmune al daño cuerpo a cuerpo.' },
          { fr: 'Cristal de resistance: Gagne 200 Resistance elementaire par degat direct subi.', en: 'Resistance Crystal: Gains 200 Elemental Resistance per direct damage taken.', es: 'Cristal de resistencia: Gana 200 Resistencia Elemental por daño directo recibido.' },
          { fr: "Cristal d'armure: 20 % PdV et armure de 200 % PdV max.", en: 'Armor Crystal: 20% HP and 200% max HP armor.', es: 'Cristal de armadura: 20% PV y armadura de 200% PV máx.' },
        ],
        notes: [
          { fr: 'Un cristal devient inactif a 1 PV. Le Protogolem reactive un cristal par tour, sans doublon.', en: 'A crystal becomes inactive at 1 HP. Protogolem reactivates one crystal per turn, no duplicate.', es: 'Un cristal se vuelve inactivo a 1 PV. El Protogolem reactiva un cristal por turno, sin duplicado.' },
          { fr: "Si vous baissez les resistances, rendez les cristaux inactifs le meme tour. Attention au Mekano qui peut soigner.", en: "If you lower resistances, make crystals inactive the same turn. Watch out for Mekano who can heal.", es: "Si bajas las resistencias, deja los cristales inactivos el mismo turno. Cuidado con el Mekano que puede curar." },
          { fr: 'On peut faire le combat sans desactiver les cristaux: le bonus %Di cumulable compense.', en: 'Can do the fight without deactivating crystals: the stacking %increased damage compensates.', es: 'Puedes hacer el combate sin desactivar los cristales: el bonificación % daño aumentado acumulable compensa.' },
        ],
        stats: [
          'Niv. 230',
          'PV 20.000',
          'PA 0',
          'PM 0',
          'PW 0',
          'Resist 67% (500)',
        ],
      },
    },
    drops: {
      notes: [
        {
          fr: "En mode Competitif, le boss peut drop une Pierre d'aventure pour certaines sublimations epiques/reliques.",
          en: "In Competitive mode, the boss can drop an Adventure Stone for certain epic/relic sublimations.",
          es: "En modo Competitivo, el jefe puede soltar una Piedra de Aventura para ciertas sublimaciones épicas/reliquias.",
        },
      ],
      monsterDrops: [
        { name: 'Ferraille stasifiee', rate: '25 %', level: 'Niv. 216' },
        { name: 'Gantelet stasifie', rate: '1 %', level: 'Niv. 216' },
        { name: 'Armure de Mota', rate: '0.5 %', level: 'Niv. 227' },
        { name: 'Fragment de Ceinture de Ghast', rate: '0.5 %', level: 'Niv. 1' },
        { name: 'Houppelande stasifiee', rate: '0.5 %', level: 'Niv. 227' },
        { name: "Lance d'Izana", rate: '0.4 %', level: 'Niv. 220' },
        { name: 'Epaulettes mecaniques', rate: '0.4 %', level: 'Niv. 220' },
        { name: 'Coiffe stasifiee', rate: '0.4 %', level: 'Niv. 220' },
        { name: 'Brodequins caillerie', rate: '0.4 %', level: 'Niv. 220' },
        { name: "Anneau de l'atelier", rate: '0.4 %', level: 'Niv. 220' },
        { name: 'Amulette stasifiee', rate: '0.4 %', level: 'Niv. 220' },
        { name: "Lance d'Izana", rate: '0.05 %', level: 'Niv. 227' },
        { name: 'Epaulettes mecaniques', rate: '0.05 %', level: 'Niv. 227' },
        { name: 'Coiffe stasifiee', rate: '0.05 %', level: 'Niv. 227' },
        { name: 'Brodequins caillerie', rate: '0.05 %', level: 'Niv. 227' },
        { name: "Anneau de l'atelier", rate: '0.05 %', level: 'Niv. 227' },
        { name: 'Amulette stasifiee', rate: '0.05 %', level: 'Niv. 227' },
        { name: 'Armure de Mota', rate: '0.03 %', level: 'Niv. 230' },
        { name: 'Coiffe stasifiee', rate: '0.03 %', level: 'Niv. 230' },
        { name: 'Brodequins caillerie', rate: '0.03 %', level: 'Niv. 230' },
        { name: 'Amulette stasifiee', rate: '0.03 %', level: 'Niv. 230' },
        { name: "Anneau de l'atelier", rate: '0.03 %', level: 'Niv. 230' },
        { name: "Lance d'Izana", rate: '0.03 %', level: 'Niv. 230' },
        { name: 'Houppelande stasifiee', rate: '0.03 %', level: 'Niv. 230' },
        { name: 'Epaulettes mecaniques', rate: '0.03 %', level: 'Niv. 230' },
      ],
      bossDrops: [
        { name: 'Jeton Infernal', rate: '100 %', level: 'Niv. 230' },
        { name: 'Transmutation Infernale', rate: '100 %', level: 'Niv. 1' },
        { name: 'Sioupere-Glou Infernale', rate: '100 %', level: 'Niv. 140', note: { fr: 'Proto-boss', en: 'Proto-boss', es: 'Proto-jefe' } },
        { name: "Bout d'armure de garde Steamer", rate: '100 %', level: 'Niv. 216', note: { fr: 'Proto-boss', en: 'Proto-boss', es: 'Proto-jefe' } },
        { name: 'Corne de Sir Comte Flex', rate: '10 %', level: 'Niv. 216' },
        { name: 'Fragment de Ceinture de Ghast', rate: '5 %', level: 'Niv. 1' },
        { name: "Bottes de l'usine", rate: '4 %', level: 'Niv. 220' },
        { name: 'Casque de Sir Comte Flex', rate: '4 %', level: 'Niv. 220' },
        { name: 'Dague Ario', rate: '2 %', level: 'Niv. 230', note: { fr: 'Protopoulpe', en: 'Proto-Octopus', es: 'Protopulpo' } },
        { name: 'Collier Joie', rate: '2 %', level: 'Niv. 230', note: { fr: 'Protopoulpe', en: 'Proto-Octopus', es: 'Protopulpo' } },
        { name: 'Epaulettes de Baba', rate: '2 %', level: 'Niv. 230', note: { fr: 'Protosquelette', en: 'Proto-Skeleton', es: 'Protoesqueleto' } },
        { name: 'Le Coudri-Heaume', rate: '2 %', level: 'Niv. 230', note: { fr: 'Protosquelette', en: 'Proto-Skeleton', es: 'Protoesqueleto' } },
        { name: 'Epaulettes de Lyafar', rate: '2 %', level: 'Niv. 230', note: { fr: 'Protogolem', en: 'Proto-Golem', es: 'Protogolem' } },
        { name: 'Bottes de Genki', rate: '2 %', level: 'Niv. 230', note: { fr: 'Protogolem', en: 'Proto-Golem', es: 'Protogolem' } },
        { name: 'Plastron de Stork', rate: '1 %', level: 'Niv. 227' },
        { name: "Amulette de l'usine", rate: '1 %', level: 'Niv. 227' },
        { name: 'Voile du guerrier mecanique', rate: '1 %', level: 'Niv. 227' },
        { name: "Ceinture de l'usine", rate: '1 %', level: 'Niv. 227' },
        { name: 'Epaulettes de Sir Comte Flex', rate: '1 %', level: 'Niv. 227' },
        { name: 'Bague Terry', rate: '1 %', level: 'Niv. 227' },
        { name: 'Casque de Sir Comte Flex', rate: '0.5 %', level: 'Niv. 227' },
        { name: "Bottes de l'usine", rate: '0.5 %', level: 'Niv. 227' },
        { name: 'Dague Ario', rate: '0.25 %', level: 'Niv. 230', note: { fr: 'Protopoulpe', en: 'Proto-Octopus', es: 'Protopulpo' } },
        { name: 'Collier Joie', rate: '0.25 %', level: 'Niv. 230', note: { fr: 'Protopoulpe', en: 'Proto-Octopus', es: 'Protopulpo' } },
        { name: 'Epaulettes de Baba', rate: '0.25 %', level: 'Niv. 230', note: { fr: 'Protosquelette', en: 'Proto-Skeleton', es: 'Protoesqueleto' } },
        { name: 'Le Coudri-Heaume', rate: '0.25 %', level: 'Niv. 230', note: { fr: 'Protosquelette', en: 'Proto-Skeleton', es: 'Protoesqueleto' } },
        { name: 'Epaulettes de Lyafar', rate: '0.25 %', level: 'Niv. 230', note: { fr: 'Protogolem', en: 'Proto-Golem', es: 'Protogolem' } },
        { name: 'Bottes de Genki', rate: '0.25 %', level: 'Niv. 230', note: { fr: 'Protogolem', en: 'Proto-Golem', es: 'Protogolem' } },
        { name: "Bottes de l'usine", rate: '0.25 %', level: 'Niv. 230' },
        { name: 'Casque de Sir Comte Flex', rate: '0.25 %', level: 'Niv. 230' },
        { name: 'Voile du guerrier mecanique', rate: '0.25 %', level: 'Niv. 230' },
        { name: 'Epaulettes de Sir Comte Flex', rate: '0.25 %', level: 'Niv. 230' },
        { name: 'Bague Terry', rate: '0.25 %', level: 'Niv. 230' },
        { name: "Ceinture de l'usine", rate: '0.25 %', level: 'Niv. 230' },
        { name: 'Plastron de Stork', rate: '0.25 %', level: 'Niv. 230' },
        { name: "Amulette de l'usine", rate: '0.25 %', level: 'Niv. 230' },
        { name: 'Bouclier du grand solide', rate: '0.4 %', level: 'Niv. 230' },
        { name: 'Ceinture de Ghast', rate: '0.1 %', level: 'Niv. 230' },
        { name: "Pierre d'aventure", rate: '0.05 %', level: 'Niv. 1' },
      ],
    },
    croupier: {
      location: { fr: "Ereboria, au centre du port d'Ereboria.", en: "Ereboria, at the center of Ereboria's port.", es: "Ereboria, en el centro del puerto de Ereboria." },
      items: [
        { name: 'Fragment de Ceinture de Ghast', cost: 'Jeton Infernal x18', level: 'Niv. 1' },
        { name: 'Corne de Sir Comte Flex', cost: 'Jeton Infernal x30', level: 'Niv. 216' },
        { name: 'Coiffe stasifiee', cost: 'Jeton Infernal x50', level: 'Niv. 220' },
        { name: 'Amulette stasifiee', cost: 'Jeton Infernal x50', level: 'Niv. 220' },
        { name: 'Epaulettes mecaniques', cost: 'Jeton Infernal x50', level: 'Niv. 220' },
        { name: 'Brodequins caillerie', cost: 'Jeton Infernal x50', level: 'Niv. 220' },
        { name: "Anneau de l'atelier", cost: 'Jeton Infernal x50', level: 'Niv. 220' },
        { name: "Lance d'Izana", cost: 'Jeton Infernal x50', level: 'Niv. 220' },
        { name: 'Casque de Sir Comte Flex', cost: 'Jeton Infernal x50', level: 'Niv. 220' },
        { name: "Bottes de l'usine", cost: 'Jeton Infernal x50', level: 'Niv. 220' },
        { name: 'Armure de Mota', cost: 'Jeton Infernal x160', level: 'Niv. 227' },
        { name: 'Houppelande stasifiee', cost: 'Jeton Infernal x160', level: 'Niv. 227' },
        { name: 'Voile du guerrier mecanique', cost: 'Jeton Infernal x160', level: 'Niv. 227' },
        { name: 'Epaulettes de Sir Comte Flex', cost: 'Jeton Infernal x160', level: 'Niv. 227' },
        { name: 'Bague Terry', cost: 'Jeton Infernal x160', level: 'Niv. 227' },
        { name: "Ceinture de l'usine", cost: 'Jeton Infernal x160', level: 'Niv. 227' },
        { name: 'Plastron de Stork', cost: 'Jeton Infernal x160', level: 'Niv. 227' },
        { name: "Amulette de l'usine", cost: 'Jeton Infernal x160', level: 'Niv. 227' },
      ],
    },
  },
  {
    id: 'poisseux-abyssaux',
    name: { fr: 'Donjon Poisseux abyssaux', en: 'Abyssal Creeper Dungeon', es: 'Mazmorra Pezgajosos Abisales' },
    subtitle: { fr: 'Boss: Raeliss', en: 'Boss: Raeliss', es: 'Jefe: Raeliss' },
    levelRange: { fr: 'Niv. 216-230', en: 'Lvl. Niv. 216-230', es: 'Niv. Niv. 216-230' },
    summary: [
      {
        fr: "Les monstres sont invulnerables si vous n'avez pas la ligne de vue sur eux au moment des degats.",
        en: "Monsters are invulnerable if you don't have line of sight when dealing damage.",
        es: "Los monstruos son invulnerables si no tienes línea de visión cuando inflige daño.",
      },
      {
        fr: 'Attention aux Assassirenes: K.O. en un coup si vous etes en berserk.',
        en: 'Watch Assassirenes: one-shot KO if you are in berserk.',
        es: 'Ten cuidado con los Asesinatos: K.O. de un golpe si estás en furia.',
      },
      {
        fr: "Avant de mettre de l'armure, eliminez les Cogneurs (ils volent toute l'armure).",
        en: "Before adding armor, eliminate Biters (they steal all armor).",
        es: "Antes de añadir armadura, elimina los Mordedores (roban toda la armadura).",
      },
      {
        fr: "Au boss, marchez sur les prisons d'eau pour limiter les cases de noyade (aidez-vous d'invocations).",
        en: "At the boss, walk on water prisons to limit drowning tiles (use summons).",
        es: "En el jefe, camina sobre las prisiones de agua para limitar las celdas de ahogo (usa invocaciones).",
      },
      {
        fr: "En phase 2, Pohl le poulpe peut detruire des cases de noyade: tuez d'abord les monstres.",
        en: "In phase 2, Pohl the Squid can destroy drowning tiles: kill monsters first.",
        es: "En la fase 2, Pohl el Pulpo puede destruir celdas de ahogo: mata a los monstruos primero.",
      },
      {
        fr: 'Tuer Pohl donne un bonus cumulable de PA/PM (idealement un DPT).',
        en: 'Killing Pohl gives a stacking bonus of AP/MP (ideally a DPS).',
        es: 'Matar a Pohl da un bonificación acumulable de PA/PM (idealmente un DPS).',
      },
    ],
    monsters: [
      {
        name: { fr: 'Assassirene', en: 'Assassiren', es: 'Aseisirena' },
        level: { fr: 'Niv. 220 (Stasis 2)', en: 'Lvl. 220 (Stasis 2)', es: 'Niv. 220 (Estasis 2)' },
        bonus: { fr: 'Bonus de Velocite: 2 PM', en: 'Speed Bonus: 2 MP', es: 'Bonificación de Velocidad: 2 PM' },
        description: { fr: "Il possede 2 sorts, 1 passif. Sa plus basse resistance est l'element air.", en: "Has 2 spells, 1 passive. Weakest resistance is Air.", es: "Tiene 2 hechizos, 1 pasivo. Su resistencia más baja es Aire." },
        spells: [
          {
            name: { fr: 'Baiser mortel', en: 'Deadly Kiss', es: 'Beso mortal' },
            effect: { fr: 'La cible tombe a 1 PdV. Si elle a moins de 50 % PdV ou est une invocation, elle meurt.', en: 'Target falls to 1 HP. If below 50% HP or is a summon, it dies.', es: 'El objetivo cae a 1 PV. Si tiene menos del 50% PV o es una invocación, muere.' },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            range: { fr: '1 PO', en: '1 Range', es: '1 PO' },
            limit: { fr: '1/cible', en: '1/target', es: '1/objetivo' },
          },
          {
            name: { fr: 'Rengaine abyssale', en: 'Abyssal Refrain', es: 'Estribillo abisal' },
            effect: { fr: "Donne de l'armure a un allie (20 % PdV max de l'assassirene).", en: "Gives armor to an ally (20% of Assassirene's max HP).", es: "Da armadura a un aliado (20% de PV máx. del Asesinato)." },
            cost: { fr: '3 PA', en: '3 AP', es: '3 PA' },
            range: { fr: '1-4 PO, sans ligne de vue', en: '1-4 Range, no LoS', es: '1-4 PO, sin línea de visión' },
            limit: { fr: '1/cible', en: '1/target', es: '1/objetivo' },
          },
        ],
        passive: { fr: 'En dessous de 50 % PdV, gagne 3 PM et 200 Resistance elementaire.', en: 'Below 50% HP, gains 3 MP and 200 Elemental Resistance.', es: 'Por debajo del 50% PV, gana 3 PM y 200 Resistencia Elemental.' },
        notes: [],
        stats: [
          { fr: 'PV 22.109', en: 'HP 22,109', es: 'PV 22.109' },
          { fr: 'PA 16', en: 'AP 16', es: 'PA 16' },
          { fr: 'PM 4', en: 'MP 4', es: 'PM 4' },
          { fr: 'PW 0', en: 'WP 0', es: 'PW 0' },
          { fr: 'Initiative 400', en: 'Initiative 400', es: 'Iniciativa 400' },
          { fr: 'Tacle 300', en: 'Lock 300', es: 'Placaje 300' },
          { fr: 'Esquive 1600', en: 'Dodge 1,600', es: 'Esquiva 1600' },
          { fr: 'Parade 30%', en: 'Block 30%', es: 'Parada 30%' },
          { fr: 'Critique 8%', en: 'Critical 8%', es: 'Crítico 8%' },
          { fr: 'Volonte 45', en: 'Willpower 45', es: 'Voluntad 45' },
          { fr: 'Resist 71% (555)', en: 'Resist 71% (555)', es: 'Resist 71% (555)' },
          { fr: 'Resist 79% (720)', en: 'Resist 79% (720)', es: 'Resist 79% (720)' },
          { fr: 'Resist 71% (555)', en: 'Resist 71% (555)', es: 'Resist 71% (555)' },
          { fr: 'Resist 66% (490)', en: 'Resist 66% (490)', es: 'Resist 66% (490)' },
        ],
      },
      {
        name: { fr: 'Petit-poisseux', en: 'Little Creeper', es: 'Pezgajosito' },
        level: { fr: 'Niv. 218 (Stasis 2)', en: 'Lvl. 218 (Stasis 2)', es: 'Niv. 218 (Estasis 2)' },
        bonus: { fr: 'Bonus de Velocite: 50% Dommages infliges et -100 Resistance Dos', en: 'Speed Bonus: 50% Increased Damage and -100 Back Resistance', es: 'Bonificación de Velocidad: 50% Daño Aumentado y -100 Resistencia de Espalda' },
        description: { fr: "Il possede 2 sorts, 1 passif et il n'a pas de faiblesse specifique.", en: "Has 2 spells, 1 passive and no specific weakness.", es: "Tiene 2 hechizos, 1 pasivo y no tiene debilidad específica." },
        spells: [
          {
            name: { fr: 'Morsure poisseuse', en: 'Sticky Bite', es: 'Mordedura pegajosa' },
            effect: { fr: 'Inflige des degats feu et se soigne du meme montant.', en: 'Deals Fire damage and heals for the same amount.', es: 'Inflige daño Fuego y se cura la misma cantidad.' },
            cost: { fr: '3 PA', en: '3 AP', es: '3 PA' },
            range: { fr: '1 PO', en: '1 Range', es: '1 PO' },
            limit: { fr: '1/cible', en: '1/target', es: '1/objetivo' },
          },
          {
            name: { fr: 'Clameur abyssale', en: 'Abyssal Clamor', es: 'Clamor abisal' },
            effect: { fr: 'Inflige des degats air et pousse de 2 cases.', en: 'Deals Air damage and pushes 2 cells.', es: 'Inflige daño Aire y empuja 2 celdas.' },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            range: { fr: '2-5 PO, en ligne', en: '2-5 Range, line', es: '2-5 PO, en línea' },
            limit: { fr: '1/cible', en: '1/target', es: '1/objetivo' },
          },
        ],
        passive: { fr: "Au debut du tour, echange de position avec l'adversaire le plus eloigne.", en: "At start of turn, swaps position with furthest opponent.", es: "Al inicio del turno, intercambia posición con el adversario más lejano." },
        notes: [],
        stats: [
          { fr: 'PV 18.291', en: 'HP 18,291', es: 'PV 18.291' },
          { fr: 'PA 14', en: 'AP 14', es: 'PA 14' },
          { fr: 'PM 7', en: 'MP 7', es: 'PM 7' },
          { fr: 'PW 0', en: 'WP 0', es: 'PW 0' },
          { fr: 'Initiative 400', en: 'Initiative 400', es: 'Iniciativa 400' },
          { fr: 'Tacle 700', en: 'Lock 700', es: 'Placaje 700' },
          { fr: 'Esquive 700', en: 'Dodge 700', es: 'Esquiva 700' },
          { fr: 'Parade 15%', en: 'Block 15%', es: 'Parada 15%' },
          { fr: 'Critique 35%', en: 'Critical 35%', es: 'Crítico 35%' },
          { fr: 'Volonte 20', en: 'Willpower 20', es: 'Voluntad 20' },
          { fr: 'Resist 71% (570)', en: 'Resist 71% (570)', es: 'Resist 71% (570)' },
        ],
      },
      {
        name: { fr: 'Cogneur abyssal', en: 'Abyssal Biter', es: 'Mordedor abisal' },
        level: { fr: 'Niv. 224 (Stasis 2)', en: 'Lvl. 224 (Stasis 2)', es: 'Niv. 224 (Estasis 2)' },
        bonus: { fr: 'Bonus de Velocite: 50% Dommages infliges', en: 'Speed Bonus: 50% Increased Damage', es: 'Bonificación de Velocidad: 50% Daño Aumentado' },
        description: { fr: "Il possede 2 sorts. Ses plus basses resistances sont les elements feu et eau.", en: "Has 2 spells. Weakest resistances are Fire and Water.", es: "Tiene 2 hechizos. Sus resistencias más bajas son Fuego y Agua." },
        spells: [
          {
            name: { fr: 'Courant poisseux', en: 'Creepy Current', es: 'Corriente pegajosa' },
            effect: { fr: 'Inflige des degats eau et attire de 6 cases.', en: 'Deals Water damage and pulls 6 cells.', es: 'Inflige daño Agua y atrae 6 celdas.' },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            range: { fr: '2-7 PO, en ligne', en: '2-7 Range, line', es: '2-7 PO, en línea' },
            limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
          },
          {
            name: { fr: 'Gloutonnerie', en: 'Gluttony', es: 'Glotonía' },
            effect: { fr: "Inflige des degats terre et vole toute l'armure de la cible et 100 Resistance elementaire (cumulable).", en: "Deals Earth damage and steals all target's armor and 100 Elemental Resistance (stacking).", es: "Inflige daño Tierra y roba toda la armadura del objetivo y 100 Resistencia Elemental (acumulable)." },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            range: { fr: '1 PO', en: '1 Range', es: '1 PO' },
            limit: { fr: '1/cible', en: '1/target', es: '1/objetivo' },
          },
        ],
        passive: '',
        notes: [],
        stats: [
          { fr: 'PV 18.809', en: 'HP 18,809', es: 'PV 18.809' },
          { fr: 'PA 14', en: 'AP 14', es: 'PA 14' },
          { fr: 'PM 6', en: 'MP 6', es: 'PM 6' },
          { fr: 'PW 0', en: 'WP 0', es: 'PW 0' },
          { fr: 'Initiative 400', en: 'Initiative 400', es: 'Iniciativa 400' },
          { fr: 'Tacle 2000', en: 'Lock 2,000', es: 'Placaje 2000' },
          { fr: 'Esquive 200', en: 'Dodge 200', es: 'Esquiva 200' },
          { fr: 'Parade 35%', en: 'Block 35%', es: 'Parada 35%' },
          { fr: 'Critique 25%', en: 'Critical 25%', es: 'Crítico 25%' },
          { fr: 'Volonte 30', en: 'Willpower 30', es: 'Voluntad 30' },
          { fr: 'Resist 76% (650)', en: 'Resist 76% (650)', es: 'Resist 76% (650)' },
          { fr: 'Resist 80% (730)', en: 'Resist 80% (730)', es: 'Resist 80% (730)' },
          { fr: 'Resist 78% (680)', en: 'Resist 78% (680)', es: 'Resist 78% (680)' },
        ],
      },
      {
        name: { fr: 'Pohl le poulpe (Invocation)', en: 'Pohl the Squid (Summon)', es: 'Pohl el pulpo (Invocación)' },
        level: { fr: 'Niv. 233 (Stasis 2)', en: 'Lvl. 233 (Stasis 2)', es: 'Niv. 233 (Estasis 2)' },
        bonus: '',
        description: { fr: 'Invocation. Ses plus basses resistances sont les elements terre et air.', en: 'Summon. Weakest resistances are Earth and Air.', es: 'Invocación. Sus resistencias más bajas son Tierra y Aire.' },
        spells: [
          {
            name: { fr: "Jet d'encre", en: 'Ink Jet', es: 'Chorro de tinta' },
            effect: { fr: 'Inflige des degats feu et retire 2 PO.', en: 'Deals Fire damage and removes 2 Range.', es: 'Inflige daño Fuego y quita 2 Rango.' },
            cost: { fr: '2 PA', en: '2 AP', es: '2 PA' },
            range: { fr: 'Croix taille 1, ∞ PO', en: 'Cross size 1, ∞ Range', es: 'Cruz tamaño 1, ∞ PO' },
            limit: { fr: '1/cible, 3/tour', en: '1/target, 3/turn', es: '1/objetivo, 3/turno' },
          },
          {
            name: { fr: 'Deflagration', en: 'Deflagration', es: 'Deflagración' },
            tag: { fr: 'Auto', en: 'Auto', es: 'Auto' },
            effect: { fr: 'Inflige de lourds degats feu et retire les cases de noyade touchees.', en: 'Deals heavy Fire damage and removes hit drowning tiles.', es: 'Inflige daño Fuego intenso y quita las celdas de ahogo tocadas.' },
            cost: { fr: '0 PA', en: '0 AP', es: '0 PA' },
            limit: { fr: 'Lance au debut de chaque tour', en: 'Casts at start of each turn', es: 'Lanza al inicio de cada turno' },
          },
        ],
        passive: '',
        notes: [
          { fr: "Se teleporte a la fin de tour sur un des trois points d'eau.", en: "Teleports at end of turn to one of three water points.", es: "Se teletransporta al final del turno a uno de los tres puntos de agua." },
          { fr: 'Bonus K.O.: 5 PA et 2 PM (2 tours). Le second donne 10 PA et 5 PM.', en: 'K.O. Bonus: 5 AP and 2 MP (2 turns). Second gives 10 AP and 5 MP.', es: 'Bonificación K.O.: 5 PA y 2 PM (2 turnos). El segundo da 10 PA y 5 PM.' },
        ],
        stats: [
          { fr: 'PV 80.000', en: 'HP 80,000', es: 'PV 80.000' },
          { fr: 'PA 10', en: 'AP 10', es: 'PA 10' },
          { fr: 'PM 0', en: 'MP 0', es: 'PM 0' },
          { fr: 'PW 0', en: 'WP 0', es: 'PW 0' },
          { fr: 'Initiative 100', en: 'Initiative 100', es: 'Iniciativa 100' },
          { fr: 'Tacle 80', en: 'Lock 80', es: 'Placaje 80' },
          { fr: 'Esquive 0', en: 'Dodge 0', es: 'Esquiva 0' },
          { fr: 'Parade 22%', en: 'Block 22%', es: 'Parada 22%' },
          { fr: 'Critique 26%', en: 'Critical 26%', es: 'Crítico 26%' },
          { fr: 'Volonte 18', en: 'Willpower 18', es: 'Voluntad 18' },
          { fr: 'Resist 71% (560)', en: 'Resist 71% (560)', es: 'Resist 71% (560)' },
          { fr: 'Resist 67% (500)', en: 'Resist 67% (500)', es: 'Resist 67% (500)' },
        ],
      },
    ],
    boss: {
      name: { fr: 'Raeliss', en: 'Raeliss', es: 'Raeliss' },
      level: { fr: 'Niv. 233 (Stasis 2)', en: 'Lvl. 233 (Stasis 2)', es: 'Niv. 233 (Estasis 2)' },
      description: { fr: "Il possede 4 sorts et sa plus basse resistance est l'element terre.", en: "Has 4 spells and weakest resistance is Earth.", es: "Tiene 4 hechizos y su resistencia más baja es Tierra." },
      spells: [
        {
          name: { fr: 'Siphon abyssal', en: 'Abyssal Siphon', es: 'Sifón abisal' },
          effect: { fr: 'Inflige des degats air et attire de 3 cases. Les cibles autres que la cible subissent 2x plus de degats.', en: 'Deals Air damage and pulls 3 cells. Targets other than main target take 2x more damage.', es: 'Inflige daño Aire y atrae 3 celdas. Los objetivos distintos al principal reciben 2x más daño.' },
          cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
          range: { fr: 'Croix taille 4 (2-6 PO, en ligne)', en: 'Cross size 4 (2-6 Range, line)', es: 'Cruz tamaño 4 (2-6 PO, en línea)' },
          limit: { fr: '1/cible, 2/tour', en: '1/target, 2/turn', es: '1/objetivo, 2/turno' },
        },
        {
          name: { fr: 'Tentattaque poisseuse', en: 'Sticky Tentacle Attack', es: 'Ataque de tentáculo pegajoso' },
          effect: { fr: 'Inflige de lourds degats terre et retire 100 Resistance elementaire (2 tours), cumulable 6 fois.', en: 'Deals heavy Earth damage and removes 100 Elemental Resistance (2 turns), stacks 6 times.', es: 'Inflige daño Tierra intenso y quita 100 Resistencia Elemental (2 turnos), acumulable 6 veces.' },
          cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
          range: { fr: '1 PO', en: '1 Range', es: '1 PO' },
          limit: { fr: '1/cible, 2/tour', en: '1/target, 2/turn', es: '1/objetivo, 2/turno' },
        },
        {
          name: { fr: 'Torrent', en: 'Torrent', es: 'Torrente' },
          effect: { fr: "Declenche les glyphes Prison d'eau et inflige des degats eau en cercle taille 2. Pose ensuite une case de noyade.", en: "Triggers Water Prison glyphs and deals Water damage in size-2 circle. Then places a drowning tile.", es: "Activa glifos de Prisión de Agua e inflige daño Agua en círculo tamaño 2. Luego coloca una celda de ahogo." },
          cost: { fr: '3 PA', en: '3 AP', es: '3 PA' },
          limit: { fr: 'Lance au debut de chaque tour', en: 'Casts at start of each turn', es: 'Lanza al inicio de cada turno' },
        },
        {
          name: { fr: 'Appel des abysses', en: 'Call of the Abyss', es: 'Llamada de los abismos' },
          tag: { fr: 'Auto', en: 'Auto', es: 'Auto' },
          effect: { fr: 'Invoque Pohl le poulpe (debut du premier tour de chaque phase).', en: 'Summons Pohl the Squid (start of first turn of each phase).', es: 'Invoca a Pohl el Pulpo (inicio del primer turno de cada fase).' },
        },
      ],
      passives: [],
      stats: [
        { fr: 'PV 308.455', en: 'HP 308,455', es: 'PV 308.455' },
        { fr: 'PA 16', en: 'AP 16', es: 'PA 16' },
        { fr: 'PM 6', en: 'MP 6', es: 'PM 6' },
        { fr: 'PW 0', en: 'WP 0', es: 'PW 0' },
        { fr: 'Initiative 600', en: 'Initiative 600', es: 'Iniciativa 600' },
        { fr: 'Tacle 1400', en: 'Lock 1,400', es: 'Placaje 1400' },
        { fr: 'Esquive 800', en: 'Dodge 800', es: 'Esquiva 800' },
        { fr: 'Parade 30%', en: 'Block 30%', es: 'Parada 30%' },
        { fr: 'Critique 30%', en: 'Critical 30%', es: 'Crítico 30%' },
        { fr: 'Volonte 35', en: 'Willpower 35', es: 'Voluntad 35' },
        { fr: 'Resist 75% (630)', en: 'Resist 75% (630)', es: 'Resist 75% (630)' },
        { fr: 'Resist 69% (530)', en: 'Resist 69% (530)', es: 'Resist 69% (530)' },
        { fr: 'Resist 72% (580)', en: 'Resist 72% (580)', es: 'Resist 72% (580)' },
      ],
    },
    mechanics: [
      {
        title: { fr: 'La famille', en: 'The Family', es: 'La familia' },
        paragraphs: [
          {
            fr: "Les monstres sont invulnerables si vous n'avez pas la ligne de vue sur eux.",
            en: "Monsters are invulnerable if you don't have line of sight.",
            es: "Los monstruos son invulnerables si no tienes línea de visión.",
          },
          {
            fr: "A la fin de leur tour, ils posent des glyphes Prison d'eau qui bloquent la ligne de vue.",
            en: "End of turn, they place Water Prison glyphs that block line of sight.",
            es: "Fin del turno, colocan glifos de Prisión de Agua que bloquean la línea de visión.",
          },
          {
            fr: "On peut enlever un glyphe en marchant dessus (perte de 3 PM).",
            en: "You can remove a glyph by walking on it (lose 3 MP).",
            es: "Puedes quitar un glifo caminando sobre él (pierdes 3 PM).",
          },
          {
            fr: "Autre option: infliger > 10 % PdV en une attaque; les glyphes sont retires et le monstre gagne 3 PM.",
            en: "Alternative: deal > 10% HP in one attack; glyphs are removed and monster gains 3 MP.",
            es: "Alternativa: inflige > 10% PV en un ataque; los glifos se eliminan y el monstruo gana 3 PM.",
          },
        ],
      },
      {
        title: { fr: 'Le Boss', en: 'The Boss', es: 'El Jefe' },
        paragraphs: [
          {
            fr: 'Raeliss a 3 phases: 80 % PdV (blocage), 50 % PdV (blocage), puis stabilise jusqu a la fin.',
            en: 'Raeliss has 3 phases: 80% HP (blocked), 50% HP (blocked), then stabilized until end.',
            es: 'Raeliss tiiene 3 fases: 80% PV (bloqueado), 50% PV (bloqueado), luego estabilizado hasta el final.',
          },
          {
            fr: "A la fin de chaque tour, il pose des glyphes Prison d'eau: tour impair autour de lui, pair autour des allies.",
            en: "End of each turn, he places Water Prison glyphs: odd turn around him, even around allies.",
            es: "Fin de cada turno, coloca glifos de Prisión de Agua: turno impar alrededor suyo, par alrededor de aliados.",
          },
          {
            fr: "Avec 'Torrent', ces glyphes deviennent des cases de noyade qui mettent K.O. si on marche dessus.",
            en: "With 'Torrent', these glyphs become drowning tiles that KO if you walk on them.",
            es: "Con 'Torrente', estos glifos se convierten en celdas de ahogo que K.O. si caminas sobre ellas.",
          },
          {
            fr: "Pohl le poulpe (phase 2+) peut retirer des cases via 'Deflagration'.",
            en: "Pohl the Squid (phase 2+) can remove tiles via 'Deflagration'.",
            es: "Pohl el Pulpo (fase 2+) puede quitar celdas via 'Deflagración'.",
          },
          {
            fr: "Raeliss est melee: restez proche pour eviter qu'il gagne trop de %Di en tours de velocite.",
            en: "Raeliss is melee: stay close to avoid him gaining too much %increased damage in speed turns.",
            es: "Raeliss hace combate cuerpo a cuerpo: mantente cerca para evitar que gane demasiado % daño aumentado.",
          },
          {
            fr: "Conseil: jouer en mode tactique pour bien voir les cases de noyade.",
            en: "Tip: play in tactical mode to see drowning tiles clearly.",
            es: "Consejo: juega en modo táctico para ver claramente las celdas de ahogo.",
          },
        ],
      },
    ],
    plan: { fr: 'Cliquer ici pour derouler le plan du donjon.', en: 'Click here to unfold the dungeon plan.', es: 'Haz clic aquí para desplegar el plan de la mazmorra.' },
    steles: {
      lead: {
        fr: "Steles d'intervention: activation possible en competitif et stasis 2 minimum.",
        en: "Intervention steles: can be activated in competitive and minimum stasis 2.",
        es: "Estelas de intervención: pueden activarse en competitivo con mínimo estasis 2.",
      },
      notes: [
        {
          fr: "Ajoute le boss Cire Momore au combat (stele d'intervention).",
          en: "Adds boss Cire Momore to the fight (intervention stele).",
          es: "Añade al jefe Cire Momore al combate (estela de intervención).",
        },
        {
          fr: "L'activation coute une Clef d'intervention de Cire Momore (ebenistes niv. 145).",
          en: "Activation costs a Cire Momore Intervention Key (carpenters lvl 145).",
          es: "La activación cuesta una Llave de Intervención de Cire Momore (carpinteros niv. 145).",
        },
        {
          fr: 'Pas besoin de reactiver apres une defaite.',
          en: 'No need to reactivate after a defeat.',
          es: 'No es necesario reactivar después de una derrota.',
        },
        {
          fr: 'Loot de stele: Bougie, Armure, Coiffe, Main de Cire Momore.',
          en: 'Stele loot: Candle, Armor, Hat, Hand of Cire Momore.',
          es: 'Botín de estela: Vela, Armadura, Sombrero, Mano de Cire Momore.',
        },
      ],
      protoBosses: [],
      crystals: {
        types: [],
        notes: [],
        stats: [],
      },
    },
    drops: {
      notes: [
        {
          fr: "En mode Competitif, le boss peut drop une Pierre d'equilibre (sublimations epiques/reliques).",
          en: "In Competitive mode, the boss can drop an Equilibrium Stone (epic/relic sublimations).",
          es: "En modo Competitivo, el jefe puede soltar una Piedra de Equilibrio (sublimaciones épicas/reliquias).",
        },
      ],
      monsterDrops: [
        { name: 'Nageoire de Poisseux abyssal', rate: '25 %', level: 'Niv. 216' },
        { name: 'Dent de Poisseux abyssal', rate: '1 %', level: 'Niv. 216' },
        { name: 'Fragment de Bottes de Jr.', rate: '0.5 %', level: 'Niv. 1' },
        { name: "Pieds d'Arlang", rate: '0.4 %', level: 'Niv. 220' },
        { name: 'Nageoires scapulaires', rate: '0.4 %', level: 'Niv. 220' },
        { name: "Le Cask'abillaud", rate: '0.4 %', level: 'Niv. 220' },
        { name: 'Ecailles pectorales', rate: '0.4 %', level: 'Niv. 220' },
        { name: 'Ailerons lateraux', rate: '0.4 %', level: 'Niv. 220' },
        { name: 'La Capelan', rate: '0.4 %', level: 'Niv. 220' },
        { name: 'Le crochet', rate: '0.1 %', level: 'Niv. 227' },
        { name: 'Machoire ichtyenne', rate: '0.1 %', level: 'Niv. 227' },
        { name: 'Nageoires scapulaires', rate: '0.05 %', level: 'Niv. 225' },
        { name: 'Ailerons lateraux', rate: '0.05 %', level: 'Niv. 225' },
        { name: 'La Capelan', rate: '0.05 %', level: 'Niv. 225' },
        { name: "Pieds d'Arlang", rate: '0.05 %', level: 'Niv. 225' },
        { name: 'Ecailles pectorales', rate: '0.05 %', level: 'Niv. 225' },
        { name: "Le Cask'abillaud", rate: '0.05 %', level: 'Niv. 225' },
        { name: 'Trident de Lava', rate: '0.04 %', level: 'Niv. 230' },
        { name: 'Ecailles pectorales', rate: '0.03 %', level: 'Niv. 230' },
        { name: "Pieds d'Arlang", rate: '0.03 %', level: 'Niv. 230' },
        { name: "Le Cask'abillaud", rate: '0.03 %', level: 'Niv. 230' },
        { name: 'Ailerons lateraux', rate: '0.03 %', level: 'Niv. 230' },
        { name: 'Nageoires scapulaires', rate: '0.03 %', level: 'Niv. 230' },
        { name: 'Machoire ichtyenne', rate: '0.03 %', level: 'Niv. 230' },
        { name: 'Le crochet', rate: '0.03 %', level: 'Niv. 230' },
        { name: 'La Capelan', rate: '0.03 %', level: 'Niv. 230' },
      ],
      bossDrops: [
        { name: 'Jeton Infernal', rate: '100 %', level: 'Niv. 230' },
        { name: 'Transmutation Infernale', rate: '100 %', level: 'Niv. 1' },
        { name: 'Tete de requin', rate: '10 %', level: 'Niv. 216' },
        { name: 'Fragment de Bottes de Jr.', rate: '5 %', level: 'Niv. 1' },
        { name: 'Casque du voyageur sous-marin', rate: '4 %', level: 'Niv. 220' },
        { name: 'Epaulettes du voyageur sous-marin', rate: '4 %', level: 'Niv. 220' },
        { name: 'Amulette de Raeliss', rate: '1 %', level: 'Niv. 227' },
        { name: 'Plastron du voyageur sous-marin', rate: '1 %', level: 'Niv. 227' },
        { name: 'Bottes du voyageur sous-marin', rate: '1 %', level: 'Niv. 227' },
        { name: 'Cape du voyageur sous-marin', rate: '1 %', level: 'Niv. 227' },
        { name: 'Epee des abysses', rate: '1 %', level: 'Niv. 227' },
        { name: 'Ceinture de Raeliss', rate: '1 %', level: 'Niv. 227' },
        { name: 'Epaulettes du voyageur sous-marin', rate: '0.5 %', level: 'Niv. 227' },
        { name: 'Casque du voyageur sous-marin', rate: '0.5 %', level: 'Niv. 227' },
        { name: 'Epee des abysses', rate: '0.25 %', level: 'Niv. 230' },
        { name: 'Amulette de Raeliss', rate: '0.25 %', level: 'Niv. 230' },
        { name: 'Ceinture de Raeliss', rate: '0.25 %', level: 'Niv. 230' },
        { name: 'Plastron du voyageur sous-marin', rate: '0.25 %', level: 'Niv. 230' },
        { name: 'Bottes du voyageur sous-marin', rate: '0.25 %', level: 'Niv. 230' },
        { name: 'Cape du voyageur sous-marin', rate: '0.25 %', level: 'Niv. 230' },
        { name: 'Epaulettes du voyageur sous-marin', rate: '0.25 %', level: 'Niv. 230' },
        { name: 'Casque du voyageur sous-marin', rate: '0.25 %', level: 'Niv. 230' },
        { name: 'Bottes de Jr.', rate: '0.1 %', level: 'Niv. 230' },
        { name: "Pierre d'equilibre", rate: '0.05 %', level: 'Niv. 1' },
      ],
    },
    croupier: {
      location: { fr: "Ereboria, au centre du port d'Ereboria.", en: "Ereboria, at the center of Ereboria's port.", es: "Ereboria, en el centro del puerto de Ereboria." },
      items: [
        { name: 'Fragment de Bottes de Jr.', cost: 'Jeton Infernal x18', level: 'Niv. 1' },
        { name: 'Tete de requin', cost: 'Jeton Infernal x30', level: 'Niv. 216' },
        { name: "Le Cask'abillaud", cost: 'Jeton Infernal x50', level: 'Niv. 220' },
        { name: 'Ecailles pectorales', cost: 'Jeton Infernal x50', level: 'Niv. 220' },
        { name: "Pieds d'Arlang", cost: 'Jeton Infernal x50', level: 'Niv. 220' },
        { name: 'La Capelan', cost: 'Jeton Infernal x50', level: 'Niv. 220' },
        { name: 'Ailerons lateraux', cost: 'Jeton Infernal x50', level: 'Niv. 220' },
        { name: 'Nageoires scapulaires', cost: 'Jeton Infernal x50', level: 'Niv. 220' },
        { name: 'Casque du voyageur sous-marin', cost: 'Jeton Infernal x50', level: 'Niv. 220' },
        { name: 'Epaulettes du voyageur sous-marin', cost: 'Jeton Infernal x50', level: 'Niv. 220' },
        { name: 'Machoire ichtyenne', cost: 'Jeton Infernal x160', level: 'Niv. 227' },
        { name: 'Le crochet', cost: 'Jeton Infernal x160', level: 'Niv. 227' },
        { name: 'Cape du voyageur sous-marin', cost: 'Jeton Infernal x160', level: 'Niv. 227' },
        { name: 'Bottes du voyageur sous-marin', cost: 'Jeton Infernal x160', level: 'Niv. 227' },
        { name: 'Plastron du voyageur sous-marin', cost: 'Jeton Infernal x160', level: 'Niv. 227' },
        { name: 'Ceinture de Raeliss', cost: 'Jeton Infernal x160', level: 'Niv. 227' },
        { name: 'Amulette de Raeliss', cost: 'Jeton Infernal x160', level: 'Niv. 227' },
        { name: 'Epee des abysses', cost: 'Jeton Infernal x160', level: 'Niv. 227' },
      ],
    },
  },
  {
    id: 'ravageurs',
    name: { fr: 'Donjon Ravageurs', en: 'Ravagers Dungeon', es: 'Mazmorra de los Devastadores' },
    subtitle: {
      fr: "Boss: K'abah'al, Gardien de la route des morts",
      en: "Boss: K'abah'al, Guardian of the Road of the Dead",
      es: "Jefe: K'abah'al, Guardián del Camino de los Muertos",
    },
    levelRange: { fr: 'Niv. 216', en: 'Lvl. 216', es: 'Niv. 216' },
    summary: [
      {
        fr: "Donjon pour equipe de 6, avec 2 salles. Pas de clef necessaire.",
        en: 'Dungeon designed for 6 players with 2 rooms. No key required.',
        es: 'Mazmorra para equipo de 6 jugadores con 2 salas. No requiere llave.',
      },
      {
        fr: "Le donjon se trouve au nord-ouest de la Route des morts.",
        en: 'The dungeon is located northwest of the Road of the Dead.',
        es: 'La mazmorra se encuentra al noroeste del Camino de los Muertos.',
      },
      {
        fr: 'Le coeur du combat tourne autour des Residus, des fusions et des marques.',
        en: 'Core mechanics revolve around Residues, fusions, and marks.',
        es: 'La mecánica central gira en torno a Residuos, fusiones y marcas.',
      },
      {
        fr: "Attention a K'abah'al: tres dangereux si les fusions de Residus s'enchainent.",
        en: "Watch K'abah'al closely: very dangerous if Residue fusions chain.",
        es: "Cuidado con K'abah'al: es muy peligroso si se encadenan fusiones de Residuos.",
      },
      {
        fr: 'Certaines informations restent en validation et peuvent evoluer.',
        en: 'Some details are still being validated and may change.',
        es: 'Algunos detalles siguen en validación y pueden cambiar.',
      },
    ],
    monsters: [
      {
        name: { fr: 'Druidre', en: 'Druidre', es: 'Druidre' },
        level: { fr: 'Niv. 216', en: 'Lvl. 216', es: 'Niv. 216' },
        bonus: {
          fr: 'Faiblesse principale: Terre',
          en: 'Main weakness: Earth',
          es: 'Debilidad principal: Tierra',
        },
        description: {
          fr: 'Possede 2 sorts offensifs et le passif Ravageur.',
          en: 'Has 2 offensive spells and the Ravager passive.',
          es: 'Tiene 2 hechizos ofensivos y el pasivo Ravageur.',
        },
        spells: [
          {
            name: { fr: 'Coup de serpe hier', en: 'Sickle Strike', es: 'Golpe de hoz' },
            effect: {
              fr: "Monocible 1 PO, degats eau, pousse de 5 cases et applique Marque du ravage (2 tours).",
              en: 'Single target 1 range, water damage, pushes 5 cells and applies Ravage Mark (2 turns).',
              es: 'Monobjetivo 1 alcance, daño agua, empuja 5 casillas y aplica Marca del Ravage (2 turnos).',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/cible, 2/tour', en: '1/target, 2/turn', es: '1/objetivo, 2/turno' },
          },
          {
            name: { fr: 'Coup de faux raccord', en: 'False Scythe Cut', es: 'Corte de guadaña falsa' },
            effect: {
              fr: 'Zone sur un Residu, degats feu et transposition avec le Residu cible.',
              en: 'AoE on a Residue, fire damage and swaps position with target Residue.',
              es: 'Área sobre un Residuo, daño fuego e intercambio de posición con el Residuo objetivo.',
            },
            cost: { fr: '2 PA', en: '2 AP', es: '2 PA' },
            range: { fr: '1-10 PO', en: '1-10 Range', es: '1-10 PO' },
            limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
          },
        ],
        passive: {
          fr: 'Ravageur: a sa mort, invoque un Residu qui joue juste apres le tueur.',
          en: 'Ravager: on death, summons a Residue that acts right after the killer.',
          es: 'Ravageur: al morir, invoca un Residuo que juega justo después del asesino.',
        },
        notes: [
          {
            fr: 'Marque du ravage: les dommages subis sont repercutes sur les autres porteurs de la marque.',
            en: 'Ravage Mark: damage taken is mirrored to other marked targets.',
            es: 'Marca del Ravage: el daño recibido se replica a otros portadores de la marca.',
          },
        ],
        stats: [
          { fr: 'Role: DPS utilitaire', en: 'Role: Utility DPS', es: 'Rol: DPS utilitario' },
          { fr: 'Element de pression: Eau/Feu', en: 'Pressure element: Water/Fire', es: 'Elemento de presión: Agua/Fuego' },
        ],
      },
      {
        name: { fr: 'Maitre des tenebres', en: 'Master of Darkness', es: 'Maestro de las tinieblas' },
        level: { fr: 'Niv. 216', en: 'Lvl. 216', es: 'Niv. 216' },
        bonus: {
          fr: 'Faiblesse principale: Terre',
          en: 'Main weakness: Earth',
          es: 'Debilidad principal: Tierra',
        },
        description: {
          fr: 'Devient invisible et punit les equipes sans revelation reguliere.',
          en: 'Turns invisible and punishes teams without regular reveal.',
          es: 'Se vuelve invisible y castiga a equipos sin revelación constante.',
        },
        spells: [
          {
            name: { fr: 'Coup de fouet', en: 'Whip Strike', es: 'Golpe de látigo' },
            effect: {
              fr: 'Monocible en ligne, degats air et retire 2 PO.',
              en: 'Single target in line, air damage and removes 2 range.',
              es: 'Monobjetivo en línea, daño aire y quita 2 alcance.',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            range: { fr: '1-6 PO', en: '1-6 Range', es: '1-6 PO' },
            limit: { fr: '1/cible, 2/tour', en: '1/target, 2/turn', es: '1/objetivo, 2/turno' },
          },
          {
            name: { fr: 'Maitre mentalite', en: 'Mind Mastery', es: 'Maestría mental' },
            effect: {
              fr: "Zone sur Residu: degats terre et rend le Residu invisible (3 tours).",
              en: 'AoE on Residue: earth damage and makes Residue invisible (3 turns).',
              es: 'Área sobre Residuo: daño tierra y vuelve invisible al Residuo (3 turnos).',
            },
            cost: { fr: '2 PA', en: '2 AP', es: '2 PA' },
            range: { fr: '1-10 PO', en: '1-10 Range', es: '1-10 PO' },
            limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
          },
        ],
        passive: {
          fr: "L'obscur: devient invisible en debut de tour et gagne 50 % DI permanent s'il reste invisible.",
          en: 'The Dark One: becomes invisible at turn start and gains permanent 50% damage if still invisible next turn.',
          es: 'El Oscuro: se vuelve invisible al inicio y gana 50% daño permanente si sigue invisible en su siguiente turno.',
        },
        notes: [
          {
            fr: "Les degats directs et indirects retirent l'invisibilite.",
            en: 'Both direct and indirect damage remove invisibility.',
            es: 'El daño directo e indirecto elimina la invisibilidad.',
          },
          {
            fr: 'Ravageur: a sa mort, invoque un Residu.',
            en: 'Ravager: on death, summons a Residue.',
            es: 'Ravageur: al morir, invoca un Residuo.',
          },
        ],
        stats: [
          { fr: 'Role: pression tactique', en: 'Role: tactical pressure', es: 'Rol: presión táctica' },
        ],
      },
      {
        name: { fr: 'Glouto', en: 'Glouto', es: 'Glouto' },
        level: { fr: 'Niv. 216', en: 'Lvl. 216', es: 'Niv. 216' },
        bonus: {
          fr: 'Faiblesse principale: Air',
          en: 'Main weakness: Air',
          es: 'Debilidad principal: Aire',
        },
        description: {
          fr: 'Monstre de snowball qui devient dangereux quand il devore invocations et Residus.',
          en: 'Snowball monster that gets dangerous after devouring summons and Residues.',
          es: 'Monstruo de snowball que se vuelve peligroso al devorar invocaciones y Residuos.',
        },
        spells: [
          {
            name: { fr: 'Gloutombre', en: 'Gloutombre', es: 'Gloutombra' },
            effect: {
              fr: 'Monocible 1 PO, degats terre, retire 2 PO et 3 PM.',
              en: 'Single target 1 range, earth damage, removes 2 range and 3 MP.',
              es: 'Monobjetivo 1 alcance, daño tierra, quita 2 alcance y 3 PM.',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/cible, 3/tour', en: '1/target, 3/turn', es: '1/objetivo, 3/turno' },
          },
          {
            name: { fr: 'Gloutonie', en: 'Gluttony', es: 'Glotonería' },
            effect: {
              fr: 'Mange une invocation ou un Residu, soigne, gagne 1 PM et 25 % DI cumulable.',
              en: 'Eats a summon or Residue, heals, gains 1 MP and stackable 25% increased damage.',
              es: 'Devora una invocación o Residuo, se cura, gana 1 PM y 25% daño aumentado acumulable.',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/cible, 3/tour', en: '1/target, 3/turn', es: '1/objetivo, 3/turno' },
          },
        ],
        passive: {
          fr: 'Ventre sans fond: le soin depassant les PV max est ajoute aux PV max.',
          en: 'Bottomless Stomach: healing beyond max HP increases max HP.',
          es: 'Vientre sin fondo: la curación sobre PV máximos se añade a PV máximos.',
        },
        notes: [
          {
            fr: 'Si un Residu est englouti, le Glouto invoque un Residu supplementaire a sa mort.',
            en: 'If a Residue is devoured, Glouto summons one extra Residue on death.',
            es: 'Si devora un Residuo, Glouto invoca un Residuo extra al morir.',
          },
          {
            fr: 'Ravageur: a sa mort, invoque un Residu.',
            en: 'Ravager: on death, summons a Residue.',
            es: 'Ravageur: al morir, invoca un Residuo.',
          },
        ],
        stats: [
          { fr: 'Role: menace progressive', en: 'Role: scaling threat', es: 'Rol: amenaza progresiva' },
        ],
      },
      {
        name: { fr: 'Residu (Invocation)', en: 'Residue (Summon)', es: 'Residuo (Invocación)' },
        level: { fr: 'Invocation', en: 'Summon', es: 'Invocación' },
        bonus: { fr: 'Unite de fusion', en: 'Fusion unit', es: 'Unidad de fusión' },
        description: {
          fr: 'Noyau mecanique du donjon: fusion, reflet de degats et buff melee.',
          en: 'Core mechanic unit: fusion, reflected damage and melee buff.',
          es: 'Unidad mecánica central: fusión, reflejo de daño y buff melee.',
        },
        spells: [
          {
            name: { fr: 'Fuuu-sion', en: 'Fuuu-sion', es: 'Fuuu-sión' },
            effect: {
              fr: 'Fusionne avec un autre Residu et invoque un Ravageur aleatoire a 50 % PV.',
              en: 'Fuses with another Residue and summons a random Ravager at 50% HP.',
              es: 'Se fusiona con otro Residuo e invoca un Ravageur aleatorio al 50% de PV.',
            },
            cost: { fr: '2 PA', en: '2 AP', es: '2 PA' },
            range: { fr: '1 PO', en: '1 Range', es: '1 PO' },
          },
        ],
        passive: {
          fr: 'Les allies au contact infligent 30 % DI, et les degats recus sont annules puis renvoyes a l attaquant.',
          en: 'Adjacent fighters deal 30% increased damage, and incoming damage is canceled then reflected to attacker.',
          es: 'Combatientes adyacentes infligen 30% más daño, y el daño recibido se anula y se devuelve al atacante.',
        },
        notes: [
          {
            fr: "Si seuls des Residus restent en combat, ils sont detruits et le combat se termine.",
            en: 'If only Residues remain, they are destroyed and the fight ends.',
            es: 'Si solo quedan Residuos, se destruyen y el combate termina.',
          },
          {
            fr: 'Les Residus jouent immediatement apres leur apparition.',
            en: 'Residues act immediately after being summoned.',
            es: 'Los Residuos actúan inmediatamente tras aparecer.',
          },
        ],
        stats: [
          { fr: 'Priorite: controle/fusion', en: 'Priority: control/fusion', es: 'Prioridad: control/fusión' },
        ],
      },
      {
        name: {
          fr: "K'abah'al, Gardien de la route des morts",
          en: "K'abah'al, Guardian of the Road of the Dead",
          es: "K'abah'al, Guardián del Camino de los Muertos",
        },
        level: { fr: 'Boss', en: 'Boss', es: 'Jefe' },
        bonus: {
          fr: 'Faiblesse principale: Eau/Air',
          en: 'Main weakness: Water/Air',
          es: 'Debilidad principal: Agua/Aire',
        },
        description: {
          fr: "Version boss en salle finale. Manipule marques, transpositions et executions.",
          en: 'Boss-room version. Manipulates marks, transpositions and executions.',
          es: 'Versión de jefe final. Manipula marcas, transposiciones y ejecuciones.',
        },
        spells: [
          {
            name: { fr: 'Devastation', en: 'Devastation', es: 'Devastación' },
            effect: {
              fr: 'Lance automatiquement de lourds degats feu sur Marques Residuelles et Residus en debut de tour.',
              en: 'Automatically deals heavy fire damage on Residual Marks and active Residues at turn start.',
              es: 'Lanza automáticamente daño fuego muy alto sobre Marcas Residuales y Residuos al inicio del turno.',
            },
            cost: { fr: '0 PA', en: '0 AP', es: '0 PA' },
          },
          {
            name: { fr: 'Envol final', en: 'Final Flight', es: 'Vuelo final' },
            effect: {
              fr: 'Teleportation au contact dune cible isolee, puis degats air.',
              en: 'Teleports into melee with an isolated target, then deals air damage.',
              es: 'Se teletransporta en melee con un objetivo aislado y luego inflige daño aire.',
            },
            cost: { fr: '2 PA', en: '2 AP', es: '2 PA' },
            range: { fr: 'Toute la carte', en: 'Whole map', es: 'Todo el mapa' },
          },
          {
            name: { fr: 'Dechiquetage', en: 'Shredding', es: 'Desgarrar' },
            effect: {
              fr: 'Degats terre et applique Dernier souffle + Plaie profonde (2 tours).',
              en: 'Earth damage and applies Last Breath + Deep Wound (2 turns).',
              es: 'Daño tierra y aplica Último Aliento + Herida Profunda (2 turnos).',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            range: { fr: '1 PO', en: '1 Range', es: '1 PO' },
            limit: { fr: '1/cible, 2/tour', en: '1/target, 2/turn', es: '1/objetivo, 2/turno' },
          },
        ],
        passive: {
          fr: "K'abah'al l'immortel: a la mort, invoque 8 Residus de K'abah'al.",
          en: "K'abah'al the Immortal: on death, summons 8 K'abah'al Residues.",
          es: "K'abah'al el inmortal: al morir, invoca 8 Residuos de K'abah'al.",
        },
        notes: [
          {
            fr: 'Absorption funeste: a chaque fusion, -60 resist elementaire et +30 % DI, puis pose une Marque Residuelle proche des joueurs.',
            en: 'Doom Absorption: each fusion gives -60 elemental resistance and +30% increased damage, then places a Residual Mark near players.',
            es: 'Absorción funesta: cada fusión da -60 resistencia elemental y +30% daño aumentado, y coloca una Marca Residual cerca de jugadores.',
          },
        ],
        stats: [
          { fr: 'Role: boss principal', en: 'Role: main boss', es: 'Rol: jefe principal' },
        ],
      },
      {
        name: {
          fr: "Residu de K'abah'al (Invocation)",
          en: "K'abah'al Residue (Summon)",
          es: "Residuo de K'abah'al (Invocación)",
        },
        level: { fr: 'Invocation', en: 'Summon', es: 'Invocación' },
        bonus: { fr: 'Fusion boss', en: 'Boss fusion', es: 'Fusión de jefe' },
        description: {
          fr: "Version boss du Residu. Peut fusionner pour invoquer un K'abah'al a 20 % PV.",
          en: "Boss version of Residue. Can fuse to summon a K'abah'al at 20% HP.",
          es: "Versión de jefe del Residuo. Puede fusionarse para invocar un K'abah'al al 20% de PV.",
        },
        spells: [
          {
            name: { fr: 'Fuuu-sion', en: 'Fuuu-sion', es: 'Fuuu-sión' },
            effect: {
              fr: "Fusionne avec un autre Residu de K'abah'al pour invoquer un K'abah'al a 20 % PV.",
              en: "Fuses with another K'abah'al Residue to summon a K'abah'al at 20% HP.",
              es: "Se fusiona con otro Residuo de K'abah'al para invocar un K'abah'al al 20% de PV.",
            },
            cost: { fr: '2 PA', en: '2 AP', es: '2 PA' },
            range: { fr: '1 PO', en: '1 Range', es: '1 PO' },
          },
        ],
        passive: {
          fr: 'Comme le Residu normal: +30 % DI melee et reflet des degats recus.',
          en: 'Same as normal Residue: +30% melee increased damage and reflected incoming damage.',
          es: 'Como Residuo normal: +30% daño melee y reflejo del daño recibido.',
        },
        notes: [
          {
            fr: "Si la fusion se produit, le nouveau K'abah'al n'invoque plus de Residus a sa mort.",
            en: "If fusion occurs, the newly summoned K'abah'al no longer summons Residues on death.",
            es: "Si se produce la fusión, el nuevo K'abah'al ya no invoca Residuos al morir.",
          },
        ],
        stats: [
          { fr: 'Priorite: interruption de fusion', en: 'Priority: interrupt fusion', es: 'Prioridad: interrumpir fusión' },
        ],
      },
    ],
    boss: {
      name: {
        fr: "K'abah'al, Gardien de la route des morts",
        en: "K'abah'al, Guardian of the Road of the Dead",
        es: "K'abah'al, Guardián del Camino de los Muertos",
      },
      level: { fr: 'Niv. 216+', en: 'Lvl. 216+', es: 'Niv. 216+' },
      description: {
        fr: "Boss tres punitif autour des cibles isolees, des marques et des fusions de Residus.",
        en: 'Very punishing boss around isolated targets, marks and Residue fusions.',
        es: 'Jefe muy punitivo con objetivos aislados, marcas y fusiones de Residuos.',
      },
      spells: [
        {
          name: { fr: 'Confusion mortelle', en: 'Deadly Confusion', es: 'Confusión mortal' },
          effect: {
            fr: 'Transpose deux ennemis sur toute la carte avant Envol final.',
            en: 'Swaps two enemies anywhere on the map before Final Flight.',
            es: 'Transpone a dos enemigos en todo el mapa antes de Vuelo Final.',
          },
          cost: { fr: '0 PA', en: '0 AP', es: '0 PA' },
          limit: { fr: 'Recharge 2 tours', en: '2-turn cooldown', es: 'Recarga de 2 turnos' },
        },
        {
          name: { fr: 'Vigilance du sceptre', en: 'Scepter Vigilance', es: 'Vigilancia del cetro' },
          effect: {
            fr: 'Monocible a distance sans ligne de vue, degats feu.',
            en: 'Single-target ranged attack without line of sight, fire damage.',
            es: 'Ataque monobjetivo a distancia sin línea de visión, daño fuego.',
          },
          cost: { fr: '3 PA', en: '3 AP', es: '3 PA' },
          range: { fr: '2 PO et +', en: '2+ Range', es: '2 PO o más' },
          limit: { fr: '1/cible, 3/tour', en: '1/target, 3/turn', es: '1/objetivo, 3/turno' },
        },
      ],
      passives: [
        {
          name: { fr: 'Absorption funeste', en: 'Doom Absorption', es: 'Absorción funesta' },
          effect: {
            fr: 'Par fusion: -60 resist elementaire, +30 % DI, et generation de Marque Residuelle.',
            en: 'Per fusion: -60 elemental resistance, +30% increased damage, and Residual Mark generation.',
            es: 'Por fusión: -60 resistencia elemental, +30% daño aumentado y generación de Marca Residual.',
          },
          notes: [],
        },
      ],
      stats: [
        { fr: 'Role: execution/isolation', en: 'Role: execution/isolation', es: 'Rol: ejecución/aislamiento' },
      ],
    },
    mechanics: [
      {
        title: { fr: 'Salle 1 et Salle Boss', en: 'Room 1 and Boss Room', es: 'Sala 1 y sala del jefe' },
        paragraphs: [
          {
            fr: 'Premiere salle: composition orientee Ravageurs. Salle boss: K abah al + Druidres + Maitres des tenebres + Gloutos.',
            en: 'First room: Ravager-oriented composition. Boss room: K abah al + Druidres + Masters of Darkness + Gloutos.',
            es: 'Primera sala: composición centrada en Ravageurs. Sala de jefe: K abah al + Druidres + Maestros de tinieblas + Gloutos.',
          },
          {
            fr: 'Les Residus ne sont plus desincarnes automatiquement quand il ne reste que des Residus.',
            en: 'Residues are no longer automatically removed when only Residues remain.',
            es: 'Los Residuos ya no se desincorporan automáticamente cuando solo quedan Residuos.',
          },
        ],
      },
      {
        title: { fr: 'Mecaniques clefs', en: 'Key Mechanics', es: 'Mecánicas clave' },
        paragraphs: [
          {
            fr: 'Interrompez les fusions de Residus rapidement: elles alimentent la montee en puissance du boss.',
            en: 'Interrupt Residue fusions quickly: they fuel the boss scaling.',
            es: 'Interrumpe rápido las fusiones de Residuos: alimentan el escalado del jefe.',
          },
          {
            fr: 'Evitez les cibles isolees: K abah al peut les punir avec Envol final puis Dechiquetage.',
            en: 'Avoid isolated targets: K abah al can punish them with Final Flight then Shredding.',
            es: 'Evita objetivos aislados: K abah al puede castigarlos con Vuelo Final y luego Desgarrar.',
          },
          {
            fr: 'Revelation et pression continue sur les unites invisibles pour limiter les bonus permanents.',
            en: 'Maintain reveal and pressure on invisible units to limit permanent buffs.',
            es: 'Mantén revelación y presión sobre unidades invisibles para limitar bonificaciones permanentes.',
          },
          {
            fr: 'Controlez les Residus proches du groupe pour reduire reflet de degats et buff melee adverse.',
            en: 'Control Residues near your group to reduce reflected damage and enemy melee buff.',
            es: 'Controla Residuos cerca del grupo para reducir reflejo de daño y buff melee enemigo.',
          },
        ],
      },
      {
        title: { fr: 'Strategie (etat actuel)', en: 'Strategy (current state)', es: 'Estrategia (estado actual)' },
        paragraphs: [
          {
            fr: 'Priorite 1: casser les chaines de fusion.',
            en: 'Priority 1: break fusion chains.',
            es: 'Prioridad 1: romper cadenas de fusión.',
          },
          {
            fr: 'Priorite 2: eviter les isolements et reassembler les cibles transpositionnees.',
            en: 'Priority 2: avoid isolation and regroup swapped targets.',
            es: 'Prioridad 2: evitar aislamientos y reagrupar objetivos transpuestos.',
          },
          {
            fr: 'Priorite 3: temporiser les pics de degats du boss et finir les menaces Glouto/Maitre des tenebres.',
            en: 'Priority 3: survive boss burst windows and finish Glouto/Master of Darkness threats.',
            es: 'Prioridad 3: aguantar picos de daño del jefe y cerrar amenazas de Glouto/Maestro de tinieblas.',
          },
          {
            fr: 'Guide en evolution: certaines interactions restent a confirmer.',
            en: 'Guide in progress: some interactions still require confirmation.',
            es: 'Guía en progreso: algunas interacciones aún requieren confirmación.',
          },
        ],
      },
    ],
    plan: {
      fr: 'Composition recommandee: 1 tank, 1 support, 4 DPS flex. Prioriser controle de fusion et anti-isolation.',
      en: 'Recommended comp: 1 tank, 1 support, 4 flex DPS. Prioritize fusion control and anti-isolation.',
      es: 'Composición recomendada: 1 tank, 1 support, 4 DPS flex. Prioriza control de fusión y anti-aislamiento.',
    },
    steles: {
      lead: {
        fr: "Stèle d'intervention Anathar: nécessite une Clef d'intervention d'Anathar.",
        en: 'Anathar intervention stele: requires an Anathar Intervention Key.',
        es: 'Estela de intervención de Anathar: requiere una Llave de intervención de Anathar.',
      },
      notes: [
        {
          fr: "Anathar utilise 3 sorts clés: Golpe Demoníaco (contact), Marca d'Anathar (portée globale) et Infierno Demoníaco.",
          en: 'Anathar uses 3 key spells: Demonic Strike (melee), Mark of Anathar (global range), and Demonic Hellfire.',
          es: 'Anathar usa 3 hechizos clave: Golpe Demoníaco (contacto), Marca de Anathar (alcance global) e Infierno Demoníaco.',
        },
        {
          fr: "À la fin de son tour, Anathar observe le joueur marqué et réplique jusqu'à 4 actions différentes au début de son tour suivant.",
          en: 'At end of turn, Anathar observes the marked player and replicates up to 4 different actions at the start of its next turn.',
          es: 'Al final de su turno, Anathar observa al jugador marcado y replica hasta 4 acciones diferentes al inicio de su siguiente turno.',
        },
        {
          fr: "S'il observe moins de 4 actions, il peut lancer Infierno Demoníaco: dégâts modérés à tous les joueurs (élément aléatoire).",
          en: 'If it observes fewer than 4 actions, it can cast Demonic Hellfire: moderate damage to all players (random element).',
          es: 'Si observa menos de 4 acciones, puede lanzar Infierno Demoníaco: daños moderados a todos los jugadores (elemento aleatorio).',
        },
        {
          fr: "Infierno Demoníaco renforcé: si 2 actions ou moins, les ennemis gagnent +25% DI et +150 résistance (1 tour); si 0 action, ils récupèrent 50% de leurs PdV perdus.",
          en: 'Enhanced Demonic Hellfire: with 2 or fewer actions, enemies gain +25% damage dealt and +150 resistance (1 turn); with 0 actions, they recover 50% of missing HP.',
          es: 'Infierno Demoníaco potenciado: con 2 acciones o menos, los enemigos ganan +25% daños infligidos y +150 resistencias (1 turno); con 0 acciones, recuperan 50% de sus PdV perdidos.',
        },
        {
          fr: 'Effet spécifique Ravageurs: à sa mort, Anathar laisse un Résidu.',
          en: 'Ravagers specific effect: on death, Anathar leaves a Residue.',
          es: 'Efecto específico Devastadores: al morir, Anathar deja un Residuo.',
        },
        {
          fr: 'La table des effets par action (PM/PA, soins, armure, placements, dégâts élémentaires) suit la table de référence Anathar.',
          en: 'The action-to-effect mapping (MP/AP, healing, armor, positioning, elemental damage) follows the Anathar reference table.',
          es: 'El mapeo acción-efecto (PM/PA, curas, armadura, posicionamiento, daños elementales) sigue la tabla de referencia de Anathar.',
        },
      ],
      protoBosses: [],
      crystals: {
        types: [
          {
            fr: "Action du marqué à éviter: retrait PA/PM massif, buffs de stats, téléportations et dégâts élémentaires superflus.",
            en: 'Marked-player actions to avoid: heavy AP/MP removal, stat buffs, extra teleports and unnecessary elemental hits.',
            es: 'Acciones a evitar del marcado: retiro masivo de PA/PM, buffs de stats, teletransportes y daños elementales innecesarios.',
          },
        ],
        notes: [
          {
            fr: 'Objectif de tour marqué: limiter les actions différentes pour contrôler la réplication.',
            en: 'Marked-turn objective: limit different actions to control replication.',
            es: 'Objetivo del turno marcado: limitar acciones diferentes para controlar la replicación.',
          },
        ],
        stats: [],
      },
    },
    drops: {
      notes: [
        {
          fr: 'Section omise sur demande (drops non inclus pour cette iteration).',
          en: 'Section intentionally omitted (drops not included in this iteration).',
          es: 'Sección omitida intencionalmente (drops no incluidos en esta iteración).',
        },
      ],
      monsterDrops: [],
      bossDrops: [],
    },
    croupier: {
      location: {
        fr: 'Section omise sur demande.',
        en: 'Section intentionally omitted.',
        es: 'Sección omitida intencionalmente.',
      },
      items: [],
    },
  },
  {
    id: 'egares',
    name: { fr: 'Donjon Égarés', en: 'Lost Ones Dungeon', es: 'Mazmorra de los Idos' },
    subtitle: {
      fr: 'Boss: !@#dh`~',
      en: 'Boss: !@#dh`~',
      es: 'Jefe: !@#dh`~',
    },
    levelRange: { fr: 'Niv. 216', en: 'Lvl. 216', es: 'Niv. 216' },
    summary: [
      {
        fr: 'Donjon pour 6 joueurs, 2 salles, sans clef.',
        en: 'Dungeon for 6 players, 2 rooms, no key required.',
        es: 'Mazmorra para 6 jugadores, 2 salas y sin llave.',
      },
      {
        fr: 'Tous les Égarés ont une mécanique de Fuite avec échange de position selon le type de dégâts subis.',
        en: 'All Lost Ones have an Escape mechanic with position swap depending on damage type received.',
        es: 'Todos los Extraviados tienen una mecánica de Huida con intercambio de posición según el tipo de daño recibido.',
      },
      {
        fr: 'Mécanique clé du donjon: mettre tous les Égarés KO en moins de 2 tours pour finir le combat.',
        en: 'Key dungeon mechanic: knock all Lost Ones to 1 HP within less than 2 turns to end the fight.',
        es: 'Mecánica clave: dejar KO a todos los Extraviados en menos de 2 turnos para terminar el combate.',
      },
      {
        fr: 'Certaines informations restent en validation et seront complétées.',
        en: 'Some details are still being validated and will be expanded.',
        es: 'Algunos detalles siguen en validación y se ampliarán.',
      },
    ],
    monsters: [
      {
        name: { fr: 'Réman’Hante', en: 'RemanHante', es: 'RémanHante' },
        level: { fr: 'Niv. 216', en: 'Lvl. 216', es: 'Niv. 216' },
        bonus: {
          fr: 'Faiblesse principale: Air',
          en: 'Main weakness: Air',
          es: 'Debilidad principal: Aire',
        },
        description: {
          fr: '2 sorts offensifs de mêlée/zone + passif Rémanence.',
          en: '2 offensive melee/area spells + Remanence passive.',
          es: '2 hechizos ofensivos de melee/zona + pasivo Remanencia.',
        },
        spells: [
          {
            name: { fr: 'Toupie démentielle', en: 'Demented Spin', es: 'Peonza demente' },
            effect: {
              fr: 'Monocible 1 PO, dégâts air.',
              en: 'Single-target 1 range, air damage.',
              es: 'Monobjetivo 1 alcance, daño aire.',
            },
            cost: { fr: '5 PA', en: '5 AP', es: '5 PA' },
            limit: { fr: '1/cible, 3/tour', en: '1/target, 3/turn', es: '1/objetivo, 3/turno' },
          },
          {
            name: { fr: 'Toupie de la démence', en: 'Madness Spin', es: 'Peonza de la demencia' },
            effect: {
              fr: 'Zone croix taille 5 (0 PO), dégâts air et attire les ennemis au contact.',
              en: 'Size-5 cross AoE (0 range), air damage and pulls enemies into melee.',
              es: 'Área en cruz tamaño 5 (0 alcance), daño aire y atrae enemigos al cuerpo a cuerpo.',
            },
            cost: { fr: '3 PA', en: '3 AP', es: '3 PA' },
            limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
          },
        ],
        passive: {
          fr: 'Rémanence: échange avec l’allié le plus éloigné si dégâts distance. Zone d’arrivée: alliés gagnent +50 Résistance Élémentaire (cumul 2, 2 tours).',
          en: 'Remanence: swaps with farthest ally if hit by ranged damage. Arrival zone grants allies +50 Elemental Resistance (stack 2, 2 turns).',
          es: 'Remanencia: intercambia con el aliado más lejano si recibe daño a distancia. En zona de llegada, aliados ganan +50 Resistencia Elemental (acumula 2, 2 turnos).',
        },
        notes: [],
        stats: [
          { fr: 'Rôle: attraction et setup', en: 'Role: pull/setup', es: 'Rol: atracción y setup' },
        ],
      },
      {
        name: { fr: 'CeEvroaint', en: 'CeEvroaint', es: 'CeEvroaint' },
        level: { fr: 'Niv. 216', en: 'Lvl. 216', es: 'Niv. 216' },
        bonus: {
          fr: 'Faiblesse principale: Terre',
          en: 'Main weakness: Earth',
          es: 'Debilidad principal: Tierra',
        },
        description: {
          fr: 'Monstre de focus mono-cible avec montée de dégâts via Mauvais œil.',
          en: 'Single-target focus unit with scaling damage through Evil Eye stacks.',
          es: 'Unidad de foco monobjetivo con escalado de daño mediante Ojo Maligno.',
        },
        spells: [
          {
            name: { fr: 'Regard méchant démentiel', en: 'Demented Evil Glare', es: 'Mirada maligna demente' },
            effect: {
              fr: 'Monocible 1-3 PO, dégâts eau, applique Mauvais œil (+1 niv, max 8). Gagne 1 PM infini par lancer en fin de tour (max 10).',
              en: 'Single-target 1-3 range, water damage, applies Evil Eye (+1 level, max 8). Gains 1 infinite MP per cast at end of turn (max 10).',
              es: 'Monobjetivo 1-3 alcance, daño agua, aplica Ojo Maligno (+1 nivel, máx 8). Gana 1 PM infinito por lanzamiento al final de turno (máx 10).',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/cible, 3/tour', en: '1/target, 3/turn', es: '1/objetivo, 3/turno' },
          },
        ],
        passive: {
          fr: 'Détachevrotant: échange avec allié le plus éloigné si dégâts de dos. -30% dégâts subis face/côté, +30% de dos. Zone d’arrivée: +50 Résistance Élémentaire aux alliés (cumul 2).',
          en: 'Detachevrotant: swaps with farthest ally if hit from behind. -30% damage taken front/side, +30% from back. Arrival zone grants +50 Elemental Resistance to allies (stack 2).',
          es: 'Detachevrotant: intercambia con aliado más lejano si recibe daño por la espalda. -30% daño recibido frente/lateral, +30% por espalda. Zona de llegada: +50 Resistencia Elemental a aliados (acumula 2).',
        },
        notes: [
          {
            fr: 'Mauvais œil augmente très vite le burst reçu de ce sort.',
            en: 'Evil Eye quickly amplifies the burst from this spell.',
            es: 'Ojo Maligno aumenta muy rápido el burst recibido de este hechizo.',
          },
        ],
        stats: [
          { fr: 'Rôle: exécution mono-cible', en: 'Role: single-target execution', es: 'Rol: ejecución monobjetivo' },
        ],
      },
      {
        name: { fr: 'Ésrevni', en: 'Esrevni', es: 'Ésrevni' },
        level: { fr: 'Niv. 216', en: 'Lvl. 216', es: 'Niv. 216' },
        bonus: {
          fr: 'Faiblesse principale: Terre',
          en: 'Main weakness: Earth',
          es: 'Debilidad principal: Tierra',
        },
        description: {
          fr: 'Dégâts feu à distance avec vol de vie et scaling sur PV manquants.',
          en: 'Ranged fire damage with life steal and missing-HP scaling.',
          es: 'Daño fuego a distancia con robo de vida y escalado por PV faltantes.',
        },
        spells: [
          {
            name: { fr: 'Lancer de la démence', en: 'Madness Throw', es: 'Lanzamiento de la demencia' },
            effect: {
              fr: 'Monocible en ligne 1-10 PO, dégâts feu et vole 100% des dommages infligés.',
              en: 'Single-target in line 1-10 range, fire damage and steals 100% of damage dealt.',
              es: 'Monobjetivo en línea 1-10 alcance, daño fuego y roba 100% del daño infligido.',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/cible, 3/tour', en: '1/target, 3/turn', es: '1/objetivo, 3/turno' },
          },
        ],
        passive: {
          fr: 'À l’envers: échange avec allié le plus éloigné si dégâts mêlée. +1% dégâts infligés par % PV manquant. Zone d’arrivée: +50 Résistance Élémentaire aux alliés (cumul 2).',
          en: 'Upside Down: swaps with farthest ally if hit by melee damage. +1% damage dealt per % missing HP. Arrival zone grants +50 Elemental Resistance to allies (stack 2).',
          es: 'Al revés: intercambia con aliado más lejano si recibe daño melee. +1% daño infligido por cada % de PV faltante. Zona de llegada: +50 Resistencia Elemental a aliados (acumula 2).',
        },
        notes: [],
        stats: [
          { fr: 'Rôle: menace de sustain', en: 'Role: sustain threat', es: 'Rol: amenaza de sustain' },
        ],
      },
      {
        name: { fr: '!@#dh`~ (Boss)', en: '!@#dh`~ (Boss)', es: '!@#dh`~ (Jefe)' },
        level: { fr: 'Boss', en: 'Boss', es: 'Jefe' },
        bonus: {
          fr: 'Stabilisé + immunité retrait PM',
          en: 'Stabilized + MP removal immunity',
          es: 'Estabilizado + inmunidad a retiro de PM',
        },
        description: {
          fr: 'Boss orienté contrôle de zone via glyphes ligne infinie + pression mono-cible globale.',
          en: 'Zone-control boss with infinite-line glyphs + global single-target pressure.',
          es: 'Jefe de control de zona con glifos en línea infinita + presión monobjetivo global.',
        },
        spells: [
          {
            name: { fr: '|]} LJo00{¨:,', en: '|]} LJo00{¨:,', es: '|]} LJo00{¨:,' },
            effect: {
              fr: 'Pose automatiquement des glyphes en rectangle largeur 3 (ligne infinie) devant et sous le lanceur. Les glyphes infligent de lourds dégâts terre (1 fois/tour).',
              en: 'Automatically places rectangle glyphs width 3 (infinite length) in front and below caster. Glyphs deal heavy earth damage (once/turn).',
              es: 'Coloca automáticamente glifos en rectángulo de ancho 3 (línea infinita) frente y debajo del lanzador. Los glifos infligen daño tierra muy alto (1 vez/turno).',
            },
            cost: { fr: '2 PA', en: '2 AP', es: '2 PA' },
          },
          {
            name: { fr: 'Un tiens vaut mieux que deux tu l’auras', en: 'One in hand is better than two in the bush', es: 'Más vale uno en mano que dos volando' },
            effect: {
              fr: 'Monocible sur toute la carte avec ligne de vue, dégâts feu.',
              en: 'Single-target anywhere on map with line of sight, fire damage.',
              es: 'Monobjetivo en todo el mapa con línea de visión, daño fuego.',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/cible', en: '1/target', es: '1/objetivo' },
          },
        ],
        passive: {
          fr: 'À chaque jour suffit à sa peine: -75 Résistance Dos. Fuite active si perd 10% PV en un tour, échange avec allié le plus éloigné. Zone d’arrivée: +50 Résistance Élémentaire alliés (cumul 2).',
          en: 'Each day has enough trouble: -75 Back Resistance. Escape triggers if it loses 10% HP in one turn, swapping with farthest ally. Arrival zone: +50 Elemental Resistance for allies (stack 2).',
          es: 'A cada día le basta su pena: -75 Resistencia de Espalda. Huida se activa si pierde 10% PV en un turno, intercambiando con el aliado más lejano. Zona de llegada: +50 Resistencia Elemental a aliados (acumula 2).',
        },
        notes: [],
        stats: [
          { fr: 'Rôle: contrôle zone + punition', en: 'Role: zone control + punishment', es: 'Rol: control de zona + castigo' },
        ],
      },
    ],
    boss: {
      name: { fr: '!@#dh`~', en: '!@#dh`~', es: '!@#dh`~' },
      level: { fr: 'Niv. 216+', en: 'Lvl. 216+', es: 'Niv. 216+' },
      description: {
        fr: 'Boss stable, orienté glyphes en ligne et focus map-wide.',
        en: 'Stable boss focused on line glyphs and map-wide single-target pressure.',
        es: 'Jefe estable enfocado en glifos en línea y presión monobjetivo global.',
      },
      spells: [
        {
          name: { fr: 'Glyphe ligne infinie', en: 'Infinite Line Glyph', es: 'Glifo de línea infinita' },
          effect: {
            fr: 'Zone rectangulaire de largeur 3, lourds dégâts terre sur entrée/début de tour.',
            en: 'Rectangle zone width 3, heavy earth damage on entry/start of turn.',
            es: 'Zona rectangular ancho 3, daño tierra muy alto al entrar/inicio de turno.',
          },
          cost: { fr: '2 PA', en: '2 AP', es: '2 PA' },
        },
      ],
      passives: [
        {
          name: { fr: 'À chaque jour suffit à sa peine', en: 'Enough trouble for each day', es: 'A cada día le basta su pena' },
          effect: {
            fr: 'Stabilisé, immunité retrait PM, fuite spéciale sur perte de 10% PV/tour.',
            en: 'Stabilized, immune to MP removal, special escape when losing 10% HP/turn.',
            es: 'Estabilizado, inmune a retiro de PM, huida especial al perder 10% PV/turno.',
          },
          notes: [],
        },
      ],
      stats: [
        { fr: 'Rôle: boss de zoning', en: 'Role: zoning boss', es: 'Rol: jefe de zonificación' },
      ],
    },
    mechanics: [
      {
        title: { fr: 'Fuite des Égarés', en: 'Lost Ones Escape', es: 'Huida de los Extraviados' },
        paragraphs: [
          {
            fr: 'Tous les Égarés ont une mécanique de Fuite, même s’il ne reste qu’un seul monstre.',
            en: 'All Lost Ones have an Escape mechanic, even if only one monster remains.',
            es: 'Todos los Extraviados tienen mecánica de Huida, incluso si queda un solo monstruo.',
          },
          {
            fr: 'La Fuite peut être contrée par stabilisation, sauf sur le boss.',
            en: 'Escape can be countered by stabilization, except on the boss.',
            es: 'La Huida puede contrarrestarse con estabilización, excepto en el jefe.',
          },
        ],
      },
      {
        title: { fr: 'Marionettes et Sur un fil', en: 'Marionettes and On a String', es: 'Marionetas y Sobre un hilo' },
        paragraphs: [
          {
            fr: 'Les Égarés ne meurent pas seuls: à 1 PV, ils passent en état Sur un fil.',
            en: 'Lost Ones do not die individually: at 1 HP they enter the On a String state.',
            es: 'Los Extraviados no mueren individualmente: a 1 PV entran en estado Sobre un hilo.',
          },
          {
            fr: 'Sur un fil: ressuscite après 2 tours (50% PV, valeur divisée par 2 à chaque résurrection), passe son tour et est insensible pendant l’état.',
            en: 'On a String: resurrects after 2 turns (50% HP, halved each resurrection), skips turn and is insensitive while in state.',
            es: 'Sobre un hilo: resucita tras 2 turnos (50% PV, valor dividido entre 2 en cada resurrección), pasa turno y es insensible durante el estado.',
          },
          {
            fr: 'Condition de fin: mettre tous les Égarés Sur un fil en moins de 2 tours.',
            en: 'Finish condition: put all Lost Ones into On a String in under 2 turns.',
            es: 'Condición de finalización: poner a todos los Extraviados en Sobre un hilo en menos de 2 turnos.',
          },
        ],
      },
      {
        title: { fr: 'Salle 1, salle boss et stratégie', en: 'Room 1, boss room and strategy', es: 'Sala 1, sala de jefe y estrategia' },
        paragraphs: [
          {
            fr: 'Salle 1: 3 + 3 + 2 Égarés. Salle boss: !@#dh`~ + 3 + 2 + 2 Égarés.',
            en: 'Room 1: 3 + 3 + 2 Lost Ones. Boss room: !@#dh`~ + 3 + 2 + 2 Lost Ones.',
            es: 'Sala 1: 3 + 3 + 2 Extraviados. Sala de jefe: !@#dh`~ + 3 + 2 + 2 Extraviados.',
          },
          {
            fr: 'Priorité: contrôler les placements, gérer les Fuites et synchroniser les KO.',
            en: 'Priority: control positions, manage Escapes, and synchronize KOs.',
            es: 'Prioridad: controlar posicionamientos, gestionar Huidas y sincronizar KOs.',
          },
          {
            fr: 'Le boss ajoute une forte pression de glyphes, il faut protéger les trajectoires sûres.',
            en: 'The boss adds heavy glyph pressure, so safe movement lanes must be protected.',
            es: 'El jefe añade mucha presión de glifos, por lo que hay que proteger rutas seguras de movimiento.',
          },
          {
            fr: 'Stratégie détaillée en cours de complétion.',
            en: 'Detailed strategy is still being completed.',
            es: 'La estrategia detallada sigue en proceso de completarse.',
          },
        ],
      },
    ],
    plan: {
      fr: 'Plan recommandé: contrôle + stabilisation + burst coordonné pour forcer les KO synchronisés.',
      en: 'Recommended plan: control + stabilization + coordinated burst to force synchronized KOs.',
      es: 'Plan recomendado: control + estabilización + burst coordinado para forzar KOs sincronizados.',
    },
    steles: {
      lead: {
        fr: "Stèle d'intervention Anathar: nécessite une Clef d'intervention d'Anathar.",
        en: 'Anathar intervention stele: requires an Anathar Intervention Key.',
        es: 'Estela de intervención de Anathar: requiere una Llave de intervención de Anathar.',
      },
      notes: [
        {
          fr: "Anathar marque généralement le joueur le plus éloigné, puis réplique jusqu'à 4 actions observées à son tour suivant.",
          en: 'Anathar usually marks the farthest player, then replicates up to 4 observed actions on its next turn.',
          es: 'Anathar suele marcar al jugador más lejano y luego replica hasta 4 acciones observadas en su siguiente turno.',
        },
        {
          fr: "Si moins de 4 actions sont observées, Infierno Demoníaco s'active et devient plus dangereux avec peu d'actions.",
          en: 'If fewer than 4 actions are observed, Demonic Hellfire triggers and becomes stronger with fewer actions.',
          es: 'Si se observan menos de 4 acciones, se activa Infierno Demoníaco y se vuelve más peligroso cuantas menos acciones haya.',
        },
        {
          fr: 'Effet spécifique Égarés: Anathar doit aussi être mis à 1 PdV comme les autres monstres/boss.',
          en: 'Lost Ones specific effect: Anathar must also be reduced to 1 HP like the other mobs/boss.',
          es: 'Efecto específico Idos: Anathar también debe quedar a 1 PdV como el resto de mobs/jefe.',
        },
        {
          fr: 'La table des effets par action (PM/PA, soins, armure, placements, dégâts élémentaires) suit la table de référence Anathar.',
          en: 'The action-to-effect mapping (MP/AP, healing, armor, positioning, elemental damage) follows the Anathar reference table.',
          es: 'El mapeo acción-efecto (PM/PA, curas, armadura, posicionamiento, daños elementales) sigue la tabla de referencia de Anathar.',
        },
      ],
      protoBosses: [],
      crystals: {
        types: [
          {
            fr: "Action du marqué à éviter: retrait PA/PM, dons PA/PM, téléportations et dégâts élémentaires non nécessaires.",
            en: 'Marked-player actions to avoid: AP/MP removal, AP/MP buffs, teleports and unnecessary elemental damage actions.',
            es: 'Acciones del marcado a evitar: retiro/don de PA/PM, teletransportes y acciones de daño elemental no necesarias.',
          },
        ],
        notes: [
          {
            fr: 'Conserver un tour marqué lisible et court pour réduire le risque de réplication punitive.',
            en: 'Keep marked turns simple and short to reduce punitive replication risk.',
            es: 'Mantener turnos del marcado simples y cortos para reducir riesgo de replicación punitiva.',
          },
        ],
        stats: [],
      },
    },
    drops: {
      notes: [
        {
          fr: 'Section maintenue dans la structure, contenu drops à compléter.',
          en: 'Section kept in structure, drops content pending completion.',
          es: 'Sección mantenida en la estructura, contenido de drops pendiente.',
        },
      ],
      monsterDrops: [],
      bossDrops: [],
    },
    croupier: {
      location: {
        fr: 'Section à compléter.',
        en: 'Section to be completed.',
        es: 'Sección por completar.',
      },
      items: [],
    },
  },
  {
    id: 'demhorribles',
    name: { fr: 'Donjon Démhorribles', en: 'Demhorribles Dungeon', es: 'Mazmorra Demorribles' },
    subtitle: {
      fr: 'Boss: Cratéros, Bourreau de la fin',
      en: 'Boss: Crateros, Executioner of the End',
      es: 'Jefe: Cratéros, Verdugo del fin',
    },
    levelRange: { fr: 'Niv. 216', en: 'Lvl. 216', es: 'Niv. 216' },
    summary: [
      {
        fr: 'Donjon pour 6 joueurs, 2 salles, sans clef.',
        en: 'Dungeon for 6 players, 2 rooms, no key required.',
        es: 'Mazmorra para 6 jugadores, 2 salas y sin llave.',
      },
      {
        fr: 'Mécanique centrale: jouer depuis les glyphes posés par les monstres pour éviter la réduction de dégâts.',
        en: 'Core mechanic: attack from monster-created glyphs to avoid heavy damage reduction.',
        es: 'Mecánica central: atacar desde los glifos colocados por los monstruos para evitar la gran reducción de daño.',
      },
      {
        fr: 'Les PV des Démhorribles sont harmonisés par salle (plus bas en salle 1, plus élevés en salle boss).',
        en: 'Demhorribles HP are normalized per room (lower in room 1, higher in boss room).',
        es: 'Los PV de los Démhorribles están normalizados por sala (más bajos en sala 1 y más altos en sala de jefe).',
      },
      {
        fr: 'Certaines informations (stratégie, drops détaillés, croupier) seront complétées ultérieurement.',
        en: 'Some details (strategy, detailed drops, croupier) will be completed later.',
        es: 'Algunos detalles (estrategia, drops detallados, croupier) se completarán más adelante.',
      },
    ],
    monsters: [
      {
        name: { fr: 'Sangsure', en: 'Bloodleech', es: 'Sangsure' },
        level: { fr: 'Niv. 216', en: 'Lvl. 216', es: 'Niv. 216' },
        bonus: {
          fr: 'Faiblesse principale: Air',
          en: 'Main weakness: Air',
          es: 'Debilidad principal: Aire',
        },
        description: {
          fr: 'Monstre parasite orienté vol de vie et liaison Hôte/Parasite.',
          en: 'Parasite-type monster focused on life steal and Host/Parasite link.',
          es: 'Monstruo parásito orientado al robo de vida y vínculo Huésped/Parásito.',
        },
        spells: [
          {
            name: { fr: 'Morsure parasitaire', en: 'Parasitic Bite', es: 'Mordida parasitaria' },
            effect: {
              fr: 'Monocible 1 PO, gros dégâts feu, vole 100% des dommages. Applique Parasite au lanceur et Hôte à la cible.',
              en: 'Single-target 1 range, heavy fire damage, steals 100% damage dealt. Applies Parasite to caster and Host to target.',
              es: 'Monobjetivo 1 alcance, gran daño fuego, roba 100% del daño infligido. Aplica Parásito al lanzador y Huésped al objetivo.',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
          },
        ],
        passive: {
          fr: 'Démhorribles: pose un glyphe anneau (rayon 3, taille 2) quand il subit des dommages. Hors glyphe: -80% dommages reçus. Depuis son glyphe: +20% dommages reçus.',
          en: 'Demhorribles: places a ring glyph (radius 3, size 2) when damaged. Off-glyph: -80% damage taken. From its glyph: +20% damage taken.',
          es: 'Démhorribles: coloca un glifo anillo (radio 3, tamaño 2) al recibir daño. Fuera del glifo: -80% daño recibido. Desde su glifo: +20% daño recibido.',
        },
        notes: [
          {
            fr: 'Parasite relance la Morsure parasitaire sur son Hôte en début de tour avec dommages doublés.',
            en: 'Parasite recasts Parasitic Bite on its Host at turn start with doubled damage.',
            es: 'Parásito relanza Mordida parasitaria sobre su Huésped al inicio de turno con daño duplicado.',
          },
        ],
        stats: [
          { fr: 'Rôle: pression mono-cible', en: 'Role: single-target pressure', es: 'Rol: presión monobjetivo' },
        ],
      },
      {
        name: { fr: 'Condamnateur', en: 'Condemner', es: 'Condenador' },
        level: { fr: 'Niv. 216', en: 'Lvl. 216', es: 'Niv. 216' },
        bonus: {
          fr: 'Faiblesse principale: Terre',
          en: 'Main weakness: Earth',
          es: 'Debilidad principal: Tierra',
        },
        description: {
          fr: 'Monstre de harcèlement à distance avec vol d’armure en zone.',
          en: 'Ranged harassment unit with area armor steal.',
          es: 'Unidad de hostigamiento a distancia con robo de armadura en área.',
        },
        spells: [
          {
            name: { fr: 'Harcèlement', en: 'Harassment', es: 'Acoso' },
            effect: {
              fr: 'Monocible 3-6 PO modifiable, dégâts air, applique +1 niv. Harcèlement (max 3).',
              en: 'Single-target 3-6 modifiable range, air damage, applies +1 Harassment level (max 3).',
              es: 'Monobjetivo 3-6 alcance modificable, daño aire, aplica +1 nivel de Acoso (máx 3).',
            },
            cost: { fr: '3 PA', en: '3 AP', es: '3 PA' },
            limit: { fr: '1/cible, 2/tour', en: '1/target, 2/turn', es: '1/objetivo, 2/turno' },
          },
          {
            name: { fr: 'Auto-défense', en: 'Self Defense', es: 'Autodefensa' },
            effect: {
              fr: 'Zone cercle taille 2 (0 PO), vole 100% armure ennemie, dégâts feu, applique Incurable niv. 5.',
              en: 'Size-2 circle AoE (0 range), steals 100% enemy armor, fire damage, applies Unhealable lvl 5.',
              es: 'Área círculo tamaño 2 (0 alcance), roba 100% armadura enemiga, daño fuego, aplica Incurable niv. 5.',
            },
            cost: { fr: '6 PA', en: '6 AP', es: '6 PA' },
            limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
          },
        ],
        passive: {
          fr: 'Démhorribles: pose un glyphe croix diagonale taille 2 sous lui quand il subit des dommages. Hors glyphe: -80% dommages reçus. Depuis son glyphe: +20% dommages reçus.',
          en: 'Demhorribles: places a diagonal cross glyph size 2 when damaged. Off-glyph: -80% damage taken. From its glyph: +20% damage taken.',
          es: 'Démhorribles: coloca un glifo de cruz diagonal tamaño 2 al recibir daño. Fuera del glifo: -80% daño recibido. Desde su glifo: +20% daño recibido.',
        },
        notes: [
          {
            fr: 'Harcèlement inflige des dégâts air à l’allié le plus proche du porteur au début de son tour.',
            en: 'Harassment deals air damage to the nearest ally of the carrier at turn start.',
            es: 'Acoso inflige daño aire al aliado más cercano del portador al inicio de su turno.',
          },
        ],
        stats: [
          { fr: 'Rôle: anti-armure / poke', en: 'Role: anti-armor / poke', es: 'Rol: antiarmadura / poke' },
        ],
      },
      {
        name: { fr: 'Rapace dépeceur', en: 'Rending Raptor', es: 'Rapaz despellejador' },
        level: { fr: 'Niv. 216', en: 'Lvl. 216', es: 'Niv. 216' },
        bonus: {
          fr: 'Faiblesse principale: Terre',
          en: 'Main weakness: Earth',
          es: 'Debilidad principal: Tierra',
        },
        description: {
          fr: 'Assassin mobile qui empile Saignement pour amplifier Dépeçage.',
          en: 'Mobile assassin that stacks Bleeding to amplify Rending.',
          es: 'Asesino móvil que acumula Sangrado para amplificar Despiece.',
        },
        spells: [
          {
            name: { fr: 'Bond', en: 'Leap', es: 'Salto' },
            effect: {
              fr: 'Monocible 1-4 PO en ligne sans ligne de vue, se téléporte sur la case ciblée et gagne +100 Résistance Élémentaire (1 tour).',
              en: 'Single-target 1-4 in-line without line of sight, teleports to target cell and gains +100 Elemental Resistance (1 turn).',
              es: 'Monobjetivo 1-4 en línea sin línea de visión, se teletransporta a la celda objetivo y gana +100 Resistencia Elemental (1 turno).',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: 'Relance 2 tours', en: '2-turn cooldown', es: 'Recarga 2 turnos' },
          },
          {
            name: { fr: 'Dépeçage', en: 'Rending', es: 'Despiece' },
            effect: {
              fr: 'Monocible 1-4 PO, dégâts eau, applique +1 niv. Saignement (max 10).',
              en: 'Single-target 1-4 range, water damage, applies +1 Bleeding level (max 10).',
              es: 'Monobjetivo 1-4 alcance, daño agua, aplica +1 nivel de Sangrado (máx 10).',
            },
            cost: { fr: '3 PA', en: '3 AP', es: '3 PA' },
            limit: { fr: '1/cible, 3/tour', en: '1/target, 3/turn', es: '1/objetivo, 3/turno' },
          },
        ],
        passive: {
          fr: 'Démhorribles: pose une ligne taille 4 sur ses deux côtés quand il subit des dommages. Hors glyphe: -80% dommages reçus. Depuis son glyphe: +20% dommages reçus.',
          en: 'Demhorribles: places a size-4 line on both sides when damaged. Off-glyph: -80% damage taken. From its glyph: +20% damage taken.',
          es: 'Démhorribles: coloca una línea tamaño 4 en ambos lados al recibir daño. Fuera del glifo: -80% daño recibido. Desde su glifo: +20% daño recibido.',
        },
        notes: [
          {
            fr: 'Saignement augmente les dommages subis par Dépeçage de 50% par niveau (2 tours).',
            en: 'Bleeding increases damage taken from Rending by 50% per stack (2 turns).',
            es: 'Sangrado aumenta el daño recibido de Despiece en 50% por nivel (2 turnos).',
          },
        ],
        stats: [
          { fr: 'Rôle: burst progressif', en: 'Role: scaling burst', es: 'Rol: burst progresivo' },
        ],
      },
      {
        name: { fr: 'Cratéros, Bourreau de la fin (Boss)', en: 'Crateros, Executioner of the End (Boss)', es: 'Cratéros, Verdugo del fin (Jefe)' },
        level: { fr: 'Boss', en: 'Boss', es: 'Jefe' },
        bonus: {
          fr: 'Stabilisé',
          en: 'Stabilized',
          es: 'Estabilizado',
        },
        description: {
          fr: 'Boss de contrôle de placement et anti-armure avec montée en puissance Furieux.',
          en: 'Position-control and anti-armor boss with Furious scaling.',
          es: 'Jefe de control de posicionamiento y antiarmadura con escalado Furioso.',
        },
        spells: [
          {
            name: { fr: 'Coup de collier', en: 'Leash Strike', es: 'Golpe de correa' },
            effect: {
              fr: 'Monocible 1-4 PO, dégâts eau, applique Incurable niv. 4.',
              en: 'Single-target 1-4 range, water damage, applies Unhealable lvl 4.',
              es: 'Monobjetivo 1-4 alcance, daño agua, aplica Incurable niv. 4.',
            },
            cost: { fr: '2 PA', en: '2 AP', es: '2 PA' },
            limit: { fr: '1/cible, 3/tour', en: '1/target, 3/turn', es: '1/objetivo, 3/turno' },
          },
          {
            name: { fr: 'Prison fatale', en: 'Fatal Prison', es: 'Prisión fatal' },
            effect: {
              fr: 'Téléporte un ennemi éloigné (8 PO et +) dans une zone proche du boss.',
              en: 'Teleports a distant enemy (8+ range) into an area near the boss.',
              es: 'Teletransporta un enemigo lejano (8+ alcance) a una zona cercana al jefe.',
            },
            cost: { fr: '2 PA', en: '2 AP', es: '2 PA' },
            limit: { fr: 'Relance 3 tours', en: '3-turn cooldown', es: 'Recarga 3 turnos' },
          },
          {
            name: { fr: 'Enchaînement fatal', en: 'Fatal Chain', es: 'Encadenamiento fatal' },
            effect: {
              fr: 'Zone cercle taille 2 (0 PO), vole 100% armure ennemie et inflige des dégâts terre.',
              en: 'Size-2 circle AoE (0 range), steals 100% enemy armor and deals earth damage.',
              es: 'Área círculo tamaño 2 (0 alcance), roba 100% armadura enemiga e inflige daño tierra.',
            },
            cost: { fr: '5 PA', en: '5 AP', es: '5 PA' },
            limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
          },
        ],
        passive: {
          fr: 'Bourreau de la fin: pose un glyphe cercle taille 2 quand il subit des dommages. Hors glyphe: -80% dommages reçus. Depuis son glyphe: +50% dommages reçus. Gagne Furieux si un démon ne subit pas de dégâts depuis un glyphe pendant un tour joueur ou en cas de tentative de retrait PM.',
          en: 'Executioner of the End: places a size-2 circle glyph when damaged. Off-glyph: -80% damage taken. From its glyph: +50% damage taken. Gains Furious if a demon takes no glyph-based damage during a player turn or when MP removal is attempted.',
          es: 'Verdugo del fin: coloca un glifo círculo tamaño 2 al recibir daño. Fuera del glifo: -80% daño recibido. Desde su glifo: +50% daño recibido. Gana Furioso si un demonio no recibe daño desde glifo durante un turno jugador o al intentar quitar PM.',
        },
        notes: [],
        stats: [
          { fr: 'Rôle: contrôle + punition', en: 'Role: control + punishment', es: 'Rol: control + castigo' },
        ],
      },
    ],
    boss: {
      name: { fr: 'Cratéros, Bourreau de la fin', en: 'Crateros, Executioner of the End', es: 'Cratéros, Verdugo del fin' },
      level: { fr: 'Niv. 216+', en: 'Lvl. 216+', es: 'Niv. 216+' },
      description: {
        fr: 'Boss stabilisé qui force le jeu sur glyphes et punit les erreurs de placement.',
        en: 'Stabilized boss that forces glyph play and punishes positioning mistakes.',
        es: 'Jefe estabilizado que obliga a jugar sobre glifos y castiga errores de posicionamiento.',
      },
      spells: [
        {
          name: { fr: 'Prison fatale', en: 'Fatal Prison', es: 'Prisión fatal' },
          effect: {
            fr: 'Ramène une cible distante dans sa zone de danger.',
            en: 'Pulls a distant target into its danger zone.',
            es: 'Trae un objetivo lejano a su zona de peligro.',
          },
          cost: { fr: '2 PA', en: '2 AP', es: '2 PA' },
        },
      ],
      passives: [
        {
          name: { fr: 'Furieux', en: 'Furious', es: 'Furioso' },
          effect: {
            fr: 'Durée infinie, max 50 niveaux. +5% dommages infligés par niveau et +1 PM tous les 4 niveaux.',
            en: 'Infinite duration, max 50 levels. +5% damage dealt per level and +1 MP every 4 levels.',
            es: 'Duración infinita, máximo 50 niveles. +5% daño infligido por nivel y +1 PM cada 4 niveles.',
          },
          notes: [],
        },
      ],
      stats: [
        { fr: 'Rôle: boss de tempo', en: 'Role: tempo boss', es: 'Rol: jefe de tempo' },
      ],
    },
    mechanics: [
      {
        title: { fr: 'Lien de vie et glyphes', en: 'Life Link and glyphs', es: 'Vínculo de vida y glifos' },
        paragraphs: [
          {
            fr: 'Tous les Démhorribles partagent un état Lien de vie: les dommages répercutés prennent en compte les glyphes des Démhorribles.',
            en: 'All Demhorribles share a Life Link state: reflected damage interactions still account for Demhorribles glyph rules.',
            es: 'Todos los Démhorribles comparten un estado Vínculo de vida: las repercusiones de daño también respetan las reglas de glifos.',
          },
          {
            fr: 'Règle clé: hors glyphe du monstre ciblé, vos dégâts sont fortement réduits.',
            en: 'Key rule: outside the targeted monster glyph, your damage is heavily reduced.',
            es: 'Regla clave: fuera del glifo del monstruo objetivo, tu daño se reduce fuertemente.',
          },
        ],
      },
      {
        title: { fr: 'Composition des salles', en: 'Room composition', es: 'Composición de salas' },
        paragraphs: [
          {
            fr: 'Salle 1: 2x Sangsure, 2x Condamnateur, 2x Rapace dépeceur.',
            en: 'Room 1: 2x Bloodleech, 2x Condemner, 2x Rending Raptor.',
            es: 'Sala 1: 2x Sangsure, 2x Condenador, 2x Rapaz despellejador.',
          },
          {
            fr: 'Salle boss: 1x Cratéros + 1x Sangsure + 1x Condamnateur + 1x Rapace dépeceur.',
            en: 'Boss room: 1x Crateros + 1x Bloodleech + 1x Condemner + 1x Rending Raptor.',
            es: 'Sala de jefe: 1x Cratéros + 1x Sangsure + 1x Condenador + 1x Rapaz despellejador.',
          },
        ],
      },
      {
        title: { fr: 'Exploits', en: 'Achievements', es: 'Logros' },
        paragraphs: [
          {
            fr: 'Donjon Démhorribles I: terminer le donjon (5 Jetons Infernaux).',
            en: 'Demhorribles Dungeon I: clear the dungeon (5 Infernal Tokens).',
            es: 'Mazmorra Démhorribles I: completar la mazmorra (5 Fichas Infernales).',
          },
          {
            fr: 'Donjon Démhorribles II: vaincre le boss en premier (5 Jetons Infernaux).',
            en: 'Demhorribles Dungeon II: defeat boss first (5 Infernal Tokens).',
            es: 'Mazmorra Démhorribles II: vencer al jefe primero (5 Fichas Infernales).',
          },
          {
            fr: 'Donjon Démhorribles III: vaincre le boss en dernier (5 Jetons Infernaux).',
            en: 'Demhorribles Dungeon III: defeat boss last (5 Infernal Tokens).',
            es: 'Mazmorra Démhorribles III: vencer al jefe al final (5 Fichas Infernales).',
          },
          {
            fr: 'Donjon Démhorribles Final: terminer I, II et III (Miniature de Cratéros + 5 Jetons Infernaux).',
            en: 'Demhorribles Dungeon Final: complete I, II and III (Crateros Miniature + 5 Infernal Tokens).',
            es: 'Mazmorra Démhorribles Final: completar I, II y III (Miniatura de Cratéros + 5 Fichas Infernales).',
          },
        ],
      },
    ],
    plan: {
      fr: 'Stratégie détaillée: à venir.',
      en: 'Detailed strategy: coming soon.',
      es: 'Estrategia detallada: próximamente.',
    },
    steles: {
      lead: {
        fr: "Stèle d'intervention Anathar: nécessite une Clef d'intervention d'Anathar.",
        en: 'Anathar intervention stele: requires an Anathar Intervention Key.',
        es: 'Estela de intervención de Anathar: requiere una Llave de intervención de Anathar.',
      },
      notes: [
        {
          fr: "Anathar observe les actions du joueur marqué et en réplique jusqu'à 4 à son tour suivant.",
          en: 'Anathar observes actions of the marked player and replicates up to 4 on its next turn.',
          es: 'Anathar observa las acciones del jugador marcado y replica hasta 4 en su siguiente turno.',
        },
        {
          fr: "Avec moins de 4 actions observées, Infierno Demoníaco peut déclencher dégâts globaux, bonus ennemis, voire soin massif selon le nombre d'actions.",
          en: 'With fewer than 4 observed actions, Demonic Hellfire can trigger global damage, enemy buffs, and even large healing depending on action count.',
          es: 'Con menos de 4 acciones observadas, Infierno Demoníaco puede activar daño global, buffs enemigos e incluso curación masiva según el número de acciones.',
        },
        {
          fr: "Effet spécifique Démhorribles: Anathar gagne Lien de vie et ses PdV s'ajoutent au total du groupe; sa zone de vulnérabilité est CaC (1 case) + ligne à 3 cases.",
          en: 'Demhorribles specific effect: Anathar gains Life Link and its HP is added to the shared pool; vulnerability zone is melee (1 cell) + 3-cell line range.',
          es: 'Efecto específico Demorribles: Anathar gana Enlace de Vida y sus PdV se suman al total; su zona de recibir daño es CaC (1 casilla) + línea de 3 casillas.',
        },
        {
          fr: 'La table des effets par action (PM/PA, soins, armure, placements, dégâts élémentaires) suit la table de référence Anathar.',
          en: 'The action-to-effect mapping (MP/AP, healing, armor, positioning, elemental damage) follows the Anathar reference table.',
          es: 'El mapeo acción-efecto (PM/PA, curas, armadura, posicionamiento, daños elementales) sigue la tabla de referencia de Anathar.',
        },
      ],
      protoBosses: [],
      crystals: {
        types: [
          {
            fr: "Priorité: contrôler le tour du marqué et éviter de générer des actions différentes inutiles.",
            en: 'Priority: control the marked player turn and avoid unnecessary different action types.',
            es: 'Prioridad: controlar el turno del marcado y evitar generar acciones diferentes innecesarias.',
          },
        ],
        notes: [
          {
            fr: 'Le terme « combattants » inclut joueurs, monstres et boss.',
            en: 'The term “combatants” includes players, monsters and boss units.',
            es: 'El término “combatientes” incluye jugadores, mobs y jefe.',
          },
        ],
        stats: [],
      },
    },
    drops: {
      notes: [
        {
          fr: 'Drops du donjon et du boss: liens directs à ajouter.',
          en: 'Dungeon and boss drops: direct links to add.',
          es: 'Drops de mazmorra y jefe: enlaces directos por añadir.',
        },
      ],
      monsterDrops: [],
      bossDrops: [],
    },
    croupier: {
      location: {
        fr: 'Section à compléter.',
        en: 'Section to be completed.',
        es: 'Sección por completar.',
      },
      items: [],
    },
  },
  {
    id: 'vaciantes',
    name: { fr: 'Donjon Vidéants', en: 'Videants Dungeon', es: 'Mazmorra de los Vaciantes' },
    subtitle: {
      fr: 'Boss: Ar’Nan, Augure du néant',
      en: 'Boss: Ar’Nan, Augur of the Void',
      es: 'Jefe: Ar’Nan, Augur del Vacío',
    },
    levelRange: { fr: 'Niv. 216', en: 'Lvl. 216', es: 'Niv. 216' },
    summary: [
      {
        fr: 'Donjon pour 6 joueurs, 2 salles, sans clef.',
        en: 'Dungeon for 6 players, 2 rooms, no key required.',
        es: 'Mazmorra para 6 jugadores, 2 salas y sin llave.',
      },
      {
        fr: 'Mécanique centrale: provoquer l’état Inactif avec la bonne condition pour chaque monstre.',
        en: 'Core mechanic: trigger the Inactive state through each monster specific condition.',
        es: 'Mecánica central: provocar el estado Inactivo cumpliendo la condición específica de cada monstruo.',
      },
      {
        fr: 'Le Néant alterne ses zones et punit les entrées dans l’aura (dégâts stasis élevés une fois par tour).',
        en: 'The Void alternates zones and punishes aura entries (heavy stasis damage once per turn).',
        es: 'El Vacío alterna zonas y castiga la entrada en el aura (daño estasis alto una vez por turno).',
      },
      {
        fr: 'Certaines informations (stratégie détaillée, drops précis, croupier) seront complétées ultérieurement.',
        en: 'Some details (detailed strategy, exact drops, croupier) will be completed later.',
        es: 'Algunos detalles (estrategia detallada, drops exactos, crupier) se completarán más adelante.',
      },
    ],
    monsters: [
      {
        name: { fr: 'Echinoidéant', en: 'Echinoideant', es: 'Equinoideante' },
        level: { fr: 'Niv. 216', en: 'Lvl. 216', es: 'Niv. 216' },
        bonus: {
          fr: 'Faiblesse principale: Air',
          en: 'Main weakness: Air',
          es: 'Debilidad principal: Aire',
        },
        description: {
          fr: 'Frontline de zone qui attire en mêlée et stabilise les cibles collées.',
          en: 'AoE frontline unit that pulls into melee and stabilizes contacted enemies.',
          es: 'Unidad de primera línea en área que atrae a melee y estabiliza objetivos en contacto.',
        },
        spells: [
          {
            name: { fr: 'Attaque', en: 'Attack', es: 'Ataque' },
            effect: {
              fr: 'Zone croix taille 1 (0 PO), lourds dégâts feu. Lancé automatiquement en début de tour.',
              en: 'Size-1 cross AoE (0 range), heavy fire damage. Cast automatically at turn start.',
              es: 'Área cruz tamaño 1 (0 alcance), gran daño fuego. Se lanza automáticamente al inicio del turno.',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
          },
          {
            name: { fr: 'Attirance', en: 'Attraction', es: 'Atracción' },
            effect: {
              fr: 'Zone croix taille 10 (0 PO), dégâts air et attire au contact. Les ennemis arrivés au contact deviennent Stabilisés (1 tour).',
              en: 'Size-10 cross AoE (0 range), air damage and pulls to melee. Enemies pulled into contact become Stabilized (1 turn).',
              es: 'Área cruz tamaño 10 (0 alcance), daño aire y atrae al contacto. Enemigos que llegan al contacto quedan Estabilizados (1 turno).',
            },
            cost: { fr: '5 PA', en: '5 AP', es: '5 PA' },
            limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
          },
        ],
        passive: {
          fr: 'Echinoidéant: devient Inactif (1 tour) s’il subit des dommages au contact (1 fois par tour de l’attaquant).',
          en: 'Echinoideant: becomes Inactive (1 turn) if it takes melee damage (once per attacker turn).',
          es: 'Equinoideante: se vuelve Inactivo (1 turno) si recibe daño en contacto (1 vez por turno del atacante).',
        },
        notes: [
          {
            fr: 'État Inactif: passe son tour et gagne 400 Résistance Élémentaire.',
            en: 'Inactive state: skips turn and gains 400 Elemental Resistance.',
            es: 'Estado Inactivo: pasa turno y gana 400 Resistencia Elemental.',
          },
        ],
        stats: [
          { fr: 'Rôle: traction / contrôle melee', en: 'Role: pull / melee control', es: 'Rol: tracción / control melee' },
        ],
      },
      {
        name: { fr: 'Inanite', en: 'Inanite', es: 'Inanite' },
        level: { fr: 'Niv. 216', en: 'Lvl. 216', es: 'Niv. 216' },
        bonus: {
          fr: 'Faiblesse principale: Terre',
          en: 'Main weakness: Earth',
          es: 'Debilidad principal: Tierra',
        },
        description: {
          fr: 'DPS mobile orienté dos et retrait de PW en zone d’arrivée.',
          en: 'Mobile DPS focused on back damage and PW removal in arrival area.',
          es: 'DPS móvil enfocado en daño por espalda y retiro de PW en zona de llegada.',
        },
        spells: [
          {
            name: { fr: 'Attaque', en: 'Attack', es: 'Ataque' },
            effect: {
              fr: 'Monocible 1-3 PO, dégâts terre.',
              en: 'Single-target 1-3 range, earth damage.',
              es: 'Monobjetivo 1-3 alcance, daño tierra.',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/cible, 2/tour', en: '1/target, 2/turn', es: '1/objetivo, 2/turno' },
          },
          {
            name: { fr: 'Saut', en: 'Jump', es: 'Salto' },
            effect: {
              fr: 'Téléportation 2-4 PO (sans ligne de vue), retire 1 PW aux ennemis dans la zone d’arrivée (croix taille 1).',
              en: '2-4 range teleport (no line of sight), removes 1 WP from enemies in the arrival zone (size-1 cross).',
              es: 'Teletransporte 2-4 alcance (sin línea de visión), retira 1 PW a enemigos en la zona de llegada (cruz tamaño 1).',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
          },
        ],
        passive: {
          fr: 'Inanite: +25% dommages infligés de dos. Devient Inactif (1 tour) s’il subit des dommages de dos.',
          en: 'Inanite: +25% back damage dealt. Becomes Inactive (1 turn) if it takes back damage.',
          es: 'Inanite: +25% daños infligidos por espalda. Se vuelve Inactivo (1 turno) si recibe daño por la espalda.',
        },
        notes: [
          {
            fr: 'État Inactif: passe son tour et gagne 400 Résistance Élémentaire.',
            en: 'Inactive state: skips turn and gains 400 Elemental Resistance.',
            es: 'Estado Inactivo: pasa turno y gana 400 Resistencia Elemental.',
          },
        ],
        stats: [
          { fr: 'Rôle: assassin de dos', en: 'Role: backline assassin', es: 'Rol: asesino de espalda' },
        ],
      },
      {
        name: { fr: 'Chrysavide', en: 'Chrysavide', es: 'Crisávida' },
        level: { fr: 'Niv. 216', en: 'Lvl. 216', es: 'Niv. 216' },
        bonus: {
          fr: 'Faiblesse principale: Terre/Air',
          en: 'Main weakness: Earth/Air',
          es: 'Debilidad principal: Tierra/Aire',
        },
        description: {
          fr: 'Distance et contrôle via pièges PM.',
          en: 'Ranged pressure and control through MP trap fields.',
          es: 'Presión a distancia y control mediante trampas de PM.',
        },
        spells: [
          {
            name: { fr: 'Attaque', en: 'Attack', es: 'Ataque' },
            effect: {
              fr: 'Monocible 3-10 PO modifiable, dégâts eau.',
              en: 'Single-target 3-10 modifiable range, water damage.',
              es: 'Monobjetivo 3-10 alcance modificable, daño agua.',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/cible, 2/tour', en: '1/target, 2/turn', es: '1/objetivo, 2/turno' },
          },
          {
            name: { fr: 'Piège', en: 'Trap', es: 'Trampa' },
            effect: {
              fr: 'Zone croix taille 5 (3-8 PO), pose un piège sur chaque case. Sur joueurs: dégâts terre + -4 PM.',
              en: 'Size-5 cross AoE (3-8 range), places a trap on each cell. On players: earth damage + -4 MP.',
              es: 'Área cruz tamaño 5 (3-8 alcance), coloca una trampa en cada casilla. En jugadores: daño tierra + -4 PM.',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
          },
        ],
        passive: {
          fr: 'Chrysavide: devient Inactif (1 tour) s’il subit un déplacement.',
          en: 'Chrysavide: becomes Inactive (1 turn) if displaced.',
          es: 'Crisávida: se vuelve Inactivo (1 turno) si sufre un desplazamiento.',
        },
        notes: [
          {
            fr: 'État Inactif: passe son tour et gagne 400 Résistance Élémentaire.',
            en: 'Inactive state: skips turn and gains 400 Elemental Resistance.',
            es: 'Estado Inactivo: pasa turno y gana 400 Resistencia Elemental.',
          },
        ],
        stats: [
          { fr: 'Rôle: pièges / contrôle PM', en: 'Role: traps / MP control', es: 'Rol: trampas / control de PM' },
        ],
      },
      {
        name: { fr: 'Ar’Nan, Augure du néant (Boss)', en: 'Ar’Nan, Augur of the Void (Boss)', es: 'Ar’Nan, Augur del Vacío (Jefe)' },
        level: { fr: 'Boss', en: 'Boss', es: 'Jefe' },
        bonus: {
          fr: 'Aura Néant alternante',
          en: 'Alternating Void aura',
          es: 'Aura Vacío alternante',
        },
        description: {
          fr: 'Boss de contrôle de zone et d’inactivité conditionnelle.',
          en: 'Zone-control boss with conditional inactivity mechanics.',
          es: 'Jefe de control de zona con mecánica de inactividad condicional.',
        },
        spells: [
          {
            name: { fr: 'Attaque', en: 'Attack', es: 'Ataque' },
            effect: {
              fr: 'Monocible, toute la carte sans ligne de vue. Dégâts terre et -50 Résistance Élémentaire (cumulable, 4 tours).',
              en: 'Single-target, map-wide without line of sight. Earth damage and -50 Elemental Resistance (stacking, 4 turns).',
              es: 'Monobjetivo, todo el mapa sin línea de visión. Daño tierra y -50 Resistencia Elemental (acumulable, 4 turnos).',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
          },
          {
            name: { fr: 'Poussé', en: 'Push', es: 'Empuje' },
            effect: {
              fr: 'Zone croix taille 1 (0 PO), dégâts air, pousse de 7 cases et retire 66 Résistance Élémentaire (4 tours).',
              en: 'Size-1 cross AoE (0 range), air damage, pushes 7 cells and removes 66 Elemental Resistance (4 turns).',
              es: 'Área cruz tamaño 1 (0 alcance), daño aire, empuja 7 casillas y retira 66 Resistencia Elemental (4 turnos).',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
          },
          {
            name: { fr: 'Attirance', en: 'Attraction', es: 'Atracción' },
            effect: {
              fr: 'Zone croix taille 10 (0 PO), dégâts air, attire de 4 cases et retire 75 Résistance Élémentaire (4 tours).',
              en: 'Size-10 cross AoE (0 range), air damage, pulls 4 cells and removes 75 Elemental Resistance (4 turns).',
              es: 'Área cruz tamaño 10 (0 alcance), daño aire, atrae 4 casillas y retira 75 Resistencia Elemental (4 turnos).',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
          },
        ],
        passive: {
          fr: 'Augure du néant: le type d’aura Néant change quand un monstre/joueur meurt ou passe Inactif. En fin de tour, gagne +1 PM cumulable (max 10) réinitialisé quand Ar’Nan devient Inactif.',
          en: 'Augur of the Void: Void aura type changes when a monster/player dies or becomes Inactive. End of turn gains +1 stackable MP (max 10), reset when Ar’Nan becomes Inactive.',
          es: 'Augur del Vacío: el tipo de aura Vacío cambia cuando un monstruo/jugador muere o queda Inactivo. Fin de turno gana +1 PM acumulable (máx 10), se reinicia cuando Ar’Nan queda Inactivo.',
        },
        notes: [
          {
            fr: 'Inactivité (passif): devient Inactif s’il ne subit pas de dommages pendant un tour ou s’il subit des dommages dans son aura. Inactif: passe son tour, -200 Résistance Élémentaire (2 tours), puis +40% dommages infligés (1 tour) en redevenant actif.',
            en: 'Inactivity (passive): becomes Inactive if it takes no damage during a turn or if hit by a player inside its aura. Inactive: skips turn, -200 Elemental Resistance (2 turns), then +40% damage dealt (1 turn) when active again.',
            es: 'Inactividad (pasivo): queda Inactivo si no recibe daño durante un turno o si recibe daño de un jugador dentro del aura. Inactivo: pasa turno, -200 Resistencia Elemental (2 turnos), luego +40% daños infligidos (1 turno) al reactivarse.',
          },
        ],
        stats: [
          { fr: 'Rôle: boss de zoning', en: 'Role: zoning boss', es: 'Rol: jefe de zonificación' },
        ],
      },
    ],
    boss: {
      name: { fr: 'Ar’Nan, Augure du néant', en: 'Ar’Nan, Augur of the Void', es: 'Ar’Nan, Augur del Vacío' },
      level: { fr: 'Niv. 216+', en: 'Lvl. 216+', es: 'Niv. 216+' },
      description: {
        fr: 'Boss à aura variable (cercle/anneau) qui punit fortement les entrées dans le Néant.',
        en: 'Variable-aura boss (circle/ring) that heavily punishes entries into the Void area.',
        es: 'Jefe de aura variable (círculo/anillo) que castiga fuertemente la entrada en el Vacío.',
      },
      spells: [
        {
          name: { fr: 'Néant', en: 'Void', es: 'Vacío' },
          effect: {
            fr: 'Aura alternante: cercle taille 3 puis anneau rayon 6 infini. Une fois par tour, entrée dans l’aura = lourds dégâts stasis.',
            en: 'Alternating aura: size-3 circle then infinite size ring radius 6. Once per turn, entering aura = heavy stasis damage.',
            es: 'Aura alternante: círculo tamaño 3 y luego anillo de radio 6 infinito. Una vez por turno, entrar al aura = daño estasis alto.',
          },
          cost: { fr: 'Passif', en: 'Passive', es: 'Pasivo' },
        },
      ],
      passives: [
        {
          name: { fr: 'Inactivité', en: 'Inactivity', es: 'Inactividad' },
          effect: {
            fr: 'Déclenche Inactif selon conditions de dégâts; Inactif applique -200 Résistance Élémentaire puis buff dégâts au réveil.',
            en: 'Triggers Inactive based on damage conditions; Inactive applies -200 Elemental Resistance then damage buff on wake-up.',
            es: 'Activa Inactivo según condiciones de daño; Inactivo aplica -200 Resistencia Elemental y luego buff de daño al reactivarse.',
          },
          notes: [],
        },
      ],
      stats: [
        { fr: 'Rôle: tempo / contrôle de zone', en: 'Role: tempo / zone control', es: 'Rol: tempo / control de zona' },
      ],
    },
    mechanics: [
      {
        title: { fr: 'Inactif sur les Vidéants', en: 'Inactive state on Videants', es: 'Estado Inactivo en Vaciantes' },
        paragraphs: [
          {
            fr: 'Chaque monstre a sa condition propre pour passer Inactif: contact (Echinoidéant), dos (Inanite), déplacement subi (Chrysavide).',
            en: 'Each monster has a specific condition to become Inactive: melee hit (Echinoideant), back hit (Inanite), displacement taken (Chrysavide).',
            es: 'Cada monstruo tiene su condición para quedar Inactivo: daño en contacto (Equinoideante), daño por espalda (Inanite), desplazamiento recibido (Crisávida).',
          },
          {
            fr: 'État Inactif: passe le tour et gagne 400 Résistance Élémentaire.',
            en: 'Inactive state: skips turn and gains 400 Elemental Resistance.',
            es: 'Estado Inactivo: pasa turno y gana 400 Resistencia Elemental.',
          },
        ],
      },
      {
        title: { fr: 'Néant et Cristal du Néant', en: 'Void and Void Crystal', es: 'Vacío y Cristal del Vacío' },
        paragraphs: [
          {
            fr: 'Salle 1: un Cristal du Néant apparaît avec une aura similaire au boss.',
            en: 'Room 1: a Void Crystal appears with an aura similar to the boss.',
            es: 'Sala 1: aparece un Cristal del Vacío con un aura similar a la del jefe.',
          },
          {
            fr: 'L’aura alterne entre cercle taille 3 et anneau rayon 6 infini, et punit les entrées une fois par tour.',
            en: 'The aura alternates between size-3 circle and infinite ring radius 6, punishing entries once per turn.',
            es: 'El aura alterna entre círculo tamaño 3 y anillo radio 6 infinito, castigando entradas una vez por turno.',
          },
        ],
      },
      {
        title: { fr: 'Composition et exploits', en: 'Composition and achievements', es: 'Composición y logros' },
        paragraphs: [
          {
            fr: 'Salle 1: 3x Vidéant, 3x Vidéant, 2x Vidéant. Salle boss: 1x Ar’Nan + 3x Vidéant + 2x Vidéant + 2x Vidéant.',
            en: 'Room 1: 3x Videant, 3x Videant, 2x Videant. Boss room: 1x Ar’Nan + 3x Videant + 2x Videant + 2x Videant.',
            es: 'Sala 1: 3x Vaciante, 3x Vaciante, 2x Vaciante. Sala boss: 1x Ar’Nan + 3x Vaciante + 2x Vaciante + 2x Vaciante.',
          },
          {
            fr: 'Exploits: I (terminer), II (boss en premier), III (boss en dernier), Final (I+II+III) avec Miniature d’Ar’Nan + 5 Jetons Infernaux.',
            en: 'Achievements: I (clear), II (boss first), III (boss last), Final (I+II+III) with Ar’Nan Miniature + 5 Infernal Tokens.',
            es: 'Logros: I (terminar), II (boss primero), III (boss último), Final (I+II+III) con Miniatura de Ar’Nan + 5 Fichas Infernales.',
          },
        ],
      },
    ],
    plan: {
      fr: 'Stratégie détaillée: à venir.',
      en: 'Detailed strategy: coming soon.',
      es: 'Estrategia detallada: próximamente.',
    },
    steles: {
      lead: {
        fr: "Stèle d'intervention Anathar: nécessite une Clef d'intervention d'Anathar.",
        en: 'Anathar intervention stele: requires an Anathar Intervention Key.',
        es: 'Estela de intervención de Anathar: requiere una Llave de intervención de Anathar.',
      },
      notes: [
        {
          fr: "Anathar marque un joueur, observe ses actions puis en réplique jusqu'à 4 au tour suivant.",
          en: 'Anathar marks a player, observes actions, then replicates up to 4 on the next turn.',
          es: 'Anathar marca a un jugador, observa sus acciones y replica hasta 4 en el turno siguiente.',
        },
        {
          fr: "Si moins de 4 actions sont observées, Infierno Demoníaco s'active et devient plus dangereux.",
          en: 'If fewer than 4 actions are observed, Demonic Hellfire triggers and becomes more dangerous.',
          es: 'Si observa menos de 4 acciones, se activa Infierno Demoníaco y se vuelve más peligroso.',
        },
        {
          fr: 'Effet spécifique Vidéants: Anathar obtient une Aura de Néant similaire au boss (alternance croix de 3 cases / 10 cases et +).',
          en: 'Videants specific effect: Anathar gains a Void Aura similar to boss behavior (alternating 3-cell cross / 10+ cells).',
          es: 'Efecto específico Vaciantes: Anathar obtiene un Aura de Vacío similar al jefe (alterna cruz de 3 casillas / 10 casillas en adelante).',
        },
      ],
      protoBosses: [],
      crystals: {
        types: [
          {
            fr: 'La table de référence Anathar (actions observées → effets répliqués) s’applique aussi ici.',
            en: 'The Anathar reference table (observed actions → replicated effects) also applies here.',
            es: 'La tabla de referencia de Anathar (acciones observadas → efectos replicados) también aplica aquí.',
          },
        ],
        notes: [
          {
            fr: 'Réduire les actions différentes du joueur marqué limite les répliques dangereuses.',
            en: 'Reducing different actions on marked turns limits dangerous replications.',
            es: 'Reducir acciones diferentes en el turno marcado limita replicaciones peligrosas.',
          },
        ],
        stats: [],
      },
    },
    drops: {
      notes: [
        {
          fr: 'Drops du donjon et du boss: liens directs à ajouter.',
          en: 'Dungeon and boss drops: direct links to add.',
          es: 'Drops de mazmorra y jefe: enlaces directos por añadir.',
        },
      ],
      monsterDrops: [],
      bossDrops: [],
    },
    croupier: {
      location: {
        fr: 'Section à compléter.',
        en: 'Section to be completed.',
        es: 'Sección por completar.',
      },
      items: [],
    },
  },
  {
    id: 'phytomorphes',
    name: { fr: 'Donjon Phytomorphes', en: 'Phytomorphes Dungeon', es: 'Mazmorra de los Fitoformes' },
    subtitle: {
      fr: 'Boss: Vaal’Enthia, Reine-démone',
      en: 'Boss: Vaal’Enthia, Demon Queen',
      es: 'Jefa: Vaal’Enthia, Reina-demonio',
    },
    levelRange: { fr: 'Niv. 216', en: 'Lvl. 216', es: 'Niv. 216' },
    summary: [
      {
        fr: 'Donjon pour 6 joueurs, 2 salles, sans clef.',
        en: 'Dungeon for 6 players, 2 rooms, no key required.',
        es: 'Mazmorra para 6 jugadores, 2 salas y sin llave.',
      },
      {
        fr: 'Mécanique centrale: gérer et transférer correctement les états Corruption.',
        en: 'Core mechanic: correctly manage and transfer Corruption states.',
        es: 'Mecánica central: gestionar y transferir correctamente los estados Corrupción.',
      },
      {
        fr: 'Les porteurs Incorruptibles ne peuvent être endommagés que par des coups augmentés par la bonne Corruption.',
        en: 'Incorruptible targets can only be damaged by attacks boosted by the proper Corruption.',
        es: 'Los portadores de Incorruptible solo reciben daño de golpes potenciados por la Corrupción adecuada.',
      },
      {
        fr: 'Certaines informations (stratégie détaillée, drops et croupier) seront complétées ultérieurement.',
        en: 'Some details (detailed strategy, drops and croupier) will be completed later.',
        es: 'Algunos detalles (estrategia detallada, drops y crupier) se completarán más adelante.',
      },
    ],
    monsters: [
      {
        name: { fr: 'Virescent', en: 'Virescent', es: 'Virescente' },
        level: { fr: 'Niv. 216', en: 'Lvl. 216', es: 'Niv. 216' },
        bonus: {
          fr: 'Faiblesse principale: Eau',
          en: 'Main weakness: Water',
          es: 'Debilidad principal: Agua',
        },
        description: {
          fr: 'DPS de dos avec transposition et pression en mêlée.',
          en: 'Back-damage dealer with swap tools and melee pressure.',
          es: 'DPS de espalda con transposición y presión melee.',
        },
        spells: [
          {
            name: { fr: 'Virescent Tinelle', en: 'Virescent Tinelle', es: 'Virescent Tinelle' },
            effect: {
              fr: 'Monocible 2-4 PO en ligne sans ligne de vue, dégâts air et échange de position avec la cible.',
              en: 'Single-target 2-4 in-line without line of sight, air damage and swaps position with target.',
              es: 'Monobjetivo 2-4 en línea sin línea de visión, daño aire e intercambio de posición con el objetivo.',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
          },
          {
            name: { fr: 'Inassou Virescent', en: 'Inassou Virescent', es: 'Inassou Virescent' },
            effect: {
              fr: 'Monocible 1-2 PO en ligne sans ligne de vue, dégâts eau très élevés sur une cible de dos.',
              en: 'Single-target 1-2 in-line without line of sight, water damage, very high when hitting from back.',
              es: 'Monobjetivo 1-2 en línea sin línea de visión, daño agua muy alto sobre objetivo de espalda.',
            },
            cost: { fr: '3 PA', en: '3 AP', es: '3 PA' },
            limit: { fr: '1/cible, 2/tour', en: '1/target, 2/turn', es: '1/objetivo, 2/turno' },
          },
        ],
        passive: {
          fr: 'Corruption – Virescent: +40% dommages de dos, -500 Esquive. Sous 50% PV ou KO, transfert de l’état à l’attaquant. Si volé: +250 résistances (2 tours).',
          en: 'Corruption – Virescent: +40% back damage, -500 Dodge. Under 50% HP or KO, transfers state to attacker. If stolen: +250 resistances (2 turns).',
          es: 'Corrupción – Virescente: +40% daños por espalda, -500 Esquiva. Bajo 50% PV o KO, transfiere el estado al atacante. Si se roba: +250 resistencias (2 turnos).',
        },
        notes: [],
        stats: [
          { fr: 'Rôle: exécution de dos', en: 'Role: back execution', es: 'Rol: ejecución de espalda' },
        ],
      },
      {
        name: { fr: 'Champidiable', en: 'Champidiable', es: 'Champidiable' },
        level: { fr: 'Niv. 216', en: 'Lvl. 216', es: 'Niv. 216' },
        bonus: {
          fr: 'Faiblesse principale: Terre',
          en: 'Main weakness: Earth',
          es: 'Debilidad principal: Tierra',
        },
        description: {
          fr: 'Sniper distance avec poussée extrême.',
          en: 'Long-range sniper with extreme push control.',
          es: 'Sniper a distancia con empuje extremo.',
        },
        spells: [
          {
            name: { fr: 'Bolet Titia', en: 'Bolet Titia', es: 'Bolet Titia' },
            effect: {
              fr: 'Monocible 1 PO, dégâts air et pousse de 10 cases.',
              en: 'Single-target 1 range, air damage and pushes 10 cells.',
              es: 'Monobjetivo 1 alcance, daño aire y empuja 10 casillas.',
            },
            cost: { fr: '5 PA', en: '5 AP', es: '5 PA' },
            limit: { fr: '1/cible, 2/tour', en: '1/target, 2/turn', es: '1/objetivo, 2/turno' },
          },
          {
            name: { fr: 'Fongus Tave', en: 'Fongus Tave', es: 'Fongus Tave' },
            effect: {
              fr: 'Monocible 3-7 PO modifiable, lourds dégâts air.',
              en: 'Single-target 3-7 modifiable range, heavy air damage.',
              es: 'Monobjetivo 3-7 alcance modificable, daño aire alto.',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/cible, 3/tour', en: '1/target, 3/turn', es: '1/objetivo, 3/turno' },
          },
        ],
        passive: {
          fr: 'Corruption – Champidiable: +40% dommages à distance, -3 PM max. Sous 50% PV ou KO, transfert de l’état à l’attaquant. Si volé: +250 résistances (2 tours).',
          en: 'Corruption – Champidiable: +40% ranged damage, -3 max MP. Under 50% HP or KO, transfers state to attacker. If stolen: +250 resistances (2 turns).',
          es: 'Corrupción – Champidiable: +40% daños a distancia, -3 PM máximos. Bajo 50% PV o KO, transfiere el estado al atacante. Si se roba: +250 resistencias (2 turnos).',
        },
        notes: [],
        stats: [
          { fr: 'Rôle: burst distance', en: 'Role: ranged burst', es: 'Rol: burst a distancia' },
        ],
      },
      {
        name: { fr: 'Méristhaine', en: 'Meristhaine', es: 'Méristhaine' },
        level: { fr: 'Niv. 216', en: 'Lvl. 216', es: 'Niv. 216' },
        bonus: {
          fr: 'Faiblesse principale: Eau',
          en: 'Main weakness: Water',
          es: 'Debilidad principal: Agua',
        },
        description: {
          fr: 'Contrôle PM en mêlée et mi-distance.',
          en: 'MP control unit in melee and mid-range.',
          es: 'Unidad de control de PM en melee y media distancia.',
        },
        spells: [
          {
            name: { fr: 'Regard méchant', en: 'Mean Stare', es: 'Mirada malvada' },
            effect: {
              fr: 'Monocible 1-8 PO modifiable en ligne, dégâts air et vole 4 PM.',
              en: 'Single-target 1-8 modifiable in-line range, air damage and steals 4 MP.',
              es: 'Monobjetivo 1-8 alcance modificable en línea, daño aire y roba 4 PM.',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
          },
          {
            name: { fr: 'Coup de corne', en: 'Horn Strike', es: 'Golpe de cuerno' },
            effect: {
              fr: 'Monocible 1-3 PO modifiable, dégâts terre et retire 4 PM.',
              en: 'Single-target 1-3 modifiable range, earth damage and removes 4 MP.',
              es: 'Monobjetivo 1-3 alcance modificable, daño tierra y retira 4 PM.',
            },
            cost: { fr: '6 PA', en: '6 AP', es: '6 PA' },
            limit: { fr: '1/cible, 2/tour', en: '1/target, 2/turn', es: '1/objetivo, 2/turno' },
          },
        ],
        passive: {
          fr: 'Corruption – Méristhaine: +40% dommages mêlée, -60 Volonté. Sous 50% PV ou KO, transfert de l’état à l’attaquant. Si volé: +250 résistances (2 tours).',
          en: 'Corruption – Meristhaine: +40% melee damage, -60 Willpower. Under 50% HP or KO, transfers state to attacker. If stolen: +250 resistances (2 turns).',
          es: 'Corrupción – Méristhaine: +40% daños cuerpo a cuerpo, -60 Voluntad. Bajo 50% PV o KO, transfiere el estado al atacante. Si se roba: +250 resistencias (2 turnos).',
        },
        notes: [],
        stats: [
          { fr: 'Rôle: drain PM', en: 'Role: MP drain', es: 'Rol: drenaje de PM' },
        ],
      },
      {
        name: { fr: 'Vaal’Enthia, Reine-démone (Boss)', en: 'Vaal’Enthia, Demon Queen (Boss)', es: 'Vaal’Enthia, Reina-demonio (Jefa)' },
        level: { fr: 'Boss', en: 'Boss', es: 'Jefa' },
        bonus: {
          fr: 'État Incorruptible',
          en: 'Incorruptible state',
          es: 'Estado Incorruptible',
        },
        description: {
          fr: 'Boss qui punit la mauvaise gestion des corruptions et exécute toute l’équipe si elle obtient toutes les corruptions.',
          en: 'Boss punishing poor corruption management and wipes the team if all corruption states are gathered.',
          es: 'Jefa que castiga mala gestión de corrupciones y elimina al grupo si reúne todas las corrupciones.',
        },
        spells: [
          {
            name: { fr: 'Déesse poire', en: 'Pear Goddess', es: 'Diosa pera' },
            effect: {
              fr: 'Monocible, toute la carte sans ligne de vue, dégâts feu. Lancé au maximum avant le premier déplacement du tour.',
              en: 'Single-target map-wide without line of sight, fire damage. Cast as many times as possible before first movement.',
              es: 'Monobjetivo, todo el mapa sin línea de visión, daño fuego. Lo lanza el máximo de veces antes de su primer desplazamiento.',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/cible, 3/tour', en: '1/target, 3/turn', es: '1/objetivo, 3/turno' },
          },
          {
            name: { fr: 'Vaal Ancienne', en: 'Ancient Vaal', es: 'Vaal Antigua' },
            effect: {
              fr: 'Monocible 1 PO, dégâts eau, retire 100 Résistance Élémentaire (3 tours, cumulable) et 3 PA.',
              en: 'Single-target 1 range, water damage, removes 100 Elemental Resistance (3 turns, stackable) and 3 AP.',
              es: 'Monobjetivo 1 alcance, daño agua, retira 100 Resistencia Elemental (3 turnos, acumulable) y 3 PA.',
            },
            cost: { fr: '1 PA', en: '1 AP', es: '1 PA' },
            limit: { fr: '1/cible, 3/tour', en: '1/target, 3/turn', es: '1/objetivo, 3/turno' },
          },
          {
            name: { fr: 'Désintégration', en: 'Disintegration', es: 'Desintegración' },
            effect: {
              fr: 'Zone toute la carte, met hors-combat tous les ennemis. Lancé automatiquement si elle possède tous les états Corruption en jeu.',
              en: 'Map-wide AoE, knocks all enemies out. Cast automatically if she has all Corruption states in play.',
              es: 'Área en todo el mapa, deja fuera de combate a todos los enemigos. Se lanza automáticamente si posee todos los estados Corrupción en juego.',
            },
            cost: { fr: '0 PA', en: '0 AP', es: '0 PA' },
          },
        ],
        passive: {
          fr: 'Reine-démone du désespoir: tours pairs/impairs renforcent Déesse poire selon visibilité. Gagne Ultime Ressort par allié tué et invoque des rochers (1 PV) en fin de tour. Incorruptible: vulnérable uniquement aux dommages augmentés par une corruption.',
          en: 'Demon Queen of Despair: even/odd turns amplify Pear Goddess based on visibility. Gains Ultimate Spring per ally killed and summons 1 HP rocks at end of turn. Incorruptible: vulnerable only to damage boosted by a corruption.',
          es: 'Reina-demonio de la desesperación: turnos pares/impares potencian Diosa pera según visibilidad. Gana Último Resorte por aliado muerto e invoca rocas de 1 PV al final del turno. Incorruptible: vulnerable solo a daños aumentados por una corrupción.',
        },
        notes: [],
        stats: [
          { fr: 'Rôle: boss de check mécanique', en: 'Role: mechanic-check boss', es: 'Rol: jefa de chequeo mecánico' },
        ],
      },
    ],
    boss: {
      name: { fr: 'Vaal’Enthia, Reine-démone', en: 'Vaal’Enthia, Demon Queen', es: 'Vaal’Enthia, Reina-demonio' },
      level: { fr: 'Niv. 216+', en: 'Lvl. 216+', es: 'Niv. 216+' },
      description: {
        fr: 'Boss axé sur Incorruptible et le transfert des Corruptions. Mauvaise gestion = wipe via Désintégration.',
        en: 'Boss focused on Incorruptible and Corruption transfer. Poor management leads to a wipe through Disintegration.',
        es: 'Jefa centrada en Incorruptible y transferencia de Corrupciones. Mala gestión = wipe por Desintegración.',
      },
      spells: [
        {
          name: { fr: 'Désintégration', en: 'Disintegration', es: 'Desintegración' },
          effect: {
            fr: 'Exécute tous les ennemis si Vaal’Enthia cumule toutes les Corruptions.',
            en: 'Executes all enemies if Vaal’Enthia gathers all Corruption states.',
            es: 'Ejecuta a todos los enemigos si Vaal’Enthia acumula todas las Corrupciones.',
          },
          cost: { fr: '0 PA', en: '0 AP', es: '0 PA' },
        },
      ],
      passives: [
        {
          name: { fr: 'Incorruptible', en: 'Incorruptible', es: 'Incorruptible' },
          effect: {
            fr: 'Ne subit que les dommages augmentés par une corruption adaptée.',
            en: 'Only takes damage increased by a matching corruption.',
            es: 'Solo recibe daño aumentado por una corrupción adecuada.',
          },
          notes: [],
        },
      ],
      stats: [
        { fr: 'Rôle: boss de punition', en: 'Role: punishment boss', es: 'Rol: jefa de castigo' },
      ],
    },
    mechanics: [
      {
        title: { fr: 'Corruptions et transferts', en: 'Corruptions and transfers', es: 'Corrupciones y transferencias' },
        paragraphs: [
          {
            fr: 'Sous 50% PV ou KO, les états Corruption sont transférés à l’attaquant.',
            en: 'Under 50% HP or on KO, Corruption states transfer to the attacker.',
            es: 'Bajo 50% PV o al KO, los estados Corrupción se transfieren al atacante.',
          },
          {
            fr: 'Attaquer avec le bon angle/type (dos, distance, mêlée) est vital pour exploiter Incorruptible.',
            en: 'Attacking with the correct angle/type (back, ranged, melee) is vital to exploit Incorruptible.',
            es: 'Atacar con el ángulo/tipo correcto (espalda, distancia, melee) es vital para explotar Incorruptible.',
          },
        ],
      },
      {
        title: { fr: 'Incorruptible en donjon', en: 'Incorruptible in dungeon', es: 'Incorruptible en mazmorra' },
        paragraphs: [
          {
            fr: 'Au début du combat, 3 Phytomorphes reçoivent aléatoirement Incorruptible (permanent).',
            en: 'At combat start, 3 Phytomorphes randomly receive permanent Incorruptible.',
            es: 'Al inicio del combate, 3 Fitoformes reciben aleatoriamente Incorruptible permanente.',
          },
          {
            fr: 'Exemple: une corruption dos+mêlée permet de frapper en mêlée ou de dos, mais pas à distance pure.',
            en: 'Example: a back+melee corruption allows melee or back hits, but not pure ranged hits.',
            es: 'Ejemplo: una corrupción espalda+melee permite pegar en melee o por espalda, pero no a distancia pura.',
          },
        ],
      },
      {
        title: { fr: 'Composition et exploits', en: 'Composition and achievements', es: 'Composición y logros' },
        paragraphs: [
          {
            fr: 'Salle 1: 3x Phytomorphe, 3x Phytomorphe, 2x Phytomorphe. Salle boss: 1x Vaal’Enthia + 3x Phytomorphe + 2x Phytomorphe + 2x Phytomorphe.',
            en: 'Room 1: 3x Phytomorphe, 3x Phytomorphe, 2x Phytomorphe. Boss room: 1x Vaal’Enthia + 3x Phytomorphe + 2x Phytomorphe + 2x Phytomorphe.',
            es: 'Sala 1: 3x Fitoforme, 3x Fitoforme, 2x Fitoforme. Sala de jefa: 1x Vaal’Enthia + 3x Fitoforme + 2x Fitoforme + 2x Fitoforme.',
          },
          {
            fr: 'Exploits: I (terminer), II (boss en premier), III (boss en dernier), Final (I+II+III) avec Miniature de Vaal’Enthia + 5 Jetons Infernaux.',
            en: 'Achievements: I (clear), II (boss first), III (boss last), Final (I+II+III) with Vaal’Enthia Miniature + 5 Infernal Tokens.',
            es: 'Logros: I (terminar), II (jefa primero), III (jefa al final), Final (I+II+III) con Miniatura de Vaal’Enthia + 5 Fichas Infernales.',
          },
        ],
      },
    ],
    plan: {
      fr: 'Stratégie détaillée: à venir.',
      en: 'Detailed strategy: coming soon.',
      es: 'Estrategia detallada: próximamente.',
    },
    steles: {
      lead: {
        fr: "Stèle d'intervention Anathar: nécessite une Clef d'intervention d'Anathar.",
        en: 'Anathar intervention stele: requires an Anathar Intervention Key.',
        es: 'Estela de intervención de Anathar: requiere una Llave de intervención de Anathar.',
      },
      notes: [
        {
          fr: "Anathar observe et réplique jusqu'à 4 actions du joueur marqué au tour suivant.",
          en: 'Anathar observes and replicates up to 4 actions from the marked player on next turn.',
          es: 'Anathar observa y replica hasta 4 acciones del jugador marcado en el siguiente turno.',
        },
        {
          fr: "Effet spécifique Phytomorphes: Anathar obtient l'état Incorruptible, comme Vaal’Enthia.",
          en: 'Phytomorphes specific effect: Anathar gains Incorruptible, like Vaal’Enthia.',
          es: 'Efecto específico Fitoformes: Anathar obtiene el estado Incorruptible, como Vaal’Enthia.',
        },
        {
          fr: 'La table de référence Anathar (actions observées → effets répliqués) s’applique ici.',
          en: 'The Anathar reference table (observed actions → replicated effects) applies here.',
          es: 'La tabla de referencia de Anathar (acciones observadas → efectos replicados) aplica aquí.',
        },
      ],
      protoBosses: [],
      crystals: {
        types: [
          {
            fr: 'Objectif: limiter les actions différentes du joueur marqué pour contrôler la réplication.',
            en: 'Objective: limit different action types on the marked player turn to control replication.',
            es: 'Objetivo: limitar acciones diferentes en el turno marcado para controlar la replicación.',
          },
        ],
        notes: [
          {
            fr: '“Combattants” inclut joueurs, monstres et boss.',
            en: '“Combatants” includes players, monsters and boss units.',
            es: '“Combatientes” incluye jugadores, monstruos y jefa.',
          },
        ],
        stats: [],
      },
    },
    drops: {
      notes: [
        {
          fr: 'Drops du donjon et du boss: liens directs à ajouter.',
          en: 'Dungeon and boss drops: direct links to add.',
          es: 'Drops de mazmorra y jefa: enlaces directos por añadir.',
        },
      ],
      monsterDrops: [],
      bossDrops: [],
    },
    croupier: {
      location: {
        fr: 'Section à compléter.',
        en: 'Section to be completed.',
        es: 'Sección por completar.',
      },
      items: [],
    },
  },
  {
    id: 'ferociraptor',
    name: { fr: 'Donjon Ferociraptor', en: 'Ferociraptor Dungeon', es: 'Mazmorra Ferociraptor' },
    subtitle: { fr: 'Boss: En cours', en: 'Boss: In progress', es: 'Jefe: En proceso' },
    levelRange: { fr: 'Niv. 231-245', en: 'Lvl. 231-245', es: 'Niv. 231-245' },
    summary: [
      {
        fr: 'Guide en cours de rédaction.',
        en: 'Guide in progress.',
        es: 'Guía en proceso.',
      },
    ],
    monsters: [],
    boss: {
      name: { fr: 'À confirmer', en: 'To be confirmed', es: 'Por confirmar' },
      level: { fr: 'Niv. 231-245', en: 'Lvl. 231-245', es: 'Niv. 231-245' },
      description: {
        fr: 'Guide en cours de rédaction.',
        en: 'Guide in progress.',
        es: 'Guía en proceso.',
      },
      spells: [],
      passives: [],
      stats: [],
    },
    mechanics: [
      {
        title: { fr: 'Mécaniques', en: 'Mechanics', es: 'Mecánicas' },
        paragraphs: [
          {
            fr: 'Guide en cours de rédaction.',
            en: 'Guide in progress.',
            es: 'Guía en proceso.',
          },
        ],
      },
    ],
    plan: {
      fr: 'Stratégie détaillée: à venir.',
      en: 'Detailed strategy: coming soon.',
      es: 'Estrategia detallada: próximamente.',
    },
    steles: {
      lead: {
        fr: 'Guide en cours de rédaction.',
        en: 'Guide in progress.',
        es: 'Guía en proceso.',
      },
      notes: [],
      protoBosses: [],
      crystals: {
        types: [],
        notes: [],
        stats: [],
      },
    },
    drops: {
      notes: [
        {
          fr: 'Guide en cours de rédaction.',
          en: 'Guide in progress.',
          es: 'Guía en proceso.',
        },
      ],
      monsterDrops: [],
      bossDrops: [],
    },
    croupier: {
      location: {
        fr: 'Section à compléter.',
        en: 'Section to be completed.',
        es: 'Sección por completar.',
      },
      items: [],
    },
  },
  {
    id: 'primount',
    name: { fr: 'Donjon Primount', en: 'Primount Dungeon', es: 'Mazmorra Primacizos' },
    subtitle: { fr: 'Boss: En cours', en: 'Boss: In progress', es: 'Jefe: En proceso' },
    levelRange: { fr: 'Niv. 231-245', en: 'Lvl. 231-245', es: 'Niv. 231-245' },
    summary: [
      {
        fr: 'Guide en cours de rédaction.',
        en: 'Guide in progress.',
        es: 'Guía en proceso.',
      },
    ],
    monsters: [],
    boss: {
      name: { fr: 'À confirmer', en: 'To be confirmed', es: 'Por confirmar' },
      level: { fr: 'Niv. 231-245', en: 'Lvl. 231-245', es: 'Niv. 231-245' },
      description: {
        fr: 'Guide en cours de rédaction.',
        en: 'Guide in progress.',
        es: 'Guía en proceso.',
      },
      spells: [],
      passives: [],
      stats: [],
    },
    mechanics: [
      {
        title: { fr: 'Mécaniques', en: 'Mechanics', es: 'Mecánicas' },
        paragraphs: [
          {
            fr: 'Guide en cours de rédaction.',
            en: 'Guide in progress.',
            es: 'Guía en proceso.',
          },
        ],
      },
    ],
    plan: {
      fr: 'Stratégie détaillée: à venir.',
      en: 'Detailed strategy: coming soon.',
      es: 'Estrategia detallada: próximamente.',
    },
    steles: {
      lead: {
        fr: 'Guide en cours de rédaction.',
        en: 'Guide in progress.',
        es: 'Guía en proceso.',
      },
      notes: [],
      protoBosses: [],
      crystals: {
        types: [],
        notes: [],
        stats: [],
      },
    },
    drops: {
      notes: [
        {
          fr: 'Guide en cours de rédaction.',
          en: 'Guide in progress.',
          es: 'Guía en proceso.',
        },
      ],
      monsterDrops: [],
      bossDrops: [],
    },
    croupier: {
      location: {
        fr: 'Section à compléter.',
        en: 'Section to be completed.',
        es: 'Sección por completar.',
      },
      items: [],
    },
  },
  {
    id: 'starvannah',
    name: { fr: 'Donjon Starvannah', en: 'Starvannah Dungeon', es: 'Mazmorra Sabanastrales' },
    subtitle: { fr: 'Boss: En cours', en: 'Boss: In progress', es: 'Jefe: En proceso' },
    levelRange: { fr: 'Niv. 231-245', en: 'Lvl. 231-245', es: 'Niv. 231-245' },
    summary: [
      {
        fr: 'Guide en cours de rédaction.',
        en: 'Guide in progress.',
        es: 'Guía en proceso.',
      },
    ],
    monsters: [],
    boss: {
      name: { fr: 'À confirmer', en: 'To be confirmed', es: 'Por confirmar' },
      level: { fr: 'Niv. 231-245', en: 'Lvl. 231-245', es: 'Niv. 231-245' },
      description: {
        fr: 'Guide en cours de rédaction.',
        en: 'Guide in progress.',
        es: 'Guía en proceso.',
      },
      spells: [],
      passives: [],
      stats: [],
    },
    mechanics: [
      {
        title: { fr: 'Mécaniques', en: 'Mechanics', es: 'Mecánicas' },
        paragraphs: [
          {
            fr: 'Guide en cours de rédaction.',
            en: 'Guide in progress.',
            es: 'Guía en proceso.',
          },
        ],
      },
    ],
    plan: {
      fr: 'Stratégie détaillée: à venir.',
      en: 'Detailed strategy: coming soon.',
      es: 'Estrategia detallada: próximamente.',
    },
    steles: {
      lead: {
        fr: 'Guide en cours de rédaction.',
        en: 'Guide in progress.',
        es: 'Guía en proceso.',
      },
      notes: [],
      protoBosses: [],
      crystals: {
        types: [],
        notes: [],
        stats: [],
      },
    },
    drops: {
      notes: [
        {
          fr: 'Guide en cours de rédaction.',
          en: 'Guide in progress.',
          es: 'Guía en proceso.',
        },
      ],
      monsterDrops: [],
      bossDrops: [],
    },
    croupier: {
      location: {
        fr: 'Section à compléter.',
        en: 'Section to be completed.',
        es: 'Sección por completar.',
      },
      items: [],
    },
  },
  {
    id: 'bworkana-clan',
    name: { fr: 'Donjon Clan Bworkana', en: 'Bworkana Clan Dungeon', es: 'Mazmorra Clan Bworkana' },
    subtitle: { fr: 'Boss: En cours', en: 'Boss: In progress', es: 'Jefe: En proceso' },
    levelRange: { fr: 'Niv. 231-245', en: 'Lvl. 231-245', es: 'Niv. 231-245' },
    summary: [
      {
        fr: 'Guide en cours de rédaction.',
        en: 'Guide in progress.',
        es: 'Guía en proceso.',
      },
    ],
    monsters: [],
    boss: {
      name: { fr: 'À confirmer', en: 'To be confirmed', es: 'Por confirmar' },
      level: { fr: 'Niv. 231-245', en: 'Lvl. 231-245', es: 'Niv. 231-245' },
      description: {
        fr: 'Guide en cours de rédaction.',
        en: 'Guide in progress.',
        es: 'Guía en proceso.',
      },
      spells: [],
      passives: [],
      stats: [],
    },
    mechanics: [
      {
        title: { fr: 'Mécaniques', en: 'Mechanics', es: 'Mecánicas' },
        paragraphs: [
          {
            fr: 'Guide en cours de rédaction.',
            en: 'Guide in progress.',
            es: 'Guía en proceso.',
          },
        ],
      },
    ],
    plan: {
      fr: 'Stratégie détaillée: à venir.',
      en: 'Detailed strategy: coming soon.',
      es: 'Estrategia detallada: próximamente.',
    },
    steles: {
      lead: {
        fr: 'Guide en cours de rédaction.',
        en: 'Guide in progress.',
        es: 'Guía en proceso.',
      },
      notes: [],
      protoBosses: [],
      crystals: {
        types: [],
        notes: [],
        stats: [],
      },
    },
    drops: {
      notes: [
        {
          fr: 'Guide en cours de rédaction.',
          en: 'Guide in progress.',
          es: 'Guía en proceso.',
        },
      ],
      monsterDrops: [],
      bossDrops: [],
    },
    croupier: {
      location: {
        fr: 'Section à compléter.',
        en: 'Section to be completed.',
        es: 'Sección por completar.',
      },
      items: [],
    },
  },
  {
    id: 'nox-machines',
    name: { fr: 'Donjon Machines de Nox', en: 'Nox Machines Dungeon', es: 'Mazmorra Maquinas de Nox' },
    subtitle: { fr: 'Boss: En cours', en: 'Boss: In progress', es: 'Jefe: En proceso' },
    levelRange: { fr: 'Niv. 231-245', en: 'Lvl. 231-245', es: 'Niv. 231-245' },
    summary: [
      {
        fr: 'Guide en cours de rédaction.',
        en: 'Guide in progress.',
        es: 'Guía en proceso.',
      },
    ],
    monsters: [],
    boss: {
      name: { fr: 'À confirmer', en: 'To be confirmed', es: 'Por confirmar' },
      level: { fr: 'Niv. 231-245', en: 'Lvl. 231-245', es: 'Niv. 231-245' },
      description: {
        fr: 'Guide en cours de rédaction.',
        en: 'Guide in progress.',
        es: 'Guía en proceso.',
      },
      spells: [],
      passives: [],
      stats: [],
    },
    mechanics: [
      {
        title: { fr: 'Mécaniques', en: 'Mechanics', es: 'Mecánicas' },
        paragraphs: [
          {
            fr: 'Guide en cours de rédaction.',
            en: 'Guide in progress.',
            es: 'Guía en proceso.',
          },
        ],
      },
    ],
    plan: {
      fr: 'Stratégie détaillée: à venir.',
      en: 'Detailed strategy: coming soon.',
      es: 'Estrategia detallada: próximamente.',
    },
    steles: {
      lead: {
        fr: 'Guide en cours de rédaction.',
        en: 'Guide in progress.',
        es: 'Guía en proceso.',
      },
      notes: [],
      protoBosses: [],
      crystals: {
        types: [],
        notes: [],
        stats: [],
      },
    },
    drops: {
      notes: [
        {
          fr: 'Guide en cours de rédaction.',
          en: 'Guide in progress.',
          es: 'Guía en proceso.',
        },
      ],
      monsterDrops: [],
      bossDrops: [],
    },
    croupier: {
      location: {
        fr: 'Section à compléter.',
        en: 'Section to be completed.',
        es: 'Sección por completar.',
      },
      items: [],
    },
  },
  {
    id: 'timeless-theater',
    name: { fr: 'Donjon Théâtre Intemporel', en: 'Timeless Theater Dungeon', es: 'Mazmorra Teatro Intemporal' },
    subtitle: { fr: 'Boss: En cours', en: 'Boss: In progress', es: 'Jefe: En proceso' },
    levelRange: { fr: 'Niv. 231-245', en: 'Lvl. 231-245', es: 'Niv. 231-245' },
    summary: [
      {
        fr: 'Guide en cours de rédaction.',
        en: 'Guide in progress.',
        es: 'Guía en proceso.',
      },
    ],
    monsters: [],
    boss: {
      name: { fr: 'À confirmer', en: 'To be confirmed', es: 'Por confirmar' },
      level: { fr: 'Niv. 231-245', en: 'Lvl. 231-245', es: 'Niv. 231-245' },
      description: {
        fr: 'Guide en cours de rédaction.',
        en: 'Guide in progress.',
        es: 'Guía en proceso.',
      },
      spells: [],
      passives: [],
      stats: [],
    },
    mechanics: [
      {
        title: { fr: 'Mécaniques', en: 'Mechanics', es: 'Mecánicas' },
        paragraphs: [
          {
            fr: 'Guide en cours de rédaction.',
            en: 'Guide in progress.',
            es: 'Guía en proceso.',
          },
        ],
      },
    ],
    plan: {
      fr: 'Stratégie détaillée: à venir.',
      en: 'Detailed strategy: coming soon.',
      es: 'Estrategia detallada: próximamente.',
    },
    steles: {
      lead: {
        fr: 'Guide en cours de rédaction.',
        en: 'Guide in progress.',
        es: 'Guía en proceso.',
      },
      notes: [],
      protoBosses: [],
      crystals: {
        types: [],
        notes: [],
        stats: [],
      },
    },
    drops: {
      notes: [
        {
          fr: 'Guide en cours de rédaction.',
          en: 'Guide in progress.',
          es: 'Guía en proceso.',
        },
      ],
      monsterDrops: [],
      bossDrops: [],
    },
    croupier: {
      location: {
        fr: 'Section à compléter.',
        en: 'Section to be completed.',
        es: 'Sección por completar.',
      },
      items: [],
    },
  },
  {
    id: 'heart-of-nox-clock',
    name: { fr: 'Donjon Cœur de l’Horloge de Nox', en: 'Heart of Nox Clock Dungeon', es: 'Mazmorra Corazon del Reloj de Nox' },
    subtitle: { fr: 'Boss: En cours', en: 'Boss: In progress', es: 'Jefe: En proceso' },
    levelRange: { fr: 'Niv. 231-245', en: 'Lvl. 231-245', es: 'Niv. 231-245' },
    summary: [
      {
        fr: 'Guide en cours de rédaction.',
        en: 'Guide in progress.',
        es: 'Guía en proceso.',
      },
    ],
    monsters: [],
    boss: {
      name: { fr: 'À confirmer', en: 'To be confirmed', es: 'Por confirmar' },
      level: { fr: 'Niv. 231-245', en: 'Lvl. 231-245', es: 'Niv. 231-245' },
      description: {
        fr: 'Guide en cours de rédaction.',
        en: 'Guide in progress.',
        es: 'Guía en proceso.',
      },
      spells: [],
      passives: [],
      stats: [],
    },
    mechanics: [
      {
        title: { fr: 'Mécaniques', en: 'Mechanics', es: 'Mecánicas' },
        paragraphs: [
          {
            fr: 'Guide en cours de rédaction.',
            en: 'Guide in progress.',
            es: 'Guía en proceso.',
          },
        ],
      },
    ],
    plan: {
      fr: 'Stratégie détaillée: à venir.',
      en: 'Detailed strategy: coming soon.',
      es: 'Estrategia detallada: próximamente.',
    },
    steles: {
      lead: {
        fr: 'Guide en cours de rédaction.',
        en: 'Guide in progress.',
        es: 'Guía en proceso.',
      },
      notes: [],
      protoBosses: [],
      crystals: {
        types: [],
        notes: [],
        stats: [],
      },
    },
    drops: {
      notes: [
        {
          fr: 'Guide en cours de rédaction.',
          en: 'Guide in progress.',
          es: 'Guía en proceso.',
        },
      ],
      monsterDrops: [],
      bossDrops: [],
    },
    croupier: {
      location: {
        fr: 'Section à compléter.',
        en: 'Section to be completed.',
        es: 'Sección por completar.',
      },
      items: [],
    },
  },
] as const


export const content = {
  es: {
    badge: 'The Bloody Brotherhood',
    navTitle: 'Endgame 230-245',
    navToggle: 'Menú',
    title: 'Impulso Contenido Endgame 230-245',
    subtitle:
      'Un plan claro para avanzar, aprender mecanicas y coordinar contenido alto nivel con apoyo real del gremio.',
    ctaPrimary: 'Quiero sumarme',
    ctaSecondary: 'Ver el plan',
    themeToggle: 'Modo',
    themeOptions: { dark: 'Oscuro', light: 'Claro' },
    nav: [
      { id: 'inicio', label: 'Inicio' },
      { id: 'plan', label: 'Plan' },
      { id: 'guias', label: 'Guias' },
      { id: 'estelas', label: 'Estelas' },
      { id: 'bosses', label: 'Bosses' },
      { id: 'clases', label: 'Clases' },
      { id: 'registro', label: 'Registro' },
    ],
    viewSubtitles: {
      objetivo: 'Que buscamos lograr con el impulso',
      plan: 'Impulsar el contenido 230-245 de forma organizada para que mas jugadores puedan llegar y mantenerse en estas franjas.',
      guias: 'Materiales y practicas guiadas',
      estelas: 'Guías de estela de intervención',
      bosses: 'Primer set de dungeons clave',
      clases: 'Roles, builds y guías por clase',
      equipamiento: 'Circulacion de piezas utiles',
      registro: 'Formulario para coordinar roles',
      resumen: 'Puntos clave del anuncio',
    },
    transition:
      'Gracias por como se llevo la transicion de Temporiz a Bloody. Seguimos ordenando cupos para quienes aun faltan.',
    stats: [
      { value: '230-245', label: 'Rango clave' },
      { value: '215+', label: 'Base actual' },
      { value: '4', label: 'Pilares del plan' },
    ],
    home: {
      quickTitle: 'Accesos rapidos',
      quickLead: 'Salta directo a lo que necesitas revisar hoy.',
      quickCta: 'Ver seccion',
      quickCards: [
        {
          id: 'plan',
          title: 'Plan y estructura',
          text: 'Resumen de acciones y flujo semanal.',
        },
        {
          id: 'bosses',
          title: 'Bosses 230',
          text: 'Lista base para mecanicas y practica.',
        },
        {
          id: 'guias',
          title: 'Guias y roles',
          text: 'Apuntes y checklist antes de cada run.',
        },
        {
          id: 'registro',
          title: 'Registro',
          text: 'Deja tu rol y disponibilidad.',
        },
      ],
      glanceTitle: 'En 1 minuto',
      glanceItems: [
        'Ordenamos grupos estables para el 230-245.',
        'Practicamos mecanicas con guias claras.',
        'Rotamos equipamiento para cerrar sets.',
      ],
    },
    objectives: {
      title: 'Objetivo',
      lead:
        'Impulsar el contenido 230-245 de forma organizada para que mas jugadores puedan llegar y mantenerse en estas franjas.',
      bullets: [
        'Entender y dominar mecanicas del contenido de alto nivel',
        'Coordinar grupos estables para runs constantes',
        'Armar y mejorar sets de forma progresiva y acompanada',
        'Acceder a contenido que normalmente cuesta organizar',
      ],
    },
    plan: {
      title: 'Que vamos a hacer',
      lead: 'Impulsar el contenido 230-245 de forma organizada para que mas jugadores puedan llegar y mantenerse en estas franjas.',
      items: [
        {
          title: 'Canal dedicado 230-245',
          text: 'Seguimiento de progreso, dudas, mecanicas y apoyo entre quienes estan activos en estas franjas.',
        },
        {
          title: 'Guias actualizadas',
          text: 'Mecanicas claras, recomendaciones de sets y notas de cambios recientes.',
        },
        {
          title: 'Actividades constantes',
          text: 'Organizacion regular de estelas y runs guiadas para quienes se estan familiarizando.',
        },
        {
          title: 'Rotacion de equipamiento',
          text: 'Avisos de piezas utiles disponibles para que circulen y ayuden a cerrar sets.',
        },
      ],
    },
    guides: {
      title: 'Guias y aprendizaje',
      lead:
        'La idea es bajar la barrera de entrada y evitar que el contenido alto nivel se sienta lejano o reservado.',
      steps: [
      ],
      dungeonTitle: 'Guias de dungeons',
      dungeonLead:
        '',
      dungeons: dungeonGuides,
    },
    bosses: {
      title: 'Bosses 230 (primera etapa)',
      lead:
        'Seleccion inicial para mecanicas y practicas guiadas.',
      guideCta: 'Ver guía relacionada',
      items: [
        {
          id: 180,
          name: 'Mazmorra de los Devastadores',
          image: '/wakassets/bossIllustrations/180.png',
          guideId: 'ravageurs',
          mechanics: ['Fases con rotacion de roles', 'Control de posicion', 'Mitigacion de burst'],
        },
        {
          id: 176,
          name: 'Mazmorra de los Fitoformes',
          image: '/wakassets/bossIllustrations/176.png',
          guideId: 'phytomorphes',
          mechanics: ['Gestion de estados', 'Orden de objetivos', 'Lineas de vision'],
        },
        {
          id: 178,
          name: 'Mazmorra de los Demorribles',
          image: '/wakassets/bossIllustrations/178.png',
          guideId: 'demhorribles',
          mechanics: ['Limpieza de invocaciones', 'Debuffs criticos', 'Timing de reanimacion'],
        },
        {
          id: 177,
          name: 'Mazmorra de los Vaciantes',
          image: '/wakassets/bossIllustrations/177.png',
          guideId: 'vaciantes',
          mechanics: ['Control de mapa', 'Rotacion de turnos clave', 'Sincronizacion de DPS'],
        },
        {
          id: 179,
          name: 'Mazmorra de los Idos',
          image: '/wakassets/bossIllustrations/179.png',
          guideId: 'egares',
          mechanics: ['Gestion de mental', 'Triggers de sala', 'Fases de supervivencia'],
        },
        {
          id: 187,
          name: 'Mazmorra Pezgajosos Abisales',
          image: '/wakassets/bossIllustrations/187.png',
          guideId: 'poisseux-abyssaux',
          mechanics: ['Control de zonas', 'Gestion de estados', 'Prioridad de objetivos'],
        },
        {
          id: 188,
          name: 'Mazmorra Steamers',
          image: '/wakassets/bossIllustrations/188.png',
          guideId: 'steamers',
          mechanics: ['Reserva de stasis', 'Posicionamiento vs zonas', 'Control de mecanos'],
        },
        {
          id: 197,
          name: 'Mazmorra Ferociraptor',
          image: '/wakassets/bossIllustrations/197.png',
          guideId: 'ferociraptor',
          mechanics: ['Guia en proceso'],
        },
        {
          id: 198,
          name: 'Mazmorra Primacizos',
          image: '/wakassets/bossIllustrations/198.png',
          guideId: 'primount',
          mechanics: ['Guia en proceso'],
        },
        {
          id: 199,
          name: 'Mazmorra Sabanastrales',
          image: '/wakassets/bossIllustrations/199.png',
          guideId: 'starvannah',
          mechanics: ['Guia en proceso'],
        },
        {
          id: 200,
          name: 'Mazmorra Clan Bworkana',
          image: '/wakassets/bossIllustrations/200.png',
          guideId: 'bworkana-clan',
          mechanics: ['Guia en proceso'],
        },
        {
          id: 201,
          name: 'Mazmorra Maquinas de Nox',
          image: '/wakassets/bossIllustrations/201.png',
          guideId: 'nox-machines',
          mechanics: ['Guia en proceso'],
        },
        {
          id: 202,
          name: 'Mazmorra Teatro Intemporal',
          image: '/wakassets/bossIllustrations/202.png',
          guideId: 'timeless-theater',
          mechanics: ['Guia en proceso'],
        },
        {
          id: 203,
          name: 'Mazmorra Corazon del Reloj de Nox',
          image: '/wakassets/bossIllustrations/203.png',
          guideId: 'heart-of-nox-clock',
          mechanics: ['Guia en proceso'],
        },
      ],
    },
    stelesHub: {
      title: 'Guías de Estelas de intervención',
      lead: 'Referencia central de estelas para no mezclar mecánicas entre dungeons.',
      guides: [
        {
          id: 'anathar',
          name: 'Anathar',
          keyRequired: 'Llave de intervención de Anathar',
          appliesTo: ['Devastadores', 'Idos', 'Demorribles', 'Vaciantes', 'Fitoformes'],
          overview: [
            'Marca de Anathar suele caer en el jugador más lejano.',
            'Anathar observa el turno del marcado y replica hasta 4 acciones distintas al inicio de su siguiente turno.',
            'Si observa menos de 4 acciones, usa Infierno Demoníaco y castiga más cuanto menos acciones haya.',
          ],
          table: {
            actionHeader: 'Acción del jugador marcado',
            effectHeader: 'Acción replicada de Anathar',
            rows: [
              { action: 'Retirar PM a un objetivo', effect: 'Retira 3 PM a combatientes que no esten en su línea de visión.' },
              { action: 'Retirar PA a un objetivo', effect: 'Retira 3 PA a combatientes que esten en su línea de visión.' },
              { action: 'Dar PM a un objetivo', effect: 'Da 1PM a los combatientes (excepto Anathar).' },
              { action: 'Dar PA a un objetivo', effect: 'Da 40 de Voluntad a los 3 combatientes más cercanos.' },
              { action: 'Curar a un objetivo', effect: 'Cura un 35% de PdV perdidos a los 3 combatientes cercanos.' },
              { action: 'Dar armadura', effect: 'Da 5.000 armadura a los 3 combatientes más alejados.' },
              { action: 'Retirar esquiva', effect: 'Retira 500 esquiva a los 3 combatientes más cercanos.' },
              { action: 'Aumentar esquiva', effect: 'Da 500 esquiva a los 3 combatientes más alejados.' },
              { action: 'Retirar placaje', effect: 'Retira 500 placaje a combatientes que tengan al menos un combatiente en contacto.' },
              { action: 'Aumentar placaje', effect: 'Da 500 placaje a combatientes que no tengan contacto con ningún otro combatiente.' },
              { action: 'Empujar', effect: 'Empuja(4c) aliados alineados al iniciar turno.' },
              { action: 'Atraer', effect: 'Atrae(8c) aliados alineados al iniciar turno.' },
              { action: 'Cambiar lugar', effect: 'Cambia de lugar con el combatiente más alejado.' },
              { action: 'Teletransportar', effect: 'Teleporta enemigos a posiciones aleatorias (3 casillas alrededor de un jugador).' },
              { action: 'Daño fuego', effect: 'Causa daño fuego al combatiente más alejado.' },
              { action: 'Daño aire', effect: 'Causa daño aire a combatientes a más de 7 casillas.' },
              { action: 'Daño tierra', effect: 'Causa daño tierra a combatientes a 3 casillas o menos.' },
              { action: 'Daño agua', effect: 'Causa daño agua en círculo de 2 casillas alrededor de combatientes.' },
            ],
          },
          dungeonEffects: [
            'Devastadores: al morir deja un Residuo.',
            'Idos: también debe quedar a 1 PdV.',
            'Demorribles: tiene Enlace de Vida y suma sus PdV al total.',
            'Vaciantes: obtiene Aura de Vacío similar al jefe.',
            'Fitoformes: obtiene Incorruptible como Vaalenthia.',
          ],
          tips: [
            'En el turno marcado evita acciones innecesarias para no regalar réplicas peligrosas.',
            'Con “combatiente” se incluyen jugadores, mobs y boss.',
          ],
        },
        {
          id: 'cire-momore',
          name: 'Cire Momore',
          keyRequired: 'Llave de intervención de Cire Momore',
          appliesTo: ['Steamers', 'Pezgajosos Abisales'],
          overview: [
            'Inicia combate en la esquina superior izquierda (Steamers y Pezgajosos Abisales).',
            'Comienza con 3 PM y gana +2 PM por turno.',
            'Al usar Aspiración de Alma y absorber una flor, reinicia sus PM.',
            'Al invocar a Cire Momore, una Asesirena o Unidad stasificadora abandona el combate.',
          ],
          table: {
            actionHeader: 'Elemento',
            effectHeader: 'Detalle',
            rows: [
              { action: 'Flores', effect: 'Cuando muere un mob (excepto Raeliss/Sir Kurn Flex), aparece una flor. Un jugador debe pisarla para obtenerla.' },
              { action: 'Bonus de flor', effect: 'Otorga +4 PA y +2 PM. Los bonus no son acumulables.' },
              { action: 'Aspiración de Alma (con flor)', effect: 'Pierdes la flor y Cire Momore reinicia sus PM.' },
              { action: 'Aspiración de Alma (sin flor)', effect: 'Pierdes 4000 PdV máximos (acumulable).' },
              { action: 'Aspiración x3', effect: 'Si un jugador recibe 3 Aspiraciones, muere directamente (sin K.O.).' },
              { action: 'Fatalidad', effect: 'Daño Stasis en línea, alcance 2-6.' },
              { action: 'Rompespanima', effect: 'Daño Stasis constante, alcance 1-12, hasta 2 veces por turno.' },
              { action: 'Aspiración de Alma', effect: 'Zona CaC. Absorbe flores, reinicia PM y castiga con pérdida de vida máxima.' },
            ],
          },
          dungeonEffects: [
            'Es fundamental no terminar turno en CaC de Cire Momore.',
            'Prioriza limpiar mobs rápido para generar flores y repartirlas con orden.',
          ],
          tips: [
            'Pegar y moverse: evita quedarte expuesto cerca del jefe.',
            'Usa invocaciones o bloqueadores para estorbar y forzar absorciones en objetivos controlados.',
            'Vigila a quienes ya tengan 2 Aspiraciones: no pueden arriesgar una tercera.',
          ],
        },
      ],
    },
    schedule: {
      title: 'Actividades sugeridas',
      lead: 'Cadencia propuesta para mantener progreso y práctica de mecánicas.',
      items: [
        {
          name: 'Ereboria',
          focus: 'Mecanicas, roles y rotaciones',
          cadence: '1-2 veces por semana',
        },
        {
          name: 'Fab huritu',
          focus: 'Practica con equipos mixtos',
          cadence: 'Semanal',
        },
        {
          name: 'Golems',
          focus: 'Entrenamiento de mecanicas rapidas',
          cadence: 'Rotativo',
        },
      ],
    },
    classes: {
      title: 'Clases',
      lead: '',
      items: [],
    },
    gear: {
      title: 'Rotacion de equipamiento',
      lead:
        'Cuando haya piezas utiles, se avisara y se podran revisar en los cofres habilitados del gremio.',
      note:
        'El objetivo es que el equipo circule y ayude a completar sets sin quedarse guardado.',
    },
    form: {
      title: 'Registro de interesados',
      lead:
        'Deja tus datos para coordinar roles, horarios y el tipo de ayuda que necesitas.',
      note:
        'El formulario funciona localmente. Si se configura Supabase, quedara guardado en la base de datos.',
      warning: 'Supabase no esta configurado. El registro queda en modo local.',
      fields: {
        name: 'Nombre en juego',
        role: 'Rol principal',
        level: 'Rango de nivel actual',
        availability: 'Horario y dias disponibles',
        contact: 'Contacto (Discord)',
        build: 'Detalles de tu build / set actual',
        interestBosses: 'Interes en bosses',
        interestActivities: 'Interes en clases',
        interestGuides: 'Interes en guias',
        item: 'Item solicitado',
        slot: 'Slot / tipo',
        priority: 'Prioridad',
        source: 'Boss / dungeon',
        notes: 'Notas',
      },
      placeholders: {
        name: 'Ej: Huachimango',
        role: 'Ej: Tank, DPS, Healer',
        availability: 'Ej: Mar y Jue 21:00-23:00',
        contact: 'Ej: usuario#0000',
        build: 'Ej: build crit con foco en distancia, necesito cerrar resistencias',
      },
      weekDays: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
      timeRange: 'Rango horario',
      from: 'Desde',
      to: 'Hasta',
      levelOptions: ['215-220', '221-229', '230-239', '240-245'],
      selectPlaceholder: 'Selecciona',
      addItem: 'Agregar item',
      removeItem: 'Quitar',
      priorities: ['Alta', 'Media', 'Baja'],
      submit: 'Enviar interes',
      success:
        'Listo. Tu interes quedo registrado para organizar dungeons.',
      error:
        'Hubo un problema al guardar. Revisa la configuracion o intenta mas tarde.',
    },
    interests: {
      title: 'Intereses registrados',
      loading: 'Cargando intereses...',
      empty: 'Aun no hay registros para esta seccion.',
      interested: 'interesados',
      needHelp: 'necesitan ayuda',
      andMore: '+ {count} más',
      gearRequests: 'Solicitudes de equipo',
      bossesTitle: 'Interes por boss',
      activitiesTitle: 'Interes por clases',
      guidesTitle: 'Interes por guias',
      gearTitle: 'Items solicitados',
      gearEmpty: 'Aun no hay items registrados.',
    },
    summary: {
      title: 'En resumen',
      highlights: [
        'El problema no es falta de contenido, sino coordinacion y acceso',
        'Conectamos jugadores preparados con quienes quieren aprender',
        'La organizacion constante hace que el 230-245 sea mas alcanzable',
      ],
      fullTitle: 'Texto completo del anuncio',
      fullText: [
        'La progresion en los neo servidores fue evidente. Muchos alcanzaron franjas altas, otros avanzaron alters y hoy tenemos una base importante por sobre niveles 215-220.',
        'El 230-245 suele sentirse desordenado o reservado para pocos. Hay gente que quiere hacerlo pero no encuentra grupo fijo o no conoce bien las mecanicas.',
        'Queremos estructurarlo mejor para que mas jugadores puedan llegar y mantenerse, con guias claras y coordinacion constante.',
        'Si tenemos jugadores preparados y jugadores que quieren aprender, lo logico es conectar ambas partes.',
      ],
    },
    footer: 'Impulso organizado para avanzar juntos.',
  },
  en: {
    badge: 'The Bloody Brotherhood',
    navTitle: 'Endgame 230-245',
    navToggle: 'Menu',
    title: 'Endgame Content Boost 230-245',
    subtitle:
      'A clear plan to progress, learn mechanics, and coordinate high level content with real guild support.',
    ctaPrimary: 'I want to join',
    ctaSecondary: 'See the plan',
    themeToggle: 'Theme',
    themeOptions: { dark: 'Dark', light: 'Light' },
    nav: [
      { id: 'inicio', label: 'Home' },
      { id: 'plan', label: 'Plan' },
      { id: 'guias', label: 'Guides' },
      { id: 'estelas', label: 'Steles' },
      { id: 'bosses', label: 'Bosses' },
      { id: 'clases', label: 'Classes' },
      { id: 'registro', label: 'Sign up' },
    ],
    viewSubtitles: {
      objetivo: 'What we want to achieve with the boost',
      plan: 'Boost 230-245 content in an organized way so more players can reach and stay in these ranges.',
      guias: 'Materials and guided practice',
      estelas: 'Intervention stele guides',
      bosses: 'First set of key dungeons',
      clases: 'Class guides and build references',
      equipamiento: 'Circulating useful pieces',
      registro: 'Form to align roles',
      resumen: 'Key points of the announcement',
    },
    transition:
      'Thanks for the smooth transition from Temporiz to Bloody. We are still organizing spots for incoming players.',
    stats: [
      { value: '230-245', label: 'Key range' },
      { value: '215+', label: 'Current base' },
      { value: '4', label: 'Plan pillars' },
    ],
    home: {
      quickTitle: 'Quick access',
      quickLead: 'Jump straight to what you need today.',
      quickCta: 'Open section',
      quickCards: [
        {
          id: 'plan',
          title: 'Plan and structure',
          text: 'Overview of actions and weekly flow.',
        },
        {
          id: 'bosses',
          title: '230 bosses',
          text: 'Base list for mechanics and practice.',
        },
        {
          id: 'guias',
          title: 'Guides and roles',
          text: 'Notes and checklists before runs.',
        },
        {
          id: 'registro',
          title: 'Sign up',
          text: 'Share your role and availability.',
        },
      ],
      glanceTitle: 'In one minute',
      glanceItems: [
        'We build stable groups for 230-245.',
        'We practice mechanics with clear guides.',
        'We rotate gear to close sets.',
      ],
    },
    objectives: {
      title: 'Goal',
      lead:
        'Boost 230-245 content in an organized way so more players can reach and stay in these ranges.',
      bullets: [
        'Understand and master endgame mechanics',
        'Coordinate stable groups for consistent runs',
        'Build and improve sets progressively with support',
        'Access content that is usually hard to organize',
      ],
    },
    plan: {
      title: 'What we will do',
      lead: 'Boost 230-245 content in an organized way so more players can reach and stay in these ranges.',
      items: [
        {
          title: 'Dedicated 230-245 channel',
          text: 'Progress tracking, questions, mechanics, and support among active players.',
        },
        {
          title: 'Updated guides',
          text: 'Clear mechanics, set tips, and notes on recent changes.',
        },
        {
          title: 'Consistent activities',
          text: 'Regular steles and guided runs for players learning the content.',
        },
        {
          title: 'Gear rotation',
          text: 'Announcements of useful pieces so gear circulates and closes sets.',
        },
      ],
    },
    guides: {
      title: 'Guides and learning',
      lead:
        'Lower the entry barrier so endgame no longer feels distant or locked behind fixed groups.',
      steps: [
      ],
      dungeonTitle: 'Dungeon guides',
      dungeonLead:
        'Reusable structure for new dungeons: summary, monsters, boss, mechanics, steles, and drops.',
      dungeons: dungeonGuides,
    },
    bosses: {
      title: '230 Bosses (first stage)',
      lead: 'Initial set for mechanics and guided practice. Can expand to 240-245.',
      guideCta: 'Open related guide',
      items: [
        {
          id: 180,
          name: 'Destroyer Dungeon',
          image: '/wakassets/bossIllustrations/180.png',
          guideId: 'ravageurs',
          mechanics: ['Role rotations by phase', 'Position control', 'Burst mitigation'],
        },
        {
          id: 176,
          name: 'Phytomorph Dungeon',
          image: '/wakassets/bossIllustrations/176.png',
          guideId: 'phytomorphes',
          mechanics: ['State management', 'Target order', 'Line of sight'],
        },
        {
          id: 178,
          name: 'Demhorribles Dungeon',
          image: '/wakassets/bossIllustrations/178.png',
          guideId: 'demhorribles',
          mechanics: ['Summon cleanup', 'Critical debuffs', 'Revive timing'],
        },
        {
          id: 177,
          name: 'Voidivion Dungeon',
          image: '/wakassets/bossIllustrations/177.png',
          guideId: 'vaciantes',
          mechanics: ['Map control', 'Key turn rotations', 'DPS sync'],
        },
        {
          id: 179,
          name: 'Streye Dungeon',
          image: '/wakassets/bossIllustrations/179.png',
          guideId: 'egares',
          mechanics: ['Mental management', 'Room triggers', 'Survival phases'],
        },
        {
          id: 187,
          name: 'Abyssal Creeper Dungeon',
          image: '/wakassets/bossIllustrations/187.png',
          guideId: 'poisseux-abyssaux',
          mechanics: ['Zone control', 'State management', 'Target priority'],
        },
        {
          id: 188,
          name: 'Foggernaut Dungeon',
          image: '/wakassets/bossIllustrations/188.png',
          guideId: 'steamers',
          mechanics: ['Stasis reserve', 'Positioning vs zones', 'Mekano control'],
        },
        {
          id: 197,
          name: 'Ferociraptor Dungeon',
          image: '/wakassets/bossIllustrations/197.png',
          guideId: 'ferociraptor',
          mechanics: ['Guide in progress'],
        },
        {
          id: 198,
          name: 'Primount Dungeon',
          image: '/wakassets/bossIllustrations/198.png',
          guideId: 'primount',
          mechanics: ['Guide in progress'],
        },
        {
          id: 199,
          name: 'Starvannah Dungeon',
          image: '/wakassets/bossIllustrations/199.png',
          guideId: 'starvannah',
          mechanics: ['Guide in progress'],
        },
        {
          id: 200,
          name: 'Bworkana Clan Dungeon',
          image: '/wakassets/bossIllustrations/200.png',
          guideId: 'bworkana-clan',
          mechanics: ['Guide in progress'],
        },
        {
          id: 201,
          name: 'Nox Machines Dungeon',
          image: '/wakassets/bossIllustrations/201.png',
          guideId: 'nox-machines',
          mechanics: ['Guide in progress'],
        },
        {
          id: 202,
          name: 'Timeless Theater Dungeon',
          image: '/wakassets/bossIllustrations/202.png',
          guideId: 'timeless-theater',
          mechanics: ['Guide in progress'],
        },
        {
          id: 203,
          name: 'Heart of Nox Clock Dungeon',
          image: '/wakassets/bossIllustrations/203.png',
          guideId: 'heart-of-nox-clock',
          mechanics: ['Guide in progress'],
        },
      ],
    },
    stelesHub: {
      title: 'Intervention Stele Guides',
      lead: 'Central reference for stele mechanics across dungeons.',
      guides: [
        {
          id: 'anathar',
          name: 'Anathar',
          keyRequired: 'Anathar Intervention Key',
          appliesTo: ['Ravagers', 'Lost Ones', 'Demhorribles', 'Voidivion', 'Phytomorph'],
          overview: [
            'Mark of Anathar usually targets the farthest player.',
            'Anathar observes the marked player and replicates up to 4 different actions at the start of its next turn.',
            'If fewer than 4 actions are observed, it casts Demonic Hellfire and scales with lower action count.',
          ],
          table: {
            actionHeader: 'Marked player action',
            effectHeader: 'Replicated Anathar effect',
            rows: [
              { action: 'Remove MP', effect: 'Removes MP from combatants based on line of sight.' },
              { action: 'Remove AP', effect: 'Removes AP from combatants in line of sight.' },
              { action: 'Give MP', effect: 'Gives MP to combatants (except Anathar).' },
              { action: 'Give AP', effect: 'Grants Willpower to the 3 nearest combatants.' },
              { action: 'Heal', effect: 'Heals % missing HP to the 3 nearest combatants.' },
              { action: 'Give armor', effect: 'Gives armor to the 3 farthest combatants.' },
              { action: 'Remove dodge', effect: 'Removes dodge from the 3 nearest combatants.' },
              { action: 'Increase dodge', effect: 'Gives dodge to the 3 farthest combatants.' },
              { action: 'Remove lock', effect: 'Removes lock from combatants in contact.' },
              { action: 'Increase lock', effect: 'Gives lock to non-contact combatants.' },
              { action: 'Push', effect: 'Pushes aligned allies at turn start.' },
              { action: 'Pull', effect: 'Pulls aligned allies at turn start.' },
              { action: 'Swap places', effect: 'Swaps with the farthest combatant.' },
              { action: 'Teleport', effect: 'Teleports enemies to random positions.' },
              { action: 'Fire damage', effect: 'Deals fire damage to farthest combatant.' },
              { action: 'Air damage', effect: 'Deals air damage to combatants farther than 7 cells.' },
              { action: 'Earth damage', effect: 'Deals earth damage to combatants within 3 cells.' },
              { action: 'Water damage', effect: 'Deals water AoE around combatants.' },
            ],
          },
          dungeonEffects: [
            'Ravagers: leaves a Residue on death.',
            'Lost Ones: must also be brought to 1 HP.',
            'Demhorribles: gains Life Link and adds HP to shared pool.',
            'Voidivion: gains Void Aura similar to boss.',
            'Phytomorph: gains Incorruptible like Vaalenthia.',
          ],
          tips: [
            'On marked turns, avoid unnecessary action types to reduce dangerous replications.',
            '“Combatant” includes players, mobs, and boss units.',
          ],
        },
        {
          id: 'cire-momore',
          name: 'Cire Momore',
          keyRequired: 'Cire Momore Intervention Key',
          appliesTo: ['Foggernaut', 'Abyssal Creeper'],
          overview: [
            'Starts in the upper-left corner (Foggernaut and Abyssal Creeper dungeons).',
            'Starts with 3 MP and gains +2 MP each turn.',
            'When it casts Soul Siphon and absorbs a flower, its MP is reset.',
            'When Cire Momore is summoned, one Asesirena/Stasis Unit leaves the fight.',
          ],
          table: {
            actionHeader: 'Element',
            effectHeader: 'Detail',
            rows: [
              { action: 'Flowers', effect: 'When a mob dies (except Raeliss/Sir Kurn Flex), a flower appears. A player must step on it to collect it.' },
              { action: 'Flower buff', effect: 'Grants +4 AP and +2 MP. Buffs do not stack.' },
              { action: 'Soul Siphon (with flower)', effect: 'You lose the flower and Cire Momore resets its MP.' },
              { action: 'Soul Siphon (no flower)', effect: 'You lose 4000 max HP (stacking).' },
              { action: 'Soul Siphon x3', effect: 'If a player is hit by 3 Soul Siphons, they die instantly (no K.O.).' },
              { action: 'Fatality', effect: 'Stasis line damage, 2-6 range.' },
              { action: 'Rompespanima', effect: 'Consistent Stasis damage, 1-12 range, up to 2 casts per turn.' },
              { action: 'Soul Siphon', effect: 'Melee area. Absorbs flowers, resets MP, and applies max-HP loss.' },
            ],
          },
          dungeonEffects: [
            'Do not end your turn in melee range of Cire Momore.',
            'Clear mobs quickly to spawn flowers and assign pickups in advance.',
          ],
          tips: [
            'Hit and reposition each turn; do not stay exposed near the boss.',
            'Use summons or blockers to disrupt pathing and absorb casts on controlled targets.',
            'Track players already at 2 Soul Siphons; they cannot risk a third hit.',
          ],
        },
      ],
    },
    schedule: {
      title: 'Suggested activities',
      lead: 'Suggested cadence to keep progression and mechanics practice consistent.',
      items: [
        {
          name: 'Ereboria',
          focus: 'Mechanics, roles, and rotations',
          cadence: '1-2 times per week',
        },
        {
          name: 'Fab huritu',
          focus: 'Practice with mixed teams',
          cadence: 'Weekly',
        },
        {
          name: 'Golems',
          focus: 'Fast mechanics training',
          cadence: 'Rotating',
        },
      ],
    },
    classes: {
      title: 'Classes',
      lead: 'Add classes from admin: name, short recommendations, and links to suggested sets.',
      items: [],
    },
    gear: {
      title: 'Gear rotation',
      lead:
        'When useful pieces are available, we will announce them for review in guild chests.',
      note: 'The goal is to keep gear circulating and help more players complete sets.',
    },
    form: {
      title: 'Interest form',
      lead: 'Share your info so we can coordinate roles, schedules, and support needs.',
      note:
        'The form works locally. If Supabase is configured, it will be stored in the database.',
      warning: 'Supabase is not configured. Entries stay local.',
      fields: {
        name: 'In-game name',
        role: 'Main role',
        level: 'Current level range',
        availability: 'Availability and days',
        contact: 'Contact (Discord)',
        build: 'Build / current set details',
        interestBosses: 'Interested bosses',
        interestActivities: 'Interested classes',
        interestGuides: 'Interested guides',
        item: 'Requested item',
        slot: 'Slot / type',
        priority: 'Priority',
        source: 'Boss / dungeon',
        notes: 'Notes',
      },
      placeholders: {
        name: 'Example: Huachimango',
        role: 'Example: Tank, DPS, Healer',
        availability: 'Example: Tue Thu 21:00-23:00',
        contact: 'Example: user#0000',
        build: 'Example: crit build focused on range, missing resists',
      },
      weekDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      timeRange: 'Time range',
      from: 'From',
      to: 'To',
      levelOptions: ['215-220', '221-229', '230-239', '240-245'],
      selectPlaceholder: 'Select',
      addItem: 'Add item',
      removeItem: 'Remove',
      priorities: ['High', 'Medium', 'Low'],
      submit: 'Send interest',
      success: 'Done. Your interest is recorded for dungeons.',
      error: 'Something went wrong. Check configuration or try later.',
    },
    interests: {
      title: 'Recorded interests',
      loading: 'Loading interests...',
      empty: 'No entries yet for this section.',
      interested: 'interested',
      needHelp: 'need help',
      andMore: '+ {count} more',
      gearRequests: 'Gear requests',
      bossesTitle: 'Interest by boss',
      activitiesTitle: 'Interest by class',
      guidesTitle: 'Interest by guide',
      gearTitle: 'Requested items',
      gearEmpty: 'No items registered yet.',
    },
    summary: {
      title: 'In summary',
      highlights: [
        'The issue is not lack of content but coordination and access',
        'We connect prepared players with those who want to learn',
        'Consistent organization makes 230-245 more reachable',
      ],
      fullTitle: 'Full announcement text',
      fullText: [
        'Progress on the neo servers was clear. Many reached higher ranges, others leveled alts, and today we have a strong base above 215-220.',
        '230-245 often feels disorganized or reserved for a few. People want to run it but lack fixed groups or mechanics knowledge.',
        'We want to structure it better so more players can reach and stay there, with clear guides and constant coordination.',
        'If we have prepared players and players who want to learn, the logic is to connect both.',
      ],
    },
    footer: 'Organized progress, together.',
  },
} as const satisfies AppContent


export const uiLabels = {
  monstres: { fr: 'Monstres', en: 'Monsters', es: 'Monstruos' },
  boss: { fr: 'Boss', en: 'Boss', es: 'Jefe' },
  mecaniques: { fr: 'Mecaniques et strategie', en: 'Mechanics and Strategy', es: 'Mecánicas y Estrategia' },
  planDonjon: { fr: 'Plan du donjon', en: 'Dungeon Plan', es: 'Plano de la Mazmorra' },
  steles: { fr: 'Steles', en: 'Steles', es: 'Estelas' },
  drops: { fr: 'Drops', en: 'Drops', es: 'Botín' },
  croupier: { fr: 'Croupier', en: 'Croupier', es: 'Crupier' },
  passifArtillerie: { fr: "Passifs d'artillerie", en: 'Artillery Passives', es: 'Pasivos de Artillería' },
  protoBoss: { fr: 'Proto-boss', en: 'Proto-boss', es: 'Proto-jefe' },
  cristalStasis: { fr: 'Cristal de Stasis', en: 'Stasis Crystal', es: 'Cristal de Estasis' },
  dropsMonstres: { fr: 'Drops des monstres', en: 'Monster Drops', es: 'Botín de Monstruos' },
  dropsBoss: { fr: 'Drops du boss', en: 'Boss Drops', es: 'Botín del Jefe' },
  passif: { fr: 'Passif:', en: 'Passive:', es: 'Pasivo:' },
} as const
