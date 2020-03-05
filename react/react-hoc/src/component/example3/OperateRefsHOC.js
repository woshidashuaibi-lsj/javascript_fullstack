import React from 'react'

function HOC(WrapperComponent) {
    let inputElement = null
    function handleClick () {
        inputElement.focus()
    }

    return (props) => (
        <div>
            <WrapperComponent inputRef={(el) => { inputElement= el}} {...props} />
            <input type="Button" value="获取子组件输入框焦点" onClick={handleClick}/>
        </div>
    )
}

export default HOC