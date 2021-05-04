let searchBtn=document.querySelector('#searchBtn');
let searchUser=document.querySelector('#searchUser');
let ui=new UI();// object create hobe

searchBtn.addEventListener('click',searchData);

function searchData(e){
  let userText=searchUser.value;
  if(userText!=''){
      //Fetch API call hobe
      fetch(`https://api.github.com/users/${userText}`)
      .then(res=>res.json()) 
      
      .then(data=>{
         // console.log(data);
        if(data.message=='Not Found'){
            // Show alert
            ui.showAlert("User not Found!","alert alert-danger"); //2ta parameter pass korace
        }
        else{
            // Show Profile
            ui.showProfile(data); //UI class theka data nia aste
        }
        
        })
      
  }
  else{
     // Clear Profile 
     ui.clearProfile();
  }

}