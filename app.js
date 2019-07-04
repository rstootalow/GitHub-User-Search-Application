// instatiate instance of github class from github.js
const github = new Github;

// instantiate instance of UI class from UI.js
const ui = new UI;

// select search input for keyup events
const searchUser = document.getElementById('search-user');

// keyup event listener for search input
searchUser.addEventListener('keyup', (event) => {
    // get input text from keyup
    const userText = event.target.value;

    // input validation
    if(userText !== '') {
        // make get call to github
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found') {
                    // show alert notifying user there is no match
                    ui.showAlert('User Not Found', 'alert alert-danger mt-12 mb-6')
                } else {
                    // show user profile
                    ui.showProfile(data.profile);
                    //show repos
                    ui.showRepos(data.repo)
                }
            })
    } else {
        // clear profile
        ui.clearProfile();
    }
});