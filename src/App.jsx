import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
    addCustomerAction,
    removeCustomerAction,
} from "./store/customerReducer";

export const App = () => {
    const dispatch = useDispatch();
    const cleanSumm = useSelector((state) => state.summ);
    const cash = useSelector((state) => state.cash.cash);
    const customers = useSelector((state) => state.customers.customers);
    const addCash = (cash) => dispatch({ type: "ADD_CASH", payload: cash });

    const getCash = (cash) =>
        dispatch(
            { type: "GET_CASH", payload: cash }
            // { type: "SUMM_CASH", payload: cleanSumm }
        );

    const getSumm = (cleanSumm) =>
        dispatch(
            // { type: "GET_CASH", payload: cash }
            { type: "SUMM_CASH", payload: cleanSumm }
        );

    // const twoFunc = () => {
    //     const one = () => console.log(1);
    //     const two = () => console.log(2);
    // };

    // const one = (ell = 1) => console.log(ell);
    // const two = (ell = 2) => console.log(ell);

    const twoFunc = () => {
        let el = Number(prompt());
        getCash(el);
        getSumm(el);
    };

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        };
        dispatch(addCustomerAction(customer));
    };

    const removeCustomer = (customerID) => {
        dispatch(removeCustomerAction(customerID.id));
    };
    return (
        <div className={" app"}>
            <div style={{ fontSize: "3rem" }}>{cash}</div>
            <div style={{ display: "flex" }}>
                <button onClick={() => addCash(Number(prompt()))}>
                    Пополнить счет
                </button>
                {/* <button onClick={() => getCash(Number(prompt()))}>
                    Снять со счета
                </button> */}
                <button onClick={twoFunc}>Лога</button>
                <button onClick={() => addCustomer(prompt())}>
                    Добавить клиента
                </button>
                <button onClick={twoFunc}>Удалить клиента</button>
            </div>
            <div style={{ fontSize: "2rem" }}> Снято {cleanSumm}</div>
            {customers.length > 0 ? (
                <div>
                    {customers.map((customer) => (
                        <div
                            onClick={() => removeCustomer(customer)}
                            style={{
                                fontSize: "2rem",
                                border: "1px solid black",
                                padding: "10px",
                                marginTop: 5,
                            }}
                        >
                            {customer.name}
                        </div>
                    ))}
                </div>
            ) : (
                <div style={{ fontSize: "2rem", marginTop: 20 }}>Пусто</div>
            )}
        </div>
    );
};

export default App;
