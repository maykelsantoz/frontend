// import React from 'react';
import React, { Component } from 'react';
import { HeaderStyles } from './styles';

// export default class Header extends Component {
// export default function Header() {
export class Header extends Component {
  // export const Header: React.FC = () => {
  render() {
    return (
      <HeaderStyles>
        <div className="container">
          <h1>
            <span role="img" aria-label="emoji-right">
              🌽
            </span>
            Node Farm
            <span role="img" aria-label="emoji-right">
              🥦
            </span>
          </h1>
        </div>
      </HeaderStyles>
    );
  }
}
