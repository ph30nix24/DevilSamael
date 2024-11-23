/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#72D7D9',
        light: '#F5F5F5',
        lightButton: '#D350F5',
        slightBlue: '#6462FC',
      },
      backgroundImage: {
        hero : 'linear-gradient(348deg, rgba(34,193,195,1) 0%, rgba(255,255,255,1) 67%)',
        heroDark: 'linear-gradient(35deg, rgba(7,7,7,1) 60%, rgba(110,109,109,1) 100%);',
        HomeAbout: 'linear-gradient(90deg, rgba(142,224,225,1) 0%, rgba(56,195,197,1) 60%)',
        HomeServicesBg: 'linear-gradient(191deg, rgba(56,195,197,1) 0%, rgba(255,255,255,1) 100%)',
        HomeWork: 'linear-gradient(185deg, rgba(207,240,241,1) 0%, rgba(239,250,250,1) 20%, rgba(231,138,146,1) 80%)',
        News: 'linear-gradient(186deg, rgba(231,138,146,1) 9%, rgba(255,255,255,1) 60%)',
        buttomBg: 'linear-gradient(191deg, rgba(0, 0, 0 ,1) 0%, rgba(40,40,40,1) 100%)',
      },     
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        para: ['Montserrat Alternates', 'sans-serif'],
        hero: ['SUSE', 'sans-serif'],
        heroTitle: ["Titillium Web", 'sans-serif'],
        counting: ["Cormorant Garamond", "serif"],
      },
      colors: {
        lightButton: '#D350F5',
      },
      boxShadow: {
        heroPink: '-8px -16px 66px 5px rgba(254, 168, 175, 1), 8px 16px 66px 5px rgba(254, 168, 175, 1)',
        heroWhite: '-8px -16px 66px 5px rgba(0, 0, 0, 0.15), 8px 16px 66px 5px rgba(0, 0, 0, 0.1)',
        heroVoilet: '-8px -16px 66px 5px rgba(238,168,254, 1), 8px 16px 66px 5px rgba(238,168,254, 1)',
        heroRed: '-8px -16px 66px 5px rgba(240, 48, 93, 1), 8px 16px 66px 5px rgba(240, 48, 93, 1)',
        heroYellow: '-8px -16px 66px 5px rgba(230, 156, 134, 1), 8px 16px 66px 5px rgba(230, 156, 134, 1)',
        Experience : 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        how : 'rgba(0, 0, 0, 0.5) 0px 4px 10px',
        blogImage: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
      }
    },
  },
  plugins: [
    // require('@tailwindcss/line-clamp'),
  ],
  darkMode: 'class',
}

