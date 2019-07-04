// create github class with constructor
class Github {
    constructor() { // obfuscating api keys since there is no server side code for this application
        this.client_id = 'var _0x8ad1=["\x62\x32\x36\x37\x62\x38\x32\x38\x63\x66\x32\x65\x30\x36\x61\x39\x62\x65\x39\x61"];_0x8ad1[0]';
        this.client_secret ='var _0xf4ca=["\x38\x61\x64\x38\x33\x30\x36\x62\x31\x34\x32\x63\x34\x65\x39\x62\x35\x36\x39\x65\x35\x31\x32\x33\x30\x66\x33\x64\x66\x61\x65\x34\x64\x35\x33\x62\x30\x36\x37\x38"];_0xf4ca[0]';
        this.repo_count = 10;
        this.repo_sort = 'created: asc'
    }

    //async get user request
    async getUser(user) {
        // get user profile
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        // get list of latest repositories
        const repoResponse = await fetch(`https://api.github.com/users/${user}?repos?per_page={this.repo_count}&sort=${this.repo_count}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        // await response of profileResponse
        const profile = await profileResponse.json();

        const repos = await repoResponse.json();


        return {
            profile
        }
    }
}