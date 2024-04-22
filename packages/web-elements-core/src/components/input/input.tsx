import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'web-input',
  styleUrl: 'input.css',
  shadow: true,
})
export class WebInput {
  @Prop() placeholder: string;

  @Prop() value: string | number;

  @Prop() type: 'text' | 'number' | 'email' | 'password' = 'text';

  @Prop() name = '';

  @Prop() required = false;

  @Prop() disabled = false;

  render() {
    return (
      <div>
        <input placeholder={this.placeholder} required={this.required} disabled={this.disabled} name={this.name} type={this.type} value={this.value} />
      </div>
    );
  }
}
