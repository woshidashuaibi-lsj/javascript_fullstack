class Grid{
  constructor(size){
    this.size=size;
    this.grid=this.init();
  }
  init(){
    let grid=[];
   for(let i=0;i<this.size;i ++){
  grid[i]=[];
  for(let j=0;j<this.size;j ++){
    grid[i].push('');
  }
   } 
   return grid;
  }
  //把空格子 跳出来

  uesFulCell(){
    let cells=[];
    for(let i=0;i<this.size;i++){
      for(let j=0;j<this.size;j++){
        if(this.grid[i][j]==''){
          cells.push({
            i,
            j
          })
        }
      }
    }
    return cells;
  }
  //从一堆空格子中随机拿一个
  selectCell(){
    let unUsed=this.uesFulCell();   //3
    let index=Math.floor( Math.random()*unUsed.length);    //[0~3]
  return unUsed[index];
  }
}
module.exports=Grid;