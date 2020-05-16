if (window.matchMedia("(min-width: 768px)").matches) {

    function setup() {
        var cnv = createCanvas(windowWidth, windowHeight);
        cnv.style('position', 'fixed');
        cnv.style('top', '0');
        cnv.style('z-index', '-1');
    }
      
    
    function windowResized() {
        resizeCanvas(windowWidth, windowHeight);
    }
    
    function mouseMoved() {
        let wW = windowWidth;
        let wH = windowHeight;
    
        clear();
        let otherX = wW - mouseX;
        let otherY = wH - mouseY;
    
    
    
        strokeWeight(1);
        line(mouseX, mouseY, otherX, otherY);
    
        strokeWeight(0);
        let c = color('#330FFF');
        fill(c);
        var el = ellipse(mouseX, mouseY, 50);
        var otherEl = ellipse(otherX, otherY, 50);
    }
    
    }