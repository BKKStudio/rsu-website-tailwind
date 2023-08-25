
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'comfortaa': ['Comfortaa', 'cursive'],
        'sriracha': ['Sriracha', 'cursive'],
        'anuphan': ['Anuphan', 'sans-serif'],
      },
      keyframes:{
        'animation-manu':{
          '0%,100%':{transform:'scale(100%)'},
          '25%':{transform:'scale(110%)'},
          '50%':{transform:'scale(120%)'},
          '75%':{transform:'scale(110%)'},
        },
        'animation-shake':{
            '0%,100%':{transform:'rotate(3deg)'},
          '25%':{transform:'rotate(-3deg)'},
          '50%':{transform:'rotate(3deg)'},
          '75%':{transform:'rotate(-3deg)'},
        },
        'animation-shakebtn':{
          '0%,100%':{transform:'rotate(3deg)'},
          '25%':{transform:'rotate(-3deg)'},
          '50%':{transform:'rotate(3deg)',},
          '75%':{transform:'rotate(-3deg)',},
        }

      },
      animation:{
        'animation-manu':'animation-manu 1s ease-in infinite' ,
        'animation-shake':'animation-shake .5s ease-in 1' ,
        'animation-shakebtn':'animation-shakebtn .5s ease-in infinite' ,
      },
      boxShadow: {
        '3xl': '0px 0px 8px 0px black',
      },
      height: {
        '105': '43rem',
      },
      width: {
        '106': '35rem',
      },  
      margin: {
        '10': '15rem',
        '12':'20rem',
      }

     
    },
  },
  plugins: []
}