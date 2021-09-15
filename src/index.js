// data
import Countries from './data/countries.txt';
import Plans from './data/plans.csv';
import PWRequirements from './data/pwRequirements.csv';
// css
import './index.css';
// js
import Form from './form';
import Component from './component';

const countries = Countries.split("\r\n");

(function main() {
  const c = new Component();
  const signUpForm = new Form("sign-up-form");

  const container = c.div("sign-up");
  container.append(c.heading("Sign-Up", 1));

  signUpForm.addInputToForm("email", "Email", "email", true, "", "email-field");

  signUpForm.addInputToForm("text", "Country", "country", true, "", "country-field");
  signUpForm.attachDatalist("countries", countries, "country");
  
  signUpForm.addInputToForm("text", "ZIP Code", "zip", true);

  signUpForm.addOptionsListToForm("Select a Plan", true, Plans, "plan", true);

  signUpForm.addInputToForm("password", "Password", "password", true);
  signUpForm.attachAnnotation("password", PWRequirements);

  signUpForm.addInputToForm("password", "Confirm Password", "confirm-password", true);

  signUpForm.addSubmitCancelButtons("Sign Up", "Go Back");

  container.append(signUpForm.form);
  document.body.append(container);
}());

