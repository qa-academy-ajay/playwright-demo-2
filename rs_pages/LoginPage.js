class LoginPage {

    constructor(page) {
        this.page = page;
        this.userEmail = page.locator('#userEmail')
        this.userPassword = page.locator("#userPassword");
        this.login = page.locator('#login')
    }

    async launchApplication() {
        await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login');
        await this.userEmail.fill("ajaykr.mailbox@gmail.com");
        await this.userPassword.fill("Automation@123");
        await this.login.click();
    }
}

export {LoginPage}