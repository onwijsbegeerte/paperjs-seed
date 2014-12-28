paper.install(window);

window.onload = function() {
  paper.setup('my-canvas');

  // Background
  var background = new Path.Rectangle(view.bounds);
      background.fillColor = '#000';

  paper.view.draw();

  // Animation
  paper.view.onFrame = function(event) {

  };
};