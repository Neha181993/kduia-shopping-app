import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Addinkg this now
import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Shopping App</h1>
                <div className='row mt-3'> 
                    <div className='col-sm'>
                        <CartValue />
                    </div>
                    <div className='col-sm'>
                        <Location />
                    </div>
                </div>
                <h3 className='mt-3'>Shopping Cart</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>
                <h3 className='mt-3'>Add Items</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <ItemSelected/>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};
export default App;




import React from 'react';

const Container = ({ children }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
            {children}
        </div>
    );
};

export default Container;






