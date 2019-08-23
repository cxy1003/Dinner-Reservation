set names utf8;
drop database if exists dc;
create database dc charset=utf8;
use dc;
#用户列表 dc_user
create table dc_user(
    uid int primary key auto_increment,
	uname varchar(32),
	upwd varchar(32),
	phone varchar(20),
    gender varchar(5),
    upic varchar(128)
); 
insert into dc_user values(null,'tom',md5('123'),"15339165228","0","1.png");
-- 轮播图dc_index_carouse
create table dc_index_carouse(
	cid int primary key auto_increment,
	img varchar(128),
	href varchar(128),
	title varchar(64)
);
insert into dc_index_carouse values (null,"c1.png","index.html",""),
(null,"c2.png","index.html",""),
(null,"c3.png","index.html",""),
(null,"c4.png","index.html",""),
(null,"c5.png","index.html",""),
(null,"c6.png","index.html",""),
(null,"c7.png","index.html","");
# 预定表 dc_preplot(前端获取)
create table dc_preplot(
    pid int primary key auto_increment,
    uname varchar(128),
    phone varchar(128),
    # 预订人数
    reserpeople varchar(2),
    pdate varchar(50),
    # 是否预定
    ispreplot varchar(50),
    # 备注框
    comment varchar(128)
);
insert into dc_preplot values(null,"lili","13652698536","2","10:30","1",""),
(null,"tom","13652698552","4","20:30","1",""),
(null,"tom","13652698552","4","20:30","1",""),
(null,"tom","13652698552","4","20:30","1",""),
(null,"tom","13652698552","4","20:30","1","");
# 评分表 dc_marksheet(前端获取)
create table dc_marksheet(
     pid int primary key auto_increment,
     uname varchar(128),
     grade varchar(50),
     # 评价内容
     comment varchar(128),
     upic varchar(128)
);
# 商品详情表
create table goods_details(
    id int primary key auto_increment,
    img varchar(128),
    price varchar(10),
    d_name varchar(50),
    subtitle varchar(20),
    intr varchar(64),
    address varchar(128),
    information varchar(128),
    score varchar(64),
    d_intr varchar(128),
    d_phone varchar(20),
    #活动
    activity varchar(20)
);
insert into goods_details values(null,"d1.jpg","60-100","粤珍轩 土门商厦店","粤菜馆","口味 3.6 环境 3.6 服务3.6","丰镐东路509号（土门十字东北角国美电器旁3楼）","餐厅分中餐和火锅，预定时请告知","3.5","营业时间：10:00-22:00，详情：粤珍轩，一家主打粤菜的餐厅。餐厅装修的很现代化。进入宽敞的大厅，首先进入眼帘的是整齐的桌椅。大厅可以提供200位客人同时就餐。进入包房，包房以暖色调为主，给人一种温暖的感觉。餐厅的台湾卤肉、榴莲酥、香酥肉饼、豆豉蒸排骨、酿三宝都很不错，值得一试。","5757577","吃一元积一分"),
(null,"d2.jpg","30-60","德发长 钟鼓楼店宴会厅","快餐简餐","口味 3.8 环境 3.8 服务3.7","钟鼓楼广场西大街3号（近世纪金花）","预定时请告知","4","营业时间：10:00-22:00，详情：德发长饺子馆，是一家以吃饺子为主的餐厅，还有一些其他的小菜，有鲜虾饺子，白斩鸡，各种形状的和各种颜色的饺子。鲜虾饺子，主要是用新鲜的虾仁做馅，虾仁馅不像其他的饺子馅，它不用剁碎了，先将虾仁用调料拌下，然后整个包进饺子里面，外面的皮很薄，都是手工包的，可以做成鸭的形状，不仅好看而且味道也很好，吃到嘴里虾肉很鲜，蘸上酱汁，味道更是好的煤没话说","5757577","吃一元积一分"),
(null,"d3.jpg","100-160","乾杯烧肉店","烧烤","口味 4.1 环境 4.2 服务4.2","莲湖区含光门里西南城角南马道巷8号","该餐厅暂不接受预订","4","营业时间：10:00-22:00","87625880",""),
(null,"d4.jpg","50-90","铭记烤鱼","烤鱼","口味 4.1 环境 4.2 服务 4.1","文景路88号白桦林居商业街D-107(市政府西门对面)","该餐厅正在营业，预定时请告知","4","营业时间:10:00-24:00","89293818",""), 
(null,"d5.jpg","40-70","阿瓦山寨","川菜/家常菜","口味 4.1 环境 4.1 服务 4","五味十字粉巷1号2层","该餐厅正在营业，预定时请告知","4","营业时间:11:00-21:00","87381392",""),   
(null,"d6.jpg","80-130","君乐城堡酒店雅庭西餐厅","自助餐","口味 4.1 环境 4.1 服务 4.1","环城南路西段12号君乐城堡大酒店1楼(近南门广场)","该餐厅正在营业，预定时请告知","4.5","营业时间:11:00-21:00","87608888",""),
(null,"d7.jpg","20-40","外婆印象","陕菜","口味 4.1 环境 4.1 服务 4","真爱粉巷里3楼","该餐厅正在营业，预定时请告知","4","营业时间:11:00-22:00","87888888",""),
(null,"d8.jpg","80-130","男友の店","海鲜","口味 4.1 环境 4.1 服务 4.1","曲江大雁塔南广场酒吧一条街","该餐厅正在营业，预定时请告知","4","营业时间:6:00-24:00","89313991","");
#主页商品 goods
create table goods(
 id int primary key auto_increment,
 store varchar(32),
 price varchar(12),
 img varchar(128),
 href varchar(128)
);
insert into goods values(null,"粤珍轩 土门商厦店","60-100","g1.jpg","index.html"),
(null,"德发长 钟鼓楼店宴会厅","30-60","g2.jpg","index.html"),
(null,"乾杯烧肉店","100-160","g3.jpg","index.html"),
(null,"鸣记烤肉 国金店","50-90","g4.jpg","index.html"),
(null,"阿瓦山寨","40-70","g5.jpg","index.html"),
(null,"君乐城堡酒店雅庭西餐厅","80-130","g6.jpg","index.html"),
(null,"外婆印象","20-40","g7.jpg","index.html"),
(null,"男友的店","80-130","g8.jpg","index.html")