function randomsort(a, b) {
	return Math.random() > .5 ? -1 : 1;
	//用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
}

var articleList_lean = new Array();
var query = new AV.Query('Articles');
var def_mini = document.getElementById("id-mini-posts").innerHTML;
document.getElementById("id-mini-posts").innerHTML = '';
query.find().then(function (results) {
	articleList_lean = results;
	articleList_lean.sort(randomsort);

	for (var idx = 0; idx < Math.min(5,results.length); idx++) {
		var element_mini = document.getElementById("id-mini-posts");
		newDef = def_mini.replace(/这里啥也没有/g, results[idx].get('Title'));
		newDef = newDef.replace(/###idx##/g, (idx) + '');
		newDef = newDef.replace(/网络错误qwq/g, results[idx].get('Abstract'));
		newDef = newDef.replace(/啊偶，网络开小差了~/g, results[idx].get('Preview'));
		newDef = newDef.replace(/###pic##/g, results[idx].get('Picture'));
		element_mini.innerHTML += newDef;
		// results is an array of AV.Object.
	}
	// results is an array of AV.Object.
}, function (error) {
	// error is an instance of AVError.
});




function newArticleOpen(idx) {
  location.href = "article.html?" + articleList[idx].get('Index');
}


