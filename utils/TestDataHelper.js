// import testData from '../test-data/testdata.json';

// function getTestData(key) {
//     const data = testData[key];
//     if (!data) {
//         throw new Error(`Test data not found for: ${key}`);
//     }
//     return data;
// }

// export { getTestData }; 


import { join } from 'path'; 
 
function loadTestData(fileName, testId) { 
  try { 
    // Build file path dynamically 
    const filePath = join(__dirname, `../test-data/${fileName}.json`); 
     
    // Load JSON file 
    const testData = require(filePath); 
 
    const data = testData[testId]; 
 
    if (!data) { 
      throw new Error(`Test data not found for ${testId} in ${fileName}.json`); 
    } 
 
 
 
    return data; 
  } catch (error) { 
    throw new Error(`Error loading test data file: ${fileName}.json\n${error.message}`); 
  } 
} 
 
export { loadTestData }; 