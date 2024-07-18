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
