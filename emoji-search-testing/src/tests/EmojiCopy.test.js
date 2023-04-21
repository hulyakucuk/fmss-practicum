import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import userEvent from "@testing-library/user-event"

describe("Emoji Copy",()=>{

    beforeEach(()=>{
        render(<App />);
    });

    it('should copy emoji on click',()=>{
        const copyEmoji = screen.getByText('Smile');
        userEvent.click(copyEmoji);
        expect(copyEmoji.parentElement.getAttribute('data-clipboard-text')).toMatch('😄');
      }) ;
});
