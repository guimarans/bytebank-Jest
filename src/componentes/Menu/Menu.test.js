import { render, screen } from "@testing-library/react"
import Menu from "./index.jsx"

describe('Deve renderizar', () => {
    test('um link para a página inicial', () => {
        render(<Menu />)
        const linkPaginaInicial = screen.getByText('Inicial')
        expect(linkPaginaInicial).toBeInTheDocument();
    })
    
    test('uma lista de links', () => {
        render(<Menu />)
        const listaDeLinks = screen.getAllByRole('link')
        expect(listaDeLinks).toHaveLength(4);
    })
    
    test('sem o link para Extrato', () => {
        render(<Menu />)
        const linkExtrato = screen.queryByText('Extrato')
        expect(linkExtrato).not.toBeInTheDocument()
    })
    
    test('uma lista de links com a classe link', () => {
        render(<Menu />)
        const links = screen.getAllByRole('link')
        links.forEach(link => expect(link).toHaveClass('link'))
        expect(links).toMatchSnapshot()
    })
})