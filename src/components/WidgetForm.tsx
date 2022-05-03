export function WidgetForm() {
    return (
        // w-[calc(100vw-2rem)] md:w-auto : aide à la responsivité de la page, si taille de l'écran à partir de médium laisser la taille auto sinon laisser une marge de 2rem
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Laisse ton feedback ici</span>
            </header>

            <p>Hello World</p>

            <footer className="text-xs text-neutral-400">
                Fait par <a className="underline underline-offset-2" href="https://rpcketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    );
}