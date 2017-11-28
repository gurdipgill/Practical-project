(function(){
/*
  An "Immediately-Invoked Function Expression" (IIFE) contains
  all the code. the final brackets () ensure that it executes.

  This is good practice because:
  - it keeps your variables out of the global namespace
  - local references to objects decrease lookup times
  - it is a foundation for further code organisation

  It is also an "anonymous" function because it has/needs no name.
*/
  
  /*
    declare all the variables using 'let'. These get a reference
    to the HTML elements we want by finding their ID
  */
  let myName = document.getElementById("my-name"); 
  let userName = document.getElementById("user-name"); 
  let getName = document.getElementById("get-name");
  
  // changes the 'innerHTML' (text) of the element
  function PerformGreeting(ev) {
    myName.innerHTML = userName.value;
    ev.preventDefault();
  }
  /*
    Without setting the variables first, the above line would be really long:
    document.getElementById("my-name").innerHTML = document.getElementById("user-name").value;
  */

  /*
    Event Listeners keep your JavaScript out of the HTML -
    professional developers avoid (e.g.) "onclick" in HTML tags.
    This 'listens' for the user to submit the form.
    You can attach multiple events to any single element.
  */
  getName.addEventListener("submit", PerformGreeting);

  /*
    Uncomment the line below - see what happens when you click
    in the grey area outside the input "submit" button. Why?
  */
  
  // getName.addEventListener("click", PerformGreeting);

}());
