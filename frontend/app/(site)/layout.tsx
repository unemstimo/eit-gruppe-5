import React from 'react'
import Container from '@/components/layout/container'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'

export default function Sitelayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
    <div className="min-h-screen flexflex-col">
        <Container>
            <Header />
            <section className="mx-4 flex-1">{children}</section>
            <Footer />
        </Container>
    </div>
)
}