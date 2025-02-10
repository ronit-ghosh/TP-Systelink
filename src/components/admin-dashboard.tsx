"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"

type Contact = {
  name: string
  email: string
  phone: number
  service: string
  message: string
}


export default function AdminDashboard({ mockData }: { mockData: Contact[] }) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredData = mockData?.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.service.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="sm:0 md:0 lg:mx-24 xl:mx-32 2xl:mx-40 mb-10">
      <div className="h-24"></div>
      <div className="flex items-center justify-end gap-6 mb-10">
        <Input
          type="search"
          placeholder="Search contacts..."
          className="max-w-sm place-self-end"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="outline" onClick={() => signOut({ callbackUrl: '/' })}>Sign Out</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Message</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((contact, index) => (
            <TableRow key={index}>
              <TableCell>{contact.name}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.phone}</TableCell>
              <TableCell>{contact.service}</TableCell>
              <TableCell>{contact.message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

