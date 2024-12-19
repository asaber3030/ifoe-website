import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"

import { Country } from "@/types"
import { UpdateCountryModal } from "./update-modal"
import { DeleteModal } from "../delete-modal"
import { deleteCountryAction } from "@/actions/countries"

type Props = {
  countries: Country[]
}

export function CountriesTable({ countries }: Props) {
  return (
    <div className="mt-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>رقم التعريف</TableHead>
            <TableHead>الاسم</TableHead>
            <TableHead>عدد الخدمات</TableHead>
            <TableHead>حرر</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {countries.map((country) => (
            <TableRow key={`country-row-${country.countryId}`}>
              <TableCell>{country.countryId}</TableCell>
              <TableCell>{country.countryName}</TableCell>
              <TableCell>{country.franchises.length} خدمة</TableCell>
              <TableCell className="flex gap-2">
                <UpdateCountryModal country={country} />
                <DeleteModal forceAction={deleteCountryAction} deletedId={country.countryId} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
