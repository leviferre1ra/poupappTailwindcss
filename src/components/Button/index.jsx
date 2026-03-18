export const Button = ({ children, ...props }) => {
    return (
        <button {...props} className="bg-transparent border border-neutral-text rounded-[24px] text-neutral-text text-[16px] font-medium leading-[120%] flex items-center gap-[8px] py-[10px] px-[24px] justify-center hover:opacity-80">
            {children}
        </button>
    )
}