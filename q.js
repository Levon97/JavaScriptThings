
const creatStack = ()=> {
	let arr  = [];
	return{
	add: function (ban){
		arr.push(ban);
	},
	pop: function(){
		return arr.pop();
	},
	length: function (){
		return arr.length
	}
}
} 


const creatQ = ()=>{
	let firstStack = creatStack();
	let secondStack = creatStack();
	return {
	add: function (ban){

		firstStack.add(ban);
		// console.log(arr)
		
		
	},
	pop: function () {
		if (secondStack.length() === 0) {
			while (firstStack.length() > 0) {
				var ob = firstStack.pop();
				secondStack.add(ob);
			}
		}
		
		return secondStack.pop();
	}
}
}
s = creatQ();

s.add(13)
s.add(546)
s.add(77)
s.add(4)
s.add(4)


console.log(s.pop())