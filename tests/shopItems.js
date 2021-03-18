import LoginPage from '../pages/LoginPage.js'
import MainPage from '../pages/mainPage.js'

const loginUrl = 'https://www.saucedemo.com/'

fixture('Login Page')
.page(loginUrl)
test('FORM - Successful Login', async t => {
    
    await t

    .typeText(LoginPage.usernameField, 'standard_user')
    .typeText(LoginPage.passwordField, 'secret_sauce')
    .click(LoginPage.loginButton)    

});



fixture('Add items')
.page(shopItemsUrl)

test('Add items to the shopping cart',async t => {

    await t 
  
.click(shopItems.addItems)
.click(shopItems.cartCounter)
await t.expect(Selector('fa-layers-counter').innerText).eql('1', 'check element text', { timeout: 500 });

});

fixture('Go to the shopping cart')
.click(shopItems.shoppingCartIcon)

//testcafe chrome .page_model\tests\shopItems.js*/