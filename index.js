const baseUrl = 'http://www.boredapi.com/api/'

const apiData = document.getElementById("api-response")

const changeColor = document.getElementById("color-paragraph");
changeColor.style.color = 'red'

const getRandomButton = document.getElementById("get-random-button")
getRandomButton.addEventListener('click', getRandomTask)


async function getRandomTask() {
    let data = null
    try {
        apiData.innerText = "loading..."
         let response = await fetch(`${baseUrl}activity/`);
         data = await response.json()
        apiData.innerText = data.activity;
    } catch (error) {
        apiData.innerText = "uh oh, something went wrong"
    }
     
  }