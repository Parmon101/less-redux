import * as React from "react";
import { useDispatch } from "react-redux";
import { fetchCustomers } from "../../asyncActions/customers";
import {
    addCustomerAction,
    removeCustomerAction,
} from "../../store/customerReducer";

type Props = {
    customers: any;
    onChange?: () => void;
};

export const Customers: React.FC<Props> = ({ customers }) => {
    const dispatch = useDispatch();

    const addCustomer = (name: any) => {
        const customer = {
            name,
            id: Date.now(),
        };
        dispatch(addCustomerAction(customer));
    };
    const removeCustomer = (customerID: any) => {
        dispatch(removeCustomerAction(customerID.id));
    };
    return (
        <>
            <div style={{ border: "1rem solid orange" }}>
                <button onClick={() => addCustomer(prompt())}>
                    Добавить клиента
                </button>
                <button onClick={() => dispatch(fetchCustomers())}>
                    Добавить клиента из базы
                </button>
                {/* <button onClick={twoFunc}>Удалить клиента</button> */}
                {customers.length > 0 ? (
                    <div>
                        {customers.map((customer) => (
                            <div
                                key={customer.id}
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
        </>
    );
};
