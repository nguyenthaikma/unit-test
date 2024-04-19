import {
  fireEvent,
  render,
  screen
} from "@testing-library/react";
import renderer from "react-test-renderer";
import { Play } from ".";

import axios from "axios";
import Comments from "../Comment";

jest.mock("axios");

const axiosMocked = jest.mocked(axios);

const defaultData = [
  {
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
  },
  {
    postId: 1,
    id: 2,
    name: "quo vero reiciendis velit similique earum",
    email: "Jayne_Kuhic@sydney.com",
    body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
  },
];

describe("Play", () => {
  it("plus number", () => {
    render(<Play />);
    const number = screen.getByTestId("number");
    const plus = screen.getByTestId("plus");

    expect(number).toHaveTextContent("1");
    fireEvent.click(plus);
    expect(number).toHaveTextContent("2");
  });

  it("minus number", () => {
    render(<Play />);
    const number = screen.getByTestId("number");
    const minus = screen.getByTestId("minus");

    expect(number).toHaveTextContent("1");
    fireEvent.click(minus);
    expect(number).toHaveTextContent("0");
  });
});

describe("Play snapshot", () => {
  it("Play snapshot", () => {
    const tree = renderer.create(<Play />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Comment", () => {
  it("List comment", async () => {
    axiosMocked.get.mockResolvedValue({ data: defaultData });

    render(<Comments />);

    const comments = await screen.findAllByTestId("comment");

    expect(comments).toHaveLength(2);
  });
});
