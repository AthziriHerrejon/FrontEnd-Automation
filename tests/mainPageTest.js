import LoginPage from '../pages/LoginPage.js'
import mainPage from '../pages/mainPage.js'

const loginUrl = 'https://www.saucedemo.com/'
const mainPageUrl='https://www.saucedemo.com/inventory.html'

fixture('Login Page')
.page(loginUrl)

test('FORM - Successful Login and Log out', async t => {
    await t
    
    .typeText(LoginPage.usernameField, 'standard_user')
    .typeText(LoginPage.passwordField, 'secret_sauce')
    .click(LoginPage.loginButton)  
    .click(mainPage.burgerMenu)
    .click(mainPage.logOutButton)    

    await t.wait(5000)

});
