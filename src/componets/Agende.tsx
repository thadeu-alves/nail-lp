export function Agende() {
    return (
        <div className="">
            <div className="p-8 py-10 flex flex-col gap-4">
                <h1 className="font-semibold text-3xl">
                    Agende seu Horário
                </h1>
                <p className="text-[var(--pink)] text-md font-bold">
                    Sua beleza merece um cuidado especial.
                    Agende agora e descubra o poder de unhas
                    bem feitas!
                </p>
                <a
                    href="/"
                    className="w-full text-center bg-[var(--black)] py-3 rounded-xl text-white font-bold text-md flex justify-center items-center gap-2 mt-2"
                >
                    Me chama no WhatsApp
                    <img
                        src="/whats.svg"
                        alt="whats icon"
                    />
                </a>
            </div>
        </div>
    );
}
