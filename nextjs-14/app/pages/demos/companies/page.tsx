
'use client'

import CompanyColumns from "@/app/components/columns/company-columns"
import CompanyRows from "@/app/components/rows/company-rows"
import { NextPage } from "next"



 const CompaniesPage : NextPage = ()=> {
    return (
        <>
            <h3>Company</h3>

            <table>
                <thead>
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                </thead>
                <tbody>
                {CompanyRows().map(v => CompanyColumns(v))}
                </tbody>
            </table>
        </>

    )
}
export default CompaniesPage