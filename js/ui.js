class UI{
    constructor(){
        this.profile=document.querySelector('#profile');
    }
    showProfile(user){ // API theka paoa profile show korbe
        //full information k this.profile a show korte
        this.clearAlert();// karon age theka kono alert theakle seta chole jabe then profile asbe
        this.profile.innerHTML=`
        <div class="card card-body mb-3">

        <div class="row">
            <div class="col-md-3">
                <img class="img-fluid mb-2" src="${user.avatar_url}">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
            </div>
            <div class="col-md-9">
            <span class="badge bg-primary text-dark"">Public Repos: ${user.public_repos}</span>
            <span class="badge bg-secondary text-dark">Public Gists: ${user.public_gists}</span>
            <span class="badge bg-success text-dark"">Follwers: ${user.followers}</span>
            <span class="badge bg-info text-dark"">Follwing: ${user.following}</span>
            <br><br>
            <ul class="list-group">
             <li class="list-group-item">Company:${user.company}</li>
             <li class="list-group-item">Website/Blog:${user.company}</li>
             <li class="list-group-item">Location:${user.location}</li>
             <li class="list-group-item">Location:${user.created_at}</li>
            </ul>
    
    
    
            </div>
    
        </div>
    </div> `;
        

    }
    clearProfile(){
        this.profile.innerHTML=""; //kew kicu na laikle field a kono output asbe na
    }
    showAlert(message, className){
        //ekhane akta div create kore sei khane sei khane alert ta show korano hobe
        this.clearAlert(); // ei function check korbe age theka kono alert ace naki
        this.clearProfile(); //ei function check korbe age thela kono prfile ace naki
        let div=document.createElement('div');
        div.className=className;
        div.appendChild(document.createTextNode(message));//massage ta pass hobe
       
        let container=document.querySelector('.searchContainer');
        let search=document.querySelector('.search');
        container.insertBefore(div,search);
    }
    //alert asle seta chole gia notun kore alert aner jonno
    clearAlert(){
        let currentAlert=document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove(); //Ager ta remove kore notun ta dekabe
        }
    }
}