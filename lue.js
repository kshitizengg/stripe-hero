  const svg = document.querySelector('.top');
  const maskCircle = document.getElementById('mask-circle');

  
  svg.addEventListener('mousemove', (e) => {
   
    let point = svg.createSVGPoint();
    point.x = e.clientX;
    point.y = e.clientY;

   
    let svgPoint = point.matrixTransform(svg.getScreenCTM().inverse());

   
    maskCircle.setAttribute('cx', svgPoint.x);
    maskCircle.setAttribute('cy', svgPoint.y);
  });
