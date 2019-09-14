class UI {
    constructor(){
        this.profile = document.getElementById('profile');
    }

    //Display profile in UI
    showProfile(user){
        let createDate = new Date(user.created_at).toUTCString();
        this.profile.innerHTML=`
          <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-2">Show profile </a>
                </div>
                <div class="col-md-9">
                    <span class= "badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class= "badge badge-secondary">Public Gists: ${user.public_gists}</span>
                    <span class= "badge badge-success">Followers: ${user.followers}</span>
                    <span class= "badge badge-info">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member since: ${createDate}</li>
                    </ul>
                </div>
            </div>
          </div>
          <h3 class="page-heading mb-3">Latest Repos</h3>
          <div id="repos"></div>
        `
        console.log(user);
    }

    //Clear profile when input is empty
    clearProfile(){
        this.profile.innerHTML='';
    }

    //Show alert message when profile doesnt exist
    showAlert(message, className){
        //Clear previous alert message
        this.clearAlert();
        //Create div for the message
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));       
        //Get parent
        const container = document.querySelector('.searchContainer');
        //Get search box
        const search = document.querySelector('.search');
        //Insert alert
        container.insertBefore(div, search);  //el mensaje de alerta se inserta en el div de searchcontainer y se pondria antes del elemento con clase search
        //Timeout cleaner
        setTimeout(() => {
            this.clearAlert();
        }, 4000);
    }

    //Clear previous alert messages
    clearAlert() {
        const alert = document.querySelector('.alert');
        if (alert) {
            alert.remove();
        }
    }
}