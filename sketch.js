var soldier,soldierimg
var ground
var groungImg
var enemy, enemyimg
var bulletImage,bullet;
var bulletsGroup,EnemyGroup;
var enemyBulletimg,enemyBullet
var Score=0;

function preload (){
bulletImage=loadImage("bullet.png")
enemyBulletimg=loadImage("enemybullet.png")
soldierimg=loadAnimation("img1.png","img2.png","img4.png","img 5.png")
enemyimg=loadAnimation("ememy 1.png","enemy2.png","enemy3.png","enemy4.png","enemy5.png")
groundImg=loadImage("bg.gif")

}
function setup(){
createCanvas(displayWidth,displayHeight);
ground=createSprite(displayWidth/2,displayHeight/2,20,20);
ground.addImage(groundImg);
ground.scale=3.5;
ground.velocityX=-3.5;
soldier=createSprite(100,height-100,20,20);
soldier.addAnimation("Soldierimg",soldierimg);
bulletsGroup=new Group()
EnemyGroup=new Group()
}
function draw(){
background(0)
if(ground.x<0){
ground.x=ground.width/2
}
if(bulletsGroup.isTouching(EnemyGroup)){
bulletsGroup.destroyEach()
    EnemyGroup.destroyEach()

    Score=Score+10
}

spawnEnemys();
spawnBullets();
drawSprites();
textSize(30)
    fill("red")
text("Score:"+Score,displayWidth-150,50)

}

function spawnEnemys(){
if(frameCount%100===0){
    enemy=createSprite(displayWidth,height-100,20,20);
    enemy.addAnimation("enemyimg",enemyimg);
    enemy.velocityX=-8

    enemy.debug=true
    enemy.setCollider("rectangle",0,0,50,100)
    EnemyGroup.add(enemy);
    enemy.lifetime=300;

    enemyBullet=createSprite(displayWidth,height-150,20,20)
    enemyBullet.addImage("enemyBulletimg",enemyBulletimg)
    enemyBullet.velocityX=-15
    enemyBullet.scale=0.1
    enemyBullet.lifetime=300
}
}
function spawnBullets(){
if(keyWentDown("Space")){
    bullet=createSprite(100,height-125,20,20)
    bullet.addImage("bulletImage",bulletImage)
    bullet.velocityX=+15

    bulletsGroup.add(bullet)
    bullet.scale=0.1

    bullet.debug=true
    bullet.lifetime=300
}


}








