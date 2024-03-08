import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Pulenta Pagina de COntacto',
    description: 'si esta es otra pagina que cambiara el destino de la humandidad',
    keywords: ['luz, agua, tomate, pescado, lucesilla'],
    category: 'luces de colores'
};

export default function ContactPage() {
    return (

        <>
            <span className=" text-7xl">Contact page</span>
        </>
    )
}