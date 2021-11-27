var canvas=new fabric.Canvas('myCanvas');

player_x=10;
player_y=10;

block_width=30;
block_height=30;

var player_object="";
var block_object="";

function player_update(){
    fabric.Image.fromURL("man.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);

    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);

    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);

    if (e.shiftKey==true && keypressed=='80'){
        console.log("shift and p are bieng pressed together");
        block_height=block_height+10;
        block_width=block_width+10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;   
    }


    if (e.shiftKey==true && keypressed=='77'){
        console.log("shift and m are bieng pressed together");
        block_height=block_height-10;
        block_width=block_width-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;   
    }


    if (keypressed=="37"){
        console.log("left arrow key is being pressed");
        left();
    }


    if (keypressed=="38"){
        console.log("up arrow key is being pressed");
        up();
    }


    if (keypressed=="39"){
        console.log("right arrow key is being pressed");
        right();
    }


    if (keypressed=="40"){
        console.log("down arrow key is being pressed");
        down();
    }


    if (keypressed=="84"){
        console.log("t alphabet key is being pressed");
        new_image("trunk.jpg");
    }
    

    if (keypressed=="68"){
        console.log("d alphabet key is being pressed");
        new_image("dark_green.png");
    }


    if (keypressed=="76"){
        console.log("l alphabet key is being pressed");
        new_image("light_green.png");
    }


    if (keypressed=="71"){
        console.log("d alphabet key is being pressed");
        new_image("ground.png");
    }


    if (keypressed=="89"){
        console.log("y alphabet key is being pressed");
        new_image("yellow_wall.jpg");
    }


    if (keypressed=="82"){
        console.log("r alphabet key is being pressed");
        new_image("roof.jpg");
    }


    if (keypressed=="67"){
        console.log("c alphabet key is being pressed");
        new_image("cloud.jpg");
    }


    if (keypressed=="85"){
        console.log("u alphabet key is being pressed");
        new_image("unique.png");
    }
}

function up(){

    if(player_y>=0){
        player_y=player_y-block_height;
        console.log("block image height="+block_height);
        console.log("x= "+player_x+" y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}


function down(){

    if(player_y<=500){
        player_y=player_y+block_height;
        console.log("block image height="+block_height);
        console.log("x= "+player_x+" y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}


function left(){

    if(player_x>=0){
        player_x=player_x-block_width;
        console.log("block image width="+block_width);
        console.log("x= "+player_x+" y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}


function right(){

    if(player_x<=900){
        player_x=player_x+block_width;
        console.log("block image width="+block_width);
        console.log("x= "+player_x+" y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}