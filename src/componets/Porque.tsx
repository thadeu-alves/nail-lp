export function Porque() {
    const motivos = [
        "✔️ Profissional especializada e atenta às tendências",
        "✔️ Ambiente aconchegante e higienizado",
        "✔️ Produtos premium e duradouros",
        "✔️ Atendimento personalizado para você se sentir única",
    ];

    return (
        <div className="bg-[var(--pink)] text-[var(--black)]">
            <div className="p-8 py-10 space-y-4">
                <h1 className="font-semibold text-3xl">
                    Por que me escolher?
                </h1>
                <ul className="flex flex-col gap-2">
                    {motivos.map((motivo) => {
                        return (
                            <li
                                key={motivo}
                                className="text-white text-lg  font-bold"
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
