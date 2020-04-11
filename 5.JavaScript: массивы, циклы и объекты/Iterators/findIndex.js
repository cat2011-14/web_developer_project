const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(elem=>{
  return elem==='elephant';
});

const startsWithS = animals.findIndex(elem=>{
  return elem[0]==='s';
})
