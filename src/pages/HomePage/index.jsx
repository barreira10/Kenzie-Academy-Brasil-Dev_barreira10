import "../../styles/index.scss"
import { useState } from "react";
import { Header } from "../../components/Header/index.jsx"
import { FormPages } from "../../components/FinanceForm/index.jsx"
import { RenderValue } from "../../components/TotalValue/index.jsx";
import { RenderSalary } from "../../components/FinanceCard/index.jsx"

export const HomePage = () => {

    const [listValues, setListValues] = useState([]);

    const addValue = (formValues) => {
        const newValues = { ...formValues };
        setListValues([...listValues, newValues]);
    }

    const removeValue = (removeId) => {
        const newListValues = listValues.filter((elem, i) => i !== removeId)
        setListValues(newListValues);
    }

    return (
        <>
            <Header />
            <main>
                <div className="div__app">
                    <FormPages addValue={addValue} />
                    <RenderSalary listValues={listValues} removeValue={removeValue} />
                </div>

                <RenderValue listValues={listValues} />
            </main>
        </>
    )
}