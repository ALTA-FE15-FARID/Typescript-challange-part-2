//Diamond

function generateDiamond(letter: string): void {
    const charCodeA = 'A'.charCodeAt(0);
    const targetCharCode = letter.toUpperCase().charCodeAt(0);
  
    const size = targetCharCode - charCodeA + 1;
    const maxSpaces = size - 1;
  
    // Top half of the diamond
    for (let i = 0; i < size; i++) {
      const currentLetter = String.fromCharCode(charCodeA + i);
      const spaces = maxSpaces - i;
      const row = ' '.repeat(spaces) + currentLetter + ' '.repeat(i === 0 ? 0 : i * 2 - 1) + currentLetter;
      console.log(row);
    }
  
    // Bottom half of the diamond
    for (let i = size - 2; i >= 0; i--) {
      const currentLetter = String.fromCharCode(charCodeA + i);
      const spaces = maxSpaces - i;
      const row = ' '.repeat(spaces) + currentLetter + ' '.repeat(i === 0 ? 0 : i * 2 - 1) + currentLetter;
      console.log(row);
    }
  }
  
  // Test cases
  console.log('Test Case 1:');
  generateDiamond('C');
  
  console.log('\nTest Case 2:');
  generateDiamond('E');
  