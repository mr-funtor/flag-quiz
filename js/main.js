const resetButton=document.querySelector('button');
const flagDisplay=document.querySelector('img');
const hypeDisplay=document.querySelector('h3');
const allLabels=document.querySelectorAll('label');
const allinputs=document.querySelectorAll('input');
const allParagraphs= document.querySelectorAll('p');




//resets the flags again
resetButton.addEventListener('click',pickRandomFlag);


let rightAnswer;

function pickRandomFlag(){
	hypeDisplay.textContent='Look carefully';
	
	//unchecks all radio buttons and adds an event listener
	allinputs.forEach((item)=>{
		item.addEventListener('change',checkRightAnswer);
		item.checked=false;
		item.disabled=false;//enables the radio buttons
		
		item.parentElement.style.backgroundColor="transparent";//removes all the backgroundcolor of parent Elements
	})
	
	const randomIndex=Math.floor(Math.random() *countryWithImages.length);
	const countryPicked=countryWithImages[randomIndex];
	flagDisplay.src=`https:${countryPicked.file_url}`;
	rightAnswer=countryPicked['name'];
	
	pickRandomChoices()
	
	//picks a random input and fills it with the right answer
	const choiceRandom=Math.floor(Math.random() *4);
	allLabels[choiceRandom].textContent=countryPicked['name'];
	allinputs[choiceRandom].value=countryPicked['name'];
	
	
}

pickRandomFlag()


function pickRandomChoices(){
	let countryOptions=[];
	
	//populates the array above, while excluding right answer to avoid conflict
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
	
	
	//If the answer picked is wrong
	if(e.currentTarget.value!==rightAnswer){
		e.currentTarget.parentElement.style.backgroundColor="red";
		hypeDisplay.textContent=`Aww Wrong. PlayAgain`;
	}else{
		hypeDisplay.textContent='Yes!!! You are correct! Play Again';
		
	}
	
	
	//highlights the right answer in green
	allinputs.forEach((item)=>{
			if(item.value===rightAnswer){
				item.parentElement.style.backgroundColor="green";
			}
		})
	
	
}

