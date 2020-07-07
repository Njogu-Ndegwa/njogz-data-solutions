const tabItems = document.querySelectorAll('.tab-item')
const tabContentItems= document.querySelectorAll('.tab-content-item')

// Select Specific Tab

function selectItem() {
    removeBorder()
    removeShow()
    // Add Tab border
    this.classList.add('tab-border')
    
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    console.log(this.id)
    tabContentItem.classList.add('show')
}    

// Remove Tab border
function removeBorder() {
tabItems.forEach(item => item.classList.remove('tab-border'))
}

// Remove Show / Visibility 
function removeShow() {
tabContentItems.forEach(item => item.classList.remove('show'))
}

// Listen for Click Event
tabItems.forEach(item => item.addEventListener('click', selectItem))
