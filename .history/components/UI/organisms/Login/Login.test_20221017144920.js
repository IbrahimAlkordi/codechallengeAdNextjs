/**
 * @jest-environment jsdom
 */
 import React from "react";
 import { fireEvent, render, screen, waitFor } from "@testing-library/react";
 import Login from "./Login";
 import { Provider } from "react-redux";
 import store from "../../../../redux/store";
 import { createStore } from "redux";
 import reducers from "../../../../redux/reducers/index";
 import "@testing-library/jest-dom";
 import { act } from "react-dom/test-utils";
 
 test("username input should be rendered", () => {
   const store = createStore(reducers);
   const wrapper = ({ children }) => (
     <Provider store={store}>{children}</Provider>
   );
 
   render(<Login />, { wrapper });
   const usernameInputEl = screen.getByPlaceholderText(/username/i);
   expect(usernameInputEl).toBeInTheDocument();
 });
 
 test("password input should be rendered", () => {
   const store = createStore(reducers);
   const wrapper = ({ children }) => (
     <Provider store={store}>{children}</Provider>
   );
 
   render(<Login />, { wrapper });
   const passwordInputEl = screen.getByPlaceholderText(/password/i);
   expect(passwordInputEl).toBeInTheDocument();
 });
 
 test("button should be rendered", () => {
   const store = createStore(reducers);
   const wrapper = ({ children }) => (
     <Provider store={store}>{children}</Provider>
   );
 
   render(<Login />, { wrapper });
   const buttonEl = screen.getByTestId(/loginbtn/i);
   expect(buttonEl).toBeInTheDocument();
 });
 
 test("username input should be empty", () => {
   const store = createStore(reducers);
   const wrapper = ({ children }) => (
     <Provider store={store}>{children}</Provider>
   );
 
   render(<Login />, { wrapper });
   const usernameInputEl = screen.getByPlaceholderText(/username/i);
   expect(usernameInputEl.value).toBe("");
 });
 
 test("password input should be empty", () => {
   const store = createStore(reducers);
   const wrapper = ({ children }) => (
     <Provider store={store}>{children}</Provider>
   );
 
   render(<Login />, { wrapper });
   const passwordInputEl = screen.getByPlaceholderText(/password/i);
   expect(passwordInputEl.value).toBe("");
 });
 
 test("button should be disabled", () => {
   const store = createStore(reducers);
   const wrapper = ({ children }) => (
     <Provider store={store}>{children}</Provider>
   );
 
   render(<Login />, { wrapper });
   const buttonEl = screen.getByTestId(/loginbtn/i);
   expect(buttonEl).toBeDisabled();
 });
 
 test("username input should change", () => {
   const store = createStore(reducers);
   const wrapper = ({ children }) => (
     <Provider store={store}>{children}</Provider>
   );
     render(<Login />, { wrapper });
     const usernameInputEl = screen.getByPlaceholderText(/username/i);
     const testValue = "test";
  
  
   act(() => {
 
     fireEvent.change(usernameInputEl, { target: { value: testValue } });
  });
 
   expect(usernameInputEl.value).toBe(testValue); 
 });
 
 test("password input should change", () => {
   const store = createStore(reducers);
   const wrapper = ({ children }) => (
     <Provider store={store}>{children}</Provider>
   );
 
   render(<Login />, { wrapper });
   const passwordInputEl = screen.getByPlaceholderText(/password/i);
   const testValue = "test";
   act(() => {
     fireEvent.change(passwordInputEl, { target: { value: testValue } });
   });
   expect(passwordInputEl.value).toBe(testValue);
 });
 
 test("button should not be disabled when inputs exist", () => {
   const store = createStore(reducers);
   const wrapper = ({ children }) => (
     <Provider store={store}>{children}</Provider>
   );
 
   render(<Login />, { wrapper });
   const buttonEl = screen.getByTestId(/loginbtn/i);
   const usernameInputEl = screen.getByPlaceholderText(/username/i);
   const passwordInputEl = screen.getByPlaceholderText(/password/i);
 
   const testValue = "test";
   act(() => {
     fireEvent.change(usernameInputEl, { target: { value: testValue } });
     fireEvent.change(passwordInputEl, { target: { value: testValue } });
   });
   expect(buttonEl).not.toBeDisabled();
 });
 