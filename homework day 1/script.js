function myFirstApp(name,age) {
	alert("Привет,меня зовут "+ name + " и это моя первая программа");

      function showSkills(){
         let skills = [
         'html',
         'css',
         'browser',
         'paint'
         ];
   for (let i = 0; i < skills.length; i++){
     
    }
document.write("Я владею <br>html<br>css<br>browser<br>paint")
}

 showSkills();
 function checkage(){
 	let age = prompt("Сколько вам лет?")
 	if(age > 18){
 		alert("Добро пожаловать!")
 	}else{
 		alert("Вы не можете перейти на данную страницу!")
 	}
  }
checkage();
function calcpow(a){
	console.log(a*a);
};
   calcpow(4);
   
}
myFirstApp("Vitali",20 )