import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from '@/components/ui/badge'

const AppliedJobsTable = () => {
  return (
    <div className='border mt-2'>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job  Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell >17/12/2024</TableCell>
            <TableCell>Software Developer</TableCell>
            <TableCell>Zoho</TableCell>
            <TableCell className="text-right"><Badge>selected</Badge></TableCell>
          </TableRow>
        </TableBody>
      </Table>

    </div>
  )
}

export default AppliedJobsTable