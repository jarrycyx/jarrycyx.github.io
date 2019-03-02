

var articleList=new Array();
var query = new AV.Query('Articles');
var skipNum=0;
query.descending('createdAt');
query.skip(skipNum);
query.limit(10);// 最多返回 10 条结果
query.find().then(function(results) {
	articleList=results;
	// results is an array of AV.Object.
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
	location.href="articles/article.html?"+articleList[skipNum+idx].get('Index');
}



