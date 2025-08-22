import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineEditNote } from "react-icons/md";
import Checkbox from "@mui/material/Checkbox";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
export default function TodoListItem({
  todoElem,
  setTodoToEdit,
  handleDeleteTodo,
}) {
  const [checked, setChecked] = React.useState([0]);
  return (
    <>
      <ListItem
        // key={value}

        disablePadding
      >
        <ListItemButton role={undefined} dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              // checked={checked.includes(value)}
              tabIndex={-1}
              disableRipple
              // inputProps={{ "aria-labelledby": labelId }}
            />
            {todoElem.TodoText}{" "}
            <MdOutlineEditNote onClick={() => setTodoToEdit(todoElem)} />
            <MdDeleteForever 
              className="delete-btn"
              onClick={() => handleDeleteTodo(todoElem.id)}
            />
          </ListItemIcon>
          <ListItemText />
        </ListItemButton>
      </ListItem>
    </>
  );
}