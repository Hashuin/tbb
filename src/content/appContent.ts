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
        es: 'Limita el daÃ±o directo sobre las Unidades Estasificadoras.',
      },
      {
        fr: 'Passif rouge: ne pas rester en melee.',
        en: 'Red passive: do not stay in melee.',
        es: 'Pasivo rojo: no permanezcas en combate cuerpo a cuerpo.',
      },
      {
        fr: 'Passif vert: ne pas infliger de degats directs.',
        en: 'Green passive: do not deal direct damage.',
        es: 'Pasivo verde: no inflige daÃ±o directo.',
      },
      {
        fr: "Passif violet: ne pas etre proche (3 cases) d'un allie.",
        en: "Purple passive: do not be close (3 cells) to an ally.",
        es: "Pasivo pÃºrpura: no estÃ©s cerca (3 celdas) de un aliado.",
      },
    ],
    monsters: [
      {
        name: { fr: "Artilleur d'elite", en: "Elite Gunner", es: "Artillero de Ã©lite" },
        level: { fr: 'Niv. 224 (Stasis 2)', en: 'Lvl. 224 (Stasis 2)', es: 'Niv. 224 (Estasis 2)' },
        bonus: { fr: 'Bonus de Velocite: 50% Dommages infliges', en: 'Speed Bonus: 50% Increased Damage', es: 'BonificaciÃ³n de Velocidad: 50% DaÃ±o Aumentado' },
        description: { fr: "Il possede 2 sorts, 1 passif et il n'a pas de faiblesse specifique.", en: "Has 2 spells, 1 passive and no specific weakness.", es: "Tiene 2 hechizos, 1 pasivo y no tiene debilidad especÃ­fica." },
        spells: [
          {
            name: { fr: 'Explosis', en: 'Explosis', es: 'Explosis' },
            effect: { fr: 'Sort de zone. Inflige des degats Stasis et rebondit X fois a 3 cases des cibles.', en: 'AoE spell. Deals Stasis damage and bounces X times to targets within 3 cells.', es: 'Hechizo de Ã¡rea. Inflige daÃ±o Estasis y rebota X veces a objetivos a 3 celdas.' },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            range: { fr: '2-10 PO, en ligne', en: '2-10 Range, line', es: '2-10 PO, en lÃ­nea' },
            limit: { fr: '1/cible, 3/tour', en: '1/target, 3/turn', es: '1/objetivo, 3/turno' },
          },
          {
            name: { fr: 'Bombardement Stasis', en: 'Stasis Bombardment', es: 'Bombardeo Estasis' },
            tag: { fr: 'Ultime', en: 'Ultimate', es: 'Definitiva' },
            effect: { fr: 'Sort de zone en cercle de taille 2 autour de chaque cible. Cible aleatoirement X ennemis.', en: 'AoE spell in size-2 circle around each target. Randomly targets X enemies.', es: 'Hechizo de Ã¡rea en cÃ­rculo tamaÃ±o 2 alrededor de cada objetivo. Apunta aleatoriamente a X enemigos.' },
            cost: { fr: '0 PA', en: '0 AP', es: '0 PA' },
            limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
          },
        ],
        passive: { fr: "A chaque rebond effectue, +1 reserve de stasis. A la mort, inflige des degats stasis en cercle de taille 2.", en: "Each bounce gives +1 Stasis Reserve. On death, deals Stasis damage in size-2 circle.", es: "Cada rebote da +1 Reserva de Estasis. Al morir, inflige daÃ±o Estasis en cÃ­rculo tamaÃ±o 2." },
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
          { fr: 'Critique 35%', en: 'Critical 35%', es: 'CrÃ­tico 35%' },
          { fr: 'Volonte 20', en: 'Willpower 20', es: 'Voluntad 20' },
          { fr: 'Resist 74% (610)', en: 'Resist 74% (610)', es: 'Resist 74% (610)' },
        ],
      },
      {
        name: { fr: 'Mekano', en: 'Mekano', es: 'Mekano' },
        level: { fr: 'Niv. 218 (Stasis 2)', en: 'Lvl. 218 (Stasis 2)', es: 'Niv. 218 (Estasis 2)' },
        bonus: { fr: 'Bonus de Velocite: 2 PM', en: 'Speed Bonus: 2 MP', es: 'BonificaciÃ³n de Velocidad: 2 PM' },
        description: { fr: "Il possede 3 sorts, 1 passif et il n'a pas de faiblesse specifique.", en: "Has 3 spells, 1 passive and no specific weakness.", es: "Tiene 3 hechizos, 1 pasivo y no tiene debilidad especÃ­fica." },
        spells: [
          {
            name: { fr: 'Remontage', en: 'Wind-up', es: 'Remonte' },
            effect: { fr: "Soigne et donne de l'armure a un allie (20 % PdV max du Mekano).", en: "Heals and gives armor to an ally (20% of Mekano's max HP).", es: "Cura y da armadura a un aliado (20% de PV mÃ¡x. del Mekano)." },
            cost: { fr: '3 PA', en: '3 AP', es: '3 PA' },
            range: { fr: '1-2 PO', en: '1-2 Range', es: '1-2 PO' },
            limit: { fr: '1/cible, 3/tour', en: '1/target, 3/turn', es: '1/objetivo, 3/turno' },
          },
          {
            name: { fr: 'Coup de clef', en: 'Wrench Strike', es: 'Golpe de llave' },
            effect: { fr: 'Inflige des degats Stasis.', en: 'Deals Stasis damage.', es: 'Inflige daÃ±o Estasis.' },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            range: { fr: '1 PO', en: '1 Range', es: '1 PO' },
            limit: { fr: '1/cible, 3/tour', en: '1/target, 3/turn', es: '1/objetivo, 3/turno' },
          },
          {
            name: { fr: 'Transmission', en: 'Transmission', es: 'TransmisiÃ³n' },
            tag: { fr: 'Ultime', en: 'Ultimate', es: 'Definitiva' },
            effect: { fr: "Maximise la reserve de stasis d'un allie (boss compris) et donne un bonus de X fois 10 % Di (1 tour).", en: "Maximizes an ally's Stasis Reserve (boss included) and gives a bonus of X times 10% increased damage (1 turn).", es: "Maximiza la Reserva de Estasis de un aliado (jefe incluido) y da una bonificaciÃ³n de X veces 10% daÃ±o aumentado (1 turno)." },
            cost: { fr: '0 PA', en: '0 AP', es: '0 PA' },
          },
        ],
        passive: { fr: "A chaque don d'armure a un allie, +1 reserve de stasis. En fin de tour, pose X mines de stasis. A la mort, degats stasis autour de chaque mine.", en: "Each armor given to an ally gives +1 Stasis Reserve. End of turn, places X Stasis mines. On death, Stasis damage around each mine.", es: "Cada armadura dada a un aliado da +1 Reserva de Estasis. Fin de turno, coloca X minas de Estasis. Al morir, daÃ±o Estasis alrededor de cada mina." },
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
          { fr: 'Critique 15%', en: 'Critical 15%', es: 'CrÃ­tico 15%' },
          { fr: 'Volonte 35', en: 'Willpower 35', es: 'Voluntad 35' },
          { fr: 'Resist 76% (650)', en: 'Resist 76% (650)', es: 'Resist 76% (650)' },
        ],
      },
      {
        name: { fr: 'Unite stasificatrice', en: 'Stasis Unit', es: 'Unidad estasificadora' },
        level: { fr: 'Niv. 220 (Stasis 2)', en: 'Lvl. 220 (Stasis 2)', es: 'Niv. 220 (Estasis 2)' },
        bonus: { fr: 'Bonus de Velocite: 50 Resistance Elementaire', en: 'Speed Bonus: 50 Elemental Resistance', es: 'BonificaciÃ³n de Velocidad: 50 Resistencia Elemental' },
        description: { fr: "Il possede 2 sorts, 1 passif et il n'a pas de faiblesse specifique.", en: "Has 2 spells, 1 passive and no specific weakness.", es: "Tiene 2 hechizos, 1 pasivo y no tiene debilidad especÃ­fica." },
        spells: [
          {
            name: { fr: 'Deplacement tactique', en: 'Tactical Displacement', es: 'Desplazamiento tÃ¡ctico' },
            effect: { fr: 'Passe derriere la cible et inflige des degats Stasis.', en: 'Moves behind the target and deals Stasis damage.', es: 'Pasa detrÃ¡s del objetivo e inflige daÃ±o Estasis.' },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            range: { fr: '3-5 PO, en ligne, sans ligne de vue', en: '3-5 Range, line, no LoS', es: '3-5 PO, en lÃ­nea, sin lÃ­nea de visiÃ³n' },
            limit: { fr: '1/cible, 2/tour', en: '1/target, 2/turn', es: '1/objetivo, 2/turno' },
          },
          {
            name: { fr: 'Decharge Stasis', en: 'Stasis Discharge', es: 'Descarga Estasis' },
            effect: { fr: 'Inflige des degats Stasis et retire 4 PM.', en: 'Deals Stasis damage and removes 4 MP.', es: 'Inflige daÃ±o Estasis y quita 4 PM.' },
            cost: { fr: '3 PA', en: '3 AP', es: '3 PA' },
            range: { fr: '0 PO, cercle taille 1+X', en: '0 Range, circle size 1+X', es: '0 PO, cÃ­rculo tamaÃ±o 1+X' },
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
        passive: { fr: "A chaque degat direct subi, +1 reserve de stasis. A la mort, retire 100 PM a l'attaquant.", en: "Each direct damage taken gives +1 Stasis Reserve. On death, removes 100 MP from attacker.", es: "Cada daÃ±o directo recibido da +1 Reserva de Estasis. Al morir, quita 100 PM al atacante." },
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
          { fr: 'Critique 15%', en: 'Critical 15%', es: 'CrÃ­tico 15%' },
          { fr: 'Volonte 35', en: 'Willpower 35', es: 'Voluntad 35' },
          { fr: 'Resist 81% (750)', en: 'Resist 81% (750)', es: 'Resist 81% (750)' },
        ],
      },
    ],
    boss: {
      name: { fr: 'Sir Comte Flex', en: 'Sir Count Flex', es: 'Sir Conde Flex' },
      level: { fr: 'Niv. 233 (Stasis 2)', en: 'Lvl. 233 (Stasis 2)', es: 'Niv. 233 (Estasis 2)' },
      description: { fr: "Il possede 6 sorts et 1 passif d'artillerie aleatoire qui change tous les 2 tours.", en: "Has 6 spells and 1 random artillery passive that changes every 2 turns.", es: "Tiene 6 hechizos y 1 pasivo de artillerÃ­a aleatorio que cambia cada 2 turnos." },
      spells: [
        {
          name: { fr: 'Tir automatique', en: 'Automatic Fire', es: 'Disparo automÃ¡tico' },
          effect: { fr: 'Inflige des degats Stasis.', en: 'Deals Stasis damage.', es: 'Inflige daÃ±o Estasis.' },
          cost: { fr: '3 PA', en: '3 AP', es: '3 PA' },
          range: { fr: '5-âˆž PO', en: '5-âˆž Range', es: '5-âˆž PO' },
          limit: { fr: '1/cible, 2/tour', en: '1/target, 2/turn', es: '1/objetivo, 2/turno' },
        },
        {
          name: { fr: 'Attaque blindee', en: 'Armored Attack', es: 'Ataque blindado' },
          effect: { fr: 'Inflige des degats Stasis et pousse de 2 cases.', en: 'Deals Stasis damage and pushes 2 cells.', es: 'Inflige daÃ±o Estasis y empuja 2 celdas.' },
          cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
          range: { fr: '2-3 PO', en: '2-3 Range', es: '2-3 PO' },
          limit: { fr: '1/cible, 2/tour', en: '1/target, 2/turn', es: '1/objetivo, 2/turno' },
        },
        {
          name: { fr: 'Perforation', en: 'Perforation', es: 'PerforaciÃ³n' },
          effect: { fr: 'Inflige des degats Stasis, retire 4 PM et stabilise la cible.', en: 'Deals Stasis damage, removes 4 MP and stabilizes the target.', es: 'Inflige daÃ±o Estasis, quita 4 PM y estabiliza al objetivo.' },
          cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
          range: { fr: '2 PO', en: '2 Range', es: '2 PO' },
          limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
        },
        {
          name: { fr: 'Deploiement', en: 'Deployment', es: 'Despliegue' },
          effect: { fr: "Se teleporte sur la cible la plus eloignee et inflige des degats Stasis. Recharge 2 tours.", en: "Teleports to the furthest target and deals Stasis damage. 2-turn cooldown.", es: "Se teletransporta al objetivo mÃ¡s lejano e inflige daÃ±o Estasis. Recarga 2 turnos." },
          cost: { fr: '0 PA', en: '0 AP', es: '0 PA' },
          range: { fr: 'Cercle taille 3', en: 'Circle size 3', es: 'CÃ­rculo tamaÃ±o 3' },
        },
        {
          name: { fr: "Canon d'assaut", en: 'Assault Cannon', es: 'CaÃ±Ã³n de asalto' },
          effect: { fr: 'Inflige de lourds degats Stasis en ligne epaisse de 3 cases.', en: 'Deals heavy Stasis damage in a 3-cell-wide line.', es: 'Inflige daÃ±o Estasis intenso en lÃ­nea gruesa de 3 celdas.' },
          cost: { fr: '0 PA', en: '0 AP', es: '0 PA' },
          limit: { fr: 'Lance au debut de chaque tour', en: 'Casts at start of each turn', es: 'Lanza al inicio de cada turno' },
        },
        {
          name: { fr: 'Le compte est bon', en: 'Perfect Aim', es: 'Cuenta exacta' },
          tag: { fr: 'Ultime', en: 'Ultimate', es: 'Definitiva' },
          effect: { fr: "Sort de zone variable dependant du passif d'artillerie. Inflige des degats Stasis aux adversaires et autour d'eux.", en: "Variable AoE spell depending on artillery passive. Deals Stasis damage to opponents and around them.", es: "Hechizo de Ã¡rea variable segÃºn pasivo de artillerÃ­a. Inflige daÃ±o Estasis a los adversarios y alrededor de ellos." },
          cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
        },
      ],
      passives: [
        {
          name: { fr: 'Artillerie de demolition', en: 'Demolition Artillery', es: 'ArtillerÃ­a de DemoliciÃ³n' },
          effect: { fr: "En debut de tour, +1 reserve de stasis par ennemi a 3 cases. Pose X mines. 'Le compte est bon' devient une croix infinie.", en: "At start of turn, +1 Stasis Reserve per enemy within 3 cells. Places X mines. 'Perfect Aim' becomes an infinite cross.", es: "Al inicio del turno, +1 Reserva de Estasis por enemigo a 3 celdas. Coloca X minas. 'Cuenta Exacta' se convierte en cruz infinita." },
          notes: [{ fr: 'Bug actuel: le boss gagne 2 reserves de stasis par ennemi.', en: 'Current bug: boss gains 2 Stasis Reserves per enemy.', es: 'Bug actual: el jefe gana 2 Reservas de Estasis por enemigo.' }],
        },
        {
          name: { fr: 'Artillerie perforante', en: 'Piercing Artillery', es: 'ArtillerÃ­a Perforante' },
          effect: { fr: "A chaque rebond, +1 reserve de stasis. Degats rebondissent X fois. 'Le compte est bon' devient un anneau 3-5.", en: "Each bounce gives +1 Stasis Reserve. Damage bounces X times. 'Perfect Aim' becomes a 3-5 ring.", es: "Cada rebote da +1 Reserva de Estasis. El daÃ±o rebota X veces. 'Cuenta Exacta' se convierte en anillo 3-5." },
          notes: [],
        },
        {
          name: { fr: 'Artillerie lourde', en: 'Heavy Artillery', es: 'ArtillerÃ­a Pesada' },
          effect: { fr: "A chaque degat direct subi, +1 reserve de stasis. Retire 1+X PM. 'Le compte est bon' devient un cercle taille 3.", en: "Each direct damage taken gives +1 Stasis Reserve. Removes 1+X MP. 'Perfect Aim' becomes a size-3 circle.", es: "Cada daÃ±o directo recibido da +1 Reserva de Estasis. Quita 1+X PM. 'Cuenta Exacta' se convierte en cÃ­rculo tamaÃ±o 3." },
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
        { fr: 'Critique 35%', en: 'Critical 35%', es: 'CrÃ­tico 35%' },
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
            es: "Cada monstruo y el jefe tienen el pasivo Reserva de Estasis. Aumenta a la muerte de un monstruo o por acciones especÃ­ficas.",
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
            es: "El jefe comienza cada turno con 'CaÃ±Ã³n de Asalto' luego su Habilidad Definitiva si la tiene.",
          },
          {
            fr: "Votre objectif est de limiter le nombre d'Ultimes en tuant un maximum d'ennemis le meme tour en respectant son passif.",
            en: "Your goal is to limit Ultimates by killing max enemies in one turn while respecting its passive.",
            es: "Tu objetivo es limitar las Habilidades Definitivas matando mÃ¡ximo enemigos en un turno respetando su pasivo.",
          },
          {
            fr: "Attention au positionnement: l'Ultime fait de gros degats sur la zone autour des cibles.",
            en: "Watch positioning: the Ultimate deals heavy damage on the area around targets.",
            es: "Cuidado con el posicionamiento: la Habilidad Definitiva inflige daÃ±o severo en el Ã¡rea alrededor de los objetivos.",
          },
          {
            fr: "Tous les 2 tours a partir du tour 4, il utilise 'Deploiement' et se teleporte sur la cible la plus loin.",
            en: "Every 2 turns from turn 4, it uses 'Deployment' and teleports to the furthest target.",
            es: "Cada 2 turnos a partir del turno 4, usa 'Despliegue' y se teletransporta al objetivo mÃ¡s lejano.",
          },
        ],
      },
    ],
    plan: { fr: 'Cliquer ici pour derouler le plan du donjon.', en: 'Click here to unfold the dungeon plan.', es: 'Haz clic aquÃ­ para desplegar el plan de la mazmorra.' },
    steles: {
      lead: { 
        fr: 'Ce donjon possede 4 steles, une par salle. Chaque stele ajoute un proto-boss a la salle et au combat final.',
        en: 'This dungeon has 4 steles, one per room. Each stele adds a proto-boss to the room and final fight.',
        es: 'Esta mazmorra tiene 4 estelas, una por sala. Cada estela aÃ±ade un proto-jefe a la sala y al combate final.',
      },
      notes: [
        {
          fr: 'Si une stele est activee, le boss final invoque le proto-boss (jusqua 5 boss).',
          en: 'If a stele is activated, the final boss summons the proto-boss (up to 5 bosses).',
          es: 'Si una estela estÃ¡ activada, el jefe final invoca el proto-jefe (hasta 5 jefes).',
        },
        {
          fr: "Pour ouvrir les steles: 8 ressources d'Ereboria (Masque du forban, Substance de mort-brules, Poil roux).",
          en: "To open steles: 8 Ereboria resources (Rogue Mask, Deathburn Substance, Red Hair).",
          es: "Para abrir estelas: 8 recursos de Ereboria (MÃ¡scara de PÃ­caro, Sustancia de Quemadura Mortal, Pelo Rojo).",
        },
        {
          fr: 'Chaque proto-boss ajoute 2 equipements a la table de loot et 10 Sioupere-Glou infernale.',
          en: 'Each proto-boss adds 2 equipment to the loot table and 10 Infernal Sioupere-Glou.',
          es: 'Cada proto-jefe aÃ±ade 2 equipamientos a la tabla de botÃ­n y 10 Sioupere-Glou Infernal.',
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
          description: { fr: "Il possede 2 sorts, 1 passif et il n'a pas de faiblesse specifique.", en: "Has 2 spells, 1 passive and no specific weakness.", es: "Tiene 2 hechizos, 1 pasivo y no tiene debilidad especÃ­fica." },
          spells: [
            {
              name: { fr: 'Deflagration stasifiee', en: 'Stasified Deflagration', es: 'DeflagraciÃ³n estasificada' },
              effect: { fr: 'Inflige de lourds degats Stasis en ligne epaisse de 3 cases.', en: 'Deals heavy Stasis damage in a 3-cell-wide line.', es: 'Inflige daÃ±o Estasis intenso en lÃ­nea gruesa de 3 celdas.' },
              cost: { fr: '0 PA', en: '0 AP', es: '0 PA' },
              limit: { fr: 'Lance au debut de chaque tour', en: 'Casts at start of each turn', es: 'Lanza al inicio de cada turno' },
            },
            {
              name: { fr: "Jet d'encre stasifie", en: 'Stasified Ink Jet', es: 'Chorro de tinta estasificado' },
              effect: { fr: 'Inflige des degats Stasis et retire 3 PM et 2 PO.', en: 'Deals Stasis damage and removes 3 MP and 2 Range.', es: 'Inflige daÃ±o Estasis y quita 3 PM y 2 Rango.' },
              cost: { fr: '2 PA', en: '2 AP', es: '2 PA' },
              range: { fr: 'Croix taille 1, âˆž PO', en: 'Cross size 1, âˆž Range', es: 'Cruz tamaÃ±o 1, âˆž PO' },
              limit: { fr: '1/cible, 3/tour', en: '1/target, 3/turn', es: '1/objetivo, 3/turno' },
            },
          ],
          passive: { fr: "Immunise si l'attaquant n'est pas aligne avec la case centrale. En fin de tour, se teleporte sur une case d'eau aleatoire.", en: "Immune if attacker is not aligned with central cell. End of turn, teleports to a random water cell.", es: "Inmune si el atacante no estÃ¡ alineado con la celda central. Fin de turno, se teletransporta a una celda de agua aleatoria." },
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
            { fr: 'Critique 25%', en: 'Critical 25%', es: 'CrÃ­tico 25%' },
            { fr: 'Volonte 30', en: 'Willpower 30', es: 'Voluntad 30' },
            { fr: 'Resist 75% (625)', en: 'Resist 75% (625)', es: 'Resist 75% (625)' },
          ],
        },
        {
          name: { fr: 'Protosquelette', en: 'Proto-Skeleton', es: 'Protoesqueleto' },
          description: { fr: "Il possede 2 sorts et il n'a pas de faiblesse specifique.", en: "Has 2 spells and no specific weakness.", es: "Tiene 2 hechizos y no tiene debilidad especÃ­fica." },
          spells: [
            {
              name: { fr: 'Courroux des anciens stasifie', en: 'Stasified Ancient Wrath', es: 'CÃ³lera de los antiguos estasificada' },
              effect: { fr: 'Inflige de lourds degats Stasis en cercle taille 4.', en: 'Deals heavy Stasis damage in size-4 circle.', es: 'Inflige daÃ±o Estasis intenso en cÃ­rculo tamaÃ±o 4.' },
              cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
              range: { fr: '0 PO', en: '0 Range', es: '0 PO' },
              limit: { fr: 'Lance au debut de chaque tour', en: 'Casts at start of each turn', es: 'Lanza al inicio de cada turno' },
            },
            {
              name: { fr: 'Jet de flammes stasifie', en: 'Stasified Flame Jet', es: 'Chorro de llamas estasificado' },
              effect: { fr: 'Inflige des degats Stasis en croix de taille 1.', en: 'Deals Stasis damage in size-1 cross.', es: 'Inflige daÃ±o Estasis en cruz tamaÃ±o 1.' },
              cost: { fr: '3 PA', en: '3 AP', es: '3 PA' },
              range: { fr: 'âˆž PO', en: 'âˆž Range', es: 'âˆž PO' },
              limit: { fr: '1/cible, 3/tour', en: '1/target, 3/turn', es: '1/objetivo, 3/turno' },
            },
          ],
          passive: '',
          notes: [
            { fr: "Dans la chambre d'experimentation, deux lasers bloquant la ligne de vue changent tous les 2 tours.", en: "In the experimentation chamber, two line-of-sight blocking lasers change every 2 turns.", es: "En la cÃ¡mara de experimentaciÃ³n, dos lÃ¡seres que bloquean lÃ­nea de visiÃ³n cambian cada 2 turnos." },
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
            { fr: 'Critique 33%', en: 'Critical 33%', es: 'CrÃ­tico 33%' },
            { fr: 'Volonte 10', en: 'Willpower 10', es: 'Voluntad 10' },
            { fr: 'Resist 73% (595)', en: 'Resist 73% (595)', es: 'Resist 73% (595)' },
          ],
        },
        {
          name: { fr: 'Protogolem', en: 'Proto-Golem', es: 'Protogolem' },
          description: { fr: "Il possede 3 sorts, 1 passif et il n'a pas de faiblesse specifique.", en: "Has 3 spells, 1 passive and no specific weakness.", es: "Tiene 3 hechizos, 1 pasivo y no tiene debilidad especÃ­fica." },
          spells: [
            {
              name: { fr: 'Tremblement mecanique stasifie', en: 'Stasified Mechanical Quake', es: 'Temblor mecÃ¡nico estasificado' },
              effect: { fr: 'Inflige des degats Stasis en ligne de taille 7.', en: 'Deals Stasis damage in a size-7 line.', es: 'Inflige daÃ±o Estasis en lÃ­nea de tamaÃ±o 7.' },
              cost: { fr: '3 PA', en: '3 AP', es: '3 PA' },
              range: { fr: '2 PO', en: '2 Range', es: '2 PO' },
              limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
            },
            {
              name: { fr: 'Vent de liberte stasifie', en: 'Stasified Freedom Wind', es: 'Viento de libertad estasificado' },
              effect: { fr: 'Inflige des degats Stasis et repousse de 3 cases.', en: 'Deals Stasis damage and pushes 3 cells.', es: 'Inflige daÃ±o Estasis y empuja 3 celdas.' },
              cost: { fr: '0 PA', en: '0 AP', es: '0 PA' },
              range: { fr: 'Cercle taille 4', en: 'Circle size 4', es: 'CÃ­rculo tamaÃ±o 4' },
              limit: { fr: "1/tour, lance uniquement s'il ne peut pas se deplacer", en: "1/turn, casts only if can't move", es: "1/turno, lanza solo si no puede moverse" },
            },
            {
              name: { fr: 'Broyage stasifie', en: 'Stasified Crushing', es: 'Triturado estasificado' },
              effect: { fr: 'Inflige des degats Stasis.', en: 'Deals Stasis damage.', es: 'Inflige daÃ±o Estasis.' },
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
            { fr: 'Critique 22%', en: 'Critical 22%', es: 'CrÃ­tico 22%' },
            { fr: 'Volonte 20', en: 'Willpower 20', es: 'Voluntad 20' },
            { fr: 'Resist 71% (560)', en: 'Resist 71% (560)', es: 'Resist 71% (560)' },
          ],
        },
      ],
      crystals: {
        types: [
          { fr: 'Cristal de melee: Immunise aux degats a distance.', en: 'Melee Crystal: Immune to ranged damage.', es: 'Cristal de cuerpo a cuerpo: Inmune al daÃ±o a distancia.' },
          { fr: 'Cristal de distance: Immunise aux degats en melee.', en: 'Ranged Crystal: Immune to melee damage.', es: 'Cristal de distancia: Inmune al daÃ±o cuerpo a cuerpo.' },
          { fr: 'Cristal de resistance: Gagne 200 Resistance elementaire par degat direct subi.', en: 'Resistance Crystal: Gains 200 Elemental Resistance per direct damage taken.', es: 'Cristal de resistencia: Gana 200 Resistencia Elemental por daÃ±o directo recibido.' },
          { fr: "Cristal d'armure: 20 % PdV et armure de 200 % PdV max.", en: 'Armor Crystal: 20% HP and 200% max HP armor.', es: 'Cristal de armadura: 20% PV y armadura de 200% PV mÃ¡x.' },
        ],
        notes: [
          { fr: 'Un cristal devient inactif a 1 PV. Le Protogolem reactive un cristal par tour, sans doublon.', en: 'A crystal becomes inactive at 1 HP. Protogolem reactivates one crystal per turn, no duplicate.', es: 'Un cristal se vuelve inactivo a 1 PV. El Protogolem reactiva un cristal por turno, sin duplicado.' },
          { fr: "Si vous baissez les resistances, rendez les cristaux inactifs le meme tour. Attention au Mekano qui peut soigner.", en: "If you lower resistances, make crystals inactive the same turn. Watch out for Mekano who can heal.", es: "Si bajas las resistencias, deja los cristales inactivos el mismo turno. Cuidado con el Mekano que puede curar." },
          { fr: 'On peut faire le combat sans desactiver les cristaux: le bonus %Di cumulable compense.', en: 'Can do the fight without deactivating crystals: the stacking %increased damage compensates.', es: 'Puedes hacer el combate sin desactivar los cristales: el bonificaciÃ³n % daÃ±o aumentado acumulable compensa.' },
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
          es: "En modo Competitivo, el jefe puede soltar una Piedra de Aventura para ciertas sublimaciones Ã©picas/reliquias.",
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
        es: "Los monstruos son invulnerables si no tienes lÃ­nea de visiÃ³n cuando inflige daÃ±o.",
      },
      {
        fr: 'Attention aux Assassirenes: K.O. en un coup si vous etes en berserk.',
        en: 'Watch Assassirenes: one-shot KO if you are in berserk.',
        es: 'Ten cuidado con los Asesinatos: K.O. de un golpe si estÃ¡s en furia.',
      },
      {
        fr: "Avant de mettre de l'armure, eliminez les Cogneurs (ils volent toute l'armure).",
        en: "Before adding armor, eliminate Biters (they steal all armor).",
        es: "Antes de aÃ±adir armadura, elimina los Mordedores (roban toda la armadura).",
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
        es: 'Matar a Pohl da un bonificaciÃ³n acumulable de PA/PM (idealmente un DPS).',
      },
    ],
    monsters: [
      {
        name: { fr: 'Assassirene', en: 'Assassiren', es: 'Aseisirena' },
        level: { fr: 'Niv. 220 (Stasis 2)', en: 'Lvl. 220 (Stasis 2)', es: 'Niv. 220 (Estasis 2)' },
        bonus: { fr: 'Bonus de Velocite: 2 PM', en: 'Speed Bonus: 2 MP', es: 'BonificaciÃ³n de Velocidad: 2 PM' },
        description: { fr: "Il possede 2 sorts, 1 passif. Sa plus basse resistance est l'element air.", en: "Has 2 spells, 1 passive. Weakest resistance is Air.", es: "Tiene 2 hechizos, 1 pasivo. Su resistencia mÃ¡s baja es Aire." },
        spells: [
          {
            name: { fr: 'Baiser mortel', en: 'Deadly Kiss', es: 'Beso mortal' },
            effect: { fr: 'La cible tombe a 1 PdV. Si elle a moins de 50 % PdV ou est une invocation, elle meurt.', en: 'Target falls to 1 HP. If below 50% HP or is a summon, it dies.', es: 'El objetivo cae a 1 PV. Si tiene menos del 50% PV o es una invocaciÃ³n, muere.' },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            range: { fr: '1 PO', en: '1 Range', es: '1 PO' },
            limit: { fr: '1/cible', en: '1/target', es: '1/objetivo' },
          },
          {
            name: { fr: 'Rengaine abyssale', en: 'Abyssal Refrain', es: 'Estribillo abisal' },
            effect: { fr: "Donne de l'armure a un allie (20 % PdV max de l'assassirene).", en: "Gives armor to an ally (20% of Assassirene's max HP).", es: "Da armadura a un aliado (20% de PV mÃ¡x. del Asesinato)." },
            cost: { fr: '3 PA', en: '3 AP', es: '3 PA' },
            range: { fr: '1-4 PO, sans ligne de vue', en: '1-4 Range, no LoS', es: '1-4 PO, sin lÃ­nea de visiÃ³n' },
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
          { fr: 'Critique 8%', en: 'Critical 8%', es: 'CrÃ­tico 8%' },
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
        bonus: { fr: 'Bonus de Velocite: 50% Dommages infliges et -100 Resistance Dos', en: 'Speed Bonus: 50% Increased Damage and -100 Back Resistance', es: 'BonificaciÃ³n de Velocidad: 50% DaÃ±o Aumentado y -100 Resistencia de Espalda' },
        description: { fr: "Il possede 2 sorts, 1 passif et il n'a pas de faiblesse specifique.", en: "Has 2 spells, 1 passive and no specific weakness.", es: "Tiene 2 hechizos, 1 pasivo y no tiene debilidad especÃ­fica." },
        spells: [
          {
            name: { fr: 'Morsure poisseuse', en: 'Sticky Bite', es: 'Mordedura pegajosa' },
            effect: { fr: 'Inflige des degats feu et se soigne du meme montant.', en: 'Deals Fire damage and heals for the same amount.', es: 'Inflige daÃ±o Fuego y se cura la misma cantidad.' },
            cost: { fr: '3 PA', en: '3 AP', es: '3 PA' },
            range: { fr: '1 PO', en: '1 Range', es: '1 PO' },
            limit: { fr: '1/cible', en: '1/target', es: '1/objetivo' },
          },
          {
            name: { fr: 'Clameur abyssale', en: 'Abyssal Clamor', es: 'Clamor abisal' },
            effect: { fr: 'Inflige des degats air et pousse de 2 cases.', en: 'Deals Air damage and pushes 2 cells.', es: 'Inflige daÃ±o Aire y empuja 2 celdas.' },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            range: { fr: '2-5 PO, en ligne', en: '2-5 Range, line', es: '2-5 PO, en lÃ­nea' },
            limit: { fr: '1/cible', en: '1/target', es: '1/objetivo' },
          },
        ],
        passive: { fr: "Au debut du tour, echange de position avec l'adversaire le plus eloigne.", en: "At start of turn, swaps position with furthest opponent.", es: "Al inicio del turno, intercambia posiciÃ³n con el adversario mÃ¡s lejano." },
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
          { fr: 'Critique 35%', en: 'Critical 35%', es: 'CrÃ­tico 35%' },
          { fr: 'Volonte 20', en: 'Willpower 20', es: 'Voluntad 20' },
          { fr: 'Resist 71% (570)', en: 'Resist 71% (570)', es: 'Resist 71% (570)' },
        ],
      },
      {
        name: { fr: 'Cogneur abyssal', en: 'Abyssal Biter', es: 'Mordedor abisal' },
        level: { fr: 'Niv. 224 (Stasis 2)', en: 'Lvl. 224 (Stasis 2)', es: 'Niv. 224 (Estasis 2)' },
        bonus: { fr: 'Bonus de Velocite: 50% Dommages infliges', en: 'Speed Bonus: 50% Increased Damage', es: 'BonificaciÃ³n de Velocidad: 50% DaÃ±o Aumentado' },
        description: { fr: "Il possede 2 sorts. Ses plus basses resistances sont les elements feu et eau.", en: "Has 2 spells. Weakest resistances are Fire and Water.", es: "Tiene 2 hechizos. Sus resistencias mÃ¡s bajas son Fuego y Agua." },
        spells: [
          {
            name: { fr: 'Courant poisseux', en: 'Creepy Current', es: 'Corriente pegajosa' },
            effect: { fr: 'Inflige des degats eau et attire de 6 cases.', en: 'Deals Water damage and pulls 6 cells.', es: 'Inflige daÃ±o Agua y atrae 6 celdas.' },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            range: { fr: '2-7 PO, en ligne', en: '2-7 Range, line', es: '2-7 PO, en lÃ­nea' },
            limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
          },
          {
            name: { fr: 'Gloutonnerie', en: 'Gluttony', es: 'GlotonÃ­a' },
            effect: { fr: "Inflige des degats terre et vole toute l'armure de la cible et 100 Resistance elementaire (cumulable).", en: "Deals Earth damage and steals all target's armor and 100 Elemental Resistance (stacking).", es: "Inflige daÃ±o Tierra y roba toda la armadura del objetivo y 100 Resistencia Elemental (acumulable)." },
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
          { fr: 'Critique 25%', en: 'Critical 25%', es: 'CrÃ­tico 25%' },
          { fr: 'Volonte 30', en: 'Willpower 30', es: 'Voluntad 30' },
          { fr: 'Resist 76% (650)', en: 'Resist 76% (650)', es: 'Resist 76% (650)' },
          { fr: 'Resist 80% (730)', en: 'Resist 80% (730)', es: 'Resist 80% (730)' },
          { fr: 'Resist 78% (680)', en: 'Resist 78% (680)', es: 'Resist 78% (680)' },
        ],
      },
      {
        name: { fr: 'Pohl le poulpe (Invocation)', en: 'Pohl the Squid (Summon)', es: 'Pohl el pulpo (InvocaciÃ³n)' },
        level: { fr: 'Niv. 233 (Stasis 2)', en: 'Lvl. 233 (Stasis 2)', es: 'Niv. 233 (Estasis 2)' },
        bonus: '',
        description: { fr: 'Invocation. Ses plus basses resistances sont les elements terre et air.', en: 'Summon. Weakest resistances are Earth and Air.', es: 'InvocaciÃ³n. Sus resistencias mÃ¡s bajas son Tierra y Aire.' },
        spells: [
          {
            name: { fr: "Jet d'encre", en: 'Ink Jet', es: 'Chorro de tinta' },
            effect: { fr: 'Inflige des degats feu et retire 2 PO.', en: 'Deals Fire damage and removes 2 Range.', es: 'Inflige daÃ±o Fuego y quita 2 Rango.' },
            cost: { fr: '2 PA', en: '2 AP', es: '2 PA' },
            range: { fr: 'Croix taille 1, âˆž PO', en: 'Cross size 1, âˆž Range', es: 'Cruz tamaÃ±o 1, âˆž PO' },
            limit: { fr: '1/cible, 3/tour', en: '1/target, 3/turn', es: '1/objetivo, 3/turno' },
          },
          {
            name: { fr: 'Deflagration', en: 'Deflagration', es: 'DeflagraciÃ³n' },
            tag: { fr: 'Auto', en: 'Auto', es: 'Auto' },
            effect: { fr: 'Inflige de lourds degats feu et retire les cases de noyade touchees.', en: 'Deals heavy Fire damage and removes hit drowning tiles.', es: 'Inflige daÃ±o Fuego intenso y quita las celdas de ahogo tocadas.' },
            cost: { fr: '0 PA', en: '0 AP', es: '0 PA' },
            limit: { fr: 'Lance au debut de chaque tour', en: 'Casts at start of each turn', es: 'Lanza al inicio de cada turno' },
          },
        ],
        passive: '',
        notes: [
          { fr: "Se teleporte a la fin de tour sur un des trois points d'eau.", en: "Teleports at end of turn to one of three water points.", es: "Se teletransporta al final del turno a uno de los tres puntos de agua." },
          { fr: 'Bonus K.O.: 5 PA et 2 PM (2 tours). Le second donne 10 PA et 5 PM.', en: 'K.O. Bonus: 5 AP and 2 MP (2 turns). Second gives 10 AP and 5 MP.', es: 'BonificaciÃ³n K.O.: 5 PA y 2 PM (2 turnos). El segundo da 10 PA y 5 PM.' },
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
          { fr: 'Critique 26%', en: 'Critical 26%', es: 'CrÃ­tico 26%' },
          { fr: 'Volonte 18', en: 'Willpower 18', es: 'Voluntad 18' },
          { fr: 'Resist 71% (560)', en: 'Resist 71% (560)', es: 'Resist 71% (560)' },
          { fr: 'Resist 67% (500)', en: 'Resist 67% (500)', es: 'Resist 67% (500)' },
        ],
      },
    ],
    boss: {
      name: { fr: 'Raeliss', en: 'Raeliss', es: 'Raeliss' },
      level: { fr: 'Niv. 233 (Stasis 2)', en: 'Lvl. 233 (Stasis 2)', es: 'Niv. 233 (Estasis 2)' },
      description: { fr: "Il possede 4 sorts et sa plus basse resistance est l'element terre.", en: "Has 4 spells and weakest resistance is Earth.", es: "Tiene 4 hechizos y su resistencia mÃ¡s baja es Tierra." },
      spells: [
        {
          name: { fr: 'Siphon abyssal', en: 'Abyssal Siphon', es: 'SifÃ³n abisal' },
          effect: { fr: 'Inflige des degats air et attire de 3 cases. Les cibles autres que la cible subissent 2x plus de degats.', en: 'Deals Air damage and pulls 3 cells. Targets other than main target take 2x more damage.', es: 'Inflige daÃ±o Aire y atrae 3 celdas. Los objetivos distintos al principal reciben 2x mÃ¡s daÃ±o.' },
          cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
          range: { fr: 'Croix taille 4 (2-6 PO, en ligne)', en: 'Cross size 4 (2-6 Range, line)', es: 'Cruz tamaÃ±o 4 (2-6 PO, en lÃ­nea)' },
          limit: { fr: '1/cible, 2/tour', en: '1/target, 2/turn', es: '1/objetivo, 2/turno' },
        },
        {
          name: { fr: 'Tentattaque poisseuse', en: 'Sticky Tentacle Attack', es: 'Ataque de tentÃ¡culo pegajoso' },
          effect: { fr: 'Inflige de lourds degats terre et retire 100 Resistance elementaire (2 tours), cumulable 6 fois.', en: 'Deals heavy Earth damage and removes 100 Elemental Resistance (2 turns), stacks 6 times.', es: 'Inflige daÃ±o Tierra intenso y quita 100 Resistencia Elemental (2 turnos), acumulable 6 veces.' },
          cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
          range: { fr: '1 PO', en: '1 Range', es: '1 PO' },
          limit: { fr: '1/cible, 2/tour', en: '1/target, 2/turn', es: '1/objetivo, 2/turno' },
        },
        {
          name: { fr: 'Torrent', en: 'Torrent', es: 'Torrente' },
          effect: { fr: "Declenche les glyphes Prison d'eau et inflige des degats eau en cercle taille 2. Pose ensuite une case de noyade.", en: "Triggers Water Prison glyphs and deals Water damage in size-2 circle. Then places a drowning tile.", es: "Activa glifos de PrisiÃ³n de Agua e inflige daÃ±o Agua en cÃ­rculo tamaÃ±o 2. Luego coloca una celda de ahogo." },
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
        { fr: 'Critique 30%', en: 'Critical 30%', es: 'CrÃ­tico 30%' },
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
            es: "Los monstruos son invulnerables si no tienes lÃ­nea de visiÃ³n.",
          },
          {
            fr: "A la fin de leur tour, ils posent des glyphes Prison d'eau qui bloquent la ligne de vue.",
            en: "End of turn, they place Water Prison glyphs that block line of sight.",
            es: "Fin del turno, colocan glifos de PrisiÃ³n de Agua que bloquean la lÃ­nea de visiÃ³n.",
          },
          {
            fr: "On peut enlever un glyphe en marchant dessus (perte de 3 PM).",
            en: "You can remove a glyph by walking on it (lose 3 MP).",
            es: "Puedes quitar un glifo caminando sobre Ã©l (pierdes 3 PM).",
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
            es: "Fin de cada turno, coloca glifos de PrisiÃ³n de Agua: turno impar alrededor suyo, par alrededor de aliados.",
          },
          {
            fr: "Avec 'Torrent', ces glyphes deviennent des cases de noyade qui mettent K.O. si on marche dessus.",
            en: "With 'Torrent', these glyphs become drowning tiles that KO if you walk on them.",
            es: "Con 'Torrente', estos glifos se convierten en celdas de ahogo que K.O. si caminas sobre ellas.",
          },
          {
            fr: "Pohl le poulpe (phase 2+) peut retirer des cases via 'Deflagration'.",
            en: "Pohl the Squid (phase 2+) can remove tiles via 'Deflagration'.",
            es: "Pohl el Pulpo (fase 2+) puede quitar celdas via 'DeflagraciÃ³n'.",
          },
          {
            fr: "Raeliss est melee: restez proche pour eviter qu'il gagne trop de %Di en tours de velocite.",
            en: "Raeliss is melee: stay close to avoid him gaining too much %increased damage in speed turns.",
            es: "Raeliss hace combate cuerpo a cuerpo: mantente cerca para evitar que gane demasiado % daÃ±o aumentado.",
          },
          {
            fr: "Conseil: jouer en mode tactique pour bien voir les cases de noyade.",
            en: "Tip: play in tactical mode to see drowning tiles clearly.",
            es: "Consejo: juega en modo tÃ¡ctico para ver claramente las celdas de ahogo.",
          },
        ],
      },
    ],
    plan: { fr: 'Cliquer ici pour derouler le plan du donjon.', en: 'Click here to unfold the dungeon plan.', es: 'Haz clic aquÃ­ para desplegar el plan de la mazmorra.' },
    steles: {
      lead: {
        fr: "Steles d'intervention: activation possible en competitif et stasis 2 minimum.",
        en: "Intervention steles: can be activated in competitive and minimum stasis 2.",
        es: "Estelas de intervenciÃ³n: pueden activarse en competitivo con mÃ­nimo estasis 2.",
      },
      notes: [
        {
          fr: "Ajoute le boss Cire Momore au combat (stele d'intervention).",
          en: "Adds boss Cire Momore to the fight (intervention stele).",
          es: "AÃ±ade al jefe Cire Momore al combate (estela de intervenciÃ³n).",
        },
        {
          fr: "L'activation coute une Clef d'intervention de Cire Momore (ebenistes niv. 145).",
          en: "Activation costs a Cire Momore Intervention Key (carpenters lvl 145).",
          es: "La activaciÃ³n cuesta una Llave de IntervenciÃ³n de Cire Momore (carpinteros niv. 145).",
        },
        {
          fr: 'Pas besoin de reactiver apres une defaite.',
          en: 'No need to reactivate after a defeat.',
          es: 'No es necesario reactivar despuÃ©s de una derrota.',
        },
        {
          fr: 'Loot de stele: Bougie, Armure, Coiffe, Main de Cire Momore.',
          en: 'Stele loot: Candle, Armor, Hat, Hand of Cire Momore.',
          es: 'BotÃ­n de estela: Vela, Armadura, Sombrero, Mano de Cire Momore.',
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
          es: "En modo Competitivo, el jefe puede soltar una Piedra de Equilibrio (sublimaciones Ã©picas/reliquias).",
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
      es: "Jefe: K'abah'al, GuardiÃ¡n del Camino de los Muertos",
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
        es: 'La mecÃ¡nica central gira en torno a Residuos, fusiones y marcas.',
      },
      {
        fr: "Attention a K'abah'al: tres dangereux si les fusions de Residus s'enchainent.",
        en: "Watch K'abah'al closely: very dangerous if Residue fusions chain.",
        es: "Cuidado con K'abah'al: es muy peligroso si se encadenan fusiones de Residuos.",
      },
      {
        fr: 'Certaines informations restent en validation et peuvent evoluer.',
        en: 'Some details are still being validated and may change.',
        es: 'Algunos detalles siguen en validaciÃ³n y pueden cambiar.',
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
              es: 'Monobjetivo 1 alcance, daÃ±o agua, empuja 5 casillas y aplica Marca del Ravage (2 turnos).',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/cible, 2/tour', en: '1/target, 2/turn', es: '1/objetivo, 2/turno' },
          },
          {
            name: { fr: 'Coup de faux raccord', en: 'False Scythe Cut', es: 'Corte de guadaÃ±a falsa' },
            effect: {
              fr: 'Zone sur un Residu, degats feu et transposition avec le Residu cible.',
              en: 'AoE on a Residue, fire damage and swaps position with target Residue.',
              es: 'Ãrea sobre un Residuo, daÃ±o fuego e intercambio de posiciÃ³n con el Residuo objetivo.',
            },
            cost: { fr: '2 PA', en: '2 AP', es: '2 PA' },
            range: { fr: '1-10 PO', en: '1-10 Range', es: '1-10 PO' },
            limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
          },
        ],
        passive: {
          fr: 'Ravageur: a sa mort, invoque un Residu qui joue juste apres le tueur.',
          en: 'Ravager: on death, summons a Residue that acts right after the killer.',
          es: 'Ravageur: al morir, invoca un Residuo que juega justo despuÃ©s del asesino.',
        },
        notes: [
          {
            fr: 'Marque du ravage: les dommages subis sont repercutes sur les autres porteurs de la marque.',
            en: 'Ravage Mark: damage taken is mirrored to other marked targets.',
            es: 'Marca del Ravage: el daÃ±o recibido se replica a otros portadores de la marca.',
          },
        ],
        stats: [
          { fr: 'Role: DPS utilitaire', en: 'Role: Utility DPS', es: 'Rol: DPS utilitario' },
          { fr: 'Element de pression: Eau/Feu', en: 'Pressure element: Water/Fire', es: 'Elemento de presiÃ³n: Agua/Fuego' },
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
          es: 'Se vuelve invisible y castiga a equipos sin revelaciÃ³n constante.',
        },
        spells: [
          {
            name: { fr: 'Coup de fouet', en: 'Whip Strike', es: 'Golpe de lÃ¡tigo' },
            effect: {
              fr: 'Monocible en ligne, degats air et retire 2 PO.',
              en: 'Single target in line, air damage and removes 2 range.',
              es: 'Monobjetivo en lÃ­nea, daÃ±o aire y quita 2 alcance.',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            range: { fr: '1-6 PO', en: '1-6 Range', es: '1-6 PO' },
            limit: { fr: '1/cible, 2/tour', en: '1/target, 2/turn', es: '1/objetivo, 2/turno' },
          },
          {
            name: { fr: 'Maitre mentalite', en: 'Mind Mastery', es: 'MaestrÃ­a mental' },
            effect: {
              fr: "Zone sur Residu: degats terre et rend le Residu invisible (3 tours).",
              en: 'AoE on Residue: earth damage and makes Residue invisible (3 turns).',
              es: 'Ãrea sobre Residuo: daÃ±o tierra y vuelve invisible al Residuo (3 turnos).',
            },
            cost: { fr: '2 PA', en: '2 AP', es: '2 PA' },
            range: { fr: '1-10 PO', en: '1-10 Range', es: '1-10 PO' },
            limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
          },
        ],
        passive: {
          fr: "L'obscur: devient invisible en debut de tour et gagne 50 % DI permanent s'il reste invisible.",
          en: 'The Dark One: becomes invisible at turn start and gains permanent 50% damage if still invisible next turn.',
          es: 'El Oscuro: se vuelve invisible al inicio y gana 50% daÃ±o permanente si sigue invisible en su siguiente turno.',
        },
        notes: [
          {
            fr: "Les degats directs et indirects retirent l'invisibilite.",
            en: 'Both direct and indirect damage remove invisibility.',
            es: 'El daÃ±o directo e indirecto elimina la invisibilidad.',
          },
          {
            fr: 'Ravageur: a sa mort, invoque un Residu.',
            en: 'Ravager: on death, summons a Residue.',
            es: 'Ravageur: al morir, invoca un Residuo.',
          },
        ],
        stats: [
          { fr: 'Role: pression tactique', en: 'Role: tactical pressure', es: 'Rol: presiÃ³n tÃ¡ctica' },
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
              es: 'Monobjetivo 1 alcance, daÃ±o tierra, quita 2 alcance y 3 PM.',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/cible, 3/tour', en: '1/target, 3/turn', es: '1/objetivo, 3/turno' },
          },
          {
            name: { fr: 'Gloutonie', en: 'Gluttony', es: 'GlotonerÃ­a' },
            effect: {
              fr: 'Mange une invocation ou un Residu, soigne, gagne 1 PM et 25 % DI cumulable.',
              en: 'Eats a summon or Residue, heals, gains 1 MP and stackable 25% increased damage.',
              es: 'Devora una invocaciÃ³n o Residuo, se cura, gana 1 PM y 25% daÃ±o aumentado acumulable.',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/cible, 3/tour', en: '1/target, 3/turn', es: '1/objetivo, 3/turno' },
          },
        ],
        passive: {
          fr: 'Ventre sans fond: le soin depassant les PV max est ajoute aux PV max.',
          en: 'Bottomless Stomach: healing beyond max HP increases max HP.',
          es: 'Vientre sin fondo: la curaciÃ³n sobre PV mÃ¡ximos se aÃ±ade a PV mÃ¡ximos.',
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
        name: { fr: 'Residu (Invocation)', en: 'Residue (Summon)', es: 'Residuo (InvocaciÃ³n)' },
        level: { fr: 'Invocation', en: 'Summon', es: 'InvocaciÃ³n' },
        bonus: { fr: 'Unite de fusion', en: 'Fusion unit', es: 'Unidad de fusiÃ³n' },
        description: {
          fr: 'Noyau mecanique du donjon: fusion, reflet de degats et buff melee.',
          en: 'Core mechanic unit: fusion, reflected damage and melee buff.',
          es: 'Unidad mecÃ¡nica central: fusiÃ³n, reflejo de daÃ±o y buff melee.',
        },
        spells: [
          {
            name: { fr: 'Fuuu-sion', en: 'Fuuu-sion', es: 'Fuuu-siÃ³n' },
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
          es: 'Combatientes adyacentes infligen 30% mÃ¡s daÃ±o, y el daÃ±o recibido se anula y se devuelve al atacante.',
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
            es: 'Los Residuos actÃºan inmediatamente tras aparecer.',
          },
        ],
        stats: [
          { fr: 'Priorite: controle/fusion', en: 'Priority: control/fusion', es: 'Prioridad: control/fusiÃ³n' },
        ],
      },
      {
        name: {
          fr: "K'abah'al, Gardien de la route des morts",
          en: "K'abah'al, Guardian of the Road of the Dead",
          es: "K'abah'al, GuardiÃ¡n del Camino de los Muertos",
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
          es: 'VersiÃ³n de jefe final. Manipula marcas, transposiciones y ejecuciones.',
        },
        spells: [
          {
            name: { fr: 'Devastation', en: 'Devastation', es: 'DevastaciÃ³n' },
            effect: {
              fr: 'Lance automatiquement de lourds degats feu sur Marques Residuelles et Residus en debut de tour.',
              en: 'Automatically deals heavy fire damage on Residual Marks and active Residues at turn start.',
              es: 'Lanza automÃ¡ticamente daÃ±o fuego muy alto sobre Marcas Residuales y Residuos al inicio del turno.',
            },
            cost: { fr: '0 PA', en: '0 AP', es: '0 PA' },
          },
          {
            name: { fr: 'Envol final', en: 'Final Flight', es: 'Vuelo final' },
            effect: {
              fr: 'Teleportation au contact dune cible isolee, puis degats air.',
              en: 'Teleports into melee with an isolated target, then deals air damage.',
              es: 'Se teletransporta en melee con un objetivo aislado y luego inflige daÃ±o aire.',
            },
            cost: { fr: '2 PA', en: '2 AP', es: '2 PA' },
            range: { fr: 'Toute la carte', en: 'Whole map', es: 'Todo el mapa' },
          },
          {
            name: { fr: 'Dechiquetage', en: 'Shredding', es: 'Desgarrar' },
            effect: {
              fr: 'Degats terre et applique Dernier souffle + Plaie profonde (2 tours).',
              en: 'Earth damage and applies Last Breath + Deep Wound (2 turns).',
              es: 'DaÃ±o tierra y aplica Ãšltimo Aliento + Herida Profunda (2 turnos).',
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
            es: 'AbsorciÃ³n funesta: cada fusiÃ³n da -60 resistencia elemental y +30% daÃ±o aumentado, y coloca una Marca Residual cerca de jugadores.',
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
          es: "Residuo de K'abah'al (InvocaciÃ³n)",
        },
        level: { fr: 'Invocation', en: 'Summon', es: 'InvocaciÃ³n' },
        bonus: { fr: 'Fusion boss', en: 'Boss fusion', es: 'FusiÃ³n de jefe' },
        description: {
          fr: "Version boss du Residu. Peut fusionner pour invoquer un K'abah'al a 20 % PV.",
          en: "Boss version of Residue. Can fuse to summon a K'abah'al at 20% HP.",
          es: "VersiÃ³n de jefe del Residuo. Puede fusionarse para invocar un K'abah'al al 20% de PV.",
        },
        spells: [
          {
            name: { fr: 'Fuuu-sion', en: 'Fuuu-sion', es: 'Fuuu-siÃ³n' },
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
          es: 'Como Residuo normal: +30% daÃ±o melee y reflejo del daÃ±o recibido.',
        },
        notes: [
          {
            fr: "Si la fusion se produit, le nouveau K'abah'al n'invoque plus de Residus a sa mort.",
            en: "If fusion occurs, the newly summoned K'abah'al no longer summons Residues on death.",
            es: "Si se produce la fusiÃ³n, el nuevo K'abah'al ya no invoca Residuos al morir.",
          },
        ],
        stats: [
          { fr: 'Priorite: interruption de fusion', en: 'Priority: interrupt fusion', es: 'Prioridad: interrumpir fusiÃ³n' },
        ],
      },
    ],
    boss: {
      name: {
        fr: "K'abah'al, Gardien de la route des morts",
        en: "K'abah'al, Guardian of the Road of the Dead",
        es: "K'abah'al, GuardiÃ¡n del Camino de los Muertos",
      },
      level: { fr: 'Niv. 216+', en: 'Lvl. 216+', es: 'Niv. 216+' },
      description: {
        fr: "Boss tres punitif autour des cibles isolees, des marques et des fusions de Residus.",
        en: 'Very punishing boss around isolated targets, marks and Residue fusions.',
        es: 'Jefe muy punitivo con objetivos aislados, marcas y fusiones de Residuos.',
      },
      spells: [
        {
          name: { fr: 'Confusion mortelle', en: 'Deadly Confusion', es: 'ConfusiÃ³n mortal' },
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
            es: 'Ataque monobjetivo a distancia sin lÃ­nea de visiÃ³n, daÃ±o fuego.',
          },
          cost: { fr: '3 PA', en: '3 AP', es: '3 PA' },
          range: { fr: '2 PO et +', en: '2+ Range', es: '2 PO o mÃ¡s' },
          limit: { fr: '1/cible, 3/tour', en: '1/target, 3/turn', es: '1/objetivo, 3/turno' },
        },
      ],
      passives: [
        {
          name: { fr: 'Absorption funeste', en: 'Doom Absorption', es: 'AbsorciÃ³n funesta' },
          effect: {
            fr: 'Par fusion: -60 resist elementaire, +30 % DI, et generation de Marque Residuelle.',
            en: 'Per fusion: -60 elemental resistance, +30% increased damage, and Residual Mark generation.',
            es: 'Por fusiÃ³n: -60 resistencia elemental, +30% daÃ±o aumentado y generaciÃ³n de Marca Residual.',
          },
          notes: [],
        },
      ],
      stats: [
        { fr: 'Role: execution/isolation', en: 'Role: execution/isolation', es: 'Rol: ejecuciÃ³n/aislamiento' },
      ],
    },
    mechanics: [
      {
        title: { fr: 'Salle 1 et Salle Boss', en: 'Room 1 and Boss Room', es: 'Sala 1 y sala del jefe' },
        paragraphs: [
          {
            fr: 'Premiere salle: composition orientee Ravageurs. Salle boss: K abah al + Druidres + Maitres des tenebres + Gloutos.',
            en: 'First room: Ravager-oriented composition. Boss room: K abah al + Druidres + Masters of Darkness + Gloutos.',
            es: 'Primera sala: composiciÃ³n centrada en Ravageurs. Sala de jefe: K abah al + Druidres + Maestros de tinieblas + Gloutos.',
          },
          {
            fr: 'Les Residus ne sont plus desincarnes automatiquement quand il ne reste que des Residus.',
            en: 'Residues are no longer automatically removed when only Residues remain.',
            es: 'Los Residuos ya no se desincorporan automÃ¡ticamente cuando solo quedan Residuos.',
          },
        ],
      },
      {
        title: { fr: 'Mecaniques clefs', en: 'Key Mechanics', es: 'MecÃ¡nicas clave' },
        paragraphs: [
          {
            fr: 'Interrompez les fusions de Residus rapidement: elles alimentent la montee en puissance du boss.',
            en: 'Interrupt Residue fusions quickly: they fuel the boss scaling.',
            es: 'Interrumpe rÃ¡pido las fusiones de Residuos: alimentan el escalado del jefe.',
          },
          {
            fr: 'Evitez les cibles isolees: K abah al peut les punir avec Envol final puis Dechiquetage.',
            en: 'Avoid isolated targets: K abah al can punish them with Final Flight then Shredding.',
            es: 'Evita objetivos aislados: K abah al puede castigarlos con Vuelo Final y luego Desgarrar.',
          },
          {
            fr: 'Revelation et pression continue sur les unites invisibles pour limiter les bonus permanents.',
            en: 'Maintain reveal and pressure on invisible units to limit permanent buffs.',
            es: 'MantÃ©n revelaciÃ³n y presiÃ³n sobre unidades invisibles para limitar bonificaciones permanentes.',
          },
          {
            fr: 'Controlez les Residus proches du groupe pour reduire reflet de degats et buff melee adverse.',
            en: 'Control Residues near your group to reduce reflected damage and enemy melee buff.',
            es: 'Controla Residuos cerca del grupo para reducir reflejo de daÃ±o y buff melee enemigo.',
          },
        ],
      },
      {
        title: { fr: 'Strategie (etat actuel)', en: 'Strategy (current state)', es: 'Estrategia (estado actual)' },
        paragraphs: [
          {
            fr: 'Priorite 1: casser les chaines de fusion.',
            en: 'Priority 1: break fusion chains.',
            es: 'Prioridad 1: romper cadenas de fusiÃ³n.',
          },
          {
            fr: 'Priorite 2: eviter les isolements et reassembler les cibles transpositionnees.',
            en: 'Priority 2: avoid isolation and regroup swapped targets.',
            es: 'Prioridad 2: evitar aislamientos y reagrupar objetivos transpuestos.',
          },
          {
            fr: 'Priorite 3: temporiser les pics de degats du boss et finir les menaces Glouto/Maitre des tenebres.',
            en: 'Priority 3: survive boss burst windows and finish Glouto/Master of Darkness threats.',
            es: 'Prioridad 3: aguantar picos de daÃ±o del jefe y cerrar amenazas de Glouto/Maestro de tinieblas.',
          },
          {
            fr: 'Guide en evolution: certaines interactions restent a confirmer.',
            en: 'Guide in progress: some interactions still require confirmation.',
            es: 'GuÃ­a en progreso: algunas interacciones aÃºn requieren confirmaciÃ³n.',
          },
        ],
      },
    ],
    plan: {
      fr: 'Composition recommandee: 1 tank, 1 support, 4 DPS flex. Prioriser controle de fusion et anti-isolation.',
      en: 'Recommended comp: 1 tank, 1 support, 4 flex DPS. Prioritize fusion control and anti-isolation.',
      es: 'ComposiciÃ³n recomendada: 1 tank, 1 support, 4 DPS flex. Prioriza control de fusiÃ³n y anti-aislamiento.',
    },
    steles: {
      lead: {
        fr: "StÃ¨le d'intervention Anathar: nÃ©cessite une Clef d'intervention d'Anathar.",
        en: 'Anathar intervention stele: requires an Anathar Intervention Key.',
        es: 'Estela de intervenciÃ³n de Anathar: requiere una Llave de intervenciÃ³n de Anathar.',
      },
      notes: [
        {
          fr: "Anathar utilise 3 sorts clÃ©s: Golpe DemonÃ­aco (contact), Marca d'Anathar (portÃ©e globale) et Infierno DemonÃ­aco.",
          en: 'Anathar uses 3 key spells: Demonic Strike (melee), Mark of Anathar (global range), and Demonic Hellfire.',
          es: 'Anathar usa 3 hechizos clave: Golpe DemonÃ­aco (contacto), Marca de Anathar (alcance global) e Infierno DemonÃ­aco.',
        },
        {
          fr: "Ã€ la fin de son tour, Anathar observe le joueur marquÃ© et rÃ©plique jusqu'Ã  4 actions diffÃ©rentes au dÃ©but de son tour suivant.",
          en: 'At end of turn, Anathar observes the marked player and replicates up to 4 different actions at the start of its next turn.',
          es: 'Al final de su turno, Anathar observa al jugador marcado y replica hasta 4 acciones diferentes al inicio de su siguiente turno.',
        },
        {
          fr: "S'il observe moins de 4 actions, il peut lancer Infierno DemonÃ­aco: dÃ©gÃ¢ts modÃ©rÃ©s Ã  tous les joueurs (Ã©lÃ©ment alÃ©atoire).",
          en: 'If it observes fewer than 4 actions, it can cast Demonic Hellfire: moderate damage to all players (random element).',
          es: 'Si observa menos de 4 acciones, puede lanzar Infierno DemonÃ­aco: daÃ±os moderados a todos los jugadores (elemento aleatorio).',
        },
        {
          fr: "Infierno DemonÃ­aco renforcÃ©: si 2 actions ou moins, les ennemis gagnent +25% DI et +150 rÃ©sistance (1 tour); si 0 action, ils rÃ©cupÃ¨rent 50% de leurs PdV perdus.",
          en: 'Enhanced Demonic Hellfire: with 2 or fewer actions, enemies gain +25% damage dealt and +150 resistance (1 turn); with 0 actions, they recover 50% of missing HP.',
          es: 'Infierno DemonÃ­aco potenciado: con 2 acciones o menos, los enemigos ganan +25% daÃ±os infligidos y +150 resistencias (1 turno); con 0 acciones, recuperan 50% de sus PdV perdidos.',
        },
        {
          fr: 'Effet spÃ©cifique Ravageurs: Ã  sa mort, Anathar laisse un RÃ©sidu.',
          en: 'Ravagers specific effect: on death, Anathar leaves a Residue.',
          es: 'Efecto especÃ­fico Devastadores: al morir, Anathar deja un Residuo.',
        },
        {
          fr: 'La table des effets par action (PM/PA, soins, armure, placements, dÃ©gÃ¢ts Ã©lÃ©mentaires) suit la table de rÃ©fÃ©rence Anathar.',
          en: 'The action-to-effect mapping (MP/AP, healing, armor, positioning, elemental damage) follows the Anathar reference table.',
          es: 'El mapeo acciÃ³n-efecto (PM/PA, curas, armadura, posicionamiento, daÃ±os elementales) sigue la tabla de referencia de Anathar.',
        },
      ],
      protoBosses: [],
      crystals: {
        types: [
          {
            fr: "Action du marquÃ© Ã  Ã©viter: retrait PA/PM massif, buffs de stats, tÃ©lÃ©portations et dÃ©gÃ¢ts Ã©lÃ©mentaires superflus.",
            en: 'Marked-player actions to avoid: heavy AP/MP removal, stat buffs, extra teleports and unnecessary elemental hits.',
            es: 'Acciones a evitar del marcado: retiro masivo de PA/PM, buffs de stats, teletransportes y daÃ±os elementales innecesarios.',
          },
        ],
        notes: [
          {
            fr: 'Objectif de tour marquÃ©: limiter les actions diffÃ©rentes pour contrÃ´ler la rÃ©plication.',
            en: 'Marked-turn objective: limit different actions to control replication.',
            es: 'Objetivo del turno marcado: limitar acciones diferentes para controlar la replicaciÃ³n.',
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
          es: 'SecciÃ³n omitida intencionalmente (drops no incluidos en esta iteraciÃ³n).',
        },
      ],
      monsterDrops: [],
      bossDrops: [],
    },
    croupier: {
      location: {
        fr: 'Section omise sur demande.',
        en: 'Section intentionally omitted.',
        es: 'SecciÃ³n omitida intencionalmente.',
      },
      items: [],
    },
  },
  {
    id: 'egares',
    name: { fr: 'Donjon Ã‰garÃ©s', en: 'Lost Ones Dungeon', es: 'Mazmorra de los Idos' },
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
        fr: 'Tous les Ã‰garÃ©s ont une mÃ©canique de Fuite avec Ã©change de position selon le type de dÃ©gÃ¢ts subis.',
        en: 'All Lost Ones have an Escape mechanic with position swap depending on damage type received.',
        es: 'Todos los Extraviados tienen una mecÃ¡nica de Huida con intercambio de posiciÃ³n segÃºn el tipo de daÃ±o recibido.',
      },
      {
        fr: 'MÃ©canique clÃ© du donjon: mettre tous les Ã‰garÃ©s KO en moins de 2 tours pour finir le combat.',
        en: 'Key dungeon mechanic: knock all Lost Ones to 1 HP within less than 2 turns to end the fight.',
        es: 'MecÃ¡nica clave: dejar KO a todos los Extraviados en menos de 2 turnos para terminar el combate.',
      },
      {
        fr: 'Certaines informations restent en validation et seront complÃ©tÃ©es.',
        en: 'Some details are still being validated and will be expanded.',
        es: 'Algunos detalles siguen en validaciÃ³n y se ampliarÃ¡n.',
      },
    ],
    monsters: [
      {
        name: { fr: 'RÃ©manâ€™Hante', en: 'RemanHante', es: 'RÃ©manHante' },
        level: { fr: 'Niv. 216', en: 'Lvl. 216', es: 'Niv. 216' },
        bonus: {
          fr: 'Faiblesse principale: Air',
          en: 'Main weakness: Air',
          es: 'Debilidad principal: Aire',
        },
        description: {
          fr: '2 sorts offensifs de mÃªlÃ©e/zone + passif RÃ©manence.',
          en: '2 offensive melee/area spells + Remanence passive.',
          es: '2 hechizos ofensivos de melee/zona + pasivo Remanencia.',
        },
        spells: [
          {
            name: { fr: 'Toupie dÃ©mentielle', en: 'Demented Spin', es: 'Peonza demente' },
            effect: {
              fr: 'Monocible 1 PO, dÃ©gÃ¢ts air.',
              en: 'Single-target 1 range, air damage.',
              es: 'Monobjetivo 1 alcance, daÃ±o aire.',
            },
            cost: { fr: '5 PA', en: '5 AP', es: '5 PA' },
            limit: { fr: '1/cible, 3/tour', en: '1/target, 3/turn', es: '1/objetivo, 3/turno' },
          },
          {
            name: { fr: 'Toupie de la dÃ©mence', en: 'Madness Spin', es: 'Peonza de la demencia' },
            effect: {
              fr: 'Zone croix taille 5 (0 PO), dÃ©gÃ¢ts air et attire les ennemis au contact.',
              en: 'Size-5 cross AoE (0 range), air damage and pulls enemies into melee.',
              es: 'Ãrea en cruz tamaÃ±o 5 (0 alcance), daÃ±o aire y atrae enemigos al cuerpo a cuerpo.',
            },
            cost: { fr: '3 PA', en: '3 AP', es: '3 PA' },
            limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
          },
        ],
        passive: {
          fr: 'RÃ©manence: Ã©change avec lâ€™alliÃ© le plus Ã©loignÃ© si dÃ©gÃ¢ts distance. Zone dâ€™arrivÃ©e: alliÃ©s gagnent +50 RÃ©sistance Ã‰lÃ©mentaire (cumul 2, 2 tours).',
          en: 'Remanence: swaps with farthest ally if hit by ranged damage. Arrival zone grants allies +50 Elemental Resistance (stack 2, 2 turns).',
          es: 'Remanencia: intercambia con el aliado mÃ¡s lejano si recibe daÃ±o a distancia. En zona de llegada, aliados ganan +50 Resistencia Elemental (acumula 2, 2 turnos).',
        },
        notes: [],
        stats: [
          { fr: 'RÃ´le: attraction et setup', en: 'Role: pull/setup', es: 'Rol: atracciÃ³n y setup' },
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
          fr: 'Monstre de focus mono-cible avec montÃ©e de dÃ©gÃ¢ts via Mauvais Å“il.',
          en: 'Single-target focus unit with scaling damage through Evil Eye stacks.',
          es: 'Unidad de foco monobjetivo con escalado de daÃ±o mediante Ojo Maligno.',
        },
        spells: [
          {
            name: { fr: 'Regard mÃ©chant dÃ©mentiel', en: 'Demented Evil Glare', es: 'Mirada maligna demente' },
            effect: {
              fr: 'Monocible 1-3 PO, dÃ©gÃ¢ts eau, applique Mauvais Å“il (+1 niv, max 8). Gagne 1 PM infini par lancer en fin de tour (max 10).',
              en: 'Single-target 1-3 range, water damage, applies Evil Eye (+1 level, max 8). Gains 1 infinite MP per cast at end of turn (max 10).',
              es: 'Monobjetivo 1-3 alcance, daÃ±o agua, aplica Ojo Maligno (+1 nivel, mÃ¡x 8). Gana 1 PM infinito por lanzamiento al final de turno (mÃ¡x 10).',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/cible, 3/tour', en: '1/target, 3/turn', es: '1/objetivo, 3/turno' },
          },
        ],
        passive: {
          fr: 'DÃ©tachevrotant: Ã©change avec alliÃ© le plus Ã©loignÃ© si dÃ©gÃ¢ts de dos. -30% dÃ©gÃ¢ts subis face/cÃ´tÃ©, +30% de dos. Zone dâ€™arrivÃ©e: +50 RÃ©sistance Ã‰lÃ©mentaire aux alliÃ©s (cumul 2).',
          en: 'Detachevrotant: swaps with farthest ally if hit from behind. -30% damage taken front/side, +30% from back. Arrival zone grants +50 Elemental Resistance to allies (stack 2).',
          es: 'Detachevrotant: intercambia con aliado mÃ¡s lejano si recibe daÃ±o por la espalda. -30% daÃ±o recibido frente/lateral, +30% por espalda. Zona de llegada: +50 Resistencia Elemental a aliados (acumula 2).',
        },
        notes: [
          {
            fr: 'Mauvais Å“il augmente trÃ¨s vite le burst reÃ§u de ce sort.',
            en: 'Evil Eye quickly amplifies the burst from this spell.',
            es: 'Ojo Maligno aumenta muy rÃ¡pido el burst recibido de este hechizo.',
          },
        ],
        stats: [
          { fr: 'RÃ´le: exÃ©cution mono-cible', en: 'Role: single-target execution', es: 'Rol: ejecuciÃ³n monobjetivo' },
        ],
      },
      {
        name: { fr: 'Ã‰srevni', en: 'Esrevni', es: 'Ã‰srevni' },
        level: { fr: 'Niv. 216', en: 'Lvl. 216', es: 'Niv. 216' },
        bonus: {
          fr: 'Faiblesse principale: Terre',
          en: 'Main weakness: Earth',
          es: 'Debilidad principal: Tierra',
        },
        description: {
          fr: 'DÃ©gÃ¢ts feu Ã  distance avec vol de vie et scaling sur PV manquants.',
          en: 'Ranged fire damage with life steal and missing-HP scaling.',
          es: 'DaÃ±o fuego a distancia con robo de vida y escalado por PV faltantes.',
        },
        spells: [
          {
            name: { fr: 'Lancer de la dÃ©mence', en: 'Madness Throw', es: 'Lanzamiento de la demencia' },
            effect: {
              fr: 'Monocible en ligne 1-10 PO, dÃ©gÃ¢ts feu et vole 100% des dommages infligÃ©s.',
              en: 'Single-target in line 1-10 range, fire damage and steals 100% of damage dealt.',
              es: 'Monobjetivo en lÃ­nea 1-10 alcance, daÃ±o fuego y roba 100% del daÃ±o infligido.',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/cible, 3/tour', en: '1/target, 3/turn', es: '1/objetivo, 3/turno' },
          },
        ],
        passive: {
          fr: 'Ã€ lâ€™envers: Ã©change avec alliÃ© le plus Ã©loignÃ© si dÃ©gÃ¢ts mÃªlÃ©e. +1% dÃ©gÃ¢ts infligÃ©s par % PV manquant. Zone dâ€™arrivÃ©e: +50 RÃ©sistance Ã‰lÃ©mentaire aux alliÃ©s (cumul 2).',
          en: 'Upside Down: swaps with farthest ally if hit by melee damage. +1% damage dealt per % missing HP. Arrival zone grants +50 Elemental Resistance to allies (stack 2).',
          es: 'Al revÃ©s: intercambia con aliado mÃ¡s lejano si recibe daÃ±o melee. +1% daÃ±o infligido por cada % de PV faltante. Zona de llegada: +50 Resistencia Elemental a aliados (acumula 2).',
        },
        notes: [],
        stats: [
          { fr: 'RÃ´le: menace de sustain', en: 'Role: sustain threat', es: 'Rol: amenaza de sustain' },
        ],
      },
      {
        name: { fr: '!@#dh`~ (Boss)', en: '!@#dh`~ (Boss)', es: '!@#dh`~ (Jefe)' },
        level: { fr: 'Boss', en: 'Boss', es: 'Jefe' },
        bonus: {
          fr: 'StabilisÃ© + immunitÃ© retrait PM',
          en: 'Stabilized + MP removal immunity',
          es: 'Estabilizado + inmunidad a retiro de PM',
        },
        description: {
          fr: 'Boss orientÃ© contrÃ´le de zone via glyphes ligne infinie + pression mono-cible globale.',
          en: 'Zone-control boss with infinite-line glyphs + global single-target pressure.',
          es: 'Jefe de control de zona con glifos en lÃ­nea infinita + presiÃ³n monobjetivo global.',
        },
        spells: [
          {
            name: { fr: '|]} LJo00{Â¨:,', en: '|]} LJo00{Â¨:,', es: '|]} LJo00{Â¨:,' },
            effect: {
              fr: 'Pose automatiquement des glyphes en rectangle largeur 3 (ligne infinie) devant et sous le lanceur. Les glyphes infligent de lourds dÃ©gÃ¢ts terre (1 fois/tour).',
              en: 'Automatically places rectangle glyphs width 3 (infinite length) in front and below caster. Glyphs deal heavy earth damage (once/turn).',
              es: 'Coloca automÃ¡ticamente glifos en rectÃ¡ngulo de ancho 3 (lÃ­nea infinita) frente y debajo del lanzador. Los glifos infligen daÃ±o tierra muy alto (1 vez/turno).',
            },
            cost: { fr: '2 PA', en: '2 AP', es: '2 PA' },
          },
          {
            name: { fr: 'Un tiens vaut mieux que deux tu lâ€™auras', en: 'One in hand is better than two in the bush', es: 'MÃ¡s vale uno en mano que dos volando' },
            effect: {
              fr: 'Monocible sur toute la carte avec ligne de vue, dÃ©gÃ¢ts feu.',
              en: 'Single-target anywhere on map with line of sight, fire damage.',
              es: 'Monobjetivo en todo el mapa con lÃ­nea de visiÃ³n, daÃ±o fuego.',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/cible', en: '1/target', es: '1/objetivo' },
          },
        ],
        passive: {
          fr: 'Ã€ chaque jour suffit Ã  sa peine: -75 RÃ©sistance Dos. Fuite active si perd 10% PV en un tour, Ã©change avec alliÃ© le plus Ã©loignÃ©. Zone dâ€™arrivÃ©e: +50 RÃ©sistance Ã‰lÃ©mentaire alliÃ©s (cumul 2).',
          en: 'Each day has enough trouble: -75 Back Resistance. Escape triggers if it loses 10% HP in one turn, swapping with farthest ally. Arrival zone: +50 Elemental Resistance for allies (stack 2).',
          es: 'A cada dÃ­a le basta su pena: -75 Resistencia de Espalda. Huida se activa si pierde 10% PV en un turno, intercambiando con el aliado mÃ¡s lejano. Zona de llegada: +50 Resistencia Elemental a aliados (acumula 2).',
        },
        notes: [],
        stats: [
          { fr: 'RÃ´le: contrÃ´le zone + punition', en: 'Role: zone control + punishment', es: 'Rol: control de zona + castigo' },
        ],
      },
    ],
    boss: {
      name: { fr: '!@#dh`~', en: '!@#dh`~', es: '!@#dh`~' },
      level: { fr: 'Niv. 216+', en: 'Lvl. 216+', es: 'Niv. 216+' },
      description: {
        fr: 'Boss stable, orientÃ© glyphes en ligne et focus map-wide.',
        en: 'Stable boss focused on line glyphs and map-wide single-target pressure.',
        es: 'Jefe estable enfocado en glifos en lÃ­nea y presiÃ³n monobjetivo global.',
      },
      spells: [
        {
          name: { fr: 'Glyphe ligne infinie', en: 'Infinite Line Glyph', es: 'Glifo de lÃ­nea infinita' },
          effect: {
            fr: 'Zone rectangulaire de largeur 3, lourds dÃ©gÃ¢ts terre sur entrÃ©e/dÃ©but de tour.',
            en: 'Rectangle zone width 3, heavy earth damage on entry/start of turn.',
            es: 'Zona rectangular ancho 3, daÃ±o tierra muy alto al entrar/inicio de turno.',
          },
          cost: { fr: '2 PA', en: '2 AP', es: '2 PA' },
        },
      ],
      passives: [
        {
          name: { fr: 'Ã€ chaque jour suffit Ã  sa peine', en: 'Enough trouble for each day', es: 'A cada dÃ­a le basta su pena' },
          effect: {
            fr: 'StabilisÃ©, immunitÃ© retrait PM, fuite spÃ©ciale sur perte de 10% PV/tour.',
            en: 'Stabilized, immune to MP removal, special escape when losing 10% HP/turn.',
            es: 'Estabilizado, inmune a retiro de PM, huida especial al perder 10% PV/turno.',
          },
          notes: [],
        },
      ],
      stats: [
        { fr: 'RÃ´le: boss de zoning', en: 'Role: zoning boss', es: 'Rol: jefe de zonificaciÃ³n' },
      ],
    },
    mechanics: [
      {
        title: { fr: 'Fuite des Ã‰garÃ©s', en: 'Lost Ones Escape', es: 'Huida de los Extraviados' },
        paragraphs: [
          {
            fr: 'Tous les Ã‰garÃ©s ont une mÃ©canique de Fuite, mÃªme sâ€™il ne reste quâ€™un seul monstre.',
            en: 'All Lost Ones have an Escape mechanic, even if only one monster remains.',
            es: 'Todos los Extraviados tienen mecÃ¡nica de Huida, incluso si queda un solo monstruo.',
          },
          {
            fr: 'La Fuite peut Ãªtre contrÃ©e par stabilisation, sauf sur le boss.',
            en: 'Escape can be countered by stabilization, except on the boss.',
            es: 'La Huida puede contrarrestarse con estabilizaciÃ³n, excepto en el jefe.',
          },
        ],
      },
      {
        title: { fr: 'Marionettes et Sur un fil', en: 'Marionettes and On a String', es: 'Marionetas y Sobre un hilo' },
        paragraphs: [
          {
            fr: 'Les Ã‰garÃ©s ne meurent pas seuls: Ã  1 PV, ils passent en Ã©tat Sur un fil.',
            en: 'Lost Ones do not die individually: at 1 HP they enter the On a String state.',
            es: 'Los Extraviados no mueren individualmente: a 1 PV entran en estado Sobre un hilo.',
          },
          {
            fr: 'Sur un fil: ressuscite aprÃ¨s 2 tours (50% PV, valeur divisÃ©e par 2 Ã  chaque rÃ©surrection), passe son tour et est insensible pendant lâ€™Ã©tat.',
            en: 'On a String: resurrects after 2 turns (50% HP, halved each resurrection), skips turn and is insensitive while in state.',
            es: 'Sobre un hilo: resucita tras 2 turnos (50% PV, valor dividido entre 2 en cada resurrecciÃ³n), pasa turno y es insensible durante el estado.',
          },
          {
            fr: 'Condition de fin: mettre tous les Ã‰garÃ©s Sur un fil en moins de 2 tours.',
            en: 'Finish condition: put all Lost Ones into On a String in under 2 turns.',
            es: 'CondiciÃ³n de finalizaciÃ³n: poner a todos los Extraviados en Sobre un hilo en menos de 2 turnos.',
          },
        ],
      },
      {
        title: { fr: 'Salle 1, salle boss et stratÃ©gie', en: 'Room 1, boss room and strategy', es: 'Sala 1, sala de jefe y estrategia' },
        paragraphs: [
          {
            fr: 'Salle 1: 3 + 3 + 2 Ã‰garÃ©s. Salle boss: !@#dh`~ + 3 + 2 + 2 Ã‰garÃ©s.',
            en: 'Room 1: 3 + 3 + 2 Lost Ones. Boss room: !@#dh`~ + 3 + 2 + 2 Lost Ones.',
            es: 'Sala 1: 3 + 3 + 2 Extraviados. Sala de jefe: !@#dh`~ + 3 + 2 + 2 Extraviados.',
          },
          {
            fr: 'PrioritÃ©: contrÃ´ler les placements, gÃ©rer les Fuites et synchroniser les KO.',
            en: 'Priority: control positions, manage Escapes, and synchronize KOs.',
            es: 'Prioridad: controlar posicionamientos, gestionar Huidas y sincronizar KOs.',
          },
          {
            fr: 'Le boss ajoute une forte pression de glyphes, il faut protÃ©ger les trajectoires sÃ»res.',
            en: 'The boss adds heavy glyph pressure, so safe movement lanes must be protected.',
            es: 'El jefe aÃ±ade mucha presiÃ³n de glifos, por lo que hay que proteger rutas seguras de movimiento.',
          },
          {
            fr: 'StratÃ©gie dÃ©taillÃ©e en cours de complÃ©tion.',
            en: 'Detailed strategy is still being completed.',
            es: 'La estrategia detallada sigue en proceso de completarse.',
          },
        ],
      },
    ],
    plan: {
      fr: 'Plan recommandÃ©: contrÃ´le + stabilisation + burst coordonnÃ© pour forcer les KO synchronisÃ©s.',
      en: 'Recommended plan: control + stabilization + coordinated burst to force synchronized KOs.',
      es: 'Plan recomendado: control + estabilizaciÃ³n + burst coordinado para forzar KOs sincronizados.',
    },
    steles: {
      lead: {
        fr: "StÃ¨le d'intervention Anathar: nÃ©cessite une Clef d'intervention d'Anathar.",
        en: 'Anathar intervention stele: requires an Anathar Intervention Key.',
        es: 'Estela de intervenciÃ³n de Anathar: requiere una Llave de intervenciÃ³n de Anathar.',
      },
      notes: [
        {
          fr: "Anathar marque gÃ©nÃ©ralement le joueur le plus Ã©loignÃ©, puis rÃ©plique jusqu'Ã  4 actions observÃ©es Ã  son tour suivant.",
          en: 'Anathar usually marks the farthest player, then replicates up to 4 observed actions on its next turn.',
          es: 'Anathar suele marcar al jugador mÃ¡s lejano y luego replica hasta 4 acciones observadas en su siguiente turno.',
        },
        {
          fr: "Si moins de 4 actions sont observÃ©es, Infierno DemonÃ­aco s'active et devient plus dangereux avec peu d'actions.",
          en: 'If fewer than 4 actions are observed, Demonic Hellfire triggers and becomes stronger with fewer actions.',
          es: 'Si se observan menos de 4 acciones, se activa Infierno DemonÃ­aco y se vuelve mÃ¡s peligroso cuantas menos acciones haya.',
        },
        {
          fr: 'Effet spÃ©cifique Ã‰garÃ©s: Anathar doit aussi Ãªtre mis Ã  1 PdV comme les autres monstres/boss.',
          en: 'Lost Ones specific effect: Anathar must also be reduced to 1 HP like the other mobs/boss.',
          es: 'Efecto especÃ­fico Idos: Anathar tambiÃ©n debe quedar a 1 PdV como el resto de mobs/jefe.',
        },
        {
          fr: 'La table des effets par action (PM/PA, soins, armure, placements, dÃ©gÃ¢ts Ã©lÃ©mentaires) suit la table de rÃ©fÃ©rence Anathar.',
          en: 'The action-to-effect mapping (MP/AP, healing, armor, positioning, elemental damage) follows the Anathar reference table.',
          es: 'El mapeo acciÃ³n-efecto (PM/PA, curas, armadura, posicionamiento, daÃ±os elementales) sigue la tabla de referencia de Anathar.',
        },
      ],
      protoBosses: [],
      crystals: {
        types: [
          {
            fr: "Action du marquÃ© Ã  Ã©viter: retrait PA/PM, dons PA/PM, tÃ©lÃ©portations et dÃ©gÃ¢ts Ã©lÃ©mentaires non nÃ©cessaires.",
            en: 'Marked-player actions to avoid: AP/MP removal, AP/MP buffs, teleports and unnecessary elemental damage actions.',
            es: 'Acciones del marcado a evitar: retiro/don de PA/PM, teletransportes y acciones de daÃ±o elemental no necesarias.',
          },
        ],
        notes: [
          {
            fr: 'Conserver un tour marquÃ© lisible et court pour rÃ©duire le risque de rÃ©plication punitive.',
            en: 'Keep marked turns simple and short to reduce punitive replication risk.',
            es: 'Mantener turnos del marcado simples y cortos para reducir riesgo de replicaciÃ³n punitiva.',
          },
        ],
        stats: [],
      },
    },
    drops: {
      notes: [
        {
          fr: 'Section maintenue dans la structure, contenu drops Ã  complÃ©ter.',
          en: 'Section kept in structure, drops content pending completion.',
          es: 'SecciÃ³n mantenida en la estructura, contenido de drops pendiente.',
        },
      ],
      monsterDrops: [],
      bossDrops: [],
    },
    croupier: {
      location: {
        fr: 'Section Ã  complÃ©ter.',
        en: 'Section to be completed.',
        es: 'SecciÃ³n por completar.',
      },
      items: [],
    },
  },
  {
    id: 'demhorribles',
    name: { fr: 'Donjon DÃ©mhorribles', en: 'Demhorribles Dungeon', es: 'Mazmorra Demorribles' },
    subtitle: {
      fr: 'Boss: CratÃ©ros, Bourreau de la fin',
      en: 'Boss: Crateros, Executioner of the End',
      es: 'Jefe: CratÃ©ros, Verdugo del fin',
    },
    levelRange: { fr: 'Niv. 216', en: 'Lvl. 216', es: 'Niv. 216' },
    summary: [
      {
        fr: 'Donjon pour 6 joueurs, 2 salles, sans clef.',
        en: 'Dungeon for 6 players, 2 rooms, no key required.',
        es: 'Mazmorra para 6 jugadores, 2 salas y sin llave.',
      },
      {
        fr: 'MÃ©canique centrale: jouer depuis les glyphes posÃ©s par les monstres pour Ã©viter la rÃ©duction de dÃ©gÃ¢ts.',
        en: 'Core mechanic: attack from monster-created glyphs to avoid heavy damage reduction.',
        es: 'MecÃ¡nica central: atacar desde los glifos colocados por los monstruos para evitar la gran reducciÃ³n de daÃ±o.',
      },
      {
        fr: 'Les PV des DÃ©mhorribles sont harmonisÃ©s par salle (plus bas en salle 1, plus Ã©levÃ©s en salle boss).',
        en: 'Demhorribles HP are normalized per room (lower in room 1, higher in boss room).',
        es: 'Los PV de los DÃ©mhorribles estÃ¡n normalizados por sala (mÃ¡s bajos en sala 1 y mÃ¡s altos en sala de jefe).',
      },
      {
        fr: 'Certaines informations (stratÃ©gie, drops dÃ©taillÃ©s, croupier) seront complÃ©tÃ©es ultÃ©rieurement.',
        en: 'Some details (strategy, detailed drops, croupier) will be completed later.',
        es: 'Algunos detalles (estrategia, drops detallados, croupier) se completarÃ¡n mÃ¡s adelante.',
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
          fr: 'Monstre parasite orientÃ© vol de vie et liaison HÃ´te/Parasite.',
          en: 'Parasite-type monster focused on life steal and Host/Parasite link.',
          es: 'Monstruo parÃ¡sito orientado al robo de vida y vÃ­nculo HuÃ©sped/ParÃ¡sito.',
        },
        spells: [
          {
            name: { fr: 'Morsure parasitaire', en: 'Parasitic Bite', es: 'Mordida parasitaria' },
            effect: {
              fr: 'Monocible 1 PO, gros dÃ©gÃ¢ts feu, vole 100% des dommages. Applique Parasite au lanceur et HÃ´te Ã  la cible.',
              en: 'Single-target 1 range, heavy fire damage, steals 100% damage dealt. Applies Parasite to caster and Host to target.',
              es: 'Monobjetivo 1 alcance, gran daÃ±o fuego, roba 100% del daÃ±o infligido. Aplica ParÃ¡sito al lanzador y HuÃ©sped al objetivo.',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
          },
        ],
        passive: {
          fr: 'DÃ©mhorribles: pose un glyphe anneau (rayon 3, taille 2) quand il subit des dommages. Hors glyphe: -80% dommages reÃ§us. Depuis son glyphe: +20% dommages reÃ§us.',
          en: 'Demhorribles: places a ring glyph (radius 3, size 2) when damaged. Off-glyph: -80% damage taken. From its glyph: +20% damage taken.',
          es: 'DÃ©mhorribles: coloca un glifo anillo (radio 3, tamaÃ±o 2) al recibir daÃ±o. Fuera del glifo: -80% daÃ±o recibido. Desde su glifo: +20% daÃ±o recibido.',
        },
        notes: [
          {
            fr: 'Parasite relance la Morsure parasitaire sur son HÃ´te en dÃ©but de tour avec dommages doublÃ©s.',
            en: 'Parasite recasts Parasitic Bite on its Host at turn start with doubled damage.',
            es: 'ParÃ¡sito relanza Mordida parasitaria sobre su HuÃ©sped al inicio de turno con daÃ±o duplicado.',
          },
        ],
        stats: [
          { fr: 'RÃ´le: pression mono-cible', en: 'Role: single-target pressure', es: 'Rol: presiÃ³n monobjetivo' },
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
          fr: 'Monstre de harcÃ¨lement Ã  distance avec vol dâ€™armure en zone.',
          en: 'Ranged harassment unit with area armor steal.',
          es: 'Unidad de hostigamiento a distancia con robo de armadura en Ã¡rea.',
        },
        spells: [
          {
            name: { fr: 'HarcÃ¨lement', en: 'Harassment', es: 'Acoso' },
            effect: {
              fr: 'Monocible 3-6 PO modifiable, dÃ©gÃ¢ts air, applique +1 niv. HarcÃ¨lement (max 3).',
              en: 'Single-target 3-6 modifiable range, air damage, applies +1 Harassment level (max 3).',
              es: 'Monobjetivo 3-6 alcance modificable, daÃ±o aire, aplica +1 nivel de Acoso (mÃ¡x 3).',
            },
            cost: { fr: '3 PA', en: '3 AP', es: '3 PA' },
            limit: { fr: '1/cible, 2/tour', en: '1/target, 2/turn', es: '1/objetivo, 2/turno' },
          },
          {
            name: { fr: 'Auto-dÃ©fense', en: 'Self Defense', es: 'Autodefensa' },
            effect: {
              fr: 'Zone cercle taille 2 (0 PO), vole 100% armure ennemie, dÃ©gÃ¢ts feu, applique Incurable niv. 5.',
              en: 'Size-2 circle AoE (0 range), steals 100% enemy armor, fire damage, applies Unhealable lvl 5.',
              es: 'Ãrea cÃ­rculo tamaÃ±o 2 (0 alcance), roba 100% armadura enemiga, daÃ±o fuego, aplica Incurable niv. 5.',
            },
            cost: { fr: '6 PA', en: '6 AP', es: '6 PA' },
            limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
          },
        ],
        passive: {
          fr: 'DÃ©mhorribles: pose un glyphe croix diagonale taille 2 sous lui quand il subit des dommages. Hors glyphe: -80% dommages reÃ§us. Depuis son glyphe: +20% dommages reÃ§us.',
          en: 'Demhorribles: places a diagonal cross glyph size 2 when damaged. Off-glyph: -80% damage taken. From its glyph: +20% damage taken.',
          es: 'DÃ©mhorribles: coloca un glifo de cruz diagonal tamaÃ±o 2 al recibir daÃ±o. Fuera del glifo: -80% daÃ±o recibido. Desde su glifo: +20% daÃ±o recibido.',
        },
        notes: [
          {
            fr: 'HarcÃ¨lement inflige des dÃ©gÃ¢ts air Ã  lâ€™alliÃ© le plus proche du porteur au dÃ©but de son tour.',
            en: 'Harassment deals air damage to the nearest ally of the carrier at turn start.',
            es: 'Acoso inflige daÃ±o aire al aliado mÃ¡s cercano del portador al inicio de su turno.',
          },
        ],
        stats: [
          { fr: 'RÃ´le: anti-armure / poke', en: 'Role: anti-armor / poke', es: 'Rol: antiarmadura / poke' },
        ],
      },
      {
        name: { fr: 'Rapace dÃ©peceur', en: 'Rending Raptor', es: 'Rapaz despellejador' },
        level: { fr: 'Niv. 216', en: 'Lvl. 216', es: 'Niv. 216' },
        bonus: {
          fr: 'Faiblesse principale: Terre',
          en: 'Main weakness: Earth',
          es: 'Debilidad principal: Tierra',
        },
        description: {
          fr: 'Assassin mobile qui empile Saignement pour amplifier DÃ©peÃ§age.',
          en: 'Mobile assassin that stacks Bleeding to amplify Rending.',
          es: 'Asesino mÃ³vil que acumula Sangrado para amplificar Despiece.',
        },
        spells: [
          {
            name: { fr: 'Bond', en: 'Leap', es: 'Salto' },
            effect: {
              fr: 'Monocible 1-4 PO en ligne sans ligne de vue, se tÃ©lÃ©porte sur la case ciblÃ©e et gagne +100 RÃ©sistance Ã‰lÃ©mentaire (1 tour).',
              en: 'Single-target 1-4 in-line without line of sight, teleports to target cell and gains +100 Elemental Resistance (1 turn).',
              es: 'Monobjetivo 1-4 en lÃ­nea sin lÃ­nea de visiÃ³n, se teletransporta a la celda objetivo y gana +100 Resistencia Elemental (1 turno).',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: 'Relance 2 tours', en: '2-turn cooldown', es: 'Recarga 2 turnos' },
          },
          {
            name: { fr: 'DÃ©peÃ§age', en: 'Rending', es: 'Despiece' },
            effect: {
              fr: 'Monocible 1-4 PO, dÃ©gÃ¢ts eau, applique +1 niv. Saignement (max 10).',
              en: 'Single-target 1-4 range, water damage, applies +1 Bleeding level (max 10).',
              es: 'Monobjetivo 1-4 alcance, daÃ±o agua, aplica +1 nivel de Sangrado (mÃ¡x 10).',
            },
            cost: { fr: '3 PA', en: '3 AP', es: '3 PA' },
            limit: { fr: '1/cible, 3/tour', en: '1/target, 3/turn', es: '1/objetivo, 3/turno' },
          },
        ],
        passive: {
          fr: 'DÃ©mhorribles: pose une ligne taille 4 sur ses deux cÃ´tÃ©s quand il subit des dommages. Hors glyphe: -80% dommages reÃ§us. Depuis son glyphe: +20% dommages reÃ§us.',
          en: 'Demhorribles: places a size-4 line on both sides when damaged. Off-glyph: -80% damage taken. From its glyph: +20% damage taken.',
          es: 'DÃ©mhorribles: coloca una lÃ­nea tamaÃ±o 4 en ambos lados al recibir daÃ±o. Fuera del glifo: -80% daÃ±o recibido. Desde su glifo: +20% daÃ±o recibido.',
        },
        notes: [
          {
            fr: 'Saignement augmente les dommages subis par DÃ©peÃ§age de 50% par niveau (2 tours).',
            en: 'Bleeding increases damage taken from Rending by 50% per stack (2 turns).',
            es: 'Sangrado aumenta el daÃ±o recibido de Despiece en 50% por nivel (2 turnos).',
          },
        ],
        stats: [
          { fr: 'RÃ´le: burst progressif', en: 'Role: scaling burst', es: 'Rol: burst progresivo' },
        ],
      },
      {
        name: { fr: 'CratÃ©ros, Bourreau de la fin (Boss)', en: 'Crateros, Executioner of the End (Boss)', es: 'CratÃ©ros, Verdugo del fin (Jefe)' },
        level: { fr: 'Boss', en: 'Boss', es: 'Jefe' },
        bonus: {
          fr: 'StabilisÃ©',
          en: 'Stabilized',
          es: 'Estabilizado',
        },
        description: {
          fr: 'Boss de contrÃ´le de placement et anti-armure avec montÃ©e en puissance Furieux.',
          en: 'Position-control and anti-armor boss with Furious scaling.',
          es: 'Jefe de control de posicionamiento y antiarmadura con escalado Furioso.',
        },
        spells: [
          {
            name: { fr: 'Coup de collier', en: 'Leash Strike', es: 'Golpe de correa' },
            effect: {
              fr: 'Monocible 1-4 PO, dÃ©gÃ¢ts eau, applique Incurable niv. 4.',
              en: 'Single-target 1-4 range, water damage, applies Unhealable lvl 4.',
              es: 'Monobjetivo 1-4 alcance, daÃ±o agua, aplica Incurable niv. 4.',
            },
            cost: { fr: '2 PA', en: '2 AP', es: '2 PA' },
            limit: { fr: '1/cible, 3/tour', en: '1/target, 3/turn', es: '1/objetivo, 3/turno' },
          },
          {
            name: { fr: 'Prison fatale', en: 'Fatal Prison', es: 'PrisiÃ³n fatal' },
            effect: {
              fr: 'TÃ©lÃ©porte un ennemi Ã©loignÃ© (8 PO et +) dans une zone proche du boss.',
              en: 'Teleports a distant enemy (8+ range) into an area near the boss.',
              es: 'Teletransporta un enemigo lejano (8+ alcance) a una zona cercana al jefe.',
            },
            cost: { fr: '2 PA', en: '2 AP', es: '2 PA' },
            limit: { fr: 'Relance 3 tours', en: '3-turn cooldown', es: 'Recarga 3 turnos' },
          },
          {
            name: { fr: 'EnchaÃ®nement fatal', en: 'Fatal Chain', es: 'Encadenamiento fatal' },
            effect: {
              fr: 'Zone cercle taille 2 (0 PO), vole 100% armure ennemie et inflige des dÃ©gÃ¢ts terre.',
              en: 'Size-2 circle AoE (0 range), steals 100% enemy armor and deals earth damage.',
              es: 'Ãrea cÃ­rculo tamaÃ±o 2 (0 alcance), roba 100% armadura enemiga e inflige daÃ±o tierra.',
            },
            cost: { fr: '5 PA', en: '5 AP', es: '5 PA' },
            limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
          },
        ],
        passive: {
          fr: 'Bourreau de la fin: pose un glyphe cercle taille 2 quand il subit des dommages. Hors glyphe: -80% dommages reÃ§us. Depuis son glyphe: +50% dommages reÃ§us. Gagne Furieux si un dÃ©mon ne subit pas de dÃ©gÃ¢ts depuis un glyphe pendant un tour joueur ou en cas de tentative de retrait PM.',
          en: 'Executioner of the End: places a size-2 circle glyph when damaged. Off-glyph: -80% damage taken. From its glyph: +50% damage taken. Gains Furious if a demon takes no glyph-based damage during a player turn or when MP removal is attempted.',
          es: 'Verdugo del fin: coloca un glifo cÃ­rculo tamaÃ±o 2 al recibir daÃ±o. Fuera del glifo: -80% daÃ±o recibido. Desde su glifo: +50% daÃ±o recibido. Gana Furioso si un demonio no recibe daÃ±o desde glifo durante un turno jugador o al intentar quitar PM.',
        },
        notes: [],
        stats: [
          { fr: 'RÃ´le: contrÃ´le + punition', en: 'Role: control + punishment', es: 'Rol: control + castigo' },
        ],
      },
    ],
    boss: {
      name: { fr: 'CratÃ©ros, Bourreau de la fin', en: 'Crateros, Executioner of the End', es: 'CratÃ©ros, Verdugo del fin' },
      level: { fr: 'Niv. 216+', en: 'Lvl. 216+', es: 'Niv. 216+' },
      description: {
        fr: 'Boss stabilisÃ© qui force le jeu sur glyphes et punit les erreurs de placement.',
        en: 'Stabilized boss that forces glyph play and punishes positioning mistakes.',
        es: 'Jefe estabilizado que obliga a jugar sobre glifos y castiga errores de posicionamiento.',
      },
      spells: [
        {
          name: { fr: 'Prison fatale', en: 'Fatal Prison', es: 'PrisiÃ³n fatal' },
          effect: {
            fr: 'RamÃ¨ne une cible distante dans sa zone de danger.',
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
            fr: 'DurÃ©e infinie, max 50 niveaux. +5% dommages infligÃ©s par niveau et +1 PM tous les 4 niveaux.',
            en: 'Infinite duration, max 50 levels. +5% damage dealt per level and +1 MP every 4 levels.',
            es: 'DuraciÃ³n infinita, mÃ¡ximo 50 niveles. +5% daÃ±o infligido por nivel y +1 PM cada 4 niveles.',
          },
          notes: [],
        },
      ],
      stats: [
        { fr: 'RÃ´le: boss de tempo', en: 'Role: tempo boss', es: 'Rol: jefe de tempo' },
      ],
    },
    mechanics: [
      {
        title: { fr: 'Lien de vie et glyphes', en: 'Life Link and glyphs', es: 'VÃ­nculo de vida y glifos' },
        paragraphs: [
          {
            fr: 'Tous les DÃ©mhorribles partagent un Ã©tat Lien de vie: les dommages rÃ©percutÃ©s prennent en compte les glyphes des DÃ©mhorribles.',
            en: 'All Demhorribles share a Life Link state: reflected damage interactions still account for Demhorribles glyph rules.',
            es: 'Todos los DÃ©mhorribles comparten un estado VÃ­nculo de vida: las repercusiones de daÃ±o tambiÃ©n respetan las reglas de glifos.',
          },
          {
            fr: 'RÃ¨gle clÃ©: hors glyphe du monstre ciblÃ©, vos dÃ©gÃ¢ts sont fortement rÃ©duits.',
            en: 'Key rule: outside the targeted monster glyph, your damage is heavily reduced.',
            es: 'Regla clave: fuera del glifo del monstruo objetivo, tu daÃ±o se reduce fuertemente.',
          },
        ],
      },
      {
        title: { fr: 'Composition des salles', en: 'Room composition', es: 'ComposiciÃ³n de salas' },
        paragraphs: [
          {
            fr: 'Salle 1: 2x Sangsure, 2x Condamnateur, 2x Rapace dÃ©peceur.',
            en: 'Room 1: 2x Bloodleech, 2x Condemner, 2x Rending Raptor.',
            es: 'Sala 1: 2x Sangsure, 2x Condenador, 2x Rapaz despellejador.',
          },
          {
            fr: 'Salle boss: 1x CratÃ©ros + 1x Sangsure + 1x Condamnateur + 1x Rapace dÃ©peceur.',
            en: 'Boss room: 1x Crateros + 1x Bloodleech + 1x Condemner + 1x Rending Raptor.',
            es: 'Sala de jefe: 1x CratÃ©ros + 1x Sangsure + 1x Condenador + 1x Rapaz despellejador.',
          },
        ],
      },
      {
        title: { fr: 'Exploits', en: 'Achievements', es: 'Logros' },
        paragraphs: [
          {
            fr: 'Donjon DÃ©mhorribles I: terminer le donjon (5 Jetons Infernaux).',
            en: 'Demhorribles Dungeon I: clear the dungeon (5 Infernal Tokens).',
            es: 'Mazmorra DÃ©mhorribles I: completar la mazmorra (5 Fichas Infernales).',
          },
          {
            fr: 'Donjon DÃ©mhorribles II: vaincre le boss en premier (5 Jetons Infernaux).',
            en: 'Demhorribles Dungeon II: defeat boss first (5 Infernal Tokens).',
            es: 'Mazmorra DÃ©mhorribles II: vencer al jefe primero (5 Fichas Infernales).',
          },
          {
            fr: 'Donjon DÃ©mhorribles III: vaincre le boss en dernier (5 Jetons Infernaux).',
            en: 'Demhorribles Dungeon III: defeat boss last (5 Infernal Tokens).',
            es: 'Mazmorra DÃ©mhorribles III: vencer al jefe al final (5 Fichas Infernales).',
          },
          {
            fr: 'Donjon DÃ©mhorribles Final: terminer I, II et III (Miniature de CratÃ©ros + 5 Jetons Infernaux).',
            en: 'Demhorribles Dungeon Final: complete I, II and III (Crateros Miniature + 5 Infernal Tokens).',
            es: 'Mazmorra DÃ©mhorribles Final: completar I, II y III (Miniatura de CratÃ©ros + 5 Fichas Infernales).',
          },
        ],
      },
    ],
    plan: {
      fr: 'StratÃ©gie dÃ©taillÃ©e: Ã  venir.',
      en: 'Detailed strategy: coming soon.',
      es: 'Estrategia detallada: prÃ³ximamente.',
    },
    steles: {
      lead: {
        fr: "StÃ¨le d'intervention Anathar: nÃ©cessite une Clef d'intervention d'Anathar.",
        en: 'Anathar intervention stele: requires an Anathar Intervention Key.',
        es: 'Estela de intervenciÃ³n de Anathar: requiere una Llave de intervenciÃ³n de Anathar.',
      },
      notes: [
        {
          fr: "Anathar observe les actions du joueur marquÃ© et en rÃ©plique jusqu'Ã  4 Ã  son tour suivant.",
          en: 'Anathar observes actions of the marked player and replicates up to 4 on its next turn.',
          es: 'Anathar observa las acciones del jugador marcado y replica hasta 4 en su siguiente turno.',
        },
        {
          fr: "Avec moins de 4 actions observÃ©es, Infierno DemonÃ­aco peut dÃ©clencher dÃ©gÃ¢ts globaux, bonus ennemis, voire soin massif selon le nombre d'actions.",
          en: 'With fewer than 4 observed actions, Demonic Hellfire can trigger global damage, enemy buffs, and even large healing depending on action count.',
          es: 'Con menos de 4 acciones observadas, Infierno DemonÃ­aco puede activar daÃ±o global, buffs enemigos e incluso curaciÃ³n masiva segÃºn el nÃºmero de acciones.',
        },
        {
          fr: "Effet spÃ©cifique DÃ©mhorribles: Anathar gagne Lien de vie et ses PdV s'ajoutent au total du groupe; sa zone de vulnÃ©rabilitÃ© est CaC (1 case) + ligne Ã  3 cases.",
          en: 'Demhorribles specific effect: Anathar gains Life Link and its HP is added to the shared pool; vulnerability zone is melee (1 cell) + 3-cell line range.',
          es: 'Efecto especÃ­fico Demorribles: Anathar gana Enlace de Vida y sus PdV se suman al total; su zona de recibir daÃ±o es CaC (1 casilla) + lÃ­nea de 3 casillas.',
        },
        {
          fr: 'La table des effets par action (PM/PA, soins, armure, placements, dÃ©gÃ¢ts Ã©lÃ©mentaires) suit la table de rÃ©fÃ©rence Anathar.',
          en: 'The action-to-effect mapping (MP/AP, healing, armor, positioning, elemental damage) follows the Anathar reference table.',
          es: 'El mapeo acciÃ³n-efecto (PM/PA, curas, armadura, posicionamiento, daÃ±os elementales) sigue la tabla de referencia de Anathar.',
        },
      ],
      protoBosses: [],
      crystals: {
        types: [
          {
            fr: "PrioritÃ©: contrÃ´ler le tour du marquÃ© et Ã©viter de gÃ©nÃ©rer des actions diffÃ©rentes inutiles.",
            en: 'Priority: control the marked player turn and avoid unnecessary different action types.',
            es: 'Prioridad: controlar el turno del marcado y evitar generar acciones diferentes innecesarias.',
          },
        ],
        notes: [
          {
            fr: 'Le terme Â« combattants Â» inclut joueurs, monstres et boss.',
            en: 'The term â€œcombatantsâ€ includes players, monsters and boss units.',
            es: 'El tÃ©rmino â€œcombatientesâ€ incluye jugadores, mobs y jefe.',
          },
        ],
        stats: [],
      },
    },
    drops: {
      notes: [
        {
          fr: 'Drops du donjon et du boss: liens directs Ã  ajouter.',
          en: 'Dungeon and boss drops: direct links to add.',
          es: 'Drops de mazmorra y jefe: enlaces directos por aÃ±adir.',
        },
      ],
      monsterDrops: [],
      bossDrops: [],
    },
    croupier: {
      location: {
        fr: 'Section Ã  complÃ©ter.',
        en: 'Section to be completed.',
        es: 'SecciÃ³n por completar.',
      },
      items: [],
    },
  },
  {
    id: 'vaciantes',
    name: { fr: 'Donjon VidÃ©ants', en: 'Videants Dungeon', es: 'Mazmorra de los Vaciantes' },
    subtitle: {
      fr: 'Boss: Arâ€™Nan, Augure du nÃ©ant',
      en: 'Boss: Arâ€™Nan, Augur of the Void',
      es: 'Jefe: Arâ€™Nan, Augur del VacÃ­o',
    },
    levelRange: { fr: 'Niv. 216', en: 'Lvl. 216', es: 'Niv. 216' },
    summary: [
      {
        fr: 'Donjon pour 6 joueurs, 2 salles, sans clef.',
        en: 'Dungeon for 6 players, 2 rooms, no key required.',
        es: 'Mazmorra para 6 jugadores, 2 salas y sin llave.',
      },
      {
        fr: 'MÃ©canique centrale: provoquer lâ€™Ã©tat Inactif avec la bonne condition pour chaque monstre.',
        en: 'Core mechanic: trigger the Inactive state through each monster specific condition.',
        es: 'MecÃ¡nica central: provocar el estado Inactivo cumpliendo la condiciÃ³n especÃ­fica de cada monstruo.',
      },
      {
        fr: 'Le NÃ©ant alterne ses zones et punit les entrÃ©es dans lâ€™aura (dÃ©gÃ¢ts stasis Ã©levÃ©s une fois par tour).',
        en: 'The Void alternates zones and punishes aura entries (heavy stasis damage once per turn).',
        es: 'El VacÃ­o alterna zonas y castiga la entrada en el aura (daÃ±o estasis alto una vez por turno).',
      },
      {
        fr: 'Certaines informations (stratÃ©gie dÃ©taillÃ©e, drops prÃ©cis, croupier) seront complÃ©tÃ©es ultÃ©rieurement.',
        en: 'Some details (detailed strategy, exact drops, croupier) will be completed later.',
        es: 'Algunos detalles (estrategia detallada, drops exactos, crupier) se completarÃ¡n mÃ¡s adelante.',
      },
    ],
    monsters: [
      {
        name: { fr: 'EchinoidÃ©ant', en: 'Echinoideant', es: 'Equinoideante' },
        level: { fr: 'Niv. 216', en: 'Lvl. 216', es: 'Niv. 216' },
        bonus: {
          fr: 'Faiblesse principale: Air',
          en: 'Main weakness: Air',
          es: 'Debilidad principal: Aire',
        },
        description: {
          fr: 'Frontline de zone qui attire en mÃªlÃ©e et stabilise les cibles collÃ©es.',
          en: 'AoE frontline unit that pulls into melee and stabilizes contacted enemies.',
          es: 'Unidad de primera lÃ­nea en Ã¡rea que atrae a melee y estabiliza objetivos en contacto.',
        },
        spells: [
          {
            name: { fr: 'Attaque', en: 'Attack', es: 'Ataque' },
            effect: {
              fr: 'Zone croix taille 1 (0 PO), lourds dÃ©gÃ¢ts feu. LancÃ© automatiquement en dÃ©but de tour.',
              en: 'Size-1 cross AoE (0 range), heavy fire damage. Cast automatically at turn start.',
              es: 'Ãrea cruz tamaÃ±o 1 (0 alcance), gran daÃ±o fuego. Se lanza automÃ¡ticamente al inicio del turno.',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
          },
          {
            name: { fr: 'Attirance', en: 'Attraction', es: 'AtracciÃ³n' },
            effect: {
              fr: 'Zone croix taille 10 (0 PO), dÃ©gÃ¢ts air et attire au contact. Les ennemis arrivÃ©s au contact deviennent StabilisÃ©s (1 tour).',
              en: 'Size-10 cross AoE (0 range), air damage and pulls to melee. Enemies pulled into contact become Stabilized (1 turn).',
              es: 'Ãrea cruz tamaÃ±o 10 (0 alcance), daÃ±o aire y atrae al contacto. Enemigos que llegan al contacto quedan Estabilizados (1 turno).',
            },
            cost: { fr: '5 PA', en: '5 AP', es: '5 PA' },
            limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
          },
        ],
        passive: {
          fr: 'EchinoidÃ©ant: devient Inactif (1 tour) sâ€™il subit des dommages au contact (1 fois par tour de lâ€™attaquant).',
          en: 'Echinoideant: becomes Inactive (1 turn) if it takes melee damage (once per attacker turn).',
          es: 'Equinoideante: se vuelve Inactivo (1 turno) si recibe daÃ±o en contacto (1 vez por turno del atacante).',
        },
        notes: [
          {
            fr: 'Ã‰tat Inactif: passe son tour et gagne 400 RÃ©sistance Ã‰lÃ©mentaire.',
            en: 'Inactive state: skips turn and gains 400 Elemental Resistance.',
            es: 'Estado Inactivo: pasa turno y gana 400 Resistencia Elemental.',
          },
        ],
        stats: [
          { fr: 'RÃ´le: traction / contrÃ´le melee', en: 'Role: pull / melee control', es: 'Rol: tracciÃ³n / control melee' },
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
          fr: 'DPS mobile orientÃ© dos et retrait de PW en zone dâ€™arrivÃ©e.',
          en: 'Mobile DPS focused on back damage and PW removal in arrival area.',
          es: 'DPS mÃ³vil enfocado en daÃ±o por espalda y retiro de PW en zona de llegada.',
        },
        spells: [
          {
            name: { fr: 'Attaque', en: 'Attack', es: 'Ataque' },
            effect: {
              fr: 'Monocible 1-3 PO, dÃ©gÃ¢ts terre.',
              en: 'Single-target 1-3 range, earth damage.',
              es: 'Monobjetivo 1-3 alcance, daÃ±o tierra.',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/cible, 2/tour', en: '1/target, 2/turn', es: '1/objetivo, 2/turno' },
          },
          {
            name: { fr: 'Saut', en: 'Jump', es: 'Salto' },
            effect: {
              fr: 'TÃ©lÃ©portation 2-4 PO (sans ligne de vue), retire 1 PW aux ennemis dans la zone dâ€™arrivÃ©e (croix taille 1).',
              en: '2-4 range teleport (no line of sight), removes 1 WP from enemies in the arrival zone (size-1 cross).',
              es: 'Teletransporte 2-4 alcance (sin lÃ­nea de visiÃ³n), retira 1 PW a enemigos en la zona de llegada (cruz tamaÃ±o 1).',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
          },
        ],
        passive: {
          fr: 'Inanite: +25% dommages infligÃ©s de dos. Devient Inactif (1 tour) sâ€™il subit des dommages de dos.',
          en: 'Inanite: +25% back damage dealt. Becomes Inactive (1 turn) if it takes back damage.',
          es: 'Inanite: +25% daÃ±os infligidos por espalda. Se vuelve Inactivo (1 turno) si recibe daÃ±o por la espalda.',
        },
        notes: [
          {
            fr: 'Ã‰tat Inactif: passe son tour et gagne 400 RÃ©sistance Ã‰lÃ©mentaire.',
            en: 'Inactive state: skips turn and gains 400 Elemental Resistance.',
            es: 'Estado Inactivo: pasa turno y gana 400 Resistencia Elemental.',
          },
        ],
        stats: [
          { fr: 'RÃ´le: assassin de dos', en: 'Role: backline assassin', es: 'Rol: asesino de espalda' },
        ],
      },
      {
        name: { fr: 'Chrysavide', en: 'Chrysavide', es: 'CrisÃ¡vida' },
        level: { fr: 'Niv. 216', en: 'Lvl. 216', es: 'Niv. 216' },
        bonus: {
          fr: 'Faiblesse principale: Terre/Air',
          en: 'Main weakness: Earth/Air',
          es: 'Debilidad principal: Tierra/Aire',
        },
        description: {
          fr: 'Distance et contrÃ´le via piÃ¨ges PM.',
          en: 'Ranged pressure and control through MP trap fields.',
          es: 'PresiÃ³n a distancia y control mediante trampas de PM.',
        },
        spells: [
          {
            name: { fr: 'Attaque', en: 'Attack', es: 'Ataque' },
            effect: {
              fr: 'Monocible 3-10 PO modifiable, dÃ©gÃ¢ts eau.',
              en: 'Single-target 3-10 modifiable range, water damage.',
              es: 'Monobjetivo 3-10 alcance modificable, daÃ±o agua.',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/cible, 2/tour', en: '1/target, 2/turn', es: '1/objetivo, 2/turno' },
          },
          {
            name: { fr: 'PiÃ¨ge', en: 'Trap', es: 'Trampa' },
            effect: {
              fr: 'Zone croix taille 5 (3-8 PO), pose un piÃ¨ge sur chaque case. Sur joueurs: dÃ©gÃ¢ts terre + -4 PM.',
              en: 'Size-5 cross AoE (3-8 range), places a trap on each cell. On players: earth damage + -4 MP.',
              es: 'Ãrea cruz tamaÃ±o 5 (3-8 alcance), coloca una trampa en cada casilla. En jugadores: daÃ±o tierra + -4 PM.',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
          },
        ],
        passive: {
          fr: 'Chrysavide: devient Inactif (1 tour) sâ€™il subit un dÃ©placement.',
          en: 'Chrysavide: becomes Inactive (1 turn) if displaced.',
          es: 'CrisÃ¡vida: se vuelve Inactivo (1 turno) si sufre un desplazamiento.',
        },
        notes: [
          {
            fr: 'Ã‰tat Inactif: passe son tour et gagne 400 RÃ©sistance Ã‰lÃ©mentaire.',
            en: 'Inactive state: skips turn and gains 400 Elemental Resistance.',
            es: 'Estado Inactivo: pasa turno y gana 400 Resistencia Elemental.',
          },
        ],
        stats: [
          { fr: 'RÃ´le: piÃ¨ges / contrÃ´le PM', en: 'Role: traps / MP control', es: 'Rol: trampas / control de PM' },
        ],
      },
      {
        name: { fr: 'Arâ€™Nan, Augure du nÃ©ant (Boss)', en: 'Arâ€™Nan, Augur of the Void (Boss)', es: 'Arâ€™Nan, Augur del VacÃ­o (Jefe)' },
        level: { fr: 'Boss', en: 'Boss', es: 'Jefe' },
        bonus: {
          fr: 'Aura NÃ©ant alternante',
          en: 'Alternating Void aura',
          es: 'Aura VacÃ­o alternante',
        },
        description: {
          fr: 'Boss de contrÃ´le de zone et dâ€™inactivitÃ© conditionnelle.',
          en: 'Zone-control boss with conditional inactivity mechanics.',
          es: 'Jefe de control de zona con mecÃ¡nica de inactividad condicional.',
        },
        spells: [
          {
            name: { fr: 'Attaque', en: 'Attack', es: 'Ataque' },
            effect: {
              fr: 'Monocible, toute la carte sans ligne de vue. DÃ©gÃ¢ts terre et -50 RÃ©sistance Ã‰lÃ©mentaire (cumulable, 4 tours).',
              en: 'Single-target, map-wide without line of sight. Earth damage and -50 Elemental Resistance (stacking, 4 turns).',
              es: 'Monobjetivo, todo el mapa sin lÃ­nea de visiÃ³n. DaÃ±o tierra y -50 Resistencia Elemental (acumulable, 4 turnos).',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
          },
          {
            name: { fr: 'PoussÃ©', en: 'Push', es: 'Empuje' },
            effect: {
              fr: 'Zone croix taille 1 (0 PO), dÃ©gÃ¢ts air, pousse de 7 cases et retire 66 RÃ©sistance Ã‰lÃ©mentaire (4 tours).',
              en: 'Size-1 cross AoE (0 range), air damage, pushes 7 cells and removes 66 Elemental Resistance (4 turns).',
              es: 'Ãrea cruz tamaÃ±o 1 (0 alcance), daÃ±o aire, empuja 7 casillas y retira 66 Resistencia Elemental (4 turnos).',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
          },
          {
            name: { fr: 'Attirance', en: 'Attraction', es: 'AtracciÃ³n' },
            effect: {
              fr: 'Zone croix taille 10 (0 PO), dÃ©gÃ¢ts air, attire de 4 cases et retire 75 RÃ©sistance Ã‰lÃ©mentaire (4 tours).',
              en: 'Size-10 cross AoE (0 range), air damage, pulls 4 cells and removes 75 Elemental Resistance (4 turns).',
              es: 'Ãrea cruz tamaÃ±o 10 (0 alcance), daÃ±o aire, atrae 4 casillas y retira 75 Resistencia Elemental (4 turnos).',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
          },
        ],
        passive: {
          fr: 'Augure du nÃ©ant: le type dâ€™aura NÃ©ant change quand un monstre/joueur meurt ou passe Inactif. En fin de tour, gagne +1 PM cumulable (max 10) rÃ©initialisÃ© quand Arâ€™Nan devient Inactif.',
          en: 'Augur of the Void: Void aura type changes when a monster/player dies or becomes Inactive. End of turn gains +1 stackable MP (max 10), reset when Arâ€™Nan becomes Inactive.',
          es: 'Augur del VacÃ­o: el tipo de aura VacÃ­o cambia cuando un monstruo/jugador muere o queda Inactivo. Fin de turno gana +1 PM acumulable (mÃ¡x 10), se reinicia cuando Arâ€™Nan queda Inactivo.',
        },
        notes: [
          {
            fr: 'InactivitÃ© (passif): devient Inactif sâ€™il ne subit pas de dommages pendant un tour ou sâ€™il subit des dommages dans son aura. Inactif: passe son tour, -200 RÃ©sistance Ã‰lÃ©mentaire (2 tours), puis +40% dommages infligÃ©s (1 tour) en redevenant actif.',
            en: 'Inactivity (passive): becomes Inactive if it takes no damage during a turn or if hit by a player inside its aura. Inactive: skips turn, -200 Elemental Resistance (2 turns), then +40% damage dealt (1 turn) when active again.',
            es: 'Inactividad (pasivo): queda Inactivo si no recibe daÃ±o durante un turno o si recibe daÃ±o de un jugador dentro del aura. Inactivo: pasa turno, -200 Resistencia Elemental (2 turnos), luego +40% daÃ±os infligidos (1 turno) al reactivarse.',
          },
        ],
        stats: [
          { fr: 'RÃ´le: boss de zoning', en: 'Role: zoning boss', es: 'Rol: jefe de zonificaciÃ³n' },
        ],
      },
    ],
    boss: {
      name: { fr: 'Arâ€™Nan, Augure du nÃ©ant', en: 'Arâ€™Nan, Augur of the Void', es: 'Arâ€™Nan, Augur del VacÃ­o' },
      level: { fr: 'Niv. 216+', en: 'Lvl. 216+', es: 'Niv. 216+' },
      description: {
        fr: 'Boss Ã  aura variable (cercle/anneau) qui punit fortement les entrÃ©es dans le NÃ©ant.',
        en: 'Variable-aura boss (circle/ring) that heavily punishes entries into the Void area.',
        es: 'Jefe de aura variable (cÃ­rculo/anillo) que castiga fuertemente la entrada en el VacÃ­o.',
      },
      spells: [
        {
          name: { fr: 'NÃ©ant', en: 'Void', es: 'VacÃ­o' },
          effect: {
            fr: 'Aura alternante: cercle taille 3 puis anneau rayon 6 infini. Une fois par tour, entrÃ©e dans lâ€™aura = lourds dÃ©gÃ¢ts stasis.',
            en: 'Alternating aura: size-3 circle then infinite size ring radius 6. Once per turn, entering aura = heavy stasis damage.',
            es: 'Aura alternante: cÃ­rculo tamaÃ±o 3 y luego anillo de radio 6 infinito. Una vez por turno, entrar al aura = daÃ±o estasis alto.',
          },
          cost: { fr: 'Passif', en: 'Passive', es: 'Pasivo' },
        },
      ],
      passives: [
        {
          name: { fr: 'InactivitÃ©', en: 'Inactivity', es: 'Inactividad' },
          effect: {
            fr: 'DÃ©clenche Inactif selon conditions de dÃ©gÃ¢ts; Inactif applique -200 RÃ©sistance Ã‰lÃ©mentaire puis buff dÃ©gÃ¢ts au rÃ©veil.',
            en: 'Triggers Inactive based on damage conditions; Inactive applies -200 Elemental Resistance then damage buff on wake-up.',
            es: 'Activa Inactivo segÃºn condiciones de daÃ±o; Inactivo aplica -200 Resistencia Elemental y luego buff de daÃ±o al reactivarse.',
          },
          notes: [],
        },
      ],
      stats: [
        { fr: 'RÃ´le: tempo / contrÃ´le de zone', en: 'Role: tempo / zone control', es: 'Rol: tempo / control de zona' },
      ],
    },
    mechanics: [
      {
        title: { fr: 'Inactif sur les VidÃ©ants', en: 'Inactive state on Videants', es: 'Estado Inactivo en Vaciantes' },
        paragraphs: [
          {
            fr: 'Chaque monstre a sa condition propre pour passer Inactif: contact (EchinoidÃ©ant), dos (Inanite), dÃ©placement subi (Chrysavide).',
            en: 'Each monster has a specific condition to become Inactive: melee hit (Echinoideant), back hit (Inanite), displacement taken (Chrysavide).',
            es: 'Cada monstruo tiene su condiciÃ³n para quedar Inactivo: daÃ±o en contacto (Equinoideante), daÃ±o por espalda (Inanite), desplazamiento recibido (CrisÃ¡vida).',
          },
          {
            fr: 'Ã‰tat Inactif: passe le tour et gagne 400 RÃ©sistance Ã‰lÃ©mentaire.',
            en: 'Inactive state: skips turn and gains 400 Elemental Resistance.',
            es: 'Estado Inactivo: pasa turno y gana 400 Resistencia Elemental.',
          },
        ],
      },
      {
        title: { fr: 'NÃ©ant et Cristal du NÃ©ant', en: 'Void and Void Crystal', es: 'VacÃ­o y Cristal del VacÃ­o' },
        paragraphs: [
          {
            fr: 'Salle 1: un Cristal du NÃ©ant apparaÃ®t avec une aura similaire au boss.',
            en: 'Room 1: a Void Crystal appears with an aura similar to the boss.',
            es: 'Sala 1: aparece un Cristal del VacÃ­o con un aura similar a la del jefe.',
          },
          {
            fr: 'Lâ€™aura alterne entre cercle taille 3 et anneau rayon 6 infini, et punit les entrÃ©es une fois par tour.',
            en: 'The aura alternates between size-3 circle and infinite ring radius 6, punishing entries once per turn.',
            es: 'El aura alterna entre cÃ­rculo tamaÃ±o 3 y anillo radio 6 infinito, castigando entradas una vez por turno.',
          },
        ],
      },
      {
        title: { fr: 'Composition et exploits', en: 'Composition and achievements', es: 'ComposiciÃ³n y logros' },
        paragraphs: [
          {
            fr: 'Salle 1: 3x VidÃ©ant, 3x VidÃ©ant, 2x VidÃ©ant. Salle boss: 1x Arâ€™Nan + 3x VidÃ©ant + 2x VidÃ©ant + 2x VidÃ©ant.',
            en: 'Room 1: 3x Videant, 3x Videant, 2x Videant. Boss room: 1x Arâ€™Nan + 3x Videant + 2x Videant + 2x Videant.',
            es: 'Sala 1: 3x Vaciante, 3x Vaciante, 2x Vaciante. Sala boss: 1x Arâ€™Nan + 3x Vaciante + 2x Vaciante + 2x Vaciante.',
          },
          {
            fr: 'Exploits: I (terminer), II (boss en premier), III (boss en dernier), Final (I+II+III) avec Miniature dâ€™Arâ€™Nan + 5 Jetons Infernaux.',
            en: 'Achievements: I (clear), II (boss first), III (boss last), Final (I+II+III) with Arâ€™Nan Miniature + 5 Infernal Tokens.',
            es: 'Logros: I (terminar), II (boss primero), III (boss Ãºltimo), Final (I+II+III) con Miniatura de Arâ€™Nan + 5 Fichas Infernales.',
          },
        ],
      },
    ],
    plan: {
      fr: 'StratÃ©gie dÃ©taillÃ©e: Ã  venir.',
      en: 'Detailed strategy: coming soon.',
      es: 'Estrategia detallada: prÃ³ximamente.',
    },
    steles: {
      lead: {
        fr: "StÃ¨le d'intervention Anathar: nÃ©cessite une Clef d'intervention d'Anathar.",
        en: 'Anathar intervention stele: requires an Anathar Intervention Key.',
        es: 'Estela de intervenciÃ³n de Anathar: requiere una Llave de intervenciÃ³n de Anathar.',
      },
      notes: [
        {
          fr: "Anathar marque un joueur, observe ses actions puis en rÃ©plique jusqu'Ã  4 au tour suivant.",
          en: 'Anathar marks a player, observes actions, then replicates up to 4 on the next turn.',
          es: 'Anathar marca a un jugador, observa sus acciones y replica hasta 4 en el turno siguiente.',
        },
        {
          fr: "Si moins de 4 actions sont observÃ©es, Infierno DemonÃ­aco s'active et devient plus dangereux.",
          en: 'If fewer than 4 actions are observed, Demonic Hellfire triggers and becomes more dangerous.',
          es: 'Si observa menos de 4 acciones, se activa Infierno DemonÃ­aco y se vuelve mÃ¡s peligroso.',
        },
        {
          fr: 'Effet spÃ©cifique VidÃ©ants: Anathar obtient une Aura de NÃ©ant similaire au boss (alternance croix de 3 cases / 10 cases et +).',
          en: 'Videants specific effect: Anathar gains a Void Aura similar to boss behavior (alternating 3-cell cross / 10+ cells).',
          es: 'Efecto especÃ­fico Vaciantes: Anathar obtiene un Aura de VacÃ­o similar al jefe (alterna cruz de 3 casillas / 10 casillas en adelante).',
        },
      ],
      protoBosses: [],
      crystals: {
        types: [
          {
            fr: 'La table de rÃ©fÃ©rence Anathar (actions observÃ©es â†’ effets rÃ©pliquÃ©s) sâ€™applique aussi ici.',
            en: 'The Anathar reference table (observed actions â†’ replicated effects) also applies here.',
            es: 'La tabla de referencia de Anathar (acciones observadas â†’ efectos replicados) tambiÃ©n aplica aquÃ­.',
          },
        ],
        notes: [
          {
            fr: 'RÃ©duire les actions diffÃ©rentes du joueur marquÃ© limite les rÃ©pliques dangereuses.',
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
          fr: 'Drops du donjon et du boss: liens directs Ã  ajouter.',
          en: 'Dungeon and boss drops: direct links to add.',
          es: 'Drops de mazmorra y jefe: enlaces directos por aÃ±adir.',
        },
      ],
      monsterDrops: [],
      bossDrops: [],
    },
    croupier: {
      location: {
        fr: 'Section Ã  complÃ©ter.',
        en: 'Section to be completed.',
        es: 'SecciÃ³n por completar.',
      },
      items: [],
    },
  },
  {
    id: 'phytomorphes',
    name: { fr: 'Donjon Phytomorphes', en: 'Phytomorphes Dungeon', es: 'Mazmorra de los Fitoformes' },
    subtitle: {
      fr: 'Boss: Vaalâ€™Enthia, Reine-dÃ©mone',
      en: 'Boss: Vaalâ€™Enthia, Demon Queen',
      es: 'Jefa: Vaalâ€™Enthia, Reina-demonio',
    },
    levelRange: { fr: 'Niv. 216', en: 'Lvl. 216', es: 'Niv. 216' },
    summary: [
      {
        fr: 'Donjon pour 6 joueurs, 2 salles, sans clef.',
        en: 'Dungeon for 6 players, 2 rooms, no key required.',
        es: 'Mazmorra para 6 jugadores, 2 salas y sin llave.',
      },
      {
        fr: 'MÃ©canique centrale: gÃ©rer et transfÃ©rer correctement les Ã©tats Corruption.',
        en: 'Core mechanic: correctly manage and transfer Corruption states.',
        es: 'MecÃ¡nica central: gestionar y transferir correctamente los estados CorrupciÃ³n.',
      },
      {
        fr: 'Les porteurs Incorruptibles ne peuvent Ãªtre endommagÃ©s que par des coups augmentÃ©s par la bonne Corruption.',
        en: 'Incorruptible targets can only be damaged by attacks boosted by the proper Corruption.',
        es: 'Los portadores de Incorruptible solo reciben daÃ±o de golpes potenciados por la CorrupciÃ³n adecuada.',
      },
      {
        fr: 'Certaines informations (stratÃ©gie dÃ©taillÃ©e, drops et croupier) seront complÃ©tÃ©es ultÃ©rieurement.',
        en: 'Some details (detailed strategy, drops and croupier) will be completed later.',
        es: 'Algunos detalles (estrategia detallada, drops y crupier) se completarÃ¡n mÃ¡s adelante.',
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
          fr: 'DPS de dos avec transposition et pression en mÃªlÃ©e.',
          en: 'Back-damage dealer with swap tools and melee pressure.',
          es: 'DPS de espalda con transposiciÃ³n y presiÃ³n melee.',
        },
        spells: [
          {
            name: { fr: 'Virescent Tinelle', en: 'Virescent Tinelle', es: 'Virescent Tinelle' },
            effect: {
              fr: 'Monocible 2-4 PO en ligne sans ligne de vue, dÃ©gÃ¢ts air et Ã©change de position avec la cible.',
              en: 'Single-target 2-4 in-line without line of sight, air damage and swaps position with target.',
              es: 'Monobjetivo 2-4 en lÃ­nea sin lÃ­nea de visiÃ³n, daÃ±o aire e intercambio de posiciÃ³n con el objetivo.',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
          },
          {
            name: { fr: 'Inassou Virescent', en: 'Inassou Virescent', es: 'Inassou Virescent' },
            effect: {
              fr: 'Monocible 1-2 PO en ligne sans ligne de vue, dÃ©gÃ¢ts eau trÃ¨s Ã©levÃ©s sur une cible de dos.',
              en: 'Single-target 1-2 in-line without line of sight, water damage, very high when hitting from back.',
              es: 'Monobjetivo 1-2 en lÃ­nea sin lÃ­nea de visiÃ³n, daÃ±o agua muy alto sobre objetivo de espalda.',
            },
            cost: { fr: '3 PA', en: '3 AP', es: '3 PA' },
            limit: { fr: '1/cible, 2/tour', en: '1/target, 2/turn', es: '1/objetivo, 2/turno' },
          },
        ],
        passive: {
          fr: 'Corruption â€“ Virescent: +40% dommages de dos, -500 Esquive. Sous 50% PV ou KO, transfert de lâ€™Ã©tat Ã  lâ€™attaquant. Si volÃ©: +250 rÃ©sistances (2 tours).',
          en: 'Corruption â€“ Virescent: +40% back damage, -500 Dodge. Under 50% HP or KO, transfers state to attacker. If stolen: +250 resistances (2 turns).',
          es: 'CorrupciÃ³n â€“ Virescente: +40% daÃ±os por espalda, -500 Esquiva. Bajo 50% PV o KO, transfiere el estado al atacante. Si se roba: +250 resistencias (2 turnos).',
        },
        notes: [],
        stats: [
          { fr: 'RÃ´le: exÃ©cution de dos', en: 'Role: back execution', es: 'Rol: ejecuciÃ³n de espalda' },
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
          fr: 'Sniper distance avec poussÃ©e extrÃªme.',
          en: 'Long-range sniper with extreme push control.',
          es: 'Sniper a distancia con empuje extremo.',
        },
        spells: [
          {
            name: { fr: 'Bolet Titia', en: 'Bolet Titia', es: 'Bolet Titia' },
            effect: {
              fr: 'Monocible 1 PO, dÃ©gÃ¢ts air et pousse de 10 cases.',
              en: 'Single-target 1 range, air damage and pushes 10 cells.',
              es: 'Monobjetivo 1 alcance, daÃ±o aire y empuja 10 casillas.',
            },
            cost: { fr: '5 PA', en: '5 AP', es: '5 PA' },
            limit: { fr: '1/cible, 2/tour', en: '1/target, 2/turn', es: '1/objetivo, 2/turno' },
          },
          {
            name: { fr: 'Fongus Tave', en: 'Fongus Tave', es: 'Fongus Tave' },
            effect: {
              fr: 'Monocible 3-7 PO modifiable, lourds dÃ©gÃ¢ts air.',
              en: 'Single-target 3-7 modifiable range, heavy air damage.',
              es: 'Monobjetivo 3-7 alcance modificable, daÃ±o aire alto.',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/cible, 3/tour', en: '1/target, 3/turn', es: '1/objetivo, 3/turno' },
          },
        ],
        passive: {
          fr: 'Corruption â€“ Champidiable: +40% dommages Ã  distance, -3 PM max. Sous 50% PV ou KO, transfert de lâ€™Ã©tat Ã  lâ€™attaquant. Si volÃ©: +250 rÃ©sistances (2 tours).',
          en: 'Corruption â€“ Champidiable: +40% ranged damage, -3 max MP. Under 50% HP or KO, transfers state to attacker. If stolen: +250 resistances (2 turns).',
          es: 'CorrupciÃ³n â€“ Champidiable: +40% daÃ±os a distancia, -3 PM mÃ¡ximos. Bajo 50% PV o KO, transfiere el estado al atacante. Si se roba: +250 resistencias (2 turnos).',
        },
        notes: [],
        stats: [
          { fr: 'RÃ´le: burst distance', en: 'Role: ranged burst', es: 'Rol: burst a distancia' },
        ],
      },
      {
        name: { fr: 'MÃ©risthaine', en: 'Meristhaine', es: 'MÃ©risthaine' },
        level: { fr: 'Niv. 216', en: 'Lvl. 216', es: 'Niv. 216' },
        bonus: {
          fr: 'Faiblesse principale: Eau',
          en: 'Main weakness: Water',
          es: 'Debilidad principal: Agua',
        },
        description: {
          fr: 'ContrÃ´le PM en mÃªlÃ©e et mi-distance.',
          en: 'MP control unit in melee and mid-range.',
          es: 'Unidad de control de PM en melee y media distancia.',
        },
        spells: [
          {
            name: { fr: 'Regard mÃ©chant', en: 'Mean Stare', es: 'Mirada malvada' },
            effect: {
              fr: 'Monocible 1-8 PO modifiable en ligne, dÃ©gÃ¢ts air et vole 4 PM.',
              en: 'Single-target 1-8 modifiable in-line range, air damage and steals 4 MP.',
              es: 'Monobjetivo 1-8 alcance modificable en lÃ­nea, daÃ±o aire y roba 4 PM.',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/tour', en: '1/turn', es: '1/turno' },
          },
          {
            name: { fr: 'Coup de corne', en: 'Horn Strike', es: 'Golpe de cuerno' },
            effect: {
              fr: 'Monocible 1-3 PO modifiable, dÃ©gÃ¢ts terre et retire 4 PM.',
              en: 'Single-target 1-3 modifiable range, earth damage and removes 4 MP.',
              es: 'Monobjetivo 1-3 alcance modificable, daÃ±o tierra y retira 4 PM.',
            },
            cost: { fr: '6 PA', en: '6 AP', es: '6 PA' },
            limit: { fr: '1/cible, 2/tour', en: '1/target, 2/turn', es: '1/objetivo, 2/turno' },
          },
        ],
        passive: {
          fr: 'Corruption â€“ MÃ©risthaine: +40% dommages mÃªlÃ©e, -60 VolontÃ©. Sous 50% PV ou KO, transfert de lâ€™Ã©tat Ã  lâ€™attaquant. Si volÃ©: +250 rÃ©sistances (2 tours).',
          en: 'Corruption â€“ Meristhaine: +40% melee damage, -60 Willpower. Under 50% HP or KO, transfers state to attacker. If stolen: +250 resistances (2 turns).',
          es: 'CorrupciÃ³n â€“ MÃ©risthaine: +40% daÃ±os cuerpo a cuerpo, -60 Voluntad. Bajo 50% PV o KO, transfiere el estado al atacante. Si se roba: +250 resistencias (2 turnos).',
        },
        notes: [],
        stats: [
          { fr: 'RÃ´le: drain PM', en: 'Role: MP drain', es: 'Rol: drenaje de PM' },
        ],
      },
      {
        name: { fr: 'Vaalâ€™Enthia, Reine-dÃ©mone (Boss)', en: 'Vaalâ€™Enthia, Demon Queen (Boss)', es: 'Vaalâ€™Enthia, Reina-demonio (Jefa)' },
        level: { fr: 'Boss', en: 'Boss', es: 'Jefa' },
        bonus: {
          fr: 'Ã‰tat Incorruptible',
          en: 'Incorruptible state',
          es: 'Estado Incorruptible',
        },
        description: {
          fr: 'Boss qui punit la mauvaise gestion des corruptions et exÃ©cute toute lâ€™Ã©quipe si elle obtient toutes les corruptions.',
          en: 'Boss punishing poor corruption management and wipes the team if all corruption states are gathered.',
          es: 'Jefa que castiga mala gestiÃ³n de corrupciones y elimina al grupo si reÃºne todas las corrupciones.',
        },
        spells: [
          {
            name: { fr: 'DÃ©esse poire', en: 'Pear Goddess', es: 'Diosa pera' },
            effect: {
              fr: 'Monocible, toute la carte sans ligne de vue, dÃ©gÃ¢ts feu. LancÃ© au maximum avant le premier dÃ©placement du tour.',
              en: 'Single-target map-wide without line of sight, fire damage. Cast as many times as possible before first movement.',
              es: 'Monobjetivo, todo el mapa sin lÃ­nea de visiÃ³n, daÃ±o fuego. Lo lanza el mÃ¡ximo de veces antes de su primer desplazamiento.',
            },
            cost: { fr: '4 PA', en: '4 AP', es: '4 PA' },
            limit: { fr: '1/cible, 3/tour', en: '1/target, 3/turn', es: '1/objetivo, 3/turno' },
          },
          {
            name: { fr: 'Vaal Ancienne', en: 'Ancient Vaal', es: 'Vaal Antigua' },
            effect: {
              fr: 'Monocible 1 PO, dÃ©gÃ¢ts eau, retire 100 RÃ©sistance Ã‰lÃ©mentaire (3 tours, cumulable) et 3 PA.',
              en: 'Single-target 1 range, water damage, removes 100 Elemental Resistance (3 turns, stackable) and 3 AP.',
              es: 'Monobjetivo 1 alcance, daÃ±o agua, retira 100 Resistencia Elemental (3 turnos, acumulable) y 3 PA.',
            },
            cost: { fr: '1 PA', en: '1 AP', es: '1 PA' },
            limit: { fr: '1/cible, 3/tour', en: '1/target, 3/turn', es: '1/objetivo, 3/turno' },
          },
          {
            name: { fr: 'DÃ©sintÃ©gration', en: 'Disintegration', es: 'DesintegraciÃ³n' },
            effect: {
              fr: 'Zone toute la carte, met hors-combat tous les ennemis. LancÃ© automatiquement si elle possÃ¨de tous les Ã©tats Corruption en jeu.',
              en: 'Map-wide AoE, knocks all enemies out. Cast automatically if she has all Corruption states in play.',
              es: 'Ãrea en todo el mapa, deja fuera de combate a todos los enemigos. Se lanza automÃ¡ticamente si posee todos los estados CorrupciÃ³n en juego.',
            },
            cost: { fr: '0 PA', en: '0 AP', es: '0 PA' },
          },
        ],
        passive: {
          fr: 'Reine-dÃ©mone du dÃ©sespoir: tours pairs/impairs renforcent DÃ©esse poire selon visibilitÃ©. Gagne Ultime Ressort par alliÃ© tuÃ© et invoque des rochers (1 PV) en fin de tour. Incorruptible: vulnÃ©rable uniquement aux dommages augmentÃ©s par une corruption.',
          en: 'Demon Queen of Despair: even/odd turns amplify Pear Goddess based on visibility. Gains Ultimate Spring per ally killed and summons 1 HP rocks at end of turn. Incorruptible: vulnerable only to damage boosted by a corruption.',
          es: 'Reina-demonio de la desesperaciÃ³n: turnos pares/impares potencian Diosa pera segÃºn visibilidad. Gana Ãšltimo Resorte por aliado muerto e invoca rocas de 1 PV al final del turno. Incorruptible: vulnerable solo a daÃ±os aumentados por una corrupciÃ³n.',
        },
        notes: [],
        stats: [
          { fr: 'RÃ´le: boss de check mÃ©canique', en: 'Role: mechanic-check boss', es: 'Rol: jefa de chequeo mecÃ¡nico' },
        ],
      },
    ],
    boss: {
      name: { fr: 'Vaalâ€™Enthia, Reine-dÃ©mone', en: 'Vaalâ€™Enthia, Demon Queen', es: 'Vaalâ€™Enthia, Reina-demonio' },
      level: { fr: 'Niv. 216+', en: 'Lvl. 216+', es: 'Niv. 216+' },
      description: {
        fr: 'Boss axÃ© sur Incorruptible et le transfert des Corruptions. Mauvaise gestion = wipe via DÃ©sintÃ©gration.',
        en: 'Boss focused on Incorruptible and Corruption transfer. Poor management leads to a wipe through Disintegration.',
        es: 'Jefa centrada en Incorruptible y transferencia de Corrupciones. Mala gestiÃ³n = wipe por DesintegraciÃ³n.',
      },
      spells: [
        {
          name: { fr: 'DÃ©sintÃ©gration', en: 'Disintegration', es: 'DesintegraciÃ³n' },
          effect: {
            fr: 'ExÃ©cute tous les ennemis si Vaalâ€™Enthia cumule toutes les Corruptions.',
            en: 'Executes all enemies if Vaalâ€™Enthia gathers all Corruption states.',
            es: 'Ejecuta a todos los enemigos si Vaalâ€™Enthia acumula todas las Corrupciones.',
          },
          cost: { fr: '0 PA', en: '0 AP', es: '0 PA' },
        },
      ],
      passives: [
        {
          name: { fr: 'Incorruptible', en: 'Incorruptible', es: 'Incorruptible' },
          effect: {
            fr: 'Ne subit que les dommages augmentÃ©s par une corruption adaptÃ©e.',
            en: 'Only takes damage increased by a matching corruption.',
            es: 'Solo recibe daÃ±o aumentado por una corrupciÃ³n adecuada.',
          },
          notes: [],
        },
      ],
      stats: [
        { fr: 'RÃ´le: boss de punition', en: 'Role: punishment boss', es: 'Rol: jefa de castigo' },
      ],
    },
    mechanics: [
      {
        title: { fr: 'Corruptions et transferts', en: 'Corruptions and transfers', es: 'Corrupciones y transferencias' },
        paragraphs: [
          {
            fr: 'Sous 50% PV ou KO, les Ã©tats Corruption sont transfÃ©rÃ©s Ã  lâ€™attaquant.',
            en: 'Under 50% HP or on KO, Corruption states transfer to the attacker.',
            es: 'Bajo 50% PV o al KO, los estados CorrupciÃ³n se transfieren al atacante.',
          },
          {
            fr: 'Attaquer avec le bon angle/type (dos, distance, mÃªlÃ©e) est vital pour exploiter Incorruptible.',
            en: 'Attacking with the correct angle/type (back, ranged, melee) is vital to exploit Incorruptible.',
            es: 'Atacar con el Ã¡ngulo/tipo correcto (espalda, distancia, melee) es vital para explotar Incorruptible.',
          },
        ],
      },
      {
        title: { fr: 'Incorruptible en donjon', en: 'Incorruptible in dungeon', es: 'Incorruptible en mazmorra' },
        paragraphs: [
          {
            fr: 'Au dÃ©but du combat, 3 Phytomorphes reÃ§oivent alÃ©atoirement Incorruptible (permanent).',
            en: 'At combat start, 3 Phytomorphes randomly receive permanent Incorruptible.',
            es: 'Al inicio del combate, 3 Fitoformes reciben aleatoriamente Incorruptible permanente.',
          },
          {
            fr: 'Exemple: une corruption dos+mÃªlÃ©e permet de frapper en mÃªlÃ©e ou de dos, mais pas Ã  distance pure.',
            en: 'Example: a back+melee corruption allows melee or back hits, but not pure ranged hits.',
            es: 'Ejemplo: una corrupciÃ³n espalda+melee permite pegar en melee o por espalda, pero no a distancia pura.',
          },
        ],
      },
      {
        title: { fr: 'Composition et exploits', en: 'Composition and achievements', es: 'ComposiciÃ³n y logros' },
        paragraphs: [
          {
            fr: 'Salle 1: 3x Phytomorphe, 3x Phytomorphe, 2x Phytomorphe. Salle boss: 1x Vaalâ€™Enthia + 3x Phytomorphe + 2x Phytomorphe + 2x Phytomorphe.',
            en: 'Room 1: 3x Phytomorphe, 3x Phytomorphe, 2x Phytomorphe. Boss room: 1x Vaalâ€™Enthia + 3x Phytomorphe + 2x Phytomorphe + 2x Phytomorphe.',
            es: 'Sala 1: 3x Fitoforme, 3x Fitoforme, 2x Fitoforme. Sala de jefa: 1x Vaalâ€™Enthia + 3x Fitoforme + 2x Fitoforme + 2x Fitoforme.',
          },
          {
            fr: 'Exploits: I (terminer), II (boss en premier), III (boss en dernier), Final (I+II+III) avec Miniature de Vaalâ€™Enthia + 5 Jetons Infernaux.',
            en: 'Achievements: I (clear), II (boss first), III (boss last), Final (I+II+III) with Vaalâ€™Enthia Miniature + 5 Infernal Tokens.',
            es: 'Logros: I (terminar), II (jefa primero), III (jefa al final), Final (I+II+III) con Miniatura de Vaalâ€™Enthia + 5 Fichas Infernales.',
          },
        ],
      },
    ],
    plan: {
      fr: 'StratÃ©gie dÃ©taillÃ©e: Ã  venir.',
      en: 'Detailed strategy: coming soon.',
      es: 'Estrategia detallada: prÃ³ximamente.',
    },
    steles: {
      lead: {
        fr: "StÃ¨le d'intervention Anathar: nÃ©cessite une Clef d'intervention d'Anathar.",
        en: 'Anathar intervention stele: requires an Anathar Intervention Key.',
        es: 'Estela de intervenciÃ³n de Anathar: requiere una Llave de intervenciÃ³n de Anathar.',
      },
      notes: [
        {
          fr: "Anathar observe et rÃ©plique jusqu'Ã  4 actions du joueur marquÃ© au tour suivant.",
          en: 'Anathar observes and replicates up to 4 actions from the marked player on next turn.',
          es: 'Anathar observa y replica hasta 4 acciones del jugador marcado en el siguiente turno.',
        },
        {
          fr: "Effet spÃ©cifique Phytomorphes: Anathar obtient l'Ã©tat Incorruptible, comme Vaalâ€™Enthia.",
          en: 'Phytomorphes specific effect: Anathar gains Incorruptible, like Vaalâ€™Enthia.',
          es: 'Efecto especÃ­fico Fitoformes: Anathar obtiene el estado Incorruptible, como Vaalâ€™Enthia.',
        },
        {
          fr: 'La table de rÃ©fÃ©rence Anathar (actions observÃ©es â†’ effets rÃ©pliquÃ©s) sâ€™applique ici.',
          en: 'The Anathar reference table (observed actions â†’ replicated effects) applies here.',
          es: 'La tabla de referencia de Anathar (acciones observadas â†’ efectos replicados) aplica aquÃ­.',
        },
      ],
      protoBosses: [],
      crystals: {
        types: [
          {
            fr: 'Objectif: limiter les actions diffÃ©rentes du joueur marquÃ© pour contrÃ´ler la rÃ©plication.',
            en: 'Objective: limit different action types on the marked player turn to control replication.',
            es: 'Objetivo: limitar acciones diferentes en el turno marcado para controlar la replicaciÃ³n.',
          },
        ],
        notes: [
          {
            fr: 'â€œCombattantsâ€ inclut joueurs, monstres et boss.',
            en: 'â€œCombatantsâ€ includes players, monsters and boss units.',
            es: 'â€œCombatientesâ€ incluye jugadores, monstruos y jefa.',
          },
        ],
        stats: [],
      },
    },
    drops: {
      notes: [
        {
          fr: 'Drops du donjon et du boss: liens directs Ã  ajouter.',
          en: 'Dungeon and boss drops: direct links to add.',
          es: 'Drops de mazmorra y jefa: enlaces directos por aÃ±adir.',
        },
      ],
      monsterDrops: [],
      bossDrops: [],
    },
    croupier: {
      location: {
        fr: 'Section Ã  complÃ©ter.',
        en: 'Section to be completed.',
        es: 'SecciÃ³n por completar.',
      },
      items: [],
    },
  },
] as const


export const content = {
  es: {
    badge: 'The Bloody Brotherhood',
    navTitle: 'Endgame 230-245',
    navToggle: 'MenÃº',
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
      estelas: 'GuÃ­as de estela de intervenciÃ³n',
      bosses: 'Primer set de dungeons clave',
      clases: 'Roles, builds y guÃ­as por clase',
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
      guideCta: 'Ver guÃ­a relacionada',
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
      ],
    },
    stelesHub: {
      title: 'GuÃ­as de Estelas de intervenciÃ³n',
      lead: 'Referencia central de estelas para no mezclar mecÃ¡nicas entre dungeons.',
      guides: [
        {
          id: 'anathar',
          name: 'Anathar',
          keyRequired: 'Llave de intervenciÃ³n de Anathar',
          appliesTo: ['Devastadores', 'Idos', 'Demorribles', 'Vaciantes', 'Fitoformes'],
          overview: [
            'Marca de Anathar suele caer en el jugador mÃ¡s lejano.',
            'Anathar observa el turno del marcado y replica hasta 4 acciones distintas al inicio de su siguiente turno.',
            'Si observa menos de 4 acciones, usa Infierno DemonÃ­aco y castiga mÃ¡s cuanto menos acciones haya.',
          ],
          table: {
            actionHeader: 'AcciÃ³n del jugador marcado',
            effectHeader: 'AcciÃ³n replicada de Anathar',
            rows: [
              { action: 'Retirar PM a un objetivo', effect: 'Retira 3 PM a combatientes que no esten en su lÃ­nea de visiÃ³n.' },
              { action: 'Retirar PA a un objetivo', effect: 'Retira 3 PA a combatientes que esten en su lÃ­nea de visiÃ³n.' },
              { action: 'Dar PM a un objetivo', effect: 'Da 1PM a los combatientes (excepto Anathar).' },
              { action: 'Dar PA a un objetivo', effect: 'Da 40 de Voluntad a los 3 combatientes mÃ¡s cercanos.' },
              { action: 'Curar a un objetivo', effect: 'Cura un 35% de PdV perdidos a los 3 combatientes cercanos.' },
              { action: 'Dar armadura', effect: 'Da 5.000 armadura a los 3 combatientes mÃ¡s alejados.' },
              { action: 'Retirar esquiva', effect: 'Retira 500 esquiva a los 3 combatientes mÃ¡s cercanos.' },
              { action: 'Aumentar esquiva', effect: 'Da 500 esquiva a los 3 combatientes mÃ¡s alejados.' },
              { action: 'Retirar placaje', effect: 'Retira 500 placaje a combatientes que tengan al menos un combatiente en contacto.' },
              { action: 'Aumentar placaje', effect: 'Da 500 placaje a combatientes que no tengan contacto con ningÃºn otro combatiente.' },
              { action: 'Empujar', effect: 'Empuja(4c) aliados alineados al iniciar turno.' },
              { action: 'Atraer', effect: 'Atrae(8c) aliados alineados al iniciar turno.' },
              { action: 'Cambiar lugar', effect: 'Cambia de lugar con el combatiente mÃ¡s alejado.' },
              { action: 'Teletransportar', effect: 'Teleporta enemigos a posiciones aleatorias (3 casillas alrededor de un jugador).' },
              { action: 'DaÃ±o fuego', effect: 'Causa daÃ±o fuego al combatiente mÃ¡s alejado.' },
              { action: 'DaÃ±o aire', effect: 'Causa daÃ±o aire a combatientes a mÃ¡s de 7 casillas.' },
              { action: 'DaÃ±o tierra', effect: 'Causa daÃ±o tierra a combatientes a 3 casillas o menos.' },
              { action: 'DaÃ±o agua', effect: 'Causa daÃ±o agua en cÃ­rculo de 2 casillas alrededor de combatientes.' },
            ],
          },
          dungeonEffects: [
            'Devastadores: al morir deja un Residuo.',
            'Idos: tambiÃ©n debe quedar a 1 PdV.',
            'Demorribles: tiene Enlace de Vida y suma sus PdV al total.',
            'Vaciantes: obtiene Aura de VacÃ­o similar al jefe.',
            'Fitoformes: obtiene Incorruptible como Vaalenthia.',
          ],
          tips: [
            'En el turno marcado evita acciones innecesarias para no regalar rÃ©plicas peligrosas.',
            'Con â€œcombatienteâ€ se incluyen jugadores, mobs y boss.',
          ],
        },
        {
          id: 'cire-momore',
          name: 'Cire Momore',
          keyRequired: 'Llave de intervenciÃ³n de Cire Momore',
          appliesTo: ['Steamers', 'Pezgajosos Abisales'],
          overview: [
            'Inicia combate en la esquina superior izquierda (Steamers y Pezgajosos Abisales).',
            'Comienza con 3 PM y gana +2 PM por turno.',
            'Al usar AspiraciÃ³n de Alma y absorber una flor, reinicia sus PM.',
            'Al invocar a Cire Momore, una Asesirena o Unidad stasificadora abandona el combate.',
          ],
          table: {
            actionHeader: 'Elemento',
            effectHeader: 'Detalle',
            rows: [
              { action: 'Flores', effect: 'Cuando muere un mob (excepto Raeliss/Sir Kurn Flex), aparece una flor. Un jugador debe pisarla para obtenerla.' },
              { action: 'Bonus de flor', effect: 'Otorga +4 PA y +2 PM. Los bonus no son acumulables.' },
              { action: 'AspiraciÃ³n de Alma (con flor)', effect: 'Pierdes la flor y Cire Momore reinicia sus PM.' },
              { action: 'AspiraciÃ³n de Alma (sin flor)', effect: 'Pierdes 4000 PdV mÃ¡ximos (acumulable).' },
              { action: 'AspiraciÃ³n x3', effect: 'Si un jugador recibe 3 Aspiraciones, muere directamente (sin K.O.).' },
              { action: 'Fatalidad', effect: 'DaÃ±o Stasis en lÃ­nea, alcance 2-6.' },
              { action: 'Rompespanima', effect: 'DaÃ±o Stasis constante, alcance 1-12, hasta 2 veces por turno.' },
              { action: 'AspiraciÃ³n de Alma', effect: 'Zona CaC. Absorbe flores, reinicia PM y castiga con pÃ©rdida de vida mÃ¡xima.' },
            ],
          },
          dungeonEffects: [
            'Es fundamental no terminar turno en CaC de Cire Momore.',
            'Prioriza limpiar mobs rÃ¡pido para generar flores y repartirlas con orden.',
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
      lead: 'Cadencia propuesta para mantener progreso y prÃ¡ctica de mecÃ¡nicas.',
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
      weekDays: ['Lun', 'Mar', 'MiÃ©', 'Jue', 'Vie', 'SÃ¡b', 'Dom'],
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
      andMore: '+ {count} mÃ¡s',
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
            'â€œCombatantâ€ includes players, mobs, and boss units.',
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
  mecaniques: { fr: 'Mecaniques et strategie', en: 'Mechanics and Strategy', es: 'MecÃ¡nicas y Estrategia' },
  planDonjon: { fr: 'Plan du donjon', en: 'Dungeon Plan', es: 'Plano de la Mazmorra' },
  steles: { fr: 'Steles', en: 'Steles', es: 'Estelas' },
  drops: { fr: 'Drops', en: 'Drops', es: 'BotÃ­n' },
  croupier: { fr: 'Croupier', en: 'Croupier', es: 'Crupier' },
  passifArtillerie: { fr: "Passifs d'artillerie", en: 'Artillery Passives', es: 'Pasivos de ArtillerÃ­a' },
  protoBoss: { fr: 'Proto-boss', en: 'Proto-boss', es: 'Proto-jefe' },
  cristalStasis: { fr: 'Cristal de Stasis', en: 'Stasis Crystal', es: 'Cristal de Estasis' },
  dropsMonstres: { fr: 'Drops des monstres', en: 'Monster Drops', es: 'BotÃ­n de Monstruos' },
  dropsBoss: { fr: 'Drops du boss', en: 'Boss Drops', es: 'BotÃ­n del Jefe' },
  passif: { fr: 'Passif:', en: 'Passive:', es: 'Pasivo:' },
} as const

