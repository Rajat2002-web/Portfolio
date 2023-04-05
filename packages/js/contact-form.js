
    const scriptURL = 'https://docs.google.com/spreadsheets/d/1O9hVdkXDTTkxyr3VwRG-tuErarpfzazgEPKGZXeONeM/edit#gid=0'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('Send message', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message Sent Sucessfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
            })
        .catch(error => console.error('Error!', error.message))
    })