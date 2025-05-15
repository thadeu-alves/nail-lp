export function Servicos() {
    const services = [
        { title: "Serviço", imgUrl: "/service.svg" },
        { title: "Serviço", imgUrl: "/service.svg" },
        { title: "Serviço", imgUrl: "/service.svg" },
        { title: "Serviço", imgUrl: "/service.svg" },
        { title: "Serviço", imgUrl: "/service.svg" },
        { title: "Serviço", imgUrl: "/service.svg" },
    ];
    return (
        <div className="">
            <div className="px-6 py-8 space-y-4">
                <h1 className="font-semibold text-xl">
                    Serviços
                </h1>
                <div className="grid grid-cols-3 gap-4">
                    {services.map((service) => {
                        return (
                            <div className="bg-[var(--pink)] flex flex-col p-4 items-center text-white rounded-xl">
                                <img
                                    src={service.imgUrl}
                                    alt={service.title}
                                    className="w-20"
                                />
                                <p className="font-bold text-sm ">
                                    {service.title}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
