CREATE TABLE `blog_posts` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `title` text NOT NULL,
  `content` longtext NOT NULL,
  `creation_date` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
