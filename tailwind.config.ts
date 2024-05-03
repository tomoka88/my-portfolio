import { Config } from 'tailwindcss';

const config: Config = {
 darkMode: 'media', // ダークモードの設定を 'media' または 'class' に設定
 theme: {
    extend: {
      colors: {
        'background-start': '#d6dbdc', // 明るい背景色
        'background-end': '#ffffff',    // 終わりの背景色
        'foreground': '#000000',       // テキスト色
        'dark-background-start': '#000000',
        'dark-background-end': '#000000',
        'dark-foreground': '#ffffff',
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
 },
 variants: {
    extend: {},
 },
 plugins: [],
 content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // Adjust this path according to your project structure
 ],
};

export default config;


// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;
