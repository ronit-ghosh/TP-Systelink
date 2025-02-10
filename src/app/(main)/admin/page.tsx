import AdminDashboard from '@/components/admin-dashboard'
import axios from "axios";
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

async function getMockData() {
  try {
    const res = await axios.get(`${process.env.NEXTAUTH_URL}/api/data`)
    return res.data.data
  } catch (error) {
    console.error(error)
    return []
  }
}

const page = async () => {
  const authorized = await getServerSession()

  if (!authorized) {
    return redirect("/login")
  }

  const mockData = await getMockData()

  return (
    <AdminDashboard mockData={mockData} />
  )

}

export default page