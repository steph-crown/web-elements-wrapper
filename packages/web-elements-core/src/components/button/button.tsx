import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'web-button',
  styleUrl: 'button.css',
  shadow: true,
})
export class WebButton {
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  @Prop() disabled: boolean = false;

  render() {
    return (
      <button type={this.type} disabled={this.disabled}>
        <slot name="before"></slot>
        main
        <slot name="after"></slot>
      </button>
    );
  }
}
