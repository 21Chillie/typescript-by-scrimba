// Defining custom types
type Address = {
	street: string;
	city: string;
	country: string;
};

type Person = {
	name: string;
	age: number;
	isStudent: boolean;
	address?: Address; // menambahkan `?` membuat property tersebut menjadi opsional
};
// -----------------------

let person1: Person = {
	name: "Joe",
	age: 42,
	isStudent: true,
	/*
	address: {
		street: "123 Main",
		city: "California",
		country: "USA",
	},

  Maka dari itu object property address opsional ditambahkan. Tapi hindari melakukan hal ini, karena mengurangi type safety (yang di mana ini tujuan kita menggunakan typescript)
  */
};

let person2: Person = {
	name: "Jill",
	age: 66,
	isStudent: false,
	address: {
		street: "123 Main",
		city: "California",
		country: "USA",
	},
};
