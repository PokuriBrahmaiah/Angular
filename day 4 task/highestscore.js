let students = [

    { name: 'brahmaiah', score: 80 },
    
    { name: 'raj', score: 80 },
    
    { name: 'ravi', score: 45 },
    
    { name: 'rahul', score: 93 }
    
    ];
    
    
    
    let highestScore = students.reduce((max, student) => {
    
    return student.score > max.score ? student : max;
    
    }, { score: -Infinity });
    
    
    
    let studentsWithMarks = students.map(student => {
    
    return { ...student, marks: `${student.score}/100` };
    
    });
    
    
    
    console.log('Student with highest score:', highestScore);
    
    console.log('Students with marks:', studentsWithMarks);
    
    