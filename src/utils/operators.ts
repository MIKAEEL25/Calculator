interface ButtonsConfig {
  label: string;
  value: string;
  type: string;
  bg?: string;
}

export const MAIN_BUTTONS: ButtonsConfig[] = [
  { label: 'AC', value: 'AC', type: 'function', bg: 'bg-red-500' },
  { label: 'C', value: 'C', type: 'function', bg: 'bg-red-500' },
  { label: '%', value: '%', type: 'function', bg: 'bg-gray-700' },
  { label: '÷', value: '/', type: 'operator', bg: 'bg-orange-700' },
  { label: '7', value: '7', type: 'number' },
  { label: '8', value: '8', type: 'number' },
  { label: '9', value: '9', type: 'number' },
  { label: '×', value: '*', type: 'operator', bg: 'bg-orange-700' },
  { label: '4', value: '4', type: 'number' },
  { label: '5', value: '5', type: 'number' },
  { label: '6', value: '6', type: 'number' },
  { label: '-', value: '-', type: 'operator', bg: 'bg-orange-700' },
  { label: '1', value: '1', type: 'number' },
  { label: '2', value: '2', type: 'number' },
  { label: '3', value: '3', type: 'number' },
  { label: '+', value: '+', type: 'operator', bg: 'bg-orange-700' },
  { label: '0', value: '0', type: 'number', bg: 'bg-gray-900 col-span-2' },
  { label: '.', value: '.', type: 'number', bg: 'bg-gray-600' },
  { label: '=', value: '=', type: 'operator', bg: 'bg-violet-900' },
];

export const SCI_BUTTONS : ButtonsConfig[] = [
  {
    label: 'sin',
    value: 'sin(',
    type: 'function',
    bg: 'bg-red-200 text-blue-800',
  },
  {
    label: 'cos',
    value: 'cos(',
    type: 'function',
    bg: 'bg-red-200 text-blue-800',
  },
  {
    label: 'tan',
    value: 'tan(',
    type: 'function',
    bg: 'bg-red-200 text-blue-800',
  },
  {
    label: 'cot',
    value: 'cot(',
    type: 'function',
    bg: 'bg-red-200 text-blue-800',
  },
  {
    label: 'log',
    value: 'log(',
    type: 'function',
    bg: 'bg-red-200 text-blue-800',
  },
  {
    label: 'log10',
    value: 'log10(',
    type: 'function',
    bg: 'bg-yellow-200 text-blue-800',
  },
  {
    label: '√',
    value: 'sqrt(',
    type: 'function',
    bg: 'bg-yellow-200 text-blue-800',
  },
  {
    label: 'ⁿ√y',
    value: 'nthRoot(',
    type: 'function',
    bg: 'bg-yellow-200 text-blue-800',
  },
  {
    label: '^',
    value: '^',
    type: 'operator',
    bg: 'bg-yellow-200 text-blue-800',
  },
  {
    label: 'x!',
    value: '!',
    type: 'function',
    bg: 'bg-yellow-200 text-blue-800',
  },
  { label: 'π', value: 'pi', type: 'number', bg: 'bg-sky-300 text-blue-800' },
  { label: 'e', value: 'e', type: 'number', bg: 'bg-sky-300 text-blue-800' },

  {
    label: 'exp',
    value: 'exp(',
    type: 'function',
    bg: 'bg-sky-300 text-blue-800',
  },
  {
    label: 'abs',
    value: 'abs(',
    type: 'function',
    bg: 'bg-sky-300 text-blue-800',
  },
  {
    label: 'rand',
    value: 'random()',
    type: 'function',
    bg: 'bg-sky-300 text-blue-800',
  },
  {
    label: 'mean',
    value: 'mean(',
    type: 'function',
    bg: 'bg-orange-200 text-blue-800',
  },
  {
    label: 'ceil',
    value: 'ceil(',
    type: 'function',
    bg: 'bg-orange-200 text-blue-800',
  },
  {
    label: 'floor',
    value: 'floor(',
    type: 'function',
    bg: 'bg-orange-200 text-blue-800',
  },
  {
    label: 'round',
    value: 'round(',
    type: 'function',
    bg: 'bg-orange-200 text-blue-800',
  },
  {
    label: 'bin',
    value: 'bin(',
    type: 'function',
    bg: 'bg-orange-200 text-blue-800',
  },
  {
    label: 'gcd',
    value: 'gcd(',
    type: 'function',
    bg: 'bg-secondary text-blue-800',
  },
  {
    label: 'lcm',
    value: 'lcm(',
    type: 'function',
    bg: 'bg-secondary text-blue-800',
  },
  {
    label: ',',
    value: ',',
    type: 'operator',
    bg: 'bg-secondary text-blue-800',
  },
  {
    label: '(',
    value: '(',
    type: 'operator',
    bg: 'bg-secondary text-blue-800',
  },
  {
    label: ')',
    value: ')',
    type: 'operator',
    bg: 'bg-secondary text-blue-800',
  },
];
