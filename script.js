let API_KEY="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";
function send(){
    if(document.getElementById("inp").value==""){
        return
    }
    cmsgs=document.getElementById("chtmsgs")
    d=document.createElement("div")
    d.className="message incoming";
    d.innerHTML=`<div class="message-content">
    <p><span class="user"> 👤</span> ${ document.getElementById("inp").value}</p>
</div>`;
cmsgs.appendChild(d)

let v=document.getElementById("inp").value;
document.getElementById("inp").value=""



let url = `https://ai-chatbot.p.rapidapi.com/chat/free?message=${v}&uid=user1`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'acb7a7f8f8mshf4b652e259690e1p1df447jsn54ada7d9ebf8',
		'X-RapidAPI-Host': 'ai-chatbot.p.rapidapi.com'
	}
}






async function gett(){
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    return result;
}


gett().then((response)=>{
   let m=document.createElement("div")
    m.className="message outgoing";
    m.innerHTML=` <div class="message-content"><p>
    <span class="bot"> &#129302; </span>
    ${response.chatbot.response}</p>
</div>`;
cmsgs.appendChild(m)
})
};



