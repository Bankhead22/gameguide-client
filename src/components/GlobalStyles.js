const { createGlobalStyle } = require('styled-components')

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: grey;
    border-radius: 3rem;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
    }
    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        background-color: #212529;
        color: #fff;

    }
    h2{
        font-size: 3rem;
        font-weight: lighter;
        color: #fff;

    }
    h3{
        font-size: 1.3rem;
        color: #d6d4d4;
        padding: 1.5rem 0;
    }
    p{
        color: #d6d4d4;
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
        line-height: 1.4;
    }
    a{
        text-decoration: none;
        color: #333;

    }
    img{
        display: block;
    }
    input{
        font-family: 'Montserrat', sans-serif;

    }
`

export default GlobalStyles
