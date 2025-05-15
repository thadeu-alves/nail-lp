export function Header() {
    return (
        <div className="bg-[var(--pink)] text-[var(--black)]">
            <div className="flex flex-col px-14 py-8 justify-between items-center gap-8">
                <div className="bg-[var(--black)] w-32 h-32 rounded-full"></div>
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-semibold">
                        LUMINA NAIL DESIGN
                    </h1>
                    <p className="text-white font-bold">
                        Beleza na ponta dos dedos, elegância
                        em cada detalhe.
                    </p>
                </div>
                <a
                    href="/"
                    className="w-full text-center bg-[var(--black)] py-2 rounded-xl text-white font-bold"
                >
                    Conheça
                </a>
                <div className="flex gap-4">
                    <img
                        className="w-8"
                        src="/insta.svg"
                        alt="insta icon"
                    />
                    <img
                        className="w-8"
                        src="/tik.svg"
                        alt="tik icon"
                    />
                </div>
            </div>
        </div>
    );
}
