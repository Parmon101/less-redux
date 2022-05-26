import * as React from "react";
import { useDispatch } from "react-redux";

type Props = {
    cash: number;
    onChange?: () => void;
};

export const Counting: React.FC<Props> = ({ cash }) => {
    const dispatch = useDispatch();
    const addCash = (cash: number) =>
        dispatch({ type: "ADD_CASH", payload: cash });

    const getCash = (cash: number) =>
        dispatch({ type: "GET_CASH", payload: cash });

    const getSumm = (cleanSumm: number) =>
        dispatch({ type: "SUMM_CASH", payload: cleanSumm });
    const twoFunc = () => {
        let el = Number(prompt());
        getCash(el);
        getSumm(el);
    };
    return (
        <>
            <div style={{ border: "1rem solid black" }}>
                <div style={{ fontSize: "3rem" }}>{cash}</div>
                <div style={{ display: "flex" }}>
                    <button onClick={() => addCash(Number(prompt()))}>
                        Пополнить счет
                    </button>
                    <button onClick={twoFunc}>Снять</button>
                </div>
            </div>
        </>
    );
};
