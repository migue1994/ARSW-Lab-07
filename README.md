# Lab-6-ARSW

# Authors

- ## Natalia Durán
- ## Miguel Rivera

# Compile and run instructions

To download the project, we must open a cmd terminal and go to any directory, then we write the next code:

```$ git clone https://github.com/migue1994/Lab-06-ARSW.git```

After that, the project will be dowloaded in the directory where we are in.
To execute the project, write the code

```$ gradle runBoot```

And we go to the localhost address in our browser. There will be the main page of the web application where we can enter the name of any author and it displays a list with the name of all blueprints available, next to a button that allows us to draw the points of the blueprint in the canvas.

# Blueprint Management 4 - Heavy Clients

## Adding action listener to canvas

The first step is add the code needed to perform the action listener that allows us to paint some aditionals points, so the bellow code show how that function was implemented.

![startCanvas](https://github.com/migue1994/Lab-06-ARSW/blob/master/img/startCanvas.PNG)

Once we run the service, we can now paint more lines in to the load canvas of the any author as we can see in the next image.

![muestraCanvas](https://github.com/migue1994/Lab-06-ARSW/blob/master/img/muestraCanvas.PNG)

In the code shown beforely, the new point added is join with the las point on the canvas.

So now, we have to add a save/update and a delete button, wich allows us to perform update, save and delete funcionalities with a selected blueprint, then the first step is put the button tags in the html file

![save-delete-button-tags](https://github.com/migue1994/Lab-06-ARSW/blob/master/img/save-delete-button-tags.PNG)

After, we must add the functionalities in the app.js file, which perform the corresponding actions of the buttons.

![saveFunctionality](https://github.com/migue1994/Lab-06-ARSW/blob/master/img/saveFuncionality.PNG)

![deleteFunctionality](https://github.com/migue1994/Lab-06-ARSW/blob/master/img/deleteFunctionality.PNG)

The above functions shown, depend on the functions that are located in the apiclient.js file, which allow connect the fronted view with backend and fetch the information we need. This functions are shown in the following picture.

![saveRest](https://github.com/migue1994/Lab-06-ARSW/blob/master/img/saveRest.PNG)

![deleteRest](https://github.com/migue1994/Lab-06-ARSW/blob/master/img/deleteRest.PNG)

Finally, in order to create a new blueprint we add a new button that allow us to do it. Basically, when the page is load the div that contains the input statement for the new blueprint's name, is hidden, and when the user press the create button this div appears.

Html code for our "Create Button"

![createTag](https://github.com/migue1994/Lab-06-ARSW/blob/master/img/htmlButton.png)


Html code for hidden/show div

![createTag](https://github.com/migue1994/Lab-06-ARSW/blob/master/img/htmlCreate.png)

JavaScript code that allow us to hide the div on page load

![createApp](https://github.com/migue1994/Lab-06-ARSW/blob/master/img/hide.png)

JavaScript code that allow us to show the div

![createApp](https://github.com/migue1994/Lab-06-ARSW/blob/master/img/hideCreate.png)

Page on load

![createApp](https://github.com/migue1994/Lab-06-ARSW/blob/master/img/normal.png)

Page after pressing "Create new blueprint" button

![createApp](https://github.com/migue1994/Lab-06-ARSW/blob/master/img/createe.png)

Once we enter the new blueprint's name, we must press the "Create" button, that will call our "createBlueprint" javaScript function.

![createApp](https://github.com/migue1994/Lab-06-ARSW/blob/master/img/newC.png)

JavaScript code that allow us to create a new blueprint

![createApp](https://github.com/migue1994/Lab-06-ARSW/blob/master/img/create.png)

Then, on the current author table will appear the new blueprint

![createApp](https://github.com/migue1994/Lab-06-ARSW/blob/master/img/table.png)

And you can create new points for the new plane:

Before save/update

![createApp](https://github.com/migue1994/Lab-06-ARSW/blob/master/img/new1.png)

After save/update

![createApp](https://github.com/migue1994/Lab-06-ARSW/blob/master/img/new2.png)


