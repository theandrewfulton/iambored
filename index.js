const baseUrl = 'http://www.boredapi.com/api/'

const activity = document.getElementById('activity')
const responseContainer = document.getElementById('start-hidden')
const accessibility = document.getElementById('accessibility')
const category = document.getElementById('category')
const participants = document.getElementById('participants')
const price = document.getElementById('price')
const link = document.getElementById('link')


const getRandomButton = document.getElementById('get-random-button')
getRandomButton.addEventListener('click', getRandomTask)

async function getRandomTask() {
    responseContainer.style.visibility = 'hidden'
    let data = null
    try {
        activity.innerText = 'loading...'
         let response = await fetch(`${baseUrl}activity/`);
         data = await response.json()
        activity.innerText = data.activity
        accessibility.innerText = data.accessibility
        category.innerText = data.type
        participants.innerText = data.participants
        price.innerText = data.price
        // link.innerHTML = `<a href=${data.link}>${data.link}</>`
        link.innerText = data.link
        responseContainer.style.visibility = 'visible'
    } catch (error) {
        activity.innerText = 'uh oh, something went wrong'
    }
     
  }

