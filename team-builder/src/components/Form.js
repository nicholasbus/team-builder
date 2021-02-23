import React from 'react'

const Form = (props) => {
    const { change, submit, data } = props

    const changeData = (e) => {
        change(e)
    }

    const submitData = (e) => {
        submit(e)
    }

    return (
        <form onSubmit={submitData}>
            <label>Name:
                <input
                    name='name'
                    type='text'
                    placeholder='Name'
                    value={data.name}
                    onChange={changeData}
                />
            </label>
            <label>Email:
                <input
                    name='email'
                    type='email'
                    placeholder='email@email.com'
                    value={data.email}
                    onChange={changeData}
                />
            </label>
            <label>Role:
                <select value={data.role} name='role' onChange={changeData}>
                    <option value=''>Select</option>
                    <option value='Backend Engineer'>Backend Engineer</option>
                    <option value='Frontend Engineer'>Frontend Engineer</option>
                    <option value='Designer'>Designer</option>
                    <option value='Project Manager'>Project Manager</option>
                </select>
            </label>
            <button>submit</button>
        </form>
    )
}

export default Form