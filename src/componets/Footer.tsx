export function Footer() {
    return (
        <footer className="bg-[var(--pink)]">
            <div className="container text-center bg-[var(--pink)] space-y-4 py-8 text-black mx-auto">
                <p>
                    © 2024 [Seu Nome]. Todos os direitos
                    reservados.
                </p>

                <p className="text-neutral-500">
                    Desenvolvido por{" "}
                    <a
                        href="https://thadeualves.vercel.app"
                        className="text-white"
                    >
                        Thadeu Alves
                    </a>
                </p>
            </div>
        </footer>
    );
}
