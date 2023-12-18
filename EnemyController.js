import Enemy from "./Enemy.js";
 import MovingDirection from "./MovingDirection.js";

export default class EnemyController {
    enemyMap = [
        [0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 3, 3, 3, 3, 2, 2, 2],
        [2, 2, 2, 3, 3, 3, 3, 2, 2, 2],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      ];
    enemyRows ={};

    currentDirection = MovingDirection.right;
    xVelocity = 0;
    yVelocity = 0;
    defaultXVelocity = 1;
    defaultYVelocity = 1;

     constructer(canvas){
        this.canvas = canvas;
        this.createEnemies();
    }

    draw(ctx) {
        this.updateVelocityAnddirection();
        this.drawEnemies();
    }

    updateVelocityAndDirection() {
        for (const enemyRow of this.enemyRows) {
            if (this.currentDirection == MovingDirection.right) {
                this.xVelocity = this.defaultXVelocity;
                this.yVelocity = 0;
            }
        }
    }

    drawEnemies(ctx){
        this.enemyRows.flat().foreach((enemy)=>{
            enemy.move(this.xVelocity, this.yVelocity);
            enemy.draw(ctx)
        })
    }






 createEnemies() {
    this.enemyMap.forEach((row,rowIndex) => {
        this.enemyRows[rowIndex] = [];
        row.forEach((enemyNumber, enemyIndex) => {
            if(enemyNumber > 0){
                this.enmeyRows[rowIndex].push(new Enemy(Enemyindex* 50, rowIndex * 35, enemyNumber)
                )
            }
        });
    });
 }
}