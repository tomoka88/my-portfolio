import { Plugin } from 'postcss';

const plugins: Plugin[] = [
  require('tailwindcss'),
  require('autoprefixer'),
];

// Assign the object to a variable
const config = {
    plugins,
   };
   
   // Export the variable as the default module export
export default config;