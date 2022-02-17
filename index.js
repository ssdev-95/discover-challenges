document
  .querySelectorAll('form div label input')
  .forEach(input => {
    input.addEventListener('focus', (event) => {
      const asset = event.target.name === 'password' ?
        './assets/lock-focus.svg' :
        './assets/mail-focus.svg'
        
      document
        .getElementById(event.target.name)
        .classList
        .add('focus')
        
      document
        .querySelector(`#${event.target.name} > img`)
        .setAttribute('src', asset)
    })
    
    input.addEventListener('blur', (event) => {
      const asset = event.target.name === 'password' ?
        './assets/lock.svg' :
        './assets/mail.svg'
        
      document
        .getElementById(event.target.name)
        .classList
        .remove('focus')
        
      document
        .querySelector(`#${event.target.name} > img`)
        .setAttribute('src', asset)
    })
  })
  
document
  .querySelector('input[type=checkbox]')
  .addEventListener('change', (event)=>{
    if (event.target.checked) {
      event.target.classList.add('checked')
    } else {
      event.target.classList.remove('checked')
    }
  })
  
  document
    .querySelector('img[alt=eye]')
    .addEventListener('click', (event)=>{
      const isActive = !event
        .target.src.includes('-focus')
      event.target.src = isActive ?
        './assets/eye-focus.svg' :
        './assets/eye.svg'
        
        document
          .querySelector('input[name=password]')
          .setAttribute(
            'type', isActive ?
            'password' :
            'text'
          )
    })
