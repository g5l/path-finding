class Robot {

  constructor() {
    this.robot = {
      name: 'Silvio',
      positionY: 0,
      positionX: 0,
    };

    this.map = [[1,1,1,1], [0,1,1,0], [0,1,0,1], [0,1,9,1], [1,1,1,1]];
  }

  seekTreasure() {
    for (const mapY in this.map) {
      this.moveBottom();
      console.log('bottom', this.robot);
      
      for (const mapX in this.map[mapY]) {
        const moveRight = this.moveRight();
        console.log('right', this.robot);
        if (moveRight) break;

        const moveLeft = this.moveLeft();
        console.log('left', this.robot);
        if (moveLeft) break; 

        break;
      }
    }
    console.log(this.robot);
  }

  moveRight() {
    if (this.map[this.robot.positionY][this.robot.positionX + 1] === 1) {
      this.robot.positionX = this.robot.positionX + 1;
      return true;
    }
    return false;
  }

  moveLeft() {
    if (this.map[this.robot.positionY][this.robot.positionX - 1] === 1) {
      this.robot.positionX = this.robot.positionX - 1;
      return true;
    }
    return false;
  }

  moveTop() {
    if (this.map[this.robot.positionY - 1][this.robot.positionX] === 1) {
      this.robot.positionY = this.robot.positionY - 1;
      return true;
    }
    return false;
  }

  moveBottom() {
    if (this.map[this.robot.positionY + 1][this.robot.positionX] === 1) {
      this.robot.positionY = this.robot.positionY + 1;
      return true;
    }
    return false;
  }
}