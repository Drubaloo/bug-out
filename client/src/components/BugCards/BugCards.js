import React from "react";
import EditBtn from "../EditBtn/EditBtn";
import { List, ListItem } from "./List";
import "./BugCards.css";
import "./style.css";

function BugCards(props) {
  return (
    <>
      <List id={props.id}>
        {props.bugs.map((bug) => (
          <ListItem key={bug._id} id={bug._id}>
            {bug.title}
            <EditBtn toggleEditModal={props.wasd} bugId={bug._id}/>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default BugCards;
