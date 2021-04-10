'use strict';

export async function sendForm(formSelectorQuery) {
    const form = document.querySelector(formSelectorQuery);
    const body = new URLSearchParams(new FormData(form)).toString();
    const response = await fetch(form.action, {
        method: 'post',
        body,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    });
    if (response.redirected) {
        window.location = response.url;
    } else {
        try {
            const error = await response.json();
            return error;
        } catch {

        }
    }
}

export function checkUsername(fieldId, mistakeFieldId) {
    const RULES = [
        [/^$/, 'Please enter username'],
        [/[^A-Za-z\d]/, 'Allowed English letters, arabic numbers'],
        [/^.{0,2}$/, 'Too short username'],
        [/^.{20,}$/, 'Too long username']
    ];
    return checkFormField(fieldId, mistakeFieldId, RULES);
}

export function checkEmail(fieldId, mistakeFieldId) {
    const RULES = [
        [/^$/, 'Please enter email']
    ];
    return checkFormField(fieldId, mistakeFieldId, RULES);
}

export function checkPassword(fieldId, mistakeFieldId) {
    const RULES = [
        [/^$/, 'Please enter password'],
        [/^.{0,6}$/, 'Too short password'],
        [/^.{72,}$/, 'Too long password'],
    ];
    return checkFormField(fieldId, mistakeFieldId, RULES);
}

export function checkConfirmPassword(fieldId, mistakeFieldId, passwordFieldId) {
    const expression = {
        test(confirmPassword) {
            const password = getFieldValue(passwordFieldId);
            return password !== confirmPassword;
        }
    }
    const RULES = [
        [expression, 'Passwords do not match'],
    ];
    return checkFormField(fieldId, mistakeFieldId, RULES);
}

export function checkTerms(fieldId, mistakeFieldId) {
    const RULES = [
        [/^false$/, 'Please accept Terms of Use'],
    ];
    return checkFormField(fieldId, mistakeFieldId, RULES);
}

function checkFormField(fieldId, mistakeFieldId, rules) {
    const fieldValue = getFieldValue(fieldId);
    const mistakeField = document.getElementById(mistakeFieldId);
    const [rule, message] = rules.find(([expression]) => expression.test(fieldValue)) || [];
    if (rule) {
        mistakeField.innerHTML = message;
        mistakeField.style.color = 'rgb(171, 242, 255)';
        return false;
    }
    mistakeField.innerHTML = 'OK';
    mistakeField.style.color = 'rgb(36, 96, 106)';
    return true;
}

function getFieldValue(fieldId) {
    const element = document.getElementById(fieldId);
    if (element.type === 'checkbox') {
        return String(element.checked);
    }
    return element.value;
}
