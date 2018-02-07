chrome.runtime.sendMessage({action: "show"});

let images = document.getElementsByTagName('img');

for(let i = 0; i < images.length; i++) {
    images[i].src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/170px-Danny_DeVito_by_Gage_Skidmore.jpg';
    if(images[i].srcset) {
        images[i].srcset = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Danny_DeVito_by_Gage_Skidmore.jpg/170px-Danny_DeVito_by_Gage_Skidmore.jpg';
    }
}