import React, { Component } from "react";

import light from "../../asserts/images/light.svg";

class Main extends Component {

    render() {
        return (
            <main>

                <div className="page_title">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <h1>React Internship</h1>
                                <p className="h3 blue">Входное задание в интернатуру</p>
                                <p><b>Тема:</b> git, node, npm, основы html css</p>
                                <p><b>Цель:</b> изучить базовые функции git, node, npm. Подготовить к дальнейшей работе систему. Определить уровень умения верстки.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="terms">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <p className="h3 blue center">Обсуждаемый материал: </p>
                                <div className="row">
                                    <div className="col-lg-11 offset-lg-1">
                                        <div className="terms_box">
                                            <div className="item">
                                                <div className="icon_box">
                                                    <img src={light} alt="light" />
                                                </div>
                                                <div className="text">
                                                    <p className="h4">Что такое система контроля версий и зачем она нужна</p>
                                                    <p> Система контроля версий — это система, записывающая изменения в файл или набор файлов в течение времени и позволяющая вернуться позже к определённой версии. </p>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="icon_box">
                                                    <img src={light} alt="light" />
                                                </div>
                                                <div className="text">
                                                    <p className="h4">Git</p>
                                                    <ul>
                                                        <li><b>checkout:</b> используется для копирования файлов из истории в рабочую директорию. Еще можно использовать для переключения между ветками</li>
                                                        <li><b>add:</b> добавляет содержимое рабочей директории в индекс (staging area) для последующего коммита</li>
                                                        <li><b>commit:</b> берёт все данные, добавленные в индекс с помощью "git add", и сохраняет их слепок во внутренней базе данных, а затем сдвигает указатель текущей ветки на этот слепок.</li>
                                                        <li><b>pull:</b> получаем изменения из удалённой ветки и сливаем их в локальный репозиторий последнюю версию</li>
                                                        <li><b>push:</b> отправляет данные в удалённый репозиторий</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="icon_box">
                                                    <img src={light} alt="light" />
                                                </div>
                                                <div className="text">
                                                    <p className="h4">Основы ветвления и слияния </p>
                                                    <p>За создание новых веток и слияние их воедино отвечает несколько Git команд:</p>
                                                    <ul>
                                                        <li><b>git branch:</b> это своего рода "менеджер веток". Она умеет перечислять ваши ветки, создавать новые, удалять и переименовывать их.</li>
                                                        <li><b>git checkout:</b> для переключения веток и выгрузки их содержимого в рабочую директорию.</li>
                                                        <li><b>git merge:</b> для слияния одной или нескольких веток в текущую. Затем она устанавливает указатель текущей ветки на результирующий коммит.</li>
                                                        <li><b>git mergetool:</b> просто вызывает внешнюю программу слияний, в случае если у вас возникли проблемы слияния.</li>
                                                        <li><b>git log:</b> для просмотра истории коммитов, начиная с самого свежего и уходя к истокам проекта</li>
                                                        <li><b>git stash:</b> для временного сохранения всех незакоммиченных изменений для очистки рабочей директории без необходимости коммитить незавершённую работу в новую ветку.</li>
                                                        <li><b>git tag:</b> для задания постоянной метки на какой-либо момент в истории проекта. Обычно она используется для релизов.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="icon_box">
                                                    <img src={light} alt="light" />
                                                </div>
                                                <div className="text">
                                                    <p className="h4">что такое nodejs, зачем он нужен и как устанавливать</p>
                                                    <p>Node.js представляет среду выполнения кода на JavaScript, которая построена на основе движка JavaScript Chrome V8, который позволяет транслировать вызовы на языке JavaScript в машинный код. Node.js прежде всего предназначен для создания серверных приложений на языке JavaScript. Хотя также существуют проекты по написанию десктопных приложений (Electron) и даже по созданию кода для микроконтроллеров. Но прежде всего мы говорим о Node.js, как о платформе для создания веб-приложений.</p>
                                                    <p>Для загрузки перейдет на официальный сайт <a href="https://nodejs.org/en/" rel="noreferrer" target="_blank">https://nodejs.org/en/</a>. На главной странице мы сразу увидим две возможные опции для загрузки: самая последняя версия NodeJS и LTS-версия.</p>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="icon_box">
                                                    <img src={light} alt="light" />
                                                </div>
                                                <div className="text">
                                                    <p className="h4">Что такое менеджер пакетов, установка npm</p>
                                                    <p>Пакетные менеджеры упрощают использование чужого кода, предоставляя этот код в виде независимых модулей — пакетов.</p>
                                                    <p>npm (англ. Node Package Manager) — менеджер пакетов, входящий в состав Node.js.</p>
                                                    <p>Установка пакета производится при помощи команды <b>npm install</b></p>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="icon_box">
                                                    <img src={light} alt="light" />
                                                </div>
                                                <div className="text">
                                                    <p className="h4">Html: теги, структура html страницы, блочные и строчные элементы, списки, таблицы, атрибуты, текст, якоря, ссылки, w3c валидация</p>
                                                    <ul>
                                                        <li><b>HTML-теги</b> — основа языка HTML. Теги используются для разграничения начала и конца элементов в разметке.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="icon_box">
                                                    <img src={light} alt="light" />
                                                </div>
                                                <div className="text">
                                                    <p className="h4">Css: стили, классы, идентификаторы, селекторы, псевдоклассы, псевдоэлементы</p>
                                                    <ul>
                                                        <li><b>Стили</b> представляют собой набор параметров, управляющих видом и положением элементов веб-страницы.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        )
    }

}
export default Main;
