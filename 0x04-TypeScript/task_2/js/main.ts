interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;

}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;

}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffe break';
    }

    workDirectorTasks(): string {
        return 'getting to director tasks';
    }
        
    }

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'cannot work from home'
    }
    getCoffeeBreak(): string {
        return 'cannot have a break';
    }

    workTeacherTasks(): string {
        return 'getting to work';
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher) {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    } else {
        console.log(employee.workTeacherTasks());
    }
}


//type literals

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else if (todayClass === 'History') {
        return 'Teaching History';
    }
}