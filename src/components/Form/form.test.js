import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from ".";

describe("should focus when click to label", () => {
  it("Click to first name", () => {
    render(<Form />);

    const labelFirstName = screen.getByText(/First/);
    const inputFirstName = screen.getByLabelText(/First/);
    userEvent.click(labelFirstName);

    expect(inputFirstName).toHaveFocus();
  });

  it("Click to last name", () => {
    render(<Form />);

    const labelLastName = screen.getByText(/Last/);
    const inputLastName = screen.getByLabelText(/Last/);
    userEvent.click(labelLastName);

    expect(inputLastName).toHaveFocus();
  });
});

describe("Submit form", () => {
  it("Valid value", async () => {
    const fnc = jest.fn((e) => {
      e.preventDefault();
    });
    render(<Form onSubmit={fnc} />);
    const inputFirstName = screen.getByLabelText(/First/);
    const inputLastName = screen.getByLabelText(/Last/);
    const btnSubmit = screen.getByText("Submit");

    fireEvent.change(inputFirstName, { target: { value: "123" } });
    fireEvent.change(inputLastName, { target: { value: "123" } });

    fireEvent.click(btnSubmit);

    expect(fnc).toHaveBeenCalled();
  });
});
