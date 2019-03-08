function walkerPop(numOfPop,numofData,mutationRate,maxGeneration){
    this.dataPop=[];
    this.maxGeneration = maxGeneration
    this.matingPool = [];
    this.allColorCode = ['#f00','#0f0','#00f','#ff0','#f0f','#0ff','#e6e','#6b6','#a55','#fa0']
    for (let index = 0; index < numOfPop; index++) {
        var newData = new walkerAdv(this.allColorCode[index%this.allColorCode.length],numofData);
        this.dataPop.push(newData)
    }
    console.log(this.dataPop)

    this.render = function(){
        this.dataPop.forEach(walker=>{
            walker.display();
        })
    }

    
    this.selection = function(){
        // console.log(this.matingPool);

        this.matingPool = [];
        var totFitness = 0;
        console.log(this.dataPop);

        this.dataPop.forEach(walker=>{
            // console.log(walker)
            // console.log(totFitness)
            // console.log(walker.calcFitness())

            totFitness = totFitness + walker.calcFitness();
        })
        console.log(totFitness)

        this.dataPop.forEach(walker=>{
            persentase = floor(walker.fitness*100/totFitness);
            for (let index = 0; index < persentase; index++) {
                // console.log('masuk push persentase');
                
                this.matingPool.push(walker);  
                // console.log(walker);

            }
            // console.log(this.matingPool);
        })
        console.log(this.matingPool);
    }
    this.crossOver = function(parent1,parent2,color){
        child = new walkerAdv(color,parent1.data.length);
        middle = Math.floor(random(parent1.data.length))
        for (let index = 1; index < parent1.data.length; index++) {
            if(index < middle){
                child.data[index].x = parent1.data[index].x-parent1.data[index-1].x+child.data[index-1].x 
                child.data[index].y = parent1.data[index].y-parent1.data[index-1].y+child.data[index-1].y
                
                
                
            }else{
                child.data[index].x = parent2.data[index].x-parent2.data[index-1].x+child.data[index-1].x 
                child.data[index].y = parent2.data[index].y-parent2.data[index-1].y+child.data[index-1].y
             
            }

            if(child.data[index].x<0){
                child.data[index].x = 0
            }else if(child.data[index].x>width){
                child.data[index].x = width-1
            }
            if(child.data[index].y<0){
                child.data[index].y = 0
            }else if(child.data[index].y>height){
                child.data[index].y = height-1
            }
        }
        return child
    }
    this.generate = function(){
        var offSpring = [];
        var i = 0;
        // for (let index = 0; index < numOfPop; index++) {
        // console.log(this.matingPool);

        while(i<numOfPop){
            iParent1 = Math.floor(random(this.matingPool.length))
            iParent2 = Math.floor(random(this.matingPool.length))
            
            child = this.crossOver(this.matingPool[iParent1],this.matingPool[iParent2],this.matingPool[iParent1].color)
            child.mutate(mutationRate,this.allColorCode[Math.floor(random(this.allColorCode.length))])
            //this.matingPool[iParent2].mutate(mutationRate)
            // while(i)
            offSpring.push(child);
            i = offSpring.length;
        }
        this.dataPop=offSpring;
        console.log(this.dataPop)
    }
    this.isFinish = function(nowGen){
        if(nowGen>maxGeneration){
            return true
        }else{
            this.dataPop.forEach(data => {
                if(data.calcFitness()>0.5){
                    return true
                }
            });
        }
        return false
    }
    
}