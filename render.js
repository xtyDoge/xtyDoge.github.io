
var compcol ={
    template:'<div class=\"col\"><div :class="[stylesheet]" class=\"col-color\">{{number}}</div></div>',
    props:['number'],
    data:function(){
         return {stylesheet:0};
    },
    beforeUpdate:function(){
      console.log("before")
      this.getClass(this.number);
    },
    updated:function() {
      console.log("update");
    },
    created:function(){
      this.getClass(this.number);
    },
    methods:{
      getClass:function(i){
        var styleDic = {'0':'zero','2':'two','4':'four','8':'eight','16':'sixteen','32':'thirtytwo','64':'sixtyfour','128':'ohte','256':'thfs','512':'fht','1024':'ottf','2048':'ttfe'};
        //return {stylesheet:styleDic[this.number]};  
        this.stylesheet = styleDic[i];
      }
    }
  };


var Game = new Vue({
    el:"#app",
    data:{
      items:game1.show(),
      score:game1.getScoreRank().score,
      record:game1.getScoreRank().record,
      isFailed:game1.isFailed()
    },
    computed:{
      
    },
    components:{
      'col-component':compcol
    },
    methods:{
      updateCondition:function(){
        this.items = game1.show();
        this.score = game1.getScoreRank().score;
        this.record = game1.getScoreRank().record;
        this.isFailed =  game1.isFailed();
      },
      goLeft:function(){
         game1.moveLeft();
         this.updateCondition();       
      },
      goRight:function(){
         game1.moveRight();
          this.updateCondition(); 
      },
      goUp:function(){
         game1.moveUp();
          this.updateCondition(); 
      },
      goDown:function(){
         game1.moveDown();
          this.updateCondition(); 
      },
      newGame:function(){
        game1.newGame();
         this.updateCondition(); 

      }
    }
  });
