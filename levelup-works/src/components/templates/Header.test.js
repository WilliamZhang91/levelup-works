import React from "react";
import { Header } from "./Header";
import { Modal } from "./Modal";
import { getRoles } from "@testing-library/react";
import { render, cleanup, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

describe("Test header and Modal components", () => {
    let headerComponent;
    let modalComponent;

    beforeEach(() => {
        headerComponent = render(<Header />, { wrapper: MemoryRouter });
    });

    afterEach(cleanup)

    test("Register button is rendered", () => {
        headerComponent.getByTestId("register");
        expect(screen.getByText(/register/i)).toBeInTheDocument;
    });

    test("Login button is rendered", () => {
        headerComponent.getByTestId("login");
        expect(screen.getAllByText(/login/i));
    });

    //test("it renders without crashing", () => {
    //    const div = document.createElement("div")
    //    ReactDOM.render(<Modal />, div);
    //    return true;
    //})
});