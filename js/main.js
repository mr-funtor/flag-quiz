const resetButton=document.querySelector('button');
const flagDisplay=document.querySelector('img');
const hypeDisplay=document.querySelector('h3');
const allLabels=document.querySelectorAll('label');
const allinputs=document.querySelectorAll('input');
const allParagraphs= document.querySelectorAll('p');
console.log(countryWithImages[0]);

resetButton.addEventListener('click',pickRandomFlag);


let rightAnswer;

function pickRandomFlag(){
	hypeDisplay.textContent='Look carefully';
	
	//unchecks all radio buttons and add an event listener
	allinputs.forEach((item)=>{
		item.addEventListener('change',checkRightAnswer);
		item.checked=false;
		item.disabled=false;
	})
	
	const randomIndex=Math.floor(Math.random() *countryWithImages.length);
	const countryPicked=countryWithImages[randomIndex];
	flagDisplay.src=`https:${countryPicked.file_url}`;
	rightAnswer=countryPicked['name'];
	
	pickRandomChoices()
	
	//pick a random choice to populate
	const choiceRandom=Math.floor(Math.random() *4);
	allLabels[choiceRandom].textContent=countryPicked['name'];
	allinputs[choiceRandom].value=countryPicked['name'];
	
	
}

pickRandomFlag()


function pickRandomChoices(){
	let countryOptions=[];
	
	while(countryOptions.length<4){
		const randomIndex=Math.floor(Math.random() *countryWithImages.length);
		const countryPicked=countryWithImages[randomIndex]['name'];
		if(countryPicked!==rightAnswer && !countryOptions.includes(countryPicked) ){
			countryOptions.push(countryPicked)
		}
	}
	
	for(let i=0; i<countryOptions.length;i=i+1){
		allLabels[i].textContent=countryOptions[i];
		allinputs[i].value=countryOptions[i];
	}	
	
}

function checkRightAnswer(e){
//disable the radio buttons
	allinputs.forEach((item)=>{
		
		item.disabled=true;
		
	})
	
//	console.log(e.currentTarget.value,rightAnswer)
	if(e.currentTarget.value!==rightAnswer){
	return	hypeDisplay.textContent=`Aww Wrong. Right answer was ${rightAnswer} PlayAgain`;
	}
	
	hypeDisplay.textContent='Yes!!! You are correct! Play Again';
	
}

