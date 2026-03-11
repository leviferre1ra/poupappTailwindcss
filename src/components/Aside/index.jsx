import logo from '../../assets/logopoupapp.svg'

export const Aside = () => {
    return (
        <aside className='bg-neutral-header max-w-[282px] min-h-screen py-[80px] px-[40px] flex flex-col gap-[56px]'>
            <img src={logo} alt="" />
            <p className='text-neutral-text text-[13px] leading-[120%] text-center'>
               Desenvolvido por Alura. Projeto fictício sem fins comerciais. 
            </p>
        </aside>
    )

}