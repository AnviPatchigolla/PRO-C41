var maxDrops = 100;
var drop = [];

function preload(){
    thunder_img1 = loadImage("thuderbolt/1.png")
    thunder_img2 = loadImage("thuderbolt/2.png")
    thunder_img3 = loadImage("thuderbolt/3.png")
    thunder_img4 = loadImage("thuderbolt/4.png")
   
    bruce_img1 = loadImage("Walking Frame/walking_1.png")
    bruce_img2 = loadImage("Walking Frame/walking_2.png")
    bruce_img3 = loadImage("Walking Frame/walking_3.png")
    bruce_img4 = loadImage("Walking Frame/walking_4.png")
    bruce_img5 = loadImage("Walking Frame/walking_5.png")
    bruce_img6 = loadImage("Walking Frame/walking_6.png")
    bruce_img7 = loadImage("Walking Frame/walking_7.png")
    bruce_img8 = loadImage("Walking Frame/walking_8.png")
}

function setup(){
   createCanvas(800, 800);
}

function draw(){
    background("black");

    for(var i = 0; i < 100; i++){
        drop.push(new Drops(random(0, 800), random(0, 800)));
    }

    for(var i = 0; i < drop.length; i++){
        drop[i].display();
    }

    if(frameCount % 40 == 0){
        var thunder = creaeSprite(400, 0, 10, 10);

        var rand = Math.round(random(1,4));
        switch(rand){
            case 1: thunder.addImage(thunder_img1);
                    break;
            case 2: thunder.addImage(thunder_img2);
                    break;
            case 3: thunder.addImage(thunder_img3);
                    break;
            case 4: thunder.addImage(thunder_img4);
                    break;
            default: break;
        }
    }

    drawSprites();
}   