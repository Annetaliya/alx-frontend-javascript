interface Teacher {
    firstName: string;
    lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    yearsOfExperience: 3,
    location: 'London',
    contract: false,
  };

  //interface named Directors that extends Teacher

  interface Directors extends Teacher {
    numberofReports: number;
  }



  //function for printing teacher interface

  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }

  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    const name = firstName.charAt(0);
    return `${name}. ${lastName}`;
  };

  console.log(printTeacher('John', 'Doe'));


 interface Student {
  firstName: string;
  lastName: string;

 }

 class StudentClass implements Student {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return 'currently working';
  }

  displayName(): string {
    return this.firstName;
  }

 }

 const student = new StudentClass('john', 'Doe');
 console.log(student.workOnHomework());
 console.log(student.displayName());