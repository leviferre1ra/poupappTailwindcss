const Card = ({ children }) => {
    return (
        <div className="bg-neutral-surface rounded-[24px]">
            {children}
        </div>
    )
}

export const CardHeader = ({ children }) => {
    return (
        <div className="bg-neutral-header rounded-t-[24px] text-neutral-text p-[16px] text-center text-[20px] leading-[120%] font-[600]">
            {children}
        </div>
    )
}

export const CardBody = ({ children }) => {
    return (
        <div className="py-[24px] px-[16px]">
            {children}
        </div>
    )
}

Card.Header = CardHeader
Card.Body = CardBody

export default Card