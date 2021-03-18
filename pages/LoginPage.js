import {Selector , t} from 'testcafe'

class LoginPage{
    constructor(){
        this.usernameField = Selector ('input#user-name')
        this.passwordField = Selector ('input#password')
        this.loginButton= Selector ('#login-button')
        this.errorMesagge=Selector(".error-button")
        this.burgerMenu=Selector('#react-burger-menu-btn')
        this.logOutButton=Selector('#logout_sidebar_link')
    }
}

export default new LoginPage();


/*
 Class should be . and for Id should be #
*/
