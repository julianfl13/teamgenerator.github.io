const Employee = requre("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, GitHubUser){
        super(name, id, email);
        this.GitHubUser = GitHubUser;
    }
    getRole(){
        return "Engineer";
    }
    getGitHub(){
        return this.GitHubUser;
    }
}
module.exports = Engineer;