const myObj = {
    myFun(item1, item2){
          console.log(item1 + item2 >= item2 || item2 - item1 === (item2 + item1) - item1 && item2 !== item1)
    }
  }
  myObj.myFun(4, 5)


  function solution(n, roads) {
    
      for (let i = 0; i < n-1; i++) {            
          for (let j = i+1; j < n; j++) {
              let arr = [];
              for (let x = 0; x < roads.length; x++) {
                  if((roads[x][0] === i || roads[x][0] === j) && (roads[x][1] === i || roads[x][1] === j)) {arr[0] = undefined ; break};
                  if(roads[x][0] === i || roads[x][0] === j) arr.push(roads[x][1]);
                  else if(roads[x][1] === i || roads[x][1] === j) arr.push(roads[x][0]);
              }
              if(arr[0] === undefined) continue;
              else if(arr.some(val => arr.indexOf(val) !== arr.lastIndexOf(val))) continue;
              else return false;
          }
      }
      return true;
  }
  console.log(solution(6, [[3,0],     
                          [0,4],      
                          [5,0],      
                          [2,1], 
                          [1,4], 
                          [2,3], 
                          [5,2]]));


                          function solution(arr) {
                            let sum = 0;
                                let newArr = arr.sort((item1,item2) => item1-item2)
                                  for(let i = 1; i < newArr.length; i++){
                               if(newArr[i] - newArr[i-1] === 1){  
                               sum
                               }
                               else{
                               sum +=( newArr[i] - newArr[i-1]) - 1
                               
                               }
                              }
                              return sum
                            }
                            console.log(solution([6, 2, 3, 8, 10]))

                            

                            const myObj = {
                                name: "Narek",
                                age: 22,
                                myFun(item1, item2){
                                console.log(this.age);
                                console.log(`Hi my name is ${item1}, I'm ${item2} old years`);
                                }
                                }
                                myObj.myFun(myObj.name, myObj.age)