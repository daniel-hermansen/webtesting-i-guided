# Testing

## Objectives

-setup testing from scratch.
-write unit tests.
-Test Driven Development.


AAA = Arrange -> Act -> Assert

function(args) => return value; To test it we invoke the function.

Component(props) => return UI; To test it we render the component (with or without props or with different props).

Endpoint(data) => return HTTP response; To test it we make a request.

Test suite: a group of tests in the same file

Make sure that your tests can fail so you know that you don't have a false positive.


## User Stories (what is this supposed to do)

As a ... role
I want ... feature
So that ... value

As an analyst
I want a calculator that can add two numbers
So that I can write the sales reports

### Scenarios (how to do it)

```txt
Given ...
    and ...
    and ...
When ...
    and ...
    and ...
Then ...
    and ...
```

Given two numbers
When the add function is invoked
Then it should return the sum of the two numbers. 

## Test Driven Development/Design

Red > Green > Refactor ------> Commit

Red: write a failing test.

Green: write enough implementation code to make the test pass.

Refactor: rewrite the code without changing the functionality. Reformatting the tests and implementation code without breaking the tests.