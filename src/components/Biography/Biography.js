import React, { Component } from 'react'

class Biography extends Component {
  state = {
    tableInfo: {
      0: { year: '1995', info: 'HTML 3.0', id: '1' },
      1: { year: '2017', info: 'HTML 5.2', id: '2' },
      2: { year: '1997', info: 'HTML 4.0', id: '3' },
      3: { year: '1999', info: 'HTML 4.01', id: '4' },
      4: { year: '2015', info: 'HTML 5.1', id: '6' },
      5: { year: '2014', info: 'HTML 5.0', id: '5' },
      6: { year: '1997', info: 'HTML 3.2', id: '7' },
    },
    sorted: false,
  }

  addInfo = () => {
    const defaultInfo = {
      year: new Date().getFullYear(),
      info: '"Lorem ipsum dolor sit amet',
      id: Math.random(),
    }
    let ThisTable = { ...this.state.tableInfo }
    let length = Object.keys(ThisTable).length
    ThisTable[length] = defaultInfo
    this.setState({
      tableInfo: ThisTable,
    })
    console.log('add', defaultInfo)
  }

  deleteInfo = (index) => {
    let ThisTable = this.state.tableInfo
    console.log('deleted', ThisTable[index])
    delete ThisTable[index]
    this.setState({
      tableInfo: ThisTable,
    })
  }

  deleteLast = () => {
    let ThisTable = this.state.tableInfo
    let length = Object.keys(ThisTable).length
    console.log('deleted', ThisTable[length - 1])
    delete ThisTable[length - 1]
    this.setState({ tableInfo: ThisTable })
  }

  onSort = () => {
    let sortedArr
    let newObj = {}
    const ThisTable = this.state.tableInfo
    const keys = Object.keys(ThisTable)
    console.log(ThisTable)
    if (this.state.sorted) {
      sortedArr = keys.sort((a, b) => ThisTable[b].year - ThisTable[a].year)
    } else {
      sortedArr = keys.sort((a, b) => ThisTable[a].year - ThisTable[b].year)
    }
    newObj = sortedArr.map((key) => ThisTable[key])
    this.setState({
      tableInfo: newObj,
      sorted: !this.state.sorted,
    })
    console.log('sorted', newObj)
  }

  //    пузырьком
  onSortJS = () => {
    const ThisTable = this.state.tableInfo
    const length = Object.keys(ThisTable).length
    for (let i = 0; i < length - 1; i += 1) {
      let firstObj = i
      for (let j = i + 1; j < length; j += 1) {
        if (this.state.sorted) {
          if (ThisTable[j].year > ThisTable[firstObj].year) {
            firstObj = j
          }
        } else if (ThisTable[j].year < ThisTable[firstObj].year) {
          firstObj = j
        }
      }
      const element = ThisTable[firstObj]
      ThisTable[firstObj] = ThisTable[i]
      ThisTable[i] = element
    }
    console.log('', ThisTable)
    this.setState({
      tableInfo: ThisTable,
      sorted: !this.state.sorted,
    })
  }

  renderTable(data) {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th onClick={this.onSort}>Year</th>
              <th onClick={this.onSort}>Event</th>
              <th></th>
            </tr>
            {Object.entries(data).map(([index, item]) => (
              <tr
                key={item.id}
                draggable={true}
                onDragStart={this.dragStart}
                onDragOver={this.dragOver}
              >
                <td className="date">{item.year}</td>
                <td className="event">{item.info}</td>
                <td>
                  <button
                    className="btn1 delete_btn"
                    onClick={this.deleteInfo.bind(this, index)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  render() {
    return (
      <div className="table_section">
        <div className="container">
          <p className="h2">3 урок</p>
          <div className="btn_box">
            <button className="btn1" onClick={this.addInfo}>
              add
            </button>
            <button className="btn1" onClick={this.deleteLast}>
              delete Last
            </button>
            <button className="btn1" onClick={this.onSort}>
              sort
            </button>
            <button className="btn1" onClick={this.onSortJS}>
              onSortJS
            </button>
          </div>
          {this.renderTable(this.state.tableInfo)}
        </div>
      </div>
    )
  }
}
export default Biography
