import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { isSupabaseConfigured, supabase } from './lib/supabase'

const dungeonGuides = [
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
] as const

const content = {
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
      { id: 'objetivo', label: 'Objetivo' },
      { id: 'plan', label: 'Plan' },
      { id: 'guias', label: 'Guias' },
      { id: 'bosses', label: 'Bosses' },
      { id: 'actividades', label: 'Actividades' },
      { id: 'registro', label: 'Registro' },
      { id: 'resumen', label: 'Resumen' },
    ],
    viewSubtitles: {
      objetivo: 'Que buscamos lograr con el impulso',
      plan: 'Como organizaremos el avance',
      guias: 'Materiales y practicas guiadas',
      bosses: 'Primer set de dungeons clave',
      actividades: 'Cadencia y objetivos por semana',
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
        'Mini guias por boss y estela con resumen de mecanicas clave',
        'Checklist de preparacion de set y resistencias recomendadas',
        'Rondas de practica con explicaciones rapidas antes de cada run',
      ],
      dungeonTitle: 'Guias de dungeons',
      dungeonLead:
        'Estructura lista para repetir en nuevas dungs: resumen, monstruos, boss, mecanicas, steles y drops.',
      dungeons: dungeonGuides,
    },
    bosses: {
      title: 'Bosses 230 (primera etapa)',
      lead:
        'Seleccion inicial para mecanicas y practicas guiadas.',
      items: [
        {
          id: 180,
          name: 'Mazmorra de los Devastadores',
          mechanics: ['Fases con rotacion de roles', 'Control de posicion', 'Mitigacion de burst'],
        },
        {
          id: 176,
          name: 'Mazmorra de los Fitoformes',
          mechanics: ['Gestion de estados', 'Orden de objetivos', 'Lineas de vision'],
        },
        {
          id: 178,
          name: 'Mazmorra de los Demorribles',
          mechanics: ['Limpieza de invocaciones', 'Debuffs criticos', 'Timing de reanimacion'],
        },
        {
          id: 177,
          name: 'Mazmorra de los Vaciantes',
          mechanics: ['Control de mapa', 'Rotacion de turnos clave', 'Sincronizacion de DPS'],
        },
        {
          id: 179,
          name: 'Mazmorra de los Idos',
          mechanics: ['Gestion de mental', 'Triggers de sala', 'Fases de supervivencia'],
        },
        {
          id: 187,
          name: 'Mazmorra Pezgajosos Abisales',
          mechanics: ['Control de zonas', 'Gestion de estados', 'Prioridad de objetivos'],
        },
        {
          id: 188,
          name: 'Mazmorra Steamers',
          mechanics: ['Reserva de stasis', 'Posicionamiento vs zonas', 'Control de mecanos'],
        },
      ],
    },
    schedule: {
      title: 'Actividades sugeridas',
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
        interestActivities: 'Interes en actividades',
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
        'Listo. Tu interes quedo registrado para organizar actividades y guias.',
      error:
        'Hubo un problema al guardar. Revisa la configuracion o intenta mas tarde.',
    },
    interests: {
      title: 'Intereses registrados',
      loading: 'Cargando intereses...',
      empty: 'Aun no hay registros para esta seccion.',
      interested: 'interesados',
      needHelp: 'necesitan ayuda',
      gearRequests: 'Solicitudes de equipo',
      bossesTitle: 'Interes por boss',
      activitiesTitle: 'Interes por actividades',
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
      { id: 'objetivo', label: 'Goal' },
      { id: 'plan', label: 'Plan' },
      { id: 'guias', label: 'Guides' },
      { id: 'bosses', label: 'Bosses' },
      { id: 'actividades', label: 'Activities' },
      { id: 'registro', label: 'Sign up' },
      { id: 'resumen', label: 'Summary' },
    ],
    viewSubtitles: {
      objetivo: 'What we want to achieve with the boost',
      plan: 'How we will organize progress',
      guias: 'Materials and guided practice',
      bosses: 'First set of key dungeons',
      actividades: 'Weekly cadence and goals',
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
        'Mini guides per boss and stele with key mechanics',
        'Preparation checklist for sets and recommended resists',
        'Practice rounds with quick explanations before runs',
      ],
      dungeonTitle: 'Dungeon guides',
      dungeonLead:
        'Reusable structure for new dungeons: summary, monsters, boss, mechanics, steles, and drops.',
      dungeons: dungeonGuides,
    },
    bosses: {
      title: '230 Bosses (first stage)',
      lead: 'Initial set for mechanics and guided practice. Can expand to 240-245.',
      items: [
        {
          id: 180,
          name: 'Destroyer Dungeon',
          mechanics: ['Role rotations by phase', 'Position control', 'Burst mitigation'],
        },
        {
          id: 176,
          name: 'Phytomorph Dungeon',
          mechanics: ['State management', 'Target order', 'Line of sight'],
        },
        {
          id: 178,
          name: 'Demhorribles Dungeon',
          mechanics: ['Summon cleanup', 'Critical debuffs', 'Revive timing'],
        },
        {
          id: 177,
          name: 'Voidivion Dungeon',
          mechanics: ['Map control', 'Key turn rotations', 'DPS sync'],
        },
        {
          id: 179,
          name: 'Streye Dungeon',
          mechanics: ['Mental management', 'Room triggers', 'Survival phases'],
        },
        {
          id: 187,
          name: 'Abyssal Creeper Dungeon',
          mechanics: ['Zone control', 'State management', 'Target priority'],
        },
        {
          id: 188,
          name: 'Foggernaut Dungeon',
          mechanics: ['Stasis reserve', 'Positioning vs zones', 'Mekano control'],
        },
      ],
    },
    schedule: {
      title: 'Suggested activities',
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
        interestActivities: 'Interested activities',
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
      success: 'Done. Your interest is recorded for activities and guides.',
      error: 'Something went wrong. Check configuration or try later.',
    },
    interests: {
      title: 'Recorded interests',
      loading: 'Loading interests...',
      empty: 'No entries yet for this section.',
      interested: 'interested',
      needHelp: 'need help',
      gearRequests: 'Gear requests',
      bossesTitle: 'Interest by boss',
      activitiesTitle: 'Interest by activity',
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
} as const

type Language = keyof typeof content
type MultiidiomaTrad = { fr: string; en: string; es: string }
type Theme = 'dark' | 'light'
type ItemRequest = {
  id: number
  item: string
  slot: string
  priority: string
  source: string
  notes: string
}

