/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ['./app/**/*.{js,jsx,ts,tsx}', '*.{jsx,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins-Regular',
        poppinsBold: 'Poppins-Bold',
        poppinsMedium: 'Poppins-Medium',
        poppinsBlack: 'Poppins-Black',
      },
    },
  },
  plugins: [],
};
