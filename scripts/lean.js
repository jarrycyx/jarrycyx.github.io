let configs = {};
				try {
 					configs = JSON.parse(localStorage.getItem('js-sdk-demo/configs')) || {};
				} catch (e) {}

				const {
  					appId = 'amgUVDkwAv0upKkn8q9Mq4KN-gzGzoHsz',
  					appKey = '91lli3of3rcRBlQdiGodWO1q',
				} = configs;

				AV.init({
  					appId,
  					appKey,
				});
  				var Todo = AV.Object.extend('MyMessages');
				function upLoadMessage(str){
 					// 新建一个 Todo 对象
  					var todo = new Todo();
  					todo.set('Text', str);
  					todo.save().then(function (todo) {
    					// 成功保存之后，执行其他逻辑.
						alert("你的问候信息正通过LeanCloud中国华北节点向CYX高速传输，当然我看不看是个问题(=_=)")
  					}, function (error) {
    					// 异常处理
						alert("也不知道是你的网有问题还是我的服务器有问题(=_=)");
  					});
				}