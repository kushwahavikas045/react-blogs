import React from 'react'

const InputField = ({labeltext, placeholder}) => {
    return (
        <div>
              <div class="field" style={{width:"100%"}}>
                <label>{labeltext}</label>
                <input type="text" placeholder={placeholder}/>
            </div>
        </div>
    )
}

export default InputField
