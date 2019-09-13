//Init Github variable from github class
const github = new Github;
//Init UI variable from UI class
const ui = new UI;
//Search Input
const searchUser = document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup', (e) => {
    //Get input text
    const userText = e.target.value;

    if(userText !== ''){
        //Make http call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    //Show alert

                } else {
                    //Show profile
                    console.log(data);
                    console.log(data.profile);
                    ui.showProfile(data.profile);
                }
            })
    } else {
        //Clear profile
    }
});