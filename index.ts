#! /usr/bin/env node

import inquirer from "inquirer";

class Contact {
  name: string;
  contactNumber: number;

  constructor(name: string, contactNumber: number) {
    this.name = name;
    this.contactNumber = contactNumber;
  }
}

let contacts: Contact[] = [];
let condition = true;

console.log("\n\t\t==========================");
console.log("\n\t\tContact Management System\n");
console.log("\t\t==========================");

do {
  const askMethods = await inquirer.prompt([
    {
      name: "ask",
      type: "list",
      message: "What do you want to do?",
      choices: ["Add New Contact", "View Contact List", "Exit"],
    },
  ]);

  if (askMethods.ask === "Add New Contact") {
    const ans = await inquirer.prompt([
      {
        name: "name",
        type: "input",
        message: "Enter your name?",
      },
      {
        name: "cNum",
        type: "input",
        message: "Enter your contact number?",
      },
    ]);

    const contact = new Contact(ans.name, ans.cNum);
    contacts.push(contact);
    console.log('\n', contact, '\n');
  } else if (askMethods.ask === "View Contact List") {
    if (contacts.length === 0) {
      console.log("No contacts found");
    } else {
      console.log("Your Contact List:");
      console.log(contacts);
      condition = true;
    }
  } else if (askMethods.ask === "Exit") {
    console.log("Exiting...");
    condition = false;
  }
} while (condition);
