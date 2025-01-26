let contacts = localStorage.getItem("contacts")?JSON.parse(localStorage.getItem("contacts")):[]

const nameInput = document.querySelector('#Name')
const emailInput = document.querySelector('#Email')
const button = document.querySelector('.add_contact')
button.addEventListener('click',(e)=>{
    const nameValue = nameInput.value
    const emailValue = emailInput.value
    const newContact={
      name:nameValue,
      email:emailValue
   }
   contacts.unshift(newContact)
   nameInput.value = ''
   emailInput.value = ''
   saveContact()
   displayContact()
   
})
function saveContact(){
    localStorage.setItem("contacts",JSON.stringify(contacts))

}
const displayContact = () =>{

    contacts = localStorage.getItem("contacts")?JSON.parse(localStorage.getItem("contacts")):[]
    const contactDivision = document.querySelector(".c-table")
    contactDivision.innerHTML = ''

    contacts.forEach((contact,index) => {
        const contactCard = `
        <tr>
                    <td>${contact.name}</td>
                    <td>${contact.email}</td>
                    <td class="actions">
                        <button class="edit" onclick = "editContacts(event,${index})">Edit</button>
                        <button class="delete" onclick = "deleteContact(event,${index})">Delete</button>
                    </td>
                </tr>`

        contactDivision.innerHTML += contactCard  
    });  
}
function deleteContact(e,index){
    let allowDelete = confirm('are you sure for to delete this data?')
    contacts = JSON.parse(localStorage.getItem("contacts")) 
    contacts.splice(index,1);
    saveContact()
    displayContact()   
}

function editContacts(e,index){
    const editForm = document.querySelector('.Edit-input')
    editForm.style.display = 'block'

    contacts = JSON.parse(localStorage.getItem("contacts")) 
    const editName = document.querySelector("#editName")
    const editEmail = document.querySelector("#editEmail")
    editName.value = contacts[index].name
    editEmail.value = contacts[index].email

    const saveChanges = document.querySelector(".saveChanges");

    function handleEdit(){
        const nameValue = editName.value.trim()
        const emailValue = editEmail.value.trim()
    
        if(!nameValue || !emailValue){
            alert("please fill   All Input")
            return
        }
    
        contacts[index].name = nameValue 
        contacts[index].email = emailValue
        editForm.style.display = 'none'
        saveContact()
        displayContact()
        saveChanges.removeEventListener("click",handleEdit)
    }

    saveChanges.addEventListener("click",handleEdit)
}








document.editContacts = editContacts
document.deleteContact = deleteContact
displayContact()

