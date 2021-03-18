import LoginPage from '../pages/LoginPage.js'
import MainPage from '../pages/mainPage.js'

const loginUrl = 'https://www.saucedemo.com/'

fixture('Login Page')
.page(loginUrl)

test('Loading Login Page', async t => {

    await t
    .expect(LoginPage.loginButton.exists).ok();

});


test('FORM - Invalid Login', async t => {
await t

    .typeText(LoginPage.usernameField, 'standard_user')
    .typeText(LoginPage.passwordField, 'WrongPassword')
    .click(LoginPage.loginButton)    

});

test('FORM - Successful Login', async t => {
    
    await t

    .typeText(LoginPage.usernameField, 'standard_user')
    .typeText(LoginPage.passwordField, 'secret_sauce')
    .click(LoginPage.loginButton)    

});