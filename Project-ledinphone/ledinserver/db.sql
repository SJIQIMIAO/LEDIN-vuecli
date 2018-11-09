
SET NAMES UTF8;

DROP DATABASE IF EXISTS LDPHONE;
CREATE DATABASE LDPHONE CHARSET=UTF8;

USE LDPHONE;

CREATE TABLE ld_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),
  gender INT                 
);
INSERT INTO ld_user VALUES
(NULL, 'susu', '123456', 'susu@qq.com', '13501234567','1'),
(NULL, 'qiqi', '123456', 'qiqi@qq.com', '13501234568','1'),
(NULL, 'dengdeng', '123456', 'dengdeng@qq.com', '13501234569','1'),
(NULL, 'kaikai', '123456', 'kaikai@qq.com', '13501234560','0');

--登陆(对数据库查询操作)
SELECT * FROM ld_user
WHERE uname='tom' AND upwd=md5('123');

SELECT count(uid) as c FROM ld_user
WHERE uname = 'tom' AND upwd=md5('123')；

--图片轮播表
CREATE TABLE ld_imageList(
    id  INT PRIMARY KEY AUTO_INCREMENT,
    img_url  VARCHAR(255),
    title  VARCHAR(50)
);
INSERT INTO ld_imageList VALUES(null,
'http://127.0.0.1:3000/img/001.jpg','图片1');
INSERT INTO ld_imageList VALUES(null,
'http://127.0.0.1:3000/img/002.jpg','图片2');
INSERT INTO ld_imageList VALUES(null,
'http://127.0.0.1:3000/img/003.jpg','图片3');
INSERT INTO ld_imageList VALUES(null,
'http://127.0.0.1:3000/img/004.jpg','图片4');
--图片轮播所有数据
SELECT id,img_url,title FROM ld_imageList;


CREATE TABLE ld_product(
	id INT PRIMARY KEY AUTO_INCREMENT,
	img_url VARCHAR(255),
	title VARCHAR(255),
	p_old  DECIMAL(10,2),
	p_now DECIMAL(10,2),
	sell INT

);
INSERT INTO ld_product VALUES
(NULL,"http://127.0.0.1:3000/img/001.jpg","复古韩范 灯芯绒衬衫",300,219,1),
(NULL,"http://127.0.0.1:3000/img/002.jpg","爱心刺绣脚口 毛边设计 毛绒加厚内胆",300,219,1),
(NULL,"http://127.0.0.1:3000/img/003.jpg","复古韩范 灯芯绒衬衫",300,219,1),
(NULL,"http://127.0.0.1:3000/img/004.jpg","爱心刺绣脚口 毛边设计 毛绒加厚内胆",300,219,1),
(NULL,"http://127.0.0.1:3000/img/001.jpg","复古韩范 灯芯绒衬衫",300,219,1),
(NULL,"http://127.0.0.1:3000/img/002.jpg","爱心刺绣脚口 毛边设计 毛绒加厚内胆",300,219,1),
(NULL,"http://127.0.0.1:3000/img/003.jpg","复古韩范 灯芯绒衬衫",300,219,1),
(NULL,"http://127.0.0.1:3000/img/004.jpg","爱心刺绣脚口 毛边设计 毛绒加厚内胆",300,219,1),
(NULL,"http://127.0.0.1:3000/img/001.jpg","复古韩范 灯芯绒衬衫",300,219,1),
(NULL,"http://127.0.0.1:3000/img/002.jpg","爱心刺绣脚口 毛边设计 毛绒加厚内胆",300,219,1),
(NULL,"http://127.0.0.1:3000/img/003.jpg","复古韩范 灯芯绒衬衫",300,219,1),
(NULL,"http://127.0.0.1:3000/img/004.jpg","爱心刺绣脚口 毛边设计 毛绒加厚内胆",300,219,1);

