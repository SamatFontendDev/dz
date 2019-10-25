import React from 'react'
import '../Form/Form.css'

const Error = ({hasError}) => {
    if (hasError) {
        return <span>Заполните поле</span>
    }

    return null
}

export default Error