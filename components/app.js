var Game = function () {
	//安全声明
	//游戏数组gameBoard
	this.gameBoard = [];
	this.moveFlag = false;
	//以下为特权方法 类内调用

	this.addNewNum = function(){
		//向gameBoard添加两个数字
		//随机找一个位置 位置为空吗？ 不为空 添加数字2或者4 为空继续寻找位置
		var randX = parseInt(Math.floor(Math.random()*4));
		var randY = parseInt(Math.floor(Math.random()*4));
		while (true) {
			if(this.gameBoard[randX][randY] == 0){
				this.gameBoard[randX][randY] = Math.random()>0.5?2:4;
				break;
			}
			else {
				randX = parseInt(Math.floor(Math.random()*4));
				randY = parseInt(Math.floor(Math.random()*4));
			}
		}
	};
};

//初始化游戏数组
Game.prototype.newGame = function(){
	//初始化 4*4数组 置为全0
	for (var i = 0;i <= 3;i++) {
		this.gameBoard.push([]);
		for(var j = 0;j <= 3; j++){
			this.gameBoard[i].push(0);
		}
	}
	// 添加2个随机数字2或4
	this.addNewNum();
	this.addNewNum();
};

//向左移动
Game.prototype.moveLeft = function(){
	//向左移动 该行该元素左侧有东西吗？有的话是为0还是相同？
	for(var i=0;i<=3;i++){
		for(var j=1;j<=3;j++){//每个数的左侧有东西吗
			for(var k=j-1;k>=0;k--){
				if (this.gameBoard[i][j] != 0) {
					//如果左侧出现了一个不为0的数
				if (this.gameBoard[i][k] != 0) {
					//数字一样的话 合并
					if (this.gameBoard[i][j] == this.gameBoard[i][k]) {
						this.gameBoard[i][k] *= 2;
						this.gameBoard[i][j] = 0;
						this.moveFlag = true;
						break;
					}
					//数字不一样的话 移动
					if (this.gameBoard[i][j] != this.gameBoard[i][k]) {
						if (k+1 != j) {
							this.gameBoard[i][k+1] = this.gameBoard[i][j];
							this.gameBoard[i][j] = 0;
							this.moveFlag = true;
						}				
						break;
					}
					//真的出现了不为0的数 移动就完成了 break;
					
				}
				//左侧全都是0
				if (k == 0 && this.gameBoard[i][k] == 0) {
					this.gameBoard[i][k] = this.gameBoard[i][j];
					this.gameBoard[i][j] = 0;
					this.moveFlag = true;
					}
				}				
			}
		}
	}
	//确实发生了移动 增加一个新的数字
	if (this.moveFlag) {
		this.addNewNum();
		this.moveFlag = false;
	}
	return this.gameBoard;
};

//向右移动
Game.prototype.moveRight = function(){
	//向右移动 该行该元素右侧有东西吗？有的话是为0还是相同？
	for(var i=0;i<=3;i++){
		for(var j=2;j>=0;j--){//每个数的右侧有东西吗
			for(var k=j+1;k<=3;k++){
				if (this.gameBoard[i][j] != 0) {
					//如果右侧出现了一个不为0的数
				if (this.gameBoard[i][k] != 0) {
					//数字一样的话 合并
					if (this.gameBoard[i][j] == this.gameBoard[i][k]) {
						this.gameBoard[i][k] *= 2;
						this.gameBoard[i][j] = 0;
						this.moveFlag = true;
						break;
					}
					//数字不一样的话 移动
					if (this.gameBoard[i][j] != this.gameBoard[i][k]) {
						if (k-1 != j) {
							this.gameBoard[i][k-1] = this.gameBoard[i][j];
							this.gameBoard[i][j] = 0;
							this.moveFlag = true;
						}
						break;
					}
					//真的出现了不为0的数 移动就完成了 break;
				}
				//左侧全都是0
				if (k == 3 && this.gameBoard[i][k] == 0) {
					this.gameBoard[i][k] = this.gameBoard[i][j];
					this.gameBoard[i][j] = 0;
					this.moveFlag = true;
					}
				}				
			}
		}
	}
	//确实发生了移动 增加一个新的数字
	if (this.moveFlag) {
		this.addNewNum();
		this.moveFlag = false;
	}
	return this.gameBoard;
};

//向上移动
Game.prototype.moveUp = function(){
	//向上移动 该行该元素上面有东西吗？有的话是为0还是相同？
	for(var j=0;j<=3;j++){
		for(var i=1;i<=3;i++){//每个数的上侧有东西吗
			for(var k=i-1;k>=0;k--){
				if (this.gameBoard[i][j] != 0) {
					//如果上侧出现了一个不为0的数
				if (this.gameBoard[k][j] != 0) {
					//数字一样的话 合并
					if (this.gameBoard[i][j] == this.gameBoard[k][j]) {
						this.gameBoard[k][j] *= 2;
						this.gameBoard[i][j] = 0;
						this.moveFlag = true;
						break;
					}
					//数字不一样的话 移动
					if (this.gameBoard[i][j] != this.gameBoard[k][j]) {
						if (k+1 != i) {
							this.gameBoard[k+1][j] = this.gameBoard[i][j];
							this.gameBoard[i][j] = 0;
							this.moveFlag = true;
						}
						break;
					}
					//真的出现了不为0的数 移动就完成了 break;
				
				}
				//左侧全都是0
				if (k == 0 && this.gameBoard[k][j] == 0) {
					this.gameBoard[k][j] = this.gameBoard[i][j];
					this.gameBoard[i][j] = 0;
					this.moveFlag = true;
					}
				}
				
			}
		}
	}
	//确实发生了移动 增加一个新的数字
	if (this.moveFlag) {
		this.addNewNum();
		this.moveFlag = false;
	}
	return this.gameBoard;
};

//向下移动
Game.prototype.moveDown = function(){
	for(var j=0;j<=3;j++){
		for(var i=2;i>=0;i--){//每个数的下侧有东西吗
			for(var k=i+1;k<=3;k++){
				//如果上侧出现了一个不为0的数
				if (this.gameBoard[i][j] != 0) {
					if (this.gameBoard[k][j] != 0) {
					//数字一样的话 合并
					if (this.gameBoard[i][j] == this.gameBoard[k][j]) {
						this.gameBoard[k][j] *= 2;
						this.gameBoard[i][j] = 0;
						this.moveFlag = true;
						break;
					}
					//数字不一样的话 移动
					if (this.gameBoard[i][j] != this.gameBoard[k][j]) {
						if (k-1 != i) {
							this.gameBoard[k-1][j] = this.gameBoard[i][j];
							this.gameBoard[i][j] = 0;
							this.moveFlag = true;
						}
						break;
					}
					//真的出现了不为0的数 移动就完成了 break;
				}
				//左侧全都是0
				if (k == 3 && this.gameBoard[k][j] == 0) {
					this.gameBoard[k][j] = this.gameBoard[i][j];
					this.gameBoard[i][j] = 0;
					this.moveFlag = true;
					}
				}				
			}
		}
	}
	//确实发生了移动 增加一个新的数字
	if (this.moveFlag) {
		this.addNewNum();
		this.moveFlag = false;
	}
	return this.gameBoard;
};


Game.prototype.show = function(){
	var output = [];
	for(var i = 0; i < this.gameBoard.length;i++){
		console.log(this.gameBoard[i]);
		output = output.concat(this.gameBoard[i]);
	}
	console.log('PRINT END');
	return output;
};

var game1 = new Game();
game1.newGame();
game1.show();
