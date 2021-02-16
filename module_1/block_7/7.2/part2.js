const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const addObjectParameter = (object, key, value) => object[key] = value;

  const listObjectKeys = (object) => {
    const keys = Object.keys(object);
    console.log(keys);
  }

  const showObjectLength = (object) => console.log(Object.keys(object).length);

  const listObjectValues = (object) => {
    const values = Object.values(object);
    console.log(values);
  }

  addObjectParameter(lesson2, 'turno', 'manhã');
  console.table(lesson2);
  listObjectKeys(lesson2);
  showObjectLength(lesson2);
  listObjectValues(lesson2);

  const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});
  console.log(allLessons);