import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Profile status component", () => {

  test("status from props should be in the status", () => {
    const component = create(<ProfileStatus status="Test status #12345" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("Test status #12345");
  });

  test("status div showing correct text", () => {
    const component = create(<ProfileStatus status="Test status #12345" />);
    const root = component.root;
    const status = root.findByProps({ id: "status-div" });
    expect(status.children).toEqual(["Test status #12345"]);
  });

  test("input shouldn't be displayed and throw error", () => {
    const component = create(<ProfileStatus status="Test status #12345" />);
    const root = component.root;

    expect(() => {
      const input = root.findByType('input');
    }).toThrow();
  });
  
  test("toggling to status edit mode when double click", () => {
    const component = create(<ProfileStatus status="Test status #12345" />);
    const root = component.root;

    const statusDiv = root.findByProps({ id: "status-div" });
    statusDiv.props.onDoubleClick();

    const statusInput = root.findByType("input");
    expect(statusInput.props.value).toBe("Test status #12345");
  });
  
  test("update status callback has been called", () => {
    const mockCallback = jest.fn();

    const component = create(<ProfileStatus status="Test status #12345" updateUserStatus={mockCallback}/>);
    const instance = component.getInstance();

    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});