import React from 'react'
import InputField from '../components/InputField'

const Location = ({handleChange}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Locations</h4>

        <div>
            <label className="sidebar-label-container">
                <input type="radio" name="test" id="test" value='' onChange={handleChange}/>
                <span className='checkmark'></span>All
            </label>

            <InputField handleChange={handleChange} value="london" title="London" name="test" />
            <InputField handleChange={handleChange} value="seattle" title="Seattle" name="test" />
            <InputField handleChange={handleChange} value="brussels" title="Brussels" name="test" />
            <InputField handleChange={handleChange} value="boson" title="boston" name="test" />

        </div>
    </div>
  )
}

export default Location