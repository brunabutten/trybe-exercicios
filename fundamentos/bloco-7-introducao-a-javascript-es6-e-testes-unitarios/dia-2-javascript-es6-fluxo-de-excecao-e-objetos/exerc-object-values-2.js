const student = {
    Html: 'Muito bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
};

const listSkillsValues = (student) => {
    const skills = [];
    for (skill in student) {
        skills.push(student[skill]);
    }
    return skills;
};

const listSkillsValues2 = (student) => Object.values(student);

// sem o Object.values
console.log(listSkillsValues(student));

// com o Object.values
console.log(listSkillsValues2(student));