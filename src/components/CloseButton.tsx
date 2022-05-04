import { Popover } from '@headlessui/react';
import { X } from 'phosphor-react';

export function CloseButton() {
    return (
        // Popover.Button nous permet d'ouvrir le widget s'il est fermé et de le fermer s'il est ouvert, dans ce cas au clique sur le Popover il va le fermer
        <Popover.Button className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100" title="Fermer formulaire de feedback">
            <X weight="bold" className='w-4 h-4 '/>
        </Popover.Button>
    );
}