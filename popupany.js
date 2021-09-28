export {popupany as default};
const settings_28092021utc3ismizo = {};
const popUp = {};
var parEle = null;
settings_28092021utc3ismizo["obj"] = {};

class popupany {
    constructor(){
        this["info"] = {};
        this.info["name"] = "PopUpAnyWhere";
        this.info["author"] = "ismizo";
        this.info["pubDate"] = "28th Sept, 2021, UTC + 3";
        this.info["version"] = "1.0.0.0.0.0";
        this.info["archive"] = "no-archive-yet";

        this.makeAPop = this.makeAPop;
        this.fillObject = this.fillObject;
        this.makeBasicObj = this.makeBasicObj;
        this.getOffsetObj = this.getOffsetObj; 
        this.getPosStyles = this.getPosStyles; 
        this.findAvailPosition = this.findAvailPosition; 
        this.matchParentStyle = this.matchParentStyle; 
        this.removePopUp = this.removePopUp; 
        this.showPopUp = this.showPopUp;  
        this.makePopUp = this.makePopUp;  
        this.matchInputObjStyle = this.matchInputObjStyle;  
        this.readContentInput = this.readContentInput;   
    }

    fillObject (obj) {
        const fillObjectObj = {};
        fillObjectObj["error"] = null;
        try{
            if(typeof obj ==="object"){
                settings_28092021utc3ismizo.obj = this.makeBasicObj();
                parEle = obj.parent;
                window.addEventListener("contextmenu",(e)=>{
                    const arr = document.querySelectorAll(".themostspecialpopupevermade");
                    arr.forEach(ele=>{
                        ele.remove();
                    })
                

                    const arr2 = document.body.querySelectorAll("#hollastylespopup") ;
                    if(Array.isArray(arr2)){
                        arr2.forEach(ele=>{
                            ele.remove();
                        })
                    }
                });
                window.addEventListener("dbclick",(e)=>{
                    const arr = document.querySelectorAll(".themostspecialpopupevermade");
                    arr.forEach(ele=>{
                        ele.remove();
                    })
                
                    const arr2 = document.body.querySelectorAll("#hollastylespopup") ;
                    if(Array.isArray(arr2)){
                        arr2.forEach(ele=>{
                            ele.remove();
                        })
                    }
                });

                if("auto" in obj && obj.auto === "auto" && obj.parent && obj.parent.nodeType){
                    //matchParentStyle
                    settings_28092021utc3ismizo.obj.style = this.matchParentStyle(obj.parent);

                    //addPlaceholder side action and content
                    settings_28092021utc3ismizo.obj.side = this.findAvailPosition(this.getOffsetObj(obj.parent),obj.parent);
                    settings_28092021utc3ismizo.obj.content = this.fillBasicList;
                }

                if("style" in obj && obj.style === "auto" && obj.parent && obj.parent.nodeType){
                    //matchParentStyle
                    settings_28092021utc3ismizo.obj.style = this.matchParentStyle(obj.parent);

                    //addPlaceholder side action and content
                    settings_28092021utc3ismizo.obj.side = this.findAvailPosition(this.getOffsetObj(obj.parent),obj.parent);
                    settings_28092021utc3ismizo.obj.content = this.fillBasicList();

                }else if("style" in obj && "color" in obj.style && obj.parent && obj.parent.nodeType){
                    //matchCustomStyle
                    settings_28092021utc3ismizo.obj.style = this. matchInputObjStyle(obj.style);

                     //addPlaceholder side action and content
                     settings_28092021utc3ismizo.obj.side = this.findAvailPosition(this.getOffsetObj(obj.parent),obj.parent);
                     settings_28092021utc3ismizo.obj.content = this.fillBasicList();
                }

                if("content" in obj && "basic-action" in obj.content &&!"custom1" in obj &&!"custom2" in obj && obj.parent && obj.parent.nodeType){
                    //addInternalTempListl
                    settings_28092021utc3ismizo.obj.content = this.fillBasicList();
                }else if("content" in obj && "basic-action" in obj.content && "custom1" in obj && obj.parent && obj.parent.nodeType){
                    //readAddedBasicList
                    settings_28092021utc3ismizo.obj.content = this.readContentInput(obj);
                }else if("content" in obj && Array.isArray(obj.content) && obj.parent && obj.parent.nodeType){
                    //readAddedMenuList
                    settings_28092021utc3ismizo.obj.content = this.readContentInput(obj);
                }else if(obj.parent && obj.parent.nodeType){
                    //addInternalTempList
                    settings_28092021utc3ismizo.obj.content = this.fillBasicList();
                }


                //popUpfuncs
                this.makePopUp(settings_28092021utc3ismizo.obj,obj.parent);
            }else{
                fillObjectObj.error = "Error: Invalid Object Structure."
                
            }

        }catch(error){
            fillObjectObj.error = error;
        }
        return fillObjectObj;
    }

