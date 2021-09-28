#Pop Up Anywhere JS Module
This module allows you to create a pop-up menu - like those found in Windows or Mac's right-click. 

##Downloading & Installing
The module can be downloaded directly from [Github](https://ismailisimba.github.io/popupanywhere/popupany.js) and included in your project files for ease of use.
The module can also be imported from [https://ismailisimba.github.io/popupanywhere/popupany.js](https://ismailisimba.github.io/popupanywhere/popupany.js)

##How To Use
The module has three modes. In mode one - auto -, the module will automatically find the space to show your pop up and will apply automatic styles based on the parent element - the element that when clicked will show the popup by the side.

See the code example below:
```javascript
import popupany from "https://ismailisimba.github.io/popupanywhere/popupany.js";

let pop = new popupany();
let obj = {
                        "auto":"auto",
                        "parent":element
                      };
pop.makeAPop(obj)
```

In modes 2 and 3, you can customize styles and sides to show the pop-up. In mode 2, you can add one function which will run every time any of the popup item is clicked. In mode 3, you can add individual objects each with its own content and function to run when clicked.

```javascript
import popupany from "https://ismailisimba.github.io/popupanywhere/popupany.js";

let pop = new popupany();
let obj = {
                        "custom1":"custom1",
                        "parent":document.getElementById("hellobutt"),
                        "style":{
                          "color":"red",
                          "background-color":"white",
                          "font-size":"11px",
                          "height":"18px",
                          "margin":"0px",
                          "padding":"3px",
                          "width":"169px",
                          "z-index":"inherit",
                        },
                       "content":{"basic-action":["val","console.log(val)"],
                        "basiclist-items":["item1","item2","item3"]},
                      };
pop.makeAPop(obj)
```

```javascript
import popupany from "https://ismailisimba.github.io/popupanywhere/popupany.js";

let pop = new popupany();
 let obj = {
                        "custom2":"custom2",
                        "parent":document.getElementById("hellobutt"),
                        "style":{
                          "color":"red",
                          "background-color":"white",
                          "font-size":"11px",
                          "height":"18px",
                          "margin":"0px",
                          "padding":"3px",
                          "width":"169px",
                          "z-index":"inherit",
                        },
                       "content":[{"item":"item1","func":["val","console.log(val)"]},
                                  {"item":"item2","func":["val","console.log(val)"]},
                                  {"item":"item3","func":["val","console.log(val)"]},
                                  {"item":"item4","func":["val","alert(val)"]}]
                      };
pop.makeAPop(obj)
```

##License
Copyright 2021 Ismaili Simba - https://github.com/ismailisimba

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.