import { Partner } from "@/types"
import { EmptyState } from "../empty-state"

type Props = {
  partners: Partner[]
}

export const HomePartnersList = ({ partners }: Props) => {
  return (
    <div className="p-10 xl:px-24">
      <h1 className="text-blue-600 my-4 mb-10">شركاء النجاح</h1>
      {partners.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid xl:grid-cols-6 gap-8 grid-cols-2">
          {partners?.map((partner) => (
            <img
              src={partner.image_url}
              key={`partner-${partner.id}`}
              width={200}
              height={200}
              className="rounded-md object-cover"
              alt={"Partner Image"}
            />
          ))}
        </div>
      )}
    </div>
  )
}
