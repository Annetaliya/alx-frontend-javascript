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


  const director: Directors = {
    firstName: 'Leah',
    lastName: 'wakala',
    fullTimeEmployee: true,
    location: 'Kigali',
    contract: false,
    numberOfReports: 6

  };
  console.log(director.firstName);
  console.log(director.lastName);
  console.log(director.numberOfReports);

  //function for printing teacher interface

  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }

  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    const name = firstName.charAt(0);
    return `${name}. ${lastName}`;
  };

  console.log(printTeacher('John', 'Doe'));
