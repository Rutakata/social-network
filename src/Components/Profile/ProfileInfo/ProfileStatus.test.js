import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";


describe("ProfileStatus Component", () => {
    test("Props status to state status", () => {
        const component = create(<ProfileStatus status="test status" />)
        const instance = component.getInstance()
        expect(instance.state.status).toBe("test status")
    })

    test("Span should be displayed", () => {
        const component = create(<ProfileStatus status="test status" />)
        const root = component.root
        let span = root.findByType("span")
        expect(span).not.toBeNull()
    })

    test("Span to have correct status", () => {
        const component = create(<ProfileStatus status="test status" />)
        const root = component.root
        let span = root.findByType("span")
        expect(span.children[1]).toBe("test status")
    })

    test("Input shouldnt be displayed", () => {
        const component = create(<ProfileStatus status="test status" />)
        const root = component.root
        expect(() => {
            let input = root.findByType("input")
        }).toThrowError()
    })

    test("Input to change span on click", () => {
        const component = create(<ProfileStatus status="test status" />)
        const root = component.root
        let span = root.findByType("span")
        span.props.onClick()
        let input = root.findByType("input")
        expect(input.props.value).toBe("test status")
    })

    test("Callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status="test status" updateStatus={mockCallback} />)
        const instance = component.getInstance()
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})