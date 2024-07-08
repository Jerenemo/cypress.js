describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#mail').type('german@ddolnikov.ru'); // Ввели НЕ верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
         cy.get('#loginButton').click(); // Нажал войти
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // После авторизации вижу текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         cy.get('#messageHeader').should('be.visible');
     })
 })
 
 
 
 
 
 
