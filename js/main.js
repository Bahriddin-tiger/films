var elBody = document.querySelector("body")
var newSelect = document.createElement('select');
newSelect.classList.add("select")
var newList = document.createElement("ul")
function createdom(massiv) {
	for (item of massiv) {
		var newItem = document.createElement("li");
		var newId = document.createElement("div");
		var title = document.createElement('h2');
		var newType = document.createElement("p");
		var newImg = document.createElement("img");
		var newAvg = document.createElement("div");
		var newMultipleis = document.createElement("div");
		var newWeaknesses = document.createElement("p");
		newId.textContent = `id: ${item.id}`
	    title.textContent= `title:${item.title}`
		newImg.src = `${item.poster}`
		newType.textContent = `overview: ${item.overview}`
	    newMultipleis.textContent=` genres:${item.genres}`
        var date = new Date(item.release_date * 1000);
		newWeaknesses.textContent = 'Release year: ' + date.getFullYear();
		newItem.setAttribute('class', 'list__item  item')
		newId.setAttribute('class', 'item__id')
		title.setAttribute('class', 'item__num')
		newImg.setAttribute('class', 'item__img')
		newType.setAttribute('class', 'item__type')
		newAvg.setAttribute('class', 'item__Avg')
		newWeaknesses.setAttribute('class', 'item__Weaknesses')
		newImg.setAttribute('alt', 'pocemons img')
		newItem.appendChild(newId);
		newItem.appendChild(title);
		newItem.appendChild(newImg);
		newItem.appendChild(newType);
		newItem.appendChild(newAvg);
		newItem.appendChild(newWeaknesses);
        newItem.appendChild(newMultipleis);
		newList.appendChild(newItem);
	}
}
const newarray = new Set();
films.forEach(item => {
	item.genres.forEach(geners=>{
		newarray.add(geners)
	})
})


for( el of newarray){
  {
			let newOption = document.createElement('option');
			newOption.value =  el;
			newOption.textContent =  el;
			newOption.setAttribute('class',"js-option")
			newSelect.appendChild(newOption);
		}
	}
	createdom(films);
var newh1 = document.createElement('h1');
var newbtn = document.createElement("button");
newSelect.setAttribute('class', 'option-btn')
newbtn.textContent = 'submit'
newbtn.type = 'submit';
var elText = "films"
newh1.textContent = elText;
newh1.setAttribute('class', 'hiading');
newList.setAttribute('class', 'container list ');
elBody.appendChild(newh1);
elBody.appendChild(newSelect);
elBody.appendChild(newList);
let result = [];
newSelect.addEventListener("change", function(){
result = []
newList.innerHTML = ' ';
	let selectVal = newSelect.value
	films.forEach((films) => {
		if(films.genres.includes(selectVal)){
result.push(films)
		}
	})
createdom(result)
})