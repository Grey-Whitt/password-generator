# Password Generator 

## Description:  

The goal for this project was to write a JavaScript function that generates a password with the given properties that the user sets and meet the bellow criteria.


```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

```


# Table of Contents

- [Repository](#repository)
- [Examples](#examples)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Questions](#questions)
- [Contributions](#contributing)
- [License](#license)

## Repository:

---

- [My Github Profile](https://github.com/Grey-Whitt)

- [This Repository](https://github.com/Grey-Whitt/portfolio-v3)

- [Deployed Application](https://grey-whitt.github.io/password-generator/)

## Examples

---

This is the main function that generates the password
```
//arrays for characters 
var lowerChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//converts lowercase array to uppercase array 
var upperChars = lowerChars.map(function(toUp) {return toUp.toUpperCase()});

var specialChars = ['!','@','#','$','%','^','&','*','(',')','-','_','=','+'];

numChar = ['0','1','2','3','4','5','6','7','8','9'];

  //while output for generated password is not equal to desired length 
  while(outputPass.length !== length) {
    //randomly selects characters from allowed characters array
    randChar = allowChar[Math.floor(Math.random() * allowChar.length)];
    //then adds randomly selected character to outputPass (generated password)
    outputPass = outputPass + randChar;

  }
  //returns generated password
  return outputPass;
}
```


## Usage

---

Visit the [site](https://grey-whitt.github.io/password-generator/) and click Generate Password

## Technologies Used

---
HTML
CSS
JavaScript

## Questions

---

If you have any questions feel free to email me or find me on LinkedIn

[greywhitt@gmail.com](mailto:greywhitt@gmail.com)

[My LinkedIn](https://www.linkedin.com/in/grey-whittenberger)

[www.greywhitt.com](www.greywhitt.com)

## Contributing:

---

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.1%20adopted-ff69b4.svg)](./uploads/CODE_OF_CONDUCT.md)

Contributions, issues and feature requests are welcome.

## License:

---

![MIT License](https://img.shields.io/badge/license-MIT-blue)

Copyright 2022 Grey Whittenberger

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

For more information about licenses, please visit:
[License](https://opensource.org/licenses/MIT)
