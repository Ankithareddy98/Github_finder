class Github{
    constructor(){
        this.client_id = '6a54ea593f7950687e3f';
        this.client_secret ='5ed2466ac250bbdd5ec85482c264111c29dcba48';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort="${this.repos_sort}"&client_id = ${this.client_id}&client_secret = ${this.client_secret}`)

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    } 
}