import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Container } from "@material-ui/core";

function ContactsList(props) {
  props.contacts.map((contact) => console.log(contact));
  return (
    <Container>
      <List>
        {props.contacts.map((contact) => (
            <ListItem>
              <ListItemText primary={contact.name} secondary={contact.email} />
            </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default ContactsList;
