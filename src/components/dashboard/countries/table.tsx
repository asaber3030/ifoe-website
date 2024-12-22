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
            <TableHead>حرر</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {countries.map((country) => (
            <TableRow key={`country-row-${country.id}`}>
              <TableCell>{country.id}</TableCell>
              <TableCell>{country.name}</TableCell>
              <TableCell className="flex gap-2">
                <UpdateCountryModal country={country} />
                <DeleteModal forceAction={deleteCountryAction} deletedId={country.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
