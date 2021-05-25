'use strict';

import { By, until } from 'selenium-webdriver';

import createTest from './_environment.js';

const test = await createTest('signup');

test.serial('Signup button shows an error if the username is not specified', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/signup.html');
    await t.context.driver.findElement(By.className('signUpBtn')).click();
    const usernameErrorMessage = await t.context.driver.findElement(By.id('fUsernameMistake')).getText();
    t.is(usernameErrorMessage, 'Please enter username');
});

test.serial('Signup button shows an error if the password is not specified', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/signup.html');
    await t.context.driver.findElement(By.className('signUpBtn')).click();
    const passwordErrorMessage = await t.context.driver.findElement(By.id('fPWDMistake')).getText();
    t.is(passwordErrorMessage, 'Please enter password');
});

test.serial('Username is too short => an error message', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/signup.html');
    await t.context.driver.findElement(By.id('fUsername')).sendKeys('mo');
    const usernameErrorMessage = await t.context.driver.findElement(By.id('fUsernameMistake')).getText();
    t.is(usernameErrorMessage, 'Too short username');
});

test.serial('Username is too long => an error message', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/signup.html');
    await t.context.driver.findElement(By.id('fUsername')).sendKeys('eeeeeeeeeeeeeeeeeeee');
    const usernameErrorMessage = await t.context.driver.findElement(By.id('fUsernameMistake')).getText();
    t.is(usernameErrorMessage, 'Too long username');
});

test.serial('Username is OK => OK message', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/signup.html');
    await t.context.driver.findElement(By.id('fUsername')).sendKeys('moo');
    const usernameErrorMessage = await t.context.driver.findElement(By.id('fUsernameMistake')).getText();
    t.is(usernameErrorMessage, 'OK');
});

test.serial('Username contains special characters => an error message', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/signup.html');
    await t.context.driver.findElement(By.id('fUsername')).sendKeys('mo_o');
    const usernameErrorMessage = await t.context.driver.findElement(By.id('fUsernameMistake')).getText();
    t.is(usernameErrorMessage, 'Allowed English letters, arabic numbers');
});

test.serial('Password is too short => an error message', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/signup.html');
    await t.context.driver.findElement(By.id('fPWD')).sendKeys('pass');
    const passwordErrorMessage = await t.context.driver.findElement(By.id('fPWDMistake')).getText();
    t.is(passwordErrorMessage, 'Too short password');
});

test.serial('Password is OK => OK message', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/signup.html');
    await t.context.driver.findElement(By.id('fPWD')).sendKeys('1234567');
    const PasswordErrorMessage = await t.context.driver.findElement(By.id('fPWDMistake')).getText();
    t.is(PasswordErrorMessage, 'OK');
});

test.serial('Signup button shows an error if the email is not specified', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/signup.html');
    await t.context.driver.findElement(By.className('signUpBtn')).click();
    const passwordErrorMessage = await t.context.driver.findElement(By.id('fEmailMistake')).getText();
    t.is(passwordErrorMessage, 'Please enter email');
});

test.serial('Email is OK => OK message', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/signup.html');
    await t.context.driver.findElement(By.id('fEmail')).sendKeys('test@test');
    const emailErrorMessage = await t.context.driver.findElement(By.id('fEmailMistake')).getText();
    t.is(emailErrorMessage, 'OK');
});

test.serial('Password confirmation is OK (Password field is empty)=> OK message', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/signup.html');
    await t.context.driver.findElement(By.className('signUpBtn')).click();
    const passwordErrorMessage = await t.context.driver.findElement(By.id('fConfPWDMistake')).getText();
    t.is(passwordErrorMessage, 'OK');
});

test.serial('Signup button shows an error if the password and password confirmation do not match', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/signup.html');
    await t.context.driver.findElement(By.id('fPWD')).sendKeys('pass');
    await t.context.driver.findElement(By.id('fConfPWD')).sendKeys('pas');
    const passwordErrorMessage = await t.context.driver.findElement(By.id('fConfPWDMistake')).getText();
    t.is(passwordErrorMessage, 'Passwords do not match');
});

test.serial('Signup button shows an error if terms not cheked', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/signup.html');
    await t.context.driver.findElement(By.className('signUpBtn')).click();
    const termsErrorMessage = await t.context.driver.findElement(By.id('fTermsMistake')).getText();
    t.is(termsErrorMessage, 'Please accept Terms of Use');
});

test.serial('Terms are OK => OK message', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/signup.html');
    await t.context.driver.findElement(By.id('fTerms')).click();
    const termsErrorMessage = await t.context.driver.findElement(By.id('fTermsMistake')).getText();
    t.is(termsErrorMessage, 'OK');
});

test.serial('Auth error if specified username already exists', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/signup.html');
    await t.context.driver.findElement(By.id('fUsername')).sendKeys('testUser');
    await t.context.driver.findElement(By.id('fEmail')).sendKeys('test@test');
    await t.context.driver.findElement(By.id('fPWD')).sendKeys('1234567');
    await t.context.driver.findElement(By.id('fConfPWD')).sendKeys('1234567');
    await t.context.driver.findElement(By.id('fTerms')).click();
    await t.context.driver.findElement(By.className('signUpBtn')).click();
    const signupErrorMessage = await t.context.driver.findElement(By.className('signupUnsuccessfulShowMistake')).getText();
    t.is(signupErrorMessage, 'Signup error (username is already in use).');
});
