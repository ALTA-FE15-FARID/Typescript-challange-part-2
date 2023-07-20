//Cetak Tabel Perkalian

function generateMultiplicationTable(n: number): void {
    for (let i = 1; i <= n; i++) {
      let row = '';
      for (let j = 1; j <= n; j++) {
        const product = i * j;
        row += `${product.toString().padStart(3, ' ')} `;
      }
      console.log(row);
    }
  }
  
  // Test case
  generateMultiplicationTable(9);
  