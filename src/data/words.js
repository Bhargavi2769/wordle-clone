export const WORD_LIST = [
    'REACT',
    'BREAK',
    'CLEAN',
    'DREAM',
    'FLASH',
    'GUARD',
    'HEART',
    'LIGHT',
    'MUSIC',
    'PAINT',
    'QUICK',
    'SMILE',
    'THINK',
    'WATER',
    'WORLD'
  ];
  
  export const getRandomWord = () =>
    WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
  