-- phpMyAdmin SQL Dump
-- version 4.2.8
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 08, 2015 at 04:10 AM
-- Server version: 5.6.24
-- PHP Version: 5.5.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `urcosme`
--

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE IF NOT EXISTS `reviews` (
`review_id` bigint(20) NOT NULL,
`product_name` varchar(100) NOT NULL,
`stars` int(11) NOT NULL,
`reviewer_name` varchar(100) NOT NULL,
`skin_type` varchar(100) NOT NULL,
`review_content` text NOT NULL,
`num_readers` int(11) NOT NULL,
`num_pushes` int(11) NOT NULL,
`post_date` datetime NOT NULL,
`will_buy_again` int(11) NOT NULL,
`calm_not_stimulating` int(11) NOT NULL,
`keep_moisture` int(11) NOT NULL,
`not_alergic` int(11) NOT NULL,
`save_usage` int(11) NOT NULL,
`fresh_and_cool` int(11) NOT NULL,
`nice_price` int(11) NOT NULL,
`not_sticky` int(11) NOT NULL,
`not_oily` int(11) NOT NULL,
`bright_and_transparent` int(11) NOT NULL,
`no_zit` int(11) NOT NULL,
`low_entry_barrier` int(11) NOT NULL,
`soft` int(11) NOT NULL,
`last_for_long` int(11) NOT NULL,
`easy_to_balance` int(11) NOT NULL,
`delicate` int(11) NOT NULL,
`polishied` int(11) NOT NULL,
`no_acne` int(11) NOT NULL,
`smooth` int(11) NOT NULL,
`easy_for_cleaning` int(11) NOT NULL,
`easy_to_carry` int(11) NOT NULL,
`natural` int(11) NOT NULL,
`not_smother` int(11) NOT NULL,
`no_smell` int(11) NOT NULL,
`perfectly_fit` int(11) NOT NULL,
`homogeneous_skin_color` int(11) NOT NULL,
`oil_control` int(11) NOT NULL,
`skin_whitening` int(11) NOT NULL,
`looks_good` int(11) NOT NULL,
`thin_and_transparent` int(11) NOT NULL,
`makeup_natural` int(11) NOT NULL,
`flower_scent` int(11) NOT NULL,
`tight` int(11) NOT NULL,
`fair_and_tender` int(11) NOT NULL,
`color_decorating` int(11) NOT NULL,
`jewelry_like` int(11) NOT NULL,
`sun_proof` int(11) NOT NULL,
`matted_surface` int(11) NOT NULL,
`water_proof` int(11) NOT NULL,
`strong_concealing` int(11) NOT NULL,
`pore_conceal` int(11) NOT NULL,
`saturated` int(11) NOT NULL,
`not_dull` int(11) NOT NULL,
`dry_and_clean` int(11) NOT NULL,
`nice_smell` int(11) NOT NULL,
`no_burden` int(11) NOT NULL,
`lifting` int(11) NOT NULL,
`others` varchar(100)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `reviews`
--

--
-- Indexes for dumped tables
--

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
 ADD PRIMARY KEY (`review_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
