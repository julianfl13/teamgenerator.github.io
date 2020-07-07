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
​
​inquirer.prompt([
    {
        type:"input",
        name:"username",
        message:"Enter employee name: "
    },
    {
        type:"number",
        name:"id",
        message:"Enter employee ID number: "
    },
    {
        type:"input",
        name:"id",
        message:"Enter title: "
    }
]).then(function(res){
    const fileData = JSON.stringify(res, null, 2);
    fs.writeFile("test.json", fileData, function(err){
        if(err){
            console.log(err);
        }
    });
    console.log(res);
});
