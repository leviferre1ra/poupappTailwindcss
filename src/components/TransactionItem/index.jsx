const formater = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })

export const TransactionItem = ({ item }) => {

    const detailAddicionalClassName = item.value >= 0 ? "text-secondary-income" : "text-secondary-expense"

    return (
        <div className="flex justify-between">
            <div className={`flex flex-col gap-[8px] text-[15px] leading-[120%] ${detailAddicionalClassName}`}>
                <p className="m-0 font-medium">{item.description}</p>
                <p className="m-0">{formater.format(item.value)}</p>
            </div>
            <div className="text-neutral-text text-[15px] leading-[120%]">
                {new Date(item.date).toLocaleDateString('pt-BR')}
            </div>
        </div>
    )
}