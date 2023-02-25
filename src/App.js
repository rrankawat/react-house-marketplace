import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import PrivateRoute from './routes/PrivateRoute'
import AuthRoute from './routes/AuthRoute'
import Navbar from './components/Navbar'
import Explore from './pages/Explore'
import ForgotPassword from './pages/ForgotPassword'
import Offers from './pages/Offers'
import Category from './pages/Category'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import CreateListing from './pages/CreateListing'
import EditListing from './pages/EditListing'
import Listing from './pages/Listing'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Public */}
          <Route path="/" element={<Explore />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/category/:categoryName" element={<Category />} />

          {/* Private */}
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/create-listing" element={<PrivateRoute />}>
            <Route path="/create-listing" element={<CreateListing />} />
          </Route>
          <Route path="/edit-listing/:listingId" element={<PrivateRoute />}>
            <Route path="/edit-listing/:listingId" element={<EditListing />} />
          </Route>
          <Route
            path="/category/:categoryName/:listingId"
            element={<PrivateRoute />}
          >
            <Route
              path="/category/:categoryName/:listingId"
              element={<Listing />}
            />
          </Route>
          <Route path="/contact/:landlordId" element={<PrivateRoute />}>
            <Route path="/contact/:landlordId" element={<Contact />} />
          </Route>

          {/* Auth */}
          <Route path="/sign-in" element={<AuthRoute />}>
            <Route path="/sign-in" element={<SignIn />} />
          </Route>
          <Route path="/sign-up" element={<AuthRoute />}>
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
        </Routes>
        <Navbar />
      </Router>

      <ToastContainer />
    </>
  )
}

export default App
