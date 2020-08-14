import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/36245046?s=460&v=4" alt="Vinicius Pascucci"></img>
                        <div>
                            <strong>Vinicius Pascucci</strong>
                            <span>Orientação a objetos ( Java )</span>
                        </div>
                    </header>

                    <p>
                        Formado em Analise de Sistemas pela Universidade Paulista , mais de 10 anos ministrando os cursos de programação e tambem como desenvolvimento web
                        <br />
                        mAIS DE 200 pessoas foram alunos meus, tambem leciono em alguams faculdade federais e aulas particulares.
                    </p>
                    
                    <footer>
                        <p>
                            Preço/Hora:
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="WhatsApp" />
                            Entrar em Contato
                        </button>
                    </footer>
                </article>
    );
}

export default TeacherItem;