import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import emojiList from "../emojiList.json";
import App from "../App";
let EmojiList;
describe('App', () => {
    beforeEach(() => {
        render(<App />);

        EmojiList = emojiList.slice(0, 10);
    });

    test("should render emoji list correctly", () => {
        EmojiList.forEach((item) => {
            const emojiTitle = screen.getByText(item.title);
            expect(emojiTitle).toBeInTheDocument();
            const emojisymbol = screen.getByAltText(item.title);
            expect(emojisymbol).toBeInTheDocument();
        });
    });

  });