'use strict';

import { By, until } from 'selenium-webdriver';

import createTest from './_environment.js';

const test = await createTest('settings');

test.serial('Save button shows an error if the email is not specified', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/login.html');
    await t.context.driver.findElement(By.id('fLoginUsername')).sendKeys('testUser');
    await t.context.driver.findElement(By.id('fLoginPassword')).sendKeys('testuser123456');
    await t.context.driver.findElement(By.className('logInBtn')).click();
    await t.context.driver.get('http://127.0.0.1:8080/static/settings.html');
    await t.context.driver.findElement(By.id('fEmail')).sendKeys('');
    await t.context.driver.findElement(By.id('fEmail')).clear();
    await t.context.driver.findElement(By.className('changeUserDataBtn')).click();
    const emailErrorMessage = await t.context.driver.findElement(By.id('fEmailMistake')).getText();
    t.is(emailErrorMessage, 'Please enter email');
});

test.serial('Email is OK => OK message', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/login.html');
    await t.context.driver.findElement(By.id('fLoginUsername')).sendKeys('testUser');
    await t.context.driver.findElement(By.id('fLoginPassword')).sendKeys('testuser123456');
    await t.context.driver.findElement(By.className('logInBtn')).click();
    await t.context.driver.get('http://127.0.0.1:8080/static/settings.html');
    await t.context.driver.findElement(By.id('fEmail')).sendKeys('');
    await t.context.driver.findElement(By.id('fEmail')).clear();
    await t.context.driver.findElement(By.id('fEmail')).sendKeys('test@test');
    const emailErrorMessage = await t.context.driver.findElement(By.id('fEmailMistake')).getText();
    t.is(emailErrorMessage, 'OK');
});

test.serial('Name is empty => OK message', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/login.html');
    await t.context.driver.findElement(By.id('fLoginUsername')).sendKeys('testUser');
    await t.context.driver.findElement(By.id('fLoginPassword')).sendKeys('testuser123456');
    await t.context.driver.findElement(By.className('logInBtn')).click();
    await t.context.driver.get('http://127.0.0.1:8080/static/settings.html');
    await t.context.driver.findElement(By.id('fName')).sendKeys('');
    await t.context.driver.findElement(By.id('fName')).clear();
    await t.context.driver.findElement(By.className('changeUserDataBtn')).click();
    const nameErrorMessage = await t.context.driver.findElement(By.id('fNameMistake')).getText();
    t.is(nameErrorMessage, 'OK');
});

test.serial('Name is OK => OK message', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/login.html');
    await t.context.driver.findElement(By.id('fLoginUsername')).sendKeys('testUser');
    await t.context.driver.findElement(By.id('fLoginPassword')).sendKeys('testuser123456');
    await t.context.driver.findElement(By.className('logInBtn')).click();
    await t.context.driver.get('http://127.0.0.1:8080/static/settings.html');
    await t.context.driver.findElement(By.id('fName')).sendKeys('Moo');
    await t.context.driver.findElement(By.className('changeUserDataBtn')).click();
    const nameErrorMessage = await t.context.driver.findElement(By.id('fNameMistake')).getText();
    t.is(nameErrorMessage, 'OK');
});

test.serial('Name is too short => an error message', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/login.html');
    await t.context.driver.findElement(By.id('fLoginUsername')).sendKeys('testUser');
    await t.context.driver.findElement(By.id('fLoginPassword')).sendKeys('testuser123456');
    await t.context.driver.findElement(By.className('logInBtn')).click();
    await t.context.driver.get('http://127.0.0.1:8080/static/settings.html');
    await t.context.driver.findElement(By.id('fName')).sendKeys('');
    await t.context.driver.findElement(By.id('fName')).clear();
    await t.context.driver.findElement(By.id('fName')).sendKeys('Mo');
    await t.context.driver.findElement(By.className('changeUserDataBtn')).click();
    const nameErrorMessage = await t.context.driver.findElement(By.id('fNameMistake')).getText();
    t.is(nameErrorMessage, 'Too short name');
});

test.serial('Name contains not only English letters => an error message', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/login.html');
    await t.context.driver.findElement(By.id('fLoginUsername')).sendKeys('testUser');
    await t.context.driver.findElement(By.id('fLoginPassword')).sendKeys('testuser123456');
    await t.context.driver.findElement(By.className('logInBtn')).click();
    await t.context.driver.get('http://127.0.0.1:8080/static/settings.html');
    await t.context.driver.findElement(By.id('fName')).sendKeys('');
    await t.context.driver.findElement(By.id('fName')).clear();
    await t.context.driver.findElement(By.id('fName')).sendKeys('Mo_');
    await t.context.driver.findElement(By.className('changeUserDataBtn')).click();
    const nameErrorMessage = await t.context.driver.findElement(By.id('fNameMistake')).getText();
    t.is(nameErrorMessage, 'Allowed English letters');
});

