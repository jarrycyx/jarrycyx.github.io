var loc = location.href;
var n1 = loc.length;//地址的总长度
var n2 = loc.indexOf("?");//取得?号的位置
var data = decodeURI(loc.substr(n2+1, n1-n2));//从?号后面的内容


var query = new AV.Query('Articles');
query.equalTo('Index',data);

query.first().then(function (data) {
    // data 就是符合条件的第一个 AV.Object
    document.getElementById('main').innerHTML=data.get('Data');
  }, function (error) {
  });

/*
'\
<!-- Post -->\
    <article class="post">\
        <header>\
            <div class="title">\
                <h2><a href="../articles/a1_the_beginning.html">故事的开始</a></h2>\
                <p>这是一个非标准工科男的一片净土，这里欢迎那些在乎我和我在乎的人。</p>\
            </div>\
            <div class="meta">\
                <time class="published" datetime="2015-11-01">January 15, 2019</time>\
                <a href="#" class="author"><span class="name">CYX</span><img src="../images/logo.jpg" alt="" /></a>\
            </div>\
        </header>\
        <p style="text-indent:2em">社交媒体是个奇怪的东西。</p>\
        <p style="text-indent:2em">虽然我是社交媒体的资深用户，但我至今都没能把“渴望别人的关注”和“分享自己的喜悦”这两个性质不同的概念分清楚。有的时候想要把生活的一点一滴都放在朋友圈里，有的时候又丝毫不想让别人知道我在干嘛，寻求一种“深藏功与名”的独特感……</p>\
        <p style="text-indent:2em">有的时候发现，你所谓的朋友其实脱离不了人类喜欢看热闹的本质；一瞬之后又看到，有人在默默在乎你，也是在别人冷眼旁观的同一个时候拉了你一把；回头一看，原来还有人用尽一生把你送出去、让你飞起来的同时关心你的一切……核酸、肽和激素组成了几十亿人，但也是这些核算、肽和激素成就了在乎与不在乎、幸福与不幸福的天壤地别的差距。</p>\
        \
        <a style="padding:10px" class="image featured"> <img src="../images/dot.png" alt="" /> </a>\
        <a style="padding:10px" class="image featured"> <img src="../images/footprint_2.jpg" alt="" /> </a>\
\
        <p/>\
        <p style="text-indent:2em">所以我开辟了这一片净土，叫做Bluedot and Footprint（蓝点和脚印，取了个好听的中文名叫“一点一步”），蓝点就是旅行者号在几十亿公里外拍下的地球（<a href="https://en.wikipedia.org/wiki/Pale_blue_dot" target="_blank">“黯淡蓝点”</a>），脚印就是尼尔•阿姆斯特朗在月球上留下的<a href="https://en.wikipedia.org/wiki/Apollo_11" target="_blank">第一个脚印</a>。我愿看到人类的伟大和渺小，愿在渺小、有限的人类躯体中成就生命的伟大。</p>\
        <p style="text-indent:2em">这是一个非标准工科男的一片净土，这里欢迎那些在乎我和我在乎的人。</p>\
\
        <p style="color:#999999;font-size:13px;text-align:right">文/CYX </p>\
        \
        <footer>\
            <ul class="actions">\
                <li><a href="../index.html" class="button big">返回主页</a></li>\
            </ul>\
            <ul class="stats">\
                <li><a href="#">动态</a></li>\
                <li><a href="#" class="icon fa-heart">28</a></li>\
                <li><a href="#" class="icon fa-comment">128</a></li>\
            </ul>\
        </footer>\
    </article>\
\
\
'
*/