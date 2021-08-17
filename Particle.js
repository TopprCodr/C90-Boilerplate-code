class Particle {
    constructor(x, y, r) {
        var options = {
            restitution: 0.5,
            frictionAir: 0.1,
        }
        this.body = Bodies.circle(x, y, r, options);
        this.body.label = "particle";
        this.r = r;
        Composite.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        fill("grey");
        translate(pos.x, pos.y);
        ellipseMode(RADIUS)
        ellipse(0, 0, this.r);
        pop();
    }
}
