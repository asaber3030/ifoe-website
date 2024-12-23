import { Button } from "@/components/ui/button"
import { LinkBtn } from "@/components/ui/link-btn"
import { routes } from "@/lib/routes"
import { Blog } from "@/types"

import Image from "next/image"

type Props = {
  blog: Blog | undefined
}
export const LastAddedBlog = ({ blog }: Props) => {
  if (!blog) return null

  return (
    <div className="grid xl:grid-cols-3 grid-cols-1 gap-10 p-10 xl:px-24">
      <div className="relative xl:cols-span-1">
        <Image
          src={"/bg.jpg"}
          width={500}
          height={500}
          alt={"IMAGE"}
          className="rounded-md object-cover w-full"
        />
      </div>
      <div className="space-y-6 xl:col-span-2">
        <h1 className="mb-4">{blog.title}</h1>
        <p>{blog.short_text}</p>

        <div className="flex justify-end gap-2">
          <LinkBtn
            href={routes.blogs.view(blog.id)}
            className="rounded-3xl border-black"
            variant="outline"
          >
            عرض التفاصيل
          </LinkBtn>
          <LinkBtn href={routes.blogs.root} className="rounded-3xl " variant="blue">
            عرض الكل
          </LinkBtn>
        </div>
      </div>
    </div>
  )
}
