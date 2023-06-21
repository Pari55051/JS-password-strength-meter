
const strengthMeter = document.getElementById('strength-meter')
const passwordInput = document.getElementById('password-input')
const reasonsContainer = document.getElementById('reasons')


// To Call calculatePasswordStrength Function everytime Input Value is changed/modified
passwordInput.addEventListener('input', () => {
  const weaknesses = calculatePasswordStrength(passwordInput.value)

  console.log(weaknesses)
})

// Password Strength Calculate Function
function calculatePasswordStrength (password) {
  const weaknesses = []

  weaknesses.push(lengthWeakness(password))

  return weaknesses
}

// Weakness Calculator Functions
function lengthWeakness(password) {
  const length = password.length

  if (length <= 5) {
    return {
      message: 'Your password is too short',
      deduction: 40
    }
  }

  if (length <= 10) {
    return {
      message: 'Your password could be longer',
      deduction: 15
    }
  }
}