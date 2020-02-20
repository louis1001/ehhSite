$(document).ready(()=>{
    const deploy = $('.country-deploy')

    
    deploy.hover(event=>{
        console.log(event)
        let deployElement = $(event.currentTarget.querySelector('.register-deploy'))

        deployElement.slideToggle()
    })
})