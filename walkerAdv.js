function walkerAdv(colorCode,numOfData){
    this.color = colorCode;
    this.data = [{x:0,y:height/2}];
    this.fitness = 0;

    for (let index = 1; index < numOfData; index++) {
        var newData ={x:0,y:0};
        rand = {x:Math.floor(random(-25,150)),y:Math.floor(random(-150,150))}
        newData.x = this.data[index-1].x+rand.x;
        newData.y = this.data[index-1].y+rand.y;
        if(newData.y<0){
            newData.y = 1;
        }else if(newData.y>height){
            newData.y = height-1;
        }
        if(newData.x<0){
            newData.x = 1;
        }else if(newData.x>width){
            newData.x = width-1;
        }
        this.data.push(newData)
    }

    this.calcFitness = function(){
        lastKoor = this.data[this.data.length-1];
        fit = 1/Math.abs(Math.sqrt(((width-lastKoor.x)**2+((height/2)-lastKoor.y)**2)));
        this.fitness = fit;
        return this.fitness;
    }

    this.display = function(){
        for (let index = 1; index < numOfData; index++) {
            stroke(this.color);            
            line(this.data[index-1].x,this.data[index-1].y,this.data[index].x,this.data[index].y);
        }

    }
    this.mutate = function(mutationRate,color){
        if(Math.floor(random(100)<mutationRate)){
            this.color = color
            for (let index = 1; index < this.data.length; index++) {
                var newData ={x:0,y:0};
                rand = {x:Math.floor(random(-25,150)),y:Math.floor(random(-150,150))}
                newData.x = this.data[index-1].x+rand.x;
                newData.y = this.data[index-1].y+rand.y;
                if(newData.y<0){
                    newData.y = 1;
                }else if(newData.y>height){
                    newData.y = height-1;
                }
                if(newData.x<0){
                    newData.x = 1;
                }else if(newData.x>width){
                    newData.x = width-1;
                }
                this.data[index] = newData;
            }
        }
    }

    // console.log(this)


}