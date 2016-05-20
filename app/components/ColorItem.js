import React, { PropTypes } from 'react'
import CustomColorPicker from './CustomColorPicker'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import VisibleColorName from '../containers/VisibleColorName'
import InterfaceTheme from './InterfaceTheme'

const ColorItem = ({color, onToggleColorPicker}) => {
  return (
    <li style={{ backgroundColor: color.color }}
      className='color'
      key={ color.id }>
      <InterfaceTheme color={ color.color }>
        <div className='color-container'>
          <VisibleColorName color={ color } />
          <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        </div>
        <div className='color-picker-icon' onClick={() => onToggleColorPicker(color)}>
          <div className='line-container'>
            <div className='line' />
            <div className='circle' />
          </div>
          <div className='line-container'>
            <div className='line' />
            <div className='circle' />
          </div>
          <div className='line-container'>
            <div className='line' />
            <div className='circle' />
          </div>
        </div>
        <ReactCSSTransitionGroup
          transitionName={ 'color-picker-animation' }
          transitionEnterTimeout={175}
          transitionLeaveTimeout={175} >
          { color.pickerActive ? <div className="popover">
            <div className="cover" onClick={() => onToggleColorPicker(color)}/>
            <CustomColorPicker color={ color.color } onChange={(newColor) => onTextChangeSubmit(color, newColor.hex.toUpperCase())}/>
          </div> : null }
        </ReactCSSTransitionGroup>
      </InterfaceTheme>
    </li>
  )
}

ColorItem.propTypes = {
  color: PropTypes.object.isRequired,
  onToggleColorPicker: PropTypes.func.isRequired
}

export default ColorItem
