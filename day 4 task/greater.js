let students = [

    { name: 'ram', score: 90 },
    
    { name: 'arun', score: 70 },
    
    { name: 'arjun', score: 60 },
    
    { name: 'ram', score: 80 }
    
    ];
    

    
    let passedStudents = students.filter(student => {
    
    return (student.score / 100) * 100 >= 70;
    
    });
    
    
    
    console.log('Passed students:', passedStudents);