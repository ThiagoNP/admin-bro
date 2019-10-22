import React, { ReactNode } from 'react'

import PropertyInEdit from '../../ui/property-in-edit'
import StyledInput from '../../ui/styled-input'
import { PropertyProps } from '../base-property-props'

export default class Edit extends React.Component<PropertyProps> {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event): void {
    const { onChange, property } = this.props
    onChange(property.name, event.target.value)
  }

  renderInput(): ReactNode {
    const { property, record } = this.props
    const value = (record.params && typeof record.params[property.name] !== 'undefined')
      ? record.params[property.name]
      : ''

    return (
      <StyledInput
        type="password"
        className="input"
        id={property.name}
        name={property.name}
        onChange={this.handleInputChange}
        value={value}
      />
    )
  }

  render(): ReactNode {
    const { property, record } = this.props
    const error = record.errors && record.errors[property.name]
    return (
      <PropertyInEdit property={property} error={error}>
        {this.renderInput()}
      </PropertyInEdit>
    )
  }
}
