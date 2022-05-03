import { ChatTeardropDots } from 'phosphor-react';

export function Widget() {
    return (
        <div className="absolute bottom-5 right-5">
            {/* group : permet de préciser que tous les éléments de button font partie d'un groupe */}
            <button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
                <ChatTeardropDots className="w-6 h-6" />
                {/* group-hover: permet d'ajouter un hover dans cet span grâce à la propriété group mis dans button */}
                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                    <span className='pl-2'></span>
                    Feedback
                </span>
            </button>
        </div>       
    )
}