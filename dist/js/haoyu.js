function setVariables() { //根据<a href='http://www.daimajiayuan.com/sitejs-5791-1.html' target='_blank'><u>浏览器</u></a>不同来预设需要改变的属性
    if (navigator.appName == "Netscape") //如果是NS
    {
        hh = ".top=";
        ww = ".left";
        dS = "document.getElementById()";
        sD = "";
        y = "myCarousel.clientWidth";
        h = "myCarousel.clientHeight";
    }
    else {  //如果是IE
        v = ".pixelTop=";
        dS = "";
        sD = ".style";
        y = "document.body.scrollTop";
    }
    // 百度地图API功能
    var map = new BMap.Map("allmap");    // 创建Map实例
    var point = new BMap.Point(112.529965, 32.144812);
    map.centerAndZoom(point, 12);  // 初始化地图,设置中心点坐标和地图级别
    map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    var marker = new BMap.Marker(point);  // 创建标注
    map.addOverlay(marker);              // 将标注添加到地图中
    var label = new BMap.Label("张冲林场", { offset: new BMap.Size(20, -10) });
    marker.setLabel(label);
}

function keepLocation() {  //这个函数用来保持浮动层的位置
    //文字浮动层位置
    var width = eval(y);
    var height = eval(h);

    object = "font";   //中心文字(ID)
    var left = width * 0.35;
    var top = height * 0.35;
    //调整层的位置
    eval(object + ".setAttribute('style','top:" + top + "px;left:" + left + "px;position:absolute;z-index:2');")

    object = "logo";   //logo(ID)
    left = width * 0.15;
    top = 20;
    eval(object + ".setAttribute('style','top:" + top + "px;left:" + left + "px;position:absolute;z-index:2');")

    object = "nav";   //导航(ID)
    left = width * 0.5;
    top = 20;
    eval(object + ".setAttribute('style','top:" + top + "px;left:" + left + "px;position:absolute;z-index:2');")

    //设置图片自适应
    //img-font
    var imgWidth = width * 0.28;
    eval("document.getElementById('img-font').style.width='" + imgWidth + "px';")

    //img-logo
    var imgWidth = width * 0.18;
    eval("document.getElementById('img_logo').style.width='" + imgWidth + "px';")

    //Secltion2  img_Section2
    imgWidth = width * 0.7 * 0.2;
    eval("document.getElementById('img_Section2_1').style.width='" + imgWidth + "px';")
    eval("document.getElementById('img_Section2_2').style.width='" + imgWidth + "px';")
    eval("document.getElementById('img_Section2_3').style.width='" + imgWidth + "px';")
    eval("document.getElementById('img_Section2_4').style.width='" + imgWidth + "px';")
    imgWidth = width * 0.7 * 0.25;
    eval("document.getElementById('img_Section2_P1').style.width='" + imgWidth + "px';")
    imgWidth = width * 0.7 * 0.02;
    eval("document.getElementById('p_Section2').style.cssText='width: 200px; margin-left: auto; margin-bottom: 20px; margin-right:" + imgWidth + "px';")

    //Section3
    /* 设置图片高度 */
    eval("document.getElementById('Section3_img').style.cssText='width: 100%; height:" + height + "px';")
    //设置文字浮动
    var section2Height = document.getElementById("Section2").scrollHeight;
    var imgheight = height + height + section2Height;
    leftImg = width * 0.17;
    leftFot = width * 0.25;
    topImg = imgheight * 0.88;
    topFont = imgheight * 0.95;
    eval("document.getElementById('Section3_Font_Img').style.cssText='width:60px; position: absolute;z-index:2;top:" + topImg + "px;left:" + leftImg + "px;'")
    eval("document.getElementById('Section3_Font_P').style.cssText='color:white;width: 60%; position: absolute;z-index:2;top:" + topFont + "px;left:" + leftFot + "px;'")

    //Section4 p1
    var section2Height = document.getElementById("Section2").scrollHeight;
    var section3Height = document.getElementById("Section3").scrollHeight;
    var section4Height = height + section2Height + section3Height;
    //p1
    imgwidth = width * 0.4;
    var fontwidth = width * 0.4;
    leftImg = width * 0.08;
    leftFot = width * 0.5;
    topImg = section4Height + (section4Height * 0.15);
    topFont = imgheight + (imgheight * 0.16);
    eval("document.getElementById('Section4_1_img').style.cssText='width:" + imgwidth + "px; position: absolute;z-index:2;top:" + topImg + "px;left:" + leftImg + "px;'")
    eval("document.getElementById('Section4_1_p').style.cssText='width:" + fontwidth + "px; position: absolute;z-index:2;top:" + topFont + "px;left:" + leftFot + "px;'")
    //p2
    var p1Height = document.getElementById("Section4_1_img").scrollHeight;
    imgwidth = width * 0.4;
    var fontwidth = width * 0.4;
    leftImg = width * 0.5;
    leftFot = width * 0.08;
    topImg = section4Height + p1Height + (section4Height * 0.18);
    topFont = imgheight + p1Height + (imgheight * 0.19);
    eval("document.getElementById('Section4_2_img').style.cssText='width:" + imgwidth + "px; position: absolute;z-index:2;top:" + topImg + "px;left:" + leftImg + "px;'")
    eval("document.getElementById('Section4_2_p').style.cssText='width:" + fontwidth + "px; position: absolute;z-index:2;top:" + topFont + "px;left:" + leftFot + "px;'")

    //Section5
    var mapHeight = section4Height * 0.56;
    eval("document.getElementById('Section5').style.cssText='width:100%;height:300px; margin-top:" + mapHeight + "px;'")
/* 
    setTimeout("keepLocation()", 10); */
}