
import './App.css'
import Card from './componets/card'

function App() {

  return (
    <div className='cards'> 
      <Card
      img="https://www.kvadrat.az/uploads/articles/674b66d290fcd.jpg"
      taytl="💻frontend developer" 
      des="💬html css react"
      name="💵20000$"
      />
      <Card 
      img="https://s.dou.ua/img/announces/how-to-front-end-840.jpg"
      taytl="💻javascript" 
      des="💬dom,api"
      name="💵3000$"/>
      <Card
       img="https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg "
      taytl="💻labtop" 
      des="💬HP i7"
      name="💵222$"/>
      <Card
      img="https://t3.ftcdn.net/jpg/02/92/88/72/360_F_292887204_2wH041phSQo70eqaE9GRqFvn5MmQ4B8w.jpg "
      taytl="🏫school" 
      des="❤️ustudy"
      name="💵190$"/>
    </div>
  )
}

export default App
