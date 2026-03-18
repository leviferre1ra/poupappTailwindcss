export const ProgressBar = ({ percent }) => {
    return (
        <div className="bg-neutral-darker rounded-[8px] overflow-hidden w-full h-[40px]">

            <div className="
                    bg-primary-highlight
                    h-full
                    flex
                    justify-center
                    items-center
                    text-neutral-darker
                    text-[16px]
                    leading-[120%]
                    transition-all
                    duration-300
                    ease-in-out
                "
                style={{ width: `${percent}%` }}
            >
                {percent}%
            </div>

        </div>
    )
}