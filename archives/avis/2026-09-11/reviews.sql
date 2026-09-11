-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 11 sep. 2026 à 10:25
-- Version du serveur : 11.8.9-MariaDB-log
-- Version de PHP : 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `u103504870_ateliers`
--

-- --------------------------------------------------------

--
-- Structure de la table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `rating` tinyint(4) NOT NULL,
  `comment` text NOT NULL,
  `workshop_type` enum('couture','linogravure','fleurs-en-perles','plusieurs') NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `approved` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `reviews`
--

INSERT INTO `reviews` (`id`, `name`, `rating`, `comment`, `workshop_type`, `created_at`, `approved`) VALUES
(1, 'Lucie', 5, 'Super! Nouvelle passion débloquée!', 'linogravure', '2025-12-03 14:17:45', 0),
(3, 'Céline', 5, 'C\'était trop bien! Je me sens bourrée de talent mnt!', 'couture', '2025-12-14 09:08:07', 0),
(4, 'Alban', 5, 'J\'ai vraiment bien aimé !', 'linogravure', '2025-12-14 09:08:30', 1),
(5, 'Manon', 5, 'J\'ai toujours voulu apprendre à coudre, mais je n\'ai jamais trouvé le courage de me lancer. Avec ce premier cours, toutes les explications de Chloé et ses astuces, ça m\'a donné confiance pour enfin m\'y mettre! ', 'couture', '2025-12-17 09:10:02', 1),
(6, 'Alexine', 5, 'J’avais déjà quelques bases mais je n’avais pas pris le temps de coudre quelque chose depuis des années. C’était génial de réaliser une création soi-même de À à Z sous les bons conseils de Chloé. Elle est super patiente et pédagogue. Je recommande cette activité à quiconque souhaite apprendre à coudre ou s’y remettre 🪡', 'couture', '2025-12-16 09:10:35', 1),
(7, 'Thibault', 5, 'Chloé explique très bien et ce qu\'on a fait est vraiment joli !!', 'linogravure', '2025-12-19 09:12:19', 1),
(10, 'Manon', 5, 'Je ne connaissais pas du tout ce concept, mais c\'est une activité très chouette à faire entre amis. Cela permet de repartir avec un souvenir (tote bag dans notre cas) contenant les motifs de chacun tout en étant personnalisable !', 'linogravure', '2025-12-17 08:47:38', 1),
(11, 'Alexine', 5, 'Super chouette découverte. C’est une activité très satisfaisante à faire, qu’on soit créatif et doué de ses mains ou pas du tout. Chloé est bien organisée et nous permet de repartir avec un souvenir personnalisé, je recommande vraiment cette activité !', 'linogravure', '2025-12-16 09:10:35', 1),
(12, 'Céline', 5, 'J\'ai eu la grande chance de pouvoir essayer les deux ateliers que Chloé propose : initiation à la couture et à la linogravure. Et quelle plaisir ce fût ! En plus de nous accueillir dans un cadre bienveillant, chaleureux, où la bonne humeur reigne, Chloé nous livre tous ses précieux conseils et astuces afin que nous puissions découvrir ces activités en toute sérénité.\nJe suis repartie de chez Chloé avec mes créations et des livrets contenant toutes les informations nécessaires pour continuer à créer à la maison, mais surtout, je suis repartie le sourire aux lèvres d\'avoir passé un si bon moment avec mes amis et avec le sentiment d\'être remplie de talent !', 'plusieurs', '2026-02-22 16:08:43', 1),
(13, 'Juliette', 5, 'C’était trop coooool! Chlo explique super bien, tu te sens à ton aise directement et tu repars avec ta belle création!', 'couture', '2026-02-22 18:00:37', 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_approved` (`approved`),
  ADD KEY `idx_workshop` (`workshop_type`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
