/* describe('interfaz de usuario',function(){
    it('resultados',function(){
        cy.visit('https://www.mattelsa.net/');
        cy.get('.level0.first > .level-top > span').click();
        cy.get('.category-name-filters > span').contains('Hombre');
        cy.go('back');
        cy.get('.col2-image-left > a > .img-responsive').click();
        cy.get('.category-name-filters > span').contains('Hombre');
        cy.go('back');
    })
}) */


Given(/^Acceso a la pagina$/, () => {
	cy.visit('https://www.mattelsa.net/');
});

When(/^Se de clic en el navegador en el nombre hombres$/, () => {
	cy.get('.level0.first > .level-top > span').click();
});

Then(/^Se carge la pagina de ropa de hombres$/, () => {
	cy.get('.category-name-filters > span').contains('Hombre');
});

Then(/^cuando se regrese, vuelva a la pagina principal$/, () => {
	cy.go('back');
});
