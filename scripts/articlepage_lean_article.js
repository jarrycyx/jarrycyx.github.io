

var loc = location.href;
var n1 = loc.length;//地址的总长度
var n2 = loc.indexOf("?");//取得?号的位置
var data = decodeURI(loc.substr(n2 + 1, n1 - n2));//从?号后面的内容
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

var query = new AV.Query('Articles');
query.equalTo('Index', data);

query.first().then(function (data) {
	// data 就是符合条件的第一个 AV.Object
	document.getElementById('main').innerHTML = data.get('Data');
}, function (error) {
});
