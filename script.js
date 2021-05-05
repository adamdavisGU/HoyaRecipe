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
  let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_key}&q=pizza`)
  console.log(response)
  let data = await response.json() 
  console.log(data)
  useApiData (data)
};


//do something with the API data you've received.
function useApiData(){
DocumentFragment.querySelector("#content").innerHTML = `

//https://getbootstrap.com/docs/5.0/components/card/


<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

`
}