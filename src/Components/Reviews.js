import React from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";

const Reviews = () => {
    const params = useParams();
    const history = useHistory();
    const [rate, setRate] = React.useState(0);

    React.useEffect(() => {
        const press = (e) => {
            const regex = /[1-5]/g;
            if (regex.test(parseInt(e.key)) === true) {
                setRate(parseInt(e.key));
            }
        };
        window.addEventListener("keydown", press);

        return () => window.removeEventListener("keydown", press);
    }, [rate]);

    const hover = (e) => {
        e.target.style.cursor = "pointer";
    }
    return (
        <>
        <Title>
            <span>나의 {`${params.week_day}`}요일 평점은?</span>
        </Title>
        <div style={{marginLeft: "22%", marginTop:"20px"}}>
            {Array.from({ length: 5}, (el, index) => {
                return (
                    <Rating key={index} onClick={()=> {setRate(index +1);}} style={{backgroundColor: rate < index +1 ? "#C8CDE5" : "#FFBF00"}}><RateNum>{index +1}</RateNum></Rating>
                )
            })}
        </div>
        <Submit onMouseOver={hover} onClick={() =>history.push("/")}>평점 남기기</Submit>
        </>
    )
};


const Title = styled.h1 `
font-size: 25px;
text-align: center;
color: #8794C7;
`;

const Rating = styled.div `
width: 30px;
height: 30px;
border-radius: 100%;
margin: 0px 5px;
display: inline-flex;
background: #C8CDE5;
`

const RateNum = styled.span `
margin: auto;
font-size: 18px;
font-weight: bold;
`

const Submit = styled.button `
width: 200px;
height: 50px;
margin: 75px;
background-color: #181E34;
border: 3px solid slateblue;
border-radius: 30px;
font-weight: bold;
font-size: 20px;
color: #8294C7;
`




export default Reviews;