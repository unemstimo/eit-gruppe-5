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
        <Container>
            <Header />
            <section className='mx-4'>{children}</section>
            <Footer />
        </Container>
    )
}