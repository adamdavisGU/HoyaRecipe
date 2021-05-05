// general API template: https://glitch.com/~general-api-template​//

//create variable that store button in javascript variable
let button = document.querySelector("#getData")


//add an event listener to the button. Run the function sendApiRequest when the button is clicked
button.addEventListener("click",()=>{
  sendApiRequest()
})


//fetch data from the API
async function sendApiRequest() {
  let APP_ID = "433cf146"
  let API_key = "ab1a5c06888a216223f12a09f1922bf6"	
  let response = await fetch(``)
  console.log(response)
};


//do something with the API data you've received.
function useApiData(){
  
}