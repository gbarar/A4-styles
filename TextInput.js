import {useState} from 'react'

function TextInput(props) {
    const [text, setText] = useState('')
   

    function sendMessage(){
        if(text==="")return // skip the function
        props.send(text)
        setText('')

      }
    
    function keyPressed(e){
        if(e.key==="Enter"){
            sendMessage()
        }
    }


   return <div className="formmessage"> 
   <div class="form">
    <div class='formmessage'>
        <input 
            value={text}
            onChange={e=> setText(e.target.value)}
            onKeyPress={keyPressed}
            placeholder="write your silly little message"
        />
   

    </div>
    <button className = "formbutton" onClick={sendMessage}>
        send
    </button>
    </div>
    </div>
}  
  

export default TextInput