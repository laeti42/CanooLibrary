# CanooLibrary

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.1.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


Introduction
This is a small site that allow to list a librarie of book, to add some of them and to delete other.
All the change makes are not permanent since I did not use a restfull service that is bind to a data base.
To start the projet, go inside the directory name 'canoo-library' and open a command line in it. 
Do the commande line : ng serve, if you have the following message : "Port 4202 is already in use. Use '--port' to specify a different port." do 
ng serve --port 4201 (or any other port that you might find usefull)
Open a browser (Firefox or GoogleChrome) at the adresse : localhost:4200 (or the specified port)
You will arrived to the login page. To login, you can use to different username : 
1) admin, password = 1234, he is the admin and can delete a book
2) test, password = 1234, he is not an admin
After you are login you can see the liste of book, modify it and add new one.



Prerequist
Install angular 2
you can do it with npm : npm install angular

Features
	Login
	List all the book on several page
	Add a new book
	Modify a book
	Delete a book

Build Process
I have decide to add all the dependencies to the projet in git even if normally you ignore them in the .gitignore file.
This decision had been made to make the test easier and because they are not so eavy (~300MB).
It juste took more time to download the project.

Contributor
This project was entirely made by Laetitia Nell
