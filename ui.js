class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        //console.log(user) - TEST -- working
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-6">View User's Profile</a>
                </div> <!-- end of col -->
                <div class="col-md-3">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-info">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website: ${user.blog}</li>
                        <li class="list-group-item">Current Location: ${user.location}</li>
                        <li class="list-group-item"> Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Most Recent Repos</h3>
        <div id="repos"></div>
        `;
    }

    // show latest 10 repos
    showRepos(repos) {
        let output = '';

        repos.forEach(function(repo) {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="$${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-success">Forks: ${repo.forms_count}</span>
                        </div>
                    </div>
                </div>
            `;
        }) // END OF OUTPUT LOOP

        // INSERT OUTPUT TO BROWSER
        document.getElementById('repos').innerHTML = output;
    }

    // displaying alert
    showAlert(message, className) {
        // clear any existing alerts
        this.clearAlert();
        // create div to store the alert
        const div = document.createElement('div');
        div.className = className // second className is the parameter being passed into the showAlert function
        // adding text to the div
        div.appendChild(document.createTextNode(message))
        // get parent for event delegation of inserting the div alert
        const container = document.querySelector('.search-container');
        // get search box
        const search = document.querySelector('.search');
        // insert alert
        container.insertBefore(div, search);

        // timeout alert after 3 seconds
        setTimeout(() => {
            this.clearAlert()
        }, 3000)
    }

    // Clear alert message
    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        // check to see if alert already exists
        if(currentAlert) {
            currentAlert.remove();
        }
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }
}