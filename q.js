arr = [];
arr1  =[];


const creatStack = {
	add: function (ban){
		arr.push(ban);
	},
	pop: function(){
		return arr.pop();
	}
} 
const creatrevStack = {
	add: function (ban){
		arr1.push(ban);
	},
	pop: function (){
		return arr1.pop();
	}
}


const creatQ = {
	
	add: function (ban){
		creatStack.add(ban);
		// console.log(arr)
		
		
	},
	pop: function (){
		if(arr1.length===0){
			while(arr.length>0){
				var ob =   creatStack.pop();
				creatrevStack.add(ob);
			}
		}
		return creatrevStack.pop();
	}
}
s = creatQ;
