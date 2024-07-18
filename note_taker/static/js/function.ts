// start with the work for note url

let delete_note_btn = document.querySelector<HTMLDivElement>(".delete-note-btn")
let home_note_btn = document.querySelector<HTMLDivElement>(".home-note-btn")
let edit_note_btn = document.querySelector<HTMLDivElement>(".edit-note-btn")
let home_note_div = document.querySelector<HTMLDivElement>(".home-note-content")
let edit_note_div = document.querySelector<HTMLDivElement>(".edit-note-content")


delete_note_btn.addEventListener('click', function(){
  alert("Deleted")
})

home_note_btn.addEventListener('click', function(){
  home_note_div.style.display = "inherit"
  edit_note_div.style.display = "none"
})

edit_note_btn.addEventListener('click', function(){
  home_note_div.style.display = "none"
  edit_note_div.style.display = "inherit"
})

// form elements

let new_note_submit = document.getElementById("new-note-submit") as HTMLInputElement
let edit_note_submit = document.querySelector<HTMLInputElement>("#edit-note-submit")

new_note_submit.addEventListener('click', function(){
  alert("Submitted");
});

edit_note_submit.addEventListener('click', function(){
  alert("submitted")
})


// now we are going to do the index page
interface msg_int{
  messages: string[];
  index: number;
  curr: number;
  next: boolean;
  reverse: boolean;
}

document.addEventListener("DOMContentLoaded", function(){
  let msg: msg_int = {
    "messages": ["you can create new notes!", "You can view your created notes!", "You can edit your notes!", "You can delete your notes!", "You can categorise your notes intelligently!"],
    "index": 0,
    "curr": 0,
    "next": false,
    "reverse": false
  }
  function change_msg(msg: msg_int): msg_int{
    if(msg.next == true){
      msg.next = false
      if(msg.index == msg.messages.length - 1){
        msg.index = 0
      }else{
        msg.index += 1
      }
    }if(msg.reverse == true){
      if(msg.curr == 0){
        msg.reverse = false
        msg.next = true
      }else{
        msg.curr -= 1
      }
    }else{
      if(msg.curr == msg.messages.length - 1){
        msg.curr -= 1
        msg.reverse = true
      }else{
        msg.curr += 1
      }
    }
    let msg_div = document.querySelector<HTMLSpanElement>(".msg-hello")
    msg_div.textContent = msg.messages[msg.index].slice(0, 4)
    return msg
  }

  setInterval(function(){
    msg = change_msg(msg)
  }, 500)
})