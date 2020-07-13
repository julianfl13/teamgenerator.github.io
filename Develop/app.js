const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
​
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");
const { type } = require("os");

const newEmployees = [];
​


async function init(){
    const manager = await newManager();
    newTeam.push(new Manager(manager.name, manager.id, manager.email, manager.officeNumber));
    employeePrompt();
}

init();

function newManager(){
    inquirer.prompt([
        {
        type: "input",
        name: "name",
        message: "Manager name: "
        },
        {
        type: "input",
        name: "id",
        message: "Manager ID: "

        },
        {
        type: "input",
        name: "email",
        message: "Manager email: "
        },
        {
        type: "input",
        name: "officeNumber",
        message: "Manager office number: "
        }
    ]).then(function(manager){
        newTeam.push(
            new Manager(manager.name, manager.id, manager.email, manager.officeNumber)
        );
        employeePrompt();
    });
}

function employeePrompt() {
    inquirer.prompt([
        {
            name: "employee",
            type: "list",
            message: "What employee would you like to add?",
            choices: [
                "Add Intern",
                "Add Engineer",
                "Build HTML"
            ]
        }
    ]).then(employeeData => {
        if (employeeData.employee === "Add Intern") {
            buildIntern();
        } else if (employeeData.employee === "Add Engineer") {
            buildEngineer();
        } else {
            render(newTeam);
        }
    });
}

function buildIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Intern name: "
        },
        {
            type: "number",
            name: "id",
            message: "Intern ID: "
        },
        {
            type: "input",
            name: "email",
            message: "Intern email: "
        },
        {
            type: "input",
            name: "school",
            message: "Attending school: "
        },
    ]).then(function(intern) {
        newTeam.push(
            new Intern(intern.name, intern.id, intern.email, intern.school)
        );
        employeePrompt();
    });
}

function buildEngineer(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Name of engineer: "
        },
        {
            type: "number",
            name: "id",
            message: "Engineer's ID: "
        },
        {
            type: "input",
            name: "email",
            message: "Enter engineer's email: "

        },
        {
            type: "input",
            name: "GitHubUser",
            message: "GitHub username: "
        }
    ]).then(function(engineer){
        newTeam.push(
            new Engineer(engineer.name, engineer.id, engineer.email, engineer.GitHubUser)
        );
    });
}

