interface Props {
    id: string
    className?: string
    children: React.ReactNode
}

const SectionWrapper = ({ id, className, children } : Props) => {
    return (
        <section id={id} className={`px-4 ${className}`}>
            {children}
        </section>
    )
}

export default SectionWrapper