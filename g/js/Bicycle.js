
var linkMyWallet=function(){if(ethereum){web3Provider=ethereum;try{ethereum.enable();}catch(error){tishi("user cancel");return;}}else if(web3){web3Provider=web3.currentProvider;console.log("web3.currentProvider:");}else{web3Provider=new Web3.providers.HttpProvider('http://localhost:8545');console.log("https://http-testnet.hecochain.com");}web3js=new Web3(web3Provider);}
var selectAddress;
var web3jsInit=function(){var Inval=setInterval(function(){linkMyWallet();if(web3js){web3js.eth.getAccounts(function(error,result){if(!error){selectAddress=result[0];contractInstanceInit();window.clearInterval(Inval);}});}},2000);}
web3jsInit();

var gasPrice='5000000000';
var buyFee = '10000000000000000';
var withdrawFee = '10000000000000000';
var repairFee = '1000000000000000';
var tokenAbi=[{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"}],"name":"sysDsale","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"}],"name":"removeWhiteList","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"sender","type":"address"},{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"_swap","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"}],"name":"burn","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"}],"name":"sysAsale","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"isInWhiteList","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"exchangeStop","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"t","type":"address"},{"name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"}],"name":"setSwap","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"_root","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"exchange","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"}],"name":"addWhiteList","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}];
var swapAbi=[{"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"getRewardInfo","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_withdrwFee","type":"uint256"}],"name":"setWithdrwFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"rewardjd","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_rewardjd","type":"uint256"}],"name":"setRewardjd","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"repairFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_buyFee","type":"uint256"}],"name":"setBuyFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"nft","type":"address"},{"name":"index","type":"uint256"}],"name":"zhongGameOver","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"chujiTotalNum","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"nft","type":"address"},{"name":"index","type":"uint256"}],"name":"gaojiGameOver","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"rewardkn","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"userZhongJiBicycles","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"nft","type":"address"},{"name":"index","type":"uint256"}],"name":"chujiGameOver","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"},{"name":"amount","type":"uint256"}],"name":"userWinByAdmin","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"withdrawContract","type":"address"}],"name":"setWithdrawContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"gaojiTotalNum","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"nft","type":"address"}],"name":"allRepair","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"chujiMax","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_zhongjiPrice","type":"uint256"}],"name":"setZhongjiPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"bicycleUpdateMap","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"buyFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"parent","type":"address"}],"name":"setShareParent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"rewardpt","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"}],"name":"bicycleUpdate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_repairFee","type":"uint256"}],"name":"setRepairFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"},{"name":"num","type":"uint256"}],"name":"setGaoJiBicycleNum","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"gaojiMax","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"nft","type":"address"},{"name":"account","type":"address"}],"name":"getUserBicycles","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"recipient","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_gaojiMax","type":"uint256"}],"name":"setGaojiMax","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"gaojiPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_withdrawContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_chujiPrice","type":"uint256"}],"name":"setChujiPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"userWithdrawToken","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"chujiPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_zhongjiMax","type":"uint256"}],"name":"setZhongjiMax","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"zhongjiPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"zhongjiTotalNum","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"userChuJiBicycles","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_chujiMax","type":"uint256"}],"name":"setChujiMax","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"nftIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_rewardpt","type":"uint256"}],"name":"setRewardpt","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_update","type":"uint256"}],"name":"setUpdate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"withdrwFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"update","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"changeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"getShareParent","outputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"},{"name":"num","type":"uint256"}],"name":"setChuJiBicycleNum","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"userGaoJiBicycles","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"nft","type":"address"}],"name":"buyChuji","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"getBicycleNum","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_rewardkn","type":"uint256"}],"name":"setRewardkn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"nft","type":"address"}],"name":"buyZhongji","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_gaojiPrice","type":"uint256"}],"name":"setGaojiPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"nft","type":"address"}],"name":"buyGaoji","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"zhongjiMax","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"},{"name":"num","type":"uint256"}],"name":"setZhongJiBicycleNum","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"bicyclesMap","outputs":[{"name":"price","type":"uint256"},{"name":"time","type":"uint256"},{"name":"bindex","type":"uint256"},{"name":"num","type":"uint8"},{"name":"starNum","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
var tokenTokenContract='0x7B2256844e6262c01Ef0bC38a2B0772D109E11Da';
var nftTokenContract = '0x5Ea06609F6762dB581260AEbCAbd09929F2d5154';
var controlContract='0x0d81B70Fc882197a98734304E79ADCf9A25C0E98';
var tokenContractInstance;
var controlContractInstance;
var contractInstanceInit=function(){
	controlContractInstance=new web3js.eth.Contract(swapAbi,controlContract,{from:selectAddress,gasPrice:'0'});
tokenContractInstance=new web3js.eth.Contract(tokenAbi,tokenTokenContract,{from:selectAddress,gasPrice:'0'});pageDataInit();}

var getallowance=function(backFunction){tokenContractInstance.methods.allowance(selectAddress,controlContract).call({from:selectAddress,gasPrice:'0'}).then(backFunction);}
var approve = function(backFunction,errorFunction){tokenContractInstance.methods.approve(controlContract,'9999999999990000000000000000').send({from:selectAddress,gasPrice: gasPrice},errorFunction).then(backFunction);}

//购买
var buyChuji=function(backFunction,errorFunction){controlContractInstance.methods.buyChuji(nftTokenContract).send({from:selectAddress,gasPrice:gasPrice,value:buyFee},errorFunction).then(backFunction);}
var buyZhongji=function(backFunction,errorFunction){controlContractInstance.methods.buyZhongji(nftTokenContract).send({from:selectAddress,gasPrice:gasPrice,value:buyFee},errorFunction).then(backFunction);}
var buyGaoji=function(backFunction,errorFunction){controlContractInstance.methods.buyGaoji(nftTokenContract).send({from:selectAddress,gasPrice:gasPrice,value:buyFee},errorFunction).then(backFunction);}

//游戏
var chujiGameStart=function(index,backFunction,errorFunction){controlContractInstance.methods.chujiGameOver(nftTokenContract,index).send({from:selectAddress,gasPrice:gasPrice},errorFunction).then(backFunction);}
var zhongGameStart=function(index,backFunction,errorFunction){controlContractInstance.methods.zhongGameOver(nftTokenContract,index).send({from:selectAddress,gasPrice:gasPrice},errorFunction).then(backFunction);}
var gaojiGameStart=function(index,backFunction,errorFunction){controlContractInstance.methods.gaojiGameOver(nftTokenContract,index).send({from:selectAddress,gasPrice:gasPrice},errorFunction).then(backFunction);}

//设置推荐人
var setShareParent=function(parentAddress,backFunction,errorFunction){controlContractInstance.methods.setShareParent(parentAddress).send({from:selectAddress,gasPrice:gasPrice},errorFunction).then(backFunction);}
//维修
var oneBicycleRepair=function(index,backFunction,errorFunction){controlContractInstance.methods.oneBicycleRepair(nftTokenContract,index).send({from:selectAddress,gasPrice:gasPrice,value:repairFee},errorFunction).then(backFunction);}
var allRepair=function(num,backFunction,errorFunction){repairAllFee = repairFee*1*num;controlContractInstance.methods.allRepair(nftTokenContract).send({from:selectAddress,gasPrice:gasPrice,value:repairAllFee+''},errorFunction).then(backFunction);}

//升级
var bicycleUpdate=function(index,backFunction,errorFunction){controlContractInstance.methods.bicycleUpdate(index).send({from:selectAddress,gasPrice:gasPrice},errorFunction).then(backFunction);}


//提币
var userWithdrawToken=function(amount,backFunction,errorFunction){controlContractInstance.methods.userWithdrawToken().send({from:selectAddress,gasPrice:gasPrice,value:withdrawFee},errorFunction).then(backFunction);}

//查询
var getUserRewardInfo=function(backFunction){controlContractInstance.methods.getRewardInfo(selectAddress).call({from:selectAddress,gasPrice:'0'}).then(backFunction);}
var getBicycleNum=function(backFunction){controlContractInstance.methods.getBicycleNum(selectAddress).call({from:selectAddress,gasPrice:'0'}).then(backFunction);}
var getUserBicycles=function(backFunction){controlContractInstance.methods.getUserBicycles(nftTokenContract,selectAddress).call({from:selectAddress,gasPrice:'0'}).then(backFunction);}
var getShareParent=function(backFunction){controlContractInstance.methods.getShareParent(selectAddress).call({from:selectAddress,gasPrice:'0'}).then(backFunction);}

// var getUserZhongjiBicycle=function(account,backFunction){controlContractInstance.methods.getUserZhongjiBicycle(account).call({from:selectAddress,gasPrice:'0'}).then(backFunction);}
// var getUserGaojiBicycle=function(account,backFunction){controlContractInstance.methods.getUserGaojiBicycle(account).call({from:selectAddress,gasPrice:'0'}).then(backFunction);}
// var chujiPrice=function(backFunction){controlContractInstance.methods.chujiPrice().call({from:selectAddress,gasPrice:'0'}).then(backFunction);}
// var zhongjiPrice=function(backFunction){controlContractInstance.methods.zhongjiPrice().call({from:selectAddress,gasPrice:'0'}).then(backFunction);}
// var gaojiPrice=function(backFunction){controlContractInstance.methods.gaojiPrice().call({from:selectAddress,gasPrice:'0'}).then(backFunction);}



// var getRewardTotalChu=function(backFunction){rewardControlContractInstance.methods.getRewardTotalChu().send({from:selectAddress,gasPrice:gasPrice}).then(backFunction);}
// var getRewardTotalZhong=function(backFunction){rewardControlContractInstance.methods.getRewardTotalZhong().send({from:selectAddress,gasPrice:gasPrice}).then(backFunction);}
// var getRewardTotalGao=function(backFunction){rewardControlContractInstance.methods.getRewardTotalGao().send({from:selectAddress,gasPrice:gasPrice}).then(backFunction);}


//页面初始化
// var pageDataInit = function(){
// 	getallowance(function(res){
// 		if(res*1>1000000000){
// 			alert('不用弹出参与窗口或按钮');
// 		}else{
// 			//必须参与之后才可以，这是一切的基础
// 			alert('弹出参与窗口或按钮');
// 		}
// 	})
// 	document.getElementById('myAddress').innerText = selectAddress;
// }

var approveTest = function(){
	approve(function(res){},function(res){})
}

//查询我拥有的自行车数量，还是5个为一组
//1,最后使用时间,没有使用过为0
//2,升级后胜率增加百分比,初始为0
//3,自行车Id,(所有会员排号，从0一直增加，越往后，越大)
//4,可使用的次数
//5,星级

var getUserBicyclesTest = function(){
	getUserBicycles(function(res){
		console.log(res)
	})
}

var buyTest = function(){
	//初级购买
	buyChuji(function(res){
		console.log(res)
	},function(error){
		console.log(error)
	})
	
	//中级购买
	// buyZhongji(function(res){
	// 	console.log(res)
	// })
	
	//高级购买
	// buyGaoji(function(res){
	// 	console.log(res)
	// })
}


var gameStartTest = function(){
	//这里的0是自己初级自行车的Id号(所有会员排号，从0一直增加，越往后，越大)
	chujiGameStart(0,function(res){
		console.log(res)
	},function(error){
		console.log(error)
	})
	
	//中级
	// zhongGameStart(0,function(res){
	// 	console.log(res)
	// })
	
	//高级
	// gaojiGameStart(0,function(res){
	// 	console.log(res)
	// })
	
}

var chujiRepairTest = function(){
	//这里的0是自己初级自行车的Id号(所有会员排号，从0一直增加，越往后，越大)
	oneBicycleRepair(0,function(res){
		console.log(res)
	},function(error){
		console.log(error)
	})
	
	//维修所有自行车，这里的5是我所有人的自行车数量
	// allRepair(5,function(res){
	// 	console.log(res)
	// })
	
}

var chujiUpdateTest = function(){
	//不分级别，这里的0是自己初级自行车的Id号(所有会员排号，从0一直增加，越往后，越大)
	bicycleUpdate(0,function(res){
		console.log(res)
	},function(error){
		console.log(error)
	})
}


/**
 * 奖励部分每个调拥合约的返回都是2个数字,第一个是累计奖励，第二个是累计提取，第三个是分享奖励收益
 */

//查询我的总奖励和总提取(每次玩游戏后，调用，每次提币后调用)
var getUserRewardInfoTest = function(){
	getUserRewardInfo(function(res){
		console.log(res)
	})
}

var userWithdrawTokenTest = function(){
	userWithdrawToken(0,function(res){
		console.log(res)
	},function(res){
		console.log(res)
	})
}


//其他接口；
var getBicycleNumTest = function(){
	//我购买的初中高级自行车数量
	getBicycleNum(function(res){
		console.log(res)
	})
}



/**
 * 推荐关系
 */

//查询我的推荐人，我的直推人数
var getShareParentTest = function(){
	getShareParent(function(res){
		console.log(res)
	})
}

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
