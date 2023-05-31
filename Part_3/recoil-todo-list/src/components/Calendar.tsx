import React from 'react';
import {pad} from '../utils/util'
import styled from "@emotion/styled";
import {BiChevronLeft, BiChevronRight} from "react-icons/bi";

const Header = styled.div(
    {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
);

const Title = styled.h1(
    {
        margin: "0",
        padding: "8px 24px",
        fontSize: "24px",
        fontWeight: "normal",
        textAlign: "center",
        color: "#F8F7FA",
    }
)

const ArrowButton = styled.button<{ pos: 'left' | 'right'}>(
    {
        border: "none",
        borderRadius: "4px",
        padding: "8px 12px",
        backgroundColor: "transparent",
        fontSize: "18px",
        cursor: "pointer",
        color: "#F8F7FA",
    }
)

const ButtonContainer = styled.div(
    {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
)

const Table = styled.h1(
    {
        margin: "0",
        padding: "8px 24px",
        fontSize: "24px",
        fontWeight: "normal",
        textAlign: "center",
        color: "F8F7FA",
        marginTop: "36px",
    }
)

const Base = styled.div(
    {
        width: "100%",
        height: "100vh",
        padding: "24px 12px;",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
        backgroundColor: "#28272A",

    },
);





const Calendar = () => {
    return (
        <Base>
            <Header>
                <ButtonContainer>
                    <ArrowButton pos="left">
                        <BiChevronLeft/>
                    </ArrowButton>
                    <Title>title</Title>
                    <ArrowButton pos="right">
                        <BiChevronRight/>
                    </ArrowButton>
                </ButtonContainer>
            </Header>
            <Table>

            </Table>
        </Base>
    );
};

export default Calendar;