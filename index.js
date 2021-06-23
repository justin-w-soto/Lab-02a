
//nametag
    const nameTag = document.getElementById('name-tag');
    console.log(nameTag);

//top-section
    const topSection = document.getElementById('top-section');
    topSection.style.backgroundColor = 'salmon';
    topSection.style.color = 'white';

//bottom-section
    const bottomSection = document.getElementById('bottom-section');
    bottomSection.style.backgroundColor = 'salmon';

//name-section
    const nameSection = document.getElementById('name-section');
    nameSection.innerText = 'Kilgore Trout';
    nameSection.style.color = 'green';

//input-field
    const nameInput = document.getElementById('name-input');
    // nameInput.addEventListener('input', (e)=>{
    // console.log(e.target.value)
    // nameSection.innerText = e.target.value;
    
 //});

//button 
    const submitButton = document.getElementById('submit-button');
    submitButton.addEventListener('click', (e)=>{
    nameSection.innerText = nameInput.value;
});




