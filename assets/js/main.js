// Show-hidden password

const showHiddenPass = (inputPass, inputIcon) => {
    const   input = document.getElementById(inputPass),
            iconEye = document.getElementById(inputIcon)

    iconEye.addEventListener('click', () => {
        // change password to text
        if(input.type === 'password') {
            // switch to text
            input.type = 'text'

            // add icon
            iconEye.classList.add('ri-eye-line')
            // remove icon
            iconEye.classList.remove('ri-eye-off-line')
        } else {
            // change to password
            input.type = 'password'
            // add icon
            iconEye.classList.add('ri-eye-off-line')
            // remove icon
            iconEye.classList.remove('ri-eye-line')
        }
    })

}

showHiddenPass('input-pass', 'input-icon');
