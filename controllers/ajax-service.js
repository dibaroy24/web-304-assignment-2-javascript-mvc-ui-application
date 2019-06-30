/*
A Service is a controller which could be used to handle any type of
data processing but is commonly used to fetch or save data.
*/
export class AjaxService {
  /*
  To collect data from the JSON file we will need to make a generic AJAX call in
  a static method called ajax().

  This method will have a parameter which will represent the JSON file and
  a parameter called insertedCode which we will call as a function
  inside of the AJAX call if it is successful.
  */
  static ajax(fileName, insertedCode) {
    /*
    To create a new instance of the XMLHttpRequest constructor and set the
    onstatereadychange event to an anonymous function which will check to
    ensure that the readyState property has reached stage 4 and that the
    status property returns a 200 OK response code.
    */
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        insertedCode(this.responseText);
      }
    };
    /*
    Call the open() method using the GET request method, the name of the JSON
    file and a true boolean to indicate that this is being done asyncronously
    as parameters.
    */
    xhttp.open('GET', fileName, true);

    // To complete the AJAX call we need to call the send() method.
    xhttp.send();
  }
}
