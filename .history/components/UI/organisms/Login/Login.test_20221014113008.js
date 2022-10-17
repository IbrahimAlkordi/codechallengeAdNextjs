import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from './Login'

test("username input should be rendered" , () =>{
render(<Login/>);
const usernameInput = screen.getAllByPlaceholderText(/username/i);
expect(usernameInput).toBeInTheDocument();
})