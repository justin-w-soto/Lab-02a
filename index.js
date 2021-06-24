//nametag
const nameTag = document.getElementById('name-tag');
console.log(nameTag);

//top-section
const topSection = document.getElementById('top-section');
topSection.style.backgroundColor = 'red';
topSection.style.color = 'white';

//bottom-section
const bottomSection = document.getElementById('bottom-section');
bottomSection.style.backgroundColor = 'red';

//name-section
const nameSection = document.getElementById('name-section');
nameSection.innerText = 'Kilgore Trout';
nameSection.style.color = 'green';

//input-field
const nameInput = document.getElementById('name-input');

//name-button 
const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', (e)=>{
nameSection.innerText = nameInput.value;
});

//pronoun-button
const pronounButton = document.getElementById('pronoun-button');
pronounButton.addEventListener('click', (e)=>{
pronounSection.innerText = pronounInput.value;    
})
//pronoun-input
const pronounInput = document.getElementById('pronoun-input');
const pronounSection = document.getElementById('pronoun-section');
pronounSection.innerText = 'he/him'
pronounSection.style.color = 'green';

//color-buttons
const blueButton = document.getElementById('color-blue');
const pinkButton = document.getElementById('color-pink');
const greenButton = document.getElementById('color-green');

blueButton.addEventListener('click', (e)=>{
topSection.style.backgroundColor = 'blue';
bottomSection.style.backgroundColor = 'blue';
});

pinkButton.addEventListener('click', (e)=>{
topSection.style.backgroundColor = 'salmon';
bottomSection.style.backgroundColor = 'salmon';
});

greenButton.addEventListener('click', (e)=>{
topSection.style.backgroundColor = 'green';
bottomSection.style.backgroundColor = 'green';
});
    