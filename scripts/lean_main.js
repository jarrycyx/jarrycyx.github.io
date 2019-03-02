let configs = {};
try {
 	configs = JSON.parse(localStorage.getItem('js-sdk-demo/configs')) || {};
} catch (e) {}

const {
  	appId = '3o07wvQrrIjt5p1hYliDq5ih-gzGzoHsz',
  	appKey = 'UFNBYjMVDKdYGHWJh3xEM2EU',
} = configs;

AV.init({
	appId,
	appKey,
});
var Todo = AV.Object.extend('MyMessages');

var articleList=new Array();
var query = new AV.Query('Articles');
var skipNum=0;
query.descending('createdAt');
query.skip(skipNum);
query.limit(10);// 最多返回 10 条结果
var def=document.getElementById("main").innerHTML;
document.getElementById("main").innerHTML='';
query.find().then(function(results) {
    articleList=results;
    for (var idx=0;idx<results.length;idx++){
    var para=document.createElement("p");
    var node=document.createTextNode("这是新段落。");
    para.appendChild(node);

    var element=document.getElementById("main");
    newDef=def.replace('这里啥也没有',results[idx].get('Title'));
    newDef=newDef.replace('###idx##',(idx+skipNum)+'');
    newDef=newDef.replace('网络错误qwq',results[idx].get('Abstract'));
    newDef=newDef.replace('啊偶，网络开小差了~',results[idx].get('Preview'));
    newDef=newDef.replace('###pic##',results[idx].get('Picture'));
    element.innerHTML+=newDef;
    // results is an array of AV.Object.
    }
    element.innerHTML+='							<ul class="actions pagination">\
    <li><a href="" class="disabled button big previous">上一页</a></li>\
    <li><a href="#" class="button big next">下一页</a></li>\
    </ul>';
  }, function(error) {
	// error is an instance of AVError.
  });
function upLoadMessage(str){
	// 新建一个 Todo 对象
	var text=document.getElementById('hello-message').value;
	var todo = new Todo();
	todo.set('Text', text);
	todo.save().then(function (todo) {
		// 成功保存之后，执行其他逻辑.
		alert('你的问候信息 '+text+' 正通过LeanCloud中国华北节点向CYX高速传输，当然我看不看是个问题(=_=)');
	}, function (error) {
		// 异常处理
		alert("也不知道是你的网有问题还是我的服务器有问题(=_=)");
	});
}

function newArticleOpen(idx){
	location.href="articles/article.html?"+articleList[idx].get('Index');
}



