Feature: TestPagina

    la intencion es mostrar el buen funcionamiento de la pagina

Scenario: Verificar navegacion
    Given Acceso a la pagina
    When Se de clic en el navegador en el nombre hombres
    Then Se carge la pagina de ropa de hombres
    And cuando se regrese, vuelva a la pagina principal