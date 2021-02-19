import React, { Component } from 'react'

import light from '../../asserts/images/light.svg'

const title = 'React Internship'
const sub_title = 1 + 'Входное задание в интернатуру'
const theme = (
  <p>
    <b>Тема:</b> git, node, npm, основы html css
  </p>
)
const goal = (
  <p>
    <b>Цель:</b> изучить базовые функции git, node, npm. Подготовить к
    дальнейшей работе систему. Определить уровень умения верстки.
  </p>
)
const terms_title = 'Обсуждаемый материал:'
const item_title1 = 'Что такое система контроля версий и зачем она нужна'
const item_text1 =
  'Система контроля версий — это система, записывающая изменения в файл или набор файлов в течение времени и позволяющая вернуться позже к определённой версии.'
const item_title2 = 'Git'
const item_text2_1 = (
  <li>
    <b>checkout:</b> используется для копирования файлов из истории в рабочую
    директорию. Еще можно использовать для переключения между ветками
  </li>
)
const item_text2_2 = (
  <li>
    <b>add:</b> добавляет содержимое рабочей директории в индекс (staging area)
    для последующего коммита
  </li>
)

const item_text2_3 = (
  <li>
    <b>commit:</b> берёт все данные, добавленные в индекс с помощью "git add", и
    сохраняет их слепок во внутренней базе данных, а затем сдвигает указатель
    текущей ветки на этот слепок.
  </li>
)

const item_text2_4 = (
  <li>
    <b>pull:</b> получаем изменения из удалённой ветки и сливаем их в локальный
    репозиторий последнюю версию
  </li>
)

const item_text2_5 = (
  <li>
    <b>push:</b> отправляет данные в удалённый репозиторий
  </li>
)

const item_title3 =
  'Css: стили, классы, идентификаторы, селекторы, псевдоклассы, псевдоэлементы'

const item_text3 = (
  <li>
    <b>Стили</b> представляют собой набор параметров, управляющих видом и
    положением элементов веб-страницы.
  </li>
)

class Main extends Component {
  render() {
    return (
      <main>
        <div className="page_title">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <h1>{title}</h1>
                <p className="h3 blue">{sub_title}</p>
                {theme}
                {goal}
              </div>
            </div>
          </div>
        </div>

        <div className="terms">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <p className="h3 blue center">{terms_title}</p>
                <div className="row">
                  <div className="col-lg-11 offset-lg-1">
                    <div className="terms_box">
                      <div className="item">
                        <div className="icon_box">
                          <img src={light} alt="light" />
                        </div>
                        <div className="text">
                          <p className="h4">{item_title1}</p>
                          <p>{item_text1}</p>
                        </div>
                      </div>
                      <div className="item">
                        <div className="icon_box">
                          <img src={light} alt="light" />
                        </div>
                        <div className="text">
                          <p className="h4">{item_title2}</p>
                          <ul>
                            {item_text2_1}
                            {item_text2_2}
                            {item_text2_3}
                            {item_text2_4}
                            {item_text2_5}
                          </ul>
                        </div>
                      </div>
                      <div className="item">
                        <div className="icon_box">
                          <img src={light} alt="light" />
                        </div>
                        <div className="text">
                          <p className="h4">{item_title3}</p>
                          <ul>{item_text3}</ul>
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
export default Main
