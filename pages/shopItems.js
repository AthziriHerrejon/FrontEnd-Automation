import {Selector , t} from 'testcafe'

class shopItems{
    constructor(){

//Add items to the shopping cart 
        this.addItems = Selector ('.btn_inventory')

//Add one single item to the shopping cart 
this.cartCounter =Selector('.fa-layers-counter')

//Navigate to the shopping cart
this.shoppingCartIcon=Selector('.shopping_cart_link')
    }
}
export default new shopItems();