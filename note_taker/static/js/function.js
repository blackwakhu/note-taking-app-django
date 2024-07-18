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
