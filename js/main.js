// const numbers = [0, 0, 1, 1, 2, 2, 2]
// const colors = ['red', 'green', 'blue', true, 123]
// const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️']

// const numbers2 = numbers.slice(0, 2)
// console.log(numbers2)

// const numbers3 = numbers.slice(4)
// console.log(numbers3)

// const randomStuff = colors.splice(-2)
// console.log(randomStuff)
// console.log(colors)

// const newCars = cars.splice(2, 4, 'test')
// console.log(cars)
// console.log(newCars)

// const letters = ['c', 'd']

// letters.unshift('a', 'b')
// letters.push('e', 'f')

// console.log(letters)
// console.log(letters.includes('c'))

// const numbers = [1, 2, 3]
// const food = ['🍔','🍟','🥞']

// const numberFood = numbers.concat(food)
// console.log(numberFood);

// const newArr2 = [...numbers,...food]
// console.log(newArr2);

// const numbers = [1, 5, 13, 26, 48]

// const newNumbers = numbers.map(number => number * 5)
// console.log(newNumbers)

// for (const number of newNumbers) {
// 	if (number % 2 === 0) {
// 		console.log(`Liczba parzysta: ${number}`)
// 	} else {
// 		console.log(`Liczba nieparzysta: ${number}`)
// 	}
// }

// const color = ['green']

// color.unshift('black')
// color.push('grey')
// console.log(color)

// for (let i = 0; i < color.length; i++) {
// 	console.log(`mój ulubiony kolor to: ${color[i].charAt(0).toUpperCase() + color[i].slice(1)}`)
// }

// const cars = 'Audi, Mercedes, BMW, Nissan, Dodge'

// const carsArr = cars.split(', ')
// console.log(carsArr);

// carsArr.length > 3 ? console.log(`jest OK`): console.log('nie jest ok');

// if (carsArr.includes('Audi')) {
// 	carsArr.push('Lamborghini')
// } else {
// 	carsArr.pop()
// }
// console.log(carsArr);

// FUNKCJE

// function cat(x, y) {
// 	console.log(`cześć mam na imie ${x} i mam ${y}`);
// }

// cat('Wojtek',25)

// const hello = (name = 'drogi użytkowniku') => {
// 	console.log(`Cześć ${name}, jak się masz?`)
// }

// hello()

// const add = (x = 5, y = 10) => {
// 	console.log(x + y)
// }

// add(120)

// let score

// const add = (x,y) => {
//     score = x + y

//     const check = (score % 2 === 0) ? evenMsg() : oddMsg()
// }

// const evenMsg = () => {
//     console.log(`Liczba ${score} jest parzysta`);
// }
// const oddMsg = () => {
//     console.log(`Liczba ${score} jest nieparzysta`);
// }

// add(2,5)

// let celsius
// let temp

// const fahrenheit = x => {
// 	celsius = x
// 	temp = x * 1.8 +32
//     console.log(`${x} *C = ${temp} *F`);
// }

// fahrenheit(20)

// const num = 10
// const numbers = []

// for (let i = 0; i < num; i++) {
// 	numbers.push(i)
// }
// console.log(numbers)

// const check = x => {
// 	if (x % 3 === 0 && x !== 0) {
// 		console.log(`${x} jest podzielne przez 3`)
// 	} else {
// 		console.log(`${x} nie jest podzielne przez 3 lub ${x} = 0`)
// 	}
// }

// numbers.forEach(check)

// const ulList = document.createElement('ul')
// const liItem = document.createElement('li')
// liItem.textContent = 'cześć'

// document.body.appendChild(ulList)
// ulList.appendChild(ulList)

// const div = document.querySelector('div')
// const p = document.createElement('p')
// div.appendChild(p)
// document.div.appendChild(p)

// const addBtn = document.querySelector('.add')
// const removeBtn = document.querySelector('.remove')
// const toggleBtn = document.querySelector('.toggle')
// const text = document.querySelector('p')

// const toggleClass = () => {
// 	text.classList.toggle('test')
// }

// const addClass = () => {
// 	text.classList.add('test')
// }

// const removeClass = () => {
// 	text.classList.remove('test')
// }

// toggleBtn.addEventListener('click', toggleClass)
// addBtn.addEventListener('click', addClass)
// removeBtn.addEventListener('click', removeClass)

// const ulList = document.createElement('ul')
// document.body.appendChild(ulList)
// const number = 10

// for (let i = 1; i <= number; i++) {
//     const liItem = document.createElement('li')
//     liItem.textContent = i
//     ulList.append(liItem)
// }

// const lastLi = ulList.querySelector('li:last-child')
// lastLi.textContent = 'Jestem ostatnim li'

// const btn1 = document.querySelector('.btn1')
// const btn2 = document.querySelector('.btn2')
// const p1 = document.querySelector('.p1')
// const p2 = document.querySelector('.p2')
// const square = document.querySelector('.square')

