import fs from 'fs';

// fs.writeFile('Amrit.txt', 'Hello Amrit', (err) => {
//     if (err) throw err;
//     console.log('File is created successfully.');
// });

// fs.readFile('Amrit.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// });
try{
const a= await fs.promises.readFile('./Fs/Abi.txt');
}
catch(error){
    const b= await fs.promises.writeFile('./Fs/Abi.txt' );
    console.log('error');
    
}
for (let index = 0; index < 10; index++) {
    const data= await fs.promises.appendFile('./Fs/Abi.txt', `Hello Abi ${index} \n`); 
       
}


