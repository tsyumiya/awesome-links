import AdminForm from "../components/admin-form"
import toast, { Toaster } from "react-hot-toast"

const Admin = () => {
  return (
    <div className="container mx-auto max-w-md py-12">
      <Toaster />

      <h1 className="text-3xl font-medium my-5">Create a new link</h1>

      <AdminForm />
    </div>
  )
}

export default Admin
