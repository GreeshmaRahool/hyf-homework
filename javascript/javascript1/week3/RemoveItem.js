const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];

  const nameToRemove = "Ahmad";
  // Write some code here 
  const IndexOfItemm = names.indexOf(nameToRemove);
  names.splice(IndexOfItemm,1);
  // Code done
  console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']