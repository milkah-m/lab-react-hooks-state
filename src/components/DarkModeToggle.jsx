// ### **2️⃣ Implement the Dark Mode Toggle**
// - Implement a **button** that toggles between light and dark mode.
// - The text of the toggle button should change dynamically.
//    - Feel free to also play with styling! However, you'll only be tested on the text of the dark mode toggle button.
// - Use the **useState hook** to manage the current theme.
/* TODO: Update this text from Dark to Light dynamically */ 

import React, {useState} from 'react'

const DarkModeToggle = () => {
  // TODO: Implement dark mode toggle logic

  const [buttonText, setButtonText] = useState(true)


  return (
    <button onClick ={() => setButtonText(!buttonText)}>{buttonText? "Toggle Dark Mode" : "Toggle Light Mode"}</button>
  )
}

  

 

export default DarkModeToggle

//1. set the initial state to be true. buttonText is true 
//2. on the click of the button have setButtonText change the value to the opposite of its current value
//3. if buttonText is true have the button text say toggle dark mode because we will be in light mode otherwise toggle light mode
  //because we will be in dark mode


