import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";

describe("Header Component", () => {

    let emoji,title;

    beforeEach(()=>{
        render(<Header />);
        title = screen.getByText(/Emoji Search/i);
        emoji = screen.getAllByRole("img");
    });
    
    it("should check if the header has a title in the description section", () => {
        expect(title).toBeInTheDocument();
    });

    it("check if two emojis are rendered in the header", () => {
        expect(emoji).toHaveLength(2);
    });
    });