test.serial('Name is too long => an error message', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/login.html');
    await t.context.driver.findElement(By.id('fLoginUsername')).sendKeys('testUser');
    await t.context.driver.findElement(By.id('fLoginPassword')).sendKeys('testuser123456');
    await t.context.driver.findElement(By.className('logInBtn')).click();
    await t.context.driver.get('http://127.0.0.1:8080/static/settings.html');
    await t.context.driver.findElement(By.id('fName')).sendKeys('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    const nameErrorMessage = await t.context.driver.findElement(By.id('fNameMistake')).getText();
    t.is(nameErrorMessage, 'Too long name');
});

test.serial('Username is OK => OK message', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/login.html');
    await t.context.driver.findElement(By.id('fLoginUsername')).sendKeys('testUser');
    await t.context.driver.findElement(By.id('fLoginPassword')).sendKeys('testuser123456');
    await t.context.driver.findElement(By.className('logInBtn')).click();
    await t.context.driver.get('http://127.0.0.1:8080/static/settings.html');
    await t.context.driver.findElement(By.className('changeUserDataBtn')).click();
    const usernameErrorMessage = await t.context.driver.findElement(By.id('fUsernameMistake')).getText();
    t.is(usernameErrorMessage, 'OK');
});

test.serial('Save button shows an error if the password is not specified', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/login.html');
    await t.context.driver.findElement(By.id('fLoginUsername')).sendKeys('testUser');
    await t.context.driver.findElement(By.id('fLoginPassword')).sendKeys('testuser123456');
    await t.context.driver.findElement(By.className('logInBtn')).click();
    await t.context.driver.get('http://127.0.0.1:8080/static/settings.html');
    await t.context.driver.findElement(By.className('changeUserDataBtn')).click();
    const passwordErrorMessage = await t.context.driver.findElement(By.id('fPWDMistake')).getText();
    t.is(passwordErrorMessage, 'Please enter password');
});

test.serial('Password is too short => an error message', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/login.html');
    await t.context.driver.findElement(By.id('fLoginUsername')).sendKeys('testUser');
    await t.context.driver.findElement(By.id('fLoginPassword')).sendKeys('testuser123456');
    await t.context.driver.findElement(By.className('logInBtn')).click();
    await t.context.driver.get('http://127.0.0.1:8080/static/settings.html');
    await t.context.driver.findElement(By.id('fPWD')).sendKeys('pass');
    const passwordErrorMessage = await t.context.driver.findElement(By.id('fPWDMistake')).getText();
    t.is(passwordErrorMessage, 'Too short password');
});

test.serial('Password is OK => OK message', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/login.html');
    await t.context.driver.findElement(By.id('fLoginUsername')).sendKeys('testUser');
    await t.context.driver.findElement(By.id('fLoginPassword')).sendKeys('testuser123456');
    await t.context.driver.findElement(By.className('logInBtn')).click();
    await t.context.driver.get('http://127.0.0.1:8080/static/settings.html');
    await t.context.driver.findElement(By.id('fPWD')).sendKeys('1234567');
    const passwordErrorMessage = await t.context.driver.findElement(By.id('fPWDMistake')).getText();
    t.is(passwordErrorMessage, 'OK');
});

test.serial('Password confirmation is OK (Password field is empty)=> OK message', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/login.html');
    await t.context.driver.findElement(By.id('fLoginUsername')).sendKeys('testUser');
    await t.context.driver.findElement(By.id('fLoginPassword')).sendKeys('testuser123456');
    await t.context.driver.findElement(By.className('logInBtn')).click();
    await t.context.driver.get('http://127.0.0.1:8080/static/settings.html');
    await t.context.driver.findElement(By.className('changeUserDataBtn')).click();
    const passwordErrorMessage = await t.context.driver.findElement(By.id('fConfPWDMistake')).getText();
    t.is(passwordErrorMessage, 'OK');
});

test.serial('Signup button shows an error if the password and password confirmation do not match', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/login.html');
    await t.context.driver.findElement(By.id('fLoginUsername')).sendKeys('testUser');
    await t.context.driver.findElement(By.id('fLoginPassword')).sendKeys('testuser123456');
    await t.context.driver.findElement(By.className('logInBtn')).click();
    await t.context.driver.get('http://127.0.0.1:8080/static/settings.html');
    await t.context.driver.findElement(By.id('fPWD')).sendKeys('pass');
    await t.context.driver.findElement(By.id('fConfPWD')).sendKeys('pas');
    const passwordErrorMessage = await t.context.driver.findElement(By.id('fConfPWDMistake')).getText();
    t.is(passwordErrorMessage, 'Passwords do not match');
});

test.serial('Address is empty => OK message', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/login.html');
    await t.context.driver.findElement(By.id('fLoginUsername')).sendKeys('testUser');
    await t.context.driver.findElement(By.id('fLoginPassword')).sendKeys('testuser123456');
    await t.context.driver.findElement(By.className('logInBtn')).click();
    await t.context.driver.get('http://127.0.0.1:8080/static/settings.html');
    await t.context.driver.findElement(By.id('fAddress')).sendKeys('');
    await t.context.driver.findElement(By.id('fAddress')).clear();
    await t.context.driver.findElement(By.className('changeUserDataBtn')).click();
    const addressErrorMessage = await t.context.driver.findElement(By.id('fAddressMistake')).getText();
    t.is(addressErrorMessage, 'OK');
});

