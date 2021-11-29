import React from 'react';
import { getByText, render} from "@testing-library/react";
import {PageTitle} from "../models";
import Title from "../Title";

describe( "<Title/>",() => {
    it("the content should be", () => {
        const testTitle = PageTitle.Home


        const {container} = render(
            <Title children={testTitle}/>
        )

        expect(getByText(container, '' )).toBeInTheDocument();

    })
})