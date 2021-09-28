const settingsObject = {};
const inputObj = {}
const currMode = ["auto","custom"];
const popUp = {};

window.onload = ()=>{
    document.querySelectorAll(".inputtop").forEach(ele=>{
        updateInputObj({id:ele.id,val:ele.value})
        ele.addEventListener("input",()=>{
                updateInputObj({id:ele.id,val:ele.value});
            
        })
    })
    document.getElementById("style").addEventListener("input",(e)=>{
        addOptions(e.target);
    });
    document.getElementById("content").addEventListener("input",(e)=>{
        addOptions(e.target);
    });
    document.querySelectorAll(".canvas")[0].addEventListener("dblclick",(e)=>{
        removePopUp();
        if(currMode[0]==="auto"){
            positionEle(e.clientX,e.clientY);
           settingsObject["side"] = inputObj.side==="auto" ? findAvailPosition(getOffsetObj(),document.getElementById("canvasinside")) : inputObj.side;
           settingsObject["style"] = matchInputObjStyle(inputObj);
           settingsObject["action"] = inputObj.action==="auto" ? "click" : inputObj.action;
           settingsObject["content"] = readContentInput();
            makePopUp(settingsObject);
        }else{

        }
      
    })

    document.querySelectorAll(".canvas")[0].addEventListener("contextmenu",(e)=>{
        removePopUp();
  
    })

    document.getElementById("updatebutt").addEventListener("click",(e)=>{
        settingsObject["side"] = inputObj.side==="auto" ? findAvailPosition(getOffsetObj(),document.getElementById("canvasinside")) : inputObj.side;
        settingsObject["style"] = matchInputObjStyle(inputObj);
        settingsObject["action"] = inputObj.action==="auto" ? "click" : inputObj.action;
        settingsObject["content"] = readContentInput();
        makePopUp(settingsObject);
    })
};

function addOptions(ele){

    if(ele.id==="style"&&ele.value=="auto"){
        removeLowerClones();
        hideLower();

    }else if(ele.id==="style"&&ele.value=="custom"){
        showLower();
        duplicateLower(7);
        fillLower("styleCustom");
    }else if(ele.id==="content"&&ele.value=="auto"){
        removeLowerClones()
        hideLower();
    }else if(ele.id==="content"&&ele.value=="basiclist"){
        showLower();
        duplicateLower(1);
        fillLower("contentBasicList");
    }else if(ele.id==="content"&&ele.value=="menulist"){
        showLower();
        duplicateLower(1);
        fillLower("contactMenuList");
    }else{
        removeLowerClones();
        hideLower();
    }
};


function showLower(){
    document.getElementById("lower").querySelectorAll("input")[0].style.visibility = "visible";
        document.getElementById("lower").querySelectorAll("label")[0].style.visibility = "visible";
}


function hideLower(){
    document.getElementById("lower").querySelectorAll("input")[0].style.visibility = "collapse";
    document.getElementById("lower").querySelectorAll("label")[0].style.visibility = "collapse";
}

function duplicateLower(num){
    let count = num;
    const momOfClone = document.getElementById("lower");
    const clone = momOfClone.querySelectorAll("div")[0];
    momOfClone.innerHTML="";
    for(i=0;i<count;i++){
        momOfClone.appendChild(clone.cloneNode(true));
    }
}


function  removeLowerClones(){
    const clones = document.querySelectorAll(".demo");
    for(i=0;i<clones.length-1;i++){
        clones[i].remove();
    }
}


function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}


