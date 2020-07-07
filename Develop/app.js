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

const newEmployees = [];
​
// ​inquirer.prompt([
//     {
//         type:"input",
//         name:"username",
//         message:"Enter employee name: "
//     },
//     {
//         type:"number",
//         name:"id",
//         message:"Enter employee ID number: "
//     },
//     {
//         type:"input",
//         name:"id",
//         message:"Enter title: "
//     }
// ]).then(function(res){
//     const fileData = JSON.stringify(res, null, 2);
//     fs.writeFile("test.json", fileData, function(err){
//         if(err){
//             console.log(err);
//         }
//     });
//     console.log(res);
// });

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
            new Manager(manager.name, manager.id, manager.email manager.officeNumber)
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
            render(teamMembers);
        }
    });
}