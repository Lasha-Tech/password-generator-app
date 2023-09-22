import { useState } from 'react'


function App() {
  //States
  const [passwordOpacity, setPasswordOpacity] = useState(0.25)
  const [characterLength, setCharacterLength] = useState(0)
  const [passwordStrength, setPasswordStrength] = useState()
  const [password, setPassword] = useState('P4$5W0rD!')
  const [copy, setCopy] = useState(false)
  //Password Type
  const [uppercase, setUpperCase] = useState(false);
  const [lowercase, setLowerCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  //Password Strength Color
  const [firstColor, setFirstColor] = useState('#080708');
  const [secondColor, setSecondColor] = useState('#080708');
  const [thirdColor, setThirdColor] = useState('#080708');
  const [fourthColor, setFourthColor] = useState('#080708');
  //Password Strength Border Color
  const [firstColorBorder, setFirstColorBorder] = useState('2px solid #E6E5EA');
  const [secondColorBorder, setSecondColorBorder] = useState('2px solid #E6E5EA');
  const [thirdColorBorder, setThirdColorBorder] = useState('2px solid #E6E5EA');
  const [fourthColorBorder, setFourthColorBorder] = useState('2px solid #E6E5EA');
  //Random Password Characters
  const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const numbers = '1234567890'
  const symbols = '!@#$%^&/?'
  //True Value Counter
  const array = [uppercase, lowercase, number, symbol];
  const filter = array.filter(e => e == true)
  //Password Generator Function
  const passwordGenerator = () => {
    let pass = '';
    if(array[0]) {
      pass += upperCaseLetters 
    }
    if(array[1]) {
      pass += lowerCaseLetters
    }
    if(array[2]) {
      pass += numbers
    }
    if(array[3]) {
      pass += symbols
    }
    setPassword(createRandomPassword(pass))
  }
  const createRandomPassword = (pass) => {
    let finalPassword = ''
    const passLength = pass.length

    for(let i = 0; i < characterLength; i++) {
      const randomNumber = Math.floor(Math.random() * passLength);
      finalPassword += pass.charAt(randomNumber)
    }
    return finalPassword
  }
  //Generate Password Strength Colors
  const generatePasswordStrength = () => {
  if(filter.length == 0) {
    if(characterLength >= 0) {
      setFirstColor('#080708')
      setSecondColor('#080708')
      setThirdColor('#080708')
      setFourthColor('#080708')
      setFirstColorBorder('2px solid #E6E5EA')
      setSecondColorBorder('2px solid #E6E5EA')
      setThirdColorBorder('2px solid #E6E5EA')
      setFourthColorBorder('2px solid #E6E5EA')
      setPasswordStrength('')
      setPassword('P4$5W0rD!')
      setPasswordOpacity(0.25)
    }
  } else if(filter.length == 1) {
    if(characterLength <= 0) {
      setFirstColor('#080708')
      setSecondColor('#080708')
      setThirdColor('#080708')
      setFourthColor('#080708')
      setFirstColorBorder('2px solid #E6E5EA')
      setSecondColorBorder('2px solid #E6E5EA')
      setThirdColorBorder('2px solid #E6E5EA')
      setFourthColorBorder('2px solid #E6E5EA')
      setPasswordStrength('')
      setPassword('P4$5W0rD!')
      setPasswordOpacity(0.25)
    }
    if(characterLength > 0 && characterLength < 5) {
      setPasswordOpacity(1)
      setFirstColor('#F64A4A')
      setSecondColor('#080708')
      setThirdColor('#080708')
      setFourthColor('#080708')
      setFirstColorBorder('2px solid #F64A4A')
      setSecondColorBorder('2px solid #E6E5EA')
      setThirdColorBorder('2px solid #E6E5EA')
      setFourthColorBorder('2px solid #E6E5EA')
      setPasswordStrength('TOO WEAK!')
    }
    if(characterLength > 5 && characterLength < 10) {
      setPasswordOpacity(1)
      setFirstColor('#FB7C58')
      setSecondColor('#FB7C58')
      setThirdColor('#080708')
      setFourthColor('#080708')
      setFirstColorBorder('2px solid #FB7C58')
      setSecondColorBorder('2px solid #FB7C58')
      setThirdColorBorder('2px solid #E6E5EA')
      setFourthColorBorder('2px solid #E6E5EA')
      setPasswordStrength('WEAK')
    } 
    if(characterLength > 10 && characterLength < 15) {
      setPasswordOpacity(1)
      setFirstColor('#F8CD65')
      setSecondColor('#F8CD65')
      setThirdColor('#F8CD65')
      setFourthColor('#080708')
      setFirstColorBorder('#F8CD65')
      setSecondColorBorder('#F8CD65')
      setThirdColorBorder('#F8CD65')
      setFourthColorBorder('2px solid #E6E5EA')
      setPasswordStrength('MEDIUM')
    }
    if(characterLength > 15) {
      setPasswordOpacity(1)
      setFirstColor('#A4FFAF')
      setSecondColor('#A4FFAF')
      setThirdColor('#A4FFAF')
      setFourthColor('#A4FFAF')
      setFirstColorBorder('#A4FFAF')
      setSecondColorBorder('#A4FFAF')
      setThirdColorBorder('#A4FFAF')
      setFourthColorBorder('#A4FFAF')
      setPasswordStrength('STRONG')
    } 
  } else if(filter.length == 2) {
    if(characterLength <= 0) {
      setFirstColor('#080708')
      setSecondColor('#080708')
      setThirdColor('#080708')
      setFourthColor('#080708')
      setFirstColorBorder('2px solid #E6E5EA')
      setSecondColorBorder('2px solid #E6E5EA')
      setThirdColorBorder('2px solid #E6E5EA')
      setFourthColorBorder('2px solid #E6E5EA')
      setPasswordStrength('')
      setPassword('P4$5W0rD!')
      setPasswordOpacity(0.25)
    }
    if(characterLength > 0 && characterLength < 5) {
      setPasswordOpacity(1)
      setFirstColor('#F64A4A')
      setSecondColor('#080708')
      setThirdColor('#080708')
      setFourthColor('#080708')
      setFirstColorBorder('2px solid #F64A4A')
      setSecondColorBorder('2px solid #E6E5EA')
      setThirdColorBorder('2px solid #E6E5EA')
      setFourthColorBorder('2px solid #E6E5EA')
      setPasswordStrength('TOO WEAK!')
    }
    if(characterLength > 5 && characterLength < 10) {
      setPasswordOpacity(1)
      setFirstColor('#FB7C58')
      setSecondColor('#FB7C58')
      setThirdColor('#080708')
      setFourthColor('#080708')
      setFirstColorBorder('2px solid #FB7C58')
      setSecondColorBorder('2px solid #FB7C58')
      setThirdColorBorder('2px solid #E6E5EA')
      setFourthColorBorder('2px solid #E6E5EA')
      setPasswordStrength('WEAK')
    }
    if(characterLength > 10 && characterLength < 15) {
      setPasswordOpacity(1)
      setFirstColor('#F8CD65')
      setSecondColor('#F8CD65')
      setThirdColor('#F8CD65')
      setFourthColor('#080708')
      setFirstColorBorder('#F8CD65')
      setSecondColorBorder('#F8CD65')
      setThirdColorBorder('#F8CD65')
      setFourthColorBorder('2px solid #E6E5EA')
      setPasswordStrength('MEDIUM')
    }
    if(characterLength > 15) {
      setPasswordOpacity(1)
      setFirstColor('#A4FFAF')
      setSecondColor('#A4FFAF')
      setThirdColor('#A4FFAF')
      setFourthColor('#A4FFAF')
      setFirstColorBorder('#A4FFAF')
      setSecondColorBorder('#A4FFAF')
      setThirdColorBorder('#A4FFAF')
      setFourthColorBorder('#A4FFAF')
      setPasswordStrength('STRONG')
    }
  } else if(filter.length == 3) {
    if(characterLength <= 0) {
      setFirstColor('#080708')
      setSecondColor('#080708')
      setThirdColor('#080708')
      setFourthColor('#080708')
      setFirstColorBorder('2px solid #E6E5EA')
      setSecondColorBorder('2px solid #E6E5EA')
      setThirdColorBorder('2px solid #E6E5EA')
      setFourthColorBorder('2px solid #E6E5EA')
      setPasswordStrength('')
      setPassword('P4$5W0rD!')
      setPasswordOpacity(0.25)
    }
    if(characterLength > 0 && characterLength < 5) {
      setPasswordOpacity(1)
      setFirstColor('#F64A4A')
      setSecondColor('#080708')
      setThirdColor('#080708')
      setFourthColor('#080708')
      setFirstColorBorder('2px solid #F64A4A')
      setSecondColorBorder('2px solid #E6E5EA')
      setThirdColorBorder('2px solid #E6E5EA')
      setFourthColorBorder('2px solid #E6E5EA')
      setPasswordStrength('TOO WEAK!')
    }
    if(characterLength > 5 && characterLength < 10) {
      setPasswordOpacity(1)
      setFirstColor('#FB7C58')
      setSecondColor('#FB7C58')
      setThirdColor('#080708')
      setFourthColor('#080708')
      setFirstColorBorder('2px solid #FB7C58')
      setSecondColorBorder('2px solid #FB7C58')
      setThirdColorBorder('2px solid #E6E5EA')
      setFourthColorBorder('2px solid #E6E5EA')
      setPasswordStrength('WEAK')
    }
    if(characterLength > 10 && characterLength < 15) {
      setPasswordOpacity(1)
      setFirstColor('#F8CD65')
      setSecondColor('#F8CD65')
      setThirdColor('#F8CD65')
      setFourthColor('#080708')
      setFirstColorBorder('#F8CD65')
      setSecondColorBorder('#F8CD65')
      setThirdColorBorder('#F8CD65')
      setFourthColorBorder('2px solid #E6E5EA')
      setPasswordStrength('MEDIUM')
    }
    if(characterLength > 15) {
      setPasswordOpacity(1)
      setFirstColor('#A4FFAF')
      setSecondColor('#A4FFAF')
      setThirdColor('#A4FFAF')
      setFourthColor('#A4FFAF')
      setFirstColorBorder('#A4FFAF')
      setSecondColorBorder('#A4FFAF')
      setThirdColorBorder('#A4FFAF')
      setFourthColorBorder('#A4FFAF')
      setPasswordStrength('STRONG')
    }
  } else if(filter.length == 4) {
    if(characterLength <= 0) {
      setFirstColor('#080708')
      setSecondColor('#080708')
      setThirdColor('#080708')
      setFourthColor('#080708')
      setFirstColorBorder('2px solid #E6E5EA')
      setSecondColorBorder('2px solid #E6E5EA')
      setThirdColorBorder('2px solid #E6E5EA')
      setFourthColorBorder('2px solid #E6E5EA')
      setPasswordStrength('')
      setPassword('P4$5W0rD!')
      setPasswordOpacity(0.25)
    }
    if(characterLength > 0 && characterLength < 5) {
      setPasswordOpacity(1)
      setFirstColor('#F64A4A')
      setSecondColor('#080708')
      setThirdColor('#080708')
      setFourthColor('#080708')
      setFirstColorBorder('2px solid #F64A4A')
      setSecondColorBorder('2px solid #E6E5EA')
      setThirdColorBorder('2px solid #E6E5EA')
      setFourthColorBorder('2px solid #E6E5EA')
      setPasswordStrength('TOO WEAK!')
    }
    if(characterLength > 5 && characterLength < 10) {
      setPasswordOpacity(1)
      setFirstColor('#FB7C58')
      setSecondColor('#FB7C58')
      setThirdColor('#080708')
      setFourthColor('#080708')
      setFirstColorBorder('2px solid #FB7C58')
      setSecondColorBorder('2px solid #FB7C58')
      setThirdColorBorder('2px solid #E6E5EA')
      setFourthColorBorder('2px solid #E6E5EA')
      setPasswordStrength('WEAK')
    }
    if(characterLength > 10 && characterLength < 15) {
      setPasswordOpacity(1)
      setFirstColor('#F8CD65')
      setSecondColor('#F8CD65')
      setThirdColor('#F8CD65')
      setFourthColor('#080708')
      setFirstColorBorder('#F8CD65')
      setSecondColorBorder('#F8CD65')
      setThirdColorBorder('#F8CD65')
      setFourthColorBorder('2px solid #E6E5EA')
      setPasswordStrength('MEDIUM')
    }
    if(characterLength > 15) {
      setPasswordOpacity(1)
      setFirstColor('#A4FFAF')
      setSecondColor('#A4FFAF')
      setThirdColor('#A4FFAF')
      setFourthColor('#A4FFAF')
      setFirstColorBorder('#A4FFAF')
      setSecondColorBorder('#A4FFAF')
      setThirdColorBorder('#A4FFAF')
      setFourthColorBorder('#A4FFAF')
      setPasswordStrength('STRONG')
    }
    }
  }
  //Copy Function
  const copyFunc = () => {
    navigator.clipboard.writeText(password);
    setCopy(true)
    setTimeout(() => {
      setCopy(false)
    }, 1000)
  }

  return (
    <div className='App'>
      <div className='wrapper'>
        <p className='project-title'>Password Generator</p>
        <div className='password-generator'>
            <p className='generated-password' style={{opacity: passwordOpacity}}>{password}</p>
            <div className='copy-div'>
            {copy && <p>COPIED</p>}
            <svg onClick={() => copyFunc()} className='copy' width="21" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"/></svg>
            </div>
        </div>

        <div className='main'>
          <div className='character-length'>
            <p className='length-title'>Character Length</p>
            <p className='length-number'>{characterLength}</p>
          </div>

        <div className='input-range-div'>
          <div className='input-second-color' style={{width: `${characterLength * 4.8}%`}}></div>
          <input className='range' type='range' min='1' max='20' step='1'
          value={characterLength}
          onChange={e => setCharacterLength(e.target.value)}/>
        </div>  
        
        <div className='form'>
          <form action="">
            <div className='checkbox'>
              <input onChange={e => {
                setUpperCase(e.target.checked)
              }} id='uppercase-letters' type="checkbox" value='uppercase-letters' name='check'/>
              <label htmlFor='uppercase-letters'>Include Uppercase Letters</label>
            </div>

            <div className='checkbox'>
              <input onChange={e => {
                setLowerCase(e.target.checked)
              }} id='lowercase-letters' type="checkbox" value='lowercase-letters' name='check'/>
              <label htmlFor='lowercase-letters'>Include Lowercase Letters</label>
            </div>

            <div className='checkbox'>
              <input onChange={e => {
                setNumber(e.target.checked)
              }} id='numbers' type="checkbox" value='numbers' name='check'/>
              <label htmlFor='numbers'>Include Numbers</label>
            </div>

            <div className='checkbox'>
              <input onChange={e => {
                setSymbol(e.target.checked)
              }} id='symbols' type="checkbox" value='symbols' name='check'/>
              <label htmlFor='symbols'>Include Symbols</label>
            </div>
          </form>
        </div>

    <div className='footer'>
      <div className='password-strength-div'>
        <p>STRENGTH</p>
        <div className='password-strength'>
          <p>{passwordStrength}</p>
          <div className='strength-blocks'>
            <div style={{backgroundColor: firstColor, border: firstColorBorder}}></div>
            <div style={{backgroundColor: secondColor, border: secondColorBorder}}></div>
            <div style={{backgroundColor: thirdColor, border: thirdColorBorder}}></div>
            <div style={{backgroundColor: fourthColor, border: fourthColorBorder}}></div>
          </div>
        </div>
      </div>

      <div className='generate' onClick={() => {
        passwordGenerator()
        generatePasswordStrength()
      }}>
        <p>GENERATE 
        <svg className='arrow' width= '11px' height= '12px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
        </p>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default App


