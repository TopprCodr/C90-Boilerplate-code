class Player {
    constructor(x, y, width, height) {
        var options = {
            density: 1.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.body.label = "player";
        this.image = loadImage("./images/box.png");
        this.width = width;
        this.height = height;
        Composite.add(world, this.body);
    }

    display() {
        var pos =this.body.position;
        pos.x = mouseX;
        push();
        imageMode(CENTER);
        translate(pos.x, pos.y);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}
