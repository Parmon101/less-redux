import { useSelector } from "react-redux";
import "./App.css";
import { Counting } from "./components/Counting/Counting";
import { Customers } from "./components/Customers/Customers";

export const App = () => {
    const cash = useSelector((state: any) => state.cash.cash);
    const customers = useSelector((state: any) => state.customers.customers);

    return (
        <>
            <Counting cash={cash} />
            <Customers customers={customers} />
        </>
    );
};

export default App;