// const fun1 = () => {
// 	console.log('cześć')
// }

// const fun2 = () => {
// 	square.style.backgroundColor = 'red'
// }
// const fun3 = () => {
// 	square.style.backgroundColor = 'blue'
// }

// const fun4 = () => {
//     p1.classList.toggle('show')
//     p2.classList.toggle('show')
// }

// btn1.addEventListener('dblclick', fun1)
// square.addEventListener('mouseover', fun2)
// square.addEventListener('mouseleave', fun3)
// btn2.addEventListener('click', fun4)

// const image = document.querySelector('img')

// image.setAttribute('src','https://cdn.pixabay.com/photo/2022/07/17/19/40/animal-7328225_960_720.jpg')
// image.setAttribute('alt','maupka')

// console.log(image);

// const whatever = () => {
// 	console.log('kutaz');
// }

// setTimeout(whatever,2000)

// const liItems = document.querySelectorAll('li')
// let number = 1

// for (const liItem of liItems) {
// 	liItem.textContent = number
// 	liItem.dataset.id = number
// 	number++
// }

// const thirdLi = document.querySelector('[data-id="3"]')

// console.log(thirdLi.closest('.wrapper'));

// const arrowBtn = document.querySelector('.arrow')
// const arrowIcon = document.querySelector('.fas')
// const img = document.querySelector('.item1')

// const showImg = () => {
// 	img.classList.toggle('hide')

// 	if (img.classList.contains('hide')) {
// 		arrowIcon.style.transform = 'rotate(180deg)'
// 	} else {
// 		arrowIcon.style.transform = 'rotate(0)'
// 	}
// }

// arrowBtn.addEventListener('click', showImg)

// const upBtn = document.querySelector('.sizeUp')
// const downBtn = document.querySelector('.sizeDown')
// const colorBtn = document.querySelector('.color')
// const p = document.querySelector('p')
// let fontSize = 36

// const increase = () => {
// 	if (fontSize >= 60) return
// 	fontSize += 5
// 	p.style.fontSize = fontSize + 'px'
// }
// const decrease = () => {
// 	if (fontSize <= 20) return
// 	fontSize -= 5
// 	p.style.fontSize = fontSize + 'px'
// }

// const changer = () => {
// 	const r = Math.floor(Math.random() * 255)
// 	const g = Math.floor(Math.random() * 255)
// 	const b = Math.floor(Math.random() * 255)

// 	p.style.background = `rgb(${r},${g},${b})`
// }

// upBtn.addEventListener('click', increase)
// downBtn.addEventListener('click', decrease)
// colorBtn.addEventListener('click', changer)

// const pass = document.querySelector('#password')
// const p = document.querySelector('.passinfo')
// const letters = /[a-z]/i
// const numbers = /[0-9]/
// const special = /[!@#$%^&*()]/
// const minValue = 10

// const showMsg = () => {
// 	if (
// 		pass.value.length > minValue &&
// 		pass.value.match(letters) &&
// 		pass.value.match(numbers) &&
// 		pass.value.match(special)
// 	) {
// 		p.textContent = 'Masz bardzo dobre hasło!'
// 		p.style.color = 'lime'
// 	} else if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)) {
// 		p.textContent = 'Masz dobre hasło!'
// 		p.style.color = 'yellow'
// 	} else {
// 		p.textContent = 'Masz słąbe hasło!'
// 		p.style.color = 'tomato'
// 	}
// }

// const checkPassword = params => {
// 	if (pass.value !== '') {
// 		showMsg()
// 	} else {
// 		p.textContent = 'Nie podałeś hasła...'
// 		p.style.color = ''
// 	}
// }

// pass.addEventListener('keyup', checkPassword)

// const converter = document.querySelector('#converter')
// const result = document.querySelector('.result')
// const convBtn = document.querySelector('.conv')
// const resetBtn = document.querySelector('.reset')
// const changeBtn = document.querySelector('.change')
// const one = document.querySelector('.one')
// const two = document.querySelector('.two')

// let fahrenheit
// let celsius

// const swap = () => {
// 	if (one.textContent === '°C') {
// 		one.textContent = '°F'
// 		two.textContent = '°C'
//         result.textContent = ''
// 	} else {
// 		one.textContent = '°C'
// 		two.textContent = '°F'
//         result.textContent = ''
// 	}
// }

// const fahrToCel = () => {
// 	fahrenheit = converter.value * 1.8 + 32
// 	result.textContent = `${converter.value} °C to ${fahrenheit.toFixed(1)} °F`
// 	converter.value = ''
// }
// const celToFahr = () => {
// 	celsius = (converter.value - 32) / 1.8
// 	result.textContent = `${converter.value} °F to ${celsius.toFixed(1)} °C`
// 	converter.value = ''
// }

// const conversion = () => {
// 	if (converter.value !== '') {
// 		if (one.textContent === '°C') {
// 			fahrToCel()
// 		} else {
// 			celToFahr()
// 		}
// 	} else {
// 		result.textContent = 'Musisz podać jakąś wartość!'
// 	}
// }