type InterestEntry = {
  id?: number | string
  name: string
  role: string
  level: string
  availability: string
  contact: string
  build: string
  item_requests?: ItemRequest[]
  interest_boss_ids?: number[]
  interest_activity_ids?: number[]
  interest_guide_ids?: number[]
  created_at?: string
}

const sectionRoutes = {
  inicio: '/',
  objetivo: '/objetivo',
  plan: '/plan',
  guias: '/guias',
  bosses: '/bosses',
  actividades: '/actividades',
  equipamiento: '/equipamiento',
  registro: '/registro',
  resumen: '/resumen',
} as const

// Helper to get text in selected language
const getText = (
  value: unknown,
  lang: Language,
): string => {
  if (typeof value === 'string') return value
  if (typeof value === 'object' && value !== null) {
    const obj = value as { [key: string]: string }
    return obj?.[lang] || obj?.['fr'] || ''
  }
  return ''
}

// UI Labels translations for dungeon sections
const uiLabels = {
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

const createEmptyItem = (offset = 0): ItemRequest => ({
  id: Date.now() + offset,
  item: '',
  slot: '',
  priority: '',
  source: '',
  notes: '',
})

// Supabase Auth Admin Login
type AdminLoginProps = {
  onAuthenticated: () => void
}

function AdminLogin({ onAuthenticated }: AdminLoginProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [mode, setMode] = useState<'login' | 'register'>('login')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    if (!isSupabaseConfigured || !supabase) {
      setError('Supabase no está configurado')
      setLoading(false)
      return
    }

    try {
      if (mode === 'login') {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        
        if (signInError) {
          setError(signInError.message === 'Invalid login credentials' 
            ? 'Email o contraseña incorrectos' 
            : signInError.message)
        } else {
          onAuthenticated()
        }
      } else {
        const { error: signUpError } = await supabase.auth.signUp({
          email,
          password,
        })
        
        if (signUpError) {
          setError(signUpError.message)
        } else {
          setError(null)
          setMode('login')
          alert('Cuenta creada. Por favor inicia sesión.')
        }
      }
    } catch {
      setError('Error de conexión')
    } finally {
      setLoading(false)
    }
  }

  if (!isSupabaseConfigured) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚠️</div>
        <h3>Supabase no configurado</h3>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Para usar el panel de administración necesitas configurar Supabase en el archivo .env
        </p>
      </div>
    )
  }

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '70vh',
      padding: '2rem',
    }}>
      <form 
        onSubmit={handleSubmit}
        style={{
          maxWidth: '400px',
          width: '100%',
          padding: '2rem',
          background: 'var(--color-bg-secondary)',
          borderRadius: '8px',
          border: '1px solid var(--color-border)',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>
          <h2 style={{ margin: 0, marginBottom: '0.5rem' }}>Panel de Administración</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: 0 }}>
            {mode === 'login' ? 'Inicia sesión con tu cuenta' : 'Crea una cuenta de administrador'}
          </p>
        </div>

        {error && (
          <div style={{
            padding: '0.75rem',
            background: '#e74c3c',
            color: 'white',
            borderRadius: '4px',
            marginBottom: '1rem',
            fontSize: '0.9rem',
            textAlign: 'center',
          }}>
            ❌ {error}
          </div>
        )}

        <label style={{ display: 'block', marginBottom: '1rem' }}>
          <span style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Email
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@example.com"
            required
            autoFocus
            style={{
              width: '100%',
              padding: '0.75rem',
              fontSize: '1rem',
              border: '1px solid var(--color-border)',
              borderRadius: '4px',
              background: 'var(--color-bg)',
              color: 'inherit',
            }}
          />
        </label>

        <label style={{ display: 'block', marginBottom: '1.5rem' }}>
          <span style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Contraseña
          </span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={mode === 'login' ? 'Tu contraseña' : 'Mínimo 6 caracteres'}
            required
            minLength={6}
            style={{
              width: '100%',
              padding: '0.75rem',
              fontSize: '1rem',
              border: '1px solid var(--color-border)',
              borderRadius: '4px',
              background: 'var(--color-bg)',
              color: 'inherit',
            }}
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '0.75rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            background: loading ? '#95a5a6' : 'var(--color-primary)',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1,
            marginBottom: '1rem',
          }}
        >
          {loading ? '🔄 Verificando...' : (mode === 'login' ? '🔓 Iniciar Sesión' : '✨ Crear Cuenta')}
        </button>

        <button
          type="button"
          onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
          style={{
            width: '100%',
            padding: '0.5rem',
            fontSize: '0.9rem',
            background: 'transparent',
            color: 'var(--color-primary)',
            border: 'none',
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
        >
          {mode === 'login' ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
        </button>

        <div style={{ 
          marginTop: '1.5rem', 
          padding: '0.75rem',
          background: 'var(--color-bg)',
          borderRadius: '4px',
          fontSize: '0.85rem',
          color: 'var(--color-text-secondary)',
        }}>
          <strong>🔐 Seguro:</strong> Autenticación con Supabase. Las sesiones son gestionadas de forma segura.
        </div>
      </form>
    </div>
  )
}

type AdminPanelProps = {
  content: typeof content
  defaultContent: typeof content
  onSave: (newContent: typeof content) => void
  onReset: () => void
  onLogout: () => void
}

function AdminPanel({ content, onSave, onReset, onLogout }: AdminPanelProps) {
  const [editLang, setEditLang] = useState<Language>('es')
  const [jsonText, setJsonText] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [saved, setSaved] = useState(false)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    setJsonText(JSON.stringify(content[editLang], null, 2))
  }, [content, editLang])

  const handleSave = async () => {
    setSaving(true)
    setError(null)
    
    try {
      const parsed = JSON.parse(jsonText)
      const newContent = { ...content, [editLang]: parsed }
      
      // Save to Supabase first (if configured)
      if (isSupabaseConfigured && supabase) {
        const { error: supabaseError } = await supabase
          .from('app_content')
          .upsert({
            id: 1,
            content: newContent,
            updated_at: new Date().toISOString(),
          })
        
        if (supabaseError) {
          throw new Error(`Error en Supabase: ${supabaseError.message}`)
        }
      }
      
      // Save locally and update state
      onSave(newContent)
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'JSON inválido')
    } finally {
      setSaving(false)
    }
  }

  const handleExport = () => {
    const dataStr = JSON.stringify(content, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'content-backup.json'
    link.click()
    URL.revokeObjectURL(url)
  }

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target?.result as string)
        onSave(imported)
        setError(null)
        setSaved(true)
        setTimeout(() => setSaved(false), 2000)
      } catch {
        setError('Error al importar archivo')
      }
    }
    reader.readAsText(file)
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={() => setEditLang('es')}
            style={{
              padding: '0.5rem 1rem',
              background: editLang === 'es' ? 'var(--color-primary)' : 'transparent',
              border: '1px solid var(--color-primary)',
              borderRadius: '4px',
              cursor: 'pointer',
              color: 'inherit',
            }}
          >
            Español
          </button>
          <button
            onClick={() => setEditLang('en')}
            style={{
              padding: '0.5rem 1rem',
              background: editLang === 'en' ? 'var(--color-primary)' : 'transparent',
              border: '1px solid var(--color-primary)',
              borderRadius: '4px',
              cursor: 'pointer',
              color: 'inherit',
            }}
          >
            English
          </button>
        </div>

        <div style={{ flex: 1 }} />

        <button
          onClick={handleSave}
          disabled={saving}
          style={{
            padding: '0.5rem 1.5rem',
            background: saving ? '#95a5a6' : 'var(--color-primary)',
            border: 'none',
            borderRadius: '4px',
            cursor: saving ? 'not-allowed' : 'pointer',
            color: 'white',
            fontWeight: 'bold',
            opacity: saving ? 0.7 : 1,
          }}
        >
          {saving ? '⏳ Guardando...' : '💾 Guardar Cambios'}
        </button>

        <button
          onClick={handleExport}
          style={{
            padding: '0.5rem 1.5rem',
            background: 'transparent',
            border: '1px solid var(--color-primary)',
            borderRadius: '4px',
            cursor: 'pointer',
            color: 'inherit',
          }}
        >
          📥 Exportar
        </button>

        <label
          style={{
            padding: '0.5rem 1.5rem',
            background: 'transparent',
            border: '1px solid var(--color-primary)',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'inline-block',
          }}
        >
          📤 Importar
          <input
            type="file"
            accept=".json"
            onChange={handleImport}
            style={{ display: 'none' }}
          />
        </label>

        <button
          onClick={async () => {
            if (confirm('¿Resetear todo el contenido a valores por defecto?')) {
              setSaving(true)
              setError(null)
              
              try {
                // Delete from Supabase
                if (isSupabaseConfigured && supabase) {
                  await supabase
                    .from('app_content')
                    .delete()
                    .eq('id', 1)
                }
                
                // Reset local state
                onReset()
                setSaved(true)
                setTimeout(() => setSaved(false), 3000)
              } catch {
                setError('Error al resetear contenido')
              } finally {
                setSaving(false)
              }
            }
          }}
          disabled={saving}
          style={{
            padding: '0.5rem 1.5rem',
            background: 'transparent',
            border: '1px solid #e74c3c',
            borderRadius: '4px',
            cursor: saving ? 'not-allowed' : 'pointer',
            color: '#e74c3c',
            opacity: saving ? 0.5 : 1,
          }}
        >
          🔄 Resetear
        </button>

        <button
          onClick={() => {
            if (confirm('¿Cerrar sesión de administrador?')) {
              onLogout()
            }
          }}
          style={{
            padding: '0.5rem 1.5rem',
            background: 'transparent',
            border: '1px solid var(--color-text-secondary)',
            borderRadius: '4px',
            cursor: 'pointer',
            color: 'var(--color-text-secondary)',
          }}
        >
          🚪 Cerrar Sesión
        </button>
      </div>

      {error && (
        <div
          style={{
            padding: '1rem',
            background: '#e74c3c',
            color: 'white',
            borderRadius: '4px',
            marginBottom: '1rem',
          }}
        >
          ❌ {error}
        </div>
      )}

      {saved && (
        <div
          style={{
            padding: '1rem',
            background: '#27ae60',
            color: 'white',
            borderRadius: '4px',
            marginBottom: '1rem',
          }}
        >
          ✅ Cambios guardados correctamente
        </div>
      )}

      <div style={{ marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
        {isSupabaseConfigured ? (
          <>
            <p style={{ marginBottom: '0.5rem', padding: '0.75rem', background: 'var(--color-bg-secondary)', borderRadius: '4px', border: '1px solid var(--color-primary)' }}>
              <strong>🌐 Modo Supabase:</strong> Los cambios se guardan en la base de datos y son visibles para todos los usuarios.
            </p>
            <p>
              <strong>Instrucciones:</strong> Edita el JSON directamente. Al guardar, el contenido se sincroniza con Supabase y todos los usuarios verán los cambios.
            </p>
          </>
        ) : (
          <>
            <p style={{ marginBottom: '0.5rem', padding: '0.75rem', background: '#f39c12', color: 'white', borderRadius: '4px' }}>
              <strong>⚠️ Modo Local:</strong> Supabase no está configurado. Los cambios solo se guardan en tu navegador.
            </p>
            <p>
              <strong>Instrucciones:</strong> Edita el JSON directamente. Los cambios se guardan solo en localStorage de tu navegador.
            </p>
          </>
        )}
        <p>
          💡 <strong>Tip:</strong> Usa Ctrl+F para buscar textos específicos. Mantén el formato JSON válido.
        </p>
      </div>

      <textarea
        value={jsonText}
        onChange={(e) => setJsonText(e.target.value)}
        spellCheck={false}
        style={{
          width: '100%',
          minHeight: '600px',
          padding: '1rem',
          fontFamily: 'monospace',
          fontSize: '14px',
          lineHeight: '1.6',
          border: '1px solid var(--color-border)',
          borderRadius: '4px',
          background: 'var(--color-bg-secondary)',
          color: 'inherit',
          resize: 'vertical',
        }}
      />
    </div>
  )
}

