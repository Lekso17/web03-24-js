   //first
   let numbers = [ 2,4,6,8,10];
   console.log( numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4]);
       // Second
   let info = [
       person1 ={
           firstName : 'Lekso',
           age : 26,
           address : 'Tsotne Dadiani'
       },
       person2 ={
           firstName : 'Giorgi',
           age : 12,
           address : 'Tsotne Dadiani'
       },
       person3 ={
           firstName : 'James',
           age : 40,
           address : 'Tsotne Dadiani'
       }
   ];
   
       // Third
   console.log(`my name is ${info[0].firstName} , my age is ${numbers[0]} , my address is ${info[0].address}`);
   
       // fourth
   if(info[2].age <= 18){
       console.log('i am a teenager')
   }
   else{
       console.log('i am an adult')
   }
       // fifth
   let oddNumbers =[ 3,5,9,247,19,]
   for(let items in oddNumbers){
       console.log(oddNumbers[items])
   }
       // sixth
   const currentDay = new Date().getDay();
   switch(currentDay){
       case 0:
           getDay = 'Sunday';
       case 1:
           getDay = 'Monday';
       case 2:
           getDay = 'Tuesday';
       case 3:
           getDay = 'Wednesday';
       case 4:
           getDay = 'Thursday';
       case 5:
           getDay = 'Friday';
       case 6:
           getDay = 'Saturday';
   }