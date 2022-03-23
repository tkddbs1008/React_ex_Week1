import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";

const WeekList = () => {

    const hover = (e) => {
        e.target.style.cursor = "pointer";
    }
    const days = ["일","월","화","수","목","금","토"]
    const week_days = days.map((el, index) => {
        let today = new Date().getDay();
        let day = today + index > 6 ? today + index - 7 : today + index;
        return days[day]
    })
    let history = useHistory();
    const week_rates = week_days.map((days) => {
        return {
            day: days,
            rate: Math.round(Math.random()* (4)+1)
        }
    });
    console.log(week_rates);
    return (
        <ListStyle> {
            week_rates.map((d, index) => {
                return (
                    <ItemStyle
                    onMouseOver={hover}
                        key={`${index}`}
                        className="list_item"
                        onClick={() => {
                            history.push(`/review/${week_days[index]}`);
                    }}>
                        <P>{d.day}</P> {
                        Array.from({length:5}, (el, index) => {
                            return (
                                <CircleRate key={index} style={{backgroundColor: d.rate-1 < index ? "#C8CDE5" : "#FFBF00"}}/>
                            )
                        })}
                        <P style={{float: "right", margin:"0px"}}><HP style={{color:"#FFBF00", margin:"1px 0px 0px 0px"}}>{d.rate}</HP>/5 점</P>
                    </ItemStyle>
                );
            })
            }
        </ListStyle>
    )
};

const ListStyle = styled.div `
display: flex;
flex-direction: column;
height: 100%;
overflow-x: hidden;
overflow-y: auto;
`;

const ItemStyle = styled.div `
padding: 16px;
margin: 8px;
background-color: #181E34;
border: 2px solid slateblue;
border-radius: 30px;
`;

const P = styled.p `
margin: 0px 10px 0px 0px;
display: inline-flex;
font-Weight: bold;
color: #8294C7;
font-size: 18px;
`;

const HP = styled.span `
margin: 0px 10px 0px 0px;
display: inline-flex;
font-Weight: bold;
color: #8294C7;
font-size: 18px;
`

const CircleRate = styled.div `
width: 12px;
height: 12px;
border-radius: 100%;
margin: 0px 2px;
display: inline-flex;
`;



export default WeekList;