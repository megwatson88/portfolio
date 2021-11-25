import React from "react";
import { Form, Formgroup, Label, Input, Button } from 'react-bootstrap'

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>
        <a href="mailto:ml.1988.watson@gmail.com" className="contact-link"> Email Me</a>
      </p>
     <Form>
        <Formgroup> 
          <label for='Questions'> Questions</label>
          <Input type="textarea" id="questions" name="questions" placeholder="Questions for me?"> </Input>
        </Formgroup>
        <Formgroup> 
          <label for='email'> Email</label>
          <Input type="textarea" id="email" name="email" placeholder="Submit your Email"> </Input>
        </Formgroup>
        <Formgroup> 
          <label for='ProjectType'> Project Type</label>
          <Input type="textarea" id="project" name="project" placeholder="What kind of project are you looking to do?"> </Input>
        </Formgroup>
     </Form>
    </div>
  
  );
}
export default Contact;