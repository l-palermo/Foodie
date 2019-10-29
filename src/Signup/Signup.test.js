import React from 'react';
import { shallow } from 'enzyme';
import Signup from './Signup';

describe('Signup', () => {
  describe('form', () => {
    it('renders the name field', () => {
      const wrapper = shallow(<Signup />);
      const fullNameInput = wrapper.find('Input[title="Full Name"]');
      expect(fullNameInput.length).toEqual(1);
    })
  })
})

// POTENTTIAL FEATURE TEST
// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('http://localhost:3000/');
//   await page.waitForSelector('input[name="name"]');
//   await page.type('input[name="name"]', 'pokemon');
//   await page.click('Button');
//   expect(1).toEqual(1);
//   await browser.close();
// })();