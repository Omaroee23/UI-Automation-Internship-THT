 // Creating an array of customers (objects)
 const customers = [
	{
	  "Id": 1,
	  "Name": "Mohammad Smith",
	  "DoB": "1/1/2010",
	  "FavoriteColor": "Blue",
	  "Pets": [
		{ "type": "Bird", "Name": "Tweety" }
	  ]
	},
	{
	  "Id": 2,
	  "Name": "Ilya Chang",
	  "DoB": "2/1/1980",
	  "Pets": [
		{ "type": "Bird", "Name": "Fluffy" },
		{ "type": "Cat", "Name": "Leon" }
	  ]
	},
	{
	  "Id": 3,
	  "Name": "Chris",
	  "DoB": "10/31/1987",
	  "Pets": [
		{ "type": "Dog", "Name": "Corky" },
		{ "type": "Cat", "Name": "Bella" }
	  ]
	},
	{
	  "Id": 4,
	  "Name": "Sanjay Grant",
	  "DoB": "10/31/1987",
	},
	{
	  "Id": 5,
	  "Name": "Anna Kang",
	  "DoB": "11/30/2004",
	  "Pets": [
		{ "type": "Lizard", "Name": "Kermit" },
		{ "type": "Lizard", "Name": "Dino" }
	  ]
	},
	{
	  "Id": 6,
	  "Name": "Smith Adebayo",
		  "DoB":"11/30/2004",
		  "Pets":[
			  { "type":"Cat", "Name":"Walter"},
			  { "type":"Lizard", "Name":"Lizzo"},
			  { "type":"Bird", "Name":"Ladybird"}
		  ]
	  }
  ]
  
  
  //Sort the customers by Birthay in Descending Order
  customers.sort((a, b) => new Date(b.DoB) - new Date(a.DoB));
  
  
	const table = document.createElement('table');
  
  
  // Create table header
  const headerRow = table.insertRow();
  const nameHeader = headerRow.insertCell();
  nameHeader.innerText = 'Name';
  const birthdayHeader = headerRow.insertCell();
  birthdayHeader.innerText = 'Birthday';
  const colorHeader = headerRow.insertCell();
  colorHeader.innerText = 'Favorite Color';
  
  
  // Populate table rows
  customers.forEach((customer) => {
	const row = table.insertRow();
	const nameCell = row.insertCell();
	nameCell.innerText = customer.Name;
	const birthdayCell = row.insertCell();
	birthdayCell.innerText = customer.DoB;
	const colorCell = row.insertCell();
	colorCell.innerText = customer.FavoriteColor;
  
  
	//Start of pet view for customers
	const petButton = document.createElement('button');
	petButton.innerText = 'View Pets';
	petButton.onclick = () => openPetModal(customer);
	const petCell = row.insertCell();
	petCell.appendChild(petButton);
  
  
  
  
  const petModal = document.createElement('div');
  petModal.id = 'pet-modal';
  petModal.style.display = 'none';
  const petContent = document.createElement('div');
  petContent.classList.add('modal-content');
  petModal.appendChild(petContent);
  
  
  function openPetModal(customer) {
	// clear previous content
	petContent.innerHTML = '';
  
  
	// create header with customer name
	const header = document.createElement('h2');
	header.innerText = `${customer.Name}'s Pets`;
	petContent.appendChild(header);
  
  
	if (!customer.Pets || customer.Pets.length === 0) {
	  // customer has no pets, display error message
	  const message = document.createElement('p');
	  message.innerText = 'This customer has no pets.';
	  petContent.appendChild(message);
	} else {
	  // sort pets by type and name
	  const sortedPets = customer.Pets.sort((a, b) => {
		const typeCompare = a.type.localeCompare(b.type);
		return typeCompare !== 0 ? typeCompare : a.Name.localeCompare(b.Name);
	  });
  
  
	  // create table for pets
	  const petTable = document.createElement('table');
  
  
	  // create table header
	  const petHeaderRow = petTable.insertRow();
	  const petTypeHeader = petHeaderRow.insertCell();
	  petTypeHeader.innerText = 'Type';
	  const petNameHeader = petHeaderRow.insertCell();
	  petNameHeader.innerText = 'Name';
  
  
	  // populate table rows
	  sortedPets.forEach((pet) => {
		const petRow = petTable.insertRow();
		const petTypeCell = petRow.insertCell();
		petTypeCell.innerText = pet.type;
		const petNameCell = petRow.insertCell();
		petNameCell.innerText = pet.Name;
	  });
  
  
	  // add table to modal content
	  petContent.appendChild(petTable);
	}
  
  
	// show modal
	petModal.style.display = 'block';
  }
  //add modal to document body
  document.body.appendChild(petModal);
  
  
  // close modal when user clicks outside of it
  petModal.addEventListener('click', (event) => {
	if (event.target === petModal) {
	  petModal.style.display = 'none';
	}
  });
  });
  
  
  // create an input field for the search query
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Search by pet name";
  document.body.appendChild(input);
  
  // add an event listener to the input field to detect when the user submits the search query
  input.addEventListener("keydown", function(event) {
	if (event.key === "Enter") {
	  const searchQuery = input.value.toLowerCase(); // convert search query to lowercase for case-insensitive search
  
	  // check if search query contains only alphabetical characters
	  const alphaRegex = /^[a-zA-Z]+$/;
	  if (!alphaRegex.test(searchQuery)) {
		alert("Search query must contain only alphabetical characters");
		return;
	  }
	  // filter the customers array based on the search query
	  const filteredCustomers = customers.filter(customer => {
		if (customer.Pets){
		  return customer.Pets.some(pet => pet.Name.toLowerCase() === searchQuery );
		}
		return false;
	  });
  
	  filteredCustomers.forEach((customer) => {
	  prompt(customer.Name,'Has this pet name!');
	  })
  }
  });
  
  // create an input field for the search query
  const inputs = document.createElement("input");
  inputs.type = "text";
  inputs.placeholder = "Search by pet type";
  document.body.appendChild(inputs);
  
  // add an event listener to the input field to detect when the user submits the search query
  inputs.addEventListener("keydown", function(event) {
	if (event.key === "Enter") {
	  const searchQuery = inputs.value.toLowerCase(); // convert search query to lowercase for case-insensitive search
	  const alphaRegex = /^[a-zA-Z]+$/;
	  if (!alphaRegex.test(searchQuery)) {
		alert("Search query must contain only alphabetical characters");
		return;
	  }
	  // filter the customers array based on the search query
	  const filteredCustomers = customers.filter(customer => {
		if (customer.Pets){
		  return customer.Pets.some(pet => pet.type.toLowerCase() === searchQuery );
		}
		return false;
	  });
  
	  filteredCustomers.forEach((customer) => {
	  prompt(customer.Name,'Has this pet type!');
	  })
  }
  });
  
	// Append table to the document body
  document.body.appendChild(table);
   
	
  