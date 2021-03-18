import {Selector , t} from 'testcafe'

class mainPage{
    constructor(){
        this.burgerMenu=Selector('.bm-burger-button')
        this.logOutButton=Selector('#logout_sidebar_link')

    }
}
export default new mainPage();