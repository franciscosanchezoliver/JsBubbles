/**
 * @param {*} pos : Initial cell's position
 * @param {*} rad : Initial cell's radius
 */
function Bubble(pos , rad) {
    this.position = pos;
    this.radius = rad;

    /**
     * Move the bubble through screen
     */
    this.move = function () {
        let velocity = p5.Vector.random2D();
        this.position.add(velocity);
        this.show();
    }

    /**
     * Draws the cell into the screen
     */
    this.show = function () {
        //fill(color(random(50, 255), random(50, 255), random(50, 255)));
        stroke(255);
        noFill();
        ellipse(this.position.x, this.position.y, this.radius, this.radius);
    }

}