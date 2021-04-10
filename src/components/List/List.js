import React, { Component } from 'react'
class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          })
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          })
        }
      )
  }

  onDragStart = (e, index) => {
    this.draggedItem = this.state.items[index]
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/html', e.target.parentNode)
  }

  onDragOver = (index) => {
    const draggedOverItem = this.state.items[index]

    if (this.draggedItem === draggedOverItem) {
      return
    }

    let items = this.state.items.filter((item) => item !== this.draggedItem)

    items.splice(index, 0, this.draggedItem)

    this.setState({ items })
  }

  onDragEnd = () => {
    this.draggedIdx = null
  }

  render() {
    const { error, isLoaded, items } = this.state
    if (error) {
      return <div>Ошибка: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Загрузка...</div>
    } else {
      return (
        <div className="container">
          <ul>
            {items.map((item, idx) => (
              // <li key={item.id}>
              //   {item.name}
              // </li>

              <li
                key={item.id}
                draggable
                onDragOver={() => this.onDragOver(idx)}
                onDragStart={(e) => this.onDragStart(e, idx)}
                onDragEnd={this.onDragEnd}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )
    }
  }
}

export default List
