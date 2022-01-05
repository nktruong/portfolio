// import Container from '../components/Container'

// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function Contact() {
  const [state, handleSubmit] = useForm("mzbyopno");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <label htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          className=""
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <textarea
          id="message"
          name="message"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
  );
}

// function Contact(){
//   return (
//     <Container className="bg-gray-50">
//       <h1 className="lg:text-5xl font-semibold text-green-600">You've landed on the Contact page! The contact form is currently under construction, but you can also contact me via <a href="https://twitter.com/nathanktruong" target="_blank" rel="noreferrer" className="text-blue-500">Twitter</a>, <a href="https://www.linkedin.com/in/nktruong/" className="text-blue-700">LinkedIn</a> or <a href="mailto:nathankhaitruong@gmail.com" className="text-coolgray-600">email</a>.</h1>


//     </Container>
//   )
// }

export default Contact