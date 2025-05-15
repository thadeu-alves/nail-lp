export function Porque() {
    const motivos = [
        "✔️ Profissional especializada e atenta às tendências",
        "✔️ Ambiente aconchegante e higienizado",
        "✔️ Produtos premium e duradouros",
        "✔️ Atendimento personalizado para você se sentir única",
    ];

    return (
        <div className="bg-[var(--pink)] text-[var(--black)]">
            <div className="px-6 py-8 space-y-4">
                <h1 className="font-semibold text-xl">
                    Por que me escolher?
                </h1>
                <ul className="flex flex-col gap-2">
                    {motivos.map((motivo) => {
                        return (
                            <li
                                key={motivo}
                                className="text-white text-sm font-bold"
                            >
                                {motivo}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
