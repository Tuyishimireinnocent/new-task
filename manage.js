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
                        <button class="edit">Edit</button>
                        <button class="delete">Delete</button>
                    </td>
                </tr>`

        contactDivision.innerHTML += contactCard  
    });  
}
displayContact()

