// general API template: https://glitch.com/~general-api-template​//

//create variable that store button in javascript variable
let button = document.querySelector("#getData")


//add an event listener to the button. Run the function sendApiRequest when the button is clicked
button.addEventListener("click",()=>{
  sendApiRequest()
})


//fetch data from the API
async function sendApiRequest() {
  let APP_ID = "f7b73eef"
  let API_key = "5dbfaeb8970da3745068be26a7e45ae3"	
  let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_key}&q=pizza`)
  console.log(response)
  let data = await response.json() 
  console.log(data)
  useApiData (data)
};


//do something with the API data you've received.
function useApiData(){
Document.querySelector("#content").innerHTML = `

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