randomNumber = Math.floor((Math.random() * quickDrawDataset.lenght) + 1);
console.log(quickDrawDataset[randomNumber]);
sketch = quickDrawDataset[randomNumber];
document.getElementById('sketchName').innerHTML = 'Esboço a ser desenhado: ' + sketch;

timerCounter = 0;
timerCheck = "";
drawnSketch = "";
answerHolder = "";
score = 0;

function setup(){
  canvas = createCanvas(280, 280);
  canvas.center();
  background("white");
  canvas.mouseReleased(classifyCanvas);
}

function draw(){
  strokeWeight(13):
  stroke(0);
  
  if (mouseIsPressed){
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
  
  checkSketch()
  if(drawnSketch == sketch)
  {
    answerHolder = "set"
    score++;
    document.getElementById('score').innerHTML = 'Pontuação: ' + score;
  }
  
  function classifyCanvas(){
    classifier.classify(canvas, gotResult);
  }
  
  function gotResult(error, results) {
    if (error) {
      console.error(error);
    }
    console.log(results);
    drawnSketch = results[0].label;
    document.getElementById('label').innerHTML = 'Seu esboço: ' + drawnSketch.replace("_", " ");
    
    
    document.getElementById('confidence').innerHTML = 'Precisão: ' + Math.round(results[0].confidence * 100) + '%";
    
  
  
  
  
  



