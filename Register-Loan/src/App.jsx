import RequestLoanForm from './components/RequestLoanForm'
import { UserContext } from './contexts/UserContext'
import './App.css'

function App() {
  return (

    <UserContext.Provider value={
      {
        userName: "@MohammadAl-Shaikh",
        name: "Mohammad",
        email: "mohammad@email.com"
      }
    }>
      <>
        <RequestLoanForm />
      </>
    </UserContext.Provider>

  )
}

export default App
