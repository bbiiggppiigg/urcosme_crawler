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
  `post_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`review_id`, `product_name`, `stars`, `reviewer_name`, `skin_type`, `review_content`, `num_readers`, `num_pushes`, `post_date`) VALUES
(958416, 'butter LONDON 【WINK 眼妝系列】 WINK眼蜜', 6, '獅獅獅', '4', ' 剛好路過butter LONDON的門市就進去逛逛一直以為他們只有買指甲油,沒想到彩妝的品項也很多當時沒用過眼蜜類的產品,跟店員說想找一隻打底用的店員推薦我2色,其實我兩色都心動,但還是覺得先買一隻,好用再回來帶於是我就買了"ENGLISH ROSE 英國玫瑰"這個色號眼蜜本身有點珠光,蠻細緻的,所以不會讓眼皮變拋下圖是實際使用的圖片,沒有用很多+吃色,所以推開後的顏色沒有很明顯我都直接用這個海綿頭刷在眼皮上,用量很好調整我都是拿來當成眼影的打底色,很自然浮貼,而且不會黏膩乾的速度算快,再疊上其他眼影粉也不會結塊目前使用起來也沒有積線的問題買到現在大概快半年,雖然沒有天天用,但是只要塗眼影都是拿這隻打底的整體感覺很滿意,會回購的 ', 0, 1, '2015-07-08 10:44:00');

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