// const reset = () => {
//     converter.value = ''
//     result.textContent = ''
// }

// convBtn.addEventListener('click', conversion)
// changeBtn.addEventListener('click', swap)
// resetBtn.addEventListener('click', reset)

// const burgerBtn = document.querySelector('.burger')
// const barsIco = document.querySelector('.fa-bars')
// const xIco = document.querySelector('.fa-times')
// const nav = document.querySelector('nav')

// const showBurger = () => {
// 	nav.classList.toggle ('active')
// 	burgerBtn.classList.toggle
// 	xIco.classList.toggle ('hide')
// 	barsIco.classList.toggle ('hide')
// }

// burgerBtn.addEventListener('click', showBurger)

// const currentDay = document.querySelector('.current-day')
// const funFact = document.querySelector('.fun-fact')

// const facts = [
// 	'Krokodyl nie potrafi wystawić języka.',
// 	'Każdy człowiek spędził około pół godziny jako pojedyncza komórka.',
// 	'Dźwięk przemieszcza się 15 razy szybciej przez stal niż przez powietrze.',
// 	'Leniwce potrzebują dwóch tygodni na strawienie jedzenia.',
// 	'Goryle śpią nawet czternaście godzin dziennie.',
// 	'Język kameleona jest dwukrotnie dłuższy od jego ciała.',
// 	'Chińczycy w ciągu roku zużywają około 80 miliardów pałeczek.',
// 	'Żeby wejść na Wieżę Eiffla trzeba pokonać aż 1710 stopni.',
// ]

// const day = new Date()

// currentDay.textContent = day.toLocaleString('pl', { weekday: 'long' })

// const showRandomFact = () => {
// 	const number = Math.floor(Math.random() * (facts.length - 1))

//     funFact.textContent = facts[number]
// }

// showRandomFact()

let todoInput
let errorInfo
let addBtn
let ulList
let newTodo
let popup
let popupInfo
let todoToEdit
let popupInput
let popupAddBtn
let popupCloseBtn

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
}
const prepareDOMElements = () => {
	todoInput = document.querySelector('.todo-input')
	errorInfo = document.querySelector('.error-info')
	addBtn = document.querySelector('.btn-add')
	ulList = document.querySelector('.todolist ul')

	popup = document.querySelector('.popup')
	popupInfo = document.querySelector('.popup-info')
	popupInput = document.querySelector('.popupInput')
	popupAddBtn = document.querySelector('.accept')
	popupCloseBtn = document.querySelector('.cancel')
}
const prepareDOMEvents = () => {
	addBtn.addEventListener('click', addNewTodo)
	ulList.addEventListener('click', checkClick)
	popupCloseBtn.addEventListener('click', closePopup)
	popupAddBtn.addEventListener('click', changeTodoText)
}

const addNewTodo = () => {
	if (todoInput.value !== '') {
		newTodo = document.createElement('li')
		newTodo.textContent = todoInput.value
		createToolsArea()
		ulList.append(newTodo)

		todoInput.value = ''
		errorInfo.textContent = ''
	} else {
		errorInfo.textContent = 'Wpisz treść zadania!'
	}
}

const createToolsArea = () => {
	const toolsPanel = document.createElement('div')
	toolsPanel.classList.add('tools')
	newTodo.append(toolsPanel)

	const completeBtn = document.createElement('button')
	completeBtn.classList.add('complete')
	completeBtn.innerHTML = "<i class='fas fa-check'></i>"

	const deleteBtn = document.createElement('button')
	deleteBtn.classList.add('delete')
	deleteBtn.innerHTML = "<i class='fas fa-times'></i>"

	const editBtn = document.createElement('button')
	editBtn.classList.add('edit')
	editBtn.textContent = 'EDIT'

	toolsPanel.append(completeBtn, editBtn, deleteBtn)
}

const checkClick = e => {
	if (e.target.matches('.complete')) {
		e.target.closest('li').classList.toggle('completed')
		e.target.classList.toggle('completed')
	} else if (e.target.matches('.edit')) {
		editToDo(e)
	} else if (e.target.matches('.delete')) {
		console.log('delete')
	}
}

const editToDo = e => {
	todoToEdit = e.target.closest('li')

	popupInput.value = todoToEdit.firstChild.textContent
	console.log(todoToEdit.firstChild)
	popup.style.display = 'flex'
}

const closePopup = () => {
	popup.style.display = 'none'
	popupInfo.textContent = ''
}

const changeTodoText = () => {
	if(popupInput.value !== ''){
		 todoToEdit.firstChild.textContent = popupInput.value 
		 popup.style.display = 'none'
		 popupInfo.textContent = ''
	} else {
		popupInfo.textContent = 'Musisz podać jakąś treść!'
	}
}


document.addEventListener('DOMContentLoaded', main)
