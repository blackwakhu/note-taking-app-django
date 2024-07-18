// start with the work for note url
var delete_note_btn = document.querySelector(".delete-note-btn");
var home_note_btn = document.querySelector(".home-note-btn");
var edit_note_btn = document.querySelector(".edit-note-btn");
var home_note_div = document.querySelector(".home-note-content");
var edit_note_div = document.querySelector(".edit-note-content");
delete_note_btn.addEventListener('click', function () {
    alert("Deleted");
});
home_note_btn.addEventListener('click', function () {
    home_note_div.style.display = "inherit";
    edit_note_div.style.display = "none";
});
edit_note_btn.addEventListener('click', function () {
    home_note_div.style.display = "none";
    edit_note_div.style.display = "inherit";
});
// form elements
var new_note_submit = document.getElementById("new-note-submit");
var edit_note_submit = document.querySelector("#edit-note-submit");
new_note_submit.addEventListener('click', function () {
    alert("Submitted");
});
edit_note_submit.addEventListener('click', function () {
    alert("submitted");
});
document.addEventListener("DOMContentLoaded", function () {
    var msg = {
        "messages": ["you can create new notes!", "You can view your created notes!", "You can edit your notes!", "You can delete your notes!", "You can categorise your notes intelligently!"],
        "index": 0,
        "curr": 0,
        "next": false,
        "reverse": false
    };
    function change_msg(msg) {
        if (msg.next == true) {
            msg.next = false;
            if (msg.index == msg.messages.length - 1) {
                msg.index = 0;
            }
            else {
                msg.index += 1;
            }
        }
        if (msg.reverse == true) {
            if (msg.curr == 0) {
                msg.reverse = false;
                msg.next = true;
            }
            else {
                msg.curr -= 1;
            }
        }
        else {
            if (msg.curr == msg.messages.length - 1) {
                msg.curr -= 1;
                msg.reverse = true;
            }
            else {
                msg.curr += 1;
            }
        }
        var msg_div = document.querySelector(".msg-hello");
        msg_div.textContent = msg.messages[msg.index].slice(0, 4);
        return msg;
    }
    setInterval(function () {
        msg = change_msg(msg);
    }, 500);
});
