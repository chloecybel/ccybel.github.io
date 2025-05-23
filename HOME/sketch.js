// Tutorial from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_image_overlay_fade

function setup() {
    noCanvas();
      createOverlay('community', 'Community Center');
      createOverlay('urban', 'Urban Landscape');
      createOverlay('humber', 'Humber Hill');
  }


function createOverlay(sectionId, linkUrl) {
    let section = select('#' + sectionId);
    if (!section) return; 
  
    let container = createDiv();
      container.class('container');
      container.parent(section);
      container.style('position', 'absolute');
      container.style('top', '0');
      container.style('left', '0');
      container.style('width', '100%');
      container.style('height', '100%');
  

    let overlay = createDiv();
      overlay.class('overlay');
      overlay.parent(container);
  

    let overlayText = createDiv('MORE INFO');
      overlayText.class('text');
      overlayText.parent(overlay);
      
      overlay.mousePressed(() => {
      window.location.href = linkUrl;
    });
  }