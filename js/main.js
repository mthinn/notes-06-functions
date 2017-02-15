 function myfunction() {
      document.getElementById('function1').innerHTML ='I\'m a functioning member of society.';

        }

      myfunction();

 


 var pants = 'jeans';
 document.getElementById('scope1').innerHTML = pants;
 var pants = 'cargo';

 document.getElementById('scope1').innerHTML = pants;

 function mylocalShirts(){
    var shirts = 'blouse';
    document.getElementById('scope2').innerHTML = shirts;


 } 


 mylocalShirts();

 var shirts = 'sweater'
 document.getElementById('scope2').innerHTML = shirts;
 mylocalShirts();

 function addnumber(a, b){
 	var sum = a + b;
 	return sum;
 }

 document.getElementById('arguments').innerHTML = 'the sum of addnumber is' + addnumber(56, 4);


function divnumber(c, d){
	var div = c % d;
	return div;
}
document.getElementById('modules').innerHTML = 'the remainder of divnumber is' + divnumber(15, 4);


function applesOranges(myFruits){
	var fruits;

	if(myFruits == 'apples'){
		var fruits = document.getElementById('conditional').innerHTML = 'Apples';
	} else if (myFruits == 'oranges'){
		var fruits = document.getElementById('conditional').innerHTML = 'Oranges';
	} else if (myFruits == 'potato'){
		var fruits = document.getElementById('conditional').innerHTML = 'that\'s not even a fruit';
	} else {
		var fruits = document.getElementById('conditional').innerHTML = 'you don\'t have apples or oranges.';
     

     }
     return fruits;

}
























