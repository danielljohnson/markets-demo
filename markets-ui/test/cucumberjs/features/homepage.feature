Feature: Home Page
  @selenium
  Scenario: browse to the home page
    Given that I am on the homepage
    Then the browser title should be "Portfolio Dashboard"
    And the h1 tag should have a value of "Home Page"