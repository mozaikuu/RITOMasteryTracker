class Node {
	// constructor
	constructor(element, password) {
		this.element = element;
		this.next = null;
		this.password = password;
	}
}

// linkedlist class
class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	// adds an element at the end
	// of list
	add(element, password) {
		// creates a new node
		let node = new Node(element, password);

		// to store current node
		let current;

		// if list is Empty add the
		// element and make it head
		if (this.head == null) this.head = node;
		else {
			current = this.head;

			// iterate to the end of the
			// list
			while (current.next) {
				current = current.next;
			}

			// add node
			current.next = node;
		}
		this.size++;
	}

	// insert element at the position index
	// of the list
	insertAt(element, index) {
		if (index < 0 || index > this.size)
			return console.log("Please enter a valid index.");
		else {
			// creates a new node
			let node = new Node(element);
			let curr, prev;

			curr = this.head;

			// add the element to the
			// first index
			if (index == 0) {
				node.next = this.head;
				this.head = node;
			} else {
				curr = this.head;
				let it = 0;

				// iterate over the list to find
				// the position to insert
				while (it < index) {
					it++;
					prev = curr;
					curr = curr.next;
				}

				// adding an element
				node.next = curr;
				prev.next = node;
			}
			this.size++;
		}
	}

	// removes an element from the
	// specified location
	removeFrom(index) {
		if (index < 0 || index >= this.size)
			return console.log("Please Enter a valid index");
		else {
			let curr,
				prev,
				it = 0;
			curr = this.head;
			prev = curr;

			// deleting first element
			if (index === 0) {
				this.head = curr.next;
			} else {
				// iterate over the list to the
				// position to remove an element
				while (it < index) {
					it++;
					prev = curr;
					curr = curr.next;
				}

				// remove the element
				prev.next = curr.next;
			}
			this.size--;

			// return the remove element
			return curr.element;
		}
	}

	// removes a given element from the
	// list
	removeElement(element, password) {
		let current = this.head;
		let prev = null;

		// iterate over the list
		while (current != null) {
			// comparing element with current
			// element if found then remove the
			// and return true
			if (current.element === element && current.password === password) {
				if (prev == null) {
					this.head = current.next;
				} else {
					prev.next = current.next;
				}
				this.size--;
				return current.element;
			}

			prev = current;
			current = current.next;
		}
		return -1;
	}

	// finds the index of element
	indexOf(element) {
		let count = 0;
		let current = this.head;

		// iterate over the list
		while (current != null) {
			// compare each element of the list
			// with given element
			if (current.element === element && password === password) return count;
			count++;
			current = current.next;
		}

		// not found
		return -1;
	}

	// checks the list for empty
	isEmpty() {
		return this.size == 0;
	}

	// gives the size of the list
	size_of_list() {
		console.log(this.size);
	}

	// prints the list items
	printList() {
		let curr = this.head;
		let str = "";
		let students = [];

		while (curr) {
			students.push({ name: curr.element, password: curr.password });
			str += curr.element + " ";
			curr = curr.next;
		}
		// console.log(str);
		return students;
	}
}

let students = new LinkedList();

// console.log(students.isEmpty());
students.add("sss", "123123");
// students.printList();
// console.log(students.size_of_list());
students.removeElement("sss", "12ssss3123");
// console.log("Index of 40 " + students.indexOf(40));
// students.insertAt(60, 2);
// console.log("is List Empty ? " + students.isEmpty());
// console.log(students.removeFrom(3));
// students.printList();

console.log("🚀");

let formAdd = () => {
	let form = new FormData(document.getElementById("form"));
	let name = form.get("name");
	let password = form.get("password");

	password != ""
		? students.add(name, password)
		: console.log("Password is empty");
	students.printList();
};

let formRemove = () => {
	let form = new FormData(document.getElementById("form"));
	let name = form.get("name");
	let password = form.get("password");

	students.removeElement(name, password);
	students.printList();
};

let formSearch = () => {
	let form = new FormData(document.getElementById("form"));
	let name = form.get("name");
	let password = form.get("password");

	let index = students.indexOf(name, password);

	index !== -1
		? console.log("Found at index " + index)
		: console.log("Not found");

	let listt = document.getElementById("list");

	listt.innerHTML = "";

	let li = document.createElement("li");

	li.innerText = index !== -1 ? `Found at index ${index + 1} ` : "Not found";

	listt.appendChild(li);

	students.printList();
};

let formDisplay = () => {
	let studentsss = students.printList();
	let listt = document.getElementById("list");

	listt.innerHTML = "";

	studentsss.map((student) => {
		let li = document.createElement("li");
		li.innerText = student.name;
		listt.appendChild(li);
	});
};

console.log("🚀");