function fillLower(context){
    if(context==="styleCustom"){
        const eles = document.querySelectorAll(".demo");
        const arr = Array.from(eles);
        arr[0].querySelectorAll("label")[0].innerHTML="Color <span>  (style-color:#hex or rgba ~str)  </span>";
        arr[0].querySelectorAll("input")[0].name="color";
        arr[0].querySelectorAll("label")[0].htmlFor="color";
        arr[0].querySelectorAll("input")[0].id="color";
        arr[0].querySelectorAll("input")[0].value="white";
        arr[0].querySelectorAll("input")[0].className="lowerinput";

       
        arr[1].querySelectorAll("label")[0].innerHTML="Background Color <span> (style-background-color:#hex or rgba or name ~str)  </span>";
        arr[1].querySelectorAll("input")[0].name="background-color";
        arr[1].querySelectorAll("label")[0].htmlFor="background-color";
        arr[1].querySelectorAll("input")[0].id="background-color";
        arr[1].querySelectorAll("input")[0].value="black";
        arr[1].querySelectorAll("input")[0].className="lowerinput";


        arr[2].querySelectorAll("label")[0].innerHTML="Height <span>  (style-height:42px~str)  </span>";
        arr[2].querySelectorAll("input")[0].name="height";
        arr[2].querySelectorAll("label")[0].htmlFor="height";
        arr[2].querySelectorAll("input")[0].id="height";
        arr[2].querySelectorAll("input")[0].value="42px";
        arr[2].querySelectorAll("input")[0].className="lowerinput";


        arr[3].querySelectorAll("label")[0].innerHTML="Width <span> (style-width:42px or 42% ~str)  </span>";
        arr[3].querySelectorAll("input")[0].name="width";
        arr[3].querySelectorAll("label")[0].htmlFor="width";
        arr[3].querySelectorAll("input")[0].id="width";
        arr[3].querySelectorAll("input")[0].value="99%";
        arr[3].querySelectorAll("input")[0].className="lowerinput";


        arr[4].querySelectorAll("label")[0].innerHTML="Margin <span>  (style-margin:42px ~str)  </span>";
        arr[4].querySelectorAll("input")[0].name="margin";
        arr[4].querySelectorAll("label")[0].htmlFor="margin";
        arr[4].querySelectorAll("input")[0].id="margin";
        arr[4].querySelectorAll("input")[0].value="6px";
        arr[4].querySelectorAll("input")[0].className="lowerinput";


        arr[5].querySelectorAll("label")[0].innerHTML="Padding <span>  (style-padding:42px ~str)  </span>";
        arr[5].querySelectorAll("input")[0].name="padding";
        arr[5].querySelectorAll("label")[0].htmlFor="padding";
        arr[5].querySelectorAll("input")[0].id="padding";
        arr[5].querySelectorAll("input")[0].value="6px";
        arr[5].querySelectorAll("input")[0].className="lowerinput";


        arr[6].querySelectorAll("label")[0].innerHTML="Z-Index <span>  (style-z-index:42 ~str)  </span>";
        arr[6].querySelectorAll("input")[0].name="z-index";
        arr[6].querySelectorAll("label")[0].htmlFor="z-index";
        arr[6].querySelectorAll("input")[0].id="z-index";
       // arr[6].querySelectorAll("input")[0].type="number";
        arr[6].querySelectorAll("input")[0].value="0";
        arr[6].querySelectorAll("input")[0].className="lowerinput";
    }else if(context==="contentBasicList"){
        const eles = document.querySelectorAll(".demo");
        const arr = Array.from(eles);
        arr[0].querySelectorAll("label")[0].innerHTML="Items in popup <span>  {basiclist-items: item1, item2..., basic-action:func}  </span>";
        arr[0].querySelectorAll("input")[0].name="basiclist-items";
        arr[0].querySelectorAll("label")[0].htmlFor="basiclist-items";
        arr[0].querySelectorAll("input")[0].id="basiclist-items";
        arr[0].querySelectorAll("input")[0].value=`{"basiclist-items": ["item1", "item2", "item3"], "basic-action":["val","return val"]}`;


    }else if(context==="contactMenuList"){
        const eles = document.querySelectorAll(".demo");
        const arr = Array.from(eles);
        arr[0].querySelectorAll("label")[0].innerHTML="Items in popup <span>  (menulist: {item:item, func:func}, {obj2}, {obj3}, ...)  </span>";
        arr[0].querySelectorAll("input")[0].name="menulist";
        arr[0].querySelectorAll("label")[0].htmlFor="menulist";
        arr[0].querySelectorAll("input")[0].id="menulist";
        arr[0].querySelectorAll("input")[0].value=`[{"item":"item", "func":["val","return val"]},{"item":"item", "func":["val","return val"]},{"item":"item", "func":["val","return val"]}]`;
    }
}



function positionEle(left,top){
    const ele = document.getElementById("canvasinside");
    ele.style.left = `${left}px`;
    ele.style.top = `${top}px`;
}


