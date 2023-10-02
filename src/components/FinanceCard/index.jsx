import { ListComponent } from "../FinanceList";


export const RenderSalary = ({ listValues, removeValue }) => {
  return (
    <section>
      <h3>Resumo financeiro</h3>
      {listValues.length > 0 ? (
        <ul>
          {listValues.map((list, i) => {
            return (
              <ListComponent
                key={i}
                id={i}
                description={list.description}
                value={list.value}
                typeValue={list.typeValue}
                removeValue={removeValue}
              />
            );
          })}
        </ul>
      ) : (
        <h2>Você ainda não possui nemhum lançamento</h2>
      )}
    </section>
  );
}