/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react'
import CardComponent from './CardComponent';

export default function ItensRow({ cards, title, icon }) {
    // Criamos uma referência para cada cartão
    const rowRefs = useRef([]);
    const cardRefs = useRef([]);

    useEffect(() => {
        // Iniciamos o index em 0
        let currentCardIndex = 0;

        const handleKeyDown = (event) => {
            switch (event.code) {
                case 'ArrowLeft':
                    event.preventDefault();
                    // Verificamos se não estamos no primeiro cartão para não sair do intervalo
                    if (currentCardIndex > 0) {
                        currentCardIndex -= 1;
                        cardRefs.current[currentCardIndex].current.focus();
                    }
                    break;
                case 'ArrowRight':
                    event.preventDefault();
                    // Verificamos se não estamos no último cartão para não sair do intervalo
                    if (currentCardIndex < cardRefs.current.length - 1) {
                        currentCardIndex += 1;
                        cardRefs.current[currentCardIndex].current.focus();
                    }
                    break;
                case 'Enter':
                    // Aqui você pode adicionar o comportamento para o Enter
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        // Limpar o evento quando o componente for desmontado
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="flex flex-row justify-center align-center">
            <div className="flex flex-col justify-center w-36 h-36 mr-20 mt-20 gap-5">
                <img className="w-full" src={icon} />
                <p className="text-2xl text-center text-white">{title}</p>
            </div>
            <div className="flex flex-row items-center align-center justify-center text-white h-full rounded w-11/12 cursor-pointer">
                {cards.map((card, index) => (
                    <CardComponent key={index} icon={card.icon} ref={cardRefs.current[index]} />
                ))}
            </div>
        </div>
    )
}
