import { StaticImport } from "next/dist/shared/lib/get-img-props"

export type cardProps = {
    link: string,
    imageSrc: string | StaticImport,
    title: string,
    description: string
}