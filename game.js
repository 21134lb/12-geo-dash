/*******************************************************/
// geometry dash
/*******************************************************/
console.log("%c t01_create_sprite", "color: blue;");
let PLAYERJUMP;
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
 console.log("setup: ");
  cnv = new Canvas('2:1');
  const PLAYERWIDTH = width/18;
  const PLAYERHEIGHT = height/9;
  const PLAYERSPAWNY = height- PLAYERHEIGHT;
  const PLAYERSPAWNX = PLAYERWIDTH;
  PLAYERJUMP = -height/9;
  world.gravity.y= height/1.5;
  wallLeft  = new Sprite(0, height/2, 0, height, 'k');

  wallRight  = new Sprite(width, height/2, 0, height, 'k');

  wallTop = new Sprite(width/2, 0, width, 0, 'k');

  wallBot = new Sprite(width/2, height, width, 0, 'k');

  player = new Sprite(PLAYERSPAWNX, PLAYERSPAWNY , PLAYERWIDTH, PLAYERHEIGHT, 'd');
}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
 background('green'); 
 if (kb.presses('space')&&player.y>height-height/9) {
	player.vel.y = PLAYERJUMP;
 }

}

/*******************************************************/
//  END OF APP
/*******************************************************/
