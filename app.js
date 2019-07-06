// initalize github object for use in the app
const github = new Github;

// initalize UI object for use in the app
const ui = new UI;

//select input field for searching
const searchUser = document.getElementById('search-user');

// search user event listener
searchUser.addEventListener('keyup', (event) => {
    // variable to store user input on keyup event
    const userText = event.target.value;

    if(userText !== '') {
        github.getUser(userText)
        // data is the response back from github api as an object
            .then(data => {
                if(data.profile.message === 'Not Found') {
                    ui.showAlert('User not found!', 'alert alert-danger');
                } else {
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos)
                }
            })
    } else {
        // clear the profile
        ui.clearProfile();
    }
})