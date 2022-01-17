const student1 = {
    Html: 'Muito bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
};

const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', 
};

const listSkills = (student) => {
    const arraySkills = Object.keys(student);
    for (index in arraySkills) {
        console.log(`${arraySkills[index]}, Nível: ${student[arraySkills[index]]}`);
    }
};

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);