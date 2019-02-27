/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 80011
Source Host           : 172.16.6.62:3306
Source Database       : wechat_userinfo

Target Server Type    : MYSQL
Target Server Version : 80011
File Encoding         : 65001

Date: 2019-02-22 17:38:31
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for company_staff
-- ----------------------------
DROP TABLE IF EXISTS `company_staff`;
CREATE TABLE `company_staff` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `power_range` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `user_email` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `user_name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of company_staff
-- ----------------------------
INSERT INTO `company_staff` VALUES ('1', '5', '123456789@ecmoho.com', 'boss');
INSERT INTO `company_staff` VALUES ('2', '1', '987654321@ecmoho.com', '小明');

-- ----------------------------
-- Table structure for userinfo
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `scene_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `openid` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `user_name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `user_img` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `user_sex` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `user_country` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `user_province` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `user_city` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `user_email` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `date` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of userinfo
-- ----------------------------
INSERT INTO `userinfo` VALUES ('4', '810844191', 'oQOSc5iEmAWYwLwK6xRUXb-g2mfc', '(๑˙ー˙๑)', 'http://thirdwx.qlogo.cn/mmopen/J6WG5iatXHnWVUCGAqc9KCnnBMLqHV5He51RYojTYX3YT96eibyk1Pqyj3RbNwoXdCJmT3Jy6BRq6t8oOS6H1l3ibELcj18qmiaT/132', '1', '中国', '安徽', '淮北', '123456789@ecmoho.com', '2019-02-22 16:44:26');
INSERT INTO `userinfo` VALUES ('5', '776641577', 'oQOSc5v495iZYGnwGCEsgzDvFxKQ', '李博', 'http://thirdwx.qlogo.cn/mmopen/fXje08cXHUQicXDoOVDb3mqM2cjpZrjvM5pC10RfoNkYNicAHfcIBRjqlqAEUkOBetibjCpbeWZwgXicISgj2yLU7ibiaw5dMhhkRU/132', '0', '', '', '', '987654321@ecmoho.com', '2019-02-22 16:33:46');
