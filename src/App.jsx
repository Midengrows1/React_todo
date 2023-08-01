import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import './App.css'
import { Input, Button, Task } from './components'
function App({ todos }) {
  const sortedArr = JSON.parse(localStorage.getItem('todoArr'))
  const [data, setData] = useState(sortedArr)
  const [isComplete, setisComplete] = useState(false)
  const [inputPlace, setinputplace] = useState()
  useEffect(() => {
    localStorage.setItem('todoArr', JSON.stringify(data))
  }, [data])
  const changeCompleted = (id, e) => {
    console.log("Функция сработала");
    const newData = data.map(item => {
      return item.id === id ? { ...item, completed: !item.completed } : item
    })
    setData(newData)
  }
  const addTask = (e) => {
    e.preventDefault()
    setData([{ id: data.length + 1, title: inputPlace, completed: false }, ...data])
  }
  const deleteTask = (id) => {
    const filteredArr = data.filter(item => item.id !== id)
    setData(filteredArr)
  }


  return (
    <div className="App">
      <div className="app__inner">
        <form className="todo__header">
          <Input onChange={e => setinputplace(e.target.value)}></Input>
          <Button onClick={addTask}>Добавить</Button>
        </form>
        <hr style={{ marginTop: "15px", opacity: '0.2' }} />
        <div className="todo__main">
          {data.length !== 0 ?
            data.map((item) => {
              return <Task item={item} key={item.id} changeCompleted={changeCompleted} deleteTask={deleteTask}></Task>
            })
            : <h3 className='nothing'>Добавьте задачу!</h3>
          }
        </div>
      </div>


    </div>
  )
}

export default App

App.defaultProps = {
  todos: [
    {
      userId: 1,
      id: 1,
      title: 'hello its me',
      completed: true
    }
  ]
}
