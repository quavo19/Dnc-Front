import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductsScreen from './screens/ProductsScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import ProfileScreen from './screens/ProfileScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import YourOrdersScreen from './screens/YourOrdersScreen';
import AdminConsoleScreen from './screens/AdminConsoleScreen';
import OrderSuccessScreen from './screens/OrderSuccessScreen';
import SeeOrderList from './screens/SeeOrderList'
//import HomeSlider from './components/HomeSlider';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<ProductsScreen />}></Route>
            <Route path='/product/:id' element={<ProductScreen />}></Route>
            <Route path='/cart' element={<CartScreen />}></Route>
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/registration' element={<RegistrationScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/checkout' element={<CheckoutScreen />} />
            <Route path='/your-orders' element={<YourOrdersScreen />} />
            <Route path='/your-orders/:id' element={<SeeOrderList />} />
            <Route path='/admin-console' element={<AdminConsoleScreen />} />
            <Route path='/order-success' element={<OrderSuccessScreen />} />
          </Routes>
        </main>
       
      </Router>
    </ChakraProvider>
  );
}

export default App;
