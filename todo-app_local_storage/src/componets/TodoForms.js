import React, { useState } from "react";
import { 
	FormGroup,
	Input,
	InputGroup,
	InputGroupAddon,
	Button,
	Form,
	Container
 } from "reactstrap";
 import { v4 } from "uuid";

 const TodoForm = () => {
	 const [todoString, setTodoString] = useState("")
	 return(
		<Form>
		<FormGroup>
			<InputGroup>
			<Input name="todo" type="text" id="todo" placeholder="Enter a todo Task" value={todoString} onChange={e => setTodoString(e.target.value)}/>
			<InputGroupAddon addonType="prepend">
			<Button color="success">Add Todo</Button>
			</InputGroupAddon>
			</InputGroup>
		</FormGroup>
	</Form>
	 )
 }

 export default TodoForm;

