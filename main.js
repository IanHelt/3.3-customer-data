(function(){
'use strict';

// Shortcut for customers.results
var peopleArray = customers.results;

// Retrieves the name object of each customer and places them into an array
var nameArray = [];
peopleArray.forEach(function(customerName, counter){
  customerName = peopleArray[counter].name;
  nameArray.push(customerName);
})

// Draws from nameArray and combines 'title' 'first' and 'last' to form
// the customer's full name
var fullNames = [];
nameArray.forEach(function(fullName, counter, originalArray){
fullName = originalArray[counter].title + ". " + originalArray[counter].first + " " + originalArray[counter].last;
fullNames.push(fullName);
})

// Retrieves all location data for each customer
var locationArray =[];
peopleArray.forEach(function(customerLocation, counter){
  customerLocation = peopleArray[counter].location;
  locationArray.push(customerLocation);
})

// Retrieves more specific address information from locationArray
// then places the info into the appropriate array
var locationFull = [];
var locationStreet = [];
var locationCity = [];
var locationState = [];
var locationPost = [];

locationArray.forEach(function(locationInfo, counter, originalArray){
locationInfo = originalArray[counter].street + originalArray[counter].city + originalArray[counter].state + originalArray[counter].postcode;
locationFull.push(locationInfo);
locationStreet.push(originalArray[counter].street);
locationCity.push(originalArray[counter].city);
locationState.push(originalArray[counter].state);
locationPost.push(originalArray[counter].postcode);
})

// Retrieves the phone number of each customer and places it into an array
var phoneArray = [];
peopleArray.forEach(function(customerPhone, counter){
  customerPhone = peopleArray[counter].phone;
  phoneArray.push(customerPhone);
})

// Retrieves the email of each customer and places it into an array
var emailArray = [];
peopleArray.forEach(function(customerEmail, counter){
  customerEmail = peopleArray[counter].email;
  emailArray.push(customerEmail);
})

// Retrieves large sized profile pictures appropriate to each customer
// it then places these pics in order into an array
var pictureArray = [];
peopleArray.forEach(function(profilePic, counter){
  profilePic = peopleArray[counter].picture.large;
  pictureArray.push(profilePic);
})

// Creates and integrates a div element named after a customer's first name.
// This element acts as a container for the rest of the profile info
var divTag = document.getElementById('customerinfo');

  peopleArray.forEach(function(item, counter, originalArray){
  var profileDiv = document.createElement("div");
  profileDiv.id = nameArray[counter].first;
  divTag.appendChild(profileDiv);
})

// Creates and integrates elements for the profile pic, name, email, address
// and phone number
peopleArray.forEach(function(item, counter, originalArray){

  var pictureImg = document.createElement("img");
  pictureImg.src = pictureArray[counter];
  var nameDiv = document.createElement("div");
  nameDiv.textContent = fullNames[counter];
  var emailDiv = document.createElement("div");
  emailDiv.textContent = emailArray[counter];
  var streetDiv = document.createElement("div");
  streetDiv.textContent = locationStreet[counter];
  var locationDiv = document.createElement("div");
  locationDiv.textContent = locationCity[counter] + ", " + locationState[counter] + ", " + locationPost[counter];
  var phoneDiv = document.createElement("div");
  phoneDiv.textContent = phoneArray[counter];
  document.getElementById(nameArray[counter].first).appendChild(pictureImg);
  document.getElementById(nameArray[counter].first).appendChild(nameDiv);
  document.getElementById(nameArray[counter].first).appendChild(emailDiv);
  document.getElementById(nameArray[counter].first).appendChild(streetDiv);
  document.getElementById(nameArray[counter].first).appendChild(locationDiv);
  document.getElementById(nameArray[counter].first).appendChild(phoneDiv);
})


}());
