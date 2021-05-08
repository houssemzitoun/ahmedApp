import React from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import MuiPhoneNumber from "material-ui-phone-number";
import { Box, Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { display } from "@material-ui/system";

function AddContact(props) {
  const onChangeTextHandler = (e) => {
    const value = e.target.value;
    props.setTextInput({
      ...props.textInput,
      [e.target.name]: value,
    });
  };

  /* const onChangePhoneHandler = (value) =>{
  props.setPhoneInput(value);}
  */
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (props.textInput.name === "" || props.textInput.email === "") {
      alert(" Name and email fields are mondatory !!");
      return;
    }
    props.addContact(props.textInput);
    props.setTextInput({ name: "", email: "" });
  };

  return (
    <div>
      <form>
        <Container maxWidth="sm">
          <Box m={1.5} pt={1}>
            <FormControl>
              <InputLabel htmlFor="component-simple">Name</InputLabel>
              <Input
                id="component-simple"
                value={props.textInput.name}
                name="name"
                onChange={onChangeTextHandler}
              />
            </FormControl>
          </Box>
          <Box m={1.5} pt={1}>
            <FormControl>
              <InputLabel htmlFor="my-input">Email address</InputLabel>
              <Input
                id="my-input"
                aria-describedby="my-helper-text"
                value={props.textInput.email}
                name="email"
                onChange={onChangeTextHandler}
              />
              <FormHelperText id="my-helper-text">
                We'll never share your email.
              </FormHelperText>
            </FormControl>
          </Box>

          <Box mt={4} textAlign="center">
            <Button
              variant="contained"
              size="medium"
              color="primary"
              onClick={onSubmitHandler}
            >
              Add Contact
            </Button>
          </Box>
        </Container>
      </form>
    </div>
  );
}

export default AddContact;
