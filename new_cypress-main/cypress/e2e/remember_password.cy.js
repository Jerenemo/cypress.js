describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#forgotEmailButton').click(); // Нажали кнопку "Забыли пароль?"
         cy.get('#mailForgot').type('avtotestietokruto@mail.ru') // Ввели рандомную почту
         cy.get('#restoreEmailButton').click(); // Нажали кнопку "Отправить код"
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail').should('be.visible'); // Видим нужный текст, проверяем что текст видно
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем что крестик видно
         
     })
 })
 
 
