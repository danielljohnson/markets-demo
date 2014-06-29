Feature: Market
  Background: 
    Given that I am on the markets page
    Then the browser title should be "Markets"
  
  @selenium
  Scenario: Create market
    When I open the add market modal
    And fill in the form
    And click submit
    Then the new market should show up in the table
  
  @selenium  
  Scenario: Edit market
    When I click the edit link on the first table row
    And change the market name in the modal form
    And click submit
    Then the updated market should show up in the table
    
  @selenium  
  Scenario: Delete market
    When I click the delete link on the first table row
    Then the market is deleted