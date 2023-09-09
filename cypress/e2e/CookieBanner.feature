@regression @cookieBanner

Feature: RightMove - Cookie Banner

Scenario: The user accepts cookies and the cookie banner does not appear
Given the user is on the homepage
When the cookie banner appears
And the user accepts cookies
And they refresh the page
Then the cookie banner does not appear
