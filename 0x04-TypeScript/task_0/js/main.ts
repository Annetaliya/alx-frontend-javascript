interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Annette',
    lastName: 'Alia',
    age: 59,
    location: 'Madagascar'
};

const student2: Student = {
    firstName: 'Aliyah',
    lastName: 'Fenty',
    age: 33,
    location: 'Cairo'
};

const studentList: Student[] = [student1, student2];

const table = document.getElementById('studentTable') as HTMLTableElement;

studentList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);

	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
})