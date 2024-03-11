import React, { useState } from "react";

export default function SignUpForm() {
  return (
    <form id="signUpForm">
      <label htmlFor="emailInput">Email</label>
      <input
        type="text"
        id="emailInput"
        name="emailInput"
        required
        placeholder="example@example.com"
      />
      <label htmlFor="passwordInput">Password</label>
      <input
        type="number"
        id="supplyLength"
        name="supplyLength"
        required
        max="999"
        placeholder="PassW0rD"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
