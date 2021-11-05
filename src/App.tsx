import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productFetchData, selected, chooseProductId } from './store/reducer';
import { ProductDetalis } from './ProductDetalis';
import { FormToAdd } from './FormToAdd';
import './App.scss';
import { State } from './react-app-env';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const {
    productToRender, select, productId, add,
  } = useSelector((state: State) => state.reducer);

  useEffect(() => {
    dispatch(productFetchData());
  }, [select]);

  return (
    <div className="App">
      <h1>List of products</h1>
      Sort by:
      {' '}
      <select
        value={select}
        onChange={event => {
          dispatch(selected(event.target.value));
          dispatch({
            type: event.target.value,
          });
        }}
      >
        <option value="select">Choose</option>
        <option value="alphabetically">Alphabetically</option>
        <option value="count">Count</option>
      </select>
      <ul className="list-group">
        {productToRender.map((item: any) => {
          return (
            <>
              <li key={item.id} className="list-group-item">
                <h2 className="h2">{item.name}</h2>
                <button
                  className="btn btn-info"
                  type="button"
                  onClick={() => dispatch(chooseProductId(item.id))}
                >
                  Show details

                </button>
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={() => dispatch({
                    type: 'delete',
                    id: item.id,
                  })}
                >
                  Delete

                </button>
              </li>
            </>
          );
        })}
      </ul>
      <div>
        <button
          className="btn btn-success"
          type="button"
          onClick={() => dispatch({
            type: 'add',
            add: true,
          })}
        >
          Add Product

        </button>
      </div>

      {add && (
        <div>
          <h2>Give me some informarion, and then I can add a product  :)</h2>
          <FormToAdd />
        </div>
      )}
      {productId && (
        <ProductDetalis />
      )}
    </div>
  );
};

export default App;
// qqq
