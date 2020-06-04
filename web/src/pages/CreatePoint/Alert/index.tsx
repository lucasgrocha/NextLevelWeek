import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'

import './styles.css'
import 'animate.css'

const alert = () => {
  return (
    <div className='alert_backdrop animate__animated animate__fadeIn'>
      <div className='items'>
        <FiCheckCircle />
        <h1>Cadastro Concluído!</h1>
      </div>
    </div>
  )
}

export default alert