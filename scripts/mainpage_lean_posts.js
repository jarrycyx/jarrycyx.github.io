
let configs = {};
try {
  configs = JSON.parse(localStorage.getItem('js-sdk-demo/configs')) || {};
} catch (e) { }

const {
  appId = '3o07wvQrrIjt5p1hYliDq5ih-gzGzoHsz',
  appKey = 'UFNBYjMVDKdYGHWJh3xEM2EU',
} = configs;

AV.init({
  appId,
  appKey,
});
var Todo = AV.Object.extend('MyMessages');

var articleList = new Array();
var query = new AV.Query('Articles');
var skipNum = 0;
query.skip(skipNum);
query.limit(10);// 最多返回 10 条结果
var def = document.getElementById("main").innerHTML;
document.getElementById("main").innerHTML = '';
query.descending('Rank');
query.find().then(function (results) {
  articleList = results;
  for (var idx = 0; idx < results.length; idx++) {
    var element = document.getElementById("main");
    newDef = def.replace(/这里啥也没有/g, results[idx].get('Title'));
    newDef = newDef.replace(/###idx##/g, (idx + skipNum) + '');
    newDef = newDef.replace(/网络错误qwq/g, results[idx].get('Abstract'));
    newDef = newDef.replace(/啊偶，网络开小差了~/g, results[idx].get('Preview'));
    newDef = newDef.replace(/###pic##/g, results[idx].get('Picture'));
    element.innerHTML += newDef;
    // results is an array of AV.Object.
  }
  element.innerHTML += '							<ul class="actions pagination">\
    <li><a href="" class="disabled button big previous">上一页</a></li>\
    <li><a href="#" class="button big next">下一页</a></li>\
    </ul>';
}, function (error) {
  // error is an instance of AVError.
});
function upLoadMessage(str) {
  // 新建一个 Todo 对象
  var text = document.getElementById('hello-message').value;
  var todo = new Todo();
  todo.set('Text', text);
  todo.save().then(function (todo) {
    // 成功保存之后，执行其他逻辑.

    alert('你的问候信息 ' + text + ' 正通过LeanCloud中国华北节点向CYX高速传输，当然我看不看是个问题(=_=)');
  }, function (error) {
    // 异常处理
    alert("也不知道是你的网有问题还是我的服务器有问题(=_=)");
  });
}

function randomsort(a, b) {
	return Math.random() > .5 ? -1 : 1;
	//用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
} 

var articleList_lean = new Array();
var query_lean = new AV.Query('Articles');
var def_mini = document.getElementById("id-mini-posts").innerHTML;
document.getElementById("id-mini-posts").innerHTML = '';
query_lean.find().then(function (results_lean) {
	articleList_lean = results_lean;
	articleList_lean.sort(randomsort);

	for (var idx = 0; idx < Math.min(5,results_lean.length); idx++) {
		var element_mini_lean = document.getElementById("id-mini-posts");
		newDef_lean = def_mini.replace(/这里啥也没有/g, results_lean[idx].get('Title'));
		newDef_lean = newDef_lean.replace(/###idx##/g, (idx) + '');
		newDef_lean = newDef_lean.replace(/网络错误qwq/g, results_lean[idx].get('Abstract'));
		newDef_lean = newDef_lean.replace(/啊偶，网络开小差了~/g, results_lean[idx].get('Preview'));
		newDef_lean = newDef_lean.replace(/###pic##/g, results_lean[idx].get('Picture'));
		element_mini_lean.innerHTML += newDef_lean;
		// results is an array of AV.Object.
	}
	// results is an array of AV.Object.
}, function (error) {
	// error is an instance of AVError.
});

function newArticleOpen_lean(idx) {
  location.href = "article.html?" + articleList_lean[idx].get('Index');
}

function newArticleOpen(idx) {
  location.href = "article.html?" + articleList[idx].get('Index');
}