    makeBasicObj () {
        const makeBasicObj = {
            "side":"auto",
            "style":{"color":"grey",
                     "background-color":"white",
                     "font-size":"11px",
                     "height":"18px",
                     "margin":"0px",
                     "padding":3,
                     "width":"169px",
                     "z-index":"inherit",
                    },
            "action":"click",
            "content":{"basic-action":["val","return val"],
                        "basiclist-items":["item1","item2","item3"]},
            "x":"xx",
        }

        return makeBasicObj;
    }

    matchParentStyle(parent){
        const styleObj = {};
        const compStyles = window.getComputedStyle(parent);
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

    findAvailPosition(obj,ele){
        let myvar = null; 
        let eleWidth = this.getPosStyles(ele).width;
    
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

    getPosStyles(ele){
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
    }

    getOffsetObj (mom){
        //var bodyRect = document.querySelectorAll(".canvas")[0].getBoundingClientRect();
        var bodyRect = document.body.getBoundingClientRect();
        var elemRect = mom.getBoundingClientRect();
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

    fillBasicList(){
        const obj = {};
        obj["items"] = ["one","mbili","tres"];
        obj["action"] = (arg)=>{
            console.log(`you've clicked...`);
            console.log(arg);
        }
    
        return obj;
    }


    readContentInput(obj2){
        let obj = {};
    
       
            
        if("basiclist-items" in obj2.content){
            obj = JSON.parse(JSON.stringify(obj2.content));
        }else if(Array.isArray(obj2.content)){
            obj = JSON.parse(JSON.stringify(obj2.content));
        }else{
          let obj2 = this.fillBasicList();  
         obj= obj2;
        
        }
         
        
    
    
        return obj;
    }

    matchInputObjStyle(obj){
        let styleObj = {};
    
        if(!"color" in obj){
            styleObj= this.matchParentStyle(parEle);
        }else{
            styleObj["color"] = obj.color;
            styleObj["background-color"] = obj["background-color"];
            styleObj["height"] = obj.height ? obj.height : "13px";
            styleObj["width"] = obj.width.slice(0,obj.width.length-1);
            styleObj.width = parseInt(styleObj.width,10);
            styleObj.width = (styleObj.width/100)*this.getPosStyles(parEle).width+"px";
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
    }


    makePopUp(settingsObject,mom){
    
        const pop = document.createElement("div");
        const eleStyles = this.getPosStyles(mom);
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
        tempStyles.id = "hollastylespopup";
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
                pop.style.left = (eleStyles.left-this.getPosStyles(mom).width-6)+"px";
                pop.style.top = (eleStyles.top-(this.getPosStyles(mom).height/2)-(popVals.height*(popVals.spanCount*2))-6)+"px";
                
        }else if(settingsObject.side==="left-bottom"){
            pop.style.left = (eleStyles.left-this.getPosStyles(mom).width-6)+"px";
            pop.style.top = (eleStyles.top-24)+"px";
            
        }else if(settingsObject.side==="right-top"){
            pop.style.left = (eleStyles.left+this.getPosStyles(mom).width+6)+"px";
            pop.style.top = (eleStyles.top-(this.getPosStyles(mom).height)-(popVals.height*(popVals.spanCount*2)+6)+"px");
            
        }else if(settingsObject.side==="right-bottom"){
            pop.style.left = (eleStyles.left+this.getPosStyles(mom).width+6)+"px";
            pop.style.top = (eleStyles.top-(this.getPosStyles(mom).height/2)-6)+"px";
            
        }else if(settingsObject.side==="top"){
            console.log("intop")
            pop.style.left = (eleStyles.left)+"px";
            pop.style.top = (eleStyles.top-(this.getPosStyles(mom).height)-6-(popVals.height*(popVals.spanCount*2))+"px");
            
        }else{
            pop.style.left = (eleStyles.left)+"px";
            pop.style.top = (eleStyles.top+6)+"px";
        }
    
        popUp["ele"] = pop;
        popUp["styles"] = tempStyles;
    
        mom.addEventListener(settingsObject.action,this.showPopUp)
    }

    showPopUp () {
        if(document.querySelectorAll(".themostspecialpopupevermade").length>=1){
            const arr = document.querySelectorAll(".themostspecialpopupevermade");
            arr.forEach(ele=>{
                ele.remove();
            })
        
            const arr2 = document.body.querySelectorAll("#hollastylespopup") ;
            if(Array.isArray(arr2)){
                arr2.forEach(ele=>{
                    ele.remove();
                })
            }

        }else{
            document.body.appendChild(popUp.ele);
            document.body.appendChild(popUp.styles);
        }
       
    }
    
    removePopUp(){
        const arr = document.querySelectorAll(".themostspecialpopupevermade");
        arr.forEach(ele=>{
            ele.remove();
        })
    
        const arr2 = document.body.querySelectorAll("#hollastylespopup") ;
        if(Array.isArray(arr2)){
            arr2.forEach(ele=>{
                ele.remove();
            })
        }
       
    }

    makeAPop(obj){
        this.fillObject(obj);
    }


}