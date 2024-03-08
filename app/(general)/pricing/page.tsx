import type { Metadata } from "next";
import { Span } from "next/dist/trace";


export const metadata: Metadata = {
    title: 'Los mejores precios del planeta',
    description: 'Si aca estan los mejores precios del planeta segun luz y fer',
    robots: 'nofollow'
};


export default function PrincingPage() {
    return (
        <>
            <span className=" text-7xl">Princing page</span>
        </>
    )
}