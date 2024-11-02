function setup(){
  createCanvas(windowWidth, windowHeight);
  noLoop()
}



function disegnaElemento(diametro, xC, yC){
  fill("#F06757");
      //xi yi: Coordinate iniziali
      let xi = random(-diametro / 2, diametro / 2);
      let yi = sqrt((diametro / 2) * (diametro / 2) - xi * xi);
      let pi = random(0,1)
      if(pi<0.5){ yi=-yi } ;
      xi += xC;
      yi += yC;
      //x1 y1: Coordinate del primo punto
      let x1
      let y1
      let n = Math.floor(random(diametro/15,diametro/5));
      //Ciclo for
      strokeWeight(0);
      let colori = ["#661CB0", "#7837BA", "#8A51C3", "#AE85D6", "#D2B9E9", "#E4D3F3"]
      let indiceColore = Math.floor(random(colori.length));
      fill(colori[indiceColore]);
      circle(xC,yC,1.5*diametro);
      colori.splice(indiceColore,1);
      stroke(random(colori));
      colori = ["#661CB0", "#7837BA", "#8A51C3", "#AE85D6", "#D2B9E9", "#E4D3F3"]
      for(i=0; i<n; i++){
      //x2 y2: coordinate del secondo punto
      let x2 = random(-diametro / 2, diametro / 2);
      let y2 = sqrt((diametro / 2) * (diametro / 2) - x2 * x2);
      let p2=random(0,1)
      if(p2<0.5){
          y2=-y2;
      }
      x2 += xC;
      y2 += yC;
      strokeWeight(diametro/20);
      if(i==0){
          line(xi,yi,x2,y2);
      }else if(i==n-1){
        line(x1,y1,xi,yi);
      }else{
          line(x1,y1,x2,y2);
      }
      x1=x2;
      y1=y2;
      }
}


function draw() {
  background("black");
  let max=random(30,50);
  for(let i = 0; i<max; i++){
  let diametro = random(windowWidth/50,windowWidth/10);
  let xC = random(diametro,windowWidth-diametro);
  let yC = random(diametro,windowHeight-diametro);
  disegnaElemento(diametro, xC, yC);
  };
}