test.serial('Address is OK => OK message', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/login.html');
    await t.context.driver.findElement(By.id('fLoginUsername')).sendKeys('testUser');
    await t.context.driver.findElement(By.id('fLoginPassword')).sendKeys('testuser123456');
    await t.context.driver.findElement(By.className('logInBtn')).click();
    await t.context.driver.get('http://127.0.0.1:8080/static/settings.html');
    await t.context.driver.findElement(By.id('fAddress')).sendKeys('Moo');
    const addressErrorMessage = await t.context.driver.findElement(By.id('fAddressMistake')).getText();
    t.is(addressErrorMessage, 'OK');
});

test.serial('Address is too short => an error message', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/login.html');
    await t.context.driver.findElement(By.id('fLoginUsername')).sendKeys('testUser');
    await t.context.driver.findElement(By.id('fLoginPassword')).sendKeys('testuser123456');
    await t.context.driver.findElement(By.className('logInBtn')).click();
    await t.context.driver.get('http://127.0.0.1:8080/static/settings.html');
    await t.context.driver.findElement(By.id('fAddress')).sendKeys('');
    await t.context.driver.findElement(By.id('fAddress')).clear();
    await t.context.driver.findElement(By.id('fAddress')).sendKeys('Mo');
    const addressErrorMessage = await t.context.driver.findElement(By.id('fAddressMistake')).getText();
    t.is(addressErrorMessage, 'Too short address');
});

test.serial('Address is too long => an error message', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/login.html');
    await t.context.driver.findElement(By.id('fLoginUsername')).sendKeys('testUser');
    await t.context.driver.findElement(By.id('fLoginPassword')).sendKeys('testuser123456');
    await t.context.driver.findElement(By.className('logInBtn')).click();
    await t.context.driver.get('http://127.0.0.1:8080/static/settings.html');
    await t.context.driver.findElement(By.id('fAddress')).sendKeys('');
    await t.context.driver.findElement(By.id('fAddress')).clear();
    await t.context.driver.findElement(By.id('fAddress')).sendKeys('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    const addressErrorMessage = await t.context.driver.findElement(By.id('fAddressMistake')).getText();
    t.is(addressErrorMessage, 'Too long address');
});

test.serial('Save button shows an error if terms not cheked', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/login.html');
    await t.context.driver.findElement(By.id('fLoginUsername')).sendKeys('testUser');
    await t.context.driver.findElement(By.id('fLoginPassword')).sendKeys('testuser123456');
    await t.context.driver.findElement(By.className('logInBtn')).click();
    await t.context.driver.get('http://127.0.0.1:8080/static/settings.html');
    await t.context.driver.findElement(By.className('changeUserDataBtn')).click();
    const termsErrorMessage = await t.context.driver.findElement(By.id('fTermsMistake')).getText();
    t.is(termsErrorMessage, 'Please accept Terms of Use');
});

test.serial('Terms are OK => OK message', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/login.html');
    await t.context.driver.findElement(By.id('fLoginUsername')).sendKeys('testUser');
    await t.context.driver.findElement(By.id('fLoginPassword')).sendKeys('testuser123456');
    await t.context.driver.findElement(By.className('logInBtn')).click();
    await t.context.driver.get('http://127.0.0.1:8080/static/settings.html');
    await t.context.driver.findElement(By.id('fTerms')).click();
    const termsErrorMessage = await t.context.driver.findElement(By.id('fTermsMistake')).getText();
    t.is(termsErrorMessage, 'OK');
});

test.serial('Auth succes', async t => {
    await t.context.driver.get('http://127.0.0.1:8080/static/settings.html');
    await t.context.driver.findElement(By.id('fName')).sendKeys('');
    await t.context.driver.findElement(By.id('fName')).clear();
    await t.context.driver.findElement(By.id('fName')).sendKeys('Alex');
    await t.context.driver.findElement(By.id('fEmail')).sendKeys('');
    await t.context.driver.findElement(By.id('fEmail')).clear();
    await t.context.driver.findElement(By.id('fEmail')).sendKeys('test@test.com');
    await t.context.driver.findElement(By.id('fPWD')).sendKeys('testuser1234567');
    await t.context.driver.findElement(By.id('fConfPWD')).sendKeys('testuser1234567');
    await t.context.driver.findElement(By.id('fAddress')).sendKeys('');
    await t.context.driver.findElement(By.id('fAddress')).clear();
    await t.context.driver.findElement(By.id('fAddress')).sendKeys('Estonia, Tallinn');
    await t.context.driver.findElement(By.id('fTerms')).click();
    await t.context.driver.findElement(By.className('changeUserDataBtn')).click();
    const signupErrorMessage = await t.context.driver.findElement(By.className('changeUserDataSuccessInfo')).getText();
    t.is(signupErrorMessage, 'User data changes successfully saved!');
});
