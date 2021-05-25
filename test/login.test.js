'use strict';

import { By, until } from 'selenium-webdriver';

import createTest from './_environment.js';

const test = await createTest('login');

test.serial('Login button shows an error if the username is not specified', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/login.html');
    await t.context.driver.findElement(By.className('logInBtn')).click();
    const usernameErrorMessage = await t.context.driver.findElement(By.id('fUsernameError')).getText();
    t.is(usernameErrorMessage, 'Please enter username');
});

test.serial('Login button shows an error if the password is not specified', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/login.html');
    await t.context.driver.findElement(By.className('logInBtn')).click();
    const passwordErrorMessage = await t.context.driver.findElement(By.id('fPasswordError')).getText();
    t.is(passwordErrorMessage, 'Please enter password');
});

test.serial('Username is too short => an error message', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/login.html');
    await t.context.driver.findElement(By.id('fLoginUsername')).sendKeys('mo');
    const usernameErrorMessage = await t.context.driver.findElement(By.id('fUsernameError')).getText();
    t.is(usernameErrorMessage, 'Too short username');
});

test.serial('Username is too long => an error message', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/login.html');
    await t.context.driver.findElement(By.id('fLoginUsername')).sendKeys('eeeeeeeeeeeeeeeeeeee');
    const usernameErrorMessage = await t.context.driver.findElement(By.id('fUsernameError')).getText();
    t.is(usernameErrorMessage, 'Too long username');
});

test.serial('Username is OK => OK message', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/login.html');
    await t.context.driver.findElement(By.id('fLoginUsername')).sendKeys('moo');
    const usernameErrorMessage = await t.context.driver.findElement(By.id('fUsernameError')).getText();
    t.is(usernameErrorMessage, 'OK');
});

test.serial('Username contains special characters => an error message', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/login.html');
    await t.context.driver.findElement(By.id('fLoginUsername')).sendKeys('mo_o');
    const usernameErrorMessage = await t.context.driver.findElement(By.id('fUsernameError')).getText();
    t.is(usernameErrorMessage, 'Allowed English letters, arabic numbers');
});

test.serial('Password is too short => an error message', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/login.html');
    await t.context.driver.findElement(By.id('fLoginPassword')).sendKeys('pass');
    const passwordErrorMessage = await t.context.driver.findElement(By.id('fPasswordError')).getText();
    t.is(passwordErrorMessage, 'Too short password');
});

test.serial('Password is OK => OK message', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/login.html');
    await t.context.driver.findElement(By.id('fLoginPassword')).sendKeys('1234567');
    const passwordErrorMessage = await t.context.driver.findElement(By.id('fPasswordError')).getText();
    t.is(passwordErrorMessage, 'OK');
    t.pass();
});

test.serial('Auth error if specified user does not exist', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/login.html');
    await t.context.driver.findElement(By.id('fLoginUsername')).sendKeys('r2eipfirn20ejkepm');
    await t.context.driver.findElement(By.id('fLoginPassword')).sendKeys('1234567');
    await t.context.driver.findElement(By.className('logInBtn')).click();
    const authErrorMessage = await t.context.driver.findElement(By.className('loginUnsuccessfulShowMistake')).getText();
    t.is(authErrorMessage, 'Authentication error (invalid username or password)');
});

test.serial('Auth success if specified user exists', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/login.html');
    await t.context.driver.findElement(By.id('fLoginUsername')).sendKeys('testUser');
    await t.context.driver.findElement(By.id('fLoginPassword')).sendKeys('testuser123456');
    await t.context.driver.findElement(By.className('logInBtn')).click();
    await t.context.driver.wait(until.titleIs('Coin categories'), 1000);
    t.pass();
});

test.serial('Recover account button shows an error if the email is not specified', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/login.html');
    await t.context.driver.findElement(By.className('forgotPasswordBtn')).click();
    await t.context.driver.findElement(By.className('emailSendBtn')).click();
    const recoverErrorMessage = await t.context.driver.findElement(By.id('fForgotPassEmailError')).getText();
    t.is(recoverErrorMessage, 'Please enter email');
});

test.serial('Fetch successful is database answer received', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/login.html');
    await t.context.driver.findElement(By.className('forgotPasswordBtn')).click();
    await t.context.driver.findElement(By.id('fForgotPassEmail')).sendKeys('test@test');
    await t.context.driver.findElement(By.className('emailSendBtn')).click();
    const recoverErrorMessage = await t.context.driver.findElement(By.className('recoverAccountText')).getText();
    t.is(recoverErrorMessage, 'Please contact admin for further instructions.');
    t.pass();
});
