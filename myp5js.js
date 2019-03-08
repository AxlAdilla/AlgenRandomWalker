var generasi = 0;
function setup() {
    createCanvas(1000, 500);
    // w1 = new walker();
    // w2 = new walker();
    w1 = new walkerPop(10,10,2,500);
    
    fill('#ff0')
    ellipse(1000,250,20);
    ellipse(0,250,20);
    frameRate(5)
    stroke('black')
    background('#eee')
    console.log('Generasi'+generasi)
    
}
function draw() {
    clear();
    background('#eee6')
    fill('#ff0')
    ellipse(1000,250,20);
    ellipse(0,250,20);
    fill('black')
    text(" Maximal Generasi - 500\n Generasi Ke-"+generasi,500,10)
    console.log('Generasi'+generasi)
    generasi++;

    // w1 = new walkerPop(5,10,1);    
    // w1.render();
    // w1.selection();
    // w1.generate();
    
    // w1.mutation();

    // clear();
    // w1.render();
    // w1.selection();
    // w1.generate();

    // w1.render();
    // w1.selection();
    // w1.generate();

    // w1.mutation();
    // console.log(w1);
    w1.render();
    w1.selection();
    w1.generate();
    // w1.mutation();
    if(w1.isFinish(generasi)){
        noLoop();
    }
    // console.log(map(0.3,0,5,0,1))
    //noLoop();
}