function getOffsetObj (){
    //var bodyRect = document.querySelectorAll(".canvas")[0].getBoundingClientRect();
    var bodyRect = document.body.getBoundingClientRect();
    var elemRect = document.getElementById("canvasinside").getBoundingClientRect();
    const offSetObj = {};
    offSetObj["top"]  = elemRect.top - bodyRect.top;
    offSetObj["left"]  = elemRect.left - bodyRect.left;
    offSetObj["right"]  = Math.abs(elemRect.right - bodyRect.right);
    offSetObj["bottom"]  = Math.abs(elemRect.bottom - bodyRect.bottom);
    offSetObj["parHeight"] = bodyRect.height;
    offSetObj["parWidth"] = bodyRect.width;
    offSetObj["chiWidth"] = elemRect.width;
    offSetObj["chiHeight"] = elemRect.height;

  
   return offSetObj;
  }
  

function findAvailPosition(obj,ele){
    let myvar = null; 
    let eleWidth = getPosStyles(ele).width;

    if(obj.left>eleWidth&&obj.left>obj.right&&obj.top>obj.bottom){
        myvar = "left-top";
    }else if(obj.left>eleWidth&&obj.left>obj.right&&obj.bottom>=obj.top){
        myvar = "left-bottom";
    }else if(obj.right>eleWidth&&obj.right>=obj.left&&obj.bottom>=obj.top){
        myvar = "right-bottom";
    }else if(obj.right>eleWidth&&obj.right>=obj.left&&obj.top>obj.bottom){
        myvar = "right-top";
    }else if(obj.top>obj.bottom){
        myvar = "top";
    }else{
        myvar = "bottom"; 
    }


return myvar;
}


function matchParentStyle(){
    const styleObj = {};
    const compStyles = window.getComputedStyle(document.getElementById("canvasinside"));
    styleObj["color"] = compStyles.getPropertyValue("color");
    styleObj["background-color"] = compStyles.getPropertyValue("background-color");
    styleObj["height"] = compStyles.getPropertyValue("height");
    styleObj["width"] = compStyles.getPropertyValue("width");
    styleObj["margin"] = compStyles.getPropertyValue("margin");
    styleObj["padding"] = compStyles.getPropertyValue("padding");
    styleObj.padding = styleObj.padding.slice(0,styleObj.padding.length-2);
    styleObj.padding = parseInt(styleObj.padding,10);
    styleObj["paddingTop"] = (styleObj.padding+6)+"px";
    styleObj["paddingLeft"] = (styleObj.padding+12)+"px";
    styleObj["z-index"] = compStyles.getPropertyValue("z-index");
    styleObj["font-size"] = compStyles.getPropertyValue("font-size");
    return styleObj;
}


function fillBasicList(){
    const obj = {};
    obj["items"] = ["one","mbili","tres"];
    obj["action"] = (arg)=>{
        console.log(`you've clicked...`);
        console.log(arg);
    }

    return obj;
}


