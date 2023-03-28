const name = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'];

function searchName(keyword, limit, callback) {
  const result = name.filter((nama) => nama.toLowerCase().includes(keyword.toLowerCase())).slice(0, limit);
  callback(result);
}

searchName("an", 3, (result) => {
  console.log(result); 
});