// database
// TODO: 	- style css
//			- bound checks when poping or shifting	
let emojis = ['1', '2', '3']
let outputField = document.getElementById("output")
let addBegButton = document.getElementById("button1")
let addEndButton = document.getElementById("button2")
let input = document.getElementById("input-field")

let remBegButton = document.getElementById("button3")
let remEndButton = document.getElementById("button4")

function displayEmojis(){
	for (let i = 0; i < emojis.length; i++){
		console.log(emojis[i])
		outputField.append(document.createElement('span').innerHTML = emojis[i])
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
