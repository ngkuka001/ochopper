
var gameAbi = [{"constant":false,"inputs":[],"name":"changeBackOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"changeNewOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"changeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"joinGame","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"parent","type":"address"}],"name":"setShareParent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"startGame","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdrawReward","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdrawShareReward","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[],"name":"_owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_sepsreciver","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"cycle","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"gameTimes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"getParent","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"getShareParent","outputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"getUserData","outputs":[{"name":"","type":"address"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"getUserDataV1","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getUserLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"oneTokenAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"outAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"overIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"poolAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rewardOneAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"REWARDTOKEN","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"shareAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
var tokenAbi=[{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"}],"name":"sysDsale","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"}],"name":"removeWhiteList","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"sender","type":"address"},{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"_swap","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"}],"name":"burn","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"}],"name":"sysAsale","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"isInWhiteList","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"exchangeStop","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"t","type":"address"},{"name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"}],"name":"setSwap","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"_root","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"exchange","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"}],"name":"addWhiteList","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}];
var gasPrice='5000000000';
var tokenTokenContract='0x7B2256844e6262c01Ef0bC38a2B0772D109E11Da';
var controlContract = '0xE5fD5F55A9E6c00c74da4a004a5C7bD2477B5F91';
var linkMyWallet=function(){if(ethereum){web3Provider=ethereum;try{ethereum.enable();}catch(error){tishi("user cancel");return;}}else if(web3){web3Provider=web3.currentProvider;console.log("web3.currentProvider:");}else{web3Provider=new Web3.providers.HttpProvider('http://localhost:8545');console.log("https://http-testnet.hecochain.com");}web3js=new Web3(web3Provider);}
var selectAddress;
var web3jsInit=function(){var Inval=setInterval(function(){linkMyWallet();if(web3js){web3js.eth.getAccounts(function(error,result){if(!error){selectAddress=result[0];contractInstanceInit();window.clearInterval(Inval);}});}},2000);}
web3jsInit();
var tokenContractInstance;
var controlContractInstance;
var contractInstanceInit=function(){
	// dataContractInit();  被我注释掉了
	controlContractInstance=new web3js.eth.Contract(gameAbi,controlContract,{from:selectAddress,gasPrice:'0'});
	tokenContractInstance=new web3js.eth.Contract(tokenAbi,tokenTokenContract,{from:selectAddress,gasPrice:'0'});
	pageDataInit();
}

//公共部分
var approve = function(backFunction,errorFunction){tokenContractInstance.methods.approve(controlContract,'99999999999900000000').send({from:selectAddress,gasPrice: gasPrice},errorFunction).then(backFunction);}
var setShareParent=function(parentAddress,backFunction,errorFunction){controlContractInstance.methods.setShareParent(parentAddress).send({from:selectAddress,gasPrice:gasPrice},errorFunction).then(backFunction);}

//修改部分(开始，提取奖励2个，重新开始游戏)
var startGame=function(backFunction,errorFunction){controlContractInstance.methods.startGame().send({from:selectAddress,gasPrice:gasPrice},errorFunction).then(backFunction);}
var joinGame=function(backFunction,errorFunction){controlContractInstance.methods.joinGame().send({from:selectAddress,gasPrice:gasPrice},errorFunction).then(backFunction);}
var withdrawReward=function(backFunction,errorFunction){controlContractInstance.methods.withdrawReward().send({from:selectAddress,gasPrice:gasPrice},errorFunction).then(backFunction);}
var withdrawShareReward=function(backFunction,errorFunction){controlContractInstance.methods.withdrawShareReward().send({from:selectAddress,gasPrice:gasPrice},errorFunction).then(backFunction);}

//查询部分
var getallowance=function(backFunction){tokenContractInstance.methods.allowance(selectAddress,controlContract).call({from:selectAddress,gasPrice:'0'}).then(backFunction);}
var getShareParent=function(backFunction){controlContractInstance.methods.getShareParent(selectAddress).call({from:selectAddress,gasPrice:'0'}).then(backFunction);}

//查询用户数据
var getUserData=function(backFunction){controlContractInstance.methods.getUserData(selectAddress).call({from:selectAddress,gasPrice:'0'}).then(backFunction);}
var getUserDataV1=function(backFunction){controlContractInstance.methods.getUserDataV1(selectAddress).call({from:selectAddress,gasPrice:'0'}).then(backFunction);}
var gameTimes = function(backFunction){controlContractInstance.methods.gameTimes().call({from:selectAddress,gasPrice:'0'}).then(backFunction);}


//页面初始化
var pageDataInit = function(){
	getallowance(function(res){
		if(res*1>1000000000){
			alert('不用弹出参与窗口或按钮');
		}else{
			//必须参与之后才可以，这是一切的基础
			alert('弹出参与窗口或按钮');
		}
	})
}

//参与公牌游戏第一部需要先参与和之前的自行车游戏是一样的
var approveTest = function(){
	approve(function(res){},function(res){})
}


//查询我的推荐人，我的直推人数
var getShareParentTest = function(){
	getShareParent(function(res){
		console.log(res)
	})
}
//设置推荐人(和之前自行车游戏一样)
var setShareParentTest = function(){
	//第一个地址是用户输入的推荐人钱包地址
	console.log('setShareParentTest')
	setShareParent('0xcB80e5f5A75840e0A5a2d4A30606733Ec50129aa',function(res){
		console.log(res)
	},function(error,info){
		if(error){
			console.log(error)//提示用户取消
		}else{
			console.log(info)//提示用户取消
		}
	})
}

//重新开始，只有超时以后才可以点击，从新开始
var startGameTest = function(){
	startGame(function(res){
		
	},function(res){
		
	})
}

//参与公牌游戏，投资100个seps，不需要参数
var joinGameTest = function(){
	joinGame(function(res){
		
	},function(res){
		
	})
}

//提取公牌出局奖励，不需要参数
var withdrawRewardTest = function(){
	withdrawReward(function(res){
		
	},function(res){
		
	})
}

//提取推荐奖励，不需要参数
var withdrawShareRewardTest = function(){
	withdrawShareReward(function(res){
		
	},function(res){
		
	})
}

/**
 * 查询数据部分
 */

var gameTimesTest = function(){
	gameTimes(function(res){
		//游戏次数，初始化是1，当连续的周期内没有人参与结束后，开始下一次，这个数据会累加（调用startGame接口会累加）
	})
}


var getUserDataTest = function(){
	getUserData(function(res){
		//1，推荐人
		//2，授权信息（需要除以1后面18个0），大于每次参与数量，才可以参与游戏，否则需要先调用apporve接口
		//3, 累计参与seps数量（需要除以1后面18个0）
		//4, 累计分享奖励seps数量（需要除以1后面18个0）
		//5, 累计提取分享奖励seps数量（需要除以1后面18个0）
	})
}

var getUserDataV1Test = function(){
	getUserDataV1(function(res){
		//1，本轮参与的总人数
		//2，正在出局第几个人或者第几个人刚刚出局完成
		//3, 最后一次参与的时间（单位秒)用来初始化倒计时
		//4, 累计奖励池金额（需要除以1后面18个0）
		//5, 累计公牌奖励seps数量（需要除以1后面18个0）
		//6, 累计公牌奖励提取的seps数量（需要除以1后面18个0）
	})
}