import { createAction } from "@reduxjs/toolkit";

const addTodo = createAction('init storage')
addTodo({ storedItems: 'Buy milk' })