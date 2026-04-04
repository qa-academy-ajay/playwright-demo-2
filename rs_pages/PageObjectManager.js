import { LoginPage } from "./LoginPage";
import {OrderHistoryPage} from './OrderHistoryPage';

class PageObjectmanager{
    constructor(page){
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.orderHistoryPage = new OrderHistoryPage(page);
        
    }

    getLoginPage(){
        return this.loginPage;
    }
    getOrderHistoryPage(){
        return this.orderHistoryPage;
    }


}
export {PageObjectmanager}