export function Header() {
    return (
        <div className="bg-[var(--pink)] text-[var(--black)]">
            <div className="flex px-6 py-8 justify-between gap-4">
                <div className="max-w-52 py-6 flex flex-col justify-between ">
                    <div className="space-y-2">
                        <h1 className="text-2xl font-semibold">
                            LUMINA NAIL DESIGN
                        </h1>
                        <p className="text-white font-bold text-sm">
                            Beleza na ponta dos dedos,
                            elegância em cada detalhe.
                        </p>
                    </div>
                    <div></div>
                    <a
                        href="/"
                        className="w-full text-center bg-[var(--black)] py-2 rounded-xl text-white font-bold text-sm"
                    >
                        Agende Já
                    </a>
                </div>
                <div className="bg-[var(--black)] w-full h-64 rounded-xl"></div>
            </div>
        </div>
    );
}
