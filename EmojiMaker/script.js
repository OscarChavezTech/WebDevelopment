// database 🥵
// TODO: 	- style css
//			- bound checks when poping or shifting	
let emojis = ['😀', '😐', '😬']
let outputField = document.getElementById("output")
let addBegButton = document.getElementById("button1")
let addEndButton = document.getElementById("button2")
let input = document.getElementById("input-field")

let remBegButton = document.getElementById("button3")
let remEndButton = document.getElementById("button4")


let output_ls = document.getElementById("output-local-storage")
console.log(output_ls)
function displayEmojis(){
	if (emojis.length == 0) {
		outputField.innerHTML = " EMPTY ARRAY "
	}
	for (let i = 0; i < emojis.length; i++){
		console.log(emojis[i])
		let newElement = document.createElement('span')
		newElement.innerHTML = emojis[i]
		outputField.append(newElement)
		//outputField.append(document.createElement('span').innerHTML = emojis[i])

		newElement.className = "array-element"
	}

}

//add to beggingin
addBegButton.addEventListener("click", function(){
	console.log("Add To Begging Click")
	emojis.unshift(input.value) // unshift: add to beggining
	input.value = ""
	outputField.innerHTML = "" // clear output field
	displayEmojis()
})

// add to end of array
addEndButton.addEventListener("click", function(){
	console.log("add to end button clicked")
	emojis.push(input.value) // push: add to end 
	input.value = ""
	outputField.innerHTML  = "" // why ?????
	displayEmojis()
})

// remove element from begging of array
remBegButton.addEventListener("click", function(){
	console.log("remove begging button clicked")
	emojis.shift() // shift: remove from end
	input.value = ""
	outputField.innerHTML = ""
	displayEmojis()
})

// remove element from end of array
remEndButton.addEventListener("click", function(){
	console.log("remove end button clicked")
	emojis.pop() // pop: remove from end
	input.value = ""
	outputField.innerHTML = ""
	displayEmojis()
})


//outputField.append(document.createElement('span').innerHTML = emojis[0])

// MAIN()
displayEmojis()

/*
	localStorage = {key1: value,
					key2: value,
					key3: value }
*/

//localStorage.setItem("key", "value")
localStorage.setItem("person1", 25)
localStorage.setItem("person2", 29)
localStorage.setItem("person3", 5)
localStorage.setItem("person4", 22)

localStorage.setItem("hot", "🥵")
console.log("person1 Age: ")
console.log(localStorage.getItem("person1"))
console.log("person2 Age: ")
console.log(localStorage.getItem("person2"))
console.log("Hot Emoji: ")
console.log(localStorage.getItem("hot"))

output_ls.innerHTML = localStorage.getItem("person1")

localStorage.clear()
output_ls.innerHTML = "" 

let LS_count = 0
localStorage.setItem(0, "person1")
LS_count += 1
localStorage.setItem(1, "person2")
LS_count += 1


for (let i = 0; i < LS_count; i++ ){
	console.log(localStorage.getItem(i))
	output_ls.append(document.createElement('span').innerHTML = localStorage.getItem(i))
}
//let myInformation = localStorage.getItem("key")
//console.log(myInformation)