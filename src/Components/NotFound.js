import React from "react";
import styled from "styled-components"

const NotFound = () => {
    return (
        <>
            <P>올바르지 않은 주소입니다!</P>
        </>
    );
};

const P = styled.p `
text-align: center;
font-Weight: bold;
color: #8294C7;
font-size: 18px;
`;

export default NotFound;