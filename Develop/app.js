const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

async function init() {
    try {
        // QUESTIONS TO USER
        // var prompts = new Rx.Subject();
        // inquirer.prompt(prompts);
        async function getUserInput(responses) {
            await inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is employee's name?"
                },
                {
                    type: "input",
                    name: "id",
                    message: "What is employee's id?"
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is employee's email?"
                },
                {
                    type: "list",
                    message: "What is employee's role?",
                    name: "role",
                    choices: ["Manager", "Engineer", "Intern"]
                }
            ]);
        }



        getUserInput(responses);
        const { name, id, email, role } = responses;


        async function roleChosen() {
            switch (role) {
                case "Manager":
                    return managerRole(role);

                case "Engineer":
                    return engineerRole(role);

                case "Intern":
                    return internRole(role);

                default:
                    return "There is no such position in this company"

            }
        }
        roleChosen(role);



        async function managerRole() {
            // prompts.next(
            //     {
            //         type: "input",
            //         name: "officeNumber",
            //         message: "What is Manager's office number?"
            //     },
            //     {
            //         type: "confirm",
            //         name: "addNewEmployee",
            //         message: "Do you want to add another employee?"
            //     }
            // );
            const res = await inquirer.prompt([
                {
                    type: "input",
                    name: "officeNumber",
                    message: "What is Manager's office number?"
                },
                {
                    type: "confirm",
                    name: "addNewEmployee",
                    message: "Do you want to add another employee?"
                }
            ]);
            const { officeNumber, addNewEmployee } = res;
            if (addNewEmployee) {
                getUserInput();

            } else {
                console.log("Thank you");
            }
        };

        async function engineerRole() {
            inquirer.prompt([
                {
                    type: "input",
                    name: "github",
                    message: "What is Engineer's GitHub username?"
                }
            ]);
            return github;
        };

        async function internRole() {
            inquirer.prompt([
                {
                    type: "input",
                    name: "school",
                    message: "What is Intern's school?"
                }
            ]);
            return school;
        }



    } catch (err) {
        console.log(err);
    }
}

init();
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
