function fetchData() {
    // Replace 'Sok Dara' with your full name
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('Data fetched! Student Name: Sok Dara'), 1000);
    });
  }
  
  async function fetchAndProcessData() {
    try {
      // Replace 'Sok Dara' with your full name
      console.log('Student Name: Mang Chhunleang');
      console.log('Using async/await:');
      
      const data = await fetchData();
      console.log(data);
      
      const processed = 'Processing data...';
      console.log(processed);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchAndProcessData();
  