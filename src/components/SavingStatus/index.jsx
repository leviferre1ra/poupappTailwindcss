import { IconSavings } from "../icons"
import { ProgressBar } from "../ProgressBar"

export const SavingStatus = () => {
    return (
        <div className="flex flex-col gap-[40px]">
                <p className="text-secondary-income text-[20px] flex gap-[8px]  items-center justify-center leading-[125%]">
                    <IconSavings /> Economizar
                </p>
            <ProgressBar percent={50}/>
        </div>
    )
}