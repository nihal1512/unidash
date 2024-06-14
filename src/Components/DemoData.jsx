// src/data/demoData.js
const demoData = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    deployTime: `Demo Time ${index + 1}`,
    progress: `Progress ${index + 1}`,
    holders: `Holders ${index + 1}`,
    transactions: `Transactions ${index + 1}`
  }));
  
  export default demoData;
  