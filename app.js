const chatBody = document.querySelector(".chat-body");
const txtInput = document.querySelector("#txtInput");
const send = document.querySelector(".send");

// press send button to send message
send.addEventListener("click", () => renderUserMessage());

// press Enter to send message
txtInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    renderUserMessage();
  }
});

// get user message, reset placeholder text, 
// call response, scroll to bottom
const renderUserMessage = () => {
  const userInput = txtInput.value;
  renderMessageEle(userInput, "user");
  txtInput.value = "";
  setTimeout(() => {
    renderChatbotResponse(userInput);
    setScrollPosition();
  }, 600);
};


const renderChatbotResponse = (userInput) => {
    const input = userInput;
  const res = getChatbotResponse(userInput);
    
  renderMessageEle(res);
};

const renderMessageEle = (txt, type) => {
  let className = "user-message";
  if (type !== "user") {
    className = "chatbot-message";
  }
  const messageEle = document.createElement("div");
  const txtNode = document.createTextNode(txt);
  messageEle.classList.add(className);
  messageEle.append(txtNode);
  chatBody.append(messageEle);
};

const getChatbotResponse = (userInput) => {
    if (userInput.toLowerCase().includes('lifelong')) {
        displaySearch();
        return responseObj['lifelong'];
        
    } else {
        return responseObj[userInput] == undefined
        ? "Please try something else"
        : responseObj[userInput];
    }
    
};

// auto scroll
const setScrollPosition = () => {
  if (chatBody.scrollHeight > 0) {
    chatBody.scrollTop = chatBody.scrollHeight;
  }
};

const displaySearch = () =>{
    document.getElementById("knowledge-body").style.visibility = "visible";
}