function makePopUp(settingsObject){
    
    const pop = document.createElement("div");
    const mom = document.getElementById("canvasinside");
    const eleStyles = getPosStyles(mom);
    const popVals = {};
    
   

    pop.style.backgroundColor = "transparent";
    pop.style.height = settingsObject.style.height;
    pop.style.boxSizing = "border-box";
    pop.style.color = settingsObject.style.color;
    pop.style.paddingTop = settingsObject.style.paddingTop;
    pop.style.paddingBottom = settingsObject.style.paddingBottom;
    pop.style.margin = settingsObject.style.padding;
    pop.style.width = settingsObject.style.width;
    pop.style.fontSize = settingsObject.style["font-size"];
    popVals["height"] = settingsObject.style["font-size"].slice(0,settingsObject.style["font-size"].length-2);
    popVals.height = parseInt(popVals.height,10);
    pop.style.position = "relative";
    pop.style.fontFamily = eleStyles.fontFam;

    pop.className = "themostspecialpopupevermade";

    const tempStyles = document.createElement("style");
    tempStyles.innerHTML = `
    .themostspecialpopupevermade{
        display:flex;
        flex-flow:column;
        flex-wrap:nowrap;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .themostspecialpopupevermade span{
        background-color:${settingsObject.style["background-color"]};
        border: 0.69px solid white;
        padding: 3px 6px;
        box-sizing:border-box;
        margin-bottom: 3px;
        font-weight:bold;
        width: 100%;
        box-shadow: 0.3px 0.3px 1.69px 0.3px;
    }
    .themostspecialpopupevermade span:hover{
        color:white;
        background-color:black;
    }`;

    if("action" in settingsObject.content){
       
        popVals["spanCount"] = settingsObject.content.items.length; 
       settingsObject.content.items.forEach(item=>{
        let span = document.createElement("span");
        span.innerHTML = item;
        span.addEventListener("click",(e)=>{
            let obj = {};
            obj["e"] = e;
            obj["ele"] = span;
            settingsObject.content.action(obj);
        })
        pop.appendChild(span);
    })
    }else if("basic-action" in settingsObject.content){
        popVals["spanCount"] = settingsObject.content["basiclist-items"].length; 
        settingsObject.content["basiclist-items"].forEach(item=>{
         let span = document.createElement("span");
         span.innerHTML = item;
         span.addEventListener("click",(e)=>{
             let obj = {};
             obj["e"] = e;
             obj["ele"] = span;
             let deFunc = new Function(settingsObject.content["basic-action"][0],settingsObject.content["basic-action"][1]);
             console.log(deFunc(obj));
             
         })
         pop.appendChild(span);
     })

    }else if("func" in settingsObject.content && Array.isArray(settingsObject.content.func)){
        popVals["spanCount"] = 1; 
         let span = document.createElement("span");
         let item = settingsObject.content.item;
         span.innerHTML = item;
         span.addEventListener("click",(e)=>{
             let obj = {};
             obj["e"] = e;
             obj["ele"] = span;
             let deFunc = new Function(settingsObject.content.func[0],settingsObject.content.func[1]);
             console.log(deFunc(obj));
             
         })
         pop.appendChild(span);
        console.log(settingsObject);
    }else if(Array.isArray(settingsObject.content)){
        popVals["spanCount"] = settingsObject.content.length;
        settingsObject.content.forEach(item=>{
            let span = document.createElement("span");
            span.innerHTML = item.item;
            span.addEventListener("click",(e)=>{
                let obj = {};
                obj["e"] = e;
                obj["ele"] = span;
                let deFunc = new Function(item.func[0],item.func[1]);
                console.log(deFunc(obj));
                
            })
            pop.appendChild(span);

        }) 
        console.log(settingsObject);
    }else{

    }

    if(settingsObject.side==="left-top"){
            pop.style.left = (eleStyles.left-getPosStyles(document.getElementById("canvasinside")).width-6)+"px";
            pop.style.top = (eleStyles.top-(getPosStyles(document.getElementById("canvasinside")).height/2)-(popVals.height*(popVals.spanCount*2))-6)+"px";
            
    }else if(settingsObject.side==="left-bottom"){
        pop.style.left = (eleStyles.left-getPosStyles(document.getElementById("canvasinside")).width-6)+"px";
        pop.style.top = (eleStyles.top-24)+"px";
        
    }else if(settingsObject.side==="right-top"){
        pop.style.left = (eleStyles.left+getPosStyles(document.getElementById("canvasinside")).width+6)+"px";
        pop.style.top = (eleStyles.top-(getPosStyles(document.getElementById("canvasinside")).height)-(popVals.height*(popVals.spanCount*2)+6)+"px");
        
    }else if(settingsObject.side==="right-bottom"){
        pop.style.left = (eleStyles.left+getPosStyles(document.getElementById("canvasinside")).width+6)+"px";
        pop.style.top = (eleStyles.top-(getPosStyles(document.getElementById("canvasinside")).height/2)-6)+"px";
        
    }else if(settingsObject.side==="top"){
        console.log("intop")
        pop.style.left = (eleStyles.left)+"px";
        pop.style.top = (eleStyles.top-(getPosStyles(document.getElementById("canvasinside")).height)-6-(popVals.height*(popVals.spanCount*2))+"px");
        
    }else{
        pop.style.left = (eleStyles.left)+"px";
        pop.style.top = (eleStyles.top+6)+"px";
    }

    popUp["ele"] = pop;
    popUp["styles"] = tempStyles;

    mom.addEventListener(settingsObject.action,showPopUp)
};

function showPopUp () {
    document.querySelectorAll(".canvas")[0].appendChild(popUp.ele);
    document.querySelectorAll(".canvas")[0].appendChild(popUp.styles);
}

function removePopUp(){
    const arr = document.querySelectorAll(".themostspecialpopupevermade");
    arr.forEach(ele=>{
        ele.remove();
    })

    const arr2 = document.querySelectorAll(".canvas")[0].getElementsByTagName("style");
    if(Array.isArray(arr2)){
        arr2.forEach(ele=>{
            ele.remove();
        })
    }
   
};