function App() {
  const [language, setLanguage] = useState<Language>('es')
  const [theme, setTheme] = useState<Theme>('dark')
  const [navOpen, setNavOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [itemRequests, setItemRequests] = useState<ItemRequest[]>([
    createEmptyItem(),
  ])
  const [interestBosses, setInterestBosses] = useState<number[]>([])
  const [interestActivities, setInterestActivities] = useState<number[]>([])
  const [interestGuides, setInterestGuides] = useState<number[]>([])
  const [interestEntries, setInterestEntries] = useState<InterestEntry[]>([])
  const [availabilityDays, setAvailabilityDays] = useState<string[]>([])
  const [availabilityStart, setAvailabilityStart] = useState('')
  const [availabilityEnd, setAvailabilityEnd] = useState('')
  const [customContent, setCustomContent] = useState<typeof content | null>(null)
  const [contentLoading, setContentLoading] = useState(true)
  const [adminAuthenticated, setAdminAuthenticated] = useState(false)
  const location = useLocation()
  
  // Check Supabase auth session
  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) {
      setAdminAuthenticated(false)
      return
    }

    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setAdminAuthenticated(!!session)
    })

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setAdminAuthenticated(!!session)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleAdminLogin = () => {
    setAdminAuthenticated(true)
  }

  const handleAdminLogout = async () => {
    if (isSupabaseConfigured && supabase) {
      await supabase.auth.signOut()
    }
    setAdminAuthenticated(false)
  }
  
  // Load custom content from Supabase (priority) or localStorage (fallback)
  useEffect(() => {
    const loadContent = async () => {
      setContentLoading(true)
      
      // Try Supabase first
      if (isSupabaseConfigured && supabase) {
        try {
          const { data, error } = await supabase
            .from('app_content')
            .select('content')
            .eq('id', 1)
            .single()
          
          if (!error && data?.content) {
            setCustomContent(data.content)
            // Cache in localStorage
            localStorage.setItem('custom_content', JSON.stringify(data.content))
            setContentLoading(false)
            return
          }
        } catch (e) {
          console.error('Failed to load content from Supabase:', e)
        }
      }
      
      // Fallback to localStorage
      const stored = localStorage.getItem('custom_content')
      if (stored) {
        try {
          setCustomContent(JSON.parse(stored))
        } catch (e) {
          console.error('Failed to parse local content:', e)
        }
      }
      
      setContentLoading(false)
    }
    
    loadContent()
  }, [])
  
  const activeContent = customContent || content
  const data = activeContent[language]

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    setNavOpen(false)
  }, [location.pathname])

  const currentSection = useMemo(() => {
    const match = Object.entries(sectionRoutes).find(
      ([, path]) => path === location.pathname,
    )
    return match ? match[0] : 'inicio'
  }, [location.pathname])

  const currentLabel = useMemo(() => {
    return data.nav.find((item) => item.id === currentSection)?.label ?? data.nav[0].label
  }, [currentSection, data.nav])

  const registerLabel = useMemo(() => {
    return data.nav.find((item) => item.id === 'registro')?.label ?? 'Registro'
  }, [data.nav])

  const interestByBoss = useMemo(() => {
    const map = new Map<number, InterestEntry[]>()
    interestEntries.forEach((entry) => {
      entry.interest_boss_ids?.forEach((id) => {
        if (!map.has(id)) {
          map.set(id, [])
        }
        map.get(id)?.push(entry)
      })
    })
    return map
  }, [interestEntries])

  const interestByActivity = useMemo(() => {
    const map = new Map<string, InterestEntry[]>()
    interestEntries.forEach((entry) => {
      entry.interest_activity_ids?.forEach((id) => {
        const key = String(id)
        if (!map.has(key)) {
          map.set(key, [])
        }
        map.get(key)?.push(entry)
      })
    })
    return map
  }, [interestEntries])

  const interestByGuide = useMemo(() => {
    const map = new Map<string, InterestEntry[]>()
    interestEntries.forEach((entry) => {
      entry.interest_guide_ids?.forEach((id) => {
        const key = String(id)
        if (!map.has(key)) {
          map.set(key, [])
        }
        map.get(key)?.push(entry)
      })
    })
    return map
  }, [interestEntries])

  const gearRequests = useMemo(() => {
    return interestEntries.flatMap((entry) =>
      (entry.item_requests ?? []).map((request) => ({
        entry,
        request,
      })),
    )
  }, [interestEntries])

  const currentSubtitle =
    currentSection === 'inicio'
      ? ''
      : data.viewSubtitles[currentSection as keyof typeof data.viewSubtitles] || ''

  const ViewHeader = () => (
    <div className="view-header">
      <div className="view-breadcrumb">
        <Link to={sectionRoutes.inicio}>{data.nav[0].label}</Link>
        <span className="view-separator">/</span>
        <span>{currentLabel}</span>
      </div>
      {currentSubtitle ? <p className="view-subtitle">{currentSubtitle}</p> : null}
    </div>
  )

  const normalizeEntry = (entry: InterestEntry): InterestEntry => ({
    ...entry,
    item_requests: entry.item_requests ?? [],
    interest_boss_ids: entry.interest_boss_ids ?? [],
    interest_activity_ids: entry.interest_activity_ids ?? [],
    interest_guide_ids: entry.interest_guide_ids ?? [],
  })

  const loadInterestEntries = async () => {
    if (!isSupabaseConfigured || !supabase) {
      const stored = localStorage.getItem('guild_interest_local')
      const parsed = stored ? (JSON.parse(stored) as InterestEntry[]) : []
      setInterestEntries(parsed.map(normalizeEntry))
      return
    }

    const { data: entries, error } = await supabase
      .from('guild_interest')
      .select(
        'id, name, role, level, availability, contact, build, item_requests, interest_boss_ids, interest_activity_ids, interest_guide_ids, created_at',
      )
      .order('created_at', { ascending: false })

    if (error) {
      return
    }

    const normalized = (entries as InterestEntry[]).map(normalizeEntry)
    setInterestEntries(normalized)
  }

  useEffect(() => {
    void loadInterestEntries()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(false)
    setSubmitError(null)

    const form = event.currentTarget
    const formData = new FormData(form)
    const cleanedRequests = itemRequests.filter((request) =>
      Object.entries(request).some(([key, value]) =>
        key === 'id' ? false : Boolean(value),
      ),
    )

    const availabilityString = availabilityDays.length > 0 && availabilityStart && availabilityEnd
      ? `${availabilityDays.join(' ')} ${availabilityStart}-${availabilityEnd}`
      : ''

    const payload = {
      language,
      name: String(formData.get('name') || ''),
      role: String(formData.get('role') || ''),
      level: String(formData.get('level') || ''),
      availability: availabilityString,
      contact: String(formData.get('contact') || ''),
      build: String(formData.get('build') || ''),
      item_requests: cleanedRequests,
      interest_boss_ids: interestBosses,
      interest_activity_ids: interestActivities,
      interest_guide_ids: interestGuides,
      created_at: new Date().toISOString(),
    }

    const nextEntry = normalizeEntry(payload)
    setInterestEntries((prev) => [nextEntry, ...prev])
    localStorage.setItem(
      'guild_interest_local',
      JSON.stringify([nextEntry, ...interestEntries]),
    )

    if (isSupabaseConfigured && supabase) {
      const { error } = await supabase.from('guild_interest').insert(payload)
      if (error) {
        setSubmitError(data.form.error)
        setSubmitted(false)
        return
      }
      await loadInterestEntries()
    }

    form.reset()
    setItemRequests([createEmptyItem()])
    setInterestBosses([])
    setInterestActivities([])
    setInterestGuides([])
    setAvailabilityDays([])
    setAvailabilityStart('')
    setAvailabilityEnd('')
    setSubmitted(true)
  }

  const updateItem = (id: number, field: keyof ItemRequest, value: string) => {
    setItemRequests((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    )
  }

  const addItem = () => {
    setItemRequests((prev) => [...prev, createEmptyItem(prev.length)])
  }

  const removeItem = (id: number) => {
    setItemRequests((prev) => prev.filter((item) => item.id !== id))
  }

  const toggleInterest = (
    value: number,
    setSelected: React.Dispatch<React.SetStateAction<number[]>>,
  ) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value],
    )
  }

  const renderEntryList = (entries: InterestEntry[]) => (
    <ul className="interest-list">
      {entries.map((entry, index) => (
        <li key={`${entry.name}-${entry.created_at ?? index}`} className="interest-entry">
          <strong>{entry.name}</strong>
          <small>
            {entry.role}
            {entry.level ? ` · ${entry.level}` : ''}
            {entry.availability ? ` · ${entry.availability}` : ''}
          </small>
        </li>
      ))}
    </ul>
  )

  const renderGearRequests = () => (
    <ul className="interest-list">
      {gearRequests.map(({ entry, request }, index) => (
        <li key={`${entry.name}-${index}`} className="interest-entry">
          <strong>{entry.name}</strong>
          <small>
            {request.item}
            {request.slot ? ` · ${request.slot}` : ''}
            {request.priority ? ` · ${request.priority}` : ''}
            {request.source ? ` · ${request.source}` : ''}
          </small>
        </li>
      ))}
    </ul>
  )

  const renderStats = (stats?: readonly (string | MultiidiomaTrad)[]) => {
    if (!stats || stats.length === 0) {
      return null
    }

    return (
      <div className="dungeon-tags">
        {stats.map((stat, index) => (
          <span key={`${String(getText(stat, language)).slice(0, 20)}-${index}`} className="dungeon-tag">
            {getText(stat, language)}
          </span>
        ))}
      </div>
    )
  }

  const renderSpellList = (
    spells: ReadonlyArray<{
      name: string | MultiidiomaTrad
      effect: string | MultiidiomaTrad
      cost?: string | MultiidiomaTrad
      range?: string | MultiidiomaTrad
      limit?: string | MultiidiomaTrad
      tag?: string | MultiidiomaTrad
    }>,
  ) => (
    <div className="dungeon-spells">
      {spells.map((spell) => (
        <div key={String(getText(spell.name, language)).slice(0, 30)} className="dungeon-spell">
          <div className="dungeon-spell__title">
            <strong>{getText(spell.name, language)}</strong>
            {spell.tag ? <span className="dungeon-tag">{getText(spell.tag, language)}</span> : null}
          </div>
          <p>{getText(spell.effect, language)}</p>
          <div className="dungeon-meta">
            {spell.cost ? <span>{getText(spell.cost, language)}</span> : null}
            {spell.range ? <span>{getText(spell.range, language)}</span> : null}
            {spell.limit ? <span>{getText(spell.limit, language)}</span> : null}
          </div>
        </div>
      ))}
    </div>
  )

  // Show loading while fetching content
  if (contentLoading) {
    return (
      <div className="page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⏳</div>
          <p>Cargando contenido...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <nav className={`navbar ${navOpen ? 'open' : ''}`} aria-label="Primary">
        <div className="nav-inner">
          <div className="nav-brand">
            <img src="/logo/logopng.png" alt="The Bloody Brotherhood" className="nav-logo" />
            <div>
              <span className="nav-title">{data.navTitle}</span>
              <span className="nav-subtitle">{data.badge}</span>
            </div>
          </div>
          <button
            className="nav-toggle"
            type="button"
            onClick={() => setNavOpen((open) => !open)}
            aria-expanded={navOpen}
            aria-controls="nav-panel"
          >
            {data.navToggle}
          </button>
          <div className="nav-panel" id="nav-panel">
            <div className="nav-links" role="list">
              {data.nav.map((item) => (
                <NavLink
                  key={item.id}
                  to={sectionRoutes[item.id as keyof typeof sectionRoutes]}
                  end={item.id === 'inicio'}
                  className={({ isActive }) =>
                    [
                      'nav-link',
                      item.id === 'registro' ? 'nav-link--registro' : '',
                      isActive || currentSection === item.id ? 'active' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')
                  }
                  onClick={() => setNavOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            <Link className="nav-cta" to={sectionRoutes.registro}>
              {registerLabel}
            </Link>
            <div className="toggles">
              <div className="lang-toggle icon-toggle" role="group" aria-label="Language">
                <button
                  className={language === 'es' ? 'active' : ''}
                  onClick={() => setLanguage('es')}
                  type="button"
                  aria-label="Español"
                  title="Español"
                >
                  🇪🇸
                  <span className="sr-only">ES</span>
                </button>
                <button
                  className={language === 'en' ? 'active' : ''}
                  onClick={() => setLanguage('en')}
                  type="button"
                  aria-label="English"
                  title="English"
                >
                  🇺🇸
                  <span className="sr-only">EN</span>
                </button>
              </div>
              <div className="theme-toggle icon-toggle" role="group" aria-label="Theme">
                <button
                  className={theme === 'dark' ? 'active' : ''}
                  onClick={() => setTheme('dark')}
                  type="button"
                  aria-label={data.themeOptions.dark}
                  title={data.themeOptions.dark}
                >
                  🌙
                  <span className="sr-only">{data.themeOptions.dark}</span>
                </button>
                <button
                  className={theme === 'light' ? 'active' : ''}
                  onClick={() => setTheme('light')}
                  type="button"
                  aria-label={data.themeOptions.light}
                  title={data.themeOptions.light}
                >
                  ☀️
                  <span className="sr-only">{data.themeOptions.light}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="nav-overlay"
          aria-hidden={!navOpen}
          onClick={() => setNavOpen(false)}
        />
      </nav>
      <Routes>
        <Route
          path={sectionRoutes.inicio}
          element={
            <div className="route-view" key={location.pathname}>
              <header className="hero">
                <div className="hero-top">
                  <img src="/logo/logopng.png" alt="The Bloody Brotherhood" className="guild-logo" />
                  <span className="badge">{data.badge}</span>
                </div>
                <div className="hero-content">
                  <div className="hero-text">
                    <h1>{data.title}</h1>
                    <p className="hero-subtitle">{data.subtitle}</p>
                    <p className="hero-note">{data.transition}</p>
                    <div className="hero-actions">
                      <Link className="primary" to={sectionRoutes.registro}>
                        {data.ctaPrimary}
                      </Link>
                      <Link className="ghost" to={sectionRoutes.plan}>
                        {data.ctaSecondary}
                      </Link>
                    </div>
                  </div>
                  <div className="hero-panel">
                    {data.stats.map((stat) => (
                      <div className="stat" key={stat.label}>
                        <span className="stat-value">{stat.value}</span>
                        <span className="stat-label">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </header>
              <section className="section reveal">
                <div className="section-header">
                  <h2>{data.home.quickTitle}</h2>
                  <p>{data.home.quickLead}</p>
                </div>
                <div className="quick-grid">
                  {data.home.quickCards.map((card) => (
                    <Link
                      key={card.id}
                      className="quick-card"
                      to={sectionRoutes[card.id as keyof typeof sectionRoutes]}
                    >
                      <h3>{card.title}</h3>
                      <p>{card.text}</p>
                      <span>{data.home.quickCta}</span>
                    </Link>
                  ))}
                </div>
              </section>
              <section className="section reveal">
                <div className="section-header">
                  <h2>{data.home.glanceTitle}</h2>
                </div>
                <ul className="glance-list">
                  {data.home.glanceItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>
          }
        />
        <Route
          path={sectionRoutes.objetivo}
          element={
            <div className="route-view" key={location.pathname}>
              <ViewHeader />
              <section className="section reveal">
                <div className="section-header">
                  <h2>{data.objectives.title}</h2>
                  <p>{data.objectives.lead}</p>
                </div>
                <ul className="pill-list">
                  {data.objectives.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>
          }
        />
        <Route
          path={sectionRoutes.plan}
          element={
            <div className="route-view" key={location.pathname}>
              <ViewHeader />
              <section className="section reveal">
                <div className="section-header">
                  <h2>{data.plan.title}</h2>
                </div>
                <div className="grid">
                  {data.plan.items.map((item) => (
                    <article className="card" key={item.title}>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          }
        />
        <Route
          path={sectionRoutes.guias}
          element={
            <div className="route-view" key={location.pathname}>
              <ViewHeader />
              <section className="section reveal">
                <div className="section-header">
                  <h2>{data.guides.title}</h2>
                  <p>{data.guides.lead}</p>
                </div>
                <div className="steps">
                  {data.guides.steps.map((step, index) => {
                    const interested = interestByGuide.get(step) || [];
                    return (
                      <div className="step" key={step}>
                        <span className="step-index">0{index + 1}</span>
                        <p>{step}</p>
                        {interested.length > 0 && (
                          <div className="interest-summary">
                            <strong>
                              {interested.length} {data.interests.needHelp}
                            </strong>
                            {renderEntryList(interested)}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
              {data.guides.dungeons.length > 0 ? (
                <section className="section reveal">
                  <div className="section-header">
                    <h2>{data.guides.dungeonTitle}</h2>
                    <p>{data.guides.dungeonLead}</p>
                  </div>
                  <div className="dungeon-grid">
                    {data.guides.dungeons.map((dungeon) => (
                      <article className="dungeon-card" key={dungeon.id}>
                        <header className="dungeon-header">
                          <div>
                            <h3>{getText(dungeon.name, language)}</h3>
                            {dungeon.subtitle ? <p>{getText(dungeon.subtitle, language)}</p> : null}
                          </div>
                          {dungeon.levelRange ? (
                            <span className="dungeon-pill">{getText(dungeon.levelRange, language)}</span>
                          ) : null}
                        </header>
                        <ul className="dungeon-summary">
                          {Array.isArray(dungeon.summary) && dungeon.summary.map((item) => {
                            const text = getText(item, language)
                            return <li key={String(text).slice(0, 50)}>{text}</li>
                          })}
                        </ul>
                        <div className="dungeon-details">
                          <details className="dungeon-section">
                            <summary>{getText(uiLabels.monstres, language)}</summary>
                            <div className="dungeon-section__body">
                              {dungeon.monsters.map((monster) => (
                                <div className="dungeon-block" key={String(getText(monster.name, language)).slice(0, 30)}>
                                  <div className="dungeon-block__header">
                                    <h5>{getText(monster.name, language)}</h5>
                                    <span>{getText(monster.level, language)}</span>
                                  </div>
                                  {monster.description ? <p>{getText(monster.description, language)}</p> : null}
                                  {monster.bonus ? (
                                    <p className="dungeon-highlight">{getText(monster.bonus, language)}</p>
                                  ) : null}
                                  {renderSpellList(monster.spells)}
                                  {monster.passive ? (
                                    <p className="dungeon-passive">
                                      <strong>{getText(uiLabels.passif, language)}</strong> {getText(monster.passive, language)}
                                    </p>
                                  ) : null}
                                  {monster.notes?.length ? (
                                    <ul className="dungeon-notes">
                                      {monster.notes.map((note) => (
                                        <li key={String(getText(note, language)).slice(0, 50)}>{getText(note, language)}</li>
                                      ))}
                                    </ul>
                                  ) : null}
                                  {renderStats(monster.stats)}
                                </div>
                              ))}
                            </div>
                          </details>
                          <details className="dungeon-section">
                            <summary>{getText(uiLabels.boss, language)}</summary>
                            <div className="dungeon-section__body">
                              <div className="dungeon-block">
                                <div className="dungeon-block__header">
                                  <h5>{getText(dungeon.boss.name, language)}</h5>
                                  <span>{getText(dungeon.boss.level, language)}</span>
                                </div>
                                {dungeon.boss.description ? (
                                  <p>{getText(dungeon.boss.description, language)}</p>
                                ) : null}
                                {renderSpellList(dungeon.boss.spells)}
                                {dungeon.boss.passives?.length ? (
                                  <div className="dungeon-subsection">
                                    <h6>{getText(uiLabels.passifArtillerie, language)}</h6>
                                    {dungeon.boss.passives.map((passive) => (
                                      <div className="dungeon-passive" key={String(getText(passive.name, language)).slice(0, 30)}>
                                        <strong>{getText(passive.name, language)}:</strong> {getText(passive.effect, language)}
                                        {passive.notes?.length ? (
                                          <ul className="dungeon-notes">
                                            {passive.notes.map((note) => (
                                              <li key={String(getText(note, language)).slice(0, 50)}>{getText(note, language)}</li>
                                            ))}
                                          </ul>
                                        ) : null}
                                      </div>
                                    ))}
                                  </div>
                                ) : null}
                                {renderStats(dungeon.boss.stats)}
                              </div>
                            </div>
                          </details>
                          <details className="dungeon-section">
                            <summary>{getText(uiLabels.mecaniques, language)}</summary>
                            <div className="dungeon-section__body">
                              {Array.isArray(dungeon.mechanics) && dungeon.mechanics.map((section) => (
                                <div className="dungeon-block" key={String(getText(section.title, language)).slice(0, 30)}>
                                  <h5>{getText(section.title, language)}</h5>
                                  {Array.isArray(section.paragraphs) && section.paragraphs.map((paragraph: unknown) => (
                                    <p key={String(getText(paragraph, language)).slice(0, 50)}>{getText(paragraph, language)}</p>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </details>
                          <details className="dungeon-section">
                            <summary>{getText(uiLabels.planDonjon, language)}</summary>
                            <div className="dungeon-section__body">
                              <div className="dungeon-block">
                                <p>{getText(dungeon.plan, language)}</p>
                              </div>
                            </div>
                          </details>
                          <details className="dungeon-section">
                            <summary>{getText(uiLabels.steles, language)}</summary>
                            <div className="dungeon-section__body">
                              <div className="dungeon-block">
                                <p>{getText(dungeon.steles.lead, language)}</p>
                                <ul className="dungeon-notes">
                                  {Array.isArray(dungeon.steles.notes) && dungeon.steles.notes.map((note) => (
                                    <li key={String(getText(note, language)).slice(0, 50)}>{getText(note, language)}</li>
                                  ))}
                                </ul>
                              </div>
                              <div className="dungeon-subsection">
                                <h6>{getText(uiLabels.protoBoss, language)}</h6>
                                {dungeon.steles.protoBosses.map((proto) => (
                                  <div className="dungeon-block" key={String(getText(proto.name, language)).slice(0, 30)}>
                                    <div className="dungeon-block__header">
                                      <h5>{getText(proto.name, language)}</h5>
                                    </div>
                                    {proto.description ? <p>{getText(proto.description, language)}</p> : null}
                                    {renderSpellList(proto.spells)}
                                    {proto.passive ? (
                                      <p className="dungeon-passive">
                                        <strong>{getText(uiLabels.passif, language)}</strong> {getText(proto.passive, language)}
                                      </p>
                                    ) : null}
                                    {proto.notes?.length ? (
                                      <ul className="dungeon-notes">
                                        {proto.notes.map((note) => (
                                          <li key={String(getText(note, language)).slice(0, 50)}>{getText(note, language)}</li>
                                        ))}
                                      </ul>
                                    ) : null}
                                    {renderStats(proto.stats)}
                                  </div>
                                ))}
                              </div>
                              <div className="dungeon-subsection">
                                <h6>{getText(uiLabels.cristalStasis, language)}</h6>
                                <div className="dungeon-block">
                                  <ul className="dungeon-notes">
                                    {dungeon.steles.crystals.types.map((item) => (
                                      <li key={String(getText(item, language)).slice(0, 50)}>{getText(item, language)}</li>
                                    ))}
                                  </ul>
                                  <ul className="dungeon-notes">
                                    {dungeon.steles.crystals.notes.map((note) => (
                                      <li key={String(getText(note, language)).slice(0, 50)}>{getText(note, language)}</li>
                                    ))}
                                  </ul>
                                  {renderStats(dungeon.steles.crystals.stats)}
                                </div>
                              </div>
                            </div>
                          </details>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ) : null}
            </div>
          }
        />
        <Route
          path={sectionRoutes.bosses}
          element={
            <div className="route-view" key={location.pathname}>
              <ViewHeader />
              <section className="section reveal">
                <div className="section-header">
                  <h2>{data.bosses.title}</h2>
                  <p>{data.bosses.lead}</p>
                </div>
                <div className="boss-grid">
                  {data.bosses.items.map((boss) => {
                    const interested = interestByBoss.get(boss.id) || [];
                    return (
                      <article className="boss-card" key={boss.id}>
                        <div
                          className="boss-media"
                          style={{
                            backgroundImage: `url(/wakassets/bossIllustrations/${boss.id}.png)`,
                          }}
                        >
                          <span className="boss-id">#{boss.id}</span>
                        </div>
                        <div className="boss-body">
                          <h3>{boss.name}</h3>
                          <ul>
                            {boss.mechanics.map((mechanic) => (
                              <li key={mechanic}>{mechanic}</li>
                            ))}
                          </ul>
                          {interested.length > 0 && (
                            <div className="interest-summary">
                              <strong>
                                {interested.length} {data.interests.interested}
                              </strong>
                              {renderEntryList(interested)}
                            </div>
                          )}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            </div>
          }
        />
        <Route
          path={sectionRoutes.actividades}
          element={
            <div className="route-view" key={location.pathname}>
              <ViewHeader />
              <section className="section reveal">
                <div className="section-header">
                  <h2>{data.schedule.title}</h2>
                </div>
                <div className="schedule">
                  {data.schedule.items.map((item) => {
                    const interested = interestByActivity.get(item.name) || [];
                    return (
                      <div className="schedule-item" key={item.name}>
                        <h3>{item.name}</h3>
                        <p>{item.focus}</p>
                        <span>{item.cadence}</span>
                        {interested.length > 0 && (
                          <div className="interest-summary">
                            <strong>
                              {interested.length} {data.interests.interested}
                            </strong>
                            {renderEntryList(interested)}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          }
        />
        <Route
          path={sectionRoutes.equipamiento}
          element={
            <div className="route-view" key={location.pathname}>
              <ViewHeader />
              <section className="section reveal">
                <div className="section-header">
                  <h2>{data.gear.title}</h2>
                  <p>{data.gear.lead}</p>
                </div>
                <div className="callout">
                  <p>{data.gear.note}</p>
                </div>
                {gearRequests.length > 0 && (
                  <div className="gear-requests">
                    <h3>{data.interests.gearRequests}</h3>
                    {renderGearRequests()}
                  </div>
                )}
              </section>
            </div>
          }
        />
        <Route
          path={sectionRoutes.registro}
          element={
            <div className="route-view" key={location.pathname}>
              <ViewHeader />
              <section className="section reveal">
                <div className="section-header">
                  <h2>{data.form.title}</h2>
                  <p>{data.form.lead}</p>
                  <span className="form-note">{data.form.note}</span>
                  {!isSupabaseConfigured ? (
                    <span className="form-warning">{data.form.warning}</span>
                  ) : null}
                </div>
                <form className="form" onSubmit={handleSubmit}>
                  <label>
                    {data.form.fields.name}
                    <input
                      name="name"
                      placeholder={data.form.placeholders.name}
                      required
                    />
                  </label>
                  <label>
                    {data.form.fields.role}
                    <input
                      name="role"
                      placeholder={data.form.placeholders.role}
                      required
                    />
                  </label>
                  <label>
                    {data.form.fields.level}
                    <select name="level" required>
                      <option value="">{data.form.selectPlaceholder}</option>
                      {data.form.levelOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>
                      {data.form.fields.availability}
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      {data.form.weekDays.map((day) => (
                        <label key={day} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer' }}>
                          <input
                            type="checkbox"
                            checked={availabilityDays.includes(day)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setAvailabilityDays([...availabilityDays, day])
                              } else {
                                setAvailabilityDays(availabilityDays.filter(d => d !== day))
                              }
                            }}
                          />
                          <span>{day}</span>
                        </label>
                      ))}
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <label style={{ flex: '1', minWidth: '120px' }}>
                        {data.form.from}
                        <input
                          type="time"
                          value={availabilityStart}
                          onChange={(e) => setAvailabilityStart(e.target.value)}
                          required
                        />
                      </label>
                      <label style={{ flex: '1', minWidth: '120px' }}>
                        {data.form.to}
                        <input
                          type="time"
                          value={availabilityEnd}
                          onChange={(e) => setAvailabilityEnd(e.target.value)}
                          required
                        />
                      </label>
                    </div>
                  </div>
                  <label>
                    {data.form.fields.contact}
                    <input
                      name="contact"
                      placeholder={data.form.placeholders.contact}
                      required
                    />
                  </label>
                  <label>
                    {data.form.fields.build}
                    <textarea
                      name="build"
                      rows={4}
                      placeholder={data.form.placeholders.build}
                    />
                  </label>
                  <div className="interest-block">
                    <div className="interest-group">
                      <h3>{data.form.fields.interestBosses}</h3>
                      <div className="interest-options">
                        {data.bosses.items.map((boss) => (
                          <label key={boss.id} className="interest-option">
                            <span>{boss.name}</span>
                            <input
                              type="checkbox"
                              checked={interestBosses.includes(boss.id)}
                              onChange={() =>
                                toggleInterest(boss.id, setInterestBosses)
                              }
                            />
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="interest-group">
                      <h3>{data.form.fields.interestActivities}</h3>
                      <div className="interest-options">
                        {data.schedule.items.map((item, index) => (
                          <label key={item.name} className="interest-option">
                            <span>{item.name}</span>
                            <input
                              type="checkbox"
                              checked={interestActivities.includes(index)}
                              onChange={() =>
                                toggleInterest(
                                  index,
                                  setInterestActivities,
                                )
                              }
                            />
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="interest-group">
                      <h3>{data.form.fields.interestGuides}</h3>
                      <div className="interest-options">
                        {data.guides.steps.map((step, index) => (
                          <label key={step} className="interest-option">
                            <span>{step}</span>
                            <input
                              type="checkbox"
                              checked={interestGuides.includes(index)}
                              onChange={() =>
                                toggleInterest(index, setInterestGuides)
                              }
                            />
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="items-block">
                    <div className="items-header">
                      <h3>{data.form.fields.item}</h3>
                      <button type="button" className="ghost" onClick={addItem}>
                        {data.form.addItem}
                      </button>
                    </div>
                    {itemRequests.map((request, index) => (
                      <div className="item-row" key={request.id}>
                        <input
                          placeholder={data.form.fields.item}
                          value={request.item}
                          onChange={(event) =>
                            updateItem(request.id, 'item', event.target.value)
                          }
                        />
                        <input
                          placeholder={data.form.fields.slot}
                          value={request.slot}
                          onChange={(event) =>
                            updateItem(request.id, 'slot', event.target.value)
                          }
                        />
                        <select
                          value={request.priority}
                          onChange={(event) =>
                            updateItem(request.id, 'priority', event.target.value)
                          }
                        >
                          <option value="">{data.form.fields.priority}</option>
                          {data.form.priorities.map((priority) => (
                            <option key={priority} value={priority}>
                              {priority}
                            </option>
                          ))}
                        </select>
                        <input
                          placeholder={data.form.fields.source}
                          value={request.source}
                          onChange={(event) =>
                            updateItem(request.id, 'source', event.target.value)
                          }
                        />
                        <input
                          placeholder={data.form.fields.notes}
                          value={request.notes}
                          onChange={(event) =>
                            updateItem(request.id, 'notes', event.target.value)
                          }
                        />
                        {index > 0 ? (
                          <button
                            type="button"
                            className="ghost small"
                            onClick={() => removeItem(request.id)}
                          >
                            {data.form.removeItem}
                          </button>
                        ) : null}
                      </div>
                    ))}
                  </div>
                  <button type="submit" className="primary">
                    {data.form.submit}
                  </button>
                  {submitted ? <p className="success">{data.form.success}</p> : null}
                  {submitError ? <p className="error">{submitError}</p> : null}
                </form>
              </section>
            </div>
          }
        />
        <Route
          path={sectionRoutes.resumen}
          element={
            <div className="route-view" key={location.pathname}>
              <ViewHeader />
              <section className="section reveal">
                <div className="section-header">
                  <h2>{data.summary.title}</h2>
                </div>
                <div className="summary">
                  <div>
                    <ul className="summary-list">
                      {data.summary.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <details className="summary-details">
                    <summary>{data.summary.fullTitle}</summary>
                    {data.summary.fullText.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </details>
                </div>
              </section>
            </div>
          }
        />
        <Route
          path="/admin"
          element={
            <div className="route-view" key={location.pathname}>
              <section className="section reveal">
                {!adminAuthenticated ? (
                  <>
                    <div className="section-header">
                      <h2>🔧 Panel de Administración</h2>
                      <p>Acceso restringido - Autenticación requerida</p>
                    </div>
                    <AdminLogin onAuthenticated={handleAdminLogin} />
                  </>
                ) : (
                  <>
                    <div className="section-header">
                      <h2>🔧 Panel de Administración</h2>
                      <p>Edita el contenido completo de la aplicación (español e inglés)</p>
                    </div>
                    <AdminPanel 
                      content={activeContent} 
                      defaultContent={content}
                      onSave={(newContent) => {
                        setCustomContent(newContent)
                        localStorage.setItem('custom_content', JSON.stringify(newContent))
                      }}
                      onReset={() => {
                        setCustomContent(null)
                        localStorage.removeItem('custom_content')
                      }}
                      onLogout={handleAdminLogout}
                    />
                  </>
                )}
              </section>
            </div>
          }
        />
        <Route path="*" element={<Navigate to={sectionRoutes.inicio} replace />} />
      </Routes>

      <footer className="footer">{data.footer}</footer>
    </div>
  )
}

export default App
