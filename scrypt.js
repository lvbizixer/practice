//-----------------------------// js data types:
/*
1. String:{
  'ali' 
  "alireza"
}

2. Number:{
  124,
  12+13,
  13*(5+6),
}

3. Bigint:{
BigInt("123456789012345678901234567890")
}

4. Boolean:{
  true,
  false
}

5. Undefined

6. Null

7. Symbol

8. Object:{
  The object data type can contain:

1. An object
2. An array
3. A date
}
*/

//examples:
// [declaration] = [assignment]
let name = "ali"; //string
console.log("name is ", typeof name);
let name2 = "1+2-5"; //string
console.log("name2:", name2);
let name3 = 1 + 2 - 5; //string
console.log("name3:", name3);

let lastName = "alizadeh"; //string
console.log("lastName is ", typeof lastName);

let age = 44.4; //number
console.log("age is ", typeof age);

let storageVale = BigInt("123456789012345678901234567890"); //bigInt
console.log("storageVale is ", typeof storageVale);

let isMarried = false; //boolean
console.log("isMarried is ", typeof isMarried);

//-----------------------------// js variables types:
/*
1. Automatically
2. Using let
3. Using var
4. Using const

*/
//projet start: ----------------------------------------------------------------------------
const upKey = document.getElementById("up");
const downKey = document.getElementById("down");
const leftKey = document.getElementById("left");
const rightKey = document.getElementById("right");
const snakeElement = document.getElementById("snake");
const foodElement = document.getElementById("food");

let addInterval;

let snake = {
  position: {
    x: 10,
    y: 10,
  },
  direction: "right",
  isMoving: false,
};
let food = {
  position: {
    x: 60,
    y: 50,
  },
};
function foodsNewPosition() {
  food.position.x = Math.floor(Math.random() * 35)*10;
  foodElement.style.left = `${food.position.x}px`
  food.position.y =Math.floor(Math.random() * 45)*10;
  foodElement.style.top = `${food.position.y}px`
}
function isFoodEeated() {
  if (snake.position.x === food.position.x && snake.position.y === food.position.y) {
    console.log("food eated!")
    foodsNewPosition();
  } 
}
function upHandler() {
  snake.position.y = snake.position.y - 10;
  snakeElement.style.top = `${snake.position.y}px`;
  if (snake.position.y <= 0) {
    snake.position.y = 350;
  }
  isFoodEeated()
}
function rightHandler() {
  snake.position.x = snake.position.x + 10;
  snakeElement.style.left = `${snake.position.x}px`;
  if (snake.position.x >= 440) {
    snake.position.x = 0;
  }
  isFoodEeated()
}
function leftHandler() {
  snake.position.x = snake.position.x - 10;
  snakeElement.style.left = `${snake.position.x}px`;
  if (snake.position.x <= 0) {
    snake.position.x = 440;
  }
  isFoodEeated()
}
function downHandler() {
  snake.position.y = snake.position.y + 10;
  snakeElement.style.top = `${snake.position.y}px`;
  if (snake.position.y >= 340) {
    snake.position.y = 0;
  }
  isFoodEeated()
}

upKey.addEventListener("click", () => {
  if (!snake.isMoving) {
    addInterval = setInterval(upHandler, 100);
    snake.isMoving = true;
    snake.direction = "up";
  } else if (snake.isMoving && snake.direction !== "up") {
    snake.direction = "up";
    clearInterval(addInterval);
    addInterval = setInterval(upHandler, 100);
  }
});
downKey.addEventListener("click", () => {
  if (!snake.isMoving) {
    addInterval = setInterval(downHandler, 100);
    snake.isMoving = true;
    snake.direction = "down";
  } else if (snake.isMoving && snake.direction !== "down") {
    snake.direction = "down";
    clearInterval(addInterval);
    addInterval = setInterval(downHandler, 100);
  }
});
leftKey.addEventListener("click", () => {
  if (!snake.isMoving) {
    addInterval = setInterval(leftHandler, 100);
    snake.isMoving = true;
    snake.direction = "left";
  } else if (snake.isMoving && snake.direction !== "left") {
    snake.direction = "left";
    clearInterval(addInterval);
    addInterval = setInterval(leftHandler, 100);
  }
});

rightKey.addEventListener("click", () => {
  if (!snake.isMoving) {
    addInterval = setInterval(rightHandler, 100);
    snake.isMoving = true;
    snake.direction = "right";
  } else if (snake.isMoving && snake.direction !== "right") {
    snake.direction = "right";
    clearInterval(addInterval);
    addInterval = setInterval(rightHandler, 100);
  }
});
