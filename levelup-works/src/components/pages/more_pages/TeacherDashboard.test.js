import React, { useState } from "react";
import { TeacherDashboard } from "./TeacherDashboard";
import { useTab } from "./useTab";
import { render, renderHook, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Teacher Dashboard", () => {
    let mockFunction;
    let component;

    beforeEach(() => {
        mockFunction = () => { return true }
        component = render(<TeacherDashboard setIsDashboardOpen={mockFunction} />);
    })

    test("Renders the first tab", () => {
        const firstTab = component.getByTestId("progress-tracker");
        expect(firstTab.textContent).toBe("PROGRESS TRACKER");
    })

    test("Tab should be set to an initial state of 1", () => {
        const { result } = renderHook(useTab);
        // result: { current: { tabSelected: 1, toggleTab: [Function: toggleTab] } }
        expect(result.current.tabSelected).toBe(1);
    });

    test("Tab should be set to 2 when passed into toggleTab", () => {
        const { result } = renderHook(useTab);
        act(() => {
            result.current.toggleTab(2);
        });
        expect(result.current.tabSelected).toBe(2);
    });
})