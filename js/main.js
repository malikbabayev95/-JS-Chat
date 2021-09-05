const textinput=document.getElementById("text-input")
textinput.addEventListener("keyup", function(malik){
    if(malik.keyCode==13){
        let textval=this.value.trim()
        if(textval[0].toLowerCase()==textval[0]){
            AddMessage("users", textval)
        }
        else {
            AddMessage("support", textval)
        }

        function AddMessage(className, txtval){
            const div=document.createElement("div")
            div.className="message "+className
            const ptext=document.createElement("p")
            ptext.innerText=txtval
            let now=new Date();
            const ptimes=document.createElement("p")
            ptimes.className="times" 
            ptimes.innerText=now.getHours()+":"+now.getMinutes()
            div.appendChild(ptext)
            div.appendChild(ptimes)
            document.querySelector("main").appendChild(div)
            div.scrollIntoView()  
            textinput.value=" "
        }



        
    }

})