function getPosStyles(ele){
    const eleCompStyles = window.getComputedStyle(ele);
    const stylesObj = {};
    const elemRect = ele.getBoundingClientRect();
    stylesObj["left"] = eleCompStyles.getPropertyValue("left");
    stylesObj["top"] = eleCompStyles.getPropertyValue("top");
    stylesObj["fontFam"] = eleCompStyles.getPropertyValue("font-family");
    stylesObj["width"] = elemRect.width;
    stylesObj["height"] = elemRect.height;
    stylesObj.left = stylesObj.left.slice(0,stylesObj.left.length-2);
    stylesObj.left = parseInt(stylesObj.left,10);
    stylesObj.top = stylesObj.top.slice(0,stylesObj.top.length-2);
    stylesObj.top = parseInt(stylesObj.top,10);

    return stylesObj;
};


function updateInputObj(obj){
    if(obj.id==="side"){
        inputObj["side"]= obj.val;
    }else if(obj.id==="style"){
        inputObj["style"]= obj.val;
        if(inputObj.style==="custom"){
           let timeD = window.setTimeout(()=>{
            document.querySelectorAll(".lowerinput").forEach(ele=>{
                inputObj[`${ele.id}`]= ele.value;
            })
            document.querySelectorAll(".lowerinput").forEach(ele=>{
                ele.addEventListener("change",()=>{
                    document.querySelectorAll(".lowerinput").forEach(ele=>{
                        inputObj[`${ele.id}`]= ele.value;
                    })
                })
            })
            window.clearTimeout(timeD);
           },900)
        }
    }else if(obj.id==="action"){
        inputObj["action"]= obj.val;
    }else if(obj.id==="content"){
        inputObj["content"]= obj.val;
        if(inputObj.content==="basiclist"){
            let timeD = window.setTimeout(()=>{
                let ele = document.getElementById("basiclist-items");
                inputObj[`${ele.id}`]= ele.value;
                ele.addEventListener("change",()=>{
                    inputObj[`${ele.id}`]= ele.value;
                })
                window.clearTimeout(timeD);
               },900)
        }else if(inputObj.content==="menulist"){
            let timeD = window.setTimeout(()=>{
                let ele = document.getElementById("menulist");
                inputObj[`${ele.id}`]= ele.value;
                ele.addEventListener("change",()=>{
                    inputObj[`${ele.id}`]= ele.value;
                })
                window.clearTimeout(timeD);
               },900)
        }else{

        }
    }
};


function matchInputObjStyle(obj){
    let styleObj = {};

    if(inputObj.style==="auto"){
        styleObj= matchParentStyle();
    }else{
        styleObj["color"] = obj.color;
        styleObj["background-color"] = obj["background-color"];
        styleObj["height"] = obj.height ? obj.height : "13px";
        styleObj["width"] = obj.width.slice(0,obj.width.length-1);
        styleObj.width = parseInt(styleObj.width,10);
        styleObj.width = (styleObj.width/100)*getPosStyles(document.getElementById("canvasinside")).width+"px";
        styleObj["margin"] = obj.margin ? obj.margin : "0px";
        styleObj["padding"] = obj.padding ? obj.padding : "6px";
        styleObj.padding = styleObj.padding.slice(0,styleObj.padding.length-2);
        styleObj.padding = parseInt(styleObj.padding,10);
        styleObj["paddingTop"] = (styleObj.padding+6)+"px";
        styleObj["paddingLeft"] = (styleObj.padding+12)+"px";
        styleObj["z-index"] = obj["z-index"];
        styleObj["font-size"] = styleObj.height.slice(0,styleObj.padding.length-2);
        styleObj["font-size"] = parseInt(styleObj.height,10);
        styleObj["font-size"] = 0.86*styleObj["font-size"];
        styleObj["font-size"] = styleObj["font-size"]+"px";
    }

    
    return styleObj;
};


function readContentInput(){
    let obj = {};

    let timeReadLapse = window.setTimeout(()=>{
        
    if(inputObj.content==="basiclist"){
        obj = JSON.parse(inputObj["basiclist-items"]);
    }else if(inputObj.content==="menulist"){
        obj = JSON.parse(inputObj.menulist);
    }else{
      let obj2 = fillBasicList();  
     obj= obj2;
    
    }
        window.clearTimeout(timeReadLapse);
    },169)


    return